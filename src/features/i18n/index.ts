// Libraries
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Types
import { Language } from '@Enums/language.enum';

// Ru
import registrationTranslationRu from '@Pages/registration/translations/ru/registrationTranslationRu.json';
import welcomeTranslationRu from '@Pages/welcome/translations/ru/welcomeTranslationRu.json';
import loginTranslationRu from '@Pages/login/translations/ru/loginTranslationRu.json';

// En
import registrationTranslationEn from '@Pages/registration/translations/en/registrationTranslationEn.json';
import welcomeTranslationEn from '@Pages/welcome/translations/en/welcomeTranslationEn.json';
import loginTranslationEu from '@Pages/login/translations/en/loginTranslationEn.json';

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
      welcome: welcomeTranslationEn,
    },
    [Language.Russian]: {
      registration: registrationTranslationRu,
      welcome: welcomeTranslationRu,
      login: loginTranslationRu,
    },
  },
});

export default i18n;
