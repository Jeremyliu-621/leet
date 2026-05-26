import type { Problem } from '../types';

export const problem: Problem = {
  id: 'longest-equal-run',
  title: 'Longest Run Of Equal Characters',
  difficulty: 'easy',
  tags: ['sliding-window'],
  description:
    'Given a string text, find the length of the longest stretch of consecutive identical characters.\n\nA growing window tracks the current run: extend it while the next character matches, and start a fresh window when a different character appears.\n\nReturn the length of the longest such run. An empty string has a longest run of 0.',
  constraints: [
    '0 <= text.length <= 1000',
    'text contains only lowercase English letters.',
  ],
  examples: [
    {
      input: 'text = "aabbbcc"',
      output: '3',
      explanation: 'The run "bbb" has length 3.',
    },
    {
      input: 'text = "abc"',
      output: '1',
      explanation: 'No character repeats, so the longest run is a single character.',
    },
    {
      input: 'text = "zzzz"',
      output: '4',
    },
  ],
  functionName: 'longestEqualRun',
  params: ['text'],
  starterCode: {
    javascript: 'function longestEqualRun(text) {\n  // your code here\n}\n',
    python: 'def longestEqualRun(text):\n    # your code here\n    pass\n',
  },
  hints: [
    'Iterate from left to right. Maintain a current run length and a max run length seen so far.',
    'When text[i] === text[i-1], increment the current run; otherwise reset the current run to 1.',
    'Update max at each step. Handle the empty string by initializing max to 0 and returning 0 immediately.',
  ],
  visibleTests: [
    { args: ['aabbbcc'], expected: 3 },
    { args: ['abc'], expected: 1 },
    { args: ['zzzz'], expected: 4 },
  ],
  hiddenTests: [
    { args: [''], expected: 0 },
    { args: ['a'], expected: 1 },
    { args: ['aabbaa'], expected: 2 },
    { args: ['mississippi'], expected: 2 },
    { args: ['xxxyzzz'], expected: 3 },
    { args: ['abcddddd'], expected: 5 },
  ],
};
