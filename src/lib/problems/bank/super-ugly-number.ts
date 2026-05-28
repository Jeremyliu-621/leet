import type { Problem } from '../types';

export const problem: Problem = {
  id: 'super-ugly-number',
  title: 'Super Ugly Number',
  difficulty: 'medium',
  tags: ['math', 'dynamic-programming'],
  description: `A **super ugly number** is a positive integer whose prime factors are in the array \`primes\`.

Given an integer \`n\` and an array of integers \`primes\`, return the \`n\`th super ugly number.

The \`n\`th super ugly number is **guaranteed** to fit in a 32-bit signed integer.`,
  constraints: [
    '1 <= n <= 10^5',
    '1 <= primes.length <= 100',
    '2 <= primes[i] <= 1000',
    'primes[i] is guaranteed to be a prime number.',
    'All the values of primes are unique and sorted in ascending order.',
  ],
  examples: [
    {
      input: 'n = 12, primes = [2,7,13,19]',
      output: '32',
      explanation: 'The first 12 super ugly numbers are [1, 2, 4, 7, 8, 13, 14, 16, 19, 26, 28, 32].',
    },
    {
      input: 'n = 1, primes = [2,3,5]',
      output: '1',
      explanation: '1 is always the first super ugly number (no prime factors needed).',
    },
  ],
  hints: [
    'Use dynamic programming: maintain an array dp where dp[i] is the (i+1)th super ugly number.',
    'For each prime, keep a pointer indicating the next dp index to multiply by that prime.',
    'The next super ugly number is the minimum of all prime * dp[pointer] values. Advance all pointers that produced the minimum.',
  ],
  functionName: 'nthSuperUglyNumber',
  params: ['n', 'primes'],
  starterCode: {
    javascript: 'function nthSuperUglyNumber(n, primes) {\n\n}',
    typescript: "function nthSuperUglyNumber(n: number, primes: number[]): number {\n\n}",

    python: 'def nthSuperUglyNumber(n, primes):\n    pass',
  },
  visibleTests: [
    { args: [12, [2, 7, 13, 19]], expected: 32 },
    { args: [1, [2, 3, 5]], expected: 1 },
  ],
  hiddenTests: [
    { args: [1, [2, 7, 13, 19]], expected: 1 },
    { args: [2, [2, 7, 13, 19]], expected: 2 },
    { args: [7, [2, 7, 13, 19]], expected: 14 },
    { args: [10, [2, 3, 5]], expected: 12 },
    { args: [15, [2, 3, 5]], expected: 24 },
    { args: [5, [3, 5, 7]], expected: 9 },
    { args: [3, [2]], expected: 4 },
  ],
};
