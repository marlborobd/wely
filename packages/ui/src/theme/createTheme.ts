import {
  borderWidth,
  darkColors,
  elevation,
  lightColors,
  motion,
  opacity,
  radius,
  size,
  space,
  textStyles,
  type ColorScheme,
  type SchemePreference,
  type SemanticColors,
} from '../tokens';

export interface Theme {
  readonly scheme: ColorScheme;
  readonly colors: SemanticColors;
  readonly space: typeof space;
  readonly radius: typeof radius;
  readonly size: typeof size;
  readonly borderWidth: typeof borderWidth;
  readonly opacity: typeof opacity;
  readonly motion: typeof motion;
  readonly textStyles: typeof textStyles;
  readonly elevation: typeof elevation;
}

function buildTheme(scheme: ColorScheme, colors: SemanticColors): Theme {
  return Object.freeze({
    scheme,
    colors: Object.freeze({ ...colors }),
    space,
    radius,
    size,
    borderWidth,
    opacity,
    motion,
    textStyles,
    elevation,
  });
}

// Built once: `createTheme` returns the same object each time, so context consumers
// do not re-render needlessly.
const themes: Record<ColorScheme, Theme> = {
  light: buildTheme('light', lightColors),
  dark: buildTheme('dark', darkColors),
};

export function createTheme(scheme: ColorScheme): Theme {
  return themes[scheme];
}

/**
 * Turns the user's choice into a concrete scheme.
 * `system` follows the device; if the device scheme is unknown, light is used.
 */
export function resolveScheme(
  preference: SchemePreference,
  systemScheme: ColorScheme | null | undefined,
): ColorScheme {
  if (preference !== 'system') return preference;
  return systemScheme ?? 'light';
}
