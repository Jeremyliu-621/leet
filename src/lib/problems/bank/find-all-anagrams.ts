import type { Problem } from '../types';

export const problem: Problem = {
  id: 'find-all-anagrams',
  title: 'Find All Anagram Starting Indices',
  difficulty: 'medium',
  tags: ['strings', 'sliding-window', 'hash-map'],
  description: `Given strings \`s\` and \`p\`, return a **sorted** list of all starting indices in \`s\` where a substring of length \`p.length\` is an **anagram** of \`p\`.

An **anagram** is a rearrangement of all characters in a string — same characters, same frequencies, any order.`,
  constraints: [
    '1 <= s.length, p.length <= 3 * 10^4',
    's and p consist of lowercase English letters.',
  ],
  examples: [
    {
      input: 's = "cbaebabacd", p = "abc"',
      output: '[0, 6]',
      explanation: '"cba" starting at index 0 and "bac" starting at index 6 are both anagrams of "abc".',
    },
    {
      input: 's = "abab", p = "ab"',
      output: '[0, 1, 2]',
      explanation: '"ab", "ba", and "ab" (at indices 0, 1, 2) are all anagrams of "ab".',
    },
    {
      input: 's = "aa", p = "bb"',
      output: '[]',
      explanation: 'No substring of s is an anagram of "bb".',
    },
  ],
  hints: [
    'Use a fixed-size sliding window of length `p.length`. Keep a character-frequency map for `p` and another for the current window.',
    'Track a `matches` counter: the number of letters whose window frequency equals p\'s required frequency. The window is an anagram when `matches === 26`.',
    'Slide the window one step at a time: add the incoming character on the right, remove the outgoing character on the left, and update `matches` accordingly.',
  ],
  functionName: 'findAnagrams',
  params: ['s', 'p'],
  starterCode: {
    javascript: `function findAnagrams(s, p) {
  const n = s.length, m = p.length;
  if (m > n) return [];
  const pFreq = new Array(26).fill(0);
  const wFreq = new Array(26).fill(0);
  for (const c of p) pFreq[c.charCodeAt(0) - 97]++;
  const result = [];
  for (let r = 0; r < n; r++) {
    wFreq[s.charCodeAt(r) - 97]++;
    if (r >= m) wFreq[s.charCodeAt(r - m) - 97]--;
    if (r >= m - 1 && pFreq.every((v, i) => v === wFreq[i])) result.push(r - m + 1);
  }
  return result;
}`,
    typescript: `function findAnagrams(s: string, p: string): number[] {
  const n = s.length, m = p.length;
  if (m > n) return [];
  const pFreq: number[] = new Array(26).fill(0);
  const wFreq: number[] = new Array(26).fill(0);
  for (const c of p) pFreq[c.charCodeAt(0) - 97]!++;
  const result: number[] = [];
  for (let r = 0; r < n; r++) {
    wFreq[s.charCodeAt(r) - 97]!++;
    if (r >= m) wFreq[s.charCodeAt(r - m) - 97]!--;
    if (r >= m - 1 && pFreq.every((v, i) => v === wFreq[i]!)) result.push(r - m + 1);
  }
  return result;
}`,
    python: `def findAnagrams(s, p):
    if hasattr(s, 'to_py'): s = s.to_py()
    if hasattr(p, 'to_py'): p = p.to_py()
    n, m = len(s), len(p)
    if m > n: return []
    from collections import Counter
    p_freq = Counter(p)
    w_freq = Counter(s[:m])
    result = [0] if w_freq == p_freq else []
    for r in range(m, n):
        w_freq[s[r]] += 1
        w_freq[s[r - m]] -= 1
        if w_freq[s[r - m]] == 0: del w_freq[s[r - m]]
        if w_freq == p_freq: result.append(r - m + 1)
    return result`,
  },
  visibleTests: [
    { args: ['cbaebabacd', 'abc'], expected: [0, 6] },
    { args: ['abab', 'ab'], expected: [0, 1, 2] },
    { args: ['aa', 'bb'], expected: [] },
  ],
  hiddenTests: [
    { args: ['abc', 'abc'], expected: [0] },
    { args: ['baa', 'aa'], expected: [1] },
    { args: ['aaaaaaaaaa', 'aaa'], expected: [0, 1, 2, 3, 4, 5, 6, 7] },
    { args: ['abcdef', 'xyz'], expected: [] },
    { args: ['xyz', 'xyz'], expected: [0] },
  ],
};
