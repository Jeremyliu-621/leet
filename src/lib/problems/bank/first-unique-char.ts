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
  hints: [
    'You need each character\'s *frequency* across the whole string before you can decide which one appears exactly once. A single pass cannot answer this — why?',
    'Use a `Map<string, number>` to count occurrences in a **first** pass over the string. Then make a **second** pass to find the earliest index whose character has a count of exactly 1.',
    'Pass 1: `for (const ch of text) freq.set(ch, (freq.get(ch) ?? 0) + 1)`. Pass 2: `for (let i = 0; i < text.length; i++) if (freq.get(text[i]) === 1) return i`. If nothing qualifies, return -1.',
  ],
  functionName: 'firstUniqueChar',
  params: ['text'],
  starterCode: {
    javascript: 'function firstUniqueChar(text) {\n  // your code here\n}\n',
    typescript: "function firstUniqueChar(text: string): number {\n  // your code here\n}",

    python: 'def firstUniqueChar(text):\n    # your code here\n    pass\n',
  },
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
