import type { Problem } from '../types';

export const problem: Problem = {
  id: 'find-the-count-of-numbers-which-are-not-special',
  title: 'Find the Count of Numbers Which Are Not Special',
  difficulty: 'easy',
  tags: ['math'],
  description: `You are given two positive integers \`l\` and \`r\`.

A positive integer is called **special** if it has exactly **2 proper divisors** (divisors other than the number itself). For example, 4 has proper divisors {1, 2} — exactly 2 — so it is special.

Return the count of integers in \`[l, r]\` that are **not** special.`,
  constraints: [
    '`1 <= l <= r <= 10^9`',
  ],
  examples: [
    {
      input: 'l = 5, r = 7',
      output: '3',
      explanation: 'None of 5, 6, 7 have exactly 2 proper divisors. All 3 are non-special.',
    },
    {
      input: 'l = 4, r = 16',
      output: '11',
      explanation: '4 = 2² and 9 = 3² are the only special numbers in [4,16]. 13 - 2 = 11.',
    },
  ],
  hints: [
    'A number `n` has exactly 2 proper divisors if and only if `n = p²` for some prime `p` (its only proper divisors are 1 and p).',
    'So special numbers in [l, r] are exactly the squares of primes p where p² ∈ [l, r], i.e. `sqrt(l) ≤ p ≤ sqrt(r)`.',
    'Use a sieve of Eratosthenes up to `sqrt(r)`, count primes whose square falls in [l, r], then subtract from (r - l + 1).',
  ],
  functionName: 'nonSpecialCount',
  params: ['l', 'r'],
  starterCode: {
    javascript: `function nonSpecialCount(l, r) {
  const sqrtR = Math.floor(Math.sqrt(r));
  const sieve = new Array(sqrtR + 1).fill(true);
  sieve[0] = sieve[1] = false;
  for (let i = 2; i * i <= sqrtR; i++)
    if (sieve[i]) for (let j = i * i; j <= sqrtR; j += i) sieve[j] = false;
  let special = 0;
  for (let p = 2; p <= sqrtR; p++)
    if (sieve[p] && p * p >= l) special++;
  return r - l + 1 - special;
}`,
    typescript: `function nonSpecialCount(l: number, r: number): number {
  const sqrtR = Math.floor(Math.sqrt(r));
  const sieve = new Array(sqrtR + 1).fill(true);
  sieve[0] = sieve[1] = false;
  for (let i = 2; i * i <= sqrtR; i++)
    if (sieve[i]) for (let j = i * i; j <= sqrtR; j += i) sieve[j] = false;
  let special = 0;
  for (let p = 2; p <= sqrtR; p++)
    if (sieve[p] && p * p >= l) special++;
  return r - l + 1 - special;
}`,
    python: `def nonSpecialCount(l, r):
    import math
    sqrt_r = int(math.isqrt(r))
    sieve = [True] * (sqrt_r + 1)
    sieve[0] = sieve[1] = False
    for i in range(2, int(sqrt_r**0.5) + 1):
        if sieve[i]:
            for j in range(i*i, sqrt_r + 1, i): sieve[j] = False
    special = sum(1 for p in range(2, sqrt_r + 1) if sieve[p] and p*p >= l)
    return r - l + 1 - special`,
  },
  visibleTests: [
    { args: [5, 7], expected: 3 },
    { args: [4, 16], expected: 11 },
  ],
  hiddenTests: [
    { args: [1, 10], expected: 8 },
    { args: [1, 1], expected: 1 },
    { args: [1, 4], expected: 3 },
    { args: [9, 9], expected: 0 },
    { args: [1, 100], expected: 96 },
    { args: [25, 30], expected: 5 },
    { args: [50, 100], expected: 51 },
    { args: [1, 1000000000], expected: 999996599 },
  ],
};
