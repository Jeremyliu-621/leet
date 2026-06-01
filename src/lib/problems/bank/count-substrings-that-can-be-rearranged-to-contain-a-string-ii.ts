import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-substrings-that-can-be-rearranged-to-contain-a-string-ii',
  title: 'Count Substrings That Can Be Rearranged to Contain a String II',
  difficulty: 'hard',
  tags: ['strings', 'sliding-window', 'hash-map'],
  description: `You are given two strings \`word1\` and \`word2\`.

A string \`x\` is called **valid** if \`x\` can be rearranged to have \`word2\` as a prefix. Equivalently, \`x\` is valid if and only if the frequency of every character \`c\` in \`x\` is at least the frequency of \`c\` in \`word2\`.

Return the **total number of valid substrings** of \`word1\`.

Since the answer may be very large, return it **modulo \`10^9 + 7\`**.`,
  constraints: [
    '1 <= word1.length <= 10^6',
    '1 <= word2.length <= 10^4',
    'word1 and word2 consist only of lowercase English letters.',
  ],
  examples: [
    {
      input: 'word1 = "bcca", word2 = "abc"',
      output: '1',
      explanation: 'Only "bcca" (whole string) contains ≥1 a, ≥1 b, ≥1 c.',
    },
    {
      input: 'word1 = "abbc", word2 = "ab"',
      output: '3',
      explanation: 'Valid substrings: "ab"(0-1), "abb"(0-2), "abbc"(0-3). Each has ≥1 a and ≥1 b.',
    },
    {
      input: 'word1 = "aaaa", word2 = "aa"',
      output: '6',
      explanation: 'Need ≥2 a\'s. Substrings of length ≥2 all qualify: C(4,2)+C(4,1)... actually: [0,1],[0,2],[0,3],[1,2],[1,3],[2,3] = 6.',
    },
  ],
  hints: [
    'Use a sliding window: for each right pointer, maintain a minimum left pointer such that [left..right] is valid (contains the full multiset of word2).',
    'Track "satisfied": count of distinct characters in word2 whose frequency requirement is fully met by the window.',
    'When satisfied == needed, shrink left as long as the leftmost character has surplus (more than required). Then count += (left + 1).',
    'Every substring [0..right], [1..right], ..., [left..right] is valid — that\'s left+1 valid substrings ending at right.',
  ],
  functionName: 'countSubstrings',
  params: ['word1', 'word2'],
  starterCode: {
    javascript: `function countSubstrings(word1, word2) {
  const MOD = 1000000007n;
  const need = {};
  for (const c of word2) need[c] = (need[c] || 0) + 1;
  const needCount = Object.keys(need).length;
  const have = {};
  let satisfied = 0, left = 0, result = 0n;
  for (let right = 0; right < word1.length; right++) {
    const c = word1[right];
    if (need[c]) {
      have[c] = (have[c] || 0) + 1;
      if (have[c] === need[c]) satisfied++;
    }
    while (satisfied === needCount) {
      const lc = word1[left];
      if (need[lc] && have[lc] === need[lc]) break;
      if (need[lc]) have[lc]--;
      left++;
    }
    if (satisfied === needCount) result = (result + BigInt(left + 1)) % MOD;
  }
  return Number(result);
}`,
    typescript: `function countSubstrings(word1: string, word2: string): number {
  const MOD = 1000000007n;
  const need: Record<string, number> = {};
  for (const c of word2) need[c] = (need[c] ?? 0) + 1;
  const needCount = Object.keys(need).length;
  const have: Record<string, number> = {};
  let satisfied = 0, left = 0, result = 0n;
  for (let right = 0; right < word1.length; right++) {
    const c = word1[right]!;
    if (need[c]) {
      have[c] = (have[c] ?? 0) + 1;
      if (have[c] === need[c]) satisfied++;
    }
    while (satisfied === needCount) {
      const lc = word1[left]!;
      if (need[lc] && have[lc] === need[lc]) break;
      if (need[lc]) have[lc] = (have[lc] ?? 0) - 1;
      left++;
    }
    if (satisfied === needCount) result = (result + BigInt(left + 1)) % MOD;
  }
  return Number(result);
}`,
    python: `def countSubstrings(word1, word2):
    from collections import Counter
    MOD = 10**9 + 7
    need = Counter(word2)
    need_count = len(need)
    have = {}
    satisfied = 0
    left = 0
    result = 0
    for right, c in enumerate(word1):
        if c in need:
            have[c] = have.get(c, 0) + 1
            if have[c] == need[c]:
                satisfied += 1
        while satisfied == need_count:
            lc = word1[left]
            if lc in need and have.get(lc, 0) == need[lc]:
                break
            if lc in need:
                have[lc] -= 1
            left += 1
        if satisfied == need_count:
            result = (result + left + 1) % MOD
    return result`,
  },
  visibleTests: [
    { args: ['bcca', 'abc'], expected: 1 },
    { args: ['abbc', 'ab'], expected: 3 },
    { args: ['aaaa', 'aa'], expected: 6 },
  ],
  hiddenTests: [
    { args: ['a', 'a'], expected: 1 },
    { args: ['ab', 'ba'], expected: 1 },
    { args: ['aaaa', 'a'], expected: 10 },
    { args: ['abc', 'abc'], expected: 1 },
    { args: ['abcabc', 'abc'], expected: 10 },
  ],
};
