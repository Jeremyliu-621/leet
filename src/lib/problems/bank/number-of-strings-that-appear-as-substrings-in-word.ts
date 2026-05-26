import type { Problem } from '../types';

export const problem: Problem = {
  id: 'number-of-strings-that-appear-as-substrings-in-word',
  title: 'Number of Strings That Appear as Substrings in Word',
  difficulty: 'easy',
  tags: ['strings'],
  description: `Given an array of strings \`patterns\` and a string \`word\`, return *the **number** of strings in \`patterns\` that exist as a **substring** in \`word\`*.

A **substring** is a contiguous sequence of characters within a string.`,
  constraints: [
    '`1 <= patterns.length <= 100`',
    '`1 <= patterns[i].length <= 100`',
    '`1 <= word.length <= 100`',
    '`patterns[i]` and `word` consist of lowercase English letters.',
  ],
  examples: [
    {
      input: 'patterns = ["a","abc","bc","d"], word = "abc"',
      output: '3',
      explanation: '"a" is a substring of "abc". "abc" is a substring of "abc". "bc" is a substring of "abc". "d" is not. Count = 3.',
    },
    {
      input: 'patterns = ["a","b","c"], word = "aaaaabbbbb"',
      output: '2',
      explanation: '"a" and "b" are substrings of "aaaaabbbbb". "c" is not. Count = 2.',
    },
  ],
  hints: [
    'For each pattern, check if it appears in word using built-in string search (includes/indexOf/in operator).',
  ],
  functionName: 'numOfStrings',
  params: ['patterns', 'word'],
  starterCode: {
    javascript: `function numOfStrings(patterns, word) {

}`,
    python: `def numOfStrings(patterns, word):
    pass`,
  },
  visibleTests: [
    { args: [['a', 'abc', 'bc', 'd'], 'abc'], expected: 3 },
    { args: [['a', 'b', 'c'], 'aaaaabbbbb'], expected: 2 },
  ],
  hiddenTests: [
    { args: [['a'], 'a'], expected: 1 },
    { args: [['z'], 'abc'], expected: 0 },
    { args: [['ab', 'cd', 'ef'], 'abcdef'], expected: 3 },
    { args: [['hello', 'world'], 'helloworld'], expected: 2 },
    { args: [['x', 'y', 'z'], 'xyz'], expected: 3 },
    { args: [['ab', 'ba'], 'aabb'], expected: 1 },
  ],
};
