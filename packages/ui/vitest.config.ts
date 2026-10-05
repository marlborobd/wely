import { defineConfig } from 'vitest/config';

// Pure tests (tokens, contrast, theme). Component tests run with Jest (jest.config.js).
export default defineConfig({ test: { include: ['test/**/*.test.ts'] } });
