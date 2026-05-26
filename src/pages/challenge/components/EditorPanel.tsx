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
import { defaultKeymap, history, historyKeymap } from '@codemirror/commands';
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
import { leetlockEditorTheme } from '../codemirror-theme';
import type { JudgeResult } from '../../../lib/judge';
import type { EditorKeymap, SupportedLanguage } from '../../../lib/types';
import { VerdictPanel } from './VerdictPanel';
import { CustomTestcase } from './CustomTestcase';

interface EditorPanelProps {
  /** When true, the editor occupies full width (problem panel is hidden). */
  fullscreen: boolean;
  /** Called when the user clicks the fullscreen toggle button. */
  onFullscreenToggle: () => void;
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
  /** Called when the user toggles the vim keymap in the settings popover. */
  onEditorKeymapChange: (keymap: EditorKeymap) => void;
  /** Editor font size in CSS pixels. */
  editorFontSize: number;
  /** Called when the user changes font size in the settings popover. */
  onEditorFontSizeChange: (size: number) => void;
  /** Number of spaces per indent level. */
  editorTabSize: 2 | 4;
  /** Called when the user changes tab size in the settings popover. */
  onEditorTabSizeChange: (size: 2 | 4) => void;
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
  /** Parameter names for the current problem — shown in the custom testcase panel. */
  params: readonly string[];
  /** Called when the user clicks "Run" in the custom testcase panel with parsed args. */
  onCustomRun: (args: unknown[]) => void;
  /** Whether a custom test run is currently in progress. */
  isCustomRunning: boolean;
  /**
   * Serialised output from the most recent custom run.
   * null = no run yet; undefined = running; string = completed actual value.
   */
  customOutput: string | null | undefined;
  /** Error message from the most recent custom run. */
  customError: string | null;
}

const LANGUAGE_LABEL: Readonly<Record<SupportedLanguage, string>> = {
  javascript: 'JavaScript',
  python: 'Python',
};

const LANGUAGE_SHORT: Readonly<Record<SupportedLanguage, string>> = {
  javascript: 'JS',
  python: 'Py',
};

const FONT_SIZE_OPTIONS: readonly number[] = [12, 13, 14, 15, 16, 18, 20];

function languageExtension(language: SupportedLanguage) {
  return language === 'python' ? python() : javascript();
}

/** Generate a CodeMirror theme extension that overrides only the font size. */
function fontSizeTheme(size: number) {
  return EditorView.theme({ '&': { fontSize: `${size}px` } });
}

/** Generate an indentUnit extension for the given number of spaces. */
function indentUnitExtension(spaces: 2 | 4) {
  return indentUnit.of(' '.repeat(spaces));
}

/**
 * Right panel — houses the CodeMirror 6 editor, the JS/Py language selector,
 * action buttons, verdict region, and an editor settings popover.
 * The editor is built once via `useRef`; language, keymap, font-size, and
 * tab-size changes go through Compartment.reconfigure to avoid rebuilding state.
 */
