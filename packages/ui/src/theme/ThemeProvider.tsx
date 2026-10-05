import { createContext, useContext, type ReactNode } from 'react';
import { createTheme, type Theme } from './createTheme';
import type { ColorScheme } from '../tokens';

const ThemeContext = createContext<Theme | null>(null);

interface ThemeProviderProps {
  /** Already resolved scheme (see `resolveScheme`). The app reads the device scheme itself. */
  scheme: ColorScheme;
  children: ReactNode;
}

export function ThemeProvider({ scheme, children }: ThemeProviderProps) {
  return <ThemeContext.Provider value={createTheme(scheme)}>{children}</ThemeContext.Provider>;
}

export function useTheme(): Theme {
  const theme = useContext(ThemeContext);
  if (!theme) throw new Error('useTheme must be used inside <ThemeProvider>');
  return theme;
}
