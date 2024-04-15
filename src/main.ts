import {
  bootstrapApplication,
  platformBrowser,
} from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { enableProdMode } from '@angular/core';
import ThemeColorStateService from './shared/stateManagement/themeColor.state.service';

enableProdMode();

bootstrapApplication(AppComponent, {
  providers: [ThemeColorStateService],
}).catch((err) => console.error(err));
