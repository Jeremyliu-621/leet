import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-primes-sieve',
  title: 'Count Primes Up to N',
  difficulty: 'medium',
  tags: ['math'],
  description: `Count the number of **prime numbers strictly less than** a given integer \`n\`.

A prime number is a natural number greater than 1 that has no positive divisors other than 1 and itself.

Use the **Sieve of Eratosthenes** for an efficient O(n log log n) solution:
1. Create a boolean array of size \`n\`, initialized to \`true\`.
2. Starting from 2, for each prime \`p\`, mark all multiples of \`p\` (starting from \`p*p\`) as composite.
3. Count the remaining \`true\` entries from index 2 onward.`,
  constraints: [
    '0 <= n <= 100000',
  ],
  examples: [
    {
      input: 'n = 10',
      output: '4',
      explanation: 'The primes less than 10 are 2, 3, 5, and 7 — four primes total.',
    },
    {
      input: 'n = 0',
      output: '0',
      explanation: 'No primes exist strictly less than 0.',
    },
    {
      input: 'n = 2',
      output: '0',
      explanation: 'No primes exist strictly less than 2 (2 itself is not counted).',
    },
  ],
  hints: [
    'The Sieve of Eratosthenes is the classic algorithm: repeatedly eliminate multiples of each found prime. Work strictly below n, not up to and including n.',
    'Initialize a boolean array `isPrime` of length `n` to `true`. Set `isPrime[0]` and `isPrime[1]` to `false`. For each `i` from 2 to `sqrt(n)`, if `isPrime[i]` is still `true`, mark `i*i, i*i+i, i*i+2i, ...` as `false`.',
    '```js\nif (n < 2) return 0;\nconst isPrime = new Array(n).fill(true);\nisPrime[0] = isPrime[1] = false;\nfor (let i = 2; i * i < n; i++) {\n  if (isPrime[i]) {\n    for (let j = i * i; j < n; j += i) isPrime[j] = false;\n  }\n}\nreturn isPrime.filter(Boolean).length;\n```',
  ],
  functionName: 'countPrimesUpTo',
  params: ['n'],
  starterCode: {
    javascript: `function countPrimesUpTo(n) {
  if (n < 2) return 0;
  const isPrime = new Array(n).fill(true);
  isPrime[0] = isPrime[1] = false;
  for (let i = 2; i * i < n; i++) {
    if (isPrime[i]) for (let j = i * i; j < n; j += i) isPrime[j] = false;
  }
  return isPrime.filter(Boolean).length;
}`,
    typescript: `function countPrimesUpTo(n: number): number {
  if (n < 2) return 0;
  const isPrime: boolean[] = new Array(n).fill(true);
  isPrime[0] = isPrime[1] = false;
  for (let i = 2; i * i < n; i++) {
    if (isPrime[i]) for (let j = i * i; j < n; j += i) isPrime[j] = false;
  }
  return isPrime.filter(Boolean).length;
}`,
    python: `def countPrimesUpTo(n):
    if n < 2: return 0
    is_prime = [True] * n
    is_prime[0] = is_prime[1] = False
    i = 2
    while i * i < n:
        if is_prime[i]:
            for j in range(i * i, n, i):
                is_prime[j] = False
        i += 1
    return sum(is_prime)`,
  },
  visibleTests: [
    { args: [10], expected: 4 },
    { args: [0], expected: 0 },
    { args: [2], expected: 0 },
  ],
  hiddenTests: [
    { args: [1], expected: 0 },
    { args: [3], expected: 1 },
    { args: [20], expected: 8 },
    { args: [100], expected: 25 },
    { args: [1000], expected: 168 },
    { args: [50], expected: 15 },
    { args: [13], expected: 5 },
  ],
};
