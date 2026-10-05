import { describe, expect, it } from 'vitest';
import { loadEnv } from './env.js';

describe('loadEnv', () => {
  it('applies defaults for an empty environment', () => {
    expect(loadEnv({})).toEqual({ NODE_ENV: 'development', PORT: 3000, HOST: '0.0.0.0' });
  });

  it('parses PORT from a string, as hosts provide it', () => {
    expect(loadEnv({ PORT: '8080' }).PORT).toBe(8080);
  });

  it('accepts a production environment', () => {
    expect(loadEnv({ NODE_ENV: 'production' }).NODE_ENV).toBe('production');
  });

  it.each(['abc', '0', '70000', '-1', '3.5'])('rejects PORT=%s', (port) => {
    expect(() => loadEnv({ PORT: port })).toThrow(/PORT/);
  });

  it('rejects an unknown NODE_ENV', () => {
    expect(() => loadEnv({ NODE_ENV: 'staging' })).toThrow(/NODE_ENV/);
  });

  it('rejects an empty HOST', () => {
    expect(() => loadEnv({ HOST: '' })).toThrow(/HOST/);
  });
});
