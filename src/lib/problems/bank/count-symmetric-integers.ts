import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-symmetric-integers',
  title: 'Count Symmetric Integers',
  difficulty: 'easy',
  tags: ['math'],
  description: `You are given two positive integers \`low\` and \`high\`.

An integer \`x\` consisting of \`2 * n\` digits is **symmetric** if the sum of the first \`n\` digits equals the sum of the last \`n\` digits. Integers with an **odd** number of digits are never symmetric.

Return the **number of symmetric integers** in the range \`[low, high]\`.`,
  constraints: [
    '1 <= low <= high <= 10000',
  ],
  examples: [
    {
      input: 'low = 1, high = 100',
      output: '9',
      explanation: 'The 9 symmetric integers in [1, 100] are: 11, 22, 33, 44, 55, 66, 77, 88, 99.',
    },
    {
      input: 'low = 1200, high = 1230',
      output: '4',
      explanation: '1203, 1212, 1221, and 1230 are symmetric.',
    },
  ],
  hints: [
    'An integer is symmetric only if it has an even number of digits (2 or 4 in this range).',
    'For 2-digit numbers (10-99): split into tens digit and units digit. Check tens == units.',
    'For 4-digit numbers (1000-9999): first two digits sum == last two digits sum.',
  ],
  functionName: 'countSymmetricIntegers',
  params: ['low', 'high'],
  starterCode: {
    javascript: 'function countSymmetricIntegers(low, high) {\n  // your code here\n}\n',
    typescript: "function countSymmetricIntegers(low: number, high: number): number {\n  // your code here\n}",

    python: 'def countSymmetricIntegers(low, high):\n    # your code here\n    pass\n',
  },
  visibleTests: [
    { args: [1, 100], expected: 9 },
    { args: [1200, 1230], expected: 4 },
  ],
  hiddenTests: [
    { args: [1, 10], expected: 0 },
    { args: [11, 11], expected: 1 },
    { args: [100, 999], expected: 0 },
    { args: [1000, 9999], expected: 615 },
    { args: [1, 9999], expected: 624 },
    { args: [1, 1], expected: 0 },
    { args: [10000, 10000], expected: 0 },
  ],
};
