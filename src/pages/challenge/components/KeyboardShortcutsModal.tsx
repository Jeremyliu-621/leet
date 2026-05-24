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
    heading: 'Editor',
    rows: [
      { keys: ['Tab'], description: 'Indent (2 spaces)' },
      { keys: ['⌘Z', 'Ctrl+Z'], description: 'Undo' },
      { keys: ['⌘⇧Z', 'Ctrl+Y'], description: 'Redo' },
      { keys: ['⌘/', 'Ctrl+/'], description: 'Toggle line comment' },
      { keys: ['⌘F', 'Ctrl+F'], description: 'Find / replace' },
    ],
  },
  {
    heading: 'Selection',
    rows: [
      { keys: ['⌘D', 'Ctrl+D'], description: 'Select next occurrence' },
      { keys: ['Alt+Click'], description: 'Add cursor' },
    ],
  },
  {
    heading: 'Code Folding',
    rows: [
      { keys: ['⌘⌥[', 'Ctrl+⇧['], description: 'Fold block' },
      { keys: ['⌘⌥]', 'Ctrl+⇧]'], description: 'Unfold block' },
    ],
  },
];

interface Props {
  onClose: () => void;
}

export function KeyboardShortcutsModal({ onClose }: Props) {
  const dialogRef = useRef<HTMLDivElement>(null);

  // Close on Escape.
  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose();
    }
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [onClose]);

  // Focus the dialog on mount so keyboard users can immediately interact.
  useEffect(() => {
    dialogRef.current?.focus();
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
        className="relative max-h-[80vh] w-full max-w-sm overflow-y-auto rounded border border-border bg-surface shadow-xl outline-none"
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
            className="rounded-sm p-1 text-faint transition-colors hover:text-muted focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-accent"
          >
            ✕
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
                    <tr
                      key={row.description}
                      className="border-b border-border/50 last:border-0"
                    >
                      <td className="py-1.5 pr-4 align-middle">
                        <span className="flex flex-wrap gap-1">
                          {row.keys.map((k, i) => (
                            <span key={k} className="flex items-center gap-1">
                              {i > 0 && (
                                <span className="font-mono text-[9px] text-faint">/</span>
                              )}
                              <kbd className="inline-flex items-center rounded border border-border bg-surface-2 px-1.5 py-0.5 font-mono text-[10px] leading-none text-muted">
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
            Press <kbd className="inline rounded border border-border bg-surface-2 px-1 font-mono text-[10px]">Esc</kbd> to close
          </p>
        </div>
      </div>
    </div>
  );
}
