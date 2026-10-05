/** Spacing scale (4-pt grid). Usage: `theme.space[4]` = 16. */
export const space = {
  0: 0,
  1: 4,
  2: 8,
  3: 12,
  4: 16,
  5: 20,
  6: 24,
  8: 32,
  10: 40,
  12: 48,
  16: 64,
} as const;

/** Border radius. Design system: 16–20px for cards and surfaces. */
export const radius = {
  md: 16,
  lg: 20,
  pill: 999,
} as const;

/** Fixed sizes. Minimum touch target is 44. */
export const size = {
  touchTarget: 44,
  iconSm: 20,
  iconMd: 24,
  iconLg: 32,
} as const;

export const borderWidth = {
  thin: 1,
  thick: 2,
} as const;

export const opacity = {
  disabled: 0.4,
  pressed: 0.85,
} as const;

/** Animation durations in milliseconds. */
export const motion = {
  fast: 150,
  normal: 250,
  slow: 400,
} as const;
