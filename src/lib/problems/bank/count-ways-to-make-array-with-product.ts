import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-ways-to-make-array-with-product',
  title: 'Count Ways to Make Array With Product',
  difficulty: 'hard',
  tags: ['arrays', 'dynamic-programming', 'math'],
  description: `You are given a 2D integer array \`queries\` where \`queries[i] = [n, k]\`.

For the \`i\`-th query, find the number of ways to place positive integers into an array of size \`n\` such that the **product** of all integers in the array is equal to \`k\`. Since the answer may be large, return it **modulo 10^9 + 7**.

Two arrays are different if they differ at at least one position.`,
  constraints: [
    '1 <= queries.length <= 10^4',
    '1 <= n, k <= 10^4',
  ],
  examples: [
    {
      input: 'queries = [[2,6],[5,1],[73,660],[1,7]]',
      output: '[4,1,50040,1]',
      explanation:
        'Query [2,6]: arrays of length 2 with product 6 → [1,6],[2,3],[3,2],[6,1] = 4 ways. Query [5,1]: only [1,1,1,1,1] = 1 way. Query [73,660]: distribute prime factors of 660=2^2×3×5×11 across 73 slots. Query [1,7]: only [7] = 1 way.',
    },
    {
      input: 'queries = [[1,1],[2,2],[3,3]]',
      output: '[1,2,3]',
      explanation:
        '[1,1]: only [1]. [2,2]: [1,2] and [2,1] = 2 ways. [3,3]: 3 is prime, e=1 across 3 slots: [1,1,3],[1,3,1],[3,1,1] = C(3,2) = 3 ways.',
    },
  ],
  hints: [
    'For each query (n, k): factorize k into prime powers. For each prime p with exponent e, you need to distribute e among n slots (each slot gets 0 or more). The number of ways is C(e + n - 1, n - 1) by stars-and-bars.',
    'The total count for a query is the product of C(e + n - 1, n - 1) over all prime factors of k, taken modulo 10^9 + 7.',
    'Precompute factorials and inverse factorials modulo 10^9 + 7 for fast combination calculation. Maximum value of e + n - 1 is about 10^4 + 13 (since 2^13 > 10^4). You need factorials up to about 2 × 10^4.',
  ],
  functionName: 'waysToFillArray',
  params: ['queries'],
  starterCode: {
    javascript: `function waysToFillArray(queries) {
  const MOD = 1000000007n;
  const MAXN = 20000;
  const fact = new Array(MAXN + 1).fill(0n);
  const inv_fact = new Array(MAXN + 1).fill(0n);
  fact[0] = 1n;
  for (let i = 1; i <= MAXN; i++) fact[i] = fact[i - 1] * BigInt(i) % MOD;
  // Fermat's little theorem for modular inverse
  const power = (base, exp, mod) => {
    let result = 1n;
    base = base % mod;
    while (exp > 0n) {
      if (exp & 1n) result = result * base % mod;
      base = base * base % mod;
      exp >>= 1n;
    }
    return result;
  };
  inv_fact[MAXN] = power(fact[MAXN], MOD - 2n, MOD);
  for (let i = MAXN - 1; i >= 0; i--) inv_fact[i] = inv_fact[i + 1] * BigInt(i + 1) % MOD;
  const comb = (n, r) => {
    if (r < 0 || r > n) return 0n;
    return fact[n] * inv_fact[r] % MOD * inv_fact[n - r] % MOD;
  };
  return queries.map(([n, k]) => {
    let ans = 1n;
    // Factorize k
    let rem = k;
    for (let p = 2; p * p <= rem; p++) {
      if (rem % p === 0) {
        let e = 0;
        while (rem % p === 0) { e++; rem = Math.floor(rem / p); }
        ans = ans * comb(e + n - 1, n - 1) % MOD;
      }
    }
    if (rem > 1) ans = ans * comb(n, n - 1) % MOD; // prime factor with exponent 1
    return Number(ans);
  });
}`,
    typescript: `function waysToFillArray(queries: number[][]): number[] {
  const MOD = 1000000007n;
  const MAXN = 20000;
  const fact = new Array<bigint>(MAXN + 1).fill(0n);
  const inv_fact = new Array<bigint>(MAXN + 1).fill(0n);
  fact[0] = 1n;
  for (let i = 1; i <= MAXN; i++) fact[i] = fact[i - 1]! * BigInt(i) % MOD;
  const power = (base: bigint, exp: bigint, mod: bigint): bigint => {
    let result = 1n;
    base = base % mod;
    while (exp > 0n) {
      if (exp & 1n) result = result * base % mod;
      base = base * base % mod;
      exp >>= 1n;
    }
    return result;
  };
  inv_fact[MAXN] = power(fact[MAXN]!, MOD - 2n, MOD);
  for (let i = MAXN - 1; i >= 0; i--) inv_fact[i] = inv_fact[i + 1]! * BigInt(i + 1) % MOD;
  const comb = (n: number, r: number): bigint => {
    if (r < 0 || r > n) return 0n;
    return fact[n]! * inv_fact[r]! % MOD * inv_fact[n - r]! % MOD;
  };
  return queries.map((q) => {
    const n = q[0]!;
    const k = q[1]!;
    let ans = 1n;
    let rem = k;
    for (let p = 2; p * p <= rem; p++) {
      if (rem % p === 0) {
        let e = 0;
        while (rem % p === 0) { e++; rem = Math.floor(rem / p); }
        ans = ans * comb(e + n - 1, n - 1) % MOD;
      }
    }
    if (rem > 1) ans = ans * comb(n, n - 1) % MOD;
    return Number(ans);
  });
}`,
    python: `def waysToFillArray(queries: list[list[int]]) -> list[int]:
    MOD = 10**9 + 7
    MAXN = 20000
    fact = [1] * (MAXN + 1)
    for i in range(1, MAXN + 1):
        fact[i] = fact[i - 1] * i % MOD
    inv_fact = [1] * (MAXN + 1)
    inv_fact[MAXN] = pow(fact[MAXN], MOD - 2, MOD)
    for i in range(MAXN - 1, -1, -1):
        inv_fact[i] = inv_fact[i + 1] * (i + 1) % MOD
    def comb(n: int, r: int) -> int:
        if r < 0 or r > n:
            return 0
        return fact[n] * inv_fact[r] % MOD * inv_fact[n - r] % MOD
    result = []
    for n, k in queries:
        ans = 1
        rem = k
        p = 2
        while p * p <= rem:
            if rem % p == 0:
                e = 0
                while rem % p == 0:
                    e += 1
                    rem //= p
                ans = ans * comb(e + n - 1, n - 1) % MOD
            p += 1
        if rem > 1:
            ans = ans * comb(n, n - 1) % MOD
        result.append(ans)
    return result`,
  },
  visibleTests: [
    // [2,6]: 4 ways ([1,6],[2,3],[3,2],[6,1]). [5,1]: 1 way. [1,7]: 1 way.
    { args: [[[2, 6], [5, 1], [1, 7]]], expected: [4, 1, 1] },
    { args: [[[1, 1], [2, 2], [3, 3]]], expected: [1, 2, 3] },
    // [2,1]=1, [2,4]=C(3,1)=3, [3,8]=C(5,2)=10
    { args: [[[2, 1], [2, 4], [3, 8]]], expected: [1, 3, 10] },
  ],
  hiddenTests: [
    { args: [[[1, 1]]], expected: [1] },
    { args: [[[1, 7]]], expected: [1] },
    { args: [[[2, 6]]], expected: [4] },
    { args: [[[5, 1]]], expected: [1] },
    // product is a prime: C(1+n-1,n-1) = C(n,n-1) = n ways
    { args: [[[3, 7]]], expected: [3] },
    { args: [[[4, 7]]], expected: [4] },
    // product = p^2: C(2+n-1,n-1)
    { args: [[[2, 4]]], expected: [3] },
    { args: [[[3, 4]]], expected: [6] },
    // product = p*q (two distinct primes): C(n,n-1)^2
    { args: [[[2, 6]]], expected: [4] },
    { args: [[[10, 1]]], expected: [1] },
  ],
};
