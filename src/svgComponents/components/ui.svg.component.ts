import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import {
  AccentColorsHex,
  AccentColorsName,
  Accents,
} from '../../shared/interface';
import { ISVGComponent } from '../base.svg.component';

@Component({
  selector: 'svg[ui]',
  standalone: true,
  templateUrl: '../../assets/svg/ui.svg',
  styleUrls: ['../../styles.scss', '../svg.component.style.scss'],
})
export class UiSVGComponent implements ISVGComponent, OnChanges {
  public readonly svgName: string = 'ui';
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
