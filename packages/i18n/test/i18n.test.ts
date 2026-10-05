import { describe, expect, it } from 'vitest';
import { createI18n, defaultLanguage, resolveLanguage, resources } from '../src';

type Tree = { [key: string]: string | Tree };

/** Flattens a nested translation object to dotted keys → value. */
function flatten(tree: Tree, prefix = ''): Record<string, string> {
  const result: Record<string, string> = {};
  for (const [key, value] of Object.entries(tree)) {
    const path = prefix ? `${prefix}.${key}` : key;
    if (typeof value === 'string') result[path] = value;
    else Object.assign(result, flatten(value, path));
  }
  return result;
}

const ro = flatten(resources.ro.translation);
const en = flatten(resources.en.translation);

describe('translations', () => {
  it('Romanian and English have exactly the same keys', () => {
    expect(Object.keys(en).sort()).toEqual(Object.keys(ro).sort());
  });

  it('has no empty texts', () => {
    for (const [key, value] of [...Object.entries(ro), ...Object.entries(en)]) {
      expect(value.trim(), key).not.toBe('');
    }
  });

  it('uses comma-below ș/ț, never the cedilla forms ş/ţ (Romanian diacritics)', () => {
    const cedilla = /[ŞşŢţ]/;
    for (const [key, value] of Object.entries(ro)) {
      expect(value, key).not.toMatch(cedilla);
    }
  });

  it('keeps the approved Romanian UI texts', () => {
    expect(ro['tabs.home']).toBe('Acasă');
    expect(ro['tabs.activity']).toBe('Activitate');
    expect(ro['home.searchPlaceholder']).toBe('Încotro?');
  });
});

describe('resolveLanguage', () => {
  it.each([
    ['ro', 'ro'],
    ['ro-RO', 'ro'],
    ['ro_RO', 'ro'],
    ['en', 'en'],
    ['en-US', 'en'],
    ['EN-gb', 'en'],
  ])('%s → %s', (code, expected) => {
    expect(resolveLanguage(code)).toBe(expected);
  });

  it.each([null, undefined, '', 'de', 'fr-FR'])(
    '%s → English (unsupported device language)',
    (code) => {
      expect(resolveLanguage(code)).toBe('en');
      expect(defaultLanguage).toBe('ro');
    },
  );
});

describe('createI18n', () => {
  it('translates in Romanian by default', () => {
    const i18n = createI18n();
    expect(i18n.t('tabs.home')).toBe('Acasă');
    expect(i18n.t('home.searchPlaceholder')).toBe('Încotro?');
  });

  it('translates in English when asked', () => {
    const i18n = createI18n('en');
    expect(i18n.t('tabs.home')).toBe('Home');
  });

  it('is initialised synchronously (no waiting needed at app start)', () => {
    expect(createI18n('ro').isInitialized).toBe(true);
  });

  it('rejects unknown keys at compile time', () => {
    const i18n = createI18n();
    // @ts-expect-error – this key does not exist; the type system must catch it
    i18n.t('tabs.doesNotExist');
  });
});
