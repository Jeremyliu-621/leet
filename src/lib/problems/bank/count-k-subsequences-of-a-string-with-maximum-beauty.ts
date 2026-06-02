import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-k-subsequences-of-a-string-with-maximum-beauty',
  title: 'Count K-Subsequences of a String With Maximum Beauty',
  difficulty: 'medium',
  tags: ['strings', 'math', 'hash-map'],
  description: `You are given a string \`s\` and an integer \`k\`.

A **k-subsequence** is a **subsequence** of \`s\`, having length \`k\`, with all **distinct** characters.

The **beauty** of array \`a\` equals the sum of \`cnt(a[i], s)\` for each \`i\`, where \`cnt(x, s)\` is the number of times the character \`x\` occurs in \`s\`.

Return *the number of k-subsequences having the **maximum** beauty*, modulo \`10^9 + 7\`.

**Note:** Two subsequences are distinct if they are formed from different indices.`,
  constraints: [
    '1 <= s.length <= 2 * 10^5',
    '1 <= k <= 26',
    's consists of lowercase English letters.',
  ],
  examples: [
    {
      input: 's = "bcca", k = 2',
      output: '4',
      explanation:
        'Frequencies: b=1, c=2, a=1. Max beauty = 2+1=3, achieved by {c,b} or {c,a}. Subsequences: {c,b}→2*1=2 ways, {c,a}→2*1=2 ways. Total=4.',
    },
    {
      input: 's = "abbcd", k = 4',
      output: '2',
      explanation:
        'Frequencies: a=1, b=2, c=1, d=1. Top 4: 2,1,1,1 (max beauty=5). All distinct characters must include b and any 3 of {a,c,d}. C(3,3)*2=1*2=2.',
    },
  ],
  hints: [
    'Sort character frequencies descending. Max beauty = sum of top k frequencies.',
    'Characters with frequency > min_freq (the k-th largest) are mandatory picks.',
    'From those tied at min_freq, choose exactly (k - above) more. Ways = C(tied, k-above) * prod_above * min_freq^(k-above), modulo 10^9+7.',
  ],
  functionName: 'countKSubsequencesWithMaxBeauty',
  params: ['s', 'k'],
  starterCode: {
    javascript: `function countKSubsequencesWithMaxBeauty(s, k) {
  const MOD = 1_000_000_007n;
  const freq = new Map();
  for (const c of s) freq.set(c, (freq.get(c) || 0) + 1);
  const freqs = [...freq.values()].sort((a, b) => b - a);
  if (freqs.length < k) return 0;
  const minFreq = freqs[k - 1];
  let above = 0, prodAbove = 1n, tied = 0;
  for (const f of freqs) {
    if (f > minFreq) { above++; prodAbove = prodAbove * BigInt(f) % MOD; }
    else if (f === minFreq) tied++;
  }
  const need = k - above;
  function modpow(b, e) {
    let r = 1n; b %= MOD;
    while (e > 0n) { if (e % 2n === 1n) r = r * b % MOD; b = b * b % MOD; e /= 2n; }
    return r;
  }
  function comb(n, r) {
    if (r > n) return 0n;
    let num = 1n, den = 1n;
    for (let i = 0; i < r; i++) { num = num * BigInt(n - i) % MOD; den = den * BigInt(i + 1) % MOD; }
    return num * modpow(den, MOD - 2n) % MOD;
  }
  return Number(prodAbove * comb(tied, need) % MOD * modpow(BigInt(minFreq), BigInt(need)) % MOD);
}`,
    typescript: `function countKSubsequencesWithMaxBeauty(s: string, k: number): number {
  const MOD = 1_000_000_007n;
  const freq = new Map<string, number>();
  for (const c of s) freq.set(c, (freq.get(c) ?? 0) + 1);
  const freqs = [...freq.values()].sort((a, b) => b - a);
  if (freqs.length < k) return 0;
  const minFreq = freqs[k - 1]!;
  let above = 0, prodAbove = 1n, tied = 0;
  for (const f of freqs) {
    if (f > minFreq) { above++; prodAbove = prodAbove * BigInt(f) % MOD; }
    else if (f === minFreq) tied++;
  }
  const need = k - above;
  function modpow(b: bigint, e: bigint): bigint {
    let r = 1n; b %= MOD;
    while (e > 0n) { if (e % 2n === 1n) r = r * b % MOD; b = b * b % MOD; e /= 2n; }
    return r;
  }
  function comb(n: number, r: number): bigint {
    if (r > n) return 0n;
    let num = 1n, den = 1n;
    for (let i = 0; i < r; i++) { num = num * BigInt(n - i) % MOD; den = den * BigInt(i + 1) % MOD; }
    return num * modpow(den, MOD - 2n) % MOD;
  }
  return Number(prodAbove * comb(tied, need) % MOD * modpow(BigInt(minFreq), BigInt(need)) % MOD);
}`,
    python: `def countKSubsequencesWithMaxBeauty(s, k):
    MOD = 10**9 + 7
    from collections import Counter
    from math import comb
    freq = Counter(s)
    freqs = sorted(freq.values(), reverse=True)
    if len(freqs) < k:
        return 0
    min_freq = freqs[k - 1]
    above, prod_above, tied = 0, 1, 0
    for f in freqs:
        if f > min_freq:
            above += 1
            prod_above = prod_above * f % MOD
        elif f == min_freq:
            tied += 1
    need = k - above
    return prod_above * comb(tied, need) % MOD * pow(min_freq, need, MOD) % MOD`,
  },
  visibleTests: [
    { args: ['bcca', 2], expected: 4 },
    { args: ['abbcd', 4], expected: 2 },
  ],
  hiddenTests: [
    { args: ['abc', 2], expected: 3 },
    { args: ['abc', 3], expected: 1 },
    { args: ['a', 1], expected: 1 },
    { args: ['aabb', 2], expected: 4 },
    { args: ['abc', 4], expected: 0 },
    { args: ['aaa', 1], expected: 3 },
    { args: ['abbc', 3], expected: 2 },
  ],
};
