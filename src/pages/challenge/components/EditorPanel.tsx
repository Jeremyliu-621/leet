import { useEffect, useRef, useCallback } from 'react';
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
import { defaultKeymap, history, historyKeymap } from '@codemirror/commands';
import {
  bracketMatching,
  indentOnInput,
  foldGutter,
  foldKeymap,
} from '@codemirror/language';
import {
  autocompletion,
  closeBrackets,
  closeBracketsKeymap,
  completionKeymap,
} from '@codemirror/autocomplete';
import { highlightSelectionMatches, search, searchKeymap } from '@codemirror/search';
import { vim } from '@replit/codemirror-vim';
import { leetlockEditorTheme } from '../codemirror-theme';
import type { JudgeResult } from '../../../lib/judge';
import type { EditorKeymap, SupportedLanguage } from '../../../lib/types';
import { VerdictPanel } from './VerdictPanel';

interface EditorPanelProps {
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
  /** Number of attempts remaining. */
  attemptsRemaining: number | null;
}

const INDENT_SPACES = '  ';

function fontSizeTheme(px: number) {
  return EditorView.theme({ '&': { fontSize: `${px}px` } });
}

const LANGUAGE_LABEL: Readonly<Record<SupportedLanguage, string>> = {
  javascript: 'JavaScript',
  python: 'Python',
};

const LANGUAGE_SHORT: Readonly<Record<SupportedLanguage, string>> = {
  javascript: 'JS',
  python: 'Py',
};

function languageExtension(language: SupportedLanguage) {
  return language === 'python' ? python() : javascript();
}

/**
 * Right panel — houses the CodeMirror 6 editor, the JS/Py language selector,
 * action buttons, and the verdict region. The editor is built once via
 * `useRef`; language changes go through a `Compartment.reconfigure` so the
 * syntax extension swaps without rebuilding the editor state.
 */
