import { combineReducers } from 'redux';

import { contactFormReducer, ContactFormReduxState } from './contact_form';

export type ReduxState = {
  contactForm: ContactFormReduxState,
};

export const reducers = combineReducers({
  contactForm: contactFormReducer,
});
