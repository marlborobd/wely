/**
 * Romanian is the default language and the source of truth for the key structure.
 * All texts use correct diacritics (ă â î ș ț, with comma-below ș/ț – never ş/ţ).
 * `en` must have exactly the same keys (enforced by its type and by a test).
 */
export const ro = {
  app: {
    name: 'Wely',
  },
  tabs: {
    home: 'Acasă',
    discover: 'Discover',
    civic: 'Civic',
    activity: 'Activitate',
    profile: 'Profil',
  },
  common: {
    comingSoon: 'În curând',
    comingSoonMessage: 'Lucrăm la această secțiune.',
  },
  home: {
    title: 'Să mergem peste tot.',
    searchPlaceholder: 'Încotro?',
    cards: {
      routes: { title: 'Rute', subtitle: 'Transport public' },
      taxi: { title: 'Taxi', subtitle: 'Comandă rapid' },
      discover: { title: 'Discover', subtitle: 'Explorează orașul' },
      civic: { title: 'Civic', subtitle: 'Raportează' },
    },
    recent: {
      title: 'Recente',
      home: 'Acasă',
      work: 'Serviciu',
      lastAddress: 'Ultima adresă',
    },
  },
};

export type Translation = typeof ro;
