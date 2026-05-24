import { EditorView } from '@codemirror/view';
import { HighlightStyle, syntaxHighlighting } from '@codemirror/language';
import { tags } from '@lezer/highlight';
import type { Extension } from '@codemirror/state';

/**
 * Pure-grayscale CodeMirror 6 theme. Zero hue — emphasis by contrast and weight.
 * Mirrors the LeetLock design-system tokens from globals.css (--ll-*).
 */
const leetlockTheme = EditorView.theme(
  {
    '&': {
      backgroundColor: '#0A0A0A',
      color: '#EDEDED',
      height: '100%',
      fontSize: '13px',
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
    // Cursor
    '.cm-cursor, .cm-dropCursor': {
      borderLeftColor: '#FFFFFF',
      borderLeftWidth: '1.5px',
    },
    // Selection
    '&.cm-focused .cm-selectionBackground, .cm-selectionBackground, .cm-content ::selection': {
      backgroundColor: '#383838',
    },
    // Gutter (line numbers)
    '.cm-gutters': {
      backgroundColor: '#0A0A0A',
      borderRight: '1px solid #262626',
      color: '#5A5A5A',
      userSelect: 'none',
    },
    '.cm-gutter.cm-lineNumbers .cm-gutterElement': {
      padding: '0 12px 0 8px',
      minWidth: '36px',
    },
    '.cm-activeLineGutter': {
      backgroundColor: '#161616',
      color: '#8A8A8A',
    },
    // Active line highlight
    '.cm-activeLine': {
      backgroundColor: '#161616',
    },
    // Search match
    '.cm-searchMatch': {
      outline: '1px solid #5A5A5A',
      backgroundColor: 'transparent',
    },
    '.cm-searchMatch.cm-searchMatch-selected': {
      outline: '1px solid #FFFFFF',
      backgroundColor: '#262626',
    },
    // Bracket matching
    '.cm-matchingBracket, .cm-nonmatchingBracket': {
      backgroundColor: '#262626',
      outline: '1px solid #5A5A5A',
    },
    // Autocomplete
    '.cm-tooltip': {
      backgroundColor: '#161616',
      border: '1px solid #262626',
      color: '#EDEDED',
    },
    '.cm-tooltip-autocomplete > ul > li[aria-selected]': {
      backgroundColor: '#262626',
    },
    // Fold gutter
    '.cm-foldGutter': {
      color: '#5A5A5A',
    },
    // Focus ring — white outline on focused editor
    '&.cm-focused': {
      outline: '2px solid #FFFFFF',
      outlineOffset: '-2px',
    },
    // Scrollbar (webkit)
    '.cm-scroller::-webkit-scrollbar': {
      width: '6px',
      height: '6px',
    },
    '.cm-scroller::-webkit-scrollbar-track': {
      background: '#0A0A0A',
    },
    '.cm-scroller::-webkit-scrollbar-thumb': {
      background: '#383838',
      borderRadius: '3px',
    },
    '.cm-scroller::-webkit-scrollbar-thumb:hover': {
      background: '#5A5A5A',
    },
  },
  { dark: true },
);

/**
 * Syntax highlighting in pure grayscale.
 * Bright tokens (#EDEDED) for high-value syntax; dim (#8A8A8A) for punctuation/structure.
 */
const leetlockHighlight = HighlightStyle.define([
  // Keywords: bold white
  { tag: tags.keyword, color: '#FFFFFF', fontWeight: '600' },
  // Control-flow keywords: slightly dimmer bold
  { tag: tags.controlKeyword, color: '#EDEDED', fontWeight: '600' },
  // Built-ins and standard names
  { tag: tags.standard(tags.name), color: '#EDEDED' },
  // Function names: white, not bold
  { tag: tags.function(tags.variableName), color: '#FFFFFF' },
  { tag: tags.function(tags.name), color: '#FFFFFF' },
  // Variable names
  { tag: tags.variableName, color: '#EDEDED' },
  // Property names
  { tag: tags.propertyName, color: '#EDEDED' },
  // Strings: slightly dim
  { tag: tags.string, color: '#C8C8C8' },
  // Template literals
  { tag: tags.special(tags.string), color: '#C8C8C8' },
  // Numbers: bright
  { tag: tags.number, color: '#FFFFFF', fontWeight: '500' },
  // Booleans / null / undefined: medium
  { tag: tags.bool, color: '#EDEDED' },
  { tag: tags.null, color: '#8A8A8A' },
  // Comments: faint, italic
  { tag: tags.comment, color: '#5A5A5A', fontStyle: 'italic' },
  // Line comments same
  { tag: tags.lineComment, color: '#5A5A5A', fontStyle: 'italic' },
  // Block comments
  { tag: tags.blockComment, color: '#5A5A5A', fontStyle: 'italic' },
  // Operators: muted
  { tag: tags.operator, color: '#8A8A8A' },
  // Punctuation: faint — keeps noise low
  { tag: tags.punctuation, color: '#5A5A5A' },
  { tag: tags.bracket, color: '#8A8A8A' },
  { tag: tags.paren, color: '#8A8A8A' },
  // Type names (in JSDoc / TS)
  { tag: tags.typeName, color: '#EDEDED', fontStyle: 'italic' },
  { tag: tags.typeOperator, color: '#8A8A8A' },
  // Definitions: white bold
  { tag: tags.definition(tags.name), color: '#FFFFFF', fontWeight: '600' },
  // Class names
  { tag: tags.className, color: '#FFFFFF' },
  // Escape sequences
  { tag: tags.escape, color: '#EDEDED' },
]);

/** The complete CodeMirror theme extension for the LeetLock challenge page. */
export const leetlockEditorTheme: Extension = [
  leetlockTheme,
  syntaxHighlighting(leetlockHighlight),
];
