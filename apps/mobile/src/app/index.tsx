import { useTheme } from '@wely/ui';
import { useTranslation } from '@wely/i18n';
import { Text, View } from 'react-native';

// Temporary placeholder – replaced by the real Home screen in step 4.
export default function Index() {
  const theme = useTheme();
  const { t } = useTranslation();

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: theme.space[4],
        backgroundColor: theme.colors.background,
      }}
    >
      <Text style={{ ...theme.textStyles.headline, color: theme.colors.textPrimary }}>
        {t('app.name')}
      </Text>
      <Text style={{ ...theme.textStyles.body, color: theme.colors.textSecondary }}>
        {t('home.searchPlaceholder')}
      </Text>
    </View>
  );
}
