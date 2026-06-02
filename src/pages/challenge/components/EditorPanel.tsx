import { useEffect, useRef, useCallback, useState } from 'react';
import {
  EditorView,
  keymap,
  lineNumbers,
  highlightActiveLine,
  highlightActiveLineGutter,
  drawSelection,
  rectangularSelection,
  crosshairCursor,
  highlightSpecialChars,
  dropCursor,
  scrollPastEnd,
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
  snippetCompletion,
  type CompletionContext,
  type CompletionSource,
} from '@codemirror/autocomplete';
import { highlightSelectionMatches, search, searchKeymap } from '@codemirror/search';
import { vim, getCM } from '@replit/codemirror-vim';
import { emacs } from '@replit/codemirror-emacs';
import { leetlockEditorThemeDark, leetlockEditorThemeLight } from '../codemirror-theme';
import { normalizeIndentation } from '../../../lib/editor/indent';
import type { JudgeResult } from '../../../lib/judge';
import { LANGUAGE_LABEL, JS_SYNTAX_ONLY_LANGUAGES } from '../../../lib/types';
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
  resolvedTheme?: string;
  /**
   * When set, replaces the entire editor content with `content` once. The
   * `version` counter must change for each new restore request so the effect
   * re-fires even if the content string happens to be the same.
   */
  resetCode?: { content: string; version: number };
  /** Initial word-wrap state; controlled externally for persistence. */
  wordWrap?: boolean;
  /** Called when the user toggles word-wrap so the caller can persist it. */
  onWordWrapChange?: (wrap: boolean) => void;
  /** Whether to show autocomplete suggestions while typing. Defaults to false. */
  autocomplete?: boolean;
  /** Timestamp (Date.now()) set each time a draft save completes; triggers a brief "saved" indicator. */
  draftSavedAt?: number | null;
}

function indentSpaces(n: 2 | 4): string {
  return ' '.repeat(n);
}

function fontSizeTheme(px: number) {
  return EditorView.theme({ '&': { fontSize: `${px}px` } });
}


// ---------------------------------------------------------------------------
// Code snippets — triggered by keyword abbreviations (Tab to expand).
// Kept focused on patterns used in competitive programming.
// ---------------------------------------------------------------------------

const JS_SNIPPETS = [
  snippetCompletion('for (let ${i} = 0; ${i} < ${n}; ${i}++) {\n\t${}\n}', {
    label: 'for',
    detail: 'for loop',
    type: 'keyword',
  }),
  snippetCompletion('for (let ${i} = ${arr}.length - 1; ${i} >= 0; ${i}--) {\n\t${}\n}', {
    label: 'forr',
    detail: 'reverse for loop',
    type: 'keyword',
  }),
  snippetCompletion('for (const ${item} of ${iterable}) {\n\t${}\n}', {
    label: 'forof',
    detail: 'for...of loop',
    type: 'keyword',
  }),
  snippetCompletion('while (${condition}) {\n\t${}\n}', {
    label: 'while',
    detail: 'while loop',
    type: 'keyword',
  }),
  snippetCompletion('if (${condition}) {\n\t${}\n}', {
    label: 'if',
    detail: 'if statement',
    type: 'keyword',
  }),
  snippetCompletion('if (${condition}) {\n\t${}\n} else {\n\t${}\n}', {
    label: 'ife',
    detail: 'if-else',
    type: 'keyword',
  }),
  snippetCompletion('const ${name} = new Map();\n${}', {
    label: 'newmap',
    detail: 'new Map()',
    type: 'keyword',
  }),
  snippetCompletion('const ${name} = new Set();\n${}', {
    label: 'newset',
    detail: 'new Set()',
    type: 'keyword',
  }),
  snippetCompletion('const ${n} = ${arr}.length;\n${}', {
    label: 'len',
    detail: 'array length',
    type: 'keyword',
  }),
  snippetCompletion('${arr}.sort((a, b) => a - b);\n${}', {
    label: 'sort',
    detail: 'sort ascending',
    type: 'keyword',
  }),
  snippetCompletion('const MOD = 1_000_000_007n;\n${}', {
    label: 'mod',
    detail: 'BigInt modulo constant 1e9+7',
    type: 'keyword',
  }),
  snippetCompletion('const INF = Infinity;\n${}', {
    label: 'inf',
    detail: 'Infinity constant',
    type: 'keyword',
  }),
];

const TS_SNIPPETS = [
  snippetCompletion('for (let ${i} = 0; ${i} < ${n}; ${i}++) {\n\t${}\n}', {
    label: 'for',
    detail: 'for loop',
    type: 'keyword',
  }),
  snippetCompletion('for (let ${i} = ${arr}.length - 1; ${i} >= 0; ${i}--) {\n\t${}\n}', {
    label: 'forr',
    detail: 'reverse for loop',
    type: 'keyword',
  }),
  snippetCompletion('for (const ${item} of ${iterable}) {\n\t${}\n}', {
    label: 'forof',
    detail: 'for...of loop',
    type: 'keyword',
  }),
  snippetCompletion('while (${condition}) {\n\t${}\n}', {
    label: 'while',
    detail: 'while loop',
    type: 'keyword',
  }),
  snippetCompletion('if (${condition}) {\n\t${}\n}', {
    label: 'if',
    detail: 'if statement',
    type: 'keyword',
  }),
  snippetCompletion('if (${condition}) {\n\t${}\n} else {\n\t${}\n}', {
    label: 'ife',
    detail: 'if-else',
    type: 'keyword',
  }),
  snippetCompletion('const ${name} = new Map<${K}, ${V}>();\n${}', {
    label: 'newmap',
    detail: 'new Map<K, V>()',
    type: 'keyword',
  }),
  snippetCompletion('const ${name} = new Set<${T}>();\n${}', {
    label: 'newset',
    detail: 'new Set<T>()',
    type: 'keyword',
  }),
  snippetCompletion('const ${n}: number = ${arr}.length;\n${}', {
    label: 'len',
    detail: 'array length (typed)',
    type: 'keyword',
  }),
  snippetCompletion('${arr}.sort((a, b) => a - b);\n${}', {
    label: 'sort',
    detail: 'sort ascending',
    type: 'keyword',
  }),
  snippetCompletion('const MOD = 1_000_000_007n;\n${}', {
    label: 'mod',
    detail: 'BigInt modulo constant 1e9+7',
    type: 'keyword',
  }),
  snippetCompletion('const INF = Infinity;\n${}', {
    label: 'inf',
    detail: 'Infinity constant',
    type: 'keyword',
  }),
];

