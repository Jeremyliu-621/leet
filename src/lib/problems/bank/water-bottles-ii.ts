import type { Problem } from '../types';

export const problem: Problem = {
  id: 'water-bottles-ii',
  title: 'Water Bottles II',
  difficulty: 'medium',
  tags: ['math', 'simulation'],
  description: `You are given two integers \`numBottles\` and \`numExchange\`.

\`numBottles\` represents the number of full water bottles that you initially have. In one operation:

- Drink any number of full water bottles.
- Turn \`numExchange\` empty bottles into one full water bottle. Then **increase** \`numExchange\` by \`1\`.

Note that you cannot partially drink a bottle, and you must drink at least one bottle in each operation.

Return the **maximum** number of water bottles you can drink.`,
  constraints: [
    '1 <= numBottles <= 100',
    '1 <= numExchange <= 100',
  ],
  examples: [
    {
      input: 'numBottles = 13, numExchange = 6',
      output: '15',
      explanation: 'Drink 7 → exchange 6 empties for 1 full (numExchange becomes 7). Drink 6 more + 1 new → 13 total. Exchange 7 for 1 more (numExchange becomes 8). Total = 13 + 1 + 1 = 15.',
    },
    {
      input: 'numBottles = 10, numExchange = 3',
      output: '13',
      explanation: 'Drink 3 → exchange 3 empties for 1 full (numExchange becomes 4). Continue until you cannot exchange anymore.',
    },
  ],
  hints: [
    'Simulate: keep track of full bottles, empty bottles, and the current exchange rate.',
    'Each round, drink some bottles to get enough empties for the exchange, then trade.',
    'Stop when the total empties are fewer than numExchange.',
  ],
  functionName: 'maxBottlesDrunk',
  params: ['numBottles', 'numExchange'],
  starterCode: {
    javascript: `function maxBottlesDrunk(numBottles, numExchange) {
  // Simulate drinking and exchanging with increasing exchange rate
}`,
    typescript: `function maxBottlesDrunk(numBottles: number, numExchange: number): number {
  // Simulate drinking and exchanging with increasing exchange rate
}`,
    python: `def maxBottlesDrunk(numBottles, numExchange):
    # Simulate drinking and exchanging with increasing exchange rate
    pass`,
  },
  visibleTests: [
    { args: [13, 6], expected: 15 },
    { args: [10, 3], expected: 13 },
  ],
  hiddenTests: [
    { args: [1, 1], expected: 2 },
    { args: [1, 100], expected: 1 },
    { args: [5, 5], expected: 6 },
    { args: [100, 1], expected: 114 },
    { args: [7, 4], expected: 8 },
  ],
};
