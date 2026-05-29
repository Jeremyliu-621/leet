import type { Problem } from '../types';

export const problem: Problem = {
  id: 'three-divisors',
  title: 'Three Divisors',
  difficulty: 'easy',
  tags: ['math'],
  description: `Given a positive integer \`n\`, return \`true\` if \`n\` has **exactly three positive divisors**. Otherwise, return \`false\`.

An integer \`m\` is a **divisor** of \`n\` if \`n % m === 0\`.`,
  constraints: [
    '`1 <= n <= 10^4`',
  ],
  examples: [
    {
      input: 'n = 2',
      output: 'false',
      explanation: 'The divisors of 2 are 1 and 2, which is only 2 divisors.',
    },
    {
      input: 'n = 4',
      output: 'true',
      explanation: 'The divisors of 4 are 1, 2, and 4, which is exactly 3 divisors.',
    },
    {
      input: 'n = 6',
      output: 'false',
      explanation: 'The divisors of 6 are 1, 2, 3, and 6, which is 4 divisors.',
    },
  ],
  hints: [
    'Count all positive divisors of `n` by iterating from 1 to `n` (or 1 to `sqrt(n)` with careful counting).',
    'A number has exactly 3 divisors if and only if it is the square of a prime — the divisors are 1, p, and p².',
    '`for (let i = 1, count = 0; i <= n; i++) if (n % i === 0) count++; return count === 3;`',
  ],
  functionName: 'isThree',
  params: ['n'],
  starterCode: {
    javascript: `function isThree(n) {

}`,
    typescript: 'function isThree(n: number): boolean {\n\n}',
    python: `def isThree(n):
    pass`,
  },
  visibleTests: [
    { args: [2], expected: false },
    { args: [4], expected: true },
    { args: [6], expected: false },
  ],
  hiddenTests: [
    { args: [1], expected: false },
    { args: [9], expected: true },
    { args: [25], expected: true },
    { args: [12], expected: false },
    { args: [49], expected: true },
  ],
};
