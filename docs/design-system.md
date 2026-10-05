# Design System – paletă și reguli (aprobat 2026-10-05)

Culorile înghețate NU se schimbă. Calculele de contrast sunt WCAG (rulate, nu estimate).

## Culori înghețate

| Rol            | Hex       |
| -------------- | --------- |
| Primary        | `#55E2DA` |
| Primary Dark   | `#0D9488` |
| SOS / Alert    | `#F43F5E` |
| Background     | `#F8FAFC` |
| Surface        | `#FFFFFF` |
| Text Primary   | `#0F172A` |
| Text Secondary | `#64748B` |
| Success / Eco  | `#10B981` |

## Contrast pe alb (light)

`#55E2DA` 1,58:1 · `#0D9488` 3,74:1 · `#F43F5E` 3,67:1 · `#10B981` 2,54:1 ·
`#64748B` 4,76:1 (4,55:1 pe `#F8FAFC`) · `#0F172A` 17,85:1.
Text `#0F172A` pe `#55E2DA`: 11,29:1.

## Reguli de utilizare

1. `#55E2DA` doar ca **fundal**, cu text/iconiță `#0F172A` (butoane principale, plăcuțe iconițe).
2. `#0D9488` doar pentru iconițe și text mare (≥3:1). Nu pentru text mic.
3. `#F43F5E` pentru iconițe, fundaluri mari, text mare/bold. Nu pentru text mic.
4. `#10B981` doar fundal, cu text închis (7,04:1). Nu ca text/iconiță pe alb.

## Tokeni aditivi aprobați

- `primaryText` `#0F766E` – 5,47:1 pe alb, 5,23:1 pe `#F8FAFC` (etichete mici, linkuri, tab activ)
- `dangerStrong` `#E11D48` – 4,70:1 cu text alb (SOS, erori mici)
- `successText` `#047857` – 5,48:1 pe alb

## Dark mode (propus de Claude, aprobat de proprietar)

Fundal `#0B1220` · suprafață `#131C2E` · text `#F1F5F9` (15,5:1 pe suprafață) ·
text secundar `#94A3B8` (6,6:1) · primary `#55E2DA` (10,8:1) · eroare `#FB7185` (6,3:1) ·
succes `#34D399` (8,9:1). Toate ≥4,5:1 (calculat; neverificat încă pe ecran).

## Rămâne de calculat (pasul 2)

Bordurile câmpurilor de formular au nevoie de ≥3:1. Cardurile folosesc umbră, fără bordură.

## Alte reguli

Radius 16–20px · font Inter · țintă minimă 44px · fără culori hex sau texte în cod, doar tokens
și i18n · iconițe: set unic (propus: Lucide – de confirmat).
