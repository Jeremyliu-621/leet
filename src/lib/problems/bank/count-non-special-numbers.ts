import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-non-special-numbers',
  title: 'Count Non-Special Numbers',
  difficulty: 'medium',
  tags: ['math', 'arrays'],
  description: `You are given positive integers \`l\` and \`r\`.

A positive integer is called **special** if it has **exactly 2 proper divisors**. The **proper divisors** of a positive integer \`n\` are all positive divisors of \`n\` except \`n\` itself.

Return the count of integers in the range \`[l, r]\` that are **not special**.

**Note:** A number \`n\` is special if and only if \`n = p²\` for some prime \`p\` (its proper divisors are exactly \`1\` and \`p\`).`,
  constraints: [
    '1 <= l <= r <= 10^9',
  ],
  examples: [
    {
      input: 'l = 5, r = 7',
      output: '3',
      explanation: 'The integers in [5, 7] are 5, 6, 7. None of them are special (the nearest special number is 4 = 2²). So all 3 are non-special.',
    },
    {
      input: 'l = 4, r = 16',
      output: '11',
      explanation: 'The special numbers in [4, 16] are: 4 = 2² and 9 = 3². So 13 total − 2 special = 11 non-special.',
    },
  ],
  hints: [
    'A number n is special if and only if n = p² for some prime p. So its proper divisors are exactly 1 and p.',
    'To find all special numbers in [l, r], find all primes p ≤ √r where p² ≥ l. Use the Sieve of Eratosthenes up to floor(√r).',
    'Count the special numbers in [l, r] using the sieve, then subtract from the total count (r − l + 1).',
  ],
  functionName: 'nonSpecialCount',
  params: ['l', 'r'],
  starterCode: {
    javascript: `function nonSpecialCount(l, r) {
  const sqrtR = Math.floor(Math.sqrt(r));
  const isPrime = new Array(sqrtR + 1).fill(true);
  isPrime[0] = isPrime[1] = false;
  for (let i = 2; i * i <= sqrtR; i++) {
    if (isPrime[i]) for (let j = i * i; j <= sqrtR; j += i) isPrime[j] = false;
  }
  let special = 0;
  for (let p = 2; p <= sqrtR; p++) {
    if (isPrime[p] && p * p >= l && p * p <= r) special++;
  }
  return r - l + 1 - special;
}`,
    typescript: `function nonSpecialCount(l: number, r: number): number {
  const sqrtR = Math.floor(Math.sqrt(r));
  const isPrime = new Array(sqrtR + 1).fill(true) as boolean[];
  isPrime[0] = isPrime[1] = false;
  for (let i = 2; i * i <= sqrtR; i++) {
    if (isPrime[i]) for (let j = i * i; j <= sqrtR; j += i) isPrime[j] = false;
  }
  let special = 0;
  for (let p = 2; p <= sqrtR; p++) {
    if (isPrime[p] && p * p >= l && p * p <= r) special++;
  }
  return r - l + 1 - special;
}`,
    python: `def nonSpecialCount(l, r):
    import math
    sqrt_r = int(math.isqrt(r))
    is_prime = [True] * (sqrt_r + 1)
    is_prime[0] = is_prime[1] = False
    for i in range(2, int(sqrt_r**0.5) + 1):
        if is_prime[i]:
            for j in range(i*i, sqrt_r + 1, i):
                is_prime[j] = False
    special = sum(1 for p in range(2, sqrt_r + 1) if is_prime[p] and l <= p*p <= r)
    return r - l + 1 - special`,
  },
  visibleTests: [
    { args: [5, 7], expected: 3 },
    { args: [4, 16], expected: 11 },
  ],
  hiddenTests: [
    { args: [4, 4], expected: 0 },
    { args: [1, 100], expected: 96 },
    { args: [1, 1], expected: 1 },
    { args: [2, 3], expected: 2 },
    { args: [1, 4], expected: 3 },
    { args: [100, 100], expected: 1 },
    { args: [49, 49], expected: 0 },
    { args: [50, 50], expected: 1 },
    { args: [1, 1000000000], expected: 999996599 },
  ],
};
