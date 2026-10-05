import { describe, expect, it } from 'vitest';
import { createTheme, palette, type ColorScheme, type SemanticColors } from '../src';
import { contrastRatio } from './contrast';

const TEXT = 4.5; // WCAG AA, normal text
const UI = 3; // WCAG AA, icons, large text and UI component boundaries

type Role = keyof SemanticColors;
type Pair = readonly [foreground: Role, background: Role, minimum: number];

const pairs: readonly Pair[] = [
  ['textPrimary', 'background', TEXT],
  ['textPrimary', 'surface', TEXT],
  ['textSecondary', 'background', TEXT],
  ['textSecondary', 'surface', TEXT],
  ['onPrimary', 'primary', TEXT],
  ['primaryText', 'background', TEXT],
  ['primaryText', 'surface', TEXT],
  ['primaryIcon', 'background', UI],
  ['primaryIcon', 'surface', UI],
  ['dangerText', 'background', TEXT],
  ['dangerText', 'surface', TEXT],
  ['danger', 'background', UI],
  ['danger', 'surface', UI],
  ['onSos', 'sos', TEXT],
  ['successText', 'background', TEXT],
  ['successText', 'surface', TEXT],
  ['onSuccess', 'success', TEXT],
  ['borderInput', 'background', UI],
  ['borderInput', 'surface', UI],
];

describe.each<ColorScheme>(['light', 'dark'])('%s theme contrast (WCAG AA)', (scheme) => {
  const { colors } = createTheme(scheme);

  it.each(pairs)('%s on %s ≥ %s', (foreground, background, minimum) => {
    const ratio = contrastRatio(colors[foreground], colors[background]);
    expect(ratio, `${foreground} on ${background} = ${ratio.toFixed(2)}`).toBeGreaterThanOrEqual(
      minimum,
    );
  });
});

describe('contrastRatio', () => {
  it('matches the WCAG reference values', () => {
    expect(contrastRatio('#000000', '#FFFFFF')).toBeCloseTo(21, 5);
    expect(contrastRatio('#FFFFFF', '#FFFFFF')).toBeCloseTo(1, 5);
  });

  it('agrees with the values documented in docs/design-system.md', () => {
    expect(contrastRatio(palette.slate900, palette.aqua)).toBeCloseTo(11.29, 2);
    expect(contrastRatio(palette.tealDeep, palette.white)).toBeCloseTo(5.47, 2);
    expect(contrastRatio(palette.roseDeep, palette.slate50)).toBeCloseTo(5.17, 2);
  });
});

describe('fill-only colors', () => {
  it('stay unusable as small text on white (this is why semantic tokens exist)', () => {
    expect(contrastRatio(palette.aqua, palette.white)).toBeLessThan(UI);
    expect(contrastRatio(palette.emerald, palette.white)).toBeLessThan(UI);
    expect(contrastRatio(palette.teal, palette.white)).toBeLessThan(TEXT);
    expect(contrastRatio(palette.rose, palette.white)).toBeLessThan(TEXT);
  });
});
