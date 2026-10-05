import { createInstance, type i18n } from 'i18next';
import { defaultLanguage, type Language } from './languages';
import { en } from './resources/en';
import { ro, type Translation } from './resources/ro';

export const resources: Record<Language, { translation: Translation }> = {
  ro: { translation: ro },
  en: { translation: en },
};

// Gives `t('tabs.home')` compile-time checked keys.
declare module 'i18next' {
  interface CustomTypeOptions {
    defaultNS: 'translation';
    resources: { translation: Translation };
  }
}

/**
 * Creates a ready-to-use i18n instance. Resources are bundled, so initialisation is
 * synchronous and works offline.
 */
export function createI18n(language: Language = defaultLanguage): i18n {
  const instance = createInstance();
  void instance.init({
    lng: language,
    fallbackLng: defaultLanguage,
    resources,
    defaultNS: 'translation',
    interpolation: { escapeValue: false }, // React Native does not need HTML escaping
    initAsync: false,
  });
  return instance;
}
