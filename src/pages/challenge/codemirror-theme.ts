import { EditorView } from '@codemirror/view';
import { HighlightStyle, syntaxHighlighting, defaultHighlightStyle } from '@codemirror/language';
import { tags } from '@lezer/highlight';
import type { Extension } from '@codemirror/state';
import { isLightTheme } from '../../lib/theme';

/**
 * Pure-grayscale CodeMirror 6 theme. Zero hue — emphasis by contrast and weight.
 * Mirrors the LeetMeow design-system tokens from globals.css (--ll-*).
 */
const leetmeowThemeDark = EditorView.theme(
  {
    '&': {
      backgroundColor: '#262626',
      color: '#EDEDED',
      height: '100%',
      // fontSize controlled by fontSizeCompartment — do NOT set here.
      fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Consolas, monospace',
    },
    '.cm-scroller': {
      overflow: 'auto',
      fontFamily: 'inherit',
      lineHeight: '1.65',
    },
    '.cm-content': {
      padding: '12px 16px',
      caretColor: '#FFFFFF',
    },
    '.cm-line': {
      paddingLeft: '2px',
      paddingRight: '0',
    },
    // Nudge the indentation guides a touch further left.
    '.cm-indent-markers::before': {
      transform: 'translateX(-0.5ch)',
    },
    // Cursor — a clearly visible 2px white caret that sits ABOVE the
    // bracket-match highlight (z-index) so it never gets swallowed by the
    // auto-paired brackets the way the old thin caret did.
    '.cm-cursor, .cm-dropCursor': {
      borderLeftColor: '#FFFFFF',
      borderLeftWidth: '2px',
      marginLeft: '-1px',
    },
    '.cm-cursorLayer': {
      zIndex: '5',
    },
    // Selection
    '&.cm-focused .cm-selectionBackground, .cm-selectionBackground, .cm-content ::selection': {
      backgroundColor: '#2a3b5e',
    },
    // Gutter (line numbers)
    '.cm-gutters': {
      backgroundColor: '#262626',
      borderRight: '1px solid #404040',
      color: '#6a6a6a',
      userSelect: 'none',
    },
    '.cm-gutter.cm-lineNumbers .cm-gutterElement': {
      padding: '0 12px 0 8px',
      minWidth: '36px',
    },
    '.cm-activeLineGutter': {
      backgroundColor: '#2e2e2e',
      color: '#a0a0a0',
    },
    // Active line highlight — translucent so the indentation guides (drawn at
    // z-index:-1, behind the line) stay visible through the current line
    // instead of being painted over.
    '.cm-activeLine': {
      backgroundColor: 'rgba(255, 255, 255, 0.05)',
    },
    // Search match
    '.cm-searchMatch': {
      outline: '1px solid #5A5A5A',
      backgroundColor: 'transparent',
    },
    '.cm-searchMatch.cm-searchMatch-selected': {
      outline: '1px solid #FFFFFF',
      backgroundColor: '#404040',
    },
    // Bracket matching — a subtle box like LeetCode: visible but not jarring.
    // Faint fill + thin rounded outline, normal glyph color (no bold white).
    // The caret stays readable between [] (cursor layer is z-index 5, above).
    '.cm-matchingBracket': {
      // CM's default applies a green/teal bg via a higher-specificity
      // (.cm-focused .cm-matchingBracket) selector, so override needs
      // !important. The glyph color and a subtle grey box replace it.
      backgroundColor: 'rgba(255, 255, 255, 0.08) !important',
      outline: '1px solid #525252',
      borderRadius: '2px',
      color: '#EDEDED',
    },
    '.cm-nonmatchingBracket': {
      backgroundColor: 'transparent',
      color: '#ef4743',
      fontWeight: '700',
    },
    // Autocomplete
    '.cm-tooltip': {
      backgroundColor: '#333333',
      border: '1px solid #404040',
      color: '#EDEDED',
    },
    '.cm-tooltip-autocomplete > ul > li[aria-selected]': {
      backgroundColor: '#404040',
    },
    // Completion detail text — dim relative to label so the label pops
    '.cm-completionDetail': {
      color: '#5A5A5A',
      fontStyle: 'normal',
    },
    // Fold gutter
    '.cm-foldGutter': {
      color: '#5A5A5A',
    },
    // Subtle 1px focus border like LeetCode — miniscule, not the old jarring
    // 2px black rectangle. Inset so it sits inside the editor's own bounds.
    '&.cm-focused': {
      outline: '1px solid #404040',
      outlineOffset: '-1px',
    },
    // Scrollbar (webkit)
    '.cm-scroller::-webkit-scrollbar': {
      width: '6px',
      height: '6px',
    },
    '.cm-scroller::-webkit-scrollbar-track': {
      background: '#262626',
    },
    '.cm-scroller::-webkit-scrollbar-thumb': {
      background: '#525252',
      borderRadius: '3px',
    },
    '.cm-scroller::-webkit-scrollbar-thumb:hover': {
      background: '#6a6a6a',
    },
  },
  { dark: true },
);

