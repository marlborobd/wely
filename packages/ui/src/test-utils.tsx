import { render } from '@testing-library/react-native';
import type { ReactElement } from 'react';
import { ThemeProvider } from './theme/ThemeProvider';
import type { ColorScheme } from './tokens';

/** Renders a component inside the Wely theme. Test helper only (not exported). */
export function renderWithTheme(ui: ReactElement, scheme: ColorScheme = 'light') {
  return render(<ThemeProvider scheme={scheme}>{ui}</ThemeProvider>);
}