const PYTHON_SNIPPETS = [
  snippetCompletion('for ${i} in range(${n}):\n\t${}', {
    label: 'for',
    detail: 'for range loop',
    type: 'keyword',
  }),
  snippetCompletion('for ${i} in range(${n} - 1, -1, -1):\n\t${}', {
    label: 'forr',
    detail: 'reverse for loop',
    type: 'keyword',
  }),
  snippetCompletion('for ${i}, ${v} in enumerate(${arr}):\n\t${}', {
    label: 'fore',
    detail: 'for enumerate loop',
    type: 'keyword',
  }),
  snippetCompletion('while ${condition}:\n\t${}', {
    label: 'while',
    detail: 'while loop',
    type: 'keyword',
  }),
  snippetCompletion('if ${condition}:\n\t${}', {
    label: 'if',
    detail: 'if statement',
    type: 'keyword',
  }),
  snippetCompletion('if ${condition}:\n\t${}\nelse:\n\t${}', {
    label: 'ife',
    detail: 'if-else',
    type: 'keyword',
  }),
  snippetCompletion('from collections import defaultdict\n${name} = defaultdict(${int})\n${}', {
    label: 'ddict',
    detail: 'defaultdict',
    type: 'keyword',
  }),
  snippetCompletion('from heapq import heappush, heappop\n${heap} = []\n${}', {
    label: 'heap',
    detail: 'heap setup',
    type: 'keyword',
  }),
  snippetCompletion('from heapq import heappush, heappop\n${heap} = []\nheappush(${heap}, ${val})\n${result} = heappop(${heap})\n${}', {
    label: 'pq',
    detail: 'priority queue (min-heap)',
    type: 'keyword',
  }),
  snippetCompletion('from collections import deque\n${dq} = deque()\n${}', {
    label: 'deque',
    detail: 'deque (double-ended queue)',
    type: 'keyword',
  }),
  snippetCompletion('from collections import Counter\n${cnt} = Counter(${arr})\n${}', {
    label: 'counter',
    detail: 'Counter frequency map',
    type: 'keyword',
  }),
  snippetCompletion('import bisect\n${idx} = bisect.bisect_left(${arr}, ${x})\n${}', {
    label: 'bisect',
    detail: 'binary search (bisect_left)',
    type: 'keyword',
  }),
  snippetCompletion('from functools import cache\n\n@cache\ndef ${fn}(${args}):\n\t${}', {
    label: 'cache',
    detail: '@cache memoization decorator',
    type: 'keyword',
  }),
  snippetCompletion('INF = float(\'inf\')\n${}', {
    label: 'inf',
    detail: 'float infinity',
    type: 'keyword',
  }),
  snippetCompletion('MOD = 10**9 + 7\n${}', {
    label: 'mod',
    detail: 'modulo constant 1e9+7',
    type: 'keyword',
  }),
  snippetCompletion('${result} = sorted(${arr}, key=lambda ${x}: ${x})\n${}', {
    label: 'sortkey',
    detail: 'sorted with key function',
    type: 'keyword',
  }),
];

const JAVA_SNIPPETS = [
  snippetCompletion('for (int ${i} = 0; ${i} < ${n}; ${i}++) {\n\t${}\n}', {
    label: 'for',
    detail: 'for loop',
    type: 'keyword',
  }),
  snippetCompletion('for (int ${i} = ${arr}.length - 1; ${i} >= 0; ${i}--) {\n\t${}\n}', {
    label: 'forr',
    detail: 'reverse for loop',
    type: 'keyword',
  }),
  snippetCompletion('for (${Type} ${item} : ${arr}) {\n\t${}\n}', {
    label: 'fore',
    detail: 'enhanced for loop',
    type: 'keyword',
  }),
  snippetCompletion('while (${condition}) {\n\t${}\n}', {
    label: 'while',
    detail: 'while loop',
    type: 'keyword',
  }),
  snippetCompletion('if (${condition}) {\n\t${}\n}', {
    label: 'if',
    detail: 'if statement',
    type: 'keyword',
  }),
  snippetCompletion('if (${condition}) {\n\t${}\n} else {\n\t${}\n}', {
    label: 'ife',
    detail: 'if-else',
    type: 'keyword',
  }),
  snippetCompletion('Map<${K}, ${V}> ${map} = new HashMap<>();\n${}', {
    label: 'newmap',
    detail: 'new HashMap<>()',
    type: 'keyword',
  }),
  snippetCompletion('Set<${T}> ${set} = new HashSet<>();\n${}', {
    label: 'newset',
    detail: 'new HashSet<>()',
    type: 'keyword',
  }),
  snippetCompletion('List<${T}> ${list} = new ArrayList<>();\n${}', {
    label: 'list',
    detail: 'new ArrayList<>()',
    type: 'keyword',
  }),
  snippetCompletion('int ${n} = ${arr}.length;\n${}', {
    label: 'len',
    detail: 'array length',
    type: 'keyword',
  }),
  snippetCompletion('Arrays.sort(${arr});\n${}', {
    label: 'sort',
    detail: 'Arrays.sort()',
    type: 'keyword',
  }),
  snippetCompletion('PriorityQueue<${T}> ${pq} = new PriorityQueue<>();\n${}', {
    label: 'pq',
    detail: 'PriorityQueue (min-heap)',
    type: 'keyword',
  }),
  snippetCompletion('PriorityQueue<${T}> ${pq} = new PriorityQueue<>(Collections.reverseOrder());\n${}', {
    label: 'pqmax',
    detail: 'PriorityQueue (max-heap)',
    type: 'keyword',
  }),
  snippetCompletion('Queue<${T}> ${q} = new LinkedList<>();\n${}', {
    label: 'queue',
    detail: 'Queue (LinkedList)',
    type: 'keyword',
  }),
  snippetCompletion('Deque<${T}> ${dq} = new ArrayDeque<>();\n${}', {
    label: 'dq',
    detail: 'Deque (ArrayDeque)',
    type: 'keyword',
  }),
  snippetCompletion('Deque<${T}> ${stk} = new ArrayDeque<>();\n${}', {
    label: 'stk',
    detail: 'Stack via Deque (ArrayDeque)',
    type: 'keyword',
  }),
  snippetCompletion('TreeMap<${K}, ${V}> ${tm} = new TreeMap<>();\n${}', {
    label: 'tmap',
    detail: 'TreeMap (sorted)',
    type: 'keyword',
  }),
  snippetCompletion('TreeSet<${T}> ${ts} = new TreeSet<>();\n${}', {
    label: 'tset',
    detail: 'TreeSet (sorted)',
    type: 'keyword',
  }),
  snippetCompletion('int MOD = 1_000_000_007;\n${}', {
    label: 'mod',
    detail: 'modulo constant 1e9+7',
    type: 'keyword',
  }),
];

