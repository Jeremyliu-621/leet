import type { Problem } from '../types';

export const problem: Problem = {
  id: 'maximum-length-substring-with-two-occurrences',
  title: 'Maximum Length Substring With Two Occurrences',
  difficulty: 'easy',
  tags: ['strings', 'sliding-window', 'hash-map'],
  description: `Given a string \`s\`, return the **maximum** length of a substring such that it contains **at most two occurrences** of each character.`,
  constraints: [
    '2 <= s.length <= 100',
    's consists only of lowercase English letters.',
  ],
  examples: [
    {
      input: 's = "bcbbbcba"',
      output: '4',
      explanation: 'The longest substring where every character appears at most twice is "bcbb" (length 4). "bcbbb" has \'b\' appearing 3 times.',
    },
    {
      input: 's = "aab"',
      output: '3',
      explanation: 'The whole string "aab" has \'a\' appearing twice and \'b\' once — all characters appear at most twice. Length = 3.',
    },
    {
      input: 's = "aaaa"',
      output: '2',
      explanation: 'The longest valid substring is "aa" (length 2). Any longer substring has \'a\' appearing more than twice.',
    },
  ],
  hints: [
    'Use a sliding window (two pointers) approach.',
    'Maintain a frequency map of characters in the current window.',
    'Shrink the left side whenever any character frequency exceeds 2.',
    'Track the maximum window size seen.',
  ],
  functionName: 'maximumLengthSubstring',
  params: ['s'],
  starterCode: {
    javascript: `function maximumLengthSubstring(s) {\n  \n}`,
    typescript: `function maximumLengthSubstring(s: string): number {\n  \n}`,
    python: `def maximumLengthSubstring(s):\n    `,
  },
  visibleTests: [
    { args: ['bcbbbcba'], expected: 4 },
    { args: ['aab'], expected: 3 },
    { args: ['aaaa'], expected: 2 },
  ],
  hiddenTests: [
    { args: ['bcbbbcba'], expected: 4 },
    { args: ['aab'], expected: 3 },
    { args: ['aaaa'], expected: 2 },
    { args: ['ab'], expected: 2 },
    { args: ['aabbcc'], expected: 6 },
    { args: ['abcabcabc'], expected: 6 },
    { args: ['aabbccdd'], expected: 8 },
    { args: ['zzzz'], expected: 2 },
  ],
};
