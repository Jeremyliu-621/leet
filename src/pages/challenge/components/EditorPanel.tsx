import { useEffect, useRef, useCallback } from 'react';
import {
  EditorView,
  keymap,
  lineNumbers,
  highlightActiveLine,
  highlightActiveLineGutter,
} from '@codemirror/view';
import { EditorState } from '@codemirror/state';
import { javascript } from '@codemirror/lang-javascript';
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
import { leetlockEditorTheme } from '../codemirror-theme';
import type { JudgeResult } from '../../../lib/judge';
import { VerdictPanel } from './VerdictPanel';

interface EditorPanelProps {
  /** Initial starter code for the problem. */
  starterCode: string;
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

/**
 * Right panel — houses the CodeMirror 6 editor, language label, action buttons,
 * and the verdict region. The editor is initialised once via useRef so that the
 * EditorView instance is stable across re-renders.
 */
export function EditorPanel({
  starterCode,
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

  // Stable refs — avoids re-creating the editor on every parent re-render.
  // The Cmd/Ctrl+Enter shortcuts inside the editor read from these refs so
  // the keymap captures stay current without rebuilding the editor.
  const onChangeRef = useRef(onChange);
  const onRunRef = useRef(onRun);
  const onSubmitRef = useRef(onSubmit);
  useEffect(() => {
    onChangeRef.current = onChange;
  }, [onChange]);
  useEffect(() => {
    onRunRef.current = onRun;
  }, [onRun]);
  useEffect(() => {
    onSubmitRef.current = onSubmit;
  }, [onSubmit]);

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
        // Display extensions
        lineNumbers(),
        highlightActiveLineGutter(),
        highlightActiveLine(),
        highlightSelectionMatches(),
        foldGutter(),
        // Editing extensions
        history(),
        indentOnInput(),
        bracketMatching(),
        closeBrackets(),
        autocompletion(),
        search(),
        javascript(),
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

  return (
    <section
      className="flex h-full flex-col overflow-hidden"
      aria-label="Code editor"
    >
      {/* Language label bar */}
      <div className="flex shrink-0 items-center justify-between border-b border-border px-4 py-2">
        <span className="font-mono text-[10px] uppercase tracking-widest text-faint">
          JavaScript
        </span>
      </div>

      {/* Editor */}
      <div
        className="min-h-0 flex-1 overflow-hidden"
        aria-label="Code editor — JavaScript"
      >
        <div
          ref={editorContainerRef}
          className="h-full w-full"
          // CodeMirror manages its own focus/tab behaviour; the outer div is
          // presentational only.
          aria-hidden="true"
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
            <span aria-hidden="true" className="hidden sm:inline">
              <kbd className="font-mono">⌘↵</kbd> run · <kbd className="font-mono">⌘⇧↵</kbd> submit
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
