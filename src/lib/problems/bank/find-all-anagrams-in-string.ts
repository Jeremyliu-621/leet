import type { Problem } from '../types';

export const problem: Problem = {
  id: 'find-all-anagrams-in-string',
  title: 'Find All Anagram Start Positions',
  difficulty: 'medium',
  tags: ['strings', 'hash-map', 'sliding-window'],
  description: `Given two strings \`s\` and \`p\`, return a sorted array of all start indices where an anagram of \`p\` begins in \`s\`.

An **anagram** of \`p\` is any string formed by rearranging all the characters of \`p\`. Indices are 0-based.`,
  constraints: [
    '1 <= p.length <= s.length <= 1000',
    's and p consist of lowercase English letters only.',
  ],
  examples: [
    {
      input: 's = "cbaebabacd", p = "abc"',
      output: '[0,6]',
      explanation: 'Substring at index 0 is "cba" (anagram of "abc"). Substring at index 6 is "bac" (anagram of "abc").',
    },
    {
      input: 's = "abab", p = "ab"',
      output: '[0,1,2]',
      explanation: '"ab" at 0, "ba" at 1, "ab" at 2 are all anagrams of "ab".',
    },
    {
      input: 's = "aa", p = "bb"',
      output: '[]',
      explanation: 'No anagram of "bb" exists in "aa".',
    },
  ],
  hints: [
    'Level 1: Use a sliding window of exactly length p.length over s. At each position, check whether the window is an anagram of p.',
    'Level 2: Instead of recomputing the frequency map from scratch each step, maintain a running window frequency map. When the window slides, decrement the count for the outgoing character and increment for the incoming one. Compare to the frequency map of p.',
    'Level 3: `const pFreq = {}; for (const c of p) pFreq[c] = (pFreq[c] ?? 0) + 1; const wFreq = {}; const result = []; for (let i = 0; i < s.length; i++) { wFreq[s[i]] = (wFreq[s[i]] ?? 0) + 1; if (i >= p.length) { const out = s[i - p.length]; wFreq[out]--; if (!wFreq[out]) delete wFreq[out]; } if (JSON.stringify(wFreq) === JSON.stringify(pFreq)) result.push(i - p.length + 1); } return result;`',
  ],
  functionName: 'findAllAnagrams',
  params: ['s', 'p'],
  starterCode: {
    javascript: 'function findAllAnagrams(s, p) {\n  // your code here\n}\n',
    python: 'def findAllAnagrams(s, p):\n    # your code here\n    pass\n',
  },
  visibleTests: [
    { args: ['cbaebabacd', 'abc'], expected: [0, 6] },
    { args: ['abab', 'ab'], expected: [0, 1, 2] },
    { args: ['aa', 'bb'], expected: [] },
  ],
  hiddenTests: [
    { args: ['aaa', 'a'], expected: [0, 1, 2] },
    { args: ['abcabc', 'abc'], expected: [0, 1, 2, 3] },
    { args: ['xyz', 'zyx'], expected: [0] },
    { args: ['hello', 'oell'], expected: [1] },
    { args: ['aaaaaaa', 'aaa'], expected: [0, 1, 2, 3, 4] },
  ],
};
