import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-cost-of-buying-candies-with-discount',
  title: 'Minimum Cost of Buying Candies With Discount',
  difficulty: 'easy',
  tags: ['arrays'],
  description: `A store is selling candies at a discount. For **every two candies bought**, the store gives a **third candy for free**.

The customer can choose **any** candy to take for free as long as its cost is less than or equal to the **minimum** cost of the two bought candies.

Given a **0-indexed** integer array \`cost\`, where \`cost[i]\` is the cost of the \`i\`th candy, return the **minimum** cost of buying **all** the candies.`,
  constraints: [
    '`1 <= cost.length <= 100`',
    '`1 <= cost[i] <= 100`',
  ],
  examples: [
    {
      input: 'cost = [1,2,3]',
      output: '5',
      explanation: 'Buy the candy with cost 3 and cost 2 (total 5). The candy with cost 1 is free.',
    },
    {
      input: 'cost = [6,5,7,9,2,2]',
      output: '23',
      explanation: 'Sort descending: [9,7,6,5,2,2]. Pay 9+7 (free 6), pay 5+2 (free 2). Total = 23.',
    },
    {
      input: 'cost = [5,5]',
      output: '10',
      explanation: 'Only 2 candies — no free candy applies.',
    },
  ],
  hints: [
    'To minimize cost, always make the cheapest candy in each group of three free.',
    'Sort in descending order. After sorting, every 3rd candy (0-indexed positions 2, 5, 8, ...) is free.',
    'Sum all costs, skipping every position where (i+1) % 3 === 0.',
  ],
  functionName: 'minimumCost',
  params: ['cost'],
  starterCode: {
    javascript: `function minimumCost(cost) {
  cost.sort((a, b) => b - a);
  let total = 0;
  for (let i = 0; i < cost.length; i++) if ((i + 1) % 3 !== 0) total += cost[i];
  return total;
}`,
    typescript: `function minimumCost(cost: number[]): number {
  cost.sort((a, b) => b - a);
  let total = 0;
  for (let i = 0; i < cost.length; i++) if ((i + 1) % 3 !== 0) total += cost[i]!;
  return total;
}`,
    python: `def minimumCost(cost):
    if hasattr(cost, 'to_py'): cost = list(cost.to_py())
    cost.sort(reverse=True)
    return sum(v for i, v in enumerate(cost) if (i + 1) % 3 != 0)`,
  },
  visibleTests: [
    { args: [[1, 2, 3]], expected: 5 },
    { args: [[6, 5, 7, 9, 2, 2]], expected: 23 },
    { args: [[5, 5]], expected: 10 },
  ],
  hiddenTests: [
    { args: [[1]], expected: 1 },
    { args: [[3, 3, 3]], expected: 6 },
    { args: [[1, 1, 1, 1, 1]], expected: 4 },
    { args: [[10, 9, 8, 7, 6, 5]], expected: 32 },
    { args: [[100, 100, 100]], expected: 200 },
    { args: [[1, 2, 3, 4, 5, 6]], expected: 16 },
  ],
};
