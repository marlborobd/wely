export const supportedLanguages = ['ro', 'en'] as const;

export type Language = (typeof supportedLanguages)[number];

/** Romanian is the default language of Wely (used for missing translations). */
export const defaultLanguage: Language = 'ro';

/** Device languages other than Romanian/English get English (owner decision, 2026-10-05). */
export const unsupportedDeviceLanguage: Language = 'en';

function isSupported(code: string): code is Language {
  return (supportedLanguages as readonly string[]).includes(code);
}

/**
 * Maps a device language code ("ro", "en-US", "ro_RO") to a supported language.
 * Romanian → Romanian, English → English; any other or missing code → English.
 */
export function resolveLanguage(code: string | null | undefined): Language {
  if (!code) return unsupportedDeviceLanguage;
  const primary = code.split(/[-_]/)[0]?.toLowerCase() ?? '';
  return isSupported(primary) ? primary : unsupportedDeviceLanguage;
}
