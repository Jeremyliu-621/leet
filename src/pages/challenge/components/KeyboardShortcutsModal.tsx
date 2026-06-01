import { useEffect, useRef } from 'react';

interface ShortcutRow {
  keys: string[];
  description: string;
}

interface ShortcutSection {
  heading: string;
  rows: ShortcutRow[];
}

const SECTIONS: ShortcutSection[] = [
  {
    heading: 'Running',
    rows: [
      { keys: ['⌘↵', 'Ctrl+↵'], description: 'Run visible tests' },
      { keys: ['⌘⇧↵', 'Ctrl+⇧↵'], description: 'Submit solution' },
      { keys: ['⌥R', 'Alt+R'], description: 'Reset to starter code' },
    ],
  },
  {
    heading: 'Editing',
    rows: [
      { keys: ['Tab'], description: 'Indent / accept completion' },
      { keys: ['⇧Tab', 'Shift+Tab'], description: 'Dedent' },
      { keys: ['⌘/', 'Ctrl+/'], description: 'Toggle line comment' },
      { keys: ['⌘⇧D', 'Ctrl+⇧D'], description: 'Duplicate line' },
      { keys: ['⌘⇧K', 'Ctrl+⇧K'], description: 'Delete current line' },
      { keys: ['⌥↑', 'Alt+↑'], description: 'Move line up' },
      { keys: ['⌥↓', 'Alt+↓'], description: 'Move line down' },
      { keys: ['⌘Z', 'Ctrl+Z'], description: 'Undo' },
      { keys: ['⌘⇧Z', 'Ctrl+Y'], description: 'Redo' },
    ],
  },
  {
    heading: 'Navigation',
    rows: [
      { keys: ['⌘F', 'Ctrl+F'], description: 'Find / replace' },
      { keys: ['⌘G', 'Ctrl+G'], description: 'Go to next match' },
      { keys: ['⌘D', 'Ctrl+D'], description: 'Select next occurrence' },
      { keys: ['Alt+Click'], description: 'Add cursor' },
      { keys: ['Alt+Drag'], description: 'Rectangular / column selection' },
    ],
  },
  {
    heading: 'Code Folding',
    rows: [
      { keys: ['⌘⌥[', 'Ctrl+⇧['], description: 'Fold block' },
      { keys: ['⌘⌥]', 'Ctrl+⇧]'], description: 'Unfold block' },
    ],
  },
  {
    heading: 'Layout',
    rows: [
      { keys: ['⌘J', 'Ctrl+J'], description: 'Toggle terminal panel' },
      { keys: ['← →', 'Arrow keys'], description: 'Resize problem / editor panels (focus splitter)' },
      { keys: ['Home', 'End'], description: 'Snap panel to min / max width' },
      { keys: ['↑ ↓', 'Arrow keys'], description: 'Resize terminal height (focus terminal handle)' },
      { keys: ['?'], description: 'Open this shortcuts modal' },
    ],
  },
  {
    heading: 'Snippets (JS / TS / Python)',
    rows: [
      { keys: ['for'], description: 'for loop → Tab to expand' },
      { keys: ['forr'], description: 'reverse for loop' },
      { keys: ['forof'], description: 'for...of loop (JS/TS)' },
      { keys: ['fore'], description: 'for enumerate loop (Python)' },
      { keys: ['while'], description: 'while loop' },
      { keys: ['if'], description: 'if statement' },
      { keys: ['ife'], description: 'if-else' },
      { keys: ['newmap'], description: 'new Map()' },
      { keys: ['newset'], description: 'new Set()' },
      { keys: ['len'], description: 'array / list length' },
      { keys: ['sort'], description: 'sort ascending' },
      { keys: ['ddict'], description: 'defaultdict (Python)' },
      { keys: ['heap'], description: 'heapq setup (Python)' },
    ],
  },
];

interface Props {
  onClose: () => void;
}

export function KeyboardShortcutsModal({ onClose }: Props) {
  const dialogRef = useRef<HTMLDivElement>(null);
  // Store the element that had focus before the dialog opened so we can
  // restore it when the dialog closes (WCAG 2.1 SC 3.2.1 / focus management).
  const returnFocusRef = useRef<HTMLElement | null>(null);

  // Close on Escape; trap Tab focus inside the dialog.
  useEffect(() => {
    const FOCUSABLE = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') { onClose(); return; }
      if (e.key !== 'Tab' || !dialogRef.current) return;
      const focusable = Array.from(dialogRef.current.querySelectorAll<HTMLElement>(FOCUSABLE));
      if (focusable.length === 0) return;
      const first = focusable[0]!, last = focusable[focusable.length - 1]!;
      if (e.shiftKey) {
        if (document.activeElement === first) { e.preventDefault(); last.focus(); }
      } else {
        if (document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    }
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [onClose]);

  // Focus the dialog on mount, and restore focus to the opener on unmount.
  useEffect(() => {
    returnFocusRef.current = document.activeElement as HTMLElement | null;
    dialogRef.current?.focus();
    return () => {
      returnFocusRef.current?.focus();
    };
  }, []);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-bg/80 backdrop-blur-sm"
      role="presentation"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="shortcuts-title"
        tabIndex={-1}
        className="relative max-h-[80vh] w-full max-w-md overflow-y-auto rounded-card border border-border bg-surface shadow-2xl outline-none"
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-border px-5 py-3.5">
          <h2
            id="shortcuts-title"
            className="font-mono text-xs font-semibold uppercase tracking-widest text-text"
          >
            Keyboard Shortcuts
          </h2>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close shortcuts"
            className="flex items-center justify-center h-6 w-6 rounded-sm text-faint transition-colors hover:text-muted hover:bg-surface-2 focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-accent"
          >
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
              <path
                d="M1 1l10 10M11 1L1 11"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>

        {/* Sections */}
        <div className="px-5 py-4 space-y-5">
          {SECTIONS.map((section) => (
            <section key={section.heading} aria-label={section.heading}>
              <h3 className="mb-2 font-mono text-[10px] uppercase tracking-widest text-faint">
                {section.heading}
              </h3>
              <table className="w-full border-collapse" role="table">
                <tbody>
                  {section.rows.map((row) => (
                    <tr key={row.description} className="border-b border-border/30 last:border-0">
                      <td className="py-1.5 pr-4 align-middle">
                        <span className="flex flex-wrap gap-1">
                          {row.keys.map((k, i) => (
                            <span key={k} className="flex items-center gap-1">
                              {i > 0 && <span className="font-mono text-[9px] text-faint">/</span>}
                              <kbd className="inline-flex items-center rounded border border-border bg-surface-2 px-1.5 py-0.5 font-mono text-[10px] leading-none text-muted shadow-sm">
                                {k}
                              </kbd>
                            </span>
                          ))}
                        </span>
                      </td>
                      <td className="py-1.5 align-middle font-mono text-[11px] text-muted">
                        {row.description}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </section>
          ))}
        </div>

        {/* Footer hint */}
        <div className="border-t border-border px-5 py-3">
          <p className="font-mono text-[10px] text-faint">
            Press{' '}
            <kbd className="inline rounded border border-border bg-surface-2 px-1 font-mono text-[10px] shadow-sm">
              Esc
            </kbd>{' '}
            to close
          </p>
        </div>
      </div>
    </div>
  );
}
