import { Injectable } from '@angular/core';
import { allSvgs } from './components';

@Injectable()
export class SVGService {
  private allComponents = allSvgs;

  constructor() {}
}
