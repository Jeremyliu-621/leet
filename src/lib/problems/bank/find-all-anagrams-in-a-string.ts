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

}`,
    python: `def findAnagrams(s, p):
    pass`,
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
