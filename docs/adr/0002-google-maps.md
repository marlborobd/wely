# ADR-0002: Google Maps Platform pentru hartă, căutare și rute

- **Stare:** Acceptat (decizia proprietarului)
- **Data:** 2026-10-05

## Context

Dorim să folosim datele Google pentru locuri de vizitat și restaurante, plus autocomplete de adrese.

## Decizie

Google Maps Platform pentru hartă, Places (autocomplete + detalii) și rute. Transportul public din
Arad vine din datele proprii (format GTFS, introduse manual la început, în `city-packs/arad`).

## Costuri (confirmat din surse terțe; de verificat în calculatorul oficial Google)

- Din martie 2025 fiecare tip de apel are cotă gratuită proprie: 10.000/lună (Essentials),
  5.000 (Pro), 1.000 (Enterprise). Creditul de 200$ nu mai există.
- Autocomplete: aprox. 2,83$/1.000 de apeluri; gratuit dacă sesiunea se închide cu Place Details
  de nivel Pro/Enterprise.
- **Estimare neverificată** pentru 10.000 de utilizatori activi/lună: 100–400$/lună.

## Riscuri

- Termenii Google cer afișarea datelor Places pe o hartă Google și limitează stocarea/cache-ul
  (în practică doar `place_id`). Afectează offline și Discover. **De verificat în termenii actuali**
  înainte de implementarea cache-ului.
- Fără plafon automat de cost: setăm alerte de buget și cote în Google Cloud.
- Chei separate pe platformă, restricționate (vezi docs/setup-conturi.md).
