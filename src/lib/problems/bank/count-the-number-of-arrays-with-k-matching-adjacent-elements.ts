import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-the-number-of-arrays-with-k-matching-adjacent-elements',
  title: 'Count the Number of Arrays With K Matching Adjacent Elements',
  difficulty: 'hard',
  tags: ['math', 'dynamic-programming'],
  description: `You are given three integers \`n\`, \`m\`, and \`k\`. A **good** array is an array of length \`n\` where:
- Every element is in the range \`[1, m]\`.
- There are **exactly** \`k\` indices \`i\` (where \`0 <= i < n - 1\`) such that \`a[i] == a[i + 1]\`.

Return the number of **good** arrays modulo \`10^9 + 7\`.`,
  constraints: [
    '1 <= n <= 10^5',
    '1 <= m <= 10^5',
    '0 <= k < n',
  ],
  examples: [
    {
      input: 'n = 3, m = 2, k = 1',
      output: '4',
      explanation: 'Good arrays: [1,1,2],[1,2,2],[2,2,1],[2,1,1]. There are C(2,1)=2 ways to place the equal pair, 2 choices for the first element, 1 choice per different transition. Total = 2*2*1 = 4.',
    },
    {
      input: 'n = 4, m = 2, k = 2',
      output: '6',
      explanation: 'C(3,2)=3 positions for equal pairs, 2 first-element choices, (2-1)^1=1 for the remaining different transition. Total = 3*2*1 = 6.',
    },
    {
      input: 'n = 5, m = 2, k = 0',
      output: '2',
      explanation: 'No adjacent equal pairs: must be fully alternating. Only [1,2,1,2,1] and [2,1,2,1,2]. Total = C(4,0)*2*(2-1)^4 = 1*2*1 = 2.',
    },
  ],
  hints: [
    'Choose which k of the n-1 adjacent positions are "equal" positions: C(n-1, k) ways. The rest (n-1-k) are "different" positions.',
    'The first element has m choices. Each "equal" transition is forced (same as previous). Each "different" transition has m-1 choices (any value except the previous).',
    'Answer = C(n-1, k) * m * (m-1)^(n-1-k) mod 10^9+7. Use modular exponentiation and precomputed factorial/inverse-factorial for the binomial coefficient.',
  ],
  functionName: 'countGoodArrays',
  params: ['n', 'm', 'k'],
  starterCode: {
    javascript: `function countGoodArrays(n, m, k) {
  const MOD = 1000000007n;
  const N = n;
  const fact = new Array(N).fill(1n);
  for (let i = 1; i < N; i++) fact[i] = fact[i-1] * BigInt(i) % MOD;
  const pow = (b, e, mod) => { let r = 1n; b %= mod; while (e > 0n) { if (e & 1n) r = r * b % mod; b = b * b % mod; e >>= 1n; } return r; };
  const inv = x => pow(x, MOD - 2n, MOD);
  const C = (a, b) => b < 0 || b > a ? 0n : fact[a] * inv(fact[b]) % MOD * inv(fact[a-b]) % MOD;
  const ans = C(n-1, k) * BigInt(m) % MOD * pow(BigInt(m-1), BigInt(n-1-k), MOD) % MOD;
  return Number(ans);
}`,
    typescript: `function countGoodArrays(n: number, m: number, k: number): number {
  const MOD = 1000000007n;
  const fact: bigint[] = new Array(n).fill(1n);
  for (let i = 1; i < n; i++) fact[i] = fact[i-1]! * BigInt(i) % MOD;
  const pow = (b: bigint, e: bigint): bigint => { let r = 1n; b %= MOD; while (e > 0n) { if (e & 1n) r = r * b % MOD; b = b * b % MOD; e >>= 1n; } return r; };
  const inv = (x: bigint) => pow(x, MOD - 2n);
  const C = (a: number, b: number): bigint => b < 0 || b > a ? 0n : fact[a]! * inv(fact[b]!) % MOD * inv(fact[a-b]!) % MOD;
  const ans = C(n-1, k) * BigInt(m) % MOD * pow(BigInt(m-1), BigInt(n-1-k)) % MOD;
  return Number(ans);
}`,
    python: `def countGoodArrays(n, m, k):
    MOD = 10**9 + 7
    import math
    ans = math.comb(n-1, k) * m % MOD * pow(m-1, n-1-k, MOD) % MOD
    return ans`,
  },
  visibleTests: [
    { args: [3, 2, 1], expected: 4 },
    { args: [4, 2, 2], expected: 6 },
    { args: [5, 2, 0], expected: 2 },
  ],
  hiddenTests: [
    { args: [1, 1, 0], expected: 1 },
    { args: [2, 5, 0], expected: 20 },
    { args: [3, 3, 0], expected: 12 },
    { args: [4, 4, 3], expected: 4 },
    { args: [5, 3, 2], expected: 72 },
  ],
};
