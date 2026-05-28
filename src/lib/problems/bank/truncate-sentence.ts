import type { Problem } from '../types';

export const problem: Problem = {
  id: 'truncate-sentence',
  title: 'Truncate Sentence',
  difficulty: 'easy',
  tags: ['strings'],
  description: `A **sentence** is a list of words that are separated by a single space with no leading or trailing spaces. Each of the words consists of **only** uppercase and lowercase English letters (no punctuation).

You are given a sentence \`s\` and an integer \`k\`. You want to **truncate** \`s\` such that it contains only the **first** \`k\` words. Return \`s\` after **truncating** it.`,
  constraints: [
    '1 <= s.length <= 500',
    'k is in the range [1, the number of words in s]',
    's consists of only lowercase and uppercase English letters and spaces',
    'The words in s are separated by a single space',
    'There are no leading or trailing spaces',
  ],
  examples: [
    {
      input: 's = "Hello how are you Contestant", k = 4',
      output: '"Hello how are you"',
      explanation: 'The first 4 words are "Hello", "how", "are", "you".',
    },
    {
      input: 's = "What is the solution to this problem", k = 4',
      output: '"What is the solution"',
    },
    {
      input: 's = "chopper is not a tanuki", k = 5',
      output: '"chopper is not a tanuki"',
    },
  ],
  hints: [
    'Split the sentence by spaces, take the first k words, and join them back with spaces.',
    'Split `s` by spaces, take the first `k` words, and join them back with spaces.',
    '`return s.split(\' \').slice(0, k).join(\' \');`'
  ],
  functionName: 'truncateSentence',
  params: ['s', 'k'],
  starterCode: {
    javascript: 'function truncateSentence(s, k) {\n  \n}\n',
    typescript: "function truncateSentence(s: string, k: number): string {\n  \n}",

    python: 'def truncateSentence(s, k):\n    pass\n',
  },
  visibleTests: [
    { args: ['Hello how are you Contestant', 4], expected: 'Hello how are you' },
    { args: ['What is the solution to this problem', 4], expected: 'What is the solution' },
    { args: ['chopper is not a tanuki', 5], expected: 'chopper is not a tanuki' },
  ],
  hiddenTests: [
    { args: ['a b c d e', 1], expected: 'a' },
    { args: ['Hello World', 2], expected: 'Hello World' },
    { args: ['one two three', 2], expected: 'one two' },
    { args: ['coding is fun', 3], expected: 'coding is fun' },
    { args: ['Alice is a good student', 3], expected: 'Alice is a' },
    { args: ['The quick brown fox', 2], expected: 'The quick' },
  ],
};
