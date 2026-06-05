import { EditorView } from '@codemirror/view';
import { HighlightStyle, syntaxHighlighting } from '@codemirror/language';
import { tags } from '@lezer/highlight';
import type { Extension } from '@codemirror/state';

/**
 * Pure-grayscale CodeMirror 6 theme. Zero hue — emphasis by contrast and weight.
 * Mirrors the LeetLock design-system tokens from globals.css (--ll-*).
 */
const leetlockThemeDark = EditorView.theme(
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
      padding: '12px 0',
      caretColor: '#FFFFFF',
    },
    '.cm-line': {
      paddingLeft: '16px',
      paddingRight: '16px',
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
    // Bracket matching — subtle and boxless. The old version drew an outlined
    // grey box around BOTH auto-paired brackets, which read as a stray "box"
    // and hid the caret sitting between them. Now we just brighten + bold the
    // matched bracket; no background, no outline.
    '.cm-matchingBracket': {
      backgroundColor: 'transparent',
      color: '#FFFFFF',
      fontWeight: '700',
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
    // No focus box — the caret + the panel border indicate focus, like
    // LeetCode / VS Code. The old 2px inset outline drew a hard rectangle
    // (its top + left edges read as stray black/white lines on type).
    '&.cm-focused': {
      outline: 'none',
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

const leetlockThemeLight = EditorView.theme(
  {
    '&': {
      backgroundColor: '#f3f3f3',
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
      padding: '12px 0',
      caretColor: '#0A0A0A',
    },
    '.cm-line': {
      paddingLeft: '16px',
      paddingRight: '16px',
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
      backgroundColor: '#f3f3f3',
      borderRight: '1px solid #d9d9d9',
      color: '#888888',
      userSelect: 'none',
    },
    '.cm-gutter.cm-lineNumbers .cm-gutterElement': {
      padding: '0 12px 0 8px',
      minWidth: '36px',
    },
    '.cm-activeLineGutter': {
      backgroundColor: '#ececec',
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
      backgroundColor: '#d9d9d9',
    },
    '.cm-matchingBracket': {
      backgroundColor: 'transparent',
      color: '#0A0A0A',
      fontWeight: '700',
    },
    '.cm-nonmatchingBracket': {
      backgroundColor: 'transparent',
      color: '#d33a36',
      fontWeight: '700',
    },
    '.cm-tooltip': {
      backgroundColor: '#eaeaea',
      border: '1px solid #d9d9d9',
      color: '#0A0A0A',
    },
    '.cm-tooltip-autocomplete > ul > li[aria-selected]': {
      backgroundColor: '#d9d9d9',
    },
    '.cm-completionDetail': {
      color: '#888888',
      fontStyle: 'normal',
    },
    '.cm-foldGutter': {
      color: '#888888',
    },
    '&.cm-focused': {
      outline: 'none',
    },
    '.cm-scroller::-webkit-scrollbar': {
      width: '6px',
      height: '6px',
    },
    '.cm-scroller::-webkit-scrollbar-track': {
      background: '#f3f3f3',
    },
    '.cm-scroller::-webkit-scrollbar-thumb': {
      background: '#c2c2c2',
      borderRadius: '3px',
    },
    '.cm-scroller::-webkit-scrollbar-thumb:hover': {
      background: '#888888',
    },
  },
  { dark: false },
);

/**
 * Syntax highlighting with colour — VS Code / LeetCode inspired.
 * Dark bg remains from the design system; syntax tokens get real hues.
 */
const leetlockHighlightDark = HighlightStyle.define([
  // Keywords: purple (if, return, const, let, class, function …)
  { tag: tags.keyword, color: '#C586C0' },
  { tag: tags.controlKeyword, color: '#C586C0' },
  // Built-in names (console, Math, Array …)
  { tag: tags.standard(tags.name), color: '#4EC9B0' },
  // Function names: yellow
  { tag: tags.function(tags.variableName), color: '#DCDCAA' },
  { tag: tags.function(tags.name), color: '#DCDCAA' },
  // Variables: light blue
  { tag: tags.variableName, color: '#9CDCFE' },
  // Property access: light blue
  { tag: tags.propertyName, color: '#9CDCFE' },
  // Strings: orange
  { tag: tags.string, color: '#CE9178' },
  { tag: tags.special(tags.string), color: '#CE9178' },
  // Numbers: light green
  { tag: tags.number, color: '#B5CEA8' },
  // Booleans: blue
  { tag: tags.bool, color: '#569CD6' },
  { tag: tags.null, color: '#569CD6' },
  // Comments: green, italic
  { tag: tags.comment, color: '#6A9955', fontStyle: 'italic' },
  { tag: tags.lineComment, color: '#6A9955', fontStyle: 'italic' },
  { tag: tags.blockComment, color: '#6A9955', fontStyle: 'italic' },
  // Operators
  { tag: tags.operator, color: '#D4D4D4' },
  // Punctuation / brackets
  { tag: tags.punctuation, color: '#D4D4D4' },
  { tag: tags.bracket, color: '#D4D4D4' },
  { tag: tags.paren, color: '#D4D4D4' },
  // Type names: teal
  { tag: tags.typeName, color: '#4EC9B0' },
  { tag: tags.typeOperator, color: '#D4D4D4' },
  // Definitions: light blue, bold
  { tag: tags.definition(tags.name), color: '#9CDCFE', fontWeight: '600' },
  // Class names: teal
  { tag: tags.className, color: '#4EC9B0' },
  // Escape sequences: yellow-orange
  { tag: tags.escape, color: '#D7BA7D' },
]);

/**
 * Light-mode syntax highlighting with colour.
 */
const leetlockHighlightLight = HighlightStyle.define([
  { tag: tags.keyword, color: '#AF00DB' },
  { tag: tags.controlKeyword, color: '#AF00DB' },
  { tag: tags.standard(tags.name), color: '#267F99' },
  { tag: tags.function(tags.variableName), color: '#795E26' },
  { tag: tags.function(tags.name), color: '#795E26' },
  { tag: tags.variableName, color: '#001080' },
  { tag: tags.propertyName, color: '#001080' },
  { tag: tags.string, color: '#A31515' },
  { tag: tags.special(tags.string), color: '#A31515' },
  { tag: tags.number, color: '#098658' },
  { tag: tags.bool, color: '#0000FF' },
  { tag: tags.null, color: '#0000FF' },
  { tag: tags.comment, color: '#008000', fontStyle: 'italic' },
  { tag: tags.lineComment, color: '#008000', fontStyle: 'italic' },
  { tag: tags.blockComment, color: '#008000', fontStyle: 'italic' },
  { tag: tags.operator, color: '#0A0A0A' },
  { tag: tags.punctuation, color: '#0A0A0A' },
  { tag: tags.bracket, color: '#0A0A0A' },
  { tag: tags.paren, color: '#0A0A0A' },
  { tag: tags.typeName, color: '#267F99' },
  { tag: tags.typeOperator, color: '#0A0A0A' },
  { tag: tags.definition(tags.name), color: '#001080', fontWeight: '600' },
  { tag: tags.className, color: '#267F99' },
  { tag: tags.escape, color: '#EE0000' },
]);

export const leetlockEditorThemeDark: Extension = [leetlockThemeDark, syntaxHighlighting(leetlockHighlightDark)];
export const leetlockEditorThemeLight: Extension = [leetlockThemeLight, syntaxHighlighting(leetlockHighlightLight)];
export const leetlockEditorTheme = leetlockEditorThemeDark;
