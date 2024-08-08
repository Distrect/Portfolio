import { Injectable } from '@angular/core';
import Person from '../shared/personal.info';
import { AvailableLanguages } from '../shared/shared.interface';

interface LanguageSelection {
  value: AvailableLanguages;
  language: string;
}

@Injectable({ providedIn: 'root' })
export class DataService {
  public personalData: Person = Person.getInstance();
  public currentLanguage: AvailableLanguages = 'en';
  public availableLanguages: Record<AvailableLanguages, LanguageSelection[]> = {
    en: [
      { value: 'en', language: 'English' },
      { value: 'tr', language: 'Turkish' },
    ],
    tr: [
      { value: 'en', language: 'İngilizce' },
      { value: 'tr', language: 'Türkçe' },
    ],
  };

  constructor() {}
}
