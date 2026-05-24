import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-divisors',
  title: 'Count Divisors',
  difficulty: 'easy',
  tags: ['math'],
  description: `Given a positive integer \`n\`, return the number of **positive integer divisors** of \`n\`.

A divisor of \`n\` is any positive integer \`d\` such that \`n % d === 0\`. For example, the divisors of 12 are 1, 2, 3, 4, 6, and 12, so the answer for 12 is 6.

Like primality testing, you only need to check divisors up to √n: if \`d\` divides \`n\` and \`d ≤ √n\`, then \`n / d\` is a corresponding divisor that is ≥ √n. Count both (unless they are equal, i.e., \`n\` is a perfect square).`,
  constraints: [
    '1 <= n <= 1000000',
    'n is a positive integer.',
  ],
  examples: [
    {
      input: 'n = 12',
      output: '6',
      explanation: 'Divisors: 1, 2, 3, 4, 6, 12.',
    },
    {
      input: 'n = 7',
      output: '2',
      explanation: '7 is prime — divisors are 1 and 7 only.',
    },
    {
      input: 'n = 1',
      output: '1',
      explanation: '1 has only one divisor: itself.',
    },
  ],
  hints: [
    'A brute-force O(n) loop works for small n, but think about why you only need to test divisors up to √n.',
    'For every divisor d ≤ √n, n/d is also a divisor (and d ≠ n/d unless n is a perfect square). So counting pairs up to √n gives you twice the answer, minus 1 if n is a perfect square.',
    '`let count = 0; for (let d = 1; d * d <= n; d++) { if (n % d === 0) { count += (d * d === n) ? 1 : 2; } } return count;`',
  ],
  functionName: 'countDivisors',
  params: ['n'],
  starterCode: {
    javascript: 'function countDivisors(n) {\n  // your code here\n}\n',
    python: 'def countDivisors(n):\n    # your code here\n    pass\n',
  },
  visibleTests: [
    { args: [12], expected: 6 },
    { args: [7], expected: 2 },
    { args: [1], expected: 1 },
  ],
  hiddenTests: [
    { args: [2], expected: 2 },
    { args: [4], expected: 3 },
    { args: [36], expected: 9 },
    { args: [100], expected: 9 },
    { args: [13], expected: 2 },
    { args: [1000000], expected: 49 },
  ],
};
