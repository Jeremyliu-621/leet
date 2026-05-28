import type { Problem } from '../types';

export const problem: Problem = {
  id: 'determine-if-two-strings-are-close',
  title: 'Determine if Two Strings Are Close',
  difficulty: 'medium',
  tags: ['strings', 'hash-map'],
  description: `Two strings are considered **close** if you can attain one from the other using the following operations:

- **Operation 1:** Swap any two **existing** characters. For example, \`abcde -> aecdb\`.
- **Operation 2:** Transform every occurrence of one **existing** character into another **existing** character, and do the same with the other character. For example, \`aacabb -> bbcbaa\` (all \`a\`s turn into \`b\`s, and all \`b\`s turn into \`a\`s).

You can use the operations on either string as many times as necessary.

Given two strings \`word1\` and \`word2\`, return \`true\` if \`word1\` and \`word2\` are **close**, and \`false\` otherwise.`,
  constraints: [
    '1 <= word1.length, word2.length <= 10^5',
    'word1 and word2 contain only lowercase English letters.',
  ],
  examples: [
    {
      input: 'word1 = "abc", word2 = "bca"',
      output: 'true',
      explanation: 'Apply Operation 1 twice to get "abc" -> "bca".',
    },
    {
      input: 'word1 = "a", word2 = "aa"',
      output: 'false',
      explanation: 'Different lengths, impossible.',
    },
    {
      input: 'word1 = "cabbba", word2 = "abbccc"',
      output: 'true',
      explanation: 'Both have chars {a,b,c}, and frequency multisets {1,2,3} match after sorting.',
    },
  ],
  hints: [
    'Operation 1 allows any permutation of characters. Operation 2 allows swapping frequency values between characters.',
    'Two strings are close if they have the same set of distinct characters AND the same multiset of character frequencies.',
    'Check: (1) same character set, (2) sorted frequency arrays are equal.',
  ],
  functionName: 'closeStrings',
  params: ['word1', 'word2'],
  starterCode: {
    javascript: 'function closeStrings(word1, word2) {\n\n}\n',
    typescript: "function closeStrings(word1: string, word2: string): boolean {\n\n}",

    python: 'def closeStrings(word1: str, word2: str) -> bool:\n    pass\n',
  },
  visibleTests: [
    { args: ['abc', 'bca'], expected: true },
    { args: ['a', 'aa'], expected: false },
    { args: ['cabbba', 'abbccc'], expected: true },
  ],
  hiddenTests: [
    { args: ['cabbba', 'aabbss'], expected: false },
    { args: ['aaabbb', 'aabbbb'], expected: false },
    { args: ['aab', 'bba'], expected: true },
    { args: ['z', 'z'], expected: true },
  ],
};
