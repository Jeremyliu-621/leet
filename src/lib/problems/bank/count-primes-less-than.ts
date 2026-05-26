import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-primes-less-than',
  title: 'Count Primes',
  difficulty: 'medium',
  tags: ['math'],
  description: `Given an integer \`n\`, return the number of prime numbers that are strictly less than \`n\`.`,
  constraints: [
    '0 <= n <= 5 * 10^6',
  ],
  examples: [
    { input: 'n = 10', output: '4', explanation: 'There are 4 prime numbers less than 10: 2, 3, 5, 7.' },
    { input: 'n = 0', output: '0' },
    { input: 'n = 1', output: '0' },
  ],
  hints: [
    'Use the Sieve of Eratosthenes: create a boolean array of size n, mark all multiples of each prime as composite.',
    'Start from 2, and for each number still marked prime, mark all its multiples (starting from p*p) as not prime.',
    `\`\`\`js
const sieve = new Uint8Array(n).fill(1);
sieve[0] = sieve[1] = 0;
for (let i = 2; i*i < n; i++) if (sieve[i]) for (let j=i*i; j<n; j+=i) sieve[j]=0;
return sieve.reduce((a,b)=>a+b,0);\`\`\``
  ],
  functionName: 'countPrimes',
  params: ['n'],
  starterCode: {
    javascript: 'function countPrimes(n) {\n  \n}\n',
    python: 'def countPrimes(n):\n    pass\n',
  },
  visibleTests: [
    { args: [10], expected: 4 },
    { args: [0], expected: 0 },
    { args: [1], expected: 0 },
  ],
  hiddenTests: [
    { args: [2], expected: 0 },
    { args: [3], expected: 1 },
    { args: [5], expected: 2 },
    { args: [20], expected: 8 },
    { args: [100], expected: 25 },
  ],
};
