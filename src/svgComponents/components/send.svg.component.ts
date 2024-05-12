import { ISVGComponent } from './../base.svg.component';
import {
  Component,
  Input,
  OnInit,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import {
  AccentColorsHex,
  AccentColorsName,
  Accents,
} from '../../shared/interface';

@Component({
  standalone: true,
  selector: 'svg[send]',
  templateUrl: '../../assets/svg/send.svg',
  styleUrls: ['../../styles.scss', '../svg.component.style.scss'],
})
export class SendSVGComponent implements ISVGComponent, OnChanges {
  public readonly svgName: string = 'send';
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
