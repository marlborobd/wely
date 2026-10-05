import {
  ActionCard,
  Briefcase,
  Bus,
  ClockCounterClockwise,
  Compass,
  House,
  ListRow,
  Megaphone,
  SearchBar,
  Taxi,
  Text,
  useTheme,
} from '@wely/ui';
import { useTranslation } from '@wely/i18n';
import { useRouter } from 'expo-router';
import { ScrollView, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export function HomeScreen() {
  const theme = useTheme();
  const { t } = useTranslation();
  const router = useRouter();
  const insets = useSafeAreaInsets();

  const openSearch = () => router.navigate('/search');
  const openDiscover = () => router.navigate('/discover');
  const openCivic = () => router.navigate('/civic');

  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: theme.colors.background }}
      contentContainerStyle={{
        gap: theme.space[4],
        padding: theme.space[4],
        paddingTop: insets.top + theme.space[4],
      }}
    >
      <Text variant="headline">{t('home.title')}</Text>

      <SearchBar placeholder={t('home.searchPlaceholder')} onPress={openSearch} />

      <View style={{ flexDirection: 'row', gap: theme.space[3] }}>
        <ActionCard
          title={t('home.cards.routes.title')}
          subtitle={t('home.cards.routes.subtitle')}
          icon={Bus}
          onPress={openSearch}
        />
        <ActionCard
          title={t('home.cards.taxi.title')}
          subtitle={t('home.cards.taxi.subtitle')}
          icon={Taxi}
          onPress={openSearch}
        />
      </View>
      <View style={{ flexDirection: 'row', gap: theme.space[3] }}>
        <ActionCard
          title={t('home.cards.discover.title')}
          subtitle={t('home.cards.discover.subtitle')}
          icon={Compass}
          onPress={openDiscover}
        />
        <ActionCard
          title={t('home.cards.civic.title')}
          subtitle={t('home.cards.civic.subtitle')}
          icon={Megaphone}
          onPress={openCivic}
        />
      </View>

      <View style={{ gap: theme.space[1] }}>
        <Text variant="title">{t('home.recent.title')}</Text>
        <ListRow title={t('home.recent.home')} icon={House} />
        <ListRow title={t('home.recent.work')} icon={Briefcase} />
        <ListRow title={t('home.recent.lastAddress')} icon={ClockCounterClockwise} />
      </View>
    </ScrollView>
  );
}
