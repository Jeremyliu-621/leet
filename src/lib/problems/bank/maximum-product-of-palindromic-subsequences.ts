import type { Problem } from '../types';

export const problem: Problem = {
  id: 'maximum-product-of-palindromic-subsequences',
  title: 'Maximum Product of the Length of Two Palindromic Subsequences',
  difficulty: 'medium',
  tags: ['dynamic-programming', 'backtracking'],
  description: `Given a string \`s\`, find two **disjoint palindromic subsequences** of \`s\` such that the **product** of their lengths is **maximized**. The two subsequences are disjoint if none of the characters of the first subsequence appear at the same index in \`s\` as any character of the second.

Return the **maximum** possible product of the lengths of the two palindromic subsequences.

A **subsequence** is a string that can be derived from another string by deleting some (possibly zero) characters without changing the order of the remaining characters.

A **palindrome** is a string that reads the same forward and backward.`,
  constraints: [
    '2 <= s.length <= 12',
    's consists of lowercase English letters only',
  ],
  examples: [
    {
      input: 's = "leetcodecom"',
      output: '9',
      explanation:
        'One optimal pair: "ete" (length 3) and "oco" (length 3), product = 9.',
    },
    {
      input: 's = "bb"',
      output: '1',
      explanation: '"b" (index 0) and "b" (index 1) — product = 1.',
    },
    {
      input: 's = "accbcacc"',
      output: '15',
      explanation: '"ccccc" (indices 1,2,4,6,7) and "aba" (indices 0,3,5) — product = 5 × 3 = 15.',
    },
  ],
  hints: [
    'Level 1: Since s.length ≤ 12, enumerate all 2^12 = 4096 bitmasks. For each mask, check if the subsequence it selects is a palindrome. Store the palindrome length for each mask.',
    'Level 2: Precompute isPalin[mask] for all masks. Then iterate over all pairs of disjoint masks (mask1 & mask2 == 0) and maximize palindromeLen(mask1) * palindromeLen(mask2).',
    'Level 3: To check if a bitmask selects a palindrome: extract the characters at set bit positions in order, then check if that string is a palindrome. Use submask enumeration: for each mask1, iterate over submasks of its complement.',
  ],
  functionName: 'maxProduct',
  params: ['s'],
  starterCode: {
    javascript: `function maxProduct(s) {
  const n = s.length, total = 1 << n;
  function popcount(x) { let c = 0; while (x) { c += x & 1; x >>= 1; } return c; }
  function isPalin(mask) {
    const chars = [];
    for (let i = 0; i < n; i++) if (mask >> i & 1) chars.push(s[i]);
    for (let l = 0, r = chars.length - 1; l < r; l++, r--) if (chars[l] !== chars[r]) return false;
    return true;
  }
  const plen = new Array(total).fill(0);
  for (let mask = 1; mask < total; mask++) if (isPalin(mask)) plen[mask] = popcount(mask);
  let ans = 0;
  const all = total - 1;
  for (let mask1 = 1; mask1 < total; mask1++) {
    if (!plen[mask1]) continue;
    const comp = all & ~mask1;
    for (let mask2 = comp; mask2 > 0; mask2 = (mask2 - 1) & comp) {
      if (plen[mask2]) ans = Math.max(ans, plen[mask1] * plen[mask2]);
    }
  }
  return ans;
}`,
    typescript: `function maxProduct(s: string): number {
  const n = s.length, total = 1 << n;
  function popcount(x: number): number { let c = 0; while (x) { c += x & 1; x >>= 1; } return c; }
  function isPalin(mask: number): boolean {
    const chars: string[] = [];
    for (let i = 0; i < n; i++) if (mask >> i & 1) chars.push(s[i]!);
    for (let l = 0, r = chars.length - 1; l < r; l++, r--) if (chars[l] !== chars[r]) return false;
    return true;
  }
  const plen = new Array(total).fill(0) as number[];
  for (let mask = 1; mask < total; mask++) if (isPalin(mask)) plen[mask] = popcount(mask);
  let ans = 0;
  const all = total - 1;
  for (let mask1 = 1; mask1 < total; mask1++) {
    if (!plen[mask1]) continue;
    const comp = all & ~mask1;
    for (let mask2 = comp; mask2 > 0; mask2 = (mask2 - 1) & comp) {
      if (plen[mask2]) ans = Math.max(ans, plen[mask1]! * plen[mask2]!);
    }
  }
  return ans;
}`,
    python: `def maxProduct(s):
    if hasattr(s, 'to_py'): s = s.to_py()
    s = str(s); n = len(s); total = 1 << n
    def is_palin(mask):
        chars = [s[i] for i in range(n) if mask >> i & 1]
        return chars == chars[::-1]
    plen = [0] * total
    for mask in range(1, total):
        if is_palin(mask): plen[mask] = bin(mask).count('1')
    ans = 0; full = total - 1
    for mask1 in range(1, total):
        if not plen[mask1]: continue
        comp = full & ~mask1; mask2 = comp
        while mask2 > 0:
            if plen[mask2]: ans = max(ans, plen[mask1] * plen[mask2])
            mask2 = (mask2 - 1) & comp
    return ans`,
  },
  visibleTests: [
    {
      args: ['leetcodecom'],
      expected: 9,
    },
    {
      args: ['bb'],
      expected: 1,
    },
    {
      args: ['accbcacc'],
      expected: 15,
    },
  ],
  hiddenTests: [
    {
      args: ['ab'],
      expected: 1,
    },
    {
      args: ['aba'],
      expected: 2,
    },
    {
      args: ['abcba'],
      expected: 6,
    },
    {
      args: ['aabbc'],
      expected: 4,
    },
    {
      args: ['aabbcc'],
      expected: 4,
    },
  ],
};
