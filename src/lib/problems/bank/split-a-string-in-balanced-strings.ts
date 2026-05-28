import type { Problem } from '../types';

export const problem: Problem = {
  id: 'split-a-string-in-balanced-strings',
  title: 'Split a String in Balanced Strings',
  difficulty: 'easy',
  tags: ['strings', 'math'],
  description: `**Balanced** strings are those that have an equal quantity of \`'L'\` and \`'R'\` characters.

Given a balanced string \`s\`, split it into some number of substrings such that:

- Each substring is balanced.

Return the **maximum** number of balanced strings you can obtain.`,
  constraints: [
    '2 <= s.length <= 1000',
    's[i] is either \'L\' or \'R\'.',
    's is a balanced string.',
  ],
  examples: [
    {
      input: 's = "RLRRLLRLRL"',
      output: '4',
      explanation: 'Split into "RL", "RRLL", "RL", "RL" — each balanced. 4 substrings.',
    },
    {
      input: 's = "RLLLLRRRLR"',
      output: '3',
      explanation: 'Split into "RL", "LLLRRR", "LR" — 3 balanced substrings.',
    },
    {
      input: 's = "LLLLRRRR"',
      output: '1',
      explanation: 'The entire string is the only balanced substring.',
    },
  ],
  hints: [
    'Use a counter: increment on R, decrement on L. Each time the counter hits 0, you have a balanced substring.',
    'You want to maximize the count, so cut the string as soon as balance reaches 0 — don\'t wait for a longer balanced prefix.',
    'The greedy approach is optimal here: every time balance hits 0, it\'s always beneficial to count that as a completed substring.',
  ],
  functionName: 'balancedStringSplit',
  params: ['s'],
  starterCode: {
    javascript: `function balancedStringSplit(s) {

}`,
    typescript: "function balancedStringSplit(s: string): number {\n\n}",

    python: `def balancedStringSplit(s):
    pass`,
  },
  visibleTests: [
    { args: ['RLRRLLRLRL'], expected: 4 },
    { args: ['RLLLLRRRLR'], expected: 3 },
    { args: ['LLLLRRRR'], expected: 1 },
  ],
  hiddenTests: [
    { args: ['RL'], expected: 1 },
    { args: ['RLRL'], expected: 2 },
    { args: ['RLRLRLRL'], expected: 4 },
    { args: ['RRLL'], expected: 1 },
  ],
};
