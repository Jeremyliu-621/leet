import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-primes-sieve',
  title: 'Count Primes',
  difficulty: 'medium',
  tags: ['math'],
  description: `Given an integer \`n\`, return the number of prime numbers that are strictly less than \`n\`.`,
  examples: [
    { input: 'n = 10', output: '4', explanation: 'The primes less than 10 are: 2, 3, 5, 7.' },
    { input: 'n = 0', output: '0' },
    { input: 'n = 1', output: '0' },
  ],
  constraints: [
    '0 <= n <= 5 * 10^6',
  ],
  functionName: 'countPrimes',
  params: ['n'],
  starterCode: {
    javascript: 'function countPrimes(n) {\n  // your code here\n}\n',
    python: 'def countPrimes(n):\n    # your code here\n    pass\n',
  },
  hints: [
    'Use the Sieve of Eratosthenes: create a boolean array of size n, initially all true (meaning "is prime").',
    'Start from 2. For each prime p found, mark all multiples of p (starting from p*p) as composite.',
    'Count the number of true entries in the array (excluding 0 and 1).',
  ],
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
