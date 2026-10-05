# ADR-0001: Monorepo și versiuni fixate

- **Stare:** Acceptat
- **Data:** 2026-10-05

## Context

Un singur repo pentru mobile, api, admin și pachete partajate, cu build cache și tipuri comune.

## Decizie

Turborepo 2.11.7 + pnpm 10.28.0, Node 22, TypeScript ~6.0.3 (strict, `noUncheckedIndexedAccess`).
Pachetele interne sunt consumate direct ca sursă TypeScript (`main` → `src/index.ts`).
Versiunile au fost citite din registry la 2026-10-05.

## Alternative

- TypeScript 7.0.2 (cea mai nouă): respinsă; șablonul Expo SDK 57 folosește ~6.0.3, iar
  compatibilitatea Expo/NestJS cu 7.x nu e verificată.
- pnpm 12.x: respinsă; păstrăm versiunea 10.x deja testată.

## Consecințe și riscuri

- Pachetele consumate ca sursă TS merg direct cu Metro (Expo) și Vite, dar **NestJS cere
  compilare**: când inițializăm `apps/api` decidem separat cum consumă pachetele (build `dist`
  sau bundling). De tratat în pasul de inițializare api.
- Versiunile se revizuiesc la fiecare inițializare de aplicație.
