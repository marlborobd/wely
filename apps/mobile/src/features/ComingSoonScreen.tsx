import { StateMessage, Tray, useTheme } from '@wely/ui';
import { useTranslation } from '@wely/i18n';
import { View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

/** Temporary body for sections that are not built yet. */
export function ComingSoonScreen() {
  const theme = useTheme();
  const { t } = useTranslation();
  const insets = useSafeAreaInsets();

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        paddingTop: insets.top,
        backgroundColor: theme.colors.background,
      }}
    >
      <StateMessage
        kind="empty"
        icon={Tray}
        title={t('common.comingSoon')}
        message={t('common.comingSoonMessage')}
      />
    </View>
  );
}
