import type { Problem } from '../types';

export const problem: Problem = {
  id: 'watering-plants',
  title: 'Watering Plants',
  difficulty: 'easy',
  tags: ['arrays'],
  description: `You want to water \`n\` plants in a row from left to right. Plants are numbered \`0\` to \`n - 1\` from left to right. You are given a **0-indexed** integer array \`plants\` of size \`n\`, where \`plants[i]\` is the amount of water the \`i\`th plant needs, and an integer \`capacity\` representing the capacity of your watering can.

You start at the river (position \`-1\`) with a full watering can. Move to each plant left to right:
- If you have enough water to water the plant, water it and move to the next.
- Otherwise, walk back to the river to refill (full capacity), then walk back and water the plant.

Return the **total number of steps** you need to water all plants. Each move between adjacent positions costs 1 step.`,
  constraints: [
    'n == plants.length',
    '1 <= n <= 1000',
    '1 <= plants[i] <= 10^6',
    'max(plants[i]) <= capacity <= 10^9',
  ],
  examples: [
    {
      input: 'plants = [2,2,3,3], capacity = 5',
      output: '14',
      explanation:
        'Walk to plant 0 (1 step), water, rem=3. Walk to plant 1 (1 step), water, rem=1. Walk to plant 2 (1 step) — not enough (need 3, have 1): refill (+2×2=4 steps), water, rem=2. Walk to plant 3 (1 step) — not enough (need 3, have 2): refill (+2×3=6 steps), water. Total = 1+1+1+4+1+6 = 14.',
    },
    {
      input: 'plants = [1,1,1,4,2,3], capacity = 4',
      output: '30',
      explanation:
        'Water plants 0,1,2 without refilling (3 steps). Refill before plant 3 (+6 steps). Refill before plant 4 (+8 steps). Refill before plant 5 (+10 steps). Total = 3+1+6+1+8+1+10 = 30.',
    },
    {
      input: 'plants = [7,7,7,7,7,7,7], capacity = 8',
      output: '49',
      explanation: 'After each plant, only 1 unit remains — not enough for the next. Refill before every plant from index 1 onward.',
    },
  ],
  hints: [
    'Simulate left-to-right: track current water level and position.',
    'At plant i (0-indexed), if water < plants[i]: add 2*i steps (i back to river + i forward to plant i), refill.',
    'Always add 1 step to walk from plant i-1 to plant i (or from river to plant 0).',
  ],
  functionName: 'wateringPlants',
  params: ['plants', 'capacity'],
  starterCode: {
    javascript: `function wateringPlants(plants, capacity) {

}`,
    python: `def wateringPlants(plants, capacity):
    pass`,
  },
  visibleTests: [
    { args: [[2, 2, 3, 3], 5], expected: 14 },
    { args: [[1, 1, 1, 4, 2, 3], 4], expected: 30 },
    { args: [[7, 7, 7, 7, 7, 7, 7], 8], expected: 49 },
  ],
  hiddenTests: [
    { args: [[1], 1], expected: 1 },
    { args: [[2, 2, 2], 6], expected: 3 },
    { args: [[1, 2, 3, 4], 4], expected: 14 },
    { args: [[3, 3, 3], 3], expected: 9 },
  ],
};
