# ADR-0004: Evenimente proprii, consimțământ pe categorii și admin în Valul 1

- **Stare:** Acceptat (decizia proprietarului)
- **Data:** 2026-10-05

## Context

Proprietarul vrea date din prima zi și un panou de administrare încă din Valul 1
(modificare de scope față de Master Plan, aprobată explicit).

## Decizie

- Tabel propriu `events` în PostgreSQL (fără PostHog acum); ID pseudonim separat de ID-ul Clerk;
  `city_id`, versiunea consimțământului, partiționare lunară.
- Consimțământ pe 3 categorii (esențial / statistici / locație precisă), opționalele oprite
  implicit; refuzul nu blochează aplicația.
- Admin (React + Vite) în Valul 1: overview, funnel, căutări/rute, sănătate tehnică, costuri Google,
  utilizatori + GDPR, manager date transport, feature flags, roluri + jurnal de audit.
  Un singur utilizator acum; tabel de roluri pregătit.
- Sentry pentru crash-uri.
- Estimare nouă de termen (neconfirmată): 12–13 săptămâni.

## Riscuri

- GDPR: textul de consimțământ, politica de confidențialitate și necesitatea unui DPIA (art. 35)
  trebuie verificate de un specialist **înainte de utilizatori reali**.
- Nu colectăm acum: contacte, calendar, locație în fundal.
