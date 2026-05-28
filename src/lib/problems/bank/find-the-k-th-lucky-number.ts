import type { Problem } from '../types';

export const problem: Problem = {
  id: 'find-the-k-th-lucky-number',
  title: 'Find the K-th Lucky Number',
  difficulty: 'easy',
  tags: ['math', 'strings'],
  description: `We define a **lucky number** as an integer that only has the digits \`4\` and \`7\` in it.

- Examples of lucky numbers: \`4, 7, 44, 47, 74, 77, 444, ...\`

Given an integer \`k\`, return the \`k\`th lucky number (1-indexed).

The lucky numbers in sorted order are: \`4, 7, 44, 47, 74, 77, 444, 447, 474, 477, 744, 747, 774, 777, ...\``,
  constraints: [
    '1 <= k <= 1000',
  ],
  examples: [
    {
      input: 'k = 1',
      output: '"4"',
      explanation: 'The smallest lucky number is 4.',
    },
    {
      input: 'k = 5',
      output: '"74"',
      explanation: 'Sorted order: 4, 7, 44, 47, 74. The 5th lucky number is 74.',
    },
    {
      input: 'k = 10',
      output: '"477"',
      explanation: 'Sorted: 4,7,44,47,74,77,444,447,474,477. The 10th is 477.',
    },
  ],
  hints: [
    'Think of lucky numbers as binary strings where 0→4 and 1→7. The 1st is "0", the 2nd is "1", the 3rd is "00", etc.',
    'There are 2 lucky numbers of length 1, 4 of length 2, 8 of length 3. Subtract group sizes to find which length group k falls in.',
    'Within a group of length L, the kth entry in that group is the (k-1)th binary number with L bits, mapping 0→4 and 1→7.',
  ],
  functionName: 'kthLuckyNumber',
  params: ['k'],
  starterCode: {
    javascript: 'function kthLuckyNumber(k) {\n  // your code here\n}\n',
    python: 'def kthLuckyNumber(k):\n    # your code here\n    pass\n',
  },
  visibleTests: [
    { args: [1], expected: '4' },
    { args: [5], expected: '74' },
    { args: [10], expected: '477' },
  ],
  hiddenTests: [
    { args: [2], expected: '7' },
    { args: [3], expected: '44' },
    { args: [4], expected: '47' },
    { args: [7], expected: '444' },
    { args: [14], expected: '777' },
    { args: [15], expected: '4444' },
  ],
};
