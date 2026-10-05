# @wely/config

Configurări partajate pentru tot monorepo-ul.

## ESLint (`@wely/config/eslint`)

Importat în `eslint.config.mjs` din rădăcină. Pe lângă regulile recomandate (ESLint +
typescript-eslint), în `apps/**` și în componentele din `packages/ui/src` (în afara `tokens/`):

- **interzice culori hardcodate** (hex, `rgb()`, `hsl()`) → se folosesc tokens semantici;
- **interzice numere „magice" în stiluri** (`padding`, `fontSize`, `borderRadius` etc.; doar `0` e permis);
- **interzice text hardcodat în JSX** (conținut și atribute precum `title`, `placeholder`) → chei i18n.

Regulile sunt testate în `test/rules.test.js` (`pnpm test`).
