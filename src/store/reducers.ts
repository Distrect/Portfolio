import { AvailableLanguages } from './../shared/shared.interface';
import { createReducer, on } from '@ngrx/store';
import { LanguageActions } from './actions';

export interface LanguageaState {
  currentLanguage: AvailableLanguages;
}

export const initialState: LanguageaState = {
  currentLanguage: navigator.language as AvailableLanguages,
};

export const LanguageReducers = createReducer(
  initialState,
  on(LanguageActions.changeLanguage, (_state, { selectedLanguage }) => {
    console.log('Reducer Fired!');
    return {
      currentLanguage: selectedLanguage,
    };
  })
);
