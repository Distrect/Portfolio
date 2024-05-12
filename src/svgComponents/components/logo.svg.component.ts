import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { ISVGComponent } from '../base.svg.component';
import {
  AccentColorsHex,
  AccentColorsName,
  Accents,
} from '../../shared/interface';

@Component({
  selector: 'svg[logo]',
  standalone: true,
  templateUrl: '../../assets/svg/logo.svg',
  styleUrls: ['../../styles.scss', '../svg.component.style.scss'],
})
export class LogoSvgComponent implements ISVGComponent, OnChanges {
  public readonly svgName: string = 'logo ';
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
        this.fillColor = 'var(--selected-color)';
      }
    }
  }
}
