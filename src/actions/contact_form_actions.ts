import {
  CLEAR_CONTACT_FORM_FIELDS,
  UPDATE_CONTACT_FORM_FIELD,
} from './types';

export type ContactFormAction = {
  type: string;
  name: string;
  value: string;
};

export const updateContactFormField = (name: string, value: string) => ({
  type: UPDATE_CONTACT_FORM_FIELD,
  name,
  value,
});

export const clearContactForm = () => ({
  type: CLEAR_CONTACT_FORM_FIELDS,
});