const CPP_SNIPPETS = [
  snippetCompletion('for (int ${i} = 0; ${i} < ${n}; ${i}++) {\n\t${}\n}', {
    label: 'for',
    detail: 'for loop',
    type: 'keyword',
  }),
  snippetCompletion('for (int ${i} = ${n} - 1; ${i} >= 0; ${i}--) {\n\t${}\n}', {
    label: 'forr',
    detail: 'reverse for loop',
    type: 'keyword',
  }),
  snippetCompletion('for (auto& ${item} : ${arr}) {\n\t${}\n}', {
    label: 'fore',
    detail: 'range-based for loop',
    type: 'keyword',
  }),
  snippetCompletion('while (${condition}) {\n\t${}\n}', {
    label: 'while',
    detail: 'while loop',
    type: 'keyword',
  }),
  snippetCompletion('if (${condition}) {\n\t${}\n}', {
    label: 'if',
    detail: 'if statement',
    type: 'keyword',
  }),
  snippetCompletion('if (${condition}) {\n\t${}\n} else {\n\t${}\n}', {
    label: 'ife',
    detail: 'if-else',
    type: 'keyword',
  }),
  snippetCompletion('unordered_map<${K}, ${V}> ${mp};\n${}', {
    label: 'newmap',
    detail: 'unordered_map',
    type: 'keyword',
  }),
  snippetCompletion('unordered_set<${T}> ${st};\n${}', {
    label: 'newset',
    detail: 'unordered_set',
    type: 'keyword',
  }),
  snippetCompletion('vector<${T}> ${v};\n${}', {
    label: 'vec',
    detail: 'vector declaration',
    type: 'keyword',
  }),
  snippetCompletion('int ${n} = ${arr}.size();\n${}', {
    label: 'len',
    detail: 'vector size',
    type: 'keyword',
  }),
  snippetCompletion('sort(${arr}.begin(), ${arr}.end());\n${}', {
    label: 'sort',
    detail: 'sort ascending',
    type: 'keyword',
  }),
  snippetCompletion('priority_queue<${T}, vector<${T}>, greater<${T}>> ${pq};\n${}', {
    label: 'pq',
    detail: 'min-heap priority_queue',
    type: 'keyword',
  }),
  snippetCompletion('priority_queue<${T}> ${pq};\n${}', {
    label: 'pqmax',
    detail: 'max-heap priority_queue',
    type: 'keyword',
  }),
  snippetCompletion('stack<${T}> ${stk};\n${}', {
    label: 'stk',
    detail: 'stack declaration',
    type: 'keyword',
  }),
  snippetCompletion('queue<${T}> ${q};\n${}', {
    label: 'queue',
    detail: 'queue declaration',
    type: 'keyword',
  }),
  snippetCompletion('deque<${T}> ${dq};\n${}', {
    label: 'dq',
    detail: 'deque declaration',
    type: 'keyword',
  }),
  snippetCompletion('map<${K}, ${V}> ${tm};\n${}', {
    label: 'tmap',
    detail: 'sorted map (tree map)',
    type: 'keyword',
  }),
  snippetCompletion('const int MOD = 1e9 + 7;\n${}', {
    label: 'mod',
    detail: 'modulo constant 1e9+7',
    type: 'keyword',
  }),
  snippetCompletion('const long long INF = 1e18;\n${}', {
    label: 'inf',
    detail: 'large infinity constant',
    type: 'keyword',
  }),
];

const KOTLIN_SNIPPETS = [
  snippetCompletion('for (${i} in 0 until ${n}) {\n\t${}\n}', {
    label: 'for',
    detail: 'for loop (0 until n)',
    type: 'keyword',
  }),
  snippetCompletion('for (${i} in ${n} - 1 downTo 0) {\n\t${}\n}', {
    label: 'forr',
    detail: 'reverse for loop (downTo)',
    type: 'keyword',
  }),
  snippetCompletion('for ((${i}, ${v}) in ${arr}.withIndex()) {\n\t${}\n}', {
    label: 'fore',
    detail: 'for withIndex (enumerate)',
    type: 'keyword',
  }),
  snippetCompletion('while (${condition}) {\n\t${}\n}', {
    label: 'while',
    detail: 'while loop',
    type: 'keyword',
  }),
  snippetCompletion('if (${condition}) {\n\t${}\n}', {
    label: 'if',
    detail: 'if statement',
    type: 'keyword',
  }),
  snippetCompletion('if (${condition}) {\n\t${}\n} else {\n\t${}\n}', {
    label: 'ife',
    detail: 'if-else',
    type: 'keyword',
  }),
  snippetCompletion('val ${mp} = mutableMapOf<${K}, ${V}>()\n${}', {
    label: 'newmap',
    detail: 'mutableMapOf<K,V>()',
    type: 'keyword',
  }),
  snippetCompletion('val ${st} = mutableSetOf<${T}>()\n${}', {
    label: 'newset',
    detail: 'mutableSetOf<T>()',
    type: 'keyword',
  }),
  snippetCompletion('val ${list} = mutableListOf<${T}>()\n${}', {
    label: 'list',
    detail: 'mutableListOf<T>()',
    type: 'keyword',
  }),
  snippetCompletion('val ${n} = ${arr}.size\n${}', {
    label: 'len',
    detail: 'arr.size',
    type: 'keyword',
  }),
  snippetCompletion('${arr}.sort()\n${}', {
    label: 'sort',
    detail: 'sort ascending',
    type: 'keyword',
  }),
  snippetCompletion('val ${pq} = PriorityQueue<${T}>()\n${}', {
    label: 'pq',
    detail: 'PriorityQueue min-heap',
    type: 'keyword',
  }),
  snippetCompletion('val ${pq} = PriorityQueue<${T}>(compareByDescending { it })\n${}', {
    label: 'pqmax',
    detail: 'PriorityQueue max-heap',
    type: 'keyword',
  }),
  snippetCompletion('val ${dq} = ArrayDeque<${T}>()\n${}', {
    label: 'dq',
    detail: 'ArrayDeque (deque / stack / queue)',
    type: 'keyword',
  }),
  snippetCompletion('val ${sm} = sortedMapOf<${K}, ${V}>()\n${}', {
    label: 'tmap',
    detail: 'sortedMapOf<K,V>() (TreeMap equivalent)',
    type: 'keyword',
  }),
  snippetCompletion('val MOD = 1_000_000_007L\n${}', {
    label: 'mod',
    detail: 'modulo constant 1e9+7',
    type: 'keyword',
  }),
  snippetCompletion('val INF = Long.MAX_VALUE\n${}', {
    label: 'inf',
    detail: 'large infinity constant',
    type: 'keyword',
  }),
];

