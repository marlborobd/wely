import { palette } from '../primitives/colors';
import type { SemanticColors } from './types';

export const lightColors: SemanticColors = {
  background: palette.slate50,
  surface: palette.white,

  textPrimary: palette.slate900,
  textSecondary: palette.slate500,

  primary: palette.aqua,
  onPrimary: palette.slate900,
  primaryText: palette.tealDeep,
  primaryIcon: palette.teal,

  danger: palette.rose,
  dangerText: palette.roseDeep,
  sos: palette.roseDeep,
  onSos: palette.white,

  success: palette.emerald,
  onSuccess: palette.slate900,
  successText: palette.emeraldDeep,

  borderDecorative: palette.slate200,
  borderInput: palette.slate450,
};
