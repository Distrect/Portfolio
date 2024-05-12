import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export default class ThemeColorStateService {
  private canUsbale: boolean = false;
  private currentColor: string = '';

  private rootEl: HTMLElement | null = document.querySelector(':root');
  private readonly selectedColorVariable = '--selected';
  private readonly borderColorVariable = '--area-item-border-color';

  public readonly themeColors: string[] = [
    '#ff1900',
    '#00b253',
    '#005aff',
    '#ff5100',
    '#4600ff',
    '#b5651d',
  ];

  constructor() {
    console.log(this.rootEl?.style.getPropertyValue('--selected'));
  }

  private hexToRGBA(hex: string, opacity: number = 1) {
    const splitted = hex
      .substring(1)
      .match(/.{2}/g)
      ?.map((val) => parseInt(val, 16));

    return `rgba(${splitted?.join(', ')}, ${opacity})`;
  }

  private setCSSVariable() {
    this.rootEl?.style.setProperty(
      this.selectedColorVariable,
      this.currentColor
    );

    this.rootEl?.style.setProperty(
      this.borderColorVariable,
      this.hexToRGBA(this.currentColor, 0.7)
    );
  }

  set loaded(loaded: boolean) {
    this.canUsbale = loaded;
  }

  get loaded() {
    return this.canUsbale;
  }

  set color(newColor: string) {
    this.currentColor = newColor;
    this.setCSSVariable();
  }

  get color() {
    return this.currentColor;
  }
}