const CSHARP_SNIPPETS = [
  snippetCompletion('for (int ${i} = 0; ${i} < ${n}; ${i}++) {\n\t${}\n}', {
    label: 'for',
    detail: 'for loop',
    type: 'keyword',
  }),
  snippetCompletion('for (int ${i} = ${n} - 1; ${i} >= 0; ${i}--) {\n\t${}\n}', {
    label: 'forr',
    detail: 'reverse for loop',
    type: 'keyword',
  }),
  snippetCompletion('foreach (var ${item} in ${arr}) {\n\t${}\n}', {
    label: 'fore',
    detail: 'foreach loop',
    type: 'keyword',
  }),
  snippetCompletion('while (${condition}) {\n\t${}\n}', {
    label: 'while',
    detail: 'while loop',
    type: 'keyword',
  }),
  snippetCompletion('if (${condition}) {\n\t${}\n}', {
    label: 'if',
    detail: 'if statement',
    type: 'keyword',
  }),
  snippetCompletion('if (${condition}) {\n\t${}\n} else {\n\t${}\n}', {
    label: 'ife',
    detail: 'if-else',
    type: 'keyword',
  }),
  snippetCompletion('var ${mp} = new Dictionary<${K}, ${V}>();\n${}', {
    label: 'newmap',
    detail: 'Dictionary<K,V>',
    type: 'keyword',
  }),
  snippetCompletion('var ${st} = new HashSet<${T}>();\n${}', {
    label: 'newset',
    detail: 'HashSet<T>',
    type: 'keyword',
  }),
  snippetCompletion('var ${list} = new List<${T}>();\n${}', {
    label: 'list',
    detail: 'List<T>',
    type: 'keyword',
  }),
  snippetCompletion('int ${n} = ${arr}.Length;\n${}', {
    label: 'len',
    detail: 'arr.Length',
    type: 'keyword',
  }),
  snippetCompletion('Array.Sort(${arr});\n${}', {
    label: 'sort',
    detail: 'Array.Sort(arr)',
    type: 'keyword',
  }),
  snippetCompletion('var ${pq} = new PriorityQueue<${T}, ${int}>();\n${}', {
    label: 'pq',
    detail: 'PriorityQueue<T,int> min-heap (.NET 6+)',
    type: 'keyword',
  }),
  snippetCompletion('var ${stk} = new Stack<${T}>();\n${}', {
    label: 'stk',
    detail: 'Stack<T>',
    type: 'keyword',
  }),
  snippetCompletion('var ${q} = new Queue<${T}>();\n${}', {
    label: 'queue',
    detail: 'Queue<T>',
    type: 'keyword',
  }),
  snippetCompletion('var ${sm} = new SortedDictionary<${K}, ${V}>();\n${}', {
    label: 'tmap',
    detail: 'SortedDictionary<K,V> (TreeMap equivalent)',
    type: 'keyword',
  }),
  snippetCompletion('var ${ss} = new SortedSet<${T}>();\n${}', {
    label: 'tset',
    detail: 'SortedSet<T> (TreeSet equivalent)',
    type: 'keyword',
  }),
  snippetCompletion('const int MOD = 1_000_000_007;\n${}', {
    label: 'mod',
    detail: 'modulo constant 1e9+7',
    type: 'keyword',
  }),
  snippetCompletion('const long INF = long.MaxValue;\n${}', {
    label: 'inf',
    detail: 'large infinity constant',
    type: 'keyword',
  }),
];

const SWIFT_SNIPPETS = [
  snippetCompletion('for ${i} in 0..<${n} {\n\t${}\n}', {
    label: 'for',
    detail: 'for range loop (0..<n)',
    type: 'keyword',
  }),
  snippetCompletion('for ${i} in stride(from: ${n} - 1, through: 0, by: -1) {\n\t${}\n}', {
    label: 'forr',
    detail: 'reverse for loop (stride)',
    type: 'keyword',
  }),
  snippetCompletion('for (${i}, ${v}) in ${arr}.enumerated() {\n\t${}\n}', {
    label: 'fore',
    detail: 'for enumerated (index + value)',
    type: 'keyword',
  }),
  snippetCompletion('while ${condition} {\n\t${}\n}', {
    label: 'while',
    detail: 'while loop',
    type: 'keyword',
  }),
  snippetCompletion('if ${condition} {\n\t${}\n}', {
    label: 'if',
    detail: 'if statement',
    type: 'keyword',
  }),
  snippetCompletion('if ${condition} {\n\t${}\n} else {\n\t${}\n}', {
    label: 'ife',
    detail: 'if-else',
    type: 'keyword',
  }),
  snippetCompletion('var ${mp}: [${K}: ${V}] = [:]\n${}', {
    label: 'newmap',
    detail: '[K:V] dictionary literal',
    type: 'keyword',
  }),
  snippetCompletion('var ${st}: Set<${T}> = []\n${}', {
    label: 'newset',
    detail: 'Set<T>',
    type: 'keyword',
  }),
  snippetCompletion('var ${arr}: [${T}] = []\n${}', {
    label: 'list',
    detail: '[T] array',
    type: 'keyword',
  }),
  snippetCompletion('let ${n} = ${arr}.count\n${}', {
    label: 'len',
    detail: 'arr.count',
    type: 'keyword',
  }),
  snippetCompletion('${arr}.sort()\n${}', {
    label: 'sort',
    detail: 'sort ascending (mutating)',
    type: 'keyword',
  }),
  snippetCompletion('let ${sorted} = ${arr}.sorted()\n${}', {
    label: 'sortkey',
    detail: 'sorted() → new array',
    type: 'keyword',
  }),
  snippetCompletion('let MOD = 1_000_000_007\n${}', {
    label: 'mod',
    detail: 'modulo constant 1e9+7',
    type: 'keyword',
  }),
  snippetCompletion('let INF = Int.max\n${}', {
    label: 'inf',
    detail: 'Int.max (large sentinel)',
    type: 'keyword',
  }),
];

