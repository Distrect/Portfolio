import {
  bootstrapApplication,
  platformBrowser,
} from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { enableProdMode } from '@angular/core';

enableProdMode();

bootstrapApplication(AppComponent, { providers: [] }).catch((err) =>
  console.error(err)
);
