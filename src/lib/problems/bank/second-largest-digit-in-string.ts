import type { Problem } from '../types';

export const problem: Problem = {
  id: 'second-largest-digit-in-string',
  title: 'Second Largest Digit in a String',
  difficulty: 'easy',
  tags: ['strings'],
  description: `Given an alphanumeric string \`s\`, return the **second largest** numerical digit that appears in \`s\`, or \`-1\` if it does not exist.

An **alphanumeric** string is a string consisting of lowercase English letters and digits.`,
  constraints: [
    '1 <= s.length <= 500',
    's consists of only lowercase English letters and digits.',
  ],
  examples: [
    {
      input: 's = "dfa12321afd"',
      output: '2',
      explanation: 'Digits: 1, 2, 3. Second largest is 2.',
    },
    {
      input: 's = "abc1111"',
      output: '-1',
      explanation: 'Only digit is 1; no second distinct digit.',
    },
  ],
  hints: [
    'Collect all distinct digits from the string.',
    'Return the second largest, or -1 if fewer than 2 distinct digits exist.',
  ],
  functionName: 'secondHighest',
  params: ['s'],
  starterCode: {
    javascript: 'function secondHighest(s) {\n\n}\n',
    python: 'def secondHighest(s):\n    pass\n',
  },
  visibleTests: [
    { args: ['dfa12321afd'], expected: 2 },
    { args: ['abc1111'], expected: -1 },
  ],
  hiddenTests: [
    { args: ['sjhtz159'], expected: 5 },
    { args: ['9876543210'], expected: 8 },
    { args: ['a'], expected: -1 },
    { args: ['z9'], expected: -1 },
  ],
};
