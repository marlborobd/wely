import { Text as RNText, type TextProps as RNTextProps } from 'react-native';
import { useTheme } from '../theme/ThemeProvider';
import type { TextStyleName } from '../tokens';
import { textToneColor, type TextTone } from './tones';

export interface TextProps extends Omit<RNTextProps, 'style'> {
  variant?: TextStyleName;
  tone?: TextTone;
}

export function Text({ variant = 'body', tone = 'primary', ...rest }: TextProps) {
  const theme = useTheme();
  return (
    <RNText
      {...rest}
      style={{ ...theme.textStyles[variant], color: theme.colors[textToneColor[tone]] }}
    />
  );
}
