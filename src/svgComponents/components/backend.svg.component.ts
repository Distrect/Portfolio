import {
  AccentColorGen,
  AccentColorsHex,
  Accents,
} from './../../shared/interface';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ISVGComponent } from '../base.svg.component';
import { AccentColorsName } from '../../shared/interface';

@Component({
  selector: 'svg[backend]',
  standalone: true,
  templateUrl: '../../assets/svg/backend.svg',
  styleUrls: ['../../styles.scss', '../svg.component.style.scss'],
})
export class BackendSVGComponent implements ISVGComponent, OnChanges {
  public readonly svgName: string = 'backend';
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
