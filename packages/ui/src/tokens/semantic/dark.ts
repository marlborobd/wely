import { palette } from '../primitives/colors';
import type { SemanticColors } from './types';

export const darkColors: SemanticColors = {
  background: palette.navy950,
  surface: palette.navy900,

  textPrimary: palette.slate100,
  textSecondary: palette.slate400,

  primary: palette.aqua,
  onPrimary: palette.slate900,
  primaryText: palette.aqua,
  primaryIcon: palette.aqua,

  danger: palette.roseSoft,
  dangerText: palette.roseSoft,
  sos: palette.roseDeep,
  onSos: palette.white,

  success: palette.emeraldSoft,
  onSuccess: palette.slate900,
  successText: palette.emeraldSoft,

  borderDecorative: palette.slate800,
  borderInput: palette.slate500,
};
