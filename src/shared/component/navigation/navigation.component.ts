import { DataService } from './../../../service/data.service';
import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Observable, fromEvent } from 'rxjs';
import { AvailableLanguages } from '../../shared.interface';
import { Store } from '@ngrx/store';
import { languageSelector } from '../../../store/selector';
import { LanguageActions } from '../../../store/actions';

interface LanguageSelection {
  value: AvailableLanguages;
  language: string;
}

@Component({
  selector: 'nav[navigation]',
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss',
})
export class NavigationBar implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('downloadBtn', { static: true }) downloadBtn!: ElementRef;

  public languageList: LanguageSelection[];
  public downloadBtnEvent!: Observable<Event>;
  public dropdownElement!: HTMLUListElement;
  private language$: Observable<AvailableLanguages>;
  private lastIntersectedElement: Element | null = null;
  private sectionObserver = new IntersectionObserver(this.intersection, {
    threshold: 0.15,
  });

  constructor(public dataService: DataService, private store: Store) {
    this.language$ = this.store.select(languageSelector);
    this.languageList = this.dataService.availableLanguages.en;
  }

  public ngOnInit(): void {
    this.downloadBtnEvent = fromEvent(this.downloadBtn.nativeElement, 'click');
    this.downloadBtnEvent.subscribe(this.downloadFile);
    this.language$.subscribe((arg) => {
      this.languageList = this.dataService.availableLanguages[arg];
    });
  }

  public ngAfterViewInit(): void {
    document
      .querySelectorAll('section[data-intersect]')
      .forEach((el) => this.sectionObserver.observe(el));
  }

  public ngOnDestroy(): void {
    this.sectionObserver.disconnect();
  }
  private intersection(
    entries: IntersectionObserverEntry[],
    observer: IntersectionObserver
  ) {
    for (const entry of entries) {
      if (!(entry.target instanceof HTMLElement)) return;
      const { target, isIntersecting } = entry;

      if (isIntersecting) {
        if (this.lastIntersectedElement !== null)
          this.lastIntersectedElement?.classList.remove('intersected');

        const navItem = document.querySelector(
          `.nav-item[data-intersected='${target.dataset['intersect']}']`
        );
        navItem?.classList.add('intersected');
        this.lastIntersectedElement = navItem;
      } else {
        const navItem = document.querySelector(
          `.nav-item[data-intersected='${target.dataset['intersect']}']`
        );
        navItem?.classList.remove('intersected');
      }
    }
  }

  public downloadFile() {
    const anchor = document.createElement('a');
    anchor.style.visibility = 'hidden';
    anchor.href = 'assets/cv/cv.pdf';
    anchor.download = 'samet-saricicek_cv.pdf';
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
  }

  public changeLanguage(event: MouseEvent) {
    if (!(event.target instanceof Element)) return;
    const selectedLanguage = event.target.getAttribute(
      'value'
    ) as AvailableLanguages;

    if (selectedLanguage === null) return;

    this.store.dispatch(LanguageActions.changeLanguage({ selectedLanguage }));
  }
}
