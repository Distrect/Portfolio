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

  public availableLanguages: LanguageSelection[] = [
    { value: 'en', language: 'English' },
    { value: 'tr', language: 'Turkish' },
  ];

  public downloadBtnEvent!: Observable<Event>;
  public dropdownElement!: HTMLUListElement;

  constructor(
    private translateService: TranslateService,
    private dataService: DataService
  ) {}

  public ngOnInit(): void {
    this.downloadBtnEvent = fromEvent(this.downloadBtn.nativeElement, 'click');
    this.downloadBtnEvent.subscribe(this.downloadFile);
  }

  public ngAfterViewInit(): void {}

  public downloadFile() {
    const anchor = document.createElement('a');
    anchor.href = 'assets/cv/cv.pdf';
    anchor.download = 'samet-saricicek_cv.pdf';
    anchor.style.visibility = 'hidden';
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
  }

  public changeLanguage(event: MouseEvent) {
    if (!(event.target instanceof Element)) return;
    const selectedLanguage = event.target.getAttribute('value');

    if (selectedLanguage === null) return;

    this.translateService.use(selectedLanguage).subscribe(() => {
      this.dataService.personalData.currentLanguage =
        selectedLanguage as AvailableLanguages;
    });
  }
}
