import type { Problem } from '../types';

export const problem: Problem = {
  id: 'check-if-two-string-arrays-are-equivalent',
  title: 'Check If Two String Arrays are Equivalent',
  difficulty: 'easy',
  tags: ['strings', 'arrays'],
  description: `Given two string arrays \`word1\` and \`word2\`, return \`true\` if the two arrays **represent** the same string, and \`false\` otherwise.

A string is **represented** by an array if the array elements concatenated **in order** forms the string.`,
  constraints: [
    '1 <= word1.length, word2.length <= 10^3',
    '1 <= word1[i].length, word2[i].length <= 10^3',
    '1 <= sum(word1[i].length), sum(word2[i].length) <= 10^3',
    'word1[i] and word2[i] consist of lowercase letters.',
  ],
  examples: [
    {
      input: 'word1 = ["ab", "c"], word2 = ["a", "bc"]',
      output: 'true',
      explanation: 'word1 concatenates to "abc". word2 concatenates to "abc". They are equal.',
    },
    {
      input: 'word1 = ["a", "cb"], word2 = ["ab", "c"]',
      output: 'false',
      explanation: 'word1 = "acb", word2 = "abc". Not equal.',
    },
    {
      input: 'word1 = ["abc", "d", "defg"], word2 = ["abcddefg"]',
      output: 'true',
      explanation: 'Both concatenate to "abcddefg".',
    },
  ],
  hints: [
    'Concatenate all strings in each array and compare.',
    'In JavaScript: `word1.join("") === word2.join("")`.',
    'In Python: `"".join(word1) == "".join(word2)`.',
  ],
  functionName: 'arrayStringsAreEqual',
  params: ['word1', 'word2'],
  starterCode: {
    javascript: `function arrayStringsAreEqual(word1, word2) {

}`,
    typescript: "function arrayStringsAreEqual(word1: string[], word2: string[]): boolean {\n\n}",

    python: `def arrayStringsAreEqual(word1, word2):
    pass`,
  },
  visibleTests: [
    { args: [['ab', 'c'], ['a', 'bc']], expected: true },
    { args: [['a', 'cb'], ['ab', 'c']], expected: false },
    { args: [['abc', 'd', 'defg'], ['abcddefg']], expected: true },
  ],
  hiddenTests: [
    { args: [['a'], ['a']], expected: true },
    { args: [['a'], ['b']], expected: false },
    { args: [['hello', ' ', 'world'], ['hello world']], expected: true },
    { args: [['x', 'y', 'z'], ['xyz']], expected: true },
    { args: [['abc'], ['ab', 'c']], expected: true },
    { args: [['a', 'b'], ['b', 'a']], expected: false },
  ],
};
