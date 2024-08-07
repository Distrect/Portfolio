import { enableProdMode } from '@angular/core';
import { PortfolioApp } from './app/app.module';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

enableProdMode();
platformBrowserDynamic()
  .bootstrapModule(PortfolioApp)
  .then(() => console.log('Application has been initalized'))
  .catch(console.error);

console.log('Greetings to you fellow developer');
