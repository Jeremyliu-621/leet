import type { Problem } from '../types';

export const problem: Problem = {
  id: 'k-items-with-the-maximum-sum',
  title: 'K Items With the Maximum Sum',
  difficulty: 'easy',
  tags: ['math'],
  description: `There is a bag that contains many items, each item has a **number** on it:

- \`numOnes\` items have the number **1**.
- \`numZeros\` items have the number **0**.
- \`numNegOnes\` items have the number **-1**.

You are given integers \`numOnes\`, \`numZeros\`, \`numNegOnes\`, and \`k\`. Pick **exactly \`k\`** items from the bag to **maximize** the sum of their numbers.

Return the **maximum** possible sum.`,
  constraints: [
    '`0 <= numOnes, numZeros, numNegOnes <= 50`',
    '`0 <= k <= numOnes + numZeros + numNegOnes`',
  ],
  examples: [
    {
      input: 'numOnes = 3, numZeros = 2, numNegOnes = 0, k = 2',
      output: '2',
      explanation: 'Pick 2 items worth 1 each. Sum = 2.',
    },
    {
      input: 'numOnes = 3, numZeros = 2, numNegOnes = 0, k = 4',
      output: '3',
      explanation: 'Pick all 3 ones and 1 zero. Sum = 3.',
    },
  ],
  hints: [
    'Greedily pick the highest-value items first.',
    'Take as many 1s as possible (up to min(k, numOnes)), then fill with 0s, then -1s.',
    'Sum = ones_taken - negones_taken where negones_taken = max(0, k - ones_taken - zeros_taken).',
  ],
  functionName: 'kItemsWithMaximumSum',
  params: ['numOnes', 'numZeros', 'numNegOnes', 'k'],
  starterCode: {
    javascript: `function kItemsWithMaximumSum(numOnes, numZeros, numNegOnes, k) {

}`,
    python: `def kItemsWithMaximumSum(numOnes, numZeros, numNegOnes, k):
    pass`,
  },
  visibleTests: [
    { args: [3, 2, 0, 2], expected: 2 },
    { args: [3, 2, 0, 4], expected: 3 },
    { args: [3, 2, 3, 6], expected: 2 },
  ],
  hiddenTests: [
    { args: [0, 0, 3, 3], expected: -3 },
    { args: [1, 0, 0, 1], expected: 1 },
    { args: [0, 3, 3, 4], expected: -1 },
    { args: [5, 0, 5, 5], expected: 5 },
  ],
};
