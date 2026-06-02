import type { Problem } from '../types';

export const problem: Problem = {
  id: 'find-number-of-good-ways-to-split-a-string',
  title: 'Find Number of Good Ways to Split a String',
  difficulty: 'medium',
  tags: ['strings', 'hash-map'],
  description: `You are given a string \`s\`. A split is called **good** if you can split \`s\` into two non-empty strings \`p\` and \`q\` such that their concatenation equals \`s\` and the number of **distinct** characters in \`p\` equals the number of distinct characters in \`q\`.

Return the number of **good splits** of \`s\`.`,
  constraints: [
    '1 <= s.length <= 10^5',
    's consists of only lowercase English letters',
  ],
  examples: [
    {
      input: 's = "aacaba"',
      output: '2',
      explanation: 'Split "aac"|"aba": distinct(aac)=2, distinct(aba)=2. ✓ Split "aaca"|"ba": distinct(aaca)=2, distinct(ba)=2. ✓ Total = 2.',
    },
    {
      input: 's = "abcd"',
      output: '1',
      explanation: 'Only split "ab"|"cd" gives distinct(ab)=2 and distinct(cd)=2. ✓',
    },
    {
      input: 's = "aaaaa"',
      output: '4',
      explanation: 'All 4 valid splits: "a"|"aaaa", "aa"|"aaa", "aaa"|"aa", "aaaa"|"a" — each side has 1 distinct char.',
    },
  ],
  hints: [
    'Level 1: For a split at position i (1 ≤ i < n), count distinct chars in s[0..i-1] and s[i..n-1]. Check equality.',
    'Level 2: Precompute prefix distinct count and suffix distinct count arrays in O(n). Count splits where prefix[i] == suffix[i].',
    'Level 3: O(n): prefix[0]=0. prefix[i]=prefix[i-1] + (count of s[i-1] in s[0..i-2] == 0 ? 1 : 0). Similarly suffix from right. Compare prefix[i] == suffix[i] for i in [1, n-1].',
  ],
  functionName: 'numSplits',
  params: ['s'],
  starterCode: {
    javascript: `function numSplits(s) {
  const cntL = new Map(), cntR = new Map();
  for (const c of s) cntR.set(c, (cntR.get(c) ?? 0) + 1);
  let ans = 0;
  for (let i = 0; i < s.length - 1; i++) {
    const c = s[i];
    cntL.set(c, (cntL.get(c) ?? 0) + 1);
    const prev = cntR.get(c);
    if (prev === 1) cntR.delete(c); else cntR.set(c, prev - 1);
    if (cntL.size === cntR.size) ans++;
  }
  return ans;
}`,
    typescript: `function numSplits(s: string): number {
  const cntL = new Map<string, number>(), cntR = new Map<string, number>();
  for (const c of s) cntR.set(c, (cntR.get(c) ?? 0) + 1);
  let ans = 0;
  for (let i = 0; i < s.length - 1; i++) {
    const c = s[i];
    cntL.set(c, (cntL.get(c) ?? 0) + 1);
    const prev = cntR.get(c)!;
    if (prev === 1) cntR.delete(c); else cntR.set(c, prev - 1);
    if (cntL.size === cntR.size) ans++;
  }
  return ans;
}`,
    python: `def numSplits(s):
    from collections import Counter
    cntL, cntR = Counter(), Counter(s)
    ans = 0
    for i in range(len(s) - 1):
        c = s[i]; cntL[c] += 1; cntR[c] -= 1
        if cntR[c] == 0: del cntR[c]
        if len(cntL) == len(cntR): ans += 1
    return ans`,
  },
  visibleTests: [
    { args: ['aacaba'], expected: 2 },
    { args: ['abcd'], expected: 1 },
    { args: ['aaaaa'], expected: 4 },
  ],
  hiddenTests: [
    { args: ['a'], expected: 0 },
    { args: ['aa'], expected: 1 },
    { args: ['abc'], expected: 0 },
    { args: ['abcba'], expected: 0 },
    { args: ['ababab'], expected: 3 },
  ],
};
