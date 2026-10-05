export type HexColor = `#${string}`;

export type ColorScheme = 'light' | 'dark';

/** What the user chose in Profil → Aspect. `system` follows the device. */
export type SchemePreference = ColorScheme | 'system';

/**
 * Semantic color roles. Components use ONLY these.
 * Light and dark must define exactly the same keys (enforced by the type).
 *
 * Usage rules (see docs/design-system.md):
 * - `primary`, `success`, `danger` are FILLS (or large icons); never small text on a light surface.
 * - Small text uses `primaryText`, `successText`, `dangerText`.
 * - Text on a fill uses the matching `on*` color.
 */
export interface SemanticColors {
  background: HexColor;
  surface: HexColor;

  textPrimary: HexColor;
  textSecondary: HexColor;

  /** Fill for primary buttons, icon tiles. */
  primary: HexColor;
  /** Text/icon on `primary`. */
  onPrimary: HexColor;
  /** Small text, links, active tab label. */
  primaryText: HexColor;
  /** Icons and large text only (≥3:1). */
  primaryIcon: HexColor;

  /** Fill / large icon for alerts. Not for small text. */
  danger: HexColor;
  /** Small error text. */
  dangerText: HexColor;
  /** SOS button fill. */
  sos: HexColor;
  /** Text/icon on `sos`. */
  onSos: HexColor;

  success: HexColor;
  onSuccess: HexColor;
  successText: HexColor;

  /** Cards, dividers. Decorative (no contrast requirement). */
  borderDecorative: HexColor;
  /** Input fields and other required UI boundaries (≥3:1 against the surface). */
  borderInput: HexColor;
}
