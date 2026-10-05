# ADR-0003: Offline cu Expo SQLite

- **Stare:** Acceptat
- **Data:** 2026-10-05

## Decizie

Expo SQLite pentru offline în Valul 1 (ultimele rute, recente, orare). Simplu, oficial Expo.

## Alternative

WatermelonDB: strat reactiv cu protocol de sync, dar mai multă configurare (dev build).
Reconsiderăm doar dacă apare nevoia de sync complex.

## Consecințe

Fără sync încorporat; datele Places respectă limitele din ADR-0002.
