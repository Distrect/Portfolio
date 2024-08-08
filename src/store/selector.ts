import { createFeatureSelector, createSelector } from '@ngrx/store';

import { LanguageaState } from './reducers';

export const selectLanguage =
  createFeatureSelector<LanguageaState>('languagex');
export const languageSelector = createSelector(
  selectLanguage,
  (state) => state.currentLanguage
);
