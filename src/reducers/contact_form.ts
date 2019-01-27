import {
  UPDATE_CONTACT_FORM_FIELD,
} from '../actions/types';
import { ContactFormAction } from '../actions/contact_form_actions';

export type ContactFormReduxState = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

const INITIAL_STATE: ContactFormReduxState = {
  name: '',
  email: '',
  phone: '',
  message: '',
};

export const contactFormReducer = (state = INITIAL_STATE, action: ContactFormAction) => {
  switch (action.type) {
    case UPDATE_CONTACT_FORM_FIELD:
      return { ...state, [action.name]: action.value };
    default:
      return state;
  }
};
