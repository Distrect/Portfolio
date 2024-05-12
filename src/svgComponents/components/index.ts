import { BackendSVGComponent } from './backend.svg.component';
import { FrontendSVGComponent } from './frontend.svg.component';
import { LogoSvgComponent } from './logo.svg.component';
import { SendSVGComponent } from './send.svg.component';
import { UiSVGComponent } from './ui.svg.component';
import { DatabaseSVGComponent } from './database.svg.component';
import { Type } from '@angular/core';

export const allSvgs = [
  BackendSVGComponent,
  FrontendSVGComponent,
  LogoSvgComponent,
  SendSVGComponent,
  UiSVGComponent,
  DatabaseSVGComponent,
];

export type AllSVGs = {
  backend: BackendSVGComponent;
  frontend: FrontendSVGComponent;
  logo: LogoSvgComponent;
  send: SendSVGComponent;
  ui: UiSVGComponent;
  database: DatabaseSVGComponent;
};

export const AllSVGComponents = {
  backend: BackendSVGComponent,
  frontend: FrontendSVGComponent,
  logo: LogoSvgComponent,
  send: SendSVGComponent,
  ui: UiSVGComponent,
  database: DatabaseSVGComponent,
};

export type svgNames = keyof AllSVGs;
