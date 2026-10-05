import { CaretRight } from '../icons';
import type { PhosphorIcon } from '../icons';
import { ActivityIndicator, Pressable, View } from 'react-native';
import { useTheme } from '../theme/ThemeProvider';
import { Icon } from './Icon';
import { Text } from './Text';

export interface ListRowProps {
  title: string;
  subtitle?: string;
  icon?: PhosphorIcon;
  onPress?: () => void;
  disabled?: boolean;
  loading?: boolean;
}

/** One row in a list (recent destinations, settings). Long text truncates. */
export function ListRow({
  title,
  subtitle,
  icon,
  onPress,
  disabled = false,
  loading = false,
}: ListRowProps) {
  const theme = useTheme();
  const inactive = disabled || loading || onPress === undefined;

  return (
    <Pressable
      accessibilityRole={onPress ? 'button' : undefined}
      accessibilityLabel={subtitle ? `${title}, ${subtitle}` : title}
      accessibilityState={{ disabled: disabled || loading, busy: loading }}
      disabled={inactive}
      onPress={onPress}
      style={({ pressed }) => ({
        minHeight: theme.size.touchTarget,
        flexDirection: 'row',
        alignItems: 'center',
        gap: theme.space[3],
        paddingVertical: theme.space[3],
        opacity: disabled
          ? theme.opacity.disabled
          : pressed
            ? theme.opacity.pressed
            : theme.opacity.full,
      })}
    >
      {icon ? <Icon icon={icon} tone="secondary" /> : null}
      <View style={{ flex: 1, gap: theme.space[1] }}>
        <Text numberOfLines={1}>{title}</Text>
        {subtitle ? (
          <Text variant="bodySmall" tone="secondary" numberOfLines={1}>
            {subtitle}
          </Text>
        ) : null}
      </View>
      {loading ? (
        <ActivityIndicator color={theme.colors.primaryIcon} />
      ) : onPress ? (
        <Icon icon={CaretRight} size="iconSm" tone="secondary" />
      ) : null}
    </Pressable>
  );
}
