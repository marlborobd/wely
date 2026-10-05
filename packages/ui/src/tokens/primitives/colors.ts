/**
 * Primitive colors – RAW VALUES ONLY.
 * Together with `semantic/`, this is the only place where hex values are allowed
 * (enforced by ESLint). Components never use these directly: they use semantic
 * tokens through `useTheme()`.
 *
 * Contrast notes (WCAG, computed on 2026-10-05) are in docs/design-system.md.
 */
export const palette = {
  // --- LOCKED (Master Plan). Do not change without explicit owner approval. ---
  aqua: '#55E2DA', // Primary – FILL only (1.58:1 on white)
  teal: '#0D9488', // Primary Dark – icons / large text only (3.74:1 on white)
  rose: '#F43F5E', // SOS / Alert – icons / large elements (3.67:1 on white)
  slate50: '#F8FAFC', // Background
  white: '#FFFFFF', // Surface
  slate900: '#0F172A', // Text Primary
  slate500: '#64748B', // Text Secondary
  emerald: '#10B981', // Success / Eco – FILL only (2.54:1 on white)

  // --- ADDITIVE (approved 2026-10-05): variants that are safe for small text ---
  tealDeep: '#0F766E', // 5.47:1 on white
  roseDeep: '#D01644', // 5.41:1 on white, 5.17:1 on slate50 (replaces #E11D48, 4.49:1 on slate50)
  emeraldDeep: '#047857', // 5.48:1 on white

  // --- DARK MODE (proposed by Claude, approved by owner 2026-10-05) ---
  navy950: '#0B1220', // background
  navy900: '#131C2E', // surface
  slate100: '#F1F5F9', // text primary
  slate400: '#94A3B8', // text secondary
  roseSoft: '#FB7185', // danger text
  emeraldSoft: '#34D399', // success text / fill

  // --- BORDERS ---
  slate200: '#E2E8F0', // light decorative border
  slate800: '#1E293B', // dark decorative border
  slate450: '#7C8CA1', // light input border (3.43:1 on white, 3.28:1 on slate50)
} as const;

export type PaletteColor = (typeof palette)[keyof typeof palette];
