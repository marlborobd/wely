# ADR-0008: Componente UI de bază, registru de iconițe și teste cu Jest

- **Stare:** Acceptat (aprobat de proprietar la pasul 3B: componente, teste dacă ajută).
- **Data:** 2026-10-05

## Decizie

- Componente în `@wely/ui` (`src/components`): `Text`, `Icon`, `Button`, `IconTile`,
  `ActionCard`, `SearchBar`, `ListRow`, `StateMessage` (stări „gol”/„eroare”), `Sheet`.
  Folosesc doar tokens semantici prin `useTheme()`; textele vin ca props (din `@wely/i18n`).
  Stări acoperite: implicit, apăsat, dezactivat, încărcare, eroare, gol (unde au sens).
- **Registru de iconițe** `src/icons.ts`: aplicația importă iconițele din `@wely/ui`, nu direct
  din Phosphor. Motiv: Metro nu face tree-shaking pe rădăcina pachetului (bundle iOS 10 MB față
  de 4,1 MB cu importuri per iconiță) și setul de iconițe se poate schimba într-un singur loc.
  O iconiță nouă = o linie nouă. `phosphor-svg.ts` adaugă `className` la tipurile
  `react-native-svg` (cerut de sursele Phosphor).
- **Teste:** Vitest rămâne pentru teste pure (`test/`), Jest + `jest-expo` 57.0.5 +
  `@testing-library/react-native` 14.0.1 (+ `test-renderer` 1.3.0) pentru componente
  (`src/**/*.test.tsx`). Jest 29 (cel folosit de `jest-expo`). `pnpm test` rulează ambele.
- Dependențe native (`react-native-svg`, `reanimated`, `worklets`, `gesture-handler`) sunt
  peer în `@wely/ui` și dependențe în `apps/mobile`. Versiuni: cele din SDK 57.
- `Sheet` folosește `@gorhom/bottom-sheet` 5.2.14 și cere `GestureHandlerRootView` la rădăcina
  aplicației (se adaugă când prima foaie e folosită, pasul 5).

## Riscuri

- `Sheet` nu are teste și nu a rulat încă pe dispozitiv; se verifică la prima utilizare.
- Componentele nu au fost încă văzute pe ecran (Storybook = pasul 3C).
- Două rulatoare de teste într-un pachet: mai multă configurare, dar separă clar testele pure.
- Contrastul culorilor din componente se bazează pe perechile deja testate (`contrast.test.ts`).