const leetmeowThemeLight = EditorView.theme(
  {
    '&': {
      backgroundColor: '#ffffff',
      color: '#0A0A0A',
      height: '100%',
      // fontSize controlled by fontSizeCompartment — do NOT set here.
      fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Consolas, monospace',
    },
    '.cm-scroller': {
      overflow: 'auto',
      fontFamily: 'inherit',
      lineHeight: '1.65',
    },
    '.cm-content': {
      padding: '12px 16px',
      caretColor: '#0A0A0A',
    },
    '.cm-line': {
      paddingLeft: '2px',
      paddingRight: '0',
    },
    // Nudge the indentation guides a touch further left.
    '.cm-indent-markers::before': {
      transform: 'translateX(-0.5ch)',
    },
    '.cm-cursor, .cm-dropCursor': {
      borderLeftColor: '#0A0A0A',
      borderLeftWidth: '2px',
      marginLeft: '-1px',
    },
    '.cm-cursorLayer': {
      zIndex: '5',
    },
    '&.cm-focused .cm-selectionBackground, .cm-selectionBackground, .cm-content ::selection': {
      backgroundColor: '#cfe0ff',
    },
    '.cm-gutters': {
      backgroundColor: '#ffffff',
      borderRight: '1px solid #e0e0e0',
      color: '#888888',
      userSelect: 'none',
    },
    '.cm-gutter.cm-lineNumbers .cm-gutterElement': {
      padding: '0 12px 0 8px',
      minWidth: '36px',
    },
    '.cm-activeLineGutter': {
      backgroundColor: '#f0f0f0',
      color: '#555555',
    },
    // Translucent so indentation guides (z-index:-1) remain visible on the
    // current line instead of being covered by an opaque highlight.
    '.cm-activeLine': {
      backgroundColor: 'rgba(0, 0, 0, 0.045)',
    },
    '.cm-searchMatch': {
      outline: '1px solid #888888',
      backgroundColor: 'transparent',
    },
    '.cm-searchMatch.cm-searchMatch-selected': {
      outline: '1px solid #0A0A0A',
      backgroundColor: '#e0e0e0',
    },
    '.cm-matchingBracket': {
      backgroundColor: 'rgba(0, 0, 0, 0.06) !important',
      outline: '1px solid #cccccc',
      borderRadius: '2px',
      color: '#0A0A0A',
    },
    '.cm-nonmatchingBracket': {
      backgroundColor: 'transparent',
      color: '#d33a36',
      fontWeight: '700',
    },
    '.cm-tooltip': {
      backgroundColor: '#fafafa',
      border: '1px solid #e0e0e0',
      color: '#0A0A0A',
    },
    '.cm-tooltip-autocomplete > ul > li[aria-selected]': {
      backgroundColor: '#e0e0e0',
    },
    '.cm-completionDetail': {
      color: '#888888',
      fontStyle: 'normal',
    },
    '.cm-foldGutter': {
      color: '#888888',
    },
    '&.cm-focused': {
      outline: '1px solid #e0e0e0',
      outlineOffset: '-1px',
    },
    '.cm-scroller::-webkit-scrollbar': {
      width: '6px',
      height: '6px',
    },
    '.cm-scroller::-webkit-scrollbar-track': {
      background: '#ffffff',
    },
    '.cm-scroller::-webkit-scrollbar-thumb': {
      background: '#cccccc',
      borderRadius: '3px',
    },
    '.cm-scroller::-webkit-scrollbar-thumb:hover': {
      background: '#888888',
    },
  },
  { dark: false },
);

