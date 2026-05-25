import { useEffect, useRef, useCallback, useState } from 'react';
import {
  EditorView,
  keymap,
  lineNumbers,
  highlightActiveLine,
  highlightActiveLineGutter,
  drawSelection,
} from '@codemirror/view';
import { Compartment, EditorState } from '@codemirror/state';
import { javascript } from '@codemirror/lang-javascript';
import { python } from '@codemirror/lang-python';
import { java } from '@codemirror/lang-java';
import { cpp } from '@codemirror/lang-cpp';
import { rust } from '@codemirror/lang-rust';
import { sql } from '@codemirror/lang-sql';
import { go } from '@codemirror/lang-go';
import {
  defaultKeymap,
  history,
  historyKeymap,
  indentWithTab,
  toggleComment,
} from '@codemirror/commands';
import {
  bracketMatching,
  indentOnInput,
  foldGutter,
  foldKeymap,
  indentUnit,
} from '@codemirror/language';
import {
  autocompletion,
  closeBrackets,
  closeBracketsKeymap,
  completionKeymap,
} from '@codemirror/autocomplete';
import { highlightSelectionMatches, search, searchKeymap } from '@codemirror/search';
import { vim } from '@replit/codemirror-vim';
import { emacs } from '@replit/codemirror-emacs';
import { leetlockEditorThemeDark, leetlockEditorThemeLight } from '../codemirror-theme';
import type { JudgeResult } from '../../../lib/judge';
import type { EditorKeymap, SupportedLanguage } from '../../../lib/types';
import { TerminalPanel } from './TerminalPanel';
import { KeyboardShortcutsModal } from './KeyboardShortcutsModal';

interface EditorPanelProps {
  /** Number of spaces inserted by the Tab key. */
  indentSize?: 2 | 4;
  /** Starter code for the active language. Replacing this resets the editor. */
  starterCode: string;
  /** Language currently active in the editor (controls syntax highlighting + the runner). */
  language: SupportedLanguage;
  /** Languages this problem provides a starter for. When `length > 1` a segmented selector renders. */
  availableLanguages: readonly SupportedLanguage[];
  /** Called when the user picks a different language. */
  onLanguageChange: (language: SupportedLanguage) => void;
  /** Active CodeMirror keymap. `'vim'` switches the editor to modal vim bindings. */
  editorKeymap: EditorKeymap;
  /** Editor font size in CSS pixels. Reconfigured live via a Compartment. */
  fontSize: number;
  /** Callback invoked whenever the editor content changes. */
  onChange: (code: string) => void;
  /** Called when user clicks Run. */
  onRun: () => void;
  /** Called when user clicks Submit. */
  onSubmit: () => void;
  /** Called when user clicks Give Up (only rendered when enabled). */
  onGiveUp?: () => void;
  /** Whether a code run is currently in progress. */
  isRunning: boolean;
  /**
   * Verdict from the most recent run.
   * null = no run has completed yet.
   * undefined = a run is currently in flight.
   * JudgeResult = a completed run result.
   */
  verdict: JudgeResult | null | undefined;
  /** Which action produced the current verdict. */
  verdictMode: 'run' | 'submit';
  /** Whether the Give Up button should be shown. */
  showGiveUp: boolean;
  /** Called when the user wants to skip to a different problem (practice mode only). */
  onNewProblem?: () => void;
  /** Number of attempts remaining. */
  attemptsRemaining: number | null;
  /** Whether the editor is currently in fullscreen (problem panel hidden) mode. */
  isFullscreen?: boolean;
  /** Called when the user clicks the fullscreen toggle button. */
  onToggleFullscreen?: () => void;
  /** Current resolved theme — controls the CodeMirror colour scheme. */
  resolvedTheme?: 'dark' | 'light';
  /**
   * When set, replaces the entire editor content with `content` once. The
   * `version` counter must change for each new restore request so the effect
   * re-fires even if the content string happens to be the same.
   */
  resetCode?: { content: string; version: number };
}

