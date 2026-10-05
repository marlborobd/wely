import type { PhosphorIcon } from '../icons';
import { View } from 'react-native';
import { useTheme } from '../theme/ThemeProvider';
import { Icon } from './Icon';

export type IconTileVariant = 'primary' | 'neutral' | 'danger';

export interface IconTileProps {
  icon: PhosphorIcon;
  variant?: IconTileVariant;
}

/** Rounded square with an icon. Decorative: hidden from screen readers. */
export function IconTile({ icon, variant = 'primary' }: IconTileProps) {
  const theme = useTheme();
  const background =
    variant === 'primary'
      ? theme.colors.primary
      : variant === 'danger'
        ? theme.colors.sos
        : theme.colors.background;
  const tone = variant === 'primary' ? 'onPrimary' : variant === 'danger' ? 'onSos' : 'brand';

  return (
    <View
      accessibilityElementsHidden
      importantForAccessibility="no-hide-descendants"
      style={{
        width: theme.size.touchTarget,
        height: theme.size.touchTarget,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: theme.radius.md,
        backgroundColor: background,
      }}
    >
      <Icon icon={icon} weight="bold" tone={tone} />
    </View>
  );
}
