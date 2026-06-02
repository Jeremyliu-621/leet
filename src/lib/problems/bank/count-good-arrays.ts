import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-good-arrays',
  title: 'Count Good Arrays',
  difficulty: 'medium',
  tags: ['math', 'dynamic-programming'],
  description: `You are given three integers \`n\`, \`m\`, and \`k\`.

A **good array** \`arr\` of length \`n\` satisfies:
- Each element of \`arr\` is in the range \`[1, m]\`.
- Exactly \`k\` indices \`i\` (where \`1 <= i < n\`) satisfy \`arr[i] == arr[i - 1]\`.

Return the number of **good arrays**, modulo \`10^9 + 7\`.`,
  constraints: [
    '1 <= n <= 10^5',
    '1 <= m <= 10^5',
    '0 <= k <= n - 1',
  ],
  examples: [
    {
      input: 'n = 3, m = 2, k = 1',
      output: '4',
      explanation: 'Arrays: [1,1,2],[1,2,2],[2,1,1],[2,2,1]. Each has exactly 1 adjacent-equal pair.',
    },
    {
      input: 'n = 4, m = 2, k = 2',
      output: '6',
      explanation: 'Arrays with exactly 2 adjacent-equal pairs: [1,1,1,2],[1,1,2,2],[1,2,2,2],[2,2,2,1],[2,2,1,1],[2,1,1,1].',
    },
    {
      input: 'n = 5, m = 2, k = 0',
      output: '2',
      explanation: 'Alternating arrays: [1,2,1,2,1] and [2,1,2,1,2].',
    },
  ],
  hints: [
    'Level 1: There are n-1 adjacent pairs total. Choose k of them to be "equal" positions; the remaining (n-1-k) are "different" positions.',
    'Level 2: C(n-1, k) ways to choose which positions are equal. The first element has m choices. Each "different" position has (m-1) choices for a new distinct value.',
    'Level 3: Answer = C(n-1, k) * m * (m-1)^(n-1-k) mod (10^9+7). Precompute factorials for C(n-1,k).',
  ],
  functionName: 'countGoodArrays',
  params: ['n', 'm', 'k'],
  starterCode: {
    javascript: `function countGoodArrays(n, m, k) {
  const MOD = 1_000_000_007n;
  const N = n - 1;
  if (k > N) return 0;
  // C(N, k) * m * (m-1)^(N-k) mod MOD
  const fact = new Array(N + 1);
  const inv = new Array(N + 1);
  fact[0] = 1n;
  for (let i = 1; i <= N; i++) fact[i] = fact[i - 1] * BigInt(i) % MOD;
  function power(base, exp, mod) {
    let result = 1n; base = base % mod;
    while (exp > 0n) {
      if (exp & 1n) result = result * base % mod;
      base = base * base % mod; exp >>= 1n;
    }
    return result;
  }
  inv[N] = power(fact[N], MOD - 2n, MOD);
  for (let i = N - 1; i >= 0; i--) inv[i] = inv[i + 1] * BigInt(i + 1) % MOD;
  const comb = fact[N] * inv[k] % MOD * inv[N - k] % MOD;
  const ways = comb * BigInt(m) % MOD * power(BigInt(m - 1), BigInt(N - k), MOD) % MOD;
  return Number(ways);
}`,
    typescript: `function countGoodArrays(n: number, m: number, k: number): number {
  const MOD = 1_000_000_007n;
  const N = n - 1;
  if (k > N) return 0;
  const fact = new Array<bigint>(N + 1);
  const inv = new Array<bigint>(N + 1);
  fact[0] = 1n;
  for (let i = 1; i <= N; i++) fact[i] = fact[i - 1]! * BigInt(i) % MOD;
  function power(base: bigint, exp: bigint, mod: bigint): bigint {
    let result = 1n; base = base % mod;
    while (exp > 0n) {
      if (exp & 1n) result = result * base % mod;
      base = base * base % mod; exp >>= 1n;
    }
    return result;
  }
  inv[N] = power(fact[N]!, MOD - 2n, MOD);
  for (let i = N - 1; i >= 0; i--) inv[i] = inv[i + 1]! * BigInt(i + 1) % MOD;
  const comb = fact[N]! * inv[k]! % MOD * inv[N - k]! % MOD;
  const ways = comb * BigInt(m) % MOD * power(BigInt(m - 1), BigInt(N - k), MOD) % MOD;
  return Number(ways);
}`,
    python: `def countGoodArrays(n, m, k):
    n = int(n); m = int(m); k = int(k)
    MOD = 10**9 + 7
    N = n - 1
    if k > N:
        return 0
    # C(N, k) * m * (m-1)^(N-k)
    fact = [1] * (N + 1)
    for i in range(1, N + 1):
        fact[i] = fact[i - 1] * i % MOD
    def power(base, exp, mod):
        result = 1; base %= mod
        while exp > 0:
            if exp & 1: result = result * base % mod
            base = base * base % mod; exp >>= 1
        return result
    inv_fact_N = power(fact[N], MOD - 2, MOD)
    inv_fact_k = power(fact[k], MOD - 2, MOD)
    inv_fact_Nk = power(fact[N - k], MOD - 2, MOD)
    comb = fact[N] * inv_fact_k % MOD * inv_fact_Nk % MOD
    return comb * m % MOD * power(m - 1, N - k, MOD) % MOD`,
  },
  visibleTests: [
    { args: [3, 2, 1], expected: 4 },
    { args: [4, 2, 2], expected: 6 },
    { args: [5, 2, 0], expected: 2 },
  ],
  hiddenTests: [
    { args: [1, 1, 0], expected: 1 },
    { args: [2, 3, 0], expected: 6 },
    { args: [2, 3, 1], expected: 3 },
    { args: [3, 3, 1], expected: 12 },
    { args: [5, 2, 2], expected: 12 },
  ],
};
