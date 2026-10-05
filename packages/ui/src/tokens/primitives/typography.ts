/**
 * Font families as registered by `@expo-google-fonts/inter`.
 * UNVERIFIED: the exact family names must be confirmed when the font package is installed
 * in apps/mobile. On React Native with custom fonts, weight is selected by family name,
 * so text styles do not set `fontWeight`.
 */
export const fontFamily = {
  regular: 'Inter_400Regular',
  medium: 'Inter_500Medium',
  semibold: 'Inter_600SemiBold',
  bold: 'Inter_700Bold',
} as const;

export const textStyles = {
  caption: { fontFamily: fontFamily.regular, fontSize: 12, lineHeight: 16 },
  bodySmall: { fontFamily: fontFamily.regular, fontSize: 14, lineHeight: 20 },
  body: { fontFamily: fontFamily.regular, fontSize: 16, lineHeight: 24 },
  label: { fontFamily: fontFamily.medium, fontSize: 14, lineHeight: 20 },
  title: { fontFamily: fontFamily.semibold, fontSize: 20, lineHeight: 28 },
  headline: { fontFamily: fontFamily.bold, fontSize: 28, lineHeight: 34 },
} as const;

export type TextStyleName = keyof typeof textStyles;
