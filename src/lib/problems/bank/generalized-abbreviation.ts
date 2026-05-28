import type { Problem } from '../types';

const JS_PREAMBLE = `
function generateAbbreviationsRunner(word) {
  const r = generateAbbreviations(word);
  return [...r].sort();
}
`.trim();

const PY_PREAMBLE = `
def generateAbbreviationsRunner(word):
    r = generateAbbreviations(word)
    return sorted(list(r))
`.trim();

export const problem: Problem = {
  id: 'generalized-abbreviation',
  title: 'Generalized Abbreviation',
  difficulty: 'medium',
  tags: ['strings', 'backtracking'],
  description: `A word's **generalized abbreviation** replaces any combination of non-overlapping, non-adjacent substrings with their respective lengths. For example, \`"word"\` can become \`"w2d"\` (replacing \`"or"\` → \`2\`), \`"4"\` (replacing the whole word), or \`"word"\` (no replacement). Note: adjacent digit groups must be merged — \`"w11d"\` is invalid; it must be \`"w2d"\`.

Given a string \`word\`, return **all possible generalized abbreviations** of \`word\` in **any order**.

> **Note:** The \`generateAbbreviationsRunner\` wrapper sorts results before comparing. Implement \`generateAbbreviations(word)\`.`,
  constraints: [
    '1 <= word.length <= 15',
    'word consists of lowercase English letters only',
  ],
  examples: [
    {
      input: 'word = "word"',
      output: '["word","wor1","wo1d","wo2","w1rd","w1r1","w2d","w3","1ord","1or1","1o1d","1o2","2rd","2r1","3d","4"] (sorted)',
      explanation: 'All 2^4 = 16 possible abbreviations are generated (each character is either kept or counted as part of a run).',
    },
    {
      input: 'word = "a"',
      output: '["1","a"]',
      explanation: 'Either keep the letter or abbreviate it as "1".',
    },
  ],
  hints: [
    'Use backtracking with a running count of skipped characters. At each index you have two choices: (1) skip the character (increment count), or (2) keep it (first flush the count as digits if > 0, then append the character).',
    'After processing all characters, flush any remaining count. Each call generates exactly one abbreviation string when the index reaches word.length.',
    'There are exactly 2^n results (one for each subset of positions that get abbreviated). Skeleton: `function bt(i, cur, cnt) { if (i === n) { results.push(cur + (cnt > 0 ? cnt : "")); return; } bt(i+1, cur, cnt+1); bt(i+1, cur + (cnt>0?cnt:"") + word[i], 0); }`',
  ],
  functionName: 'generateAbbreviationsRunner',
  params: ['word'],
  preamble: { javascript: JS_PREAMBLE, python: PY_PREAMBLE },
  starterCode: {
    javascript: '// generateAbbreviationsRunner wrapper is pre-defined.\n// Implement the function below:\nfunction generateAbbreviations(word) {\n  \n}\n',
    typescript: "function generateAbbreviationsRunner(word: string): string[] {\n  \n}",

    python: '# generateAbbreviationsRunner wrapper is pre-defined.\n# Implement the function below:\ndef generateAbbreviations(word):\n    pass\n',
  },
  visibleTests: [
    {
      args: ['word'],
      expected: ['1o1d','1o2','1or1','1ord','2r1','2rd','3d','4','w1r1','w1rd','w2d','w3','wo1d','wo2','wor1','word'],
    },
    {
      args: ['a'],
      expected: ['1', 'a'],
    },
    {
      args: ['ab'],
      expected: ['1b', '2', 'a1', 'ab'],
    },
  ],
  hiddenTests: [
    {
      args: ['ba'],
      expected: ['1a', '2', 'b1', 'ba'],
    },
    {
      args: ['abc'],
      expected: ['1b1', '1bc', '2c', '3', 'a1c', 'a2', 'ab1', 'abc'],
    },
    {
      args: ['xy'],
      expected: ['1y', '2', 'x1', 'xy'],
    },
    {
      args: ['z'],
      expected: ['1', 'z'],
    },
    {
      args: ['it'],
      expected: ['1t', '2', 'i1', 'it'],
    },
  ],
};
