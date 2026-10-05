import type { PhosphorIcon } from '../icons';
import { ActivityIndicator, Pressable, View } from 'react-native';
import { useTheme } from '../theme/ThemeProvider';
import { IconTile, type IconTileVariant } from './IconTile';
import { Text } from './Text';

export interface ActionCardProps {
  title: string;
  subtitle?: string;
  icon: PhosphorIcon;
  onPress: () => void;
  tileVariant?: IconTileVariant;
  disabled?: boolean;
  loading?: boolean;
}

/** Card with an icon tile, a title and an optional subtitle (Taxi / Discover / Civic ...). */
export function ActionCard({
  title,
  subtitle,
  icon,
  onPress,
  tileVariant = 'primary',
  disabled = false,
  loading = false,
}: ActionCardProps) {
  const theme = useTheme();
  const inactive = disabled || loading;

  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={subtitle ? `${title}, ${subtitle}` : title}
      accessibilityState={{ disabled: inactive, busy: loading }}
      disabled={inactive}
      onPress={onPress}
      style={({ pressed }) => ({
        flex: 1,
        minHeight: theme.size.touchTarget,
        gap: theme.space[3],
        padding: theme.space[4],
        borderRadius: theme.radius.lg,
        backgroundColor: theme.colors.surface,
        ...theme.elevation.card,
        opacity: disabled
          ? theme.opacity.disabled
          : pressed
            ? theme.opacity.pressed
            : theme.opacity.full,
      })}
    >
      <IconTile icon={icon} variant={tileVariant} />
      <View style={{ gap: theme.space[1] }}>
        <Text variant="label" numberOfLines={1}>
          {title}
        </Text>
        {subtitle ? (
          <Text variant="caption" tone="secondary" numberOfLines={2}>
            {subtitle}
          </Text>
        ) : null}
      </View>
      {loading ? <ActivityIndicator color={theme.colors.primaryIcon} /> : null}
    </Pressable>
  );
}
