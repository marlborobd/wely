import js from '@eslint/js';
import tseslint from 'typescript-eslint';

/**
 * Style properties whose numeric values must come from tokens (`theme.space`, `theme.radius`, ...).
 * `0` is allowed; any other number literal is reported.
 */
const STYLE_KEYS =
  '^(padding|paddingHorizontal|paddingVertical|paddingTop|paddingBottom|paddingLeft|paddingRight|' +
  'margin|marginHorizontal|marginVertical|marginTop|marginBottom|marginLeft|marginRight|' +
  'gap|rowGap|columnGap|fontSize|lineHeight|letterSpacing|borderRadius|borderWidth|' +
  'width|height|minWidth|minHeight|maxWidth|maxHeight|top|bottom|left|right|' +
  'opacity|elevation|shadowRadius|shadowOpacity)$';

/** Props that carry text a user reads. */
const TEXT_PROPS =
  '^(title|label|placeholder|alt|accessibilityLabel|accessibilityHint|aria-label)$';

const LETTERS = '[A-Za-zĂÂÎȘȚăâîșțŞŢşţ]';

const COLOR_MESSAGE =
  'No hardcoded colors. Use semantic tokens through useTheme() (see docs/design-system.md).';
const STYLE_MESSAGE =
  'No magic numbers in style values. Use tokens (theme.space, theme.radius, theme.size, ...). Only 0 is allowed.';
const TEXT_MESSAGE =
  'No hardcoded UI text. Use i18n keys from @wely/i18n (texts are Romanian with diacritics).';

/** Rules for UI code: apps and the component part of @wely/ui. */
const uiRestrictions = [
  {
    selector: 'Literal[value=/^#(?:[0-9a-fA-F]{3,4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/]',
    message: COLOR_MESSAGE,
  },
  { selector: 'Literal[value=/^(rgb|rgba|hsl|hsla)\\(/]', message: COLOR_MESSAGE },
  { selector: `Property[key.name=/${STYLE_KEYS}/] > Literal[value>0]`, message: STYLE_MESSAGE },
  {
    selector: `Property[key.name=/${STYLE_KEYS}/] > UnaryExpression[operator='-'] > Literal`,
    message: STYLE_MESSAGE,
  },
  { selector: 'JSXText[value=/\\S/]', message: TEXT_MESSAGE },
  {
    selector: `JSXElement > JSXExpressionContainer > Literal[value=/${LETTERS}/]`,
    message: TEXT_MESSAGE,
  },
  { selector: `JSXAttribute[name.name=/${TEXT_PROPS}/] > Literal`, message: TEXT_MESSAGE },
  {
    selector: `JSXAttribute[name.name=/${TEXT_PROPS}/] > JSXExpressionContainer > Literal`,
    message: TEXT_MESSAGE,
  },
];

export const welyConfig = [
  {
    ignores: [
      '**/node_modules/**',
      '**/dist/**',
      '**/build/**',
      '**/.expo/**',
      '**/.turbo/**',
      '**/coverage/**',
    ],
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    // Tokens are the only place where raw values live; tests may use anything.
    files: ['apps/**/*.{ts,tsx}', 'packages/ui/src/**/*.{ts,tsx}'],
    ignores: ['packages/ui/src/tokens/**', '**/*.test.{ts,tsx}'],
    rules: {
      'no-restricted-syntax': ['error', ...uiRestrictions],
    },
  },
];

export default welyConfig;
