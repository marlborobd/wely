/**
 * Feature flags. Local defaults for now; the shape allows moving them to the server later
 * without touching the screens. New functionality ships behind a flag (see CLAUDE.md).
 */
export interface FeatureFlags {
  /** Contextual banner on Home (enabled in Wave 2). */
  contextualBanner: boolean;
  /** Primary action card on Home (enabled in Wave 2). */
  primaryActionCard: boolean;
}

export const defaultFeatureFlags: FeatureFlags = {
  contextualBanner: false,
  primaryActionCard: false,
};

export function useFeatureFlag(flag: keyof FeatureFlags): boolean {
  return defaultFeatureFlags[flag];
}
