import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { ESLint } from 'eslint';
import { describe, expect, it } from 'vitest';
import { welyConfig } from '../eslint/index.js';

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../../..');

const eslint = new ESLint({
  cwd: repoRoot,
  overrideConfigFile: true,
  overrideConfig: welyConfig,
});

/** Lints `code` as if it lived at `file` (relative to the repo root); returns rule violations. */
async function violations(code, file) {
  const [result] = await eslint.lintText(code, { filePath: path.join(repoRoot, file) });
  return result.messages.filter((message) => message.ruleId === 'no-restricted-syntax');
}

const APP = 'apps/mobile/src/Example.tsx';

describe('hardcoded colors', () => {
  it.each(['#55E2DA', '#fff', '#FFFFFF80', 'rgba(0, 0, 0, 0.5)', 'hsl(10, 20%, 30%)'])(
    'reports %s in apps',
    async (color) => {
      expect(await violations(`export const c = '${color}';`, APP)).toHaveLength(1);
    },
  );

  it('does not report ordinary strings', async () => {
    expect(await violations(`export const id = '#section-1-header';`, APP)).toHaveLength(0);
  });

  it('is allowed in tokens, forbidden in ui components', async () => {
    const code = `export const c = '#55E2DA';`;
    expect(await violations(code, 'packages/ui/src/tokens/primitives/colors.ts')).toHaveLength(0);
    expect(await violations(code, 'packages/ui/src/components/Button.tsx')).toHaveLength(1);
  });

  it('is allowed in tests', async () => {
    expect(
      await violations(`export const c = '#55E2DA';`, 'apps/mobile/src/a.test.ts'),
    ).toHaveLength(0);
  });
});

describe('magic numbers in styles', () => {
  it.each([
    'padding: 17',
    'marginTop: -8',
    'fontSize: 14',
    'borderRadius: 16',
    'opacity: 0.5',
    'width: 120',
  ])('reports { %s }', async (style) => {
    expect(await violations(`export const s = { ${style} };`, APP)).toHaveLength(1);
  });

  it.each([
    'padding: 0',
    'padding: theme.space[4]',
    'borderRadius: theme.radius.md',
    "width: '100%'",
    'flex: 1',
  ])('allows { %s }', async (style) => {
    expect(await violations(`export const s = { ${style} };`, APP)).toHaveLength(0);
  });
});

describe('hardcoded UI text', () => {
  it.each([
    '<Text>Acasă</Text>',
    "<Text>{'Salut'}</Text>",
    '<Input placeholder="Încotro?" />',
    '<Button title="Vezi ruta" />',
    '<Pressable accessibilityLabel="Închide" />',
  ])('reports %s', async (jsx) => {
    expect(await violations(`export const x = ${jsx};`, APP)).toHaveLength(1);
  });

  it.each([
    "<Text>{t('home.title')}</Text>",
    '<Icon name="home" />',
    '<Input placeholder={t("search.placeholder")} />',
    '<View>\n  <Text>{label}</Text>\n</View>',
  ])('allows %s', async (jsx) => {
    expect(await violations(`export const x = ${jsx};`, APP)).toHaveLength(0);
  });
});
