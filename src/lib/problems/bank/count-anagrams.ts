import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-anagrams',
  title: 'Count Anagrams',
  difficulty: 'hard',
  tags: ['strings', 'math', 'hash-map'],
  description: `You are given a string \`s\`, where every **two** consecutive words in \`s\` will be separated by exactly one space.

Return *the number of **distinct** strings that can be formed by rearranging the letters of each word in s, for all possible arrangements of each word, and all arrangements of all these words together*.

Since the answer may be very large, return it **modulo** \`10^9 + 7\`.

**Note:** Two strings formed from different rearrangements of the same word are considered distinct only if the strings themselves are different.`,
  constraints: [
    '1 <= s.length <= 10^5',
    's consists of lowercase English letters and spaces.',
    'There is exactly one space between consecutive words in s.',
  ],
  examples: [
    {
      input: 's = "too hot"',
      output: '18',
      explanation: '"too" has 3!/2!=3 arrangements; "hot" has 3!=6 arrangements. Total = 18.',
    },
    {
      input: 's = "aa"',
      output: '1',
      explanation: '"aa" has 2!/2!=1 distinct arrangement.',
    },
    {
      input: 's = "too cool"',
      output: '36',
      explanation: '"too" → 3!/2! = 3 arrangements. "cool" → 4!/2! = 12 arrangements. 3 × 12 = 36.',
    },
  ],
  hints: [
    'Level 1: For each word of length n with character frequencies f1, f2, ..., the number of distinct arrangements is n! / (f1! * f2! * ...). Multiply across all words, modulo 10^9+7.',
    'Level 2: To compute division modulo a prime p, use modular inverse: a/b ≡ a * b^(p-2) (mod p) by Fermat\'s little theorem. Precompute factorials and inverse factorials mod 10^9+7.',
    'Level 3: Precompute fact[i] and inv_fact[i] for i up to max_word_length. For each word, result = fact[n] * prod(inv_fact[f_c]) mod p. Multiply across words.',
  ],
  functionName: 'countAnagrams',
  params: ['s'],
  starterCode: {
    javascript: `function countAnagrams(s) {
  const MOD = 1000000007n;
  const words = s.split(' ');
  const maxLen = words.reduce((m, w) => Math.max(m, w.length), 0);
  const fact = new Array(maxLen + 1).fill(1n);
  for (let i = 1; i <= maxLen; i++) fact[i] = fact[i - 1] * BigInt(i) % MOD;
  const modpow = (b, e, m) => {
    let r = 1n; b %= m;
    while (e > 0n) { if (e & 1n) r = r * b % m; b = b * b % m; e >>= 1n; }
    return r;
  };
  const inv = (x) => modpow(x, MOD - 2n, MOD);
  let ans = 1n;
  for (const word of words) {
    const freq = new Map();
    for (const c of word) freq.set(c, (freq.get(c) ?? 0) + 1);
    let val = fact[word.length];
    for (const cnt of freq.values()) val = val * inv(fact[cnt]) % MOD;
    ans = ans * val % MOD;
  }
  return Number(ans);
}`,
    typescript: `function countAnagrams(s: string): number {
  const MOD = 1000000007n;
  const words = s.split(' ');
  const maxLen = words.reduce((m, w) => Math.max(m, w.length), 0);
  const fact: bigint[] = new Array(maxLen + 1).fill(1n);
  for (let i = 1; i <= maxLen; i++) fact[i] = fact[i - 1]! * BigInt(i) % MOD;
  const modpow = (b: bigint, e: bigint, m: bigint): bigint => {
    let r = 1n; b %= m;
    while (e > 0n) { if (e & 1n) r = r * b % m; b = b * b % m; e >>= 1n; }
    return r;
  };
  const inv = (x: bigint) => modpow(x, MOD - 2n, MOD);
  let ans = 1n;
  for (const word of words) {
    const freq = new Map<string, number>();
    for (const c of word) freq.set(c, (freq.get(c) ?? 0) + 1);
    let val = fact[word.length]!;
    for (const cnt of freq.values()) val = val * inv(fact[cnt]!) % MOD;
    ans = ans * val % MOD;
  }
  return Number(ans);
}`,
    python: `def countAnagrams(s):
    MOD = 10**9 + 7
    words = s.split()
    max_len = max(len(w) for w in words)
    fact = [1] * (max_len + 1)
    for i in range(1, max_len + 1):
        fact[i] = fact[i - 1] * i % MOD
    from collections import Counter
    ans = 1
    for word in words:
        freq = Counter(word)
        val = fact[len(word)]
        for cnt in freq.values():
            val = val * pow(fact[cnt], MOD - 2, MOD) % MOD
        ans = ans * val % MOD
    return ans`,
  },
  visibleTests: [
    { args: ['too hot'], expected: 18 },
    { args: ['aa'], expected: 1 },
    { args: ['too cool'], expected: 36 },
  ],
  hiddenTests: [
    { args: ['ab'], expected: 2 },
    { args: ['abc'], expected: 6 },
    { args: ['a'], expected: 1 },
    { args: ['aa bb'], expected: 1 },
    { args: ['ab cd'], expected: 4 },
    { args: ['abcde'], expected: 120 },
    { args: ['aabb ccdd'], expected: 36 },
  ],
};
