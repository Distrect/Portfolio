import {
  Component,
  EventEmitter,
  HostBinding,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
  Type,
  booleanAttribute,
} from '@angular/core';
import { ButtonDirective } from './button.directive';
import { CommonModule, NgComponentOutlet } from '@angular/common';
import { AllSVGComponents, svgNames } from '../../../svgComponents/components';
import { AccentColorsEnum, AccentColorsName } from '../../interface';
import { ISVGInps } from '../../../svgComponents/base.svg.component';

@Component({
  standalone: true,
  selector: 'uibutton',
  templateUrl: './button.ui.template.html',
  imports: [ButtonDirective, CommonModule, NgComponentOutlet],
})
export class Button implements OnInit, OnChanges {
  @Input('iconName') public iconName?: svgNames;

  @Input('customClass') public customClass: string = '';

  @Input({ alias: 'disabled', transform: booleanAttribute })
  public disabled: boolean = false;

  @Input({ alias: 'outlined', transform: booleanAttribute })
  public outlined: boolean = false;

  public svgComponent: Type<any> | null = null;
  public svgInputs: ISVGInps = { fill: 'dynamic' };

  public class: Record<string, boolean> = {
    outlined: false,
    dynamic: false,
  };

  @HostBinding('class')
  public get classes() {
    return Object.entries(this.class)
      .map(([key, val]) => (val ? key : ''))
      .join(' ');
  }
  @HostBinding('attr.data-button-type')
  @Input('buttonType')
  public buttonType: 'dynamic' | AccentColorsName = 'dynamic';

  @Output() public clickEvet: EventEmitter<MouseEvent> =
    new EventEmitter<MouseEvent>();

  constructor() {}

  public ngOnChanges(changes: SimpleChanges): void {
    if (changes['iconName'] !== undefined) {
      const { currentValue } = changes['iconName'];
      this.iconName = currentValue as svgNames;
      this.svgComponent = AllSVGComponents[this.iconName];
    }

    if (changes['outlined'] !== undefined) {
      this.class['outlined'] = changes['outlined'].currentValue;
    }

    if (changes['buttonType'] !== undefined) {
      const { currentValue } = changes['buttonType'];
      this.buttonType = currentValue;
    }
  }

  public onClick(event: MouseEvent) {
    this.clickEvet.emit(event);
  }

  public ngOnInit() {}
}
