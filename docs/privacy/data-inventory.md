# Inventar de date și consimțământ (aprobat 2026-10-05)

Model inspirat de notificarea de confidențialitate Bolt, **adaptat**: Wely nu face curse și nu
procesează plăți, deci nu preluăm categoriile fără scop.

## Categorii de consimțământ

| Categorie       | Implicit             | Conținut                                                                                                                   |
| --------------- | -------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| Esențial        | necesar funcționării | cont Clerk, Home/Work și adrese salvate, preferințe, dispozitiv (OS, versiune app, model, limbă, token push, IP trunchiat) |
| Statistici      | OPRIT                | căutări, rute calculate, varianta aleasă, tap pe Bolt/Uber, ecrane, erori, performanță                                     |
| Locație precisă | OPRIT                | doar cu aplicația deschisă; istoric brut 90 de zile (propunere), apoi agregat pe zone                                      |

## Reguli

- Refuzul nu blochează aplicația. Retragerea se face din Profil → Confidențialitate.
- Se stochează: versiunea textului, data, alegerile.
- ID de analytics pseudonim, separat de ID-ul Clerk.
- NU colectăm: contacte, calendar, locație în fundal, plăți.

## De făcut înainte de utilizatori reali

- Text de consimțământ + politică de confidențialitate verificate de un specialist GDPR.
- Evaluare dacă e nevoie de DPIA (art. 35 GDPR).
