import type { Problem } from '../types';

export const problem: Problem = {
  id: 'check-whether-two-string-arrays-equal',
  title: 'Check Whether Two String Arrays are Equivalent',
  difficulty: 'easy',
  tags: ['strings'],
  description: `Given two string arrays \`word1\` and \`word2\`, return \`true\` if the two arrays **represent** the same string, and \`false\` otherwise.

A string is **represented** by an array if the array elements concatenated **in order** forms the string.`,
  constraints: [
    '1 <= word1.length, word2.length <= 10^3',
    '1 <= word1[i].length, word2[i].length <= 10^3',
    '1 <= sum(word1[i].length), sum(word2[i].length) <= 10^3',
    'word1[i] and word2[i] consist of lowercase English letters.',
  ],
  examples: [
    {
      input: 'word1 = ["ab","c"], word2 = ["a","bc"]',
      output: 'true',
      explanation: '"ab"+"c"="abc" and "a"+"bc"="abc" are equal.',
    },
    {
      input: 'word1 = ["a","cb"], word2 = ["ab","c"]',
      output: 'false',
      explanation: '"a"+"cb"="acb" ≠ "ab"+"c"="abc".',
    },
  ],
  hints: [
    'Concatenate each array into a single string, then compare.',
    'Join each array into a single string and compare equality.',
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
    { args: [['x'], ['y']], expected: false },
    { args: [[''], ['']], expected: true },
    { args: [['hello', 'world'], ['hellow', 'orld']], expected: true },
  ],
};
