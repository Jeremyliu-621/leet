import type { Problem } from '../types';

export const problem: Problem = {
  id: 'number-of-good-binary-strings',
  title: 'Number of Good Binary Strings',
  difficulty: 'medium',
  tags: ['dynamic-programming'],
  description: `You are given integers \`low\`, \`high\`, \`zero\`, and \`one\`.

A **good binary string** is a string over \`'0'\` and \`'1'\` that:
- Has length between \`low\` and \`high\` (inclusive).
- Can be formed by concatenating any number of copies of a string of \`zero\` zeros and/or a string of \`one\` ones, in any order.

Return the number of good binary strings modulo \`10^9 + 7\`.`,
  constraints: [
    '`1 <= low <= high <= 10^5`',
    '`1 <= zero, one <= low`',
  ],
  examples: [
    {
      input: 'low = 3, high = 3, zero = 1, one = 1',
      output: '8',
      explanation: 'All 2^3 = 8 binary strings of length 3 are good.',
    },
    {
      input: 'low = 2, high = 3, zero = 1, one = 2',
      output: '5',
      explanation: 'Good strings: "00","11","000","011","110" — 5 strings of length 2 or 3.',
    },
    {
      input: 'low = 1, high = 1, zero = 1, one = 1',
      output: '2',
      explanation: '"0" and "1" are the only good strings of length 1.',
    },
  ],
  hints: [
    'This is a counting DP problem. Let dp[i] = number of good strings of exactly length i.',
    'A string of length i can be formed by appending `zero` zeros to a string of length i−zero, or `one` ones to a string of length i−one. Base case: dp[0] = 1 (empty string).',
    'Transition: dp[i] = (dp[i−zero] if i >= zero else 0) + (dp[i−one] if i >= one else 0), taken mod 10^9+7.',
    'The answer is the sum of dp[i] for all i in [low, high].',
  ],
  functionName: 'countGoodStrings',
  params: ['low', 'high', 'zero', 'one'],
  starterCode: {
    javascript: `function countGoodStrings(low, high, zero, one) {

}`,
    python: `def countGoodStrings(low: int, high: int, zero: int, one: int) -> int:
    pass`,
  },
  visibleTests: [
    { args: [3, 3, 1, 1], expected: 8 },
    { args: [2, 3, 1, 2], expected: 5 },
    { args: [1, 1, 1, 1], expected: 2 },
  ],
  hiddenTests: [
    { args: [1, 1, 1, 2], expected: 1 },
    { args: [1, 2, 1, 2], expected: 3 },
    { args: [2, 5, 2, 3], expected: 5 },
    { args: [5, 5, 2, 3], expected: 2 },
  ],
};
