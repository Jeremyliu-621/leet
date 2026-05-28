import type { Problem } from '../types';

export const problem: Problem = {
  id: 'strange-printer',
  title: 'Strange Printer',
  difficulty: 'hard',
  tags: ['dynamic-programming'],
  description: `There is a strange printer with two special properties:

- It can only print a sequence of the **same character** each time.
- At each turn, the printer can print new characters starting from and ending at any position, covering any existing characters.

Given a string \`s\`, return the **minimum number of turns** the printer needs to print it.`,
  constraints: [
    '1 <= s.length <= 100',
    's consists of lowercase English letters only',
  ],
  examples: [
    {
      input: 's = "aaabbb"',
      output: '2',
      explanation: 'Print "aaa" in the first turn and "bbb" in the second.',
    },
    {
      input: 's = "aba"',
      output: '2',
      explanation: 'Print "aaa" in the first turn, then overwrite the middle with "b".',
    },
  ],
  hints: [
    'Use interval DP: dp[i][j] = minimum turns to print s[i..j].',
    'Base: dp[i][i] = 1. If s[i] == s[j], then dp[i][j] = dp[i][j-1] (we can extend the turn that prints s[i] to also cover s[j] at no extra cost).',
    'Otherwise, dp[i][j] = min over splits k in [i, j-1] of dp[i][k] + dp[k+1][j]. Fill the table for increasing interval lengths.',
  ],
  functionName: 'strangePrinter',
  params: ['s'],
  starterCode: {
    javascript: `function strangePrinter(s) {\n\n}`,
    python: `def strangePrinter(s):\n    pass`,
  },
  visibleTests: [
    { args: ['aaabbb'], expected: 2 },
    { args: ['aba'], expected: 2 },
  ],
  hiddenTests: [
    { args: ['a'], expected: 1 },
    { args: ['ab'], expected: 2 },
    { args: ['abba'], expected: 2 },
    { args: ['aaabbc'], expected: 3 },
    { args: ['abcba'], expected: 3 },
  ],
};
