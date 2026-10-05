import type { PhosphorIcon } from '../icons';
import { ActivityIndicator, Pressable } from 'react-native';
import { useTheme } from '../theme/ThemeProvider';
import { Icon } from './Icon';
import { Text } from './Text';
import type { IconTone, TextTone } from './tones';

export type ButtonVariant = 'primary' | 'secondary' | 'danger';

export interface ButtonProps {
  label: string;
  onPress: () => void;
  variant?: ButtonVariant;
  icon?: PhosphorIcon;
  disabled?: boolean;
  /** Shows a spinner and ignores presses. The label stays for screen readers. */
  loading?: boolean;
}

const labelTone: Record<ButtonVariant, TextTone> = {
  primary: 'onPrimary',
  secondary: 'primary',
  danger: 'onSos',
};

const iconTone: Record<ButtonVariant, IconTone> = {
  primary: 'onPrimary',
  secondary: 'primary',
  danger: 'onSos',
};

export function Button({
  label,
  onPress,
  variant = 'primary',
  icon,
  disabled = false,
  loading = false,
}: ButtonProps) {
  const theme = useTheme();
  const inactive = disabled || loading;
  const background =
    variant === 'primary'
      ? theme.colors.primary
      : variant === 'danger'
        ? theme.colors.sos
        : theme.colors.surface;

  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={label}
      accessibilityState={{ disabled: inactive, busy: loading }}
      disabled={inactive}
      onPress={onPress}
      style={({ pressed }) => ({
        minHeight: theme.size.touchTarget,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: theme.space[2],
        paddingHorizontal: theme.space[5],
        paddingVertical: theme.space[3],
        borderRadius: theme.radius.md,
        backgroundColor: background,
        borderWidth: variant === 'secondary' ? theme.borderWidth.thin : 0,
        borderColor: theme.colors.borderInput,
        opacity: disabled
          ? theme.opacity.disabled
          : pressed
            ? theme.opacity.pressed
            : theme.opacity.full,
      })}
    >
      {loading ? (
        <ActivityIndicator
          color={
            theme.colors[
              variant === 'secondary' ? 'primaryIcon' : variant === 'danger' ? 'onSos' : 'onPrimary'
            ]
          }
        />
      ) : icon ? (
        <Icon icon={icon} weight="bold" size="iconSm" tone={iconTone[variant]} />
      ) : null}
      <Text variant="label" tone={labelTone[variant]} numberOfLines={1}>
        {label}
      </Text>
    </Pressable>
  );
}
