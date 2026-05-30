import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-number-of-swaps-to-make-the-string-balanced',
  title: 'Minimum Number of Swaps to Make the String Balanced',
  difficulty: 'medium',
  tags: ['strings', 'two-pointers', 'stack'],
  description: `You are given a **0-indexed** string \`s\` of **even** length \`n\`. The string consists of exactly \`n / 2\` opening brackets \`'['\` and \`n / 2\` closing brackets \`']'\`.

A string is called **balanced** if and only if:
- It is an empty string, or
- It can be written as \`AB\`, where both \`A\` and \`B\` are balanced strings, or
- It can be written as \`[C]\`, where \`C\` is a balanced string.

You may swap the brackets at any two indices any number of times.

Return the **minimum** number of swaps to make \`s\` balanced.`,
  constraints: [
    '`n == s.length`',
    '`2 <= n <= 10^6`',
    '`n` is even',
    '`s[i]` is either `\'[\'` or `\']\'`',
    'The number of opening brackets equals the number of closing brackets',
  ],
  examples: [
    {
      input: 's = "][]["',
      output: '1',
      explanation: 'Swap indices 0 and 2 to get "[[]]" — balanced in 1 swap.',
    },
    {
      input: 's = "]]][[["',
      output: '2',
      explanation: 'Swap (0,3) and (1,4) to get "[[[]]]" — 2 swaps.',
    },
    {
      input: 's = "[]"',
      output: '0',
      explanation: 'Already balanced.',
    },
  ],
  hints: [
    'Scan left to right maintaining a count of "open" brackets and "bad" (unmatched) "]" brackets.',
    'When you see "[" increment open; when you see "]" and open > 0 decrement open (match found), otherwise increment bad.',
    'Answer = ceil(bad / 2): each swap fixes two misplaced brackets.',
  ],
  functionName: 'minSwaps',
  params: ['s'],
  starterCode: {
    javascript: `function minSwaps(s) {

}`,
    typescript: `function minSwaps(s: string): number {

}`,
    python: `def minSwaps(s):
    pass`,
  },
  visibleTests: [
    { args: ['][[]'], expected: 1 },
    { args: [']]][[['], expected: 2 },
    { args: ['[]'], expected: 0 },
  ],
  hiddenTests: [
    { args: ['[[]]'], expected: 0 },
    { args: [']][['], expected: 1 },
    { args: [']]]][[[['], expected: 2 },
    { args: ['][]['], expected: 1 },
    { args: ['[][][]'], expected: 0 },
  ],
};
