import type { Problem } from '../types';

export const problem: Problem = {
  id: 'maximum-score-from-removing-substrings',
  title: 'Maximum Score From Removing Substrings',
  difficulty: 'medium',
  tags: ['strings', 'stack'],
  description: `You are given a string \`s\` and two integers \`x\` and \`y\`. You can perform two types of operations any number of times.

- Remove substring \`"ab"\` and gain \`x\` points.
- Remove substring \`"ba"\` and gain \`y\` points.

Return the **maximum** points you can gain after applying the above operations on \`s\`.`,
  constraints: [
    '1 <= s.length <= 10^5',
    '1 <= x, y <= 10^4',
    's consists of lowercase English letters.',
  ],
  examples: [
    {
      input: 's = "cdbcbbaaabab", x = 4, y = 5',
      output: '19',
      explanation: 'Remove "ba" from "cdbcbbaaabab" to get "cdbcbbaaab" with 5 points. Then remove "ab" from "cdbcbbaaab" to get "cdbcbbaa" with 4 points. Then remove "ba" from "cdbcbbaa" to get "cdbcba" with 5 points. Then remove "ba" from "cdbcba" to get "cdbca" with 5 points. Maximum score = 5+4+5+5-... actually 5+5+5+4=19.',
    },
    {
      input: 's = "aabbaaxybbaabb", x = 5, y = 4',
      output: '20',
    },
  ],
  hints: [
    'Greedily remove the higher-value pair first (using a stack), then remove the remaining lower-value pair.',
    'A stack-based pass: push characters one by one. If the top and current form the target pair, pop and add score.',
    'After the first pass on the residual string, repeat for the second pair.',
  ],
  functionName: 'maximumGain',
  params: ['s', 'x', 'y'],
  starterCode: {
    javascript: 'function maximumGain(s, x, y) {\n\n}\n',
    python: 'def maximumGain(s, x, y):\n    pass\n',
  },
  visibleTests: [
    { args: ['cdbcbbaaabab', 4, 5], expected: 19 },
    { args: ['aabbaaxybbaabb', 5, 4], expected: 20 },
  ],
  hiddenTests: [
    { args: ['ab', 3, 2], expected: 3 },
    { args: ['ba', 3, 2], expected: 2 },
    { args: ['aabb', 4, 1], expected: 8 },
    { args: ['aabba', 3, 5], expected: 8 },
  ],
};