export function EditorPanel({
  fullscreen,
  onFullscreenToggle,
  starterCode,
  language,
  availableLanguages,
  onLanguageChange,
  editorKeymap,
  onEditorKeymapChange,
  editorFontSize,
  onEditorFontSizeChange,
  editorTabSize,
  onEditorTabSizeChange,
  onChange,
  onRun,
  onSubmit,
  onGiveUp,
  isRunning,
  verdict,
  verdictMode,
  showGiveUp,
  attemptsRemaining,
  params,
  onCustomRun,
  isCustomRunning,
  customOutput,
  customError,
}: EditorPanelProps) {
  // Active bottom tab: 'testcase' | 'result'.
  // Auto-switch to 'result' whenever a standard run/submit completes.
  const [bottomTab, setBottomTab] = useState<'testcase' | 'result'>('testcase');
  const editorContainerRef = useRef<HTMLDivElement>(null);
  const viewRef = useRef<EditorView | null>(null);
  const languageCompartmentRef = useRef(new Compartment());
  const keymapCompartmentRef = useRef(new Compartment());
  const fontSizeCompartmentRef = useRef(new Compartment());
  const tabSizeCompartmentRef = useRef(new Compartment());

  // Settings popover visibility
  const [settingsOpen, setSettingsOpen] = useState(false);
  const settingsButtonRef = useRef<HTMLButtonElement>(null);
  const settingsPanelRef = useRef<HTMLDivElement>(null);

  // Stable refs — the editor builds ONCE; refs let callbacks read fresh values.
  const onChangeRef = useRef(onChange);
  const onRunRef = useRef(onRun);
  const onSubmitRef = useRef(onSubmit);
  const starterCodeRef = useRef(starterCode);
  useEffect(() => { onChangeRef.current = onChange; }, [onChange]);
  useEffect(() => { onRunRef.current = onRun; }, [onRun]);
  useEffect(() => { onSubmitRef.current = onSubmit; }, [onSubmit]);
  useEffect(() => { starterCodeRef.current = starterCode; }, [starterCode]);

  // Auto-switch to 'result' tab when a standard run or submit completes (verdict becomes non-undefined non-null).
  const prevVerdictRef = useRef(verdict);
  useEffect(() => {
    const prev = prevVerdictRef.current;
    prevVerdictRef.current = verdict;
    // If verdict just changed from undefined (in-flight) to a JudgeResult, switch to result tab.
    if (prev === undefined && verdict !== undefined && verdict !== null) {
      setBottomTab('result');
    }
  }, [verdict]);

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
        // Vim mode (when enabled) MUST come before every other keymap.
        keymapCompartmentRef.current.of(editorKeymap === 'vim' ? vim() : []),
        // Font size override — composable on top of the base theme.
        fontSizeCompartmentRef.current.of(fontSizeTheme(editorFontSize)),
        // Indent unit (spaces per tab level).
        tabSizeCompartmentRef.current.of(indentUnitExtension(editorTabSize)),
        // Display extensions
        lineNumbers(),
        highlightActiveLineGutter(),
        highlightActiveLine(),
        highlightSelectionMatches(),
        foldGutter(),
        drawSelection(),
        EditorState.allowMultipleSelections.of(true),
        // Editing extensions
        history(),
        indentOnInput(),
        bracketMatching(),
        closeBrackets(),
        autocompletion(),
        search(),
        // Language via Compartment for live swapping.
        languageCompartmentRef.current.of(languageExtension(language)),
        // Keymap — order matters; first match wins.
        keymap.of([
          {
            key: 'Mod-Enter',
            preventDefault: true,
            run() { onRunRef.current(); return true; },
          },
          {
            key: 'Mod-Shift-Enter',
            preventDefault: true,
            run() { onSubmitRef.current(); return true; },
          },
          {
            key: 'Alt-r',
            preventDefault: true,
            run(view) {
              view.dispatch(
                view.state.update({
                  changes: { from: 0, to: view.state.doc.length, insert: starterCodeRef.current },
                }),
              );
              return true;
            },
          },
          ...completionKeymap,
          ...closeBracketsKeymap,
          ...searchKeymap,
          ...foldKeymap,
          ...historyKeymap,
          ...defaultKeymap,
          // Tab inserts spaces according to the current tab size.
          {
            key: 'Tab',
            run(view) {
              const spaces = ' '.repeat(view.state.facet(indentUnit).length || 2);
              view.dispatch(
                view.state.update({
                  changes: {
                    from: view.state.selection.main.from,
                    to: view.state.selection.main.to,
                    insert: spaces,
                  },
                  selection: { anchor: view.state.selection.main.from + spaces.length },
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

  // Reset document when problem changes (different starterCode).
  const prevStarterRef = useRef(starterCode);
  useEffect(() => {
    if (prevStarterRef.current === starterCode) return;
    prevStarterRef.current = starterCode;
    const view = viewRef.current;
    if (!view) return;
    view.dispatch({ changes: { from: 0, to: view.state.doc.length, insert: starterCode } });
  }, [starterCode]);

  // Swap the language extension when `language` changes.
  useEffect(() => {
    const view = viewRef.current;
    if (!view) return;
    view.dispatch({ effects: languageCompartmentRef.current.reconfigure(languageExtension(language)) });
  }, [language]);

  // Swap the keymap extension when `editorKeymap` changes.
  useEffect(() => {
    const view = viewRef.current;
    if (!view) return;
    view.dispatch({
      effects: keymapCompartmentRef.current.reconfigure(editorKeymap === 'vim' ? vim() : []),
    });
  }, [editorKeymap]);

  // Swap the font-size theme when `editorFontSize` changes.
  useEffect(() => {
    const view = viewRef.current;
    if (!view) return;
    view.dispatch({
      effects: fontSizeCompartmentRef.current.reconfigure(fontSizeTheme(editorFontSize)),
    });
  }, [editorFontSize]);

  // Swap the indent-unit when `editorTabSize` changes.
  useEffect(() => {
    const view = viewRef.current;
    if (!view) return;
    view.dispatch({
      effects: tabSizeCompartmentRef.current.reconfigure(indentUnitExtension(editorTabSize)),
    });
  }, [editorTabSize]);

  // Close settings popover when clicking outside it.
  useEffect(() => {
    if (!settingsOpen) return;
    function handleClickOutside(e: MouseEvent) {
      const target = e.target as Node;
      if (
        settingsPanelRef.current &&
        !settingsPanelRef.current.contains(target) &&
        settingsButtonRef.current &&
        !settingsButtonRef.current.contains(target)
      ) {
        setSettingsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [settingsOpen]);

  const handleRunKeyDown = useCallback(
    (e: React.KeyboardEvent) => { if (e.key === 'Enter' || e.key === ' ') onRun(); },
    [onRun],
  );
  const handleSubmitKeyDown = useCallback(
    (e: React.KeyboardEvent) => { if (e.key === 'Enter' || e.key === ' ') onSubmit(); },
    [onSubmit],
  );
  const handleGiveUpKeyDown = useCallback(
    (e: React.KeyboardEvent) => { if ((e.key === 'Enter' || e.key === ' ') && onGiveUp) onGiveUp(); },
    [onGiveUp],
  );

  const showLanguageSelector = availableLanguages.length > 1;

  return (
    <section className="flex h-full flex-col overflow-hidden" aria-label="Code editor">
      {/* Language label / selector + settings gear */}
      <div className="flex shrink-0 items-center justify-between border-b border-border px-4 py-2">
        {/* Left: language selector or label */}
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
                  onClick={() => { if (!selected) onLanguageChange(lang); }}
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

        {/* Right: fullscreen toggle + settings gear */}
        <div className="flex items-center gap-1">
        {/* Fullscreen toggle */}
        <button
          type="button"
          aria-label={fullscreen ? 'Exit fullscreen editor' : 'Fullscreen editor'}
          aria-pressed={fullscreen}
          onClick={onFullscreenToggle}
          className="flex items-center justify-center rounded-sm p-1 text-faint transition-colors hover:text-muted focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-accent"
        >
          {fullscreen ? (
            /* Collapse icon */
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <polyline points="4 14 10 14 10 20" />
              <polyline points="20 10 14 10 14 4" />
              <line x1="10" y1="14" x2="3" y2="21" />
              <line x1="21" y1="3" x2="14" y2="10" />
            </svg>
          ) : (
            /* Expand icon */
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <polyline points="15 3 21 3 21 9" />
              <polyline points="9 21 3 21 3 15" />
              <line x1="21" y1="3" x2="14" y2="10" />
              <line x1="3" y1="21" x2="10" y2="14" />
            </svg>
          )}
        </button>

        {/* Settings gear button */}
        <div className="relative">
          <button
            ref={settingsButtonRef}
            type="button"
            aria-label="Editor settings"
            aria-expanded={settingsOpen}
            aria-haspopup="true"
            onClick={() => setSettingsOpen((o) => !o)}
            className="flex items-center justify-center rounded-sm p-1 text-faint transition-colors hover:text-muted focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-accent"
          >
            {/* Gear icon (SVG inline, no dependency) */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <circle cx="12" cy="12" r="3" />
              <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
            </svg>
          </button>

          {/* Settings popover */}
          {settingsOpen && (
            <div
              ref={settingsPanelRef}
              role="dialog"
              aria-label="Editor settings"
              className="absolute right-0 top-full z-50 mt-1 w-52 rounded-sm border border-border bg-surface p-3 shadow-lg"
            >
              {/* Font size */}
              <div className="mb-3">
                <label className="mb-1.5 block font-mono text-[10px] uppercase tracking-widest text-faint">
                  Font size
                </label>
                <div className="flex flex-wrap gap-1">
                  {FONT_SIZE_OPTIONS.map((size) => (
                    <button
                      key={size}
                      type="button"
                      aria-pressed={editorFontSize === size}
                      aria-label={`Font size ${size}px`}
                      onClick={() => onEditorFontSizeChange(size)}
                      className={
                        editorFontSize === size
                          ? 'rounded-sm border border-border-strong bg-surface-2 px-2 py-0.5 font-mono text-[10px] text-text focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-accent'
                          : 'rounded-sm border border-transparent px-2 py-0.5 font-mono text-[10px] text-faint transition-colors hover:text-muted focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-accent'
                      }
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Tab size */}
              <div className="mb-3">
                <label className="mb-1.5 block font-mono text-[10px] uppercase tracking-widest text-faint">
                  Tab size
                </label>
                <div className="flex gap-1">
                  {([2, 4] as const).map((size) => (
                    <button
                      key={size}
                      type="button"
                      aria-pressed={editorTabSize === size}
                      aria-label={`Tab size ${size} spaces`}
                      onClick={() => onEditorTabSizeChange(size)}
                      className={
                        editorTabSize === size
                          ? 'rounded-sm border border-border-strong bg-surface-2 px-3 py-0.5 font-mono text-[10px] text-text focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-accent'
                          : 'rounded-sm border border-transparent px-3 py-0.5 font-mono text-[10px] text-faint transition-colors hover:text-muted focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-accent'
                      }
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Vim mode toggle */}
              <div>
                <label className="mb-1.5 block font-mono text-[10px] uppercase tracking-widest text-faint">
                  Keymap
                </label>
                <div className="flex gap-1">
                  {(['default', 'vim'] as const).map((km) => (
                    <button
                      key={km}
                      type="button"
                      aria-pressed={editorKeymap === km}
                      aria-label={`${km === 'vim' ? 'Vim' : 'Default'} keymap`}
                      onClick={() => onEditorKeymapChange(km)}
                      className={
                        editorKeymap === km
                          ? 'rounded-sm border border-border-strong bg-surface-2 px-3 py-0.5 font-mono text-[10px] text-text capitalize focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-accent'
                          : 'rounded-sm border border-transparent px-3 py-0.5 font-mono text-[10px] text-faint capitalize transition-colors hover:text-muted focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-accent'
                      }
                    >
                      {km}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
        </div>{/* end flex items-center gap-1 */}
      </div>

      {/* Editor */}
      <div className="min-h-0 flex-1 overflow-hidden" aria-label={`Code editor — ${LANGUAGE_LABEL[language]}`}>
        <div
          ref={editorContainerRef}
          className="h-full w-full"
          aria-hidden="true"
        />
      </div>

      {/* Bottom panel: Testcase / Result tabs + action bar */}
      <div className="shrink-0 border-t border-border">
        {/* Tab bar */}
        <div className="flex items-center border-b border-border px-4" role="tablist" aria-label="Bottom panel tabs">
          <button
            type="button"
            role="tab"
            aria-selected={bottomTab === 'testcase'}
            aria-controls="editor-bottom-testcase"
            onClick={() => setBottomTab('testcase')}
            className={
              bottomTab === 'testcase'
                ? 'border-b border-text py-2 mr-4 font-mono text-[10px] uppercase tracking-widest text-text focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-accent'
                : 'py-2 mr-4 font-mono text-[10px] uppercase tracking-widest text-faint transition-colors hover:text-muted focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-accent'
            }
          >
            Testcase
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={bottomTab === 'result'}
            aria-controls="editor-bottom-result"
            onClick={() => setBottomTab('result')}
            className={
              bottomTab === 'result'
                ? 'border-b border-text py-2 font-mono text-[10px] uppercase tracking-widest text-text focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-accent'
                : 'py-2 font-mono text-[10px] uppercase tracking-widest text-faint transition-colors hover:text-muted focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-accent'
            }
          >
            Result
          </button>
        </div>

        {/* Tab panels */}
        <div className="min-h-[100px] max-h-[160px] overflow-y-auto">
          {bottomTab === 'testcase' ? (
            <div id="editor-bottom-testcase" role="tabpanel">
              <CustomTestcase
                params={params}
                onRun={onCustomRun}
                isRunning={isCustomRunning}
                output={customOutput}
                error={customError}
              />
            </div>
          ) : (
            <div id="editor-bottom-result" role="tabpanel">
              <VerdictPanel result={verdict} mode={verdictMode} />
            </div>
          )}
        </div>

        {/* Action bar */}
        <div className="border-t border-border bg-surface">
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
        </div>{/* end action bar bg-surface */}
      </div>{/* end outer border-t panel */}
    </section>
  );
}