function indentSpaces(n: 2 | 4): string {
  return ' '.repeat(n);
}

function fontSizeTheme(px: number) {
  return EditorView.theme({ '&': { fontSize: `${px}px` } });
}

const LANGUAGE_LABEL: Readonly<Record<SupportedLanguage, string>> = {
  javascript: 'JavaScript',
  typescript: 'TypeScript',
  python: 'Python',
  java: 'Java',
  cpp: 'C++',
  csharp: 'C#',
  go: 'Go',
  rust: 'Rust',
  kotlin: 'Kotlin',
  swift: 'Swift',
  sql: 'SQL',
};

const LANGUAGE_SHORT: Readonly<Record<SupportedLanguage, string>> = {
  javascript: 'JS',
  typescript: 'TS',
  python: 'Py',
  java: 'Java',
  cpp: 'C++',
  csharp: 'C#',
  go: 'Go',
  rust: 'Rust',
  kotlin: 'Kt',
  swift: 'Swift',
  sql: 'SQL',
};

function languageExtension(language: SupportedLanguage) {
  switch (language) {
    case 'python':
      return python();
    case 'typescript':
      return javascript({ typescript: true });
    case 'java':
      return java();
    case 'cpp':
      return cpp();
    case 'rust':
      return rust();
    case 'sql':
      return sql();
    case 'go':
      return go();
    // Kotlin and Swift don't have official CodeMirror extensions — use Java
    // syntax highlighting as a reasonable approximation for both.
    case 'kotlin':
      return java();
    case 'swift':
      return java();
    case 'csharp':
      return java();
    default:
      return javascript();
  }
}

function modalKeymapExtension(k: EditorKeymap) {
  if (k === 'vim') return vim();
  if (k === 'emacs') return emacs();
  return [];
}

/**
 * Right panel — houses the CodeMirror 6 editor, the JS/Py language selector,
 * action buttons, and the verdict region. The editor is built once via
 * `useRef`; language changes go through a `Compartment.reconfigure` so the
 * syntax extension swaps without rebuilding the editor state.
 */
