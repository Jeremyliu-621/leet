import { StrictMode } from 'react';
import type { ReactNode } from 'react';
import { createRoot } from 'react-dom/client';
import { applyEditorFontSize, applyTheme, watchSystemTheme } from '../lib/theme';
import { getValue } from '../lib/storage';
import { DEFAULT_PREFERENCES } from '../lib/storage/defaults';
import { ErrorBoundary } from './ErrorBoundary';
import './styles/globals.css';

// Apply the dark default synchronously so React never renders with a missing
// `data-theme` attribute. The user's actual preference is loaded async below;
// for `light` users this is a brief flash that an inline-in-<head> script
// could eliminate — accepted as a small polish item for now.
applyTheme('dark');
applyEditorFontSize(DEFAULT_PREFERENCES.editorFontSize);

/**
 * Mounts a React tree into the page's `#root` element.
 * Shared by every LeetLock extension page (popup, options, challenge, blocked).
 *
 * Also loads the user's theme preference from storage and applies it, and
 * keeps the document in sync with the OS theme when the user has picked
 * `system`.
 */
export function mount(node: ReactNode): void {
  const root = document.getElementById('root');
  if (!root) {
    throw new Error('LeetLock: #root element not found');
  }

  let currentPreference: 'dark' | 'light' | 'system' = 'dark';
  void (async () => {
    try {
      const prefs = await getValue('userPreferences');
      currentPreference = prefs.theme;
      applyTheme(prefs.theme);
      applyEditorFontSize(prefs.editorFontSize);
    } catch {
      // chrome.storage unavailable (preview / non-extension context) — keep
      // the synchronous default applied above.
    }
  })();

  watchSystemTheme(() => currentPreference);

  createRoot(root).render(
    <StrictMode>
      <ErrorBoundary>{node}</ErrorBoundary>
    </StrictMode>,
  );
}
