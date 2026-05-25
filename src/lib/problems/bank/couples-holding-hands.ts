import type { Problem } from '../types';

export const problem: Problem = {
  id: 'couples-holding-hands',
  title: 'Couples Holding Hands',
  difficulty: 'hard',
  tags: ['arrays'],
  description: `\`n\` couples sit in \`2n\` seats arranged in a row and want to hold hands.

The people and seats are represented by an integer array \`row\` where \`row[i]\` is the ID of the person sitting in the \`i\`th seat. The couples are numbered in order, the first couple being \`(0, 1)\`, the second couple being \`(2, 3)\`, and so on with the last couple being \`(2n - 2, 2n - 1)\`.

Return the **minimum number of swaps** so that every couple is sitting side by side. A swap consists of choosing any two people, then they stand up and switch seats.`,
  constraints: [
    '2n == row.length',
    '2 <= n <= 30',
    '0 <= row[i] < 2n',
    'All the elements of row are unique',
  ],
  examples: [
    { input: 'row = [0,2,1,3]', output: '1', explanation: 'Swap row[1]=2 and row[2]=1 so the first couple sits together.' },
    { input: 'row = [3,2,0,1]', output: '0', explanation: 'Row already has couples (3,2) and (0,1) sitting together.' },
  ],
  hints: [
    'Iterate through seat pairs (0,1), (2,3), ... For each pair, if they are not a couple, find the partner of the first person and swap it into the second seat.',
    'Person p\'s partner is p ^ 1 (XOR with 1 toggles the last bit).',
    'This greedy approach produces the minimum swaps.',
  ],
  functionName: 'minSwapsCouples',
  params: ['row'],
  starterCode: {
    javascript: 'function minSwapsCouples(row) {\n\n}\n',
    python: 'def minSwapsCouples(row):\n    pass\n',
  },
  visibleTests: [
    { args: [[0, 2, 1, 3]], expected: 1 },
    { args: [[3, 2, 0, 1]], expected: 0 },
  ],
  hiddenTests: [
    { args: [[0, 1, 2, 3]], expected: 0 },
    { args: [[0, 3, 2, 1]], expected: 1 },
    { args: [[5, 4, 3, 2, 1, 0]], expected: 0 },
    { args: [[1, 3, 0, 2]], expected: 1 },
  ],
};
