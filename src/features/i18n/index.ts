// Libraries
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Types
import { Language } from '@Common/enums/language.enum';

// Ru
import authTranslationRu from '@Pages/auth/translations/ru/authTranlationRu.json';
import signInTranslationRu from '@Common/components/SignInWith/translations/ru/signInWithTranslationRu.json';
import errorTranslationRu from '@Features/i18n/translations/errors/ru/errorTranslationRu.json';
import sidebarTranslationRu from '@Common/components/Sidebar/translations/ru/sidebarTranslationRu.json';
import commonTranslationRu from '@Features/i18n/translations/common/ru/common.translation.ru.json';
import groupTranslationRu from '@Group/translations/ru/group.translation.ru.json';
import downloadAvatarTranslationRu from '@Common/components/DownloadAvatar/translations/ru/downloadAvatar.tranlation.ru.json';

// En
import authTranslationEn from '@Pages/auth/translations/en/authTranslationEn.json';
import signInTranslationEn from '@Common/components/SignInWith/translations/en/signInWithTranslationEn.json';
import errorTranslationEn from '@Features/i18n/translations/errors/en/errorTranslationEn.json';
import sidebarTranslationEn from '@Common/components/Sidebar/translations/en/sidebarTranslationEn.json';
import commonTranslationEn from '@Features/i18n/translations/common/en/common.translation.en.json';
import groupTranslationEn from '@Group/translations/en/group.translation.en.json';
import downloadAvatarTranslationEn from '@Common/components/DownloadAvatar/translations/en/downloadAvatar.tranlation.en.json';
import blockUserRelationSlice from '../../modules/relations/redux/blockUserRelation/blockUserRelation.slice';
import unblockUserRelationSlice from '../../modules/relations/redux/unblockUserRelation/unblockUserRelation.slice';

const resources = {
  [Language.English]: {
    signInWith: signInTranslationEn,
    error: errorTranslationEn,
    auth: authTranslationEn,
    sidebar: sidebarTranslationEn,
    common: commonTranslationEn,
    group: groupTranslationEn,
    downloadAvatar: downloadAvatarTranslationEn,
    unblockUserRelation: unblockUserRelationSlice,
    blockUserRelation: blockUserRelationSlice,
  },
  [Language.Russian]: {
    signInWith: signInTranslationRu,
    error: errorTranslationRu,
    auth: authTranslationRu,
    sidebar: sidebarTranslationRu,
    common: commonTranslationRu,
    group: groupTranslationRu,
    downloadAvatar: downloadAvatarTranslationRu,
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: Language.English,
    debug: false,
    interpolation: {
      escapeValue: false,
    },
    resources,
    detection: {
      order: ['querystring', 'navigator'],
      lookupQuerystring: 'lang',
    },
  });

export default i18n;
export { resources };
