import type { Problem } from '../types';

export const problem: Problem = {
  id: 'number-of-ways-to-reach-position-after-exactly-k-steps',
  title: 'Number of Ways to Reach a Position After Exactly k Steps',
  difficulty: 'medium',
  tags: ['math', 'dynamic-programming'],
  description: `You are given two positive integers \`startPos\` and \`endPos\`. In a single step, you can move from position \`x\` to either \`x + 1\` or \`x - 1\`.

Given the integer \`k\`, return the number of different ways to reach \`endPos\` from \`startPos\` in **exactly** \`k\` steps. Since the answer may be large, return it **modulo** \`10^9 + 7\`.`,
  constraints: [
    '1 <= startPos, endPos <= 1000',
    '0 <= k <= 1000',
  ],
  examples: [
    {
      input: 'startPos = 1, endPos = 2, k = 3',
      output: '3',
      explanation: 'Three ways: (1→2→3→2), (1→2→1→2), (1→0→1→2). All use exactly 3 steps.',
    },
    {
      input: 'startPos = 2, endPos = 5, k = 10',
      output: '0',
      explanation: 'Distance is 3. 10 - 3 = 7 is odd, so impossible. 0 ways.',
    },
  ],
  hints: [
    "Level 1: Let d = |startPos - endPos|. If d > k or (k - d) is odd, return 0. Otherwise we need to take (k+d)/2 forward steps and (k-d)/2 backward steps.",
    "Level 2: The number of ways is C(k, (k+d)/2) — choosing which of the k steps are forward. Compute this combination modulo 10^9+7.",
    "Level 3: Precompute factorials and modular inverses up to k. C(k, r) = k! / (r! * (k-r)!) mod p. Use Fermat's little theorem: inv(x) = x^(p-2) mod p.",
  ],
  functionName: 'numberOfWays',
  params: ['startPos', 'endPos', 'k'],
  starterCode: {
    javascript: `function numberOfWays(startPos, endPos, k) {
  const MOD = 1_000_000_007n;
  const d = Math.abs(startPos - endPos);
  if (d > k || (k - d) % 2 !== 0) return 0;
  const r = (k - d) / 2;
  function modpow(base, exp, mod) {
    let result = 1n;
    base = BigInt(base) % mod;
    exp = BigInt(exp);
    while (exp > 0n) {
      if (exp % 2n === 1n) result = result * base % mod;
      base = base * base % mod;
      exp >>= 1n;
    }
    return result;
  }
  const fact = [1n];
  for (let i = 1; i <= k; i++) fact.push(fact[i - 1] * BigInt(i) % MOD);
  function inv(n) { return modpow(n, MOD - 2n, MOD); }
  const comb = fact[k] * inv(fact[r]) % MOD * inv(fact[k - r]) % MOD;
  return Number(comb);
}`,
    typescript: `function numberOfWays(startPos: number, endPos: number, k: number): number {
  const MOD = 1_000_000_007n;
  const d = Math.abs(startPos - endPos);
  if (d > k || (k - d) % 2 !== 0) return 0;
  const r = (k - d) / 2;
  function modpow(base: bigint, exp: bigint, mod: bigint): bigint {
    let result = 1n;
    base = base % mod;
    while (exp > 0n) {
      if (exp % 2n === 1n) result = result * base % mod;
      base = base * base % mod;
      exp >>= 1n;
    }
    return result;
  }
  const fact: bigint[] = [1n];
  for (let i = 1; i <= k; i++) fact.push(fact[i - 1]! * BigInt(i) % MOD);
  function inv(n: bigint): bigint { return modpow(n, MOD - 2n, MOD); }
  const comb = fact[k]! * inv(fact[r]!) % MOD * inv(fact[k - r]!) % MOD;
  return Number(comb);
}`,
    python: `def numberOfWays(startPos, endPos, k):
    MOD = 10**9 + 7
    d = abs(startPos - endPos)
    if d > k or (k - d) % 2 != 0:
        return 0
    r = (k - d) // 2
    from math import comb
    return comb(k, r) % MOD`,
  },
  visibleTests: [
    { args: [1, 2, 3], expected: 3 },
    { args: [2, 5, 10], expected: 0 },
    { args: [1, 1, 0], expected: 1 },
  ],
  hiddenTests: [
    { args: [1, 1, 2], expected: 2 },
    { args: [1, 1000, 1000], expected: 0 },
    { args: [1, 2, 1], expected: 1 },
    { args: [500, 500, 4], expected: 6 },
    { args: [1, 2, 999], expected: 579917918 },
  ],
};
