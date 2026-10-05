# apps/api

Backend NestJS 12 (ESM, TypeScript strict, Vitest). Pasul 5A: doar scheletul și `GET /health`.

Module planificate (fiecare într-un pas aprobat): auth, users, places, routing, transit-data,
events, consent, feature-flags, admin.

```bash
pnpm --filter @wely/api dev     # pornește cu reload, http://localhost:3000/health
pnpm --filter @wely/api build && pnpm --filter @wely/api start
```

Variabile de mediu (validate la pornire cu zod, vezi `src/config/env.ts`): `NODE_ENV`, `PORT`
(implicit 3000), `HOST` (implicit 0.0.0.0).
