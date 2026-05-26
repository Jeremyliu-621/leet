import type { Problem } from '../types';

export const problem: Problem = {
  id: 'nth-magical-number',
  title: 'Nth Magical Number',
  difficulty: 'hard',
  tags: ['binary-search', 'math'],
  description: `A positive integer is **magical** if it is divisible by either \`a\` or \`b\`.

Given the three integers \`n\`, \`a\`, and \`b\`, return the \`n\`-th magical number. Since the answer may be very large, return it **modulo** \`10^9 + 7\`.`,
  constraints: [
    '1 <= n <= 10^9',
    '2 <= a, b <= 10^5',
  ],
  examples: [
    {
      input: 'n = 1, a = 2, b = 3',
      output: '2',
      explanation: 'Magical numbers in order: 2, 3, 4, 6, 8, 9, 10, ... The 1st is 2.',
    },
    {
      input: 'n = 4, a = 2, b = 3',
      output: '6',
      explanation: 'Magical numbers: 2, 3, 4, 6. The 4th is 6.',
    },
    {
      input: 'n = 5, a = 2, b = 4',
      output: '10',
      explanation: 'When b is a multiple of a, every multiple of b is already a multiple of a. Magical numbers: 2, 4, 6, 8, 10. The 5th is 10.',
    },
  ],
  hints: [
    'For a given value `x`, the count of magical numbers ≤ x is `floor(x/a) + floor(x/b) - floor(x/lcm(a,b))`. This uses inclusion-exclusion with the LCM.',
    'Binary search on the answer. The range is [min(a,b), n * min(a,b)]. Find the smallest `x` such that count(x) ≥ n.',
    'Use BigInt or modular arithmetic carefully — `n * min(a,b)` can exceed safe integer range. Compute GCD with Euclid\'s algorithm to get LCM = a*b/gcd(a,b).',
  ],
  functionName: 'nthMagicalNumber',
  params: ['n', 'a', 'b'],
  starterCode: {
    javascript: `function nthMagicalNumber(n, a, b) {
  const MOD = 1000000007n;
  function gcd(x, y) { while (y) { [x, y] = [y, x % y]; } return x; }
  const lcm = a * b / gcd(a, b);
  // Binary search: count(x) = floor(x/a) + floor(x/b) - floor(x/lcm) >= n
}`,
    python: `def nthMagicalNumber(n, a, b):
    from math import gcd
    MOD = 10**9 + 7
    lcm = a * b // gcd(a, b)
    # Binary search: count(x) = x//a + x//b - x//lcm >= n
    pass`,
  },
  visibleTests: [
    { args: [1, 2, 3], expected: 2 },
    { args: [4, 2, 3], expected: 6 },
    { args: [5, 2, 4], expected: 10 },
  ],
  hiddenTests: [
    { args: [3, 6, 4], expected: 8 },
    { args: [2, 4, 6], expected: 6 },
    { args: [3, 2, 3], expected: 4 },
    { args: [10, 3, 5], expected: 21 },
    { args: [1000000000, 40000, 40000], expected: 999720007 },
  ],
};
