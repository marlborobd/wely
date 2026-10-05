import { ClockCounterClockwise, Compass, House, Icon, Megaphone, User, useTheme } from '@wely/ui';
import type { PhosphorIcon } from '@wely/ui';
import { useTranslation } from '@wely/i18n';
import { Tabs } from 'expo-router';

function tabIcon(glyph: PhosphorIcon) {
  return function TabIcon({ focused }: { focused: boolean }) {
    return (
      <Icon
        icon={glyph}
        weight={focused ? 'fill' : 'regular'}
        tone={focused ? 'brand' : 'secondary'}
      />
    );
  };
}

export default function TabsLayout() {
  const theme = useTheme();
  const { t } = useTranslation();

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: theme.colors.primaryText,
        tabBarInactiveTintColor: theme.colors.textSecondary,
        tabBarLabelStyle: theme.textStyles.caption,
        tabBarStyle: {
          backgroundColor: theme.colors.surface,
          borderTopColor: theme.colors.borderDecorative,
        },
      }}
    >
      <Tabs.Screen name="index" options={{ title: t('tabs.home'), tabBarIcon: tabIcon(House) }} />
      <Tabs.Screen
        name="discover"
        options={{ title: t('tabs.discover'), tabBarIcon: tabIcon(Compass) }}
      />
      <Tabs.Screen
        name="civic"
        options={{ title: t('tabs.civic'), tabBarIcon: tabIcon(Megaphone) }}
      />
      <Tabs.Screen
        name="activity"
        options={{ title: t('tabs.activity'), tabBarIcon: tabIcon(ClockCounterClockwise) }}
      />
      <Tabs.Screen
        name="profile"
        options={{ title: t('tabs.profile'), tabBarIcon: tabIcon(User) }}
      />
    </Tabs>
  );
}
