import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-swaps-to-make-string-balanced',
  title: 'Minimum Number of Swaps to Make the String Balanced',
  difficulty: 'medium',
  tags: ['strings', 'stack', 'math'],
  description: `You are given a **0-indexed** string \`s\` of **even** length \`n\`. The string consists of **exactly** \`n / 2\` opening brackets \`'['\` and \`n / 2\` closing brackets \`']'\`.

A string is called **balanced** if and only if:
- It is the empty string, or
- It can be written as \`AB\`, where both \`A\` and \`B\` are balanced strings, or
- It can be written as \`[C]\`, where \`C\` is a balanced string.

You may swap the brackets at any two indices **any number of times**.

Return the **minimum** number of swaps to make \`s\` balanced.`,
  constraints: [
    '`n == s.length`',
    '`2 <= n <= 10^6`',
    '`n` is even.',
    '`s[i]` is either `\'[\'` or `\']\'`.',
    'The number of opening brackets equals `n / 2`, and the number of closing brackets equals `n / 2`.',
  ],
  examples: [
    {
      input: 's = "]["',
      output: '1',
      explanation: 'Swap s[0] and s[1] to get "[]". One swap.',
    },
    {
      input: 's = "]]][[["',
      output: '2',
      explanation: 'Two swaps needed to balance the string.',
    },
    {
      input: 's = "[]"',
      output: '0',
      explanation: 'Already balanced.',
    },
  ],
  hints: [
    'Scan left to right keeping a counter of unmatched `[` brackets. When you see `]` with no unmatched `[`, you have a mismatch that needs fixing.',
    'Each swap fixes two mismatched positions (one `]...[` pair). So the answer is `Math.ceil(unmatchedCount / 2)`.',
    'Algorithm: maintain `open = 0`. For each `[`: open++. For each `]`: if open > 0, open-- (matched); else swaps++. Return `Math.ceil(swaps / 2)`.',
  ],
  functionName: 'minSwaps',
  params: ['s'],
  starterCode: {
    javascript: `function minSwaps(s) {

}`,
    python: `def minSwaps(s):
    pass`,
  },
  visibleTests: [
    { args: ['][]['], expected: 1 },
    { args: [']][['], expected: 1 },
    { args: ['[]'], expected: 0 },
  ],
  hiddenTests: [
    { args: [']]][[['], expected: 2 },
    { args: ['[[][]]'], expected: 0 },
    { args: ['][][]['], expected: 1 },
    { args: [']][[]][['], expected: 1 },
  ],
};
