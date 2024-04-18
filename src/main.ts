import {
  bootstrapApplication,
  platformBrowser,
} from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { enableProdMode } from '@angular/core';
import ThemeColorStateService from './shared/stateManagement/themeColor.state.service';
import { IntersectionObserverService } from './service/intersection-observer.service';

enableProdMode();

bootstrapApplication(AppComponent, {
  providers: [ThemeColorStateService, IntersectionObserverService],
}).catch((err) => console.error(err));
