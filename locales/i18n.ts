import { initReactI18next } from 'react-i18next';
import i18n from 'i18next';

import en from './en';

export const resources = {
  en: {
    translation: en,
  },
};

export enum Languages {
  English,
}

export function changeLanguage(language: Languages) {
  const selectLanguage = (language: Languages) => {
    switch (language) {
      case Languages.English:
        return 'en';

      default:
        return 'en';
    }
  };

  i18n.use(initReactI18next).init({
    resources,
    lng: selectLanguage(language),
    keySeparator: false,
    interpolation: {
      escapeValue: false,
    },
  });
}

i18n.use(initReactI18next).init({
  fallbackLng: 'en',
  debug: __DEV__,
  ns: 'translation',
  defaultNS: 'translation',
  resources,
  lng: 'en',
  keySeparator: false,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
