import { fontFamily } from '@wely/ui';
// Per-weight imports: the package root would bundle all 18 Inter files into the app.
import { Inter_400Regular } from '@expo-google-fonts/inter/400Regular';
import { Inter_500Medium } from '@expo-google-fonts/inter/500Medium';
import { Inter_600SemiBold } from '@expo-google-fonts/inter/600SemiBold';
import { Inter_700Bold } from '@expo-google-fonts/inter/700Bold';
import { useFonts } from 'expo-font';

/** Loads the Inter weights under the family names defined by the design tokens. */
export function useAppFonts(): { loaded: boolean; error: Error | null } {
  const [loaded, error] = useFonts({
    [fontFamily.regular]: Inter_400Regular,
    [fontFamily.medium]: Inter_500Medium,
    [fontFamily.semibold]: Inter_600SemiBold,
    [fontFamily.bold]: Inter_700Bold,
  });
  return { loaded, error };
}