export function EditorPanel({
  indentSize = 2,
  starterCode,
  language,
  availableLanguages,
  onLanguageChange,
  editorKeymap,
  fontSize,
  onChange,
  onRun,
  onSubmit,
  onGiveUp,
  isRunning,
  verdict,
  verdictMode,
  showGiveUp,
  onNewProblem,
  attemptsRemaining,
  isFullscreen = false,
  onToggleFullscreen,
  resolvedTheme = 'dark',
  resetCode,
}: EditorPanelProps) {
  const editorContainerRef = useRef<HTMLDivElement>(null);
  const viewRef = useRef<EditorView | null>(null);
  const languageCompartmentRef = useRef(new Compartment());
  // Keymap goes through its own Compartment so the user can toggle vim
  // mode in the popup without rebuilding the editor (which would lose
  // their in-progress code).
  const keymapCompartmentRef = useRef(new Compartment());
  // Font size goes through its own Compartment so it can be changed live
  // without rebuilding the editor or losing the document state.
  const fontSizeCompartmentRef = useRef(new Compartment());
  // Theme goes through its own Compartment so it can be swapped when the
  // user toggles between dark and light mode without rebuilding the editor.
  const themeCompartmentRef = useRef(new Compartment());

  // Stable refs — the editor builds ONCE; refs let the keymap and the doc-
  // change effect read fresh callback values without rebuilding.
  const onChangeRef = useRef(onChange);
  const onRunRef = useRef(onRun);
  const onSubmitRef = useRef(onSubmit);
  const starterCodeRef = useRef(starterCode);
  const indentSizeRef = useRef(indentSize);
  useEffect(() => {
    indentSizeRef.current = indentSize;
  }, [indentSize]);
  useEffect(() => {
    onChangeRef.current = onChange;
  }, [onChange]);
  useEffect(() => {
    onRunRef.current = onRun;
  }, [onRun]);
  useEffect(() => {
    onSubmitRef.current = onSubmit;
  }, [onSubmit]);
  useEffect(() => {
    starterCodeRef.current = starterCode;
  }, [starterCode]);

  // Build and mount the editor once.
  useEffect(() => {
    if (!editorContainerRef.current || viewRef.current) return;

    const updateListener = EditorView.updateListener.of((update) => {
      if (update.docChanged) {
        onChangeRef.current(update.state.doc.toString());
      }
      if (update.docChanged || update.selectionSet) {
        const { state } = update;
        const head = state.selection.main.head;
        const line = state.doc.lineAt(head);
        setCursorPosRef.current({ line: line.number, col: head - line.from + 1 });
      }
    });

    const state = EditorState.create({
      doc: starterCode,
      extensions: [
        // Vim mode (when enabled) MUST come before every other keymap so
        // its modal handlers take precedence. The Compartment lets us
        // swap it in / out without rebuilding the editor.
        keymapCompartmentRef.current.of(modalKeymapExtension(editorKeymap)),
        // Display extensions
        lineNumbers(),
        highlightActiveLineGutter(),
        highlightActiveLine(),
        highlightSelectionMatches(),
        foldGutter(),
        drawSelection(),
        // Allow multi-cursor (Alt-click, Ctrl-D add-next via defaultKeymap).
        // drawSelection above is what makes the additional carets visible.
        EditorState.allowMultipleSelections.of(true),
        // Editing extensions
        history(),
        indentOnInput(),
        bracketMatching(),
        closeBrackets(),
        autocompletion(),
        search(),
        // Indent unit — respects user preference
        indentUnit.of(indentSpaces(indentSize)),
        // Placeholder text when the editor is empty
        EditorView.contentAttributes.of({ 'aria-label': 'Code editor' }),
        // Language goes through a Compartment so it can be swapped without
        // rebuilding the editor state on language change.
        languageCompartmentRef.current.of(languageExtension(language)),
        // Keymap — order matters; first match wins.
        keymap.of([
          // Cmd/Ctrl+Enter runs visible tests; Cmd/Ctrl+Shift+Enter submits.
          {
            key: 'Mod-Enter',
            preventDefault: true,
            run() {
              onRunRef.current();
              return true;
            },
          },
          {
            key: 'Mod-Shift-Enter',
            preventDefault: true,
            run() {
              onSubmitRef.current();
              return true;
            },
          },
          // Alt-R: reset the editor to the problem's starter code.
          {
            key: 'Alt-r',
            preventDefault: true,
            run(view) {
              view.dispatch(
                view.state.update({
                  changes: {
                    from: 0,
                    to: view.state.doc.length,
                    insert: starterCodeRef.current,
                  },
                }),
              );
              return true;
            },
          },
          // Toggle comment with Cmd/Ctrl + /
          {
            key: 'Mod-/',
            preventDefault: true,
            run: toggleComment,
          },
          // Duplicate line with Cmd/Ctrl+Shift+D
          {
            key: 'Mod-Shift-d',
            preventDefault: true,
            run(view) {
              const { state: s } = view;
              const line = s.doc.lineAt(s.selection.main.head);
              view.dispatch({
                changes: { from: line.to, insert: '\n' + line.text },
              });
              return true;
            },
          },
          // Autocomplete first — accepts a completion with Tab/Enter while the
          // popup is open. Falls through to plain Tab insertion below otherwise.
          ...completionKeymap,
          // Close-brackets Backspace deletes both halves of an empty pair.
          ...closeBracketsKeymap,
          // Cmd/Ctrl+F search panel.
          ...searchKeymap,
          // Code-folding shortcuts.
          ...foldKeymap,
          // Undo/redo.
          ...historyKeymap,
          // Arrow keys, selection, copy/paste, etc.
          ...defaultKeymap,
          // Tab inserts spaces — respects indent size.
          indentWithTab,
        ]),
        themeCompartmentRef.current.of(
          resolvedTheme === 'light' ? leetlockEditorThemeLight : leetlockEditorThemeDark,
        ),
        // Font size goes through its own Compartment so it can be reconfigured
        // live when the user adjusts it in Settings without rebuilding the editor.
        fontSizeCompartmentRef.current.of(fontSizeTheme(fontSize)),
        updateListener,
        EditorView.lineWrapping,
        // Scrollbar styling
        EditorView.theme({
          '.cm-scroller': {
            scrollbarWidth: 'thin',
          },
        }),
      ],
    });

    const view = new EditorView({
      state,
      parent: editorContainerRef.current,
    });

    viewRef.current = view;

    return () => {
      view.destroy();
      viewRef.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // intentionally empty — editor is created once

  // If the problem changes (different starterCode prop) and the editor exists,
  // reset the document content.
  const prevStarterRef = useRef(starterCode);
  useEffect(() => {
    if (prevStarterRef.current === starterCode) return;
    prevStarterRef.current = starterCode;
    const view = viewRef.current;
    if (!view) return;
    view.dispatch({
      changes: { from: 0, to: view.state.doc.length, insert: starterCode },
    });
  }, [starterCode]);

  // External content restore (e.g. "restore last submitted code").
  // Fires whenever `version` increments, replacing the full document.
  useEffect(() => {
    if (!resetCode) return;
    const view = viewRef.current;
    if (!view) return;
    view.dispatch({
      changes: { from: 0, to: view.state.doc.length, insert: resetCode.content },
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [resetCode?.version]);

  // Swap the language extension when `language` changes.
  useEffect(() => {
    const view = viewRef.current;
    if (!view) return;
    view.dispatch({
      effects: languageCompartmentRef.current.reconfigure(languageExtension(language)),
    });
  }, [language]);

  // Swap the keymap extension when `editorKeymap` changes.
  useEffect(() => {
    const view = viewRef.current;
    if (!view) return;
    view.dispatch({
      effects: keymapCompartmentRef.current.reconfigure(modalKeymapExtension(editorKeymap)),
    });
  }, [editorKeymap]);

  // Reconfigure font size when the user changes it in Settings.
  useEffect(() => {
    const view = viewRef.current;
    if (!view) return;
    view.dispatch({
      effects: fontSizeCompartmentRef.current.reconfigure(fontSizeTheme(fontSize)),
    });
  }, [fontSize]);

  // Swap the colour theme when resolvedTheme changes.
  useEffect(() => {
    const view = viewRef.current;
    if (!view) return;
    view.dispatch({
      effects: themeCompartmentRef.current.reconfigure(
        resolvedTheme === 'light' ? leetlockEditorThemeLight : leetlockEditorThemeDark,
      ),
    });
  }, [resolvedTheme]);

  const handleRunKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === 'Enter' || e.key === ' ') onRun();
    },
    [onRun],
  );

  const handleSubmitKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === 'Enter' || e.key === ' ') onSubmit();
    },
    [onSubmit],
  );

  const [showShortcuts, setShowShortcuts] = useState(false);

  // Two-step give-up confirmation: first click arms it, second click fires.
  const [giveUpArmed, setGiveUpArmed] = useState(false);
  const giveUpTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const handleGiveUpClick = useCallback(() => {
    if (!onGiveUp) return;
    if (giveUpArmed) {
      if (giveUpTimerRef.current) clearTimeout(giveUpTimerRef.current);
      setGiveUpArmed(false);
      onGiveUp();
    } else {
      setGiveUpArmed(true);
      giveUpTimerRef.current = setTimeout(() => setGiveUpArmed(false), 3000);
    }
  }, [onGiveUp, giveUpArmed]);

  const handleGiveUpKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === 'Enter' || e.key === ' ') handleGiveUpClick();
    },
    [handleGiveUpClick],
  );

  // Line / column state — updated on every selection change.
  const [cursorPos, setCursorPos] = useState<{ line: number; col: number }>({ line: 1, col: 1 });
  const setCursorPosRef = useRef(setCursorPos);

  const showLanguageSelector = availableLanguages.length > 1;

  return (
    <section className="flex h-full flex-col overflow-hidden" aria-label="Code editor">
      {/* Language label / selector + fullscreen toggle */}
      <div className="flex shrink-0 items-center justify-between border-b border-border px-3 py-1.5">
        {showLanguageSelector ? (
          <div
            role="radiogroup"
            aria-label="Code language"
            className="flex items-center gap-0.5 overflow-x-auto scrollbar-none"
          >
            {availableLanguages.map((lang) => {
              const selected = lang === language;
              return (
                <button
                  key={lang}
                  type="button"
                  role="radio"
                  aria-checked={selected}
                  aria-label={`Switch to ${LANGUAGE_LABEL[lang]}`}
                  onClick={() => {
                    if (!selected) onLanguageChange(lang);
                  }}
                  className={
                    selected
                      ? 'whitespace-nowrap rounded-sm border border-border-strong bg-surface-2 px-2 py-0.5 font-mono text-[10px] uppercase tracking-widest text-text focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-accent'
                      : 'whitespace-nowrap rounded-sm border border-transparent px-2 py-0.5 font-mono text-[10px] uppercase tracking-widest text-faint transition-colors hover:text-muted focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-accent'
                  }
                >
                  {LANGUAGE_SHORT[lang]}
                </button>
              );
            })}
          </div>
        ) : (
          <span className="font-mono text-[10px] uppercase tracking-widest text-faint">
            {LANGUAGE_LABEL[language]}
          </span>
        )}

        {/* Right controls: shortcuts button + fullscreen toggle */}
        <div className="flex items-center gap-1">
          <button
            type="button"
            onClick={() => setShowShortcuts(true)}
            aria-label="Show keyboard shortcuts"
            title="Keyboard shortcuts"
            className="rounded-sm border border-transparent px-1.5 py-0.5 font-mono text-[10px] text-faint transition-colors hover:border-border hover:text-muted focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-accent"
          >
            ?
          </button>

          {/* Fullscreen toggle — only rendered when the parent passes the callback */}
          {onToggleFullscreen && (
            <button
              type="button"
              onClick={onToggleFullscreen}
              aria-label={isFullscreen ? 'Show problem panel' : 'Expand editor to full width'}
              aria-pressed={isFullscreen}
              title={isFullscreen ? 'Collapse (show problem)' : 'Expand editor'}
              className="rounded-sm border border-transparent p-1 font-mono text-[10px] text-faint transition-colors hover:border-border hover:text-muted focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-accent"
            >
              {isFullscreen ? '⊡' : '⊞'}
            </button>
          )}
        </div>
      </div>

      {/* Editor — role="group" is required for aria-label on a non-landmark div. */}
      <div
        role="group"
        aria-label={`Code editor — ${LANGUAGE_LABEL[language]}`}
        className="min-h-0 flex-1 overflow-hidden"
      >
        <div ref={editorContainerRef} className="h-full w-full" />
      </div>

      {/* Terminal region — resizable with drag handle */}
      <div className="shrink-0 border-t border-border" aria-hidden="true" />
      <div className="shrink-0 overflow-hidden" role="region" aria-label="Terminal output">
        <TerminalPanel result={verdict} mode={verdictMode} />
      </div>

      {/* Keyboard shortcuts modal */}
      {showShortcuts && <KeyboardShortcutsModal onClose={() => setShowShortcuts(false)} />}

      {/* Action bar */}
      <div className="shrink-0 border-t border-border bg-surface">
        <div className="flex items-center justify-between px-4 py-2">
          {/* Left: status info */}
          <div className="flex items-center gap-3 font-mono text-[10px] text-faint">
            <span aria-hidden="true" className="hidden md:flex items-center gap-1.5">
              <kbd className="rounded border border-border bg-surface-2 px-1 py-px text-[9px]">
                ⌘↵
              </kbd>
              <span>run</span>
              <span className="text-border-strong mx-0.5">·</span>
              <kbd className="rounded border border-border bg-surface-2 px-1 py-px text-[9px]">
                ⌘⇧↵
              </kbd>
              <span>submit</span>
            </span>
            {attemptsRemaining !== null && attemptsRemaining < Infinity && (
              <span
                aria-label={`${attemptsRemaining} submissions remaining`}
                className="rounded border border-border px-1.5 py-0.5 text-[10px]"
              >
                {attemptsRemaining} left
              </span>
            )}
            {/* Line / column indicator — mirrors every major IDE */}
            <span
              aria-label={`Line ${cursorPos.line}, column ${cursorPos.col}`}
              className="tabular-nums"
            >
              Ln {cursorPos.line}, Col {cursorPos.col}
            </span>
          </div>

          {/* Right: action buttons */}
          <div className="flex items-center gap-2">
            {onNewProblem && (
              <button
                type="button"
                onClick={onNewProblem}
                disabled={isRunning}
                aria-label="Skip to a different problem"
                className="rounded-sm border border-border px-3 py-1.5 font-mono text-[11px] text-faint transition-colors hover:border-border-strong hover:text-muted focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-accent disabled:cursor-not-allowed disabled:opacity-40"
              >
                new problem
              </button>
            )}
            {showGiveUp && onGiveUp && (
              <button
                type="button"
                onClick={handleGiveUpClick}
                onKeyDown={handleGiveUpKeyDown}
                disabled={isRunning}
                aria-label={giveUpArmed ? 'Confirm: give up on this challenge' : 'Give up on this challenge'}
                className={[
                  'rounded-sm border px-3 py-1.5 font-mono text-[11px] transition-colors',
                  'focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-accent disabled:cursor-not-allowed disabled:opacity-40',
                  giveUpArmed
                    ? 'border-border-strong text-text hover:border-accent'
                    : 'border-border text-faint hover:border-border-strong hover:text-muted',
                ].join(' ')}
              >
                {giveUpArmed ? 'confirm?' : 'give up'}
              </button>
            )}

            <button
              type="button"
              onClick={onRun}
              onKeyDown={handleRunKeyDown}
              disabled={isRunning}
              aria-keyshortcuts="Control+Enter Meta+Enter"
              aria-label="Run visible test cases"
              className="inline-flex items-center gap-1.5 rounded-sm border border-border px-4 py-1.5 font-mono text-[11px] font-medium text-muted transition-all hover:border-border-strong hover:text-text hover:bg-surface-2 focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-accent disabled:cursor-not-allowed disabled:opacity-40"
            >
              {isRunning && verdictMode === 'run' && (
                <svg
                  className="h-3 w-3 animate-spin"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden="true"
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                    strokeOpacity="0.25"
                  />
                  <path fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                </svg>
              )}
              {isRunning && verdictMode === 'run' ? 'running' : 'run'}
            </button>

            <button
              type="button"
              onClick={onSubmit}
              onKeyDown={handleSubmitKeyDown}
              disabled={isRunning}
              aria-keyshortcuts="Control+Shift+Enter Meta+Shift+Enter"
              aria-label="Submit solution against all test cases"
              className="inline-flex items-center gap-1.5 rounded-sm bg-accent px-4 py-1.5 font-mono text-[11px] font-bold text-on-accent transition-opacity hover:opacity-90 focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-accent disabled:cursor-not-allowed disabled:opacity-40"
            >
              {isRunning && verdictMode === 'submit' && (
                <svg
                  className="h-3 w-3 animate-spin"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden="true"
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                    strokeOpacity="0.25"
                  />
                  <path fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                </svg>
              )}
              {isRunning && verdictMode === 'submit' ? 'submitting' : 'submit'}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
