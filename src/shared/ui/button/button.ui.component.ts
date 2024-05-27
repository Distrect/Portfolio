import { ISVGInps } from './../../../svgComponents/base.svg.component';
import { AccentColorsName } from './../../interface';
import {
  Component,
  EventEmitter,
  HostBinding,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
  TemplateRef,
  Type,
  ViewChild,
  booleanAttribute,
} from '@angular/core';
import { ButtonDirective } from './button.directive';
import { CommonModule, NgComponentOutlet } from '@angular/common';
import { AllSVGComponents, svgNames } from '../../../svgComponents/components';

@Component({
  standalone: true,
  selector: 'uibutton',
  templateUrl: './button.ui.template.html',
  imports: [ButtonDirective, CommonModule, NgComponentOutlet],
})
export class Button implements OnInit, OnChanges {
  @ViewChild('anchorTemplate')
  anchorTemplate!: TemplateRef<any>;

  @ViewChild('buttonTemplate')
  buttonTemplate!: TemplateRef<any>;

  @Input('text') text?: string;

  @Input('iconName') public iconName?: svgNames;

  @Input('customClass') public customClass: string = '';

  @Input({ alias: 'disabled', transform: booleanAttribute })
  public disabled: boolean = false;

  @Input({ alias: 'outlined', transform: booleanAttribute })
  public outlined: boolean = false;

  @Input('link') link?: string;

  @Input('download') download?: string;

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

  constructor() {
    console.log(this.anchorTemplate);
  }

  public ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
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

  public ngOnInit() {
    if (this.download && !this.link)
      throw Error('You should insert link parameter to use download property');
  }

  private goToLink() {
    const anchorEL = document.createElement('a');
    anchorEL.href = this.link as string;
    anchorEL.click();
  }

  private downloadFİle() {
    const anchorEL = document.createElement('a');
    anchorEL.href = this.link as string;
    anchorEL.download = this.download as string;
    anchorEL.click();
  }
}
