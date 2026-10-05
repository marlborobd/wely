import { MagnifyingGlass, X } from '../icons';
import { ActivityIndicator, Pressable, TextInput, View } from 'react-native';
import { useTheme } from '../theme/ThemeProvider';
import { Icon } from './Icon';

export interface SearchBarProps {
  placeholder: string;
  value?: string;
  onChangeText?: (text: string) => void;
  /** Tap-to-open mode (Home): the bar is a button and the keyboard stays closed. */
  onPress?: () => void;
  loading?: boolean;
  error?: boolean;
  disabled?: boolean;
  /** Required when the clear button can appear (text is non-empty). */
  clearLabel?: string;
}

export function SearchBar({
  placeholder,
  value = '',
  onChangeText,
  onPress,
  loading = false,
  error = false,
  disabled = false,
  clearLabel,
}: SearchBarProps) {
  const theme = useTheme();
  const tappable = onPress !== undefined;
  const canClear = !tappable && !loading && value.length > 0 && clearLabel !== undefined;

  const container = {
    minHeight: theme.size.touchTarget,
    flexDirection: 'row',
    alignItems: 'center',
    gap: theme.space[3],
    paddingHorizontal: theme.space[4],
    borderRadius: theme.radius.lg,
    backgroundColor: theme.colors.surface,
    borderWidth: theme.borderWidth.thin,
    borderColor: error ? theme.colors.danger : theme.colors.borderInput,
    opacity: disabled ? theme.opacity.disabled : theme.opacity.full,
    ...theme.elevation.card,
  } as const;

  const content = (
    <>
      <Icon icon={MagnifyingGlass} tone="secondary" />
      <TextInput
        accessibilityLabel={placeholder}
        editable={!tappable && !disabled}
        pointerEvents={tappable ? 'none' : 'auto'}
        placeholder={placeholder}
        placeholderTextColor={theme.colors.textSecondary}
        value={value}
        onChangeText={onChangeText}
        style={{
          flex: 1,
          paddingVertical: theme.space[3],
          ...theme.textStyles.body,
          color: theme.colors.textPrimary,
        }}
      />
      {loading ? <ActivityIndicator color={theme.colors.primaryIcon} /> : null}
      {canClear ? (
        <Pressable
          accessibilityRole="button"
          accessibilityLabel={clearLabel}
          onPress={() => onChangeText?.('')}
          hitSlop={theme.space[2]}
        >
          <Icon icon={X} tone="secondary" />
        </Pressable>
      ) : null}
    </>
  );

  if (tappable) {
    return (
      <Pressable
        accessibilityRole="search"
        accessibilityLabel={placeholder}
        accessibilityState={{ disabled }}
        disabled={disabled}
        onPress={onPress}
        style={({ pressed }) => ({
          ...container,
          opacity: disabled
            ? theme.opacity.disabled
            : pressed
              ? theme.opacity.pressed
              : theme.opacity.full,
        })}
      >
        {content}
      </Pressable>
    );
  }

  return <View style={container}>{content}</View>;
}
