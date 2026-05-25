import type { Problem } from '../types';

export const problem: Problem = {
  id: 'number-of-beautiful-integers-in-range',
  title: 'Count the Number of Beautiful Integers in the Range',
  difficulty: 'hard',
  tags: ['math', 'dynamic-programming'],
  description: `An integer is **beautiful** if:
- The number of **even** digits equals the number of **odd** digits.
- The integer is **divisible by \`k\`**.

Given integers \`low\`, \`high\`, and \`k\`, return the count of beautiful integers in the range \`[low, high]\`.

**Approach:** Digit DP — count beautiful numbers in \`[1, high]\` minus \`[1, low−1]\`.`,
  constraints: [
    '0 < low <= high <= 10^9',
    '0 < k <= 20',
  ],
  examples: [
    {
      input: 'low = 10, high = 20, k = 3',
      output: '2',
      explanation: '12 (1odd+1even, 12%3=0) and 18 (1odd+1even, 18%3=0).',
    },
    {
      input: 'low = 1, high = 10, k = 1',
      output: '1',
      explanation: '10 has 1 even (0) + 1 odd (1) digit and is divisible by 1.',
    },
    {
      input: 'low = 5, high = 5, k = 2',
      output: '0',
    },
  ],
  hints: [
    'Use digit DP: f(high) - f(low - 1) where f(n) counts beautiful numbers in [1, n].',
    'State: (position, tight, evenCount−oddCount, remainder mod k, started).',
    'At a terminal state, return 1 iff started && diff==0 && rem==0.',
  ],
  starterCode: {
    javascript: `function numberOfBeautifulIntegers(low, high, k) {
  // low, high: integers, k: divisor
  // Return count of beautiful integers in [low, high]
}`,
    python: `def numberOfBeautifulIntegers(low: int, high: int, k: int) -> int:
    # Your code here
    pass`,
  },
  functionName: 'numberOfBeautifulIntegers',
  params: ['low', 'high', 'k'],
  visibleTests: [
    { args: [10, 20, 3], expected: 2 },
    { args: [1, 10, 1], expected: 1 },
    { args: [5, 5, 2], expected: 0 },
  ],
  hiddenTests: [
    { args: [10, 18, 3], expected: 2 },
    { args: [10, 99, 5], expected: 9 },
    { args: [100, 999, 1], expected: 0 },
    { args: [1, 100, 1], expected: 45 },
    { args: [1, 1000, 3], expected: 16 },
  ],
};
