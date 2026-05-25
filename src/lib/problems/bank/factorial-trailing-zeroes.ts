import type { Problem } from '../types';

export const problem: Problem = {
  id: 'factorial-trailing-zeroes',
  title: 'Factorial Trailing Zeroes',
  difficulty: 'medium',
  tags: ['math'],
  description: `Given an integer \`n\`, return the number of trailing zeroes in \`n!\`.

Note that \`n! = n * (n - 1) * (n - 2) * ... * 3 * 2 * 1\`.`,
  constraints: [
    '`0 <= n <= 10^4`',
  ],
  examples: [
    {
      input: 'n = 3',
      output: '0',
      explanation: '3! = 6, no trailing zero.',
    },
    {
      input: 'n = 5',
      output: '1',
      explanation: '5! = 120, one trailing zero.',
    },
    {
      input: 'n = 0',
      output: '0',
    },
  ],
  hints: [
    'Trailing zeroes come from factors of 10 = 2 × 5. Since factors of 2 are always more abundant, count the factors of 5 in n!.',
    'Each multiple of 5 contributes at least one factor of 5; each multiple of 25 contributes an extra one; etc.',
    'Answer = floor(n/5) + floor(n/25) + floor(n/125) + ...',
  ],
  functionName: 'trailingZeroes',
  params: ['n'],
  starterCode: {
    javascript: 'function trailingZeroes(n) {\n  \n}\n',
    python: 'def trailingZeroes(n):\n    pass\n',
  },
  visibleTests: [
    { args: [3], expected: 0 },
    { args: [5], expected: 1 },
    { args: [0], expected: 0 },
  ],
  hiddenTests: [
    { args: [10], expected: 2 },
    { args: [25], expected: 6 },
    { args: [100], expected: 24 },
    { args: [1000], expected: 249 },
  ],
};
