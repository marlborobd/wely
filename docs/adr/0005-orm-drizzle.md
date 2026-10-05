# ADR-0005: ORM pentru PostgreSQL + PostGIS

- **Stare:** Propus (NEAPROBAT – nu se presupune în cod)
- **Data:** 2026-10-05

## Context

Wely lucrează intens cu date geografice (stații, POI, City Packs). Master Plan menționează Prisma,
dar Prisma tratează tipurile PostGIS ca „Unsupported", deci interogările geo ar fi SQL brut, fără tipuri.

## Propunere

Drizzle ORM (TypeScript nativ, suport pentru tipuri geometrice).

## Alternative

Prisma + SQL brut pentru partea geo; Kysely/TypeORM.

## Decizia rămâne la proprietar. Se închide înainte de orice schemă de bază de date.
