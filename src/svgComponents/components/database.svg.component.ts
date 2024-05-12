import { Component, OnChanges, SimpleChanges, Input } from '@angular/core';
import { ISVGComponent } from '../base.svg.component';
import {
  AccentColorsHex,
  AccentColorsName,
  Accents,
} from '../../shared/interface';

@Component({
  selector: 'svg[database]',
  standalone: true,
  templateUrl: '../../assets/svg/database.svg',
  styleUrls: ['../../styles.scss', '../svg.component.style.scss'],
})
export class DatabaseSVGComponent implements ISVGComponent, OnChanges {
  public readonly svgName: string = 'database';
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
