// @wely/i18n – texte: ro (implicit, cu diacritice) și en. Fără text direct în cod.
export { supportedLanguages, defaultLanguage, resolveLanguage, type Language } from './languages';
export { createI18n, resources } from './createI18n';
export type { Translation } from './resources/ro';
export { I18nextProvider, useTranslation } from 'react-i18next';
