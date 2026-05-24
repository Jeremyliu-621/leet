import type { ThemePreference } from '../types';

// Resolves a `ThemePreference` to a concrete `dark` or `light` token, applies
// it to `document.documentElement`, and keeps it in sync with the OS
// preference when the user has picked `system`.

export type ResolvedTheme = 'dark' | 'light';

const THEME_ATTRIBUTE = 'data-theme';

/** Resolves a stored preference to the concrete theme that should be applied. */
export function resolveTheme(preference: ThemePreference): ResolvedTheme {
  if (preference === 'system') {
    if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') {
      return 'dark';
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }
  return preference;
}

/** Writes the resolved theme to the root element so CSS variables flip. */
export function applyTheme(preference: ThemePreference): ResolvedTheme {
  const resolved = resolveTheme(preference);
  if (typeof document !== 'undefined') {
    document.documentElement.setAttribute(THEME_ATTRIBUTE, resolved);
  }
  return resolved;
}

/**
 * Watches the OS theme and re-applies whenever it changes — but only while
 * the user has picked `system`. Returns an unsubscribe function for cleanup.
 */
export function watchSystemTheme(
  getPreference: () => ThemePreference,
  onResolve: (resolved: ResolvedTheme) => void = () => {},
): () => void {
  if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') {
    return () => {};
  }
  const media = window.matchMedia('(prefers-color-scheme: dark)');
  const listener = (): void => {
    if (getPreference() !== 'system') return;
    const resolved = applyTheme('system');
    onResolve(resolved);
  };
  media.addEventListener('change', listener);
  return () => media.removeEventListener('change', listener);
}
