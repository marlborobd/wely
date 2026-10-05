# Pornire locală (iPhone)

Sandbox-ul cloud nu poate servi aplicația către iPhone; rulează local pe calculator.

1. Instalează Node 22 și activează pnpm: `corepack enable`.
2. `git clone https://github.com/marlborobd/wely.git && cd wely`
3. `pnpm install`
4. `pnpm --filter @wely/mobile start`
5. Instalează **Expo Go** din App Store pe iPhone și scanează codul QR (iPhone și calculator
   în aceeași rețea Wi-Fi).

**Neverificat:** dacă Expo Go acceptă SDK 57. Dacă apare o eroare de versiune, spune-mi
mesajul exact; următoarea variantă este un development build.

Verificări înainte de commit: `pnpm typecheck && pnpm test && pnpm lint && pnpm format:check`.
