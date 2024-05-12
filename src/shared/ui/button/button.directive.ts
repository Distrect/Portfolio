import {
  Directive,
  ElementRef,
  HostBinding,
  Input,
  OnChanges,
  SimpleChanges,
  booleanAttribute,
} from '@angular/core';
import { AccentColorsEnum, AccentColorsName } from '../../interface';

@Directive({ selector: '[button-directives]', standalone: true })
export class ButtonDirective implements OnChanges {
  @Input({ alias: 'outlined', transform: booleanAttribute })
  public outlined: boolean = false;

  @Input('buttonType') public buttonType: 'dynamic' | AccentColorsName =
    'dynamic';

  @HostBinding('style.color') public fontColor!:
    | 'dynamic'
    | AccentColorsEnum
    | string;

  @HostBinding('style.backgroundColor') public backgroundColor!: string;

  @HostBinding('style.borderColor') public borderColor!: string;

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

  constructor(private el: ElementRef) {
    console.log(this.buttonType);
  }

  public ngOnChanges(changes: SimpleChanges): void {
    console.log('Directive chganges', changes);
    if (changes['outlined'] !== undefined) {
      this.class['outlined'] = changes['outlined'].currentValue;
    }

    if (changes['buttonType'] !== undefined) {
      const { currentValue } = changes['buttonType'];

      if (currentValue === 'dynamic') {
        this.class['dynamic'] = true;
      } else {
        this.fontColor = 'var(--white)';
        this.backgroundColor = currentValue;
        this.borderColor = currentValue;
      }
    }
  }
}