/**
 * The LeetMeow brand editor: a white panel with charcoal ink on the warm-paper
 * palette, paired with CodeMirror's *default* light syntax colors (purple
 * keywords, blue definitions, brown comments). Distinct from the generic light
 * theme so the `leetmeow` theme reads as its own thing.
 */
const leetmeowThemeBrand = EditorView.theme(
  {
    '&': {
      backgroundColor: '#ffffff',
      color: '#2c2a28',
      height: '100%',
      fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Consolas, monospace',
    },
    '.cm-scroller': { overflow: 'auto', fontFamily: 'inherit', lineHeight: '1.65' },
    '.cm-content': { padding: '12px 16px', caretColor: '#3d3d3d' },
    '.cm-line': { paddingLeft: '2px', paddingRight: '0' },
    '.cm-indent-markers::before': { transform: 'translateX(-0.5ch)' },
    '.cm-cursor, .cm-dropCursor': {
      borderLeftColor: '#3d3d3d',
      borderLeftWidth: '2px',
      marginLeft: '-1px',
    },
    '.cm-cursorLayer': { zIndex: '5' },
    '&.cm-focused .cm-selectionBackground, .cm-selectionBackground, .cm-content ::selection': {
      backgroundColor: '#e7e0d2',
    },
    '.cm-gutters': {
      backgroundColor: '#ffffff',
      borderRight: '1px solid #e4ded2',
      color: '#c4bdb1',
      userSelect: 'none',
    },
    '.cm-gutter.cm-lineNumbers .cm-gutterElement': { padding: '0 12px 0 8px', minWidth: '36px' },
    '.cm-activeLineGutter': { backgroundColor: 'transparent', color: '#9c958a' },
    '.cm-activeLine': { backgroundColor: 'rgba(61, 61, 61, 0.035)' },
    '.cm-searchMatch': { outline: '1px solid #a39d94', backgroundColor: 'transparent' },
    '.cm-searchMatch.cm-searchMatch-selected': { outline: '1px solid #3d3d3d', backgroundColor: '#ece5d6' },
    '.cm-matchingBracket': {
      backgroundColor: 'rgba(61, 61, 61, 0.08) !important',
      outline: '1px solid #d0c8b8',
      borderRadius: '2px',
      color: '#2c2a28',
    },
    '.cm-nonmatchingBracket': { backgroundColor: 'transparent', color: '#b3503e', fontWeight: '700' },
    '.cm-tooltip': { backgroundColor: '#ffffff', border: '1px solid #e4ded2', color: '#2c2a28' },
    '.cm-tooltip-autocomplete > ul > li[aria-selected]': { backgroundColor: '#f0ebe2' },
    '.cm-completionDetail': { color: '#a39d94', fontStyle: 'normal' },
    '.cm-foldGutter': { color: '#a39d94' },
    '&.cm-focused': { outline: '1px solid #e4ded2', outlineOffset: '-1px' },
    '.cm-scroller::-webkit-scrollbar': { width: '6px', height: '6px' },
    '.cm-scroller::-webkit-scrollbar-track': { background: '#ffffff' },
    '.cm-scroller::-webkit-scrollbar-thumb': { background: '#d0c8b8', borderRadius: '3px' },
    '.cm-scroller::-webkit-scrollbar-thumb:hover': { background: '#a39d94' },
  },
  { dark: false },
);

/** Brand editor theme used by the `leetmeow` UI theme. */
export const leetmeowEditorThemeBrand: Extension = [leetmeowThemeBrand, syntaxHighlighting(defaultHighlightStyle)];

// ---------------------------------------------------------------------------
// Theme-synced editor — surface + syntax driven entirely by the active theme's
// `--ll-*` CSS variables. One theme adapts to every UI theme (incl. all the
// MonkeyType palettes) with no per-theme authoring: the caret takes the theme's
// accent (MonkeyType's --main-color), keywords/types take the accent, strings
// the success hue, numbers the info hue, comments the faint tone, etc. Because
// the colours are `var(--ll-*)`, they update live the instant the theme changes
// — no reconfigure needed for colour (only for the dark/light flag below).
// ---------------------------------------------------------------------------

const SELECTION = 'color-mix(in srgb, var(--ll-accent) 22%, transparent)';
const ACTIVE_LINE = 'color-mix(in srgb, var(--ll-text) 6%, transparent)';
const MATCH_BG = 'color-mix(in srgb, var(--ll-text) 8%, transparent)';

