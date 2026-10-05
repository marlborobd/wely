# ADR-0009: Structura de navigare, Home și feature flags (pasul 4)

- **Stare:** Acceptat (decizie delegată de proprietar: „ia decizia cea mai bună”).
- **Data:** 2026-10-05

## Decizie

- expo-router: grup `(tabs)` cu 5 tab-uri (Acasă, Discover, Civic, Activitate, Profil), toate
  vizibile; Discover, Civic, Activitate, Profil sunt ecrane „În curând” (`ComingSoonScreen`).
  `/search` este un ecran provizoriu; căutarea reală vine în pasul 5.
- Home: titlu, bară de căutare (deschide `/search`), 4 carduri egale (Rute, Taxi, Discover,
  Civic), „Recente” (Acasă, Serviciu, Ultima adresă) fără date reale. Harta Google vine în pasul 5.
- Feature flags locale (`apps/mobile/src/config/feature-flags.ts`): `contextualBanner`,
  `primaryActionCard`, ambele dezactivate. Nu există încă componentele lor (nu au conținut
  aprobat); se construiesc când li se definește conținutul (Wave 2).
- Storybook amânat: valoare mică la acest număr de componente, conflict de versiuni
  (`safe-area-context` 5.8.0 vs ~5.7.0 din SDK 57). Reevaluăm la ~15–20 componente.

## Riscuri

- Textele „În curând” / „Lucrăm la această secțiune.” sunt adăugate de Claude, de confirmat.
- Aspectul nu a fost văzut pe emulator/telefon (nu se poate rula de aici).
