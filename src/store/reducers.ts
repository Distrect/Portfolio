import { createReducer, on } from '@ngrx/store';
import { LanguageActions } from './actions';
import { AvailableLanguages } from '../shared/shared.interface';

export interface LanguageaState {
  currentLanguage: AvailableLanguages;
}

export const initialState: LanguageaState = {
  currentLanguage: 'en',
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
