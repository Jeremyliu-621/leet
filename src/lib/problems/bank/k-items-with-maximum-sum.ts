import type { Problem } from '../types';

export const problem: Problem = {
  id: 'k-items-with-maximum-sum',
  title: 'K Items With the Maximum Sum',
  difficulty: 'easy',
  tags: ['arrays', 'math'],
  description: `There is a bag that contains the following three types of items:

- \`numOnes\` items with value \`1\`
- \`numZeros\` items with value \`0\`
- \`numNegOnes\` items with value \`-1\`

You are given integers \`numOnes\`, \`numZeros\`, \`numNegOnes\`, and \`k\`.

Pick exactly \`k\` items from the bag to **maximize** the sum of their values. Return the **maximum** sum.`,
  constraints: [
    '0 <= numOnes, numZeros, numNegOnes <= 50',
    '0 <= k <= numOnes + numZeros + numNegOnes',
  ],
  examples: [
    {
      input: 'numOnes = 3, numZeros = 2, numNegOnes = 0, k = 2',
      output: '2',
      explanation: 'Take 2 items with value 1. Sum = 2.',
    },
    {
      input: 'numOnes = 3, numZeros = 2, numNegOnes = 0, k = 4',
      output: '3',
      explanation: 'Take all 3 ones and 1 zero. Sum = 3.',
    },
    {
      input: 'numOnes = 1, numZeros = 0, numNegOnes = 1, k = 2',
      output: '0',
      explanation: 'Must take the 1 and the -1. Sum = 0.',
    },
  ],
  hints: [
    'Level 1: Greedily take items in order: 1s first, then 0s, then -1s.',
    'Level 2: Take min(k, numOnes) ones. Then take min(remaining, numZeros) zeros. Then take the rest from -1s.',
    'Level 3: Answer = min(k, numOnes) - max(0, k - numOnes - numZeros).',
  ],
  functionName: 'kItemsWithMaximumSum',
  params: ['numOnes', 'numZeros', 'numNegOnes', 'k'],
  starterCode: {
    javascript: `function kItemsWithMaximumSum(numOnes, numZeros, numNegOnes, k) {
  const ones = Math.min(k, numOnes);
  const negs = Math.max(0, k - numOnes - numZeros);
  return ones - negs;
}`,
    typescript: `function kItemsWithMaximumSum(numOnes: number, numZeros: number, numNegOnes: number, k: number): number {
  const ones = Math.min(k, numOnes);
  const negs = Math.max(0, k - numOnes - numZeros);
  return ones - negs;
}`,
    python: `def kItemsWithMaximumSum(numOnes, numZeros, numNegOnes, k):
    ones = min(k, numOnes)
    negs = max(0, k - numOnes - numZeros)
    return ones - negs`,
  },
  visibleTests: [
    { args: [3, 2, 0, 2], expected: 2 },
    { args: [3, 2, 0, 4], expected: 3 },
    { args: [1, 0, 1, 2], expected: 0 },
  ],
  hiddenTests: [
    { args: [0, 0, 1, 1], expected: -1 },
    { args: [5, 0, 0, 3], expected: 3 },
    { args: [0, 5, 0, 3], expected: 0 },
    { args: [0, 0, 5, 3], expected: -3 },
    { args: [2, 3, 2, 5], expected: 2 },
    { args: [1, 1, 1, 3], expected: 0 },
    { args: [50, 50, 50, 100], expected: 50 },
    { args: [0, 0, 0, 0], expected: 0 },
  ],
};
