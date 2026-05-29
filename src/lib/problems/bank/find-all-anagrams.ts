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
    javascript: 'function findAnagrams(s, p) {\n  // your code here\n}\n',
    typescript: 'function findAnagrams(s: string, p: string): number[] {\n  // your code here\n}',
    python: 'def findAnagrams(s, p):\n    # your code here\n    pass\n',
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
