import { createI18n, I18nextProvider, resolveLanguage } from '@wely/i18n';
import { resolveScheme, ThemeProvider, type ColorScheme } from '@wely/ui';
import { getLocales } from 'expo-localization';
import { useMemo, type ReactNode } from 'react';
import { useColorScheme } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

function toColorScheme(value: string | null | undefined): ColorScheme | null {
  if (value === 'light' || value === 'dark') return value;
  return null;
}

export function AppProviders({ children }: { children: ReactNode }) {
  const deviceScheme = toColorScheme(useColorScheme());
  const scheme = resolveScheme('system', deviceScheme);
  const i18n = useMemo(() => createI18n(resolveLanguage(getLocales()[0]?.languageCode)), []);

  return (
    <SafeAreaProvider>
      <ThemeProvider scheme={scheme}>
        <I18nextProvider i18n={i18n}>{children}</I18nextProvider>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}
