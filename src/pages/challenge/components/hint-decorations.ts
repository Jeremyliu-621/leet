import { EditorView, Decoration, WidgetType } from '@codemirror/view';
import { StateField, StateEffect, RangeSetBuilder } from '@codemirror/state';
import type { Extension } from '@codemirror/state';
import type { AiHint, HintSeverity } from '../../../lib/ai/types';

/** Replace the current set of inline AI hints. */
export const setHintsEffect = StateEffect.define<AiHint[]>();
/** Remove all inline AI hints. */
export const clearHintsEffect = StateEffect.define<null>();
/** Briefly flash a line (1-based) — used when a panel hint is clicked. */
export const flashLineEffect = StateEffect.define<number | null>();

const SEVERITY_LABEL: Record<HintSeverity, string> = {
  bug: 'Bug',
  suggestion: 'Suggestion',
  info: 'Note',
};

/** Inline annotation bubble rendered as a block widget below a code line. */
class HintBubbleWidget extends WidgetType {
  constructor(private readonly hint: AiHint) {
    super();
  }

  override eq(other: HintBubbleWidget): boolean {
    return (
      other.hint.line === this.hint.line &&
      other.hint.severity === this.hint.severity &&
      other.hint.title === this.hint.title &&
      other.hint.comment === this.hint.comment
    );
  }

  toDOM(): HTMLElement {
    const wrap = document.createElement('div');
    wrap.className = `cm-hint-bubble cm-hint-bubble-${this.hint.severity}`;
    wrap.setAttribute('aria-hidden', 'true'); // panel list carries the a11y copy

    const dot = document.createElement('span');
    dot.className = 'cm-hint-dot';
    wrap.appendChild(dot);

    const body = document.createElement('div');
    body.className = 'cm-hint-body';

    const title = document.createElement('span');
    title.className = 'cm-hint-title';
    title.textContent = `${SEVERITY_LABEL[this.hint.severity]} · ${this.hint.title}`;
    body.appendChild(title);

    if (this.hint.comment) {
      const comment = document.createElement('span');
      comment.className = 'cm-hint-comment';
      comment.textContent = this.hint.comment;
      body.appendChild(comment);
    }

    wrap.appendChild(body);
    return wrap;
  }

  override ignoreEvent(): boolean {
    return false;
  }
}

interface HintState {
  hints: AiHint[];
  flashLine: number | null;
}

const hintField = StateField.define<HintState>({
  create() {
    return { hints: [], flashLine: null };
  },
  update(value, tr) {
    let next = value;
    for (const effect of tr.effects) {
      if (effect.is(setHintsEffect)) next = { hints: effect.value, flashLine: null };
      else if (effect.is(clearHintsEffect)) next = { hints: [], flashLine: null };
      else if (effect.is(flashLineEffect)) next = { ...next, flashLine: effect.value };
    }
    return next;
  },
});

// A view-side decorations facet derived from the field. We use a separate
// plugin-free approach: EditorView.decorations.compute over the field plus the
// view, rebuilt whenever the field changes.
const hintDecorations = EditorView.decorations.compute([hintField], (state) => {
  // We cannot access the view here, but buildDecorations needs doc only — read
  // it from state instead.
  const hs = state.field(hintField);
  const builder = new RangeSetBuilder<Decoration>();
  const doc = state.doc;
  const total = doc.lines;
  const located = hs.hints
    .filter((h): h is AiHint & { line: number } => h.line !== null && h.line >= 1 && h.line <= total)
    .sort((a, b) => a.line - b.line);

  let lastLine = -1;
  for (const hint of located) {
    const line = doc.line(hint.line);
    if (hint.line !== lastLine) {
      const cls =
        `cm-hint-line cm-hint-line-${hint.severity}` +
        (hs.flashLine === hint.line ? ' cm-hint-flash' : '');
      builder.add(line.from, line.from, Decoration.line({ class: cls }));
      lastLine = hint.line;
    }
  }
  for (const hint of located) {
    const line = doc.line(hint.line);
    builder.add(
      line.to,
      line.to,
      Decoration.widget({ widget: new HintBubbleWidget(hint), block: true, side: 1 }),
    );
  }
  return builder.finish();
});

/** Base theme for the hint decorations — uses our CSS design tokens. */
const hintTheme = EditorView.baseTheme({
  '.cm-hint-line': {
    borderLeft: '2px solid transparent',
  },
  '.cm-hint-line-bug': {
    backgroundColor: 'var(--ll-error-bg)',
    borderLeftColor: 'var(--ll-error)',
  },
  '.cm-hint-line-suggestion': {
    backgroundColor: 'var(--ll-warning-bg)',
    borderLeftColor: 'var(--ll-warning)',
  },
  '.cm-hint-line-info': {
    backgroundColor: 'var(--ll-success-bg)',
    borderLeftColor: 'var(--ll-brand)',
  },
  '.cm-hint-flash': {
    animation: 'cm-hint-flash-kf 1.1s ease-out',
  },
  '@keyframes cm-hint-flash-kf': {
    '0%': { backgroundColor: 'var(--ll-brand)' },
    '100%': { backgroundColor: 'transparent' },
  },
  '.cm-hint-bubble': {
    display: 'flex',
    gap: '8px',
    alignItems: 'flex-start',
    margin: '2px 0 6px 16px',
    padding: '7px 11px',
    borderRadius: '8px',
    border: '1px solid var(--ll-border)',
    background: 'var(--ll-surface-2)',
    fontFamily: 'ui-sans-serif, system-ui, sans-serif',
    fontSize: '12px',
    lineHeight: '1.45',
    maxWidth: '640px',
    boxShadow: '0 1px 2px rgba(0,0,0,0.25)',
  },
  '.cm-hint-dot': {
    marginTop: '5px',
    width: '7px',
    height: '7px',
    borderRadius: '50%',
    flexShrink: '0',
  },
  '.cm-hint-bubble-bug .cm-hint-dot': { background: 'var(--ll-error)' },
  '.cm-hint-bubble-suggestion .cm-hint-dot': { background: 'var(--ll-warning)' },
  '.cm-hint-bubble-info .cm-hint-dot': { background: 'var(--ll-brand)' },
  '.cm-hint-body': { display: 'flex', flexDirection: 'column', gap: '2px', minWidth: '0' },
  '.cm-hint-title': { fontWeight: '600', color: 'var(--ll-text)' },
  '.cm-hint-comment': { color: 'var(--ll-muted)' },
});

/** The full extension wiring the field, derived decorations, and theme. */
export const hintExtension: Extension = [hintField, hintDecorations, hintTheme];

/** Imperative helpers used by the UI to drive the editor. */
export function applyHints(view: EditorView, hints: AiHint[]): void {
  view.dispatch({ effects: setHintsEffect.of(hints) });
}

export function clearHints(view: EditorView): void {
  view.dispatch({ effects: clearHintsEffect.of(null) });
}

/** Scroll a 1-based line into view and flash it briefly. */
export function revealLine(view: EditorView, line: number): void {
  const total = view.state.doc.lines;
  if (line < 1 || line > total) return;
  const pos = view.state.doc.line(line).from;
  view.dispatch({
    effects: [flashLineEffect.of(line), EditorView.scrollIntoView(pos, { y: 'center' })],
  });
  // Clear the flash class shortly after so re-clicking re-triggers it.
  setTimeout(() => {
    view.dispatch({ effects: flashLineEffect.of(null) });
  }, 1100);
}
