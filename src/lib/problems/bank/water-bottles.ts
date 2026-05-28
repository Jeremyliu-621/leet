import type { Problem } from '../types';

export const problem: Problem = {
  id: 'water-bottles',
  title: 'Water Bottles',
  difficulty: 'easy',
  tags: ['math'],
  description: `There are \`numBottles\` full water bottles. You can drink one bottle at a time, and when you drink a full bottle you have an empty bottle. You can exchange \`numExchange\` empty bottles for **one full** water bottle.

Return the **maximum** number of water bottles you can drink.`,
  constraints: [
    '1 <= numBottles <= 100',
    '2 <= numExchange <= 100',
  ],
  examples: [
    {
      input: 'numBottles = 9, numExchange = 3',
      output: '13',
      explanation:
        'Drink 9 (have 9 empties). Exchange 9 empties → 3 full. Drink 3 (have 3 empties). Exchange 3 → 1 full. Drink 1. Total = 9 + 3 + 1 = 13.',
    },
    {
      input: 'numBottles = 15, numExchange = 4',
      output: '19',
      explanation:
        'Drink 15 → exchange 12 empties for 3 full (3 left over) → drink 3 → exchange 3 + 3 = 6 empties... Total = 19.',
    },
  ],
  hints: [
    'Simulate: start with `numBottles` full bottles. Drink all, accumulate empties.',
    'While you have at least `numExchange` empties: exchange them for new full bottles (integer division gives the new fulls, remainder carries over as leftover empties).',
    'Add the new full bottles to your drink count and repeat until you can no longer exchange.',
  ],
  functionName: 'numWaterBottles',
  params: ['numBottles', 'numExchange'],
  starterCode: {
    javascript: 'function numWaterBottles(numBottles, numExchange) {\n  // your code here\n}\n',
    typescript: "function numWaterBottles(numBottles: number, numExchange: number): number {\n  // your code here\n}",

    python: 'def numWaterBottles(numBottles, numExchange):\n    # your code here\n    pass\n',
  },
  visibleTests: [
    { args: [9, 3], expected: 13 },
    { args: [15, 4], expected: 19 },
  ],
  hiddenTests: [
    { args: [1, 2], expected: 1 },
    { args: [2, 2], expected: 3 },
    { args: [100, 100], expected: 101 },
    { args: [5, 5], expected: 6 },
    { args: [10, 3], expected: 14 },
    { args: [6, 2], expected: 11 },
  ],
};