const GO_SNIPPETS = [
  snippetCompletion('for ${i} := 0; ${i} < ${n}; ${i}++ {\n\t${}\n}', {
    label: 'for',
    detail: 'for loop',
    type: 'keyword',
  }),
  snippetCompletion('for ${i} := ${n} - 1; ${i} >= 0; ${i}-- {\n\t${}\n}', {
    label: 'forr',
    detail: 'reverse for loop',
    type: 'keyword',
  }),
  snippetCompletion('for ${i}, ${v} := range ${arr} {\n\t${}\n}', {
    label: 'fore',
    detail: 'range for loop',
    type: 'keyword',
  }),
  snippetCompletion('for ${condition} {\n\t${}\n}', {
    label: 'while',
    detail: 'while-style loop',
    type: 'keyword',
  }),
  snippetCompletion('if ${condition} {\n\t${}\n}', {
    label: 'if',
    detail: 'if statement',
    type: 'keyword',
  }),
  snippetCompletion('if ${condition} {\n\t${}\n} else {\n\t${}\n}', {
    label: 'ife',
    detail: 'if-else',
    type: 'keyword',
  }),
  snippetCompletion('${mp} := make(map[${K}]${V})\n${}', {
    label: 'newmap',
    detail: 'make(map[K]V)',
    type: 'keyword',
  }),
  snippetCompletion('${n} := len(${arr})\n${}', {
    label: 'len',
    detail: 'len()',
    type: 'keyword',
  }),
  snippetCompletion('sort.Ints(${arr})\n${}', {
    label: 'sort',
    detail: 'sort.Ints()',
    type: 'keyword',
  }),
  snippetCompletion('${h} := &MinHeap{}\nheap.Init(${h})\n${}', {
    label: 'heap',
    detail: 'heap setup',
    type: 'keyword',
  }),
  snippetCompletion('${st} := make(map[${K}]struct{})\n${}', {
    label: 'newset',
    detail: 'set via map[K]struct{}',
    type: 'keyword',
  }),
  snippetCompletion('const MOD = 1_000_000_007\n${}', {
    label: 'mod',
    detail: 'modulo constant',
    type: 'keyword',
  }),
  snippetCompletion('const INF = math.MaxInt\n${}', {
    label: 'inf',
    detail: 'math.MaxInt',
    type: 'keyword',
  }),
];

const RUST_SNIPPETS = [
  snippetCompletion('for ${i} in 0..${n} {\n\t${}\n}', {
    label: 'for',
    detail: 'for range loop',
    type: 'keyword',
  }),
  snippetCompletion('for ${i} in (0..${n}).rev() {\n\t${}\n}', {
    label: 'forr',
    detail: 'reverse for loop',
    type: 'keyword',
  }),
  snippetCompletion('for ${item} in ${iter}.iter() {\n\t${}\n}', {
    label: 'fore',
    detail: 'for iter loop',
    type: 'keyword',
  }),
  snippetCompletion('while ${condition} {\n\t${}\n}', {
    label: 'while',
    detail: 'while loop',
    type: 'keyword',
  }),
  snippetCompletion('if ${condition} {\n\t${}\n}', {
    label: 'if',
    detail: 'if statement',
    type: 'keyword',
  }),
  snippetCompletion('if ${condition} {\n\t${}\n} else {\n\t${}\n}', {
    label: 'ife',
    detail: 'if-else',
    type: 'keyword',
  }),
  snippetCompletion('let mut ${map}: HashMap<${K}, ${V}> = HashMap::new();\n${}', {
    label: 'newmap',
    detail: 'HashMap::new()',
    type: 'keyword',
  }),
  snippetCompletion('let mut ${set}: HashSet<${T}> = HashSet::new();\n${}', {
    label: 'newset',
    detail: 'HashSet::new()',
    type: 'keyword',
  }),
  snippetCompletion('let ${n} = ${arr}.len();\n${}', {
    label: 'len',
    detail: 'vec.len()',
    type: 'keyword',
  }),
  snippetCompletion('${arr}.sort();\n${}', {
    label: 'sort',
    detail: 'sort ascending',
    type: 'keyword',
  }),
  snippetCompletion('let mut ${v}: Vec<${T}> = Vec::new();\n${}', {
    label: 'vec',
    detail: 'Vec::new()',
    type: 'keyword',
  }),
  snippetCompletion('let mut ${dq}: VecDeque<${T}> = VecDeque::new();\n${}', {
    label: 'deque',
    detail: 'VecDeque::new()',
    type: 'keyword',
  }),
  snippetCompletion('let mut ${pq}: BinaryHeap<${T}> = BinaryHeap::new();\n${}', {
    label: 'pq',
    detail: 'BinaryHeap (max-heap)',
    type: 'keyword',
  }),
  snippetCompletion('const MOD: i64 = 1_000_000_007;\n${}', {
    label: 'mod',
    detail: 'modulo constant',
    type: 'keyword',
  }),
  snippetCompletion('let ${inf}: i64 = i64::MAX;\n${}', {
    label: 'inf',
    detail: 'i64::MAX',
    type: 'keyword',
  }),
];

/**
 * Returns an EditorState.languageData extension that adds snippet completions
 * for the given language ALONGSIDE the native language completions (i.e. does
 * not replace keyword / variable completions from the language plugin).
 */
function snippetLanguageData(language: SupportedLanguage) {
  let snippets;
  switch (language) {
    case 'python': snippets = PYTHON_SNIPPETS; break;
    case 'typescript': snippets = TS_SNIPPETS; break;
    case 'java': snippets = JAVA_SNIPPETS; break;
    case 'kotlin': snippets = KOTLIN_SNIPPETS; break;
    case 'cpp': snippets = CPP_SNIPPETS; break;
    case 'csharp': snippets = CSHARP_SNIPPETS; break;
    case 'swift': snippets = SWIFT_SNIPPETS; break;
    case 'go': snippets = GO_SNIPPETS; break;
    case 'rust': snippets = RUST_SNIPPETS; break;
    default: snippets = JS_SNIPPETS;
  }
  const source: CompletionSource = (context: CompletionContext) => {
    const word = context.matchBefore(/\w+/);
    if (!word || (word.from === word.to && !context.explicit)) return null;
    const options = snippets.filter((c) => c.label.startsWith(word.text));
    if (options.length === 0) return null;
    return { from: word.from, options };
  };
  return EditorState.languageData.of(() => [{ autocomplete: source }]);
}

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