const syncedSurfaceStyles = {
  '&': {
    backgroundColor: 'var(--ll-surface)',
    color: 'var(--ll-text)',
    height: '100%',
    fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Consolas, monospace',
  },
  '.cm-scroller': { overflow: 'auto', fontFamily: 'inherit', lineHeight: '1.65' },
  '.cm-content': { padding: '12px 16px', caretColor: 'var(--ll-accent)' },
  '.cm-line': { paddingLeft: '2px', paddingRight: '0' },
  '.cm-indent-markers::before': { transform: 'translateX(-0.5ch)' },
  '.cm-cursor, .cm-dropCursor': {
    borderLeftColor: 'var(--ll-accent)',
    borderLeftWidth: '2px',
    marginLeft: '-1px',
  },
  '.cm-cursorLayer': { zIndex: '5' },
  '&.cm-focused .cm-selectionBackground, .cm-selectionBackground, .cm-content ::selection': {
    backgroundColor: SELECTION,
  },
  '.cm-gutters': {
    backgroundColor: 'var(--ll-surface)',
    borderRight: '1px solid var(--ll-border)',
    color: 'var(--ll-faint)',
    userSelect: 'none',
  },
  '.cm-gutter.cm-lineNumbers .cm-gutterElement': { padding: '0 12px 0 8px', minWidth: '36px' },
  '.cm-activeLineGutter': { backgroundColor: 'transparent', color: 'var(--ll-muted)' },
  '.cm-activeLine': { backgroundColor: ACTIVE_LINE },
  '.cm-searchMatch': { outline: '1px solid var(--ll-border-strong)', backgroundColor: 'transparent' },
  '.cm-searchMatch.cm-searchMatch-selected': { outline: '1px solid var(--ll-accent)', backgroundColor: MATCH_BG },
  '.cm-matchingBracket': {
    backgroundColor: `${MATCH_BG} !important`,
    outline: '1px solid var(--ll-border-strong)',
    borderRadius: '2px',
    color: 'var(--ll-text)',
  },
  '.cm-nonmatchingBracket': { backgroundColor: 'transparent', color: 'var(--ll-error)', fontWeight: '700' },
  '.cm-tooltip': { backgroundColor: 'var(--ll-surface-2)', border: '1px solid var(--ll-border)', color: 'var(--ll-text)' },
  '.cm-tooltip-autocomplete > ul > li[aria-selected]': { backgroundColor: 'var(--ll-surface)' },
  '.cm-completionDetail': { color: 'var(--ll-faint)', fontStyle: 'normal' },
  '.cm-foldGutter': { color: 'var(--ll-faint)' },
  '&.cm-focused': { outline: '1px solid var(--ll-border)', outlineOffset: '-1px' },
  '.cm-scroller::-webkit-scrollbar': { width: '6px', height: '6px' },
  '.cm-scroller::-webkit-scrollbar-track': { background: 'var(--ll-surface)' },
  '.cm-scroller::-webkit-scrollbar-thumb': { background: 'var(--ll-border-strong)', borderRadius: '3px' },
  '.cm-scroller::-webkit-scrollbar-thumb:hover': { background: 'var(--ll-muted)' },
};

// ---------------------------------------------------------------------------
// Per-theme syntax palettes.
//
// Earlier the theme-synced editor folded every token onto a handful of the
// theme's own `--ll-*` variables (keywords→accent, strings→success, …), which
// flattened rich code down to ~4 colours. Each theme here instead carries a
// full eight-role palette, so dark mode keeps its proper spread of hues.
//
// Where a theme is a well-known editor scheme we use its OFFICIAL syntax
// colours — Nord (nordtheme.com), Dracula (draculatheme.com) and Moonlight all
// publish exact token hexes — so the code reads the way users expect on those
// themes. The MonkeyType-derived and bespoke themes (Serika, Botanical, Carbon,
// Muted Ink, Terminal, Paper, LeetMeow) have no canonical code palette, so each
// gets a hand-tuned set anchored on that theme's own accent and surface.
// ---------------------------------------------------------------------------

