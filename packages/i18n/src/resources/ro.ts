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
  home: {
    searchPlaceholder: 'Încotro?',
  },
};

export type Translation = typeof ro;