export function EditorPanel({
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
  attemptsRemaining,
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

  // Stable refs — the editor builds ONCE; refs let the keymap and the doc-
  // change effect read fresh callback values without rebuilding.
  const onChangeRef = useRef(onChange);
  const onRunRef = useRef(onRun);
  const onSubmitRef = useRef(onSubmit);
  const starterCodeRef = useRef(starterCode);
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
    });

    const state = EditorState.create({
      doc: starterCode,
      extensions: [
        // Vim mode (when enabled) MUST come before every other keymap so
        // its modal handlers take precedence. The Compartment lets us
        // swap it in / out without rebuilding the editor.
        keymapCompartmentRef.current.of(editorKeymap === 'vim' ? vim() : []),
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
          // Alt-R: reset the editor to the problem's starter code. Browser
          // hard-refresh owns Ctrl/Cmd-Shift-R, so this picks a free combo.
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
          // Tab inserts two spaces — no hard tabs. (Completions captured Tab
          // above when their popup is open, so this only fires otherwise.)
          {
            key: 'Tab',
            run(view) {
              view.dispatch(
                view.state.update({
                  changes: {
                    from: view.state.selection.main.from,
                    to: view.state.selection.main.to,
                    insert: INDENT_SPACES,
                  },
                  selection: {
                    anchor: view.state.selection.main.from + INDENT_SPACES.length,
                  },
                }),
              );
              return true;
            },
          },
        ]),
        leetlockEditorTheme,
        // Font size goes through its own Compartment so it can be reconfigured
        // live when the user adjusts it in Settings without rebuilding the editor.
        fontSizeCompartmentRef.current.of(fontSizeTheme(fontSize)),
        updateListener,
        EditorView.lineWrapping,
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
      effects: keymapCompartmentRef.current.reconfigure(
        editorKeymap === 'vim' ? vim() : [],
      ),
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

  const handleGiveUpKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if ((e.key === 'Enter' || e.key === ' ') && onGiveUp) onGiveUp();
    },
    [onGiveUp],
  );

  const showLanguageSelector = availableLanguages.length > 1;

  return (
    <section className="flex h-full flex-col overflow-hidden" aria-label="Code editor">
      {/* Language label / selector */}
      <div className="flex shrink-0 items-center justify-between border-b border-border px-4 py-2">
        {showLanguageSelector ? (
          <div role="radiogroup" aria-label="Code language" className="flex items-center gap-0.5">
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
                      ? 'rounded-sm border border-border-strong bg-surface-2 px-2 py-0.5 font-mono text-[10px] uppercase tracking-widest text-text focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-accent'
                      : 'rounded-sm border border-transparent px-2 py-0.5 font-mono text-[10px] uppercase tracking-widest text-faint transition-colors hover:text-muted focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-accent'
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
      </div>

      {/* Editor — role="group" is required for aria-label on a non-landmark div. */}
      <div
        role="group"
        aria-label={`Code editor — ${LANGUAGE_LABEL[language]}`}
        className="min-h-0 flex-1 overflow-hidden"
      >
        <div
          ref={editorContainerRef}
          className="h-full w-full"
        />
      </div>

      {/* Divider */}
      <div className="shrink-0 border-t border-border" aria-hidden="true" />

      {/* Verdict region — fixed height to prevent layout shift */}
      <div className="min-h-[80px] shrink-0 overflow-y-auto">
        <VerdictPanel result={verdict} mode={verdictMode} />
      </div>

      {/* Action bar */}
      <div className="shrink-0 border-t border-border bg-surface">
        <div className="flex items-center justify-between px-4 py-3">
          {/* Left: shortcut hint + attempts remaining (when relevant) */}
          <div className="flex items-center gap-3 font-mono text-[10px] text-faint">
            <span aria-hidden="true" className="hidden md:inline">
              <kbd className="font-mono">⌘↵</kbd> run · <kbd className="font-mono">⌘⇧↵</kbd> submit
              · <kbd className="font-mono">⌥R</kbd> reset
            </span>
            {attemptsRemaining !== null && attemptsRemaining < Infinity && (
              <span aria-label={`${attemptsRemaining} submissions remaining`} className="text-xs">
                {attemptsRemaining} left
              </span>
            )}
          </div>

          {/* Right: action buttons */}
          <div className="flex items-center gap-2">
            {showGiveUp && onGiveUp && (
              <button
                type="button"
                onClick={onGiveUp}
                onKeyDown={handleGiveUpKeyDown}
                disabled={isRunning}
                aria-label="Give up on this challenge"
                className="rounded-sm border border-border px-3 py-1.5 font-mono text-xs text-faint transition-colors hover:border-border-strong hover:text-muted focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-accent disabled:cursor-not-allowed disabled:opacity-40"
              >
                give up
              </button>
            )}

            <button
              type="button"
              onClick={onRun}
              onKeyDown={handleRunKeyDown}
              disabled={isRunning}
              aria-keyshortcuts="Control+Enter Meta+Enter"
              aria-label="Run visible test cases"
              className="rounded-sm border border-border px-3 py-1.5 font-mono text-xs text-muted transition-colors hover:border-border-strong hover:text-text focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-accent disabled:cursor-not-allowed disabled:opacity-40"
            >
              {isRunning && verdictMode === 'run' ? 'running' : 'run'}
            </button>

            <button
              type="button"
              onClick={onSubmit}
              onKeyDown={handleSubmitKeyDown}
              disabled={isRunning}
              aria-keyshortcuts="Control+Shift+Enter Meta+Shift+Enter"
              aria-label="Submit solution against all test cases"
              className="rounded-sm bg-accent px-3 py-1.5 font-mono text-xs font-semibold text-on-accent transition-opacity hover:opacity-90 focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-accent disabled:cursor-not-allowed disabled:opacity-40"
            >
              {isRunning && verdictMode === 'submit' ? 'running' : 'submit'}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