// Restraint, matching real editor themes (One Dark, LeetCode, etc.): only the
// roles below are coloured. Plain variables, property access, definitions, and
// punctuation / brackets are deliberately LEFT at the editor foreground so code
// doesn't turn into a rainbow — that was the over-colouring complaint. `operator`
// and `variable` are optional so a theme can colour them only when its published
// scheme does (e.g. Dracula's pink operators).
interface SyntaxPalette {
  /** Keywords: if/return/def/class, control + module keywords. */
  keyword: string;
  /** Function and method names at definition and call sites. */
  func: string;
  /** Types, classes, and built-in/standard names. */
  type: string;
  /** String literals, template strings, and escapes. */
  string: string;
  /** Numbers, booleans, and null/undefined. */
  number: string;
  /** Comments (rendered italic). */
  comment: string;
  /** Operators (NOT punctuation/brackets). Omit to leave operators at fg. */
  operator?: string;
  /** Plain variables + properties. Omit (the default) to leave them at fg. */
  variable?: string;
}

/**
 * Builds a CodeMirror HighlightStyle from a palette. Only the roles a real theme
 * tints are emitted; everything else (identifiers, punctuation, brackets) falls
 * through to the editor foreground, like LeetCode and One Dark.
 */
function buildHighlight(p: SyntaxPalette): HighlightStyle {
  const spec = [
    { tag: tags.keyword, color: p.keyword },
    { tag: tags.controlKeyword, color: p.keyword },
    { tag: tags.moduleKeyword, color: p.keyword },
    { tag: tags.standard(tags.name), color: p.type },
    { tag: tags.typeName, color: p.type },
    { tag: tags.className, color: p.type },
    { tag: tags.function(tags.variableName), color: p.func, fontWeight: '600' },
    { tag: tags.function(tags.name), color: p.func, fontWeight: '600' },
    { tag: tags.string, color: p.string },
    { tag: tags.special(tags.string), color: p.string },
    { tag: tags.escape, color: p.string },
    { tag: tags.number, color: p.number },
    { tag: tags.bool, color: p.number },
    { tag: tags.null, color: p.number },
    { tag: tags.comment, color: p.comment, fontStyle: 'italic' },
    { tag: tags.lineComment, color: p.comment, fontStyle: 'italic' },
    { tag: tags.blockComment, color: p.comment, fontStyle: 'italic' },
  ];
  if (p.variable) {
    spec.push(
      { tag: tags.variableName, color: p.variable },
      { tag: tags.propertyName, color: p.variable },
    );
  }
  if (p.operator) {
    spec.push(
      { tag: tags.operator, color: p.operator },
      { tag: tags.typeOperator, color: p.operator },
    );
  }
  return HighlightStyle.define(spec);
}

/** Atom One Dark — the fallback for any dark theme without its own palette. */
const DARK_DEFAULT_PALETTE: SyntaxPalette = {
  keyword: '#C678DD',
  func: '#61AFEF',
  type: '#E5C07B',
  string: '#98C379',
  number: '#D19A66',
  comment: '#7D8799',
  operator: '#56B6C2',
};

/** Atom One Light — the fallback for any light theme without its own palette. */
const LIGHT_DEFAULT_PALETTE: SyntaxPalette = {
  keyword: '#A626A4',
  func: '#4078F2',
  type: '#C18401',
  string: '#50A14F',
  number: '#986801',
  comment: '#A0A1A7',
  operator: '#0184BC',
};

/**
 * Syntax palette per theme. Keyed by the `data-theme` value. `dark` and `light`
 * fall through to the generic defaults above. Themes not listed here (should be
 * none) fall back by their light/dark classification.
 */