const TERMINAL_MIN_PX = 80;
const TERMINAL_MAX_PX = 480;
const TERMINAL_DEFAULT_PX = 200;
const TERMINAL_RESIZE_STEP_PX = 20;

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
  wordWrap: wordWrapProp,
  onWordWrapChange,
  autocomplete: autocompleteProp = false,
  draftSavedAt,
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
  // Word-wrap goes through its own Compartment for live toggling.
  const wrapCompartmentRef = useRef(new Compartment());
  const snippetCompartmentRef = useRef(new Compartment());
  const autocompleteCompartmentRef = useRef(new Compartment());
  // Indent unit in a Compartment so changes in settings take effect live.
  const indentCompartmentRef = useRef(new Compartment());

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
      // Reflow the bank's 4-space starter to the active indent size so loaded
      // code matches what Enter/Tab insert from here on.
      doc: normalizeIndentation(starterCode, indentSize),
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
        highlightSpecialChars(),
        foldGutter(),
        drawSelection(),
        dropCursor(),
        scrollPastEnd(),
        // Allow multi-cursor (Alt-click, Ctrl-D add-next via defaultKeymap).
        // drawSelection above is what makes the additional carets visible.
        EditorState.allowMultipleSelections.of(true),
        // Rectangular selection with Alt+drag; shows crosshair cursor when active.
        rectangularSelection(),
        crosshairCursor(),
        // Editing extensions
        history(),
        indentOnInput(),
        bracketMatching(),
        closeBrackets(),
        // Autocomplete in a Compartment so it can be toggled live.
        autocompleteCompartmentRef.current.of(autocompleteProp ? autocompletion() : []),
        search(),
        // Indent unit — through Compartment for live reconfiguration.
        indentCompartmentRef.current.of(indentUnit.of(indentSpaces(indentSize))),
        // Snippet completions — additive, via languageData so native keyword
        // and variable completions from the language plugin are still active.
        snippetCompartmentRef.current.of(snippetLanguageData(language)),
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
                    insert: normalizeIndentation(
                      starterCodeRef.current,
                      indentSizeRef.current,
                    ),
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
          // Suppress Ctrl/Cmd+S — code is auto-saved; prevent the
          // browser's "Save Page" dialog from firing.
          {
            key: 'Mod-s',
            preventDefault: true,
            run() {
              return true;
            },
          },
          // Delete entire line with Cmd/Ctrl+Shift+K (VS Code convention)
          {
            key: 'Mod-Shift-k',
            preventDefault: true,
            run(view) {
              const { state: s } = view;
              const line = s.doc.lineAt(s.selection.main.head);
              const from = line.from;
              // Include the trailing newline if not the last line.
              const to = line.to < s.doc.length ? line.to + 1 : line.from > 0 ? line.from - 1 : line.to;
              const adjustedFrom = line.to < s.doc.length ? from : (line.from > 0 ? from - 1 : from);
              view.dispatch({ changes: { from: adjustedFrom, to } });
              return true;
            },
          },
          // Tab inserts spaces at the cursor position (not structural
          // re-indent). Must come before completionKeymap / defaultKeymap
          // so it wins the Tab binding.
          {
            key: 'Tab',
            run(view) {
              const spaces = ' '.repeat(indentSizeRef.current);
              view.dispatch(view.state.replaceSelection(spaces));
              return true;
            },
          },
          {
            key: 'Shift-Tab',
            run(view) {
              // Remove up to indentSize spaces before the cursor on the current line.
              const { state } = view;
              const head = state.selection.main.head;
              const line = state.doc.lineAt(head);
              const colInLine = head - line.from;
              const textBefore = line.text.slice(0, colInLine);
              const trailingSpaces = textBefore.length - textBefore.trimEnd().length;
              const toRemove = Math.min(trailingSpaces, indentSizeRef.current);
              if (toRemove > 0) {
                view.dispatch({ changes: { from: head - toRemove, to: head } });
              }
              return true;
            },
          },
          // Autocomplete — accepts a completion with Enter while the
          // popup is open. Tab is handled above.
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
          // Mod-J: toggle terminal panel (mirrors VS Code panel toggle).
          {
            key: 'Mod-j',
            preventDefault: true,
            run() {
              toggleTerminalRef.current();
              return true;
            },
          },
        ]),
        themeCompartmentRef.current.of(
          resolvedTheme.includes('light') ? leetlockEditorThemeLight : leetlockEditorThemeDark,
        ),
        // Font size goes through its own Compartment so it can be reconfigured
        // live when the user adjusts it in Settings without rebuilding the editor.
        fontSizeCompartmentRef.current.of(fontSizeTheme(fontSize)),
        updateListener,
        // Word-wrap in its own Compartment so the toolbar button can toggle it live.
        wrapCompartmentRef.current.of(EditorView.lineWrapping),
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
      changes: {
        from: 0,
        to: view.state.doc.length,
        insert: normalizeIndentation(starterCode, indentSizeRef.current),
      },
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

  // Swap the language extension and snippet completions when `language` changes.
  useEffect(() => {
    const view = viewRef.current;
    if (!view) return;
    view.dispatch({
      effects: [
        languageCompartmentRef.current.reconfigure(languageExtension(language)),
        snippetCompartmentRef.current.reconfigure(snippetLanguageData(language)),
      ],
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

  // Reconfigure indent unit when indent size changes.
  useEffect(() => {
    const view = viewRef.current;
    if (!view) return;
    view.dispatch({
      effects: indentCompartmentRef.current.reconfigure(indentUnit.of(indentSpaces(indentSize))),
    });
  }, [indentSize]);

  // Swap the colour theme when resolvedTheme changes.
  useEffect(() => {
    const view = viewRef.current;
    if (!view) return;
    view.dispatch({
      effects: themeCompartmentRef.current.reconfigure(
        resolvedTheme.includes('light') ? leetlockEditorThemeLight : leetlockEditorThemeDark,
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
  const [codeCopied, setCodeCopied] = useState(false);
  const handleCopyCode = useCallback(() => {
    const code = viewRef.current?.state.doc.toString() ?? '';
    if (!code) return;
    void navigator.clipboard.writeText(code).then(() => {
      setCodeCopied(true);
      setTimeout(() => setCodeCopied(false), 1500);
    });
  }, []);

  // Language-switch confirmation: show an inline banner when the user has
  // modified the editor content and tries to switch languages.
  const [pendingLang, setPendingLang] = useState<SupportedLanguage | null>(null);
  useEffect(() => { setPendingLang(null); }, [language, starterCode]);

  const handleLangClick = useCallback(
    (lang: SupportedLanguage) => {
      if (lang === language) return;
      const currentCode = viewRef.current?.state.doc.toString() ?? '';
      if (currentCode !== starterCode) {
        setPendingLang(lang);
      } else {
        onLanguageChange(lang);
      }
    },
    [language, starterCode, onLanguageChange],
  );

  // Global `?` shortcut — opens the shortcuts modal unless the user is typing
  // in a text input or the code editor itself.
  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key !== '?' || e.ctrlKey || e.metaKey || e.altKey) return;
      const tag = (document.activeElement as HTMLElement | null)?.tagName ?? '';
      if (tag === 'INPUT' || tag === 'TEXTAREA' || (document.activeElement as HTMLElement | null)?.isContentEditable) return;
      // Don't fire when the CodeMirror editor has focus (users may want to type '?')
      const editorEl = editorContainerRef.current;
      if (editorEl && editorEl.contains(document.activeElement)) return;
      e.preventDefault();
      setShowShortcuts((v) => !v);
    }
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, []);

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

  // "Draft saved" flash — shows for 2s after each successful save.
  const [showSaved, setShowSaved] = useState(false);
  const savedTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  useEffect(() => {
    if (!draftSavedAt) return;
    setShowSaved(true);
    if (savedTimerRef.current) clearTimeout(savedTimerRef.current);
    savedTimerRef.current = setTimeout(() => setShowSaved(false), 2000);
  }, [draftSavedAt]);

  // Line / column state — updated on every selection change.
  const [cursorPos, setCursorPos] = useState<{ line: number; col: number }>({ line: 1, col: 1 });
  const setCursorPosRef = useRef(setCursorPos);

  const handleLangSelect = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      const lang = e.target.value as SupportedLanguage;
      handleLangClick(lang);
    },
    [handleLangClick],
  );

  // Terminal collapse state — persisted in-session only.
  const [terminalCollapsed, setTerminalCollapsed] = useState(false);
  const toggleTerminal = useCallback(() => setTerminalCollapsed((v) => !v), []);

  // Ref-forwarded toggleTerminal so the CM keymap (built once) can call the latest version.
  const toggleTerminalRef = useRef(toggleTerminal);
  useEffect(() => { toggleTerminalRef.current = toggleTerminal; }, [toggleTerminal]);

  // Terminal resize — drag handle above the terminal panel.
  const [terminalHeight, setTerminalHeight] = useState(TERMINAL_DEFAULT_PX);
  const isResizingTerminalRef = useRef(false);

  const handleTerminalResizePointerDown = useCallback((e: React.PointerEvent<HTMLDivElement>) => {
    e.preventDefault();
    isResizingTerminalRef.current = true;
    (e.target as HTMLDivElement).setPointerCapture(e.pointerId);
  }, []);

  const handleTerminalResizePointerMove = useCallback((e: React.PointerEvent<HTMLDivElement>) => {
    if (!isResizingTerminalRef.current) return;
    // The drag handle is positioned right above the terminal; moving up = taller terminal.
    // We use clientY to determine the new terminal height.
    const container = (e.currentTarget as HTMLDivElement).closest('section');
    if (!container) return;
    const rect = container.getBoundingClientRect();
    // Height = distance from pointer to bottom of container, minus the action bar height (~40px).
    const actionBarApprox = 40;
    const rawH = rect.bottom - e.clientY - actionBarApprox;
    const clamped = Math.min(TERMINAL_MAX_PX, Math.max(TERMINAL_MIN_PX, rawH));
    setTerminalHeight(clamped);
  }, []);

  const handleTerminalResizePointerUp = useCallback((e: React.PointerEvent<HTMLDivElement>) => {
    if (!isResizingTerminalRef.current) return;
    isResizingTerminalRef.current = false;
    const container = (e.currentTarget as HTMLDivElement).closest('section');
    if (!container) return;
    const rect = container.getBoundingClientRect();
    const actionBarApprox = 40;
    const rawH = rect.bottom - e.clientY - actionBarApprox;
    const clamped = Math.min(TERMINAL_MAX_PX, Math.max(TERMINAL_MIN_PX, rawH));
    setTerminalHeight(clamped);
  }, []);

  // Vim mode indicator — tracks NORMAL / INSERT / VISUAL / REPLACE so users
  // can see the current modal state without watching the cursor shape.
  const [vimMode, setVimMode] = useState<string | null>(null);
  useEffect(() => {
    if (editorKeymap !== 'vim') {
      setVimMode(null);
      return;
    }
    const view = viewRef.current;
    if (!view) return;
    const cm = getCM(view);
    if (!cm) return;
    setVimMode('normal');
    const handler = (info: { mode: string; subMode?: string }) => {
      const label = info.subMode ? `${info.mode} (${info.subMode})` : info.mode;
      setVimMode(label);
    };
    cm.on('vim-mode-change', handler);
    return () => {
      cm.off('vim-mode-change', handler);
    };
  }, [editorKeymap]);

  // Word-wrap toggle — seed from prop if provided, else default on.
  const [wordWrap, setWordWrap] = useState(wordWrapProp ?? true);
  const onWordWrapChangeRef = useRef(onWordWrapChange);
  useEffect(() => { onWordWrapChangeRef.current = onWordWrapChange; }, [onWordWrapChange]);

  // Sync compartment when the prop changes externally (e.g. first load from storage).
  useEffect(() => {
    if (wordWrapProp === undefined) return;
    setWordWrap(wordWrapProp);
    const view = viewRef.current;
    if (view) {
      view.dispatch({
        effects: wrapCompartmentRef.current.reconfigure(wordWrapProp ? EditorView.lineWrapping : []),
      });
    }
  }, [wordWrapProp]);

  const handleToggleWrap = useCallback(() => {
    setWordWrap((prev) => {
      const next = !prev;
      const view = viewRef.current;
      if (view) {
        view.dispatch({
          effects: wrapCompartmentRef.current.reconfigure(next ? EditorView.lineWrapping : []),
        });
      }
      onWordWrapChangeRef.current?.(next);
      return next;
    });
  }, []);

  // Reconfigure autocomplete when the setting changes.
  useEffect(() => {
    const view = viewRef.current;
    if (view) {
      view.dispatch({
        effects: autocompleteCompartmentRef.current.reconfigure(
          autocompleteProp ? autocompletion() : [],
        ),
      });
    }
  }, [autocompleteProp]);

  const showLanguageSelector = availableLanguages.length > 1;

  return (
    <section className="flex h-full flex-col overflow-hidden" aria-label="Code editor">
      {/* Language label / selector + fullscreen toggle */}
      <div className="flex shrink-0 items-center justify-between border-b border-border px-3 py-1.5">
        {showLanguageSelector ? (
          <select
            value={language}
            onChange={handleLangSelect}
            aria-label="Select programming language"
            className="rounded-sm border border-border bg-surface px-2 py-0.5 font-mono text-[11px] text-text focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-accent"
          >
            {availableLanguages.map((lang) => (
              <option key={lang} value={lang}>
                {LANGUAGE_LABEL[lang]}
              </option>
            ))}
          </select>
        ) : (
          <span className="font-mono text-[10px] uppercase tracking-widest text-faint">
            {LANGUAGE_LABEL[language]}
          </span>
        )}

        {/* Right controls: copy code + wrap toggle + shortcuts button + fullscreen toggle */}
        <div className="flex items-center gap-1">
          <button
            type="button"
            onClick={handleCopyCode}
            aria-label="Copy code to clipboard"
            title="Copy code"
            className="rounded-sm border border-transparent px-1.5 py-0.5 font-mono text-[10px] text-faint transition-colors hover:border-border hover:text-muted focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-accent"
          >
            {codeCopied ? '✓' : 'copy'}
          </button>
          <button
            type="button"
            onClick={handleToggleWrap}
            aria-label={wordWrap ? 'Disable word wrap' : 'Enable word wrap'}
            aria-pressed={wordWrap}
            title={wordWrap ? 'Word wrap: on' : 'Word wrap: off'}
            className={[
              'rounded-sm border px-1.5 py-0.5 font-mono text-[10px] transition-colors focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-accent',
              wordWrap
                ? 'border-border-strong text-muted bg-surface-2'
                : 'border-transparent text-faint hover:border-border hover:text-muted',
            ].join(' ')}
          >
            wrap
          </button>
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

      {/* Language-switch confirmation — shown when user tries to switch while code is modified */}
      {pendingLang !== null && (
        <div
          role="alert"
          onKeyDown={(e) => { if (e.key === 'Escape') { e.stopPropagation(); setPendingLang(null); } }}
          className="shrink-0 flex items-center justify-between gap-3 border-b border-border bg-surface-2 px-3 py-1.5"
        >
          <span className="font-mono text-[11px] text-muted">
            Switch to {LANGUAGE_LABEL[pendingLang]}? Your current code will be replaced.
          </span>
          <div className="flex items-center gap-1.5">
            <button
              type="button"
              onClick={() => { onLanguageChange(pendingLang); setPendingLang(null); }}
              className="rounded-sm border border-border-strong bg-accent px-2.5 py-0.5 font-mono text-[10px] font-semibold text-on-accent transition-opacity hover:opacity-80 focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-accent"
            >
              switch
            </button>
            <button
              type="button"
              onClick={() => setPendingLang(null)}
              className="rounded-sm border border-border px-2.5 py-0.5 font-mono text-[10px] text-faint transition-colors hover:border-border-strong hover:text-muted focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-accent"
            >
              cancel
            </button>
          </div>
        </div>
      )}

      {/* Syntax-practice notice for JS-compiled languages */}
      {JS_SYNTAX_ONLY_LANGUAGES.has(language) && pendingLang === null && (
        <div
          role="note"
          className="shrink-0 flex items-center gap-2 border-b border-border bg-surface px-3 py-1"
        >
          <span className="font-mono text-[10px] text-faint">
            {LANGUAGE_LABEL[language]} syntax practice — tests run as JavaScript
          </span>
        </div>
      )}

      {/* Editor — role="group" is required for aria-label on a non-landmark div. */}
      <div
        role="group"
        aria-label={`Code editor — ${LANGUAGE_LABEL[language]}`}
        className="min-h-0 flex-1 overflow-hidden"
      >
        <div ref={editorContainerRef} className="h-full w-full" />
      </div>

      {/* Terminal resize handle — hidden when terminal is collapsed */}
      {!terminalCollapsed && (
        <div
          role="separator"
          aria-orientation="horizontal"
          aria-label="Resize terminal panel"
          aria-valuenow={terminalHeight}
          aria-valuemin={TERMINAL_MIN_PX}
          aria-valuemax={TERMINAL_MAX_PX}
          aria-valuetext={`Terminal panel: ${terminalHeight}px`}
          tabIndex={0}
          className="group relative h-1 shrink-0 cursor-row-resize bg-border transition-colors hover:bg-border-strong focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent"
          onPointerDown={handleTerminalResizePointerDown}
          onPointerMove={handleTerminalResizePointerMove}
          onPointerUp={handleTerminalResizePointerUp}
          onKeyDown={(e) => {
            if (e.key === 'ArrowUp') {
              e.preventDefault();
              setTerminalHeight((h) => Math.min(TERMINAL_MAX_PX, h + TERMINAL_RESIZE_STEP_PX));
            } else if (e.key === 'ArrowDown') {
              e.preventDefault();
              setTerminalHeight((h) => Math.max(TERMINAL_MIN_PX, h - TERMINAL_RESIZE_STEP_PX));
            }
          }}
        >
          <div className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-border-strong opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden="true" />
        </div>
      )}
      <div className="shrink-0 overflow-hidden" role="region" aria-label="Terminal output">
        <TerminalPanel
          result={verdict}
          mode={verdictMode}
          collapsed={terminalCollapsed}
          onToggleCollapsed={toggleTerminal}
          bodyHeight={terminalCollapsed ? undefined : terminalHeight}
        />
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
                className={[
                  'rounded border px-1.5 py-0.5 text-[10px]',
                  attemptsRemaining <= 1
                    ? 'border-border-strong bg-surface-2 font-semibold text-text'
                    : 'border-border text-faint',
                ].join(' ')}
              >
                {attemptsRemaining} left
              </span>
            )}
            {/* Vim mode indicator — shows NORMAL/INSERT/VISUAL when vim keymap is active */}
            {vimMode !== null && (
              <span
                aria-live="polite"
                aria-atomic="true"
                aria-label={`Vim mode: ${vimMode}`}
                className="uppercase tracking-widest font-semibold"
              >
                {vimMode}
              </span>
            )}
            {/* Line / column indicator — mirrors every major IDE */}
            <span
              aria-label={`Line ${cursorPos.line}, column ${cursorPos.col}`}
              className="tabular-nums"
            >
              Ln {cursorPos.line}, Col {cursorPos.col}
            </span>
            {/* Draft saved flash */}
            <span
              aria-live="polite"
              aria-atomic="true"
              className={[
                'font-mono text-[10px] transition-opacity duration-500',
                showSaved ? 'opacity-100 text-muted' : 'opacity-0 pointer-events-none',
              ].join(' ')}
            >
              ✓ saved
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
                  className="h-3 w-3 motion-safe:animate-spin"
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
              disabled={isRunning || (attemptsRemaining !== null && attemptsRemaining <= 0)}
              aria-keyshortcuts="Control+Shift+Enter Meta+Shift+Enter"
              aria-label="Submit solution against all test cases"
              className="inline-flex items-center gap-1.5 rounded-sm bg-accent px-4 py-1.5 font-mono text-[11px] font-bold text-on-accent transition-opacity hover:opacity-90 focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-accent disabled:cursor-not-allowed disabled:opacity-40"
            >
              {isRunning && verdictMode === 'submit' && (
                <svg
                  className="h-3 w-3 motion-safe:animate-spin"
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
