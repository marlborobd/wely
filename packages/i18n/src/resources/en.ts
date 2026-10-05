import type { Translation } from './ro';

/** Secondary language. Same keys as Romanian (enforced by the type). */
export const en: Translation = {
  app: {
    name: 'Wely',
  },
  tabs: {
    home: 'Home',
    discover: 'Discover',
    civic: 'Civic',
    activity: 'Activity',
    profile: 'Profile',
  },
  common: {
    comingSoon: 'Coming soon',
    comingSoonMessage: 'We are working on this section.',
  },
  home: {
    title: 'Let’s go everywhere.',
    searchPlaceholder: 'Where to?',
    cards: {
      routes: { title: 'Routes', subtitle: 'Public transport' },
      taxi: { title: 'Taxi', subtitle: 'Order quickly' },
      discover: { title: 'Discover', subtitle: 'Explore the city' },
      civic: { title: 'Civic', subtitle: 'Report' },
    },
    recent: {
      title: 'Recent',
      home: 'Home',
      work: 'Work',
      lastAddress: 'Last address',
    },
  },
};
