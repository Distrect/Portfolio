import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { enableProdMode } from '@angular/core';
import { PortfolioApp } from './app/app.module';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

enableProdMode();

// bootstrapApplication(PortfolioApp).catch((err) => console.error(err));

console.log('App has been initialized');

platformBrowserDynamic().bootstrapModule(PortfolioApp).catch(console.error);
