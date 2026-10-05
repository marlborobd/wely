import type { SemanticColors } from '../tokens';

export type TextTone =
  'primary' | 'secondary' | 'link' | 'danger' | 'success' | 'onPrimary' | 'onSos';

/** Text tones → semantic color roles. Small text never uses fill colors (see design-system.md). */
export const textToneColor: Record<TextTone, keyof SemanticColors> = {
  primary: 'textPrimary',
  secondary: 'textSecondary',
  link: 'primaryText',
  danger: 'dangerText',
  success: 'successText',
  onPrimary: 'onPrimary',
  onSos: 'onSos',
};

export type IconTone =
  'primary' | 'secondary' | 'brand' | 'danger' | 'success' | 'onPrimary' | 'onSos';

/** Icon tones → semantic color roles. Icons may use the ≥3:1 icon colors. */
export const iconToneColor: Record<IconTone, keyof SemanticColors> = {
  primary: 'textPrimary',
  secondary: 'textSecondary',
  brand: 'primaryIcon',
  danger: 'danger',
  success: 'success',
  onPrimary: 'onPrimary',
  onSos: 'onSos',
};
