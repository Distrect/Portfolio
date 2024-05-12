export type AccentColors = {
  red: '#ff1900';
  green: '#00b253';
  blue: '#005aff';
  orange: '#ff5100';
  purple: '#4600ff';
  brown: '#b5651d';
};

export const Accents: AccentColors = {
  red: '#ff1900',
  green: '#00b253',
  blue: '#005aff',
  orange: '#ff5100',
  purple: '#4600ff',
  brown: '#b5651d',
};

export enum AccentColorsEnum {
  RED = '#ff1900',
  GREEN = '#00B253',
  BLUE = '#005AFF',
  ORANGE = '#FF5100',
  PURPLE = '#4600FF',
  BROWN = '#B5651D',
}

export type AccentColorsName = keyof AccentColors;
export type AccentColorsHex = AccentColors[keyof AccentColors];
export type AccentColorGen<T extends AccentColorsName> = AccentColors[T];
