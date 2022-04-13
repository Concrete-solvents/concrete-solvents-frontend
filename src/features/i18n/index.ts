// Libraries
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Types
import { Language } from '@Features/i18n/types/language.type';

// Ru
import registrationTranslationRu from '../../pages/registration/translations/ru/registrationTranslationRu.json';

// En
import registrationTranslationEn from '../../pages/registration/translations/en/registrationTranslationEn.json';

i18n.use(initReactI18next).init({
  fallbackLng: Language.English,
  debug: false,
  detection: {
    order: ['localStorage', 'cookie'],
    cache: ['localStorage', 'cookie'],
  },
  interpolation: {
    escapeValue: false,
  },
  resources: {
    [Language.English]: {
      registration: registrationTranslationEn,
    },
    [Language.Russian]: {
      registration: registrationTranslationRu,
    },
  },
});

export default i18n;
