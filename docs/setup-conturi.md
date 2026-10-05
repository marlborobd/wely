# Ghid conturi externe (pas cu pas)

Conturile le creezi **tu** (parole, plăți, verificări). Nu trimite niciodată chei sau parole în chat;
le pui doar în `.env` local sau în setările serviciilor.

## Acum

1. **GitHub** – cont (email-ul tău), activează autentificarea în doi pași, creează repo **privat**
   `wely` (fără README/.gitignore, ca să fie gol).

## La inițializarea aplicației mobile

2. **Expo** (expo.dev) – cont gratuit. EAS (build-uri în cloud) îl configurăm abia când e nevoie.
3. **Google Cloud** – proiect nou „wely"; cont de facturare (cere card, fără plafon automat de cost);
   activează API-urile necesare (verificate la momentul respectiv); **buget și alerte** de cost;
   chei **separate** pe platformă (iOS, Android, server), restricționate la API-urile folosite și la
   aplicație (bundle id / SHA-1).
4. **Clerk** – cont gratuit, aplicație „Wely" (și una separată pentru admin sau aceeași, decidem).

## Mai târziu

5. **Sentry** (crash-uri), **Railway/Fly.io** (hosting), **Apple Developer** și **Google Play Console**
   (publicare; au taxe – verifică prețul actual la momentul înscrierii).
