import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-homogenous-substrings',
  title: 'Count Number of Homogenous Substrings',
  difficulty: 'medium',
  tags: ['strings', 'math'],
  description: `A string is **homogenous** if all of its characters are the same (e.g., \`"aa"\`, \`"b"\`, \`"ccc"\`).

Given a string \`s\`, return the number of homogenous substrings of \`s\` modulo \`10^9 + 7\`.

A **substring** is a contiguous sequence of characters within a string.`,
  constraints: [
    '1 <= s.length <= 10^5',
    's consists of lowercase English letters only',
  ],
  examples: [
    {
      input: 's = "abbcccaa"',
      output: '13',
      explanation:
        'Runs: "a"→1 (1 substring), "bb"→2 (3 substrings), "ccc"→3 (6 substrings), "aa"→2 (3 substrings). Total = 1+3+6+3 = 13.',
    },
    {
      input: 's = "xy"',
      output: '2',
      explanation: 'Each character forms one run of length 1: 1+1 = 2.',
    },
    {
      input: 's = "zzzzz"',
      output: '15',
      explanation: 'One run of length 5: 5*6/2 = 15.',
    },
  ],
  functionName: 'countHomogenous',
  params: ['s'],
  starterCode: {
    javascript: 'function countHomogenous(s) {\n  \n}\n',
    python: 'def countHomogenous(s):\n    pass\n',
  },
  visibleTests: [
    { args: ['abbcccaa'], expected: 13 },
    { args: ['xy'], expected: 2 },
    { args: ['zzzzz'], expected: 15 },
  ],
  hiddenTests: [
    { args: ['a'], expected: 1 },
    { args: ['aab'], expected: 4 },
    { args: ['abcd'], expected: 4 },
    { args: ['aaaaaa'], expected: 21 },
    { args: ['aabb'], expected: 6 },
  ],
  hints: [
    'Group consecutive identical characters into runs. For a run of length k, add k*(k+1)/2 to the answer.',
    'Remember to take the result modulo 10^9 + 7.',
  ],
};