const SYNTAX_PALETTES: Record<string, SyntaxPalette> = {
  // Official Nord syntax colours (nordtheme.com "Aurora"/"Frost"). Variables stay
  // at the Nord foreground, as in the published theme.
  nord: {
    keyword: '#81A1C1',
    func: '#88C0D0',
    type: '#8FBCBB',
    string: '#A3BE8C',
    number: '#B48EAD',
    comment: '#616E88',
    operator: '#81A1C1',
  },
  // Official Dracula spec (draculatheme.com/contribute) — pink operators, vars
  // at foreground.
  dracula: {
    keyword: '#FF79C6',
    func: '#50FA7B',
    type: '#8BE9FD',
    string: '#F1FA8C',
    number: '#BD93F9',
    comment: '#6272A4',
    operator: '#FF79C6',
  },
  // Moonlight (atomiks) token colours.
  moonlight: {
    keyword: '#C099FF',
    func: '#82AAFF',
    type: '#86E1FC',
    string: '#C3E88D',
    number: '#FF98A4',
    comment: '#7A88CF',
    operator: '#B4C2F0',
  },
  // Serika Dark — MonkeyType's gold-on-charcoal. No native code scheme, so a
  // warm set anchored on the gold accent with sage/clay companions.
  'serika-dark': {
    keyword: '#E2B714',
    func: '#B8C99A',
    type: '#E8C06A',
    string: '#9CB380',
    number: '#D98E5A',
    comment: '#646669',
  },
  // Botanical — deep greens + earthy clays, kept off the leaf-green accent so
  // tokens stay legible against the green surface.
  botanical: {
    keyword: '#9CCB6A',
    func: '#C9B98C',
    type: '#B5D49A',
    string: '#D9A86C',
    number: '#CE8A5C',
    comment: '#6E7A64',
  },
  // Carbon — pure black; Night Owl's palette (sarah-drasner) reads well on it.
  carbon: {
    keyword: '#C792EA',
    func: '#82AAFF',
    type: '#ADDB67',
    string: '#ECC48D',
    number: '#F78C6C',
    comment: '#637777',
    operator: '#7FDBCA',
  },
  // Muted Ink — warm sepia, deliberately low-saturation so nothing shouts.
  'muted-ink': {
    keyword: '#C8A874',
    func: '#B5A982',
    type: '#C2A877',
    string: '#A89A72',
    number: '#C29162',
    comment: '#706860',
  },
  // Terminal — retro green CRT. Stays monochrome-green by design (other hues
  // would break the aesthetic); separation comes from brightness, not colour.
  terminal: {
    keyword: '#5CFF5C',
    func: '#33FF33',
    type: '#6EFF6E',
    string: '#1FBF1F',
    number: '#80FF80',
    comment: '#168016',
    operator: '#1FAA1F',
  },
  // Paper — warm cream light theme; earthy ink hues that sit on the page.
  paper: {
    keyword: '#8C3B7A',
    func: '#7A5A1E',
    type: '#2A6A6A',
    string: '#9A5A2A',
    number: '#3A7A4A',
    comment: '#9A8F7A',
  },
  // LeetMeow — charcoal-on-paper brand light theme; classic purple/blue/brown.
  leetmeow: {
    keyword: '#9B59B6',
    func: '#8A6D3B',
    type: '#2E7D7D',
    string: '#8A7B3B',
    number: '#4A7C59',
    comment: '#A39D94',
  },
};

// Cache the built HighlightStyles so swapping themes doesn't re-define them.
const highlightCache = new Map<string, HighlightStyle>();
function highlightForTheme(resolved: string): HighlightStyle {
  const cached = highlightCache.get(resolved);
  if (cached) return cached;
  const palette =
    SYNTAX_PALETTES[resolved] ?? (isLightTheme(resolved) ? LIGHT_DEFAULT_PALETTE : DARK_DEFAULT_PALETTE);
  const style = buildHighlight(palette);
  highlightCache.set(resolved, style);
  return style;
}

const syncedSurfaceDark = EditorView.theme(syncedSurfaceStyles, { dark: true });
const syncedSurfaceLight = EditorView.theme(syncedSurfaceStyles, { dark: false });

/**
 * Theme-synced editor: the surface (background, gutter, selection) follows the
 * active theme's `--ll-*` variables, while syntax uses that theme's rich
 * eight-role palette. One call per resolved UI theme.
 */
export function syncedEditorTheme(resolved: string): Extension {
  return [
    isLightTheme(resolved) ? syncedSurfaceLight : syncedSurfaceDark,
    syntaxHighlighting(highlightForTheme(resolved)),
  ];
}

// Fixed (non-synced) editor schemes — the curated dark/light surfaces paired
// with the restrained One Dark / One Light syntax palettes, so toggling "match
// editor to theme" off keeps the same calm colouring on a stable background.
export const leetmeowEditorThemeDark: Extension = [
  leetmeowThemeDark,
  syntaxHighlighting(buildHighlight(DARK_DEFAULT_PALETTE)),
];
export const leetmeowEditorThemeLight: Extension = [
  leetmeowThemeLight,
  syntaxHighlighting(buildHighlight(LIGHT_DEFAULT_PALETTE)),
];
export const leetmeowEditorTheme = leetmeowEditorThemeDark;
