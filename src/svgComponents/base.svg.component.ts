import { AccentColorsName } from '../shared/interface';

export interface ISVGComponent {
  svgName: string;
  fill: AccentColorsName | 'dynamic';
}

export interface ISVGInputs {
  fill: AccentColorsName | 'dynamic';
}

export type ISVGInps = {
  fill: AccentColorsName | 'dynamic';
};

export default class BaseSVG {}
