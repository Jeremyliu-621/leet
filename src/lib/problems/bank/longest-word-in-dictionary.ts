import type { Problem } from '../types';

export const problem: Problem = {
  id: 'longest-word-in-dictionary',
  title: 'Longest Word in Dictionary',
  difficulty: 'medium',
  tags: ['hash-map'],
  description: `Given an array of strings \`words\` representing an English Dictionary, return the longest word in \`words\` that can be built one character at a time by other words in \`words\`.

If there is more than one possible answer, return the longest word with the smallest lexicographical order. If there is no answer, return \`""\`.

Note that the word should be built from shortest to longest, adding one character at a time. All intermediate prefixes must also be in \`words\`.`,
  constraints: [
    '1 <= words.length <= 1000',
    '1 <= words[i].length <= 30',
    'words[i] consists of lowercase English letters',
  ],
  examples: [
    {
      input: 'words = ["w","wo","wor","worl","world"]',
      output: '"world"',
      explanation: 'The word "world" can be built one character at a time: "w" → "wo" → "wor" → "worl" → "world".',
    },
    {
      input: 'words = ["a","banana","app","appl","ap","apply","apple"]',
      output: '"apple"',
      explanation: '"apple" can be built, and "apple" < "apply" lexicographically.',
    },
  ],
  hints: [
    'Store all words in a Set for O(1) lookup.',
    'Sort words by length (then lexicographically). For each word, check if every prefix (word[0..i-1]) is in the set.',
    'Track the longest valid word found, breaking ties by picking the lexicographically smaller one.',
  ],
  functionName: 'longestWord',
  params: ['words'],
  starterCode: {
    javascript: 'function longestWord(words) {\n  \n}\n',
    python: 'def longestWord(words):\n    pass\n',
  },
  visibleTests: [
    { args: [['w', 'wo', 'wor', 'worl', 'world']], expected: 'world' },
    { args: [['a', 'banana', 'app', 'appl', 'ap', 'apply', 'apple']], expected: 'apple' },
    { args: [['yo', 'ew', 'fc', 'zrc', 'yoeu', 'ewul', 'yoeufc', 'yoeufc']], expected: '' },
  ],
  hiddenTests: [
    { args: [['a']], expected: 'a' },
    { args: [['abc', 'ab', 'a']], expected: 'abc' },
    { args: [['ab', 'a', 'aa', 'aaa', 'aab']], expected: 'aaa' },
    { args: [['ts', 't', 'e', 'et', 'ets', 'etsh']], expected: 'etsh' },
  ],
};
