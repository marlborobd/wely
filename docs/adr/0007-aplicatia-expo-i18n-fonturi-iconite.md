# ADR-0007: Aplicația Expo, i18n, fonturi Inter și iconițe Phosphor

- **Stare:** Acceptat (aprobat de proprietar la pasul 3A; Phosphor confirmat explicit).
- **Data:** 2026-10-05

## Context

Primul pas de aplicație mobilă: schelet Expo care pornește pe iPhone, cu temă, fonturi și texte
în română, fără ecrane reale încă (Home vine la pasul 4).

## Decizie

- **Expo SDK 57** (expo 57.0.26, React Native 0.86.3, React 19.2.3, expo-router ~57.0.24),
  în `apps/mobile`. Versiunile pachetelor Expo sunt cele din `expo/bundledNativeModules.json`
  (`expo install` nu a putut contacta serverele Expo din sandbox, deci s-au fixat manual la
  aceleași valori). Rulează `npx expo install --check` local pentru confirmare.
- **Rutare:** expo-router, rute în `src/app`, alias `@/*` → `src/*`, `typedRoutes` activ.
- **Fonturi:** Inter 400/500/600/700 din `@expo-google-fonts/inter` 0.4.2, înregistrate sub
  numele din tokens (`fontFamily`). Ecranul splash rămâne până se încarcă fonturile; dacă
  încărcarea eșuează, aplicația pornește cu fontul sistemului (nu se blochează).
- **i18n:** pachetul `@wely/i18n` (i18next 26.4.2 + react-i18next 17.0.15). Română implicită,
  engleză secundară. Chei tipizate (cheie inexistentă = eroare la compilare), inițializare
  sincronă, resurse incluse în aplicație (funcționează offline). Limbă nesuportată → română.
  Teste: paritate chei ro/en, fără ș/ț cu sedilă, texte aprobate.
- **Iconițe:** Phosphor (`phosphor-react-native`), set unic. `regular` în liste, `bold` în
  butoane și tile-uri, `fill` pentru tab activ. Se instalează la pasul 3B.
- **Temă:** `ThemeProvider` urmează tema dispozitivului (`resolveScheme('system', …)`).
  Preferința din Profil se adaugă mai târziu.

## Alternative

- Lucide: respins de proprietar în favoarea Phosphor (aspect mai apropiat de aplicațiile de
  ridesharing). Setul Uber este proprietar și nu poate fi reutilizat.
- Fără bibliotecă i18n: fără pluralizare/interpolare și fără chei tipizate. Respins.

## Riscuri

- Compatibilitatea Expo Go cu SDK 57 pe iPhone **nu este verificată**; dacă nu merge, e
  nevoie de development build (posibil cont Apple Developer).
- Textele în engleză sunt traduse de Claude; de revăzut de proprietar.
- Metro cu workspace-uri pnpm: verificat cu `expo export --platform ios` (bundle reușit);
  rularea pe dispozitiv rămâne de verificat.
