import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { enableProdMode } from '@angular/core';

enableProdMode();

bootstrapApplication(AppComponent).catch((err) => console.error(err));

console.log('App has been initialized');
