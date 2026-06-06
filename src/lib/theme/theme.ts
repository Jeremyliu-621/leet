import type { ThemePreference } from '../types';

// Resolves a `ThemePreference` to a concrete token, applies it to
// `document.documentElement`, and keeps it in sync with the OS preference
// when the user has picked `system`.

export type ResolvedTheme =
  | 'dark'
  | 'light'
  | 'serika-dark'
  | 'nord'
  | 'botanical'
  | 'carbon'
  | 'moonlight'
  | 'muted-ink'
  | 'terminal'
  | 'dracula'
  | 'paper'
  | 'leetmeow';

/** Themes whose editor should use the light CM theme. All others use dark. */
const LIGHT_THEMES: ReadonlySet<string> = new Set(['light', 'paper', 'leetmeow']);

/** Returns true if a resolved theme string should use the light editor/syntax theme. */
export function isLightTheme(resolved: string): boolean {
  return LIGHT_THEMES.has(resolved);
}

const THEME_ATTRIBUTE = 'data-theme';

/**
 * Resolves a stored preference to the concrete theme that should be applied.
 * `system` resolves to plain `dark` or `light` based on the OS setting.
 */
export function resolveTheme(preference: ThemePreference): ResolvedTheme {
  if (preference === 'system') {
    if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') {
      return 'dark';
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }
  return preference as ResolvedTheme;
}

/** Resolves to the base colour mode ('dark' | 'light') for components that only need that. */
export function resolveBaseTheme(preference: ThemePreference): 'dark' | 'light' {
  const resolved = resolveTheme(preference);
  return LIGHT_THEMES.has(resolved) ? 'light' : 'dark';
}

/** Writes the resolved theme to the root element so CSS variables flip. */
export function applyTheme(preference: ThemePreference): ResolvedTheme {
  const resolved = resolveTheme(preference);
  if (typeof document !== 'undefined') {
    document.documentElement.setAttribute(THEME_ATTRIBUTE, resolved);
  }
  return resolved;
}

/** Smallest / largest editor font sizes accepted by the popup slider. */
export const MIN_EDITOR_FONT_SIZE = 10;
export const MAX_EDITOR_FONT_SIZE = 24;

/**
 * Writes the editor font size to a CSS variable on the root element. The
 * stylesheet (`globals.css`) wires `.cm-content { font-size: var(--ll-editor-font-size) }`,
 * so this is enough to update every live CodeMirror editor.
 */
export function applyEditorFontSize(pixels: number): number {
  const clamped = Math.max(MIN_EDITOR_FONT_SIZE, Math.min(MAX_EDITOR_FONT_SIZE, Math.round(pixels)));
  if (typeof document !== 'undefined') {
    document.documentElement.style.setProperty('--ll-editor-font-size', `${clamped}px`);
  }
  return clamped;
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
