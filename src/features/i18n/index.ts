// Libraries
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Types
import { Language } from '@Enums/language.enum';

// Ru
import registrationTranslationRu from '@Pages/registration/translations/ru/registrationTranslationRu.json';
import welcomeTranslationRu from '@Pages/welcome/translations/ru/welcomeTranslationRu.json';
import loginTranslationRu from '@Pages/login/translations/ru/loginTranslationRu.json';
import signInTranslationRu from '@Components/SignInWith/translations/ru/signInWithTranslationRu.json';

// En
import registrationTranslationEn from '@Pages/registration/translations/en/registrationTranslationEn.json';
import welcomeTranslationEn from '@Pages/welcome/translations/en/welcomeTranslationEn.json';
import loginTranslationEu from '@Pages/login/translations/en/loginTranslationEn.json';
import signInTranslationEn from '@Components/SignInWith/translations/en/signInWithTranslationEn.json';

const resources = {
  [Language.English]: {
    registration: registrationTranslationEn,
    login: loginTranslationEu,
    welcome: welcomeTranslationEn,
    signInWith: signInTranslationEn,
  },
  [Language.Russian]: {
    registration: registrationTranslationRu,
    welcome: welcomeTranslationRu,
    login: loginTranslationRu,
    signInWith: signInTranslationRu,
  },
};

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
  resources,
});

export default i18n;
export { resources };
