import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-good-numbers',
  title: 'Count Good Numbers',
  difficulty: 'medium',
  tags: ['math'],
  description: `A digit string is **good** if the digits at **even** indices are **even** and the digits at **odd** indices are **prime** (\`2\`, \`3\`, \`5\`, or \`7\`).

For example, \`"2329"\` is good because index 0 is \`2\` (even), index 1 is \`3\` (prime), index 2 is \`2\` (even), index 3 is \`9\` — wait, 9 is not prime, so this is not good. Actually \`"2352"\` is good: 0→2(even), 1→3(prime), 2→5(even), 3→7(prime)? No... digits at even position must be even (0,2,4,6,8) and digits at odd position must be prime (2,3,5,7).

Given an integer \`n\`, return the **total number** of good digit strings of length \`n\`. Since the answer may be large, return it **modulo** \`10^9 + 7\`.

A digit string is a string consisting of digits \`0\` through \`9\` that may contain leading zeros.`,
  constraints: [
    '1 <= n <= 10^15',
  ],
  examples: [
    {
      input: 'n = 1',
      output: '5',
      explanation: 'A single digit at index 0 (even) must be even: {0,2,4,6,8} → 5 choices.',
    },
    {
      input: 'n = 4',
      output: '400',
      explanation: '5^2 * 4^2 = 400. Two even-indexed positions (5 choices each) and two odd-indexed positions (4 choices each).',
    },
    {
      input: 'n = 50',
      output: '564908303',
      explanation: '5^25 * 4^25 mod (10^9+7).',
    },
  ],
  hints: [
    'Even-indexed positions (0, 2, 4, …) each contribute 5 choices; odd-indexed positions (1, 3, 5, …) each contribute 4 choices.',
    'For length n, there are `ceil(n/2)` even positions and `floor(n/2)` odd positions.',
    'Use fast modular exponentiation (binary exponentiation) to compute large powers efficiently: `pow(base, exp, MOD)` in Python, or write `modpow(base, exp, mod)` in JS.',
  ],
  functionName: 'countGoodNumbers',
  params: ['n'],
  starterCode: {
    javascript: `function countGoodNumbers(n) {
  const MOD = 1_000_000_007n;
  function modpow(base, exp, mod) {
    let result = 1n;
    base %= mod;
    while (exp > 0n) {
      if (exp % 2n === 1n) result = result * base % mod;
      base = base * base % mod;
      exp /= 2n;
    }
    return result;
  }
  const bigN = BigInt(n);
  const evenPos = (bigN + 1n) / 2n;
  const oddPos = bigN / 2n;
  return Number(modpow(5n, evenPos, MOD) * modpow(4n, oddPos, MOD) % MOD);
}`,
    typescript: `function countGoodNumbers(n: number): number {
  const MOD = 1_000_000_007n;
  function modpow(base: bigint, exp: bigint, mod: bigint): bigint {
    let result = 1n;
    base %= mod;
    while (exp > 0n) {
      if (exp % 2n === 1n) result = result * base % mod;
      base = base * base % mod;
      exp /= 2n;
    }
    return result;
  }
  const bigN = BigInt(n);
  const evenPos = (bigN + 1n) / 2n;
  const oddPos = bigN / 2n;
  return Number(modpow(5n, evenPos, MOD) * modpow(4n, oddPos, MOD) % MOD);
}`,
    python: `def countGoodNumbers(n):
    MOD = 10**9 + 7
    even_pos = (n + 1) // 2
    odd_pos = n // 2
    return pow(5, even_pos, MOD) * pow(4, odd_pos, MOD) % MOD`,
  },
  visibleTests: [
    { args: [1], expected: 5 },
    { args: [4], expected: 400 },
    { args: [50], expected: 564908303 },
  ],
  hiddenTests: [
    { args: [2], expected: 20 },
    { args: [3], expected: 100 },
    { args: [5], expected: 2000 },
    { args: [10], expected: 3200000 },
    { args: [12], expected: 64000000 },
  ],
};
