import type { Problem } from '../types';

export const problem: Problem = {
  id: 'first-unique-char',
  title: 'First Non-Repeating Character',
  difficulty: 'easy',
  tags: ['hash-map'],
  description:
    'Given a string text, find the first character that appears exactly once in the string.\n\nScan the string from left to right and return the index of the earliest character whose total count in the string is one.\n\nIf every character repeats, or the string is empty, return -1.',
  constraints: [
    '0 <= text.length <= 1000',
    'text contains only lowercase English letters.',
  ],
  examples: [
    {
      input: 'text = "leetcode"',
      output: '0',
      explanation: '"l" is the first character that never repeats.',
    },
    {
      input: 'text = "aabb"',
      output: '-1',
      explanation: 'Every character repeats.',
    },
    {
      input: 'text = "swiss"',
      output: '1',
      explanation: '"w" at index 1 is the first unique character.',
    },
  ],
  functionName: 'firstUniqueChar',
  params: ['text'],
  starterCode: {
    javascript: 'function firstUniqueChar(text) {\n  // your code here\n}\n',
    python: 'def firstUniqueChar(text):\n    # your code here\n    pass\n',
  },
  hints: [
    'First pass: count occurrences of each character using a Map (or a 26-element frequency array for lowercase letters).',
    'Second pass: iterate the string left to right and return the index of the first character whose count equals 1.',
    'If no unique character is found, return -1. An empty string should immediately return -1.',
  ],
  visibleTests: [
    { args: ['leetcode'], expected: 0 },
    { args: ['aabb'], expected: -1 },
    { args: ['swiss'], expected: 1 },
  ],
  hiddenTests: [
    { args: [''], expected: -1 },
    { args: ['z'], expected: 0 },
    { args: ['aabbc'], expected: 4 },
    { args: ['abcabc'], expected: -1 },
    { args: ['xxyz'], expected: 2 },
    { args: ['aabbccd'], expected: 6 },
  ],
};
