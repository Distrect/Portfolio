import { createActionGroup, props } from '@ngrx/store';
import { AvailableLanguages } from '../shared/shared.interface';

export const LanguageActions = createActionGroup({
  source: 'Language',
  events: {
    'Change Language': props<{ selectedLanguage: AvailableLanguages }>(),
  },
});
