import type { Problem } from '../types';

export const problem: Problem = {
  id: 'valid-anagram',
  title: 'Valid Anagram',
  difficulty: 'easy',
  tags: ['hash-map', 'strings'],
  description: `Given two strings \`s\` and \`t\`, return \`true\` if \`t\` is an anagram of \`s\`, and \`false\` otherwise.

An **anagram** is a word or phrase formed by rearranging the letters of a different word or phrase, using all the original letters exactly once.`,
  examples: [
    { input: 's = "anagram", t = "nagaram"', output: 'true' },
    { input: 's = "rat", t = "car"', output: 'false' },
  ],
  constraints: [
    '1 <= s.length, t.length <= 5 * 10^4',
    's and t consist of lowercase English letters.',
  ],
  functionName: 'isAnagram',
  params: ['s', 't'],
  starterCode: {
    javascript: 'function isAnagram(s, t) {\n  // your code here\n}\n',
    python: 'def isAnagram(s, t):\n    # your code here\n    pass\n',
  },
  hints: [
    'If lengths differ, they cannot be anagrams.',
    'Count character frequencies for s, then decrement for t. If any count goes negative, return false.',
    'Alternatively, sort both strings and compare — O(n log n) but simpler.',
  ],
  visibleTests: [
    { args: ['anagram', 'nagaram'], expected: true },
    { args: ['rat', 'car'], expected: false },
    { args: ['a', 'a'], expected: true },
  ],
  hiddenTests: [
    { args: ['ab', 'a'], expected: false },
    { args: ['listen', 'silent'], expected: true },
    { args: ['hello', 'world'], expected: false },
    { args: ['aab', 'baa'], expected: true },
  ],
};
