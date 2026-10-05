import { describe, expect, it } from 'vitest';
import { createTheme, resolveScheme } from '../src/theme/createTheme';
import { borderWidth, darkColors, lightColors, palette, radius, size, space } from '../src/tokens';

const HEX = /^#[0-9A-F]{6}$/i;

describe('locked palette (Master Plan)', () => {
  it('keeps the approved values unchanged', () => {
    expect(palette.aqua).toBe('#55E2DA');
    expect(palette.teal).toBe('#0D9488');
    expect(palette.rose).toBe('#F43F5E');
    expect(palette.slate50).toBe('#F8FAFC');
    expect(palette.white).toBe('#FFFFFF');
    expect(palette.slate900).toBe('#0F172A');
    expect(palette.slate500).toBe('#64748B');
    expect(palette.emerald).toBe('#10B981');
  });
});

describe('semantic colors', () => {
  it('light and dark define exactly the same roles', () => {
    expect(Object.keys(darkColors).sort()).toEqual(Object.keys(lightColors).sort());
  });

  it.each([
    ['light', lightColors],
    ['dark', darkColors],
  ])('%s: every role is a #RRGGBB color', (_scheme, colors) => {
    for (const [role, value] of Object.entries(colors)) {
      expect(value, role).toMatch(HEX);
    }
  });
});

describe('layout tokens', () => {
  it('spacing follows the 4-pt grid', () => {
    for (const value of Object.values(space)) {
      expect(value % 4).toBe(0);
    }
  });

  it('keeps card radius inside the approved 16–20px range', () => {
    expect(radius.md).toBeGreaterThanOrEqual(16);
    expect(radius.lg).toBeLessThanOrEqual(20);
  });

  it('touch target is at least 44', () => {
    expect(size.touchTarget).toBeGreaterThanOrEqual(44);
  });

  it('border widths are positive', () => {
    expect(borderWidth.thin).toBeGreaterThan(0);
  });
});

describe('createTheme', () => {
  it('returns the same object for the same scheme (stable identity)', () => {
    expect(createTheme('light')).toBe(createTheme('light'));
    expect(createTheme('dark')).toBe(createTheme('dark'));
  });

  it('exposes the matching colors and scheme', () => {
    expect(createTheme('light').colors).toEqual(lightColors);
    expect(createTheme('dark').colors).toEqual(darkColors);
    expect(createTheme('dark').scheme).toBe('dark');
  });

  it('is immutable', () => {
    const theme = createTheme('light');
    expect(Object.isFrozen(theme)).toBe(true);
    expect(Object.isFrozen(theme.colors)).toBe(true);
  });
});

describe('resolveScheme', () => {
  it('uses an explicit preference regardless of the device', () => {
    expect(resolveScheme('light', 'dark')).toBe('light');
    expect(resolveScheme('dark', 'light')).toBe('dark');
  });

  it('follows the device when the preference is "system"', () => {
    expect(resolveScheme('system', 'dark')).toBe('dark');
    expect(resolveScheme('system', 'light')).toBe('light');
  });

  it('falls back to light when the device scheme is unknown', () => {
    expect(resolveScheme('system', null)).toBe('light');
    expect(resolveScheme('system', undefined)).toBe('light');
  });
});
