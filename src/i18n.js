import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslation from './locales/en/translation.json';
import bnTranslation from './locales/bn/translation.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: enTranslation,
      },
      bn: {
        translation: bnTranslation,
      },
    },
    lng: 'en', // default language
    fallbackLng: 'en', // fallback language if the translation isn't available
    interpolation: {
      escapeValue: false, // react already escapes by default
    },
  });

export default i18n;
