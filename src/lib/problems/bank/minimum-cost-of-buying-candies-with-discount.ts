import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-cost-of-buying-candies-with-discount',
  title: 'Minimum Cost of Buying Candies With Discount',
  difficulty: 'easy',
  tags: ['arrays'],
  description: `A shop is selling candies at a discount. For every two candies sold, the shop gives a **third** candy for free.

The discount is given on the **least expensive** candy among the three chosen. In other words, if you buy candies valued \`x\` and \`y\` (\`x <= y\`), you get the third candy valued \`z\` for free if \`z <= x\`.

You are given a **1-indexed** integer array \`cost\`, where \`cost[i]\` denotes the cost of the \`i\`th candy. Return the **minimum cost** of buying all \`cost.length\` candies.`,
  constraints: [
    '1 <= cost.length <= 100',
    '1 <= cost[i] <= 100',
  ],
  examples: [
    {
      input: 'cost = [1,2,3]',
      output: '5',
      explanation: 'Buy the 3-cost and 2-cost candy. Get the 1-cost for free. Total = 3+2 = 5.',
    },
    {
      input: 'cost = [6,5,7,9,2,2]',
      output: '23',
      explanation: 'Sort: [9,7,6,5,2,2]. Buy 9,7 (free 6). Buy 5,2 (free 2). Total = 9+7+5+2 = 23.',
    },
    {
      input: 'cost = [5,5]',
      output: '10',
      explanation: 'Only 2 candies, no free one. Total = 10.',
    },
  ],
  hints: [
    'Sort in descending order. Every third candy (index 2, 5, 8, ...) is free.',
    'Iterate: buy index 0, buy index 1, skip index 2, buy index 3, buy index 4, skip index 5, ...',
    'Total = sum of cost[i] for all i where (i+1) % 3 !== 0.',
  ],
  functionName: 'minimumCost',
  params: ['cost'],
  starterCode: {
    javascript: `function minimumCost(cost) {

}`,
    typescript: "function minimumCost(cost: number[]): number {\n\n}",

    python: `def minimumCost(cost):
    pass`,
  },
  visibleTests: [
    { args: [[1, 2, 3]], expected: 5 },
    { args: [[6, 5, 7, 9, 2, 2]], expected: 23 },
    { args: [[5, 5]], expected: 10 },
  ],
  hiddenTests: [
    { args: [[1]], expected: 1 },
    { args: [[1, 2, 3, 4]], expected: 8 },
    { args: [[10, 10, 10]], expected: 20 },
    { args: [[3, 3, 3, 3]], expected: 9 },
  ],
};
