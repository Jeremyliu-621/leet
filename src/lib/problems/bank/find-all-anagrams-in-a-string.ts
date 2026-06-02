import type { Problem } from '../types';

export const problem: Problem = {
  id: 'find-all-anagrams-in-a-string',
  title: 'Find All Anagrams in a String',
  difficulty: 'medium',
  tags: ['strings', 'sliding-window', 'hash-map'],
  description: `Given two strings \`s\` and \`p\`, return an array of all the start indices of \`p\`'s anagrams in \`s\`. You may return the answer in **any order**.

An **anagram** is a string formed by rearranging the letters of another, using all original letters exactly once.`,
  constraints: [
    '`1 <= s.length, p.length <= 3 × 10⁴`',
    '`s` and `p` consist of lowercase English letters',
  ],
  examples: [
    {
      input: 's = "cbaebabacd", p = "abc"',
      output: '[0,6]',
      explanation: 'Anagram at index 0: "cba". Anagram at index 6: "bac".',
    },
    {
      input: 's = "abab", p = "ab"',
      output: '[0,1,2]',
      explanation: 'Anagrams at indices 0 ("ab"), 1 ("ba"), and 2 ("ab").',
    },
  ],
  hints: [
    'Use a sliding window of length `p.length`. Maintain character frequency counts for the window and for `p`.',
    'When the window slides, decrement the count for the character leaving and increment for the character entering.',
    'Compare the two frequency maps to check if the window is an anagram. A match in all 26 frequencies means an anagram.',
  ],
  functionName: 'findAnagrams',
  params: ['s', 'p'],
  starterCode: {
    javascript: `function findAnagrams(s, p) {
  const pFreq = new Array(26).fill(0);
  const wFreq = new Array(26).fill(0);
  const a = 'a'.charCodeAt(0);
  for (const c of p) pFreq[c.charCodeAt(0) - a]++;
  const result = [];
  for (let i = 0; i < s.length; i++) {
    wFreq[s.charCodeAt(i) - a]++;
    if (i >= p.length) wFreq[s.charCodeAt(i - p.length) - a]--;
    if (i >= p.length - 1 && pFreq.every((v, j) => v === wFreq[j])) result.push(i - p.length + 1);
  }
  return result;
}`,
    typescript: `function findAnagrams(s: string, p: string): number[] {
  const pFreq = new Array<number>(26).fill(0);
  const wFreq = new Array<number>(26).fill(0);
  const a = 'a'.charCodeAt(0);
  for (const c of p) pFreq[c.charCodeAt(0) - a]!++;
  const result: number[] = [];
  for (let i = 0; i < s.length; i++) {
    wFreq[s.charCodeAt(i) - a]!++;
    if (i >= p.length) wFreq[s.charCodeAt(i - p.length) - a]!--;
    if (i >= p.length - 1 && pFreq.every((v, j) => v === wFreq[j]!)) result.push(i - p.length + 1);
  }
  return result;
}`,
    python: `def findAnagrams(s, p):
    from collections import Counter
    p_cnt = Counter(p)
    w_cnt = Counter(s[:len(p)])
    result = [0] if w_cnt == p_cnt else []
    for i in range(len(p), len(s)):
        w_cnt[s[i]] += 1
        old = s[i - len(p)]
        w_cnt[old] -= 1
        if w_cnt[old] == 0: del w_cnt[old]
        if w_cnt == p_cnt: result.append(i - len(p) + 1)
    return result`,
  },
  visibleTests: [
    { args: ['cbaebabacd', 'abc'], expected: [0, 6] },
    { args: ['abab', 'ab'], expected: [0, 1, 2] },
  ],
  hiddenTests: [
    { args: ['a', 'a'], expected: [0] },
    { args: ['aa', 'bb'], expected: [] },
    { args: ['baa', 'aa'], expected: [1] },
    { args: ['aaaaaaaaaa', 'aaaa'], expected: [0, 1, 2, 3, 4, 5, 6] },
  ],
};
