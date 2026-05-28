import type { Problem } from '../types';

export const problem: Problem = {
  id: 'prime-arrangements',
  title: 'Prime Arrangements',
  difficulty: 'easy',
  tags: ['math'],
  description: `Return the number of permutations of \`1\` to \`n\` so that prime numbers are at prime indices (1-indexed).

Since the answer may be large, return the answer **modulo** \`10^9 + 7\`.

An index is **prime** if the number at that position is prime. For example, \`1\` is at index \`1\`, \`2\` is at index \`2\`, etc.

> **Note:** \`1\` is not prime.`,
  constraints: [
    '1 <= n <= 100',
  ],
  examples: [
    {
      input: 'n = 5',
      output: '12',
      explanation: 'Primes up to 5: [2,3,5], non-primes: [1,4]. There are 3 prime indices (2,3,5) and 3 primes — so 3! arrangements for primes × 2! for non-primes = 6 × 2 = 12.',
    },
    {
      input: 'n = 100',
      output: '682289015',
    },
  ],
  hints: [
    'Count how many numbers from 1 to n are prime (call it `p`). The remaining `n - p` numbers are non-prime. Prime numbers must fill the `p` prime indices and non-primes fill the rest.',
    'The answer is `p! × (n-p)! mod 10^9+7`. Use a sieve or trial division to count primes up to n.',
    'Compute factorial mod with a loop: `let result = 1; for (let i = 1; i <= k; i++) result = result * i % MOD;` Apply this twice (once for p, once for n-p) and multiply the results mod MOD.',
  ],
  functionName: 'numPrimeArrangements',
  params: ['n'],
  starterCode: {
    javascript: 'function numPrimeArrangements(n) {\n  \n}\n',
    typescript: "function numPrimeArrangements(n: number): number {\n  \n}",

    python: 'def numPrimeArrangements(n):\n    pass\n',
  },
  visibleTests: [
    { args: [5], expected: 12 },
    { args: [100], expected: 682289015 },
    { args: [1], expected: 1 },
  ],
  hiddenTests: [
    { args: [2], expected: 1 },
    { args: [3], expected: 2 },
    { args: [4], expected: 4 },
    { args: [10], expected: 17280 },
    { args: [25], expected: 410206413 },
    { args: [50], expected: 451768713 },
  ],
};
