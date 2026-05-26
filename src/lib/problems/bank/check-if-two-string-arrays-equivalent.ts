import type { Problem } from '../types';

export const problem: Problem = {
  id: 'check-if-two-string-arrays-equivalent',
  title: 'Check if Two String Arrays are Equivalent',
  difficulty: 'easy',
  tags: ['strings'],
  description: `Given two string arrays \`word1\` and \`word2\`, return \`true\` if the two arrays **represent** the same string, and \`false\` otherwise.

A string is **represented** by an array if the array elements concatenated **in order** forms the string.`,
  constraints: [
    '`1 <= word1.length, word2.length <= 10^3`',
    '`1 <= word1[i].length, word2[i].length <= 10^3`',
    '`1 <= sum(word1[i].length) <= 10^3`',
    '`1 <= sum(word2[i].length) <= 10^3`',
    '`word1[i]` and `word2[i]` consist of lowercase letters.',
  ],
  examples: [
    {
      input: 'word1 = ["ab", "c"], word2 = ["a", "bc"]',
      output: 'true',
      explanation: 'word1 represents "abc", word2 represents "abc".',
    },
    {
      input: 'word1 = ["a", "cb"], word2 = ["ab", "c"]',
      output: 'false',
    },
  ],
  hints: [
    'Concatenate all strings in each array and compare the resulting strings.',
    'Join both arrays into single strings and compare: `word1.join(\'\') === word2.join(\'\')`.',
    '`return word1.join(\'\') === word2.join(\'\');`'
  ],
  functionName: 'arrayStringsAreEqual',
  params: ['word1', 'word2'],
  starterCode: {
    javascript: `function arrayStringsAreEqual(word1, word2) {

}`,
    python: `def arrayStringsAreEqual(word1, word2):
    pass`,
  },
  visibleTests: [
    { args: [['ab', 'c'], ['a', 'bc']], expected: true },
    { args: [['a', 'cb'], ['ab', 'c']], expected: false },
  ],
  hiddenTests: [
    { args: [['abc'], ['a', 'b', 'c']], expected: true },
    { args: [['abc'], ['abc']], expected: true },
    { args: [['a'], ['b']], expected: false },
    { args: [['ab', 'c'], ['abc']], expected: true },
    { args: [['x', 'y', 'z'], ['xyz']], expected: true },
    { args: [['hello'], ['hell', 'o']], expected: true },
  ],
};
