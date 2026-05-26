import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-number-of-special-integers',
  title: 'Count Number of Special Integers',
  difficulty: 'medium',
  tags: ['math', 'dynamic-programming'],
  description: `We call a positive integer **special** if all of its digits are **distinct**.

Given a **positive** integer \`n\`, return *the number of special integers that belong to the interval* \`[1, n]\`.`,
  constraints: [
    '1 <= n <= 2 * 10^9',
  ],
  examples: [
    {
      input: 'n = 20',
      output: '19',
      explanation: 'All integers from 1 to 20 are special except 11. There are 19 special integers.',
    },
    {
      input: 'n = 5',
      output: '5',
      explanation: '1, 2, 3, 4, 5 are all special.',
    },
    {
      input: 'n = 135',
      output: '110',
      explanation: 'There are 110 special integers in [1, 135].',
    },
  ],
  hints: [
    'Count special integers by number of digits: 1-digit (9), 2-digit (9×9=81), etc. Sum for lengths < len(n).',
    'For numbers with the same number of digits as n, use digit DP: fix each digit position and count valid completions using permutations P(remaining_digits, remaining_positions).',
    'Track which digits are used via a bitmask or set; at each position choose a digit < n[pos] then count freely, or match n[pos] and continue.',
  ],
  functionName: 'countSpecialNumbers',
  params: ['n'],
  starterCode: {
    javascript: 'function countSpecialNumbers(n) {\n\n}',
    python: 'def countSpecialNumbers(n):\n    pass',
  },
  visibleTests: [
    { args: [20], expected: 19 },
    { args: [5], expected: 5 },
    { args: [135], expected: 110 },
  ],
  hiddenTests: [
    { args: [1], expected: 1 },
    { args: [9], expected: 9 },
    { args: [10], expected: 10 },
    { args: [100], expected: 90 },
    { args: [1000], expected: 738 },
    { args: [2000000000], expected: 5974650 },
  ],
};
