import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-number-of-swaps-to-make-string-balanced',
  title: 'Minimum Number of Swaps to Make the String Balanced',
  difficulty: 'medium',
  tags: ['strings', 'two-pointers'],
  description: `You are given a 0-indexed string \`s\` of **even** length \`n\`. The string consists of exactly \`n / 2\` opening brackets \`'['\` and \`n / 2\` closing brackets \`']'\`.

A string is called **balanced** if and only if:
- It is the empty string, or
- It can be written as \`AB\`, where both \`A\` and \`B\` are balanced strings, or
- It can be written as \`[C]\`, where \`C\` is a balanced string.

You may swap the brackets at **any** two indices any number of times.

Return the **minimum** number of swaps to make \`s\` balanced.`,
  constraints: [
    'n == s.length',
    '2 <= n <= 10^6',
    'n is even.',
    "s[i] is either '[' or ']'.",
    'The number of opening brackets equals n / 2.',
  ],
  examples: [
    {
      input: 's = "]["',
      output: '1',
      explanation: 'Swap index 0 with index 1. s becomes "[]".',
    },
    {
      input: 's = "]]][[["',
      output: '2',
      explanation: 'Two swaps are needed to balance the string.',
    },
  ],
  hints: [
    'Count the number of unmatched closing brackets scanning left to right (not matched by a preceding open bracket).',
    'Each swap can fix 2 unmatched closing brackets.',
    'Answer is ceil(unmatched / 2).',
  ],
  functionName: 'minimumSwaps',
  params: ['s'],
  starterCode: {
    javascript: 'function minimumSwaps(s) {\n\n}\n',
    python: 'def minimumSwaps(s):\n    pass\n',
  },
  visibleTests: [
    { args: ['][]['], expected: 1 },
    { args: ['][][][]['], expected: 1 },
  ],
  hiddenTests: [
    { args: ['[]'], expected: 0 },
    { args: [']['], expected: 1 },
    { args: [']][['], expected: 1 },
    { args: [']]]' + '[[['], expected: 2 },
  ],
};
