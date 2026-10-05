import type { IconWeight, PhosphorIcon } from '../icons';
import { useTheme } from '../theme/ThemeProvider';
import type { size } from '../tokens';
import { iconToneColor, type IconTone } from './tones';

export interface IconProps {
  icon: PhosphorIcon;
  /** Convention: `regular` in lists, `bold` in buttons and tiles, `fill` for the active tab. */
  weight?: IconWeight;
  size?: keyof typeof size;
  tone?: IconTone;
}

export function Icon({
  icon: Glyph,
  weight = 'regular',
  size = 'iconMd',
  tone = 'primary',
}: IconProps) {
  const theme = useTheme();
  return (
    <Glyph weight={weight} size={theme.size[size]} color={theme.colors[iconToneColor[tone]]} />
  );
}
