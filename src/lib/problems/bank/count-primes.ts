import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-primes',
  title: 'Count Primes',
  difficulty: 'medium',
  tags: ['math'],
  description: `Given an integer \`n\`, return the **number of prime numbers** that are strictly less than \`n\`.

A prime number is a natural number greater than 1 that has no positive divisors other than 1 and itself.`,
  constraints: ['`0 <= n <= 5 × 10⁶`'],
  examples: [
    {
      input: 'n = 10',
      output: '4',
      explanation: 'There are 4 prime numbers less than 10: 2, 3, 5, 7.',
    },
    {
      input: 'n = 0',
      output: '0',
    },
    {
      input: 'n = 1',
      output: '0',
    },
  ],
  hints: [
    'Use the **Sieve of Eratosthenes**: create a boolean array `isPrime` of length `n`, initialized to `true`.',
    'Starting from 2, for each prime `p`, mark all multiples of `p` (starting at `p*p`) as not prime.',
    'Count the remaining `true` entries in the array.',
  ],
  functionName: 'countPrimes',
  params: ['n'],
  starterCode: {
    javascript: `function countPrimes(n) {

}`,
    typescript: "function countPrimes(n: number): number {\n\n}",

    python: `def countPrimes(n):
    pass`,
  },
  visibleTests: [
    { args: [10], expected: 4 },
    { args: [0], expected: 0 },
    { args: [1], expected: 0 },
  ],
  hiddenTests: [
    { args: [2], expected: 0 },
    { args: [3], expected: 1 },
    { args: [20], expected: 8 },
    { args: [100], expected: 25 },
  ],
};
