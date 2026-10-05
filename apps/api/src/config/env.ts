import { z } from 'zod';

const envSchema = z.object({
  NODE_ENV: z.enum(['development', 'test', 'production']).default('development'),
  /** Railway and similar hosts inject PORT. */
  PORT: z.coerce.number().int().min(1).max(65535).default(3000),
  /** Bind to all interfaces so containers can reach the server. */
  HOST: z.string().min(1).default('0.0.0.0'),
});

export type Env = z.infer<typeof envSchema>;

/**
 * Validates and types the process environment. Fails fast with a readable message,
 * so a misconfigured deployment never starts half-working.
 */
export function loadEnv(source: Record<string, string | undefined>): Env {
  const result = envSchema.safeParse(source);
  if (result.success) return result.data;

  const problems = result.error.issues
    .map((issue) => `${issue.path.join('.') || '(root)'}: ${issue.message}`)
    .join('; ');
  throw new Error(`Invalid environment configuration: ${problems}`);
}
