# Pornire locală

Sandbox-ul cloud nu poate servi aplicația către un telefon sau emulator; rulează local.
Decizia proprietarului (2026-10-05): testăm pe **emulator Android (Android Studio) pe Linux**;
iOS vine după ce aplicația e gata și există cont Apple Developer. iOS Simulator nu rulează pe
Linux (cere macOS + Xcode).

## 1. Cod

1. Node 22 și `corepack enable` (activează pnpm).
2. `git clone https://github.com/marlborobd/wely.git && cd wely`
3. `pnpm install`

## 2. Emulator Android (Linux)

1. Instalează Android Studio și deschide-l o dată (descarcă Android SDK).
2. Device Manager → Create Device → un Pixel recent + o imagine de sistem recentă → pornește-l.
3. Setează variabilele (în `~/.bashrc`): `ANDROID_HOME=$HOME/Android/Sdk` și adaugă
   `$ANDROID_HOME/platform-tools` în `PATH`. Verifică cu `adb devices` (emulatorul apare).
4. `pnpm --filter @wely/mobile start`, apoi apasă `a` în terminal.

**Neverificat:** dacă Expo Go (instalat automat pe emulator) acceptă SDK 57. Dacă da, e cea mai
rapidă cale pentru ecrane, temă și texte.

## 3. Development build (necesar pentru harta Google)

Expo Go nu e potrivit pentru harta Google cu cheia noastră. Pe Android, un development build se
face local, gratuit, fără cont Apple/Google Play:

1. Instalează JDK 17 (verificat în sursele React Native 0.86: `jvmToolchain(17)`). Din Android Studio → SDK Manager instalează: Android SDK Platform 36, Build-Tools 36.0.0, NDK 27.1.12297006 (valori din `react-native/gradle/libs.versions.toml`; `minSdk` = 24, deci telefoane cu Android 7.0+).
2. `pnpm --filter @wely/mobile exec expo run:android` (generează `android/`, ignorat de git).

Vom introduce asta când ajungem la hartă (pasul 5), nu înainte.

## 4. Verificări înainte de commit

`pnpm typecheck && pnpm test && pnpm lint && pnpm format:check`

## Limitări de reținut

- Android nu arată exact cum va arăta iOS (fonturi, zone sigure, bara de jos, bottom sheet).
  Verificarea finală de aspect pe iOS se face când avem iPhone + cont Apple Developer.
- Pentru iOS reale (development build, TestFlight) e nevoie de cont Apple Developer.
