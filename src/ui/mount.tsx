import { StrictMode } from 'react';
import type { ReactNode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles/globals.css';

/**
 * Mounts a React tree into the page's `#root` element.
 * Shared by every LeetLock extension page (popup, options, challenge, blocked).
 */
export function mount(node: ReactNode): void {
  const root = document.getElementById('root');
  if (!root) {
    throw new Error('LeetLock: #root element not found');
  }
  createRoot(root).render(<StrictMode>{node}</StrictMode>);
}
