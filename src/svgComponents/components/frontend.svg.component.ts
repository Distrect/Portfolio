import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ISVGComponent } from '../base.svg.component';
import {
  AccentColorsHex,
  AccentColorsName,
  Accents,
} from '../../shared/interface';

@Component({
  selector: 'svg[frontend]',
  standalone: true,
  templateUrl: '../../assets/svg/frontend.svg',
  styleUrls: ['../../styles.scss', '../svg.component.style.scss'],
})
export class FrontendSVGComponent implements ISVGComponent, OnChanges {
  public readonly svgName: string = 'frontend';
  public fillColor: AccentColorsHex | string | undefined = undefined;

  @Input()
  public fill!: AccentColorsName | 'dynamic';

  public ngOnChanges(changes: SimpleChanges): void {
    if (changes['fill'] !== undefined) {
      const { currentValue } = changes['fill'];

      if (currentValue !== 'dynamic') {
        this.fill = currentValue;
        this.fillColor = Accents[this.fill as AccentColorsName];
      } else {
        this.fill = currentValue;
        this.fillColor = '$selected-color)';
      }
    }
  }
}
