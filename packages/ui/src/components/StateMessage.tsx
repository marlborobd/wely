import type { PhosphorIcon } from '../icons';
import { View } from 'react-native';
import { useTheme } from '../theme/ThemeProvider';
import { Button } from './Button';
import { Icon } from './Icon';
import { Text } from './Text';

export interface StateMessageProps {
  kind: 'empty' | 'error';
  icon: PhosphorIcon;
  title: string;
  message?: string;
  /** Optional recovery action, e.g. "Încearcă din nou". */
  actionLabel?: string;
  onAction?: () => void;
}

/** Shared "empty" and "error" presentation for lists, sheets and screens. */
export function StateMessage({
  kind,
  icon,
  title,
  message,
  actionLabel,
  onAction,
}: StateMessageProps) {
  const theme = useTheme();
  return (
    <View style={{ alignItems: 'center', gap: theme.space[2], padding: theme.space[6] }}>
      {/* Only the text is the alert, so the action button stays separately reachable. */}
      <View
        accessible
        accessibilityRole={kind === 'error' ? 'alert' : undefined}
        style={{ alignItems: 'center', gap: theme.space[2] }}
      >
        <Icon icon={icon} size="iconLg" tone={kind === 'error' ? 'danger' : 'secondary'} />
        <Text variant="title" tone={kind === 'error' ? 'danger' : 'primary'}>
          {title}
        </Text>
        {message ? (
          <Text variant="bodySmall" tone="secondary">
            {message}
          </Text>
        ) : null}
      </View>
      {actionLabel && onAction ? (
        <Button label={actionLabel} onPress={onAction} variant="secondary" />
      ) : null}
    </View>
  );
}
