import { LanguageaState, initialState } from './../store/reducers';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';

import { languageSelector, selectLanguage } from '../store/selector';
import { LanguageActions } from '../store/actions';
import { Observable, interval } from 'rxjs';
import { AvailableLanguages } from '../shared/shared.interface';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['/src/style/main.style.scss', './app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'Samet';

  private language$: Observable<AvailableLanguages>;

  constructor(
    private translateService: TranslateService,
    private dataService: DataService,
    private store: Store
  ) {
    this.translateService.addLangs(['en', 'tr']);
    this.translateService.setDefaultLang(initialState.currentLanguage);
    this.translateService.use(initialState.currentLanguage);

    this.language$ = this.store.select(languageSelector);
  }
  public ngOnInit(): void {
    this.language$.subscribe((arg) => {
      console.log('App language', arg);
      this.translateService.use(arg);
      this.dataService.personalData.currentLanguage = arg;
    });
  }
}
