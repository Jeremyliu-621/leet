import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-swaps-to-make-balanced',
  title: 'Minimum Swaps to Make the String Balanced',
  difficulty: 'medium',
  tags: ['strings', 'stack', 'two-pointers'],
  description: `You are given a **0-indexed** string \`s\` of **even length** \`n\`. The string consists of exactly \`n / 2\` opening brackets \`'['\` and \`n / 2\` closing brackets \`']'\`.

A string is called **balanced** if and only if:
- It is the empty string, or
- It can be written as \`AB\`, where both \`A\` and \`B\` are balanced strings, or
- It can be written as \`[C]\`, where \`C\` is a balanced string.

You may swap the brackets at **any two indices** any number of times.

Return the **minimum** number of swaps to make \`s\` balanced.`,
  constraints: [
    '\`n == s.length\`',
    '\`2 <= n <= 10^6\`',
    '\`n\` is even.',
    '\`s[i]\` is either \`[\` or \`]\`.',
    'The number of \`[\` equals \`n / 2\` and the number of \`]\` equals \`n / 2\`.',
  ],
  examples: [
    {
      input: 's = "]["',
      output: '1',
      explanation: 'Swap index 0 and 1 to get "[]". 1 swap.',
    },
    {
      input: 's = "]]][[["',
      output: '2',
      explanation: 'Two swaps can balance the string.',
    },
    {
      input: 's = "[]"',
      output: '0',
      explanation: 'Already balanced.',
    },
  ],
  hints: [
    'Track a running balance scanning left to right: "[" adds 1, "]" subtracts 1. Track the maximum deficit (deepest negative value reached).',
    'Each swap of a misplaced "]" with a misplaced "[" fixes 2 units of imbalance.',
    'The answer is Math.ceil(maxDeficit / 2).',
    'Equivalently, count unmatched "]" using a stack or counter; answer is ceil(unmatchedCount / 2).',
  ],
  functionName: 'minSwaps',
  params: ['s'],
  starterCode: {
    javascript: `/**
 * @param {string} s
 * @return {number}
 */
function minSwaps(s) {

}`,
    typescript: `function minSwaps(s: string): number {

}`,
    python: `def minSwaps(s: str) -> int:
    `,
  },
  visibleTests: [
    { args: ["]["], expected: 1 },
    { args: ["]]][[["], expected: 2 },
    { args: ["[]"], expected: 0 },
  ],
  hiddenTests: [
    { args: ["][]["], expected: 1 },
    { args: ["]][["], expected: 1 },
    { args: ["[[[[]]]]"], expected: 0 },
    { args: ["]]]][[[["], expected: 2 },
    { args: ["]]]]]][[[[[["], expected: 3 },
  ],
};
