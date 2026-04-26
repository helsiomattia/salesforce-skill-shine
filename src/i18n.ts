import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import ptCommon from './locales/pt/common.json';
import enCommon from './locales/en/common.json';
import esCommon from './locales/es/common.json';

i18n
  // Detects language from browser/localStorage
  .use(LanguageDetector)
  // Passes i18n down to react-i18next
  .use(initReactI18next)
  .init({
    resources: {
      pt: {
        common: ptCommon,
      },
      en: {
        common: enCommon,
      },
      es: {
        common: esCommon,
      }
    },
    fallbackLng: 'pt',
    defaultNS: 'common',
    
    interpolation: {
      escapeValue: false, // React already safes from xss
    },
  });

export default i18n;
