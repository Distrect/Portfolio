import { DataService } from './../../../service/data.service';
import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Observable, fromEvent } from 'rxjs';
import { AvailableLanguages } from '../../shared.interface';
import { Store } from '@ngrx/store';
import { languageSelector } from '../../../store/selector';
import { LanguageActions } from '../../../store/actions';
import { LanguageaState } from '../../../store/reducers';

interface LanguageSelection {
  value: AvailableLanguages;
  language: string;
}

@Component({
  selector: 'nav[navigation]',
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss',
})
export class NavigationBar implements OnInit, AfterViewInit {
  @ViewChild('downloadBtn', { static: true }) downloadBtn!: ElementRef;

  private language$: Observable<AvailableLanguages>;

  public languageList: LanguageSelection[];

  public downloadBtnEvent!: Observable<Event>;
  public dropdownElement!: HTMLUListElement;

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

  public ngAfterViewInit(): void {}

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
