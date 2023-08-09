import * as i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { LANGUAGES } from '../constants/common.constant';
import en from './en/en.json';

export const resources = {
  en: { common: en },
} as const;

i18n.use(initReactI18next).init({
  lng: process.env.APP_LANGUAGE,
  fallbackLng: LANGUAGES.EN,
  ns: ['common'],
  defaultNS: 'common',

  debug: false,

  interpolation: {
    escapeValue: false,
  },

  resources,
});

export default i18n;
