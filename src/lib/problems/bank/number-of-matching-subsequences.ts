import type { Problem } from '../types';

export const problem: Problem = {
  id: 'number-of-matching-subsequences',
  title: 'Number of Matching Subsequences',
  difficulty: 'medium',
  tags: ['strings', 'hash-map', 'binary-search'],
  description: `Given a string \`s\` and an array of strings \`words\`, return *the number of* \`words[i]\` *that is a subsequence of* \`s\`.

A **subsequence** of a string is a new string generated from the original string with some characters (can be none) deleted without changing the relative order of the remaining characters.`,
  constraints: [
    '1 <= s.length <= 5 * 10^4',
    '1 <= words.length <= 5000',
    '1 <= words[i].length <= 50',
    's and words[i] consist only of lowercase English letters',
  ],
  examples: [
    {
      input: 's = "abcde", words = ["a","bb","acd","ace"]',
      output: '3',
      explanation: '"a", "acd", and "ace" are subsequences of "abcde". "bb" is not.',
    },
    {
      input: 's = "dsahjpjauf", words = ["ahjpjau","ja","ahbwzgqnuk","tnmlanowax"]',
      output: '2',
      explanation: '"ahjpjau" and "ja" are subsequences of "dsahjpjauf".',
    },
  ],
  hints: [
    'For each word, check if it is a subsequence of s using two pointers.',
    'Use one pointer for s and one for the word; advance the word pointer whenever characters match.',
    'If the word pointer reaches the end of the word, it is a subsequence.',
  ],
  functionName: 'numMatchingSubseq',
  params: ['s', 'words'],
  starterCode: {
    javascript: `function numMatchingSubseq(s, words) {

}`,
    python: `def numMatchingSubseq(s: str, words: list[str]) -> int:
    pass`,
  },
  visibleTests: [
    { args: ['abcde', ['a', 'bb', 'acd', 'ace']], expected: 3 },
    { args: ['dsahjpjauf', ['ahjpjau', 'ja', 'ahbwzgqnuk', 'tnmlanowax']], expected: 2 },
  ],
  hiddenTests: [
    { args: ['a', ['a', 'a', 'a']], expected: 3 },
    { args: ['b', ['a']], expected: 0 },
    { args: ['abc', ['a', 'b', 'c', 'ab', 'bc', 'abc']], expected: 6 },
    { args: ['abcdefghijklmnopqrstuvwxyz', ['z', 'az', 'bz', 'xyz']], expected: 4 },
  ],
};
