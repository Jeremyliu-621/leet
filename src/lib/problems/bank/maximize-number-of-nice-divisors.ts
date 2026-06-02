import type { Problem } from '../types';

export const problem: Problem = {
  id: 'maximize-number-of-nice-divisors',
  title: 'Maximize Number of Nice Divisors',
  difficulty: 'hard',
  tags: ['math'],
  description: `You are given a positive integer \`primeFactors\`. You are asked to construct a positive integer \`n\` with the following conditions:

- The number of prime factors of \`n\` (including multiplicity) is at most \`primeFactors\`.
- The number of **nice divisors** of \`n\` is maximized. A divisor of \`n\` that is divisible by every prime factor of \`n\` is called a **nice divisor**.

Return the number of **nice divisors** of \`n\`. Since the answer may be very large, return it **modulo** \`10^9 + 7\`.

**Note:** A prime number is a positive integer greater than 1 that cannot be written as a product of two smaller positive integers. The prime factors of a number \`n\` are the prime numbers that divide \`n\`.`,
  constraints: [
    '`1 <= primeFactors <= 10^9`',
  ],
  examples: [
    {
      input: 'primeFactors = 5',
      output: '6',
      explanation: '12 = 2^2 × 3 has 2 prime factors (2, 2, 3) → wait, split exponents as 2+3: product = 2×3 = 6.',
    },
    {
      input: 'primeFactors = 8',
      output: '18',
      explanation: 'Split 8 = 3+3+2: product = 3×3×2 = 18.',
    },
  ],
  hints: [
    'The number of nice divisors equals the product of the exponents in the prime factorization. You want to maximize this product given that the exponents sum to primeFactors.',
    'This is equivalent to "maximum product of integers summing to n". Split into 3s as much as possible.',
    'If primeFactors % 3 == 1, replace one 3 with two 2s (3+1=2+2 but 2×2 > 3×1). If % 3 == 2, multiply by 2.',
  ],
  functionName: 'maxNiceDivisors',
  params: ['primeFactors'],
  starterCode: {
    javascript: `function maxNiceDivisors(primeFactors) {
  const MOD = 1000000007n;
  function powmod(base, exp) {
    let b = BigInt(base) % MOD, e = BigInt(exp), result = 1n;
    while (e > 0n) {
      if (e & 1n) result = result * b % MOD;
      b = b * b % MOD; e >>= 1n;
    }
    return Number(result);
  }
  if (primeFactors <= 3) return primeFactors;
  const rem = primeFactors % 3, threes = Math.floor(primeFactors / 3);
  if (rem === 0) return powmod(3, threes);
  if (rem === 1) return powmod(3, threes - 1) * 4 % 1000000007;
  return powmod(3, threes) * 2 % 1000000007;
}`,
    typescript: `function maxNiceDivisors(primeFactors: number): number {
  const MOD = 1000000007n;
  function powmod(base: number, exp: number): number {
    let b = BigInt(base) % MOD, e = BigInt(exp), result = 1n;
    while (e > 0n) {
      if (e & 1n) result = result * b % MOD;
      b = b * b % MOD; e >>= 1n;
    }
    return Number(result);
  }
  if (primeFactors <= 3) return primeFactors;
  const rem = primeFactors % 3, threes = Math.floor(primeFactors / 3);
  if (rem === 0) return powmod(3, threes);
  if (rem === 1) return powmod(3, threes - 1) * 4 % 1000000007;
  return powmod(3, threes) * 2 % 1000000007;
}`,
    python: `def maxNiceDivisors(primeFactors):
    MOD = 10**9 + 7
    def powmod(base, exp):
        result = 1; base %= MOD
        while exp > 0:
            if exp & 1: result = result * base % MOD
            base = base * base % MOD; exp >>= 1
        return result
    if primeFactors <= 3: return primeFactors
    rem = primeFactors % 3; threes = primeFactors // 3
    if rem == 0: return powmod(3, threes)
    if rem == 1: return powmod(3, threes - 1) * 4 % MOD
    return powmod(3, threes) * 2 % MOD`,
  },
  visibleTests: [
    { args: [5], expected: 6 },
    { args: [8], expected: 18 },
  ],
  hiddenTests: [
    { args: [1], expected: 1 },
    { args: [3], expected: 3 },
    { args: [4], expected: 4 },
    { args: [9], expected: 27 },
    { args: [60], expected: 486784380 },
  ],
};
