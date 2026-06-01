import type { Problem } from '../types';

export const problem: Problem = {
  id: 'existence-of-a-substring-in-a-string-and-its-reverse',
  title: 'Existence of a Substring in a String and Its Reverse',
  difficulty: 'easy',
  tags: ['strings', 'hash-map'],
  description: `Given a string \`s\`, return \`true\` if any **two-character** substring of \`s\` also appears in the **reverse** of \`s\`, and \`false\` otherwise.

A **substring** is a contiguous non-empty sequence of characters within a string.`,
  constraints: [
    '1 <= s.length <= 100',
    's consists only of lowercase English letters.',
  ],
  examples: [
    {
      input: 's = "leetcode"',
      output: 'true',
      explanation: 'The substring "ee" (positions 1–2) appears in both "leetcode" and its reverse "edocteel".',
    },
    {
      input: 's = "abcd"',
      output: 'false',
      explanation: 'Two-char substrings of "abcd": "ab","bc","cd". Two-char substrings of its reverse "dcba": "dc","cb","ba". No overlap.',
    },
    {
      input: 's = "a"',
      output: 'false',
      explanation: 'A single character has no two-character substrings.',
    },
  ],
  hints: [
    'Build a Set of all two-character substrings of the reversed string.',
    'Then scan s from left to right: for each index i, check if s[i..i+1] is in that set.',
    'Return true as soon as you find a match, or false after scanning all positions.',
  ],
  functionName: 'isSubstringPresent',
  params: ['s'],
  starterCode: {
    javascript: `function isSubstringPresent(s) {\n\n}`,
    typescript: `function isSubstringPresent(s: string): boolean {

}`,
    python: `def isSubstringPresent(s: str) -> bool:\n    pass`,
  },
  visibleTests: [
    { args: ['leetcode'], expected: true },
    { args: ['abcd'], expected: false },
    { args: ['a'], expected: false },
  ],
  hiddenTests: [
    // repeated character — "aa" in both
    { args: ['aa'], expected: true },
    // two chars, reversed is mirror — no overlap
    { args: ['ab'], expected: false },
    // "aa" appears in s and reversed "baa"
    { args: ['aab'], expected: true },
    // no overlap
    { args: ['xyz'], expected: false },
    // "aa" and "bb" both appear in s and reversed "bbaa"
    { args: ['aabb'], expected: true },
    // palindrome — s == reversed(s), every 2-char substring matches
    { args: ['abba'], expected: true },
    // no overlap between substrings and reversed substrings
    { args: ['xyzab'], expected: false },
    // "aa" appears in both s and reversed "cbaa"
    { args: ['aabc'], expected: true },
    // interleaved — "ab" appears in both s and reversed "baba"
    { args: ['abab'], expected: true },
    // all distinct letters, reversed has different 2-char pairs
    { args: ['abcde'], expected: false },
  ],
};
