// Libraries
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Types
import { Language } from '@Features/i18n/types/language.type';

// Ru
import registrationTranslationRu from '../../pages/registration/translations/ru/registrationTranslationRu.json';
import loginTranslationRu from '../../pages/login/translations/ru/loginTranslationRu.json';

// En
import registrationTranslationEn from '../../pages/registration/translations/en/registrationTranslationEn.json';
import loginTranslationEu from '../../pages/login/translations/en/loginTranslationEn.json';

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
      login: loginTranslationEu,
    },
    [Language.Russian]: {
      registration: registrationTranslationRu,
      login: loginTranslationRu,
    },
  },
});

export default i18n;
