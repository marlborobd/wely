# ADR-0006: ESLint cu reguli de design system și Vitest pentru teste

- **Stare:** ESLint – Acceptat (aprobat de proprietar la pasul 2). Vitest – Propus, în uz
  (ales de Claude pentru teste; reversibil, de confirmat de proprietar).
- **Data:** 2026-10-05

## Context

Vrem ca designul să rămână consistent la orice modificare: fără culori, numere de stil sau texte
hardcodate. Regulile trebuie impuse automat, nu prin disciplină.

## Decizie

- ESLint 10.12.0 (flat config) + typescript-eslint 8.71.0, în `@wely/config/eslint`.
  În `apps/**` și componentele `@wely/ui` (fără `tokens/` și fără teste) sunt interzise: culori
  hex/`rgb()`/`hsl()`, numere magice în proprietăți de stil (doar `0`), text hardcodat în JSX.
- Vitest 5.0.3 pentru teste unitare în pachetele pure (contrast, tokens, reguli ESLint).
- Reguli verificate prin teste cu exemple bune și rele.

## Alternative

- Node `node:test`: fără bibliotecă nouă, dar cere extensii `.ts` în importuri, incompatibil cu
  compilarea CJS din NestJS. Respins.
- Jest: standardul Expo pentru componente. Poate fi adăugat în `apps/mobile` pentru teste de
  componente (jest-expo), separat de Vitest din pachetele pure.

## Riscuri

- Regulile bazate pe selectori AST pot da fals-pozitive (ex.: un număr în `width` care chiar e
  specific unei componente). Remediu: token nou în `tokens/`, nu dezactivarea regulii.
- Regulile de text acoperă doar atributele listate (`title`, `placeholder`, `label`, `alt`,
  `accessibilityLabel`, `accessibilityHint`, `aria-label`). Altele se adaugă la nevoie.
