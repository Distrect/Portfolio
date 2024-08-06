import { LanguageaState, initialState } from './../store/reducers';
import { AfterViewInit, Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';

import { languageSelector, selectLanguage } from '../store/selector';
import { LanguageActions } from '../store/actions';
import { interval } from 'rxjs';
import { AvailableLanguages } from '../shared/shared.interface';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['/src/style/main.style.scss', './app.component.scss'],
})
export class AppComponent {
  title = 'portfolio';

  constructor(
    private translateService: TranslateService,
    private store: Store<LanguageaState>
  ) {
    this.translateService.addLangs(['en', 'tr']);
    this.translateService.setDefaultLang(initialState.currentLanguage);
    this.translateService.use(initialState.currentLanguage);
  }
}
