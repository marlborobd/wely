export const supportedLanguages = ['ro', 'en'] as const;

export type Language = (typeof supportedLanguages)[number];

/** Romanian is the default language of Wely. */
export const defaultLanguage: Language = 'ro';

function isSupported(code: string): code is Language {
  return (supportedLanguages as readonly string[]).includes(code);
}

/**
 * Maps a device language code ("ro", "en-US", "ro_RO") to a supported language.
 * Unsupported or missing codes fall back to the default language (Romanian).
 */
export function resolveLanguage(code: string | null | undefined): Language {
  if (!code) return defaultLanguage;
  const primary = code.split(/[-_]/)[0]?.toLowerCase() ?? '';
  return isSupported(primary) ? primary : defaultLanguage;
}
