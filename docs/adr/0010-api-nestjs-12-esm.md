# ADR-0010: Scheletul API – NestJS 12, ESM, Vitest, zod

- **Stare:** Acceptat (aprobat de proprietar la pasul 5A).
- **Data:** 2026-10-05

## Decizie

- **NestJS 12.1.2** (`@nestjs/common`, `core`, `platform-express`, `testing`). Pachetele Nest 12
  sunt doar ESM (verificat în `package.json`: `"type": "module"`); cerință: Node ≥ 20.19 sau
  ≥ 22.12 (proiectul folosește Node 22). Sursa: [migration guide](https://docs.nestjs.com/migration-guide).
- `apps/api` este ESM: `"type": "module"`, `module`/`moduleResolution` `nodenext`, importuri
  relative cu extensia `.js`, `target` ES2023, TypeScript ~6.0.3 (ca în restul proiectului).
- **Teste:** Vitest 5.0.3 (implicit pentru proiecte Nest ESM) + `supertest` 7.3.1 +
  `@nestjs/testing`. Controllerele nu folosesc încă injecție după tip; când va fi nevoie
  (servicii injectate) se folosește `@Inject()` explicit sau SWC (de decis atunci).
- **Configurare:** `zod` 4.6.5, `loadEnv()` validează mediul la pornire și oprește aplicația cu
  mesaj clar dacă e greșit. Fără `@nestjs/config` (mai puține dependențe).
- **Rulare:** `tsx watch` în dezvoltare, `tsc` → `dist/` și `node dist/main.js` în producție.
- ESLint: regulile de design (culori, numere de stil, texte în JSX) nu se aplică la `apps/api`.
- Fără dependențe de `@wely/*` încă. Pachetele partajate sunt TypeScript sursă; consumul lor din
  API (build/ESM) se decide când e prima dată nevoie (ex. `@wely/types`).

## Alternative

- Nest 11 (CommonJS + Jest): respins, Nest 12 e versiunea curentă și ESM se potrivește cu restul
  monorepo-ului.
- `@nestjs/config`: justificat mai târziu dacă apar multe variabile.

## Riscuri

- Nest 12 e recent; ecosistemul (pachete terțe) poate avea mici incompatibilități ESM.
- Nu a fost testat un deploy real pe Railway (neexistent încă); pregătit prin `PORT`/`HOST`.
- Header-ul `X-Powered-By` e dezactivat; alte măsuri de securitate (CORS, rate limit, helmet)
  vin odată cu primele endpoint-uri reale.
