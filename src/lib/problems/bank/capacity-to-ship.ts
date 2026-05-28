import type { Problem } from '../types';

export const problem: Problem = {
  id: 'capacity-to-ship',
  title: 'Capacity to Ship Packages',
  difficulty: 'hard',
  tags: ['binary-search'],
  description: `You are given an array \`weights\` representing packages to be shipped **in order** on a conveyor belt, and an integer \`days\`. You must ship all packages within \`days\` days.

Each day you load packages onto the ship in order; you cannot split a package across days. Find the **minimum ship capacity** that allows all packages to be shipped within \`days\` days.

**Example:** \`weights = [1,2,3,4,5,6,7,8,9,10], days = 5\` — with capacity 15 you can ship: \`[1,2,3,4,5]\`, \`[6,7]\`, \`[8]\`, \`[9]\`, \`[10]\`. Minimum capacity is 15.`,
  constraints: [
    '1 ≤ days ≤ weights.length ≤ 500',
    '1 ≤ weights[i] ≤ 500',
  ],
  examples: [
    {
      input: 'weights = [1,2,3,4,5,6,7,8,9,10], days = 5',
      output: '15',
      explanation: 'Capacity 15 allows: [1,2,3,4,5], [6,7], [8], [9], [10] — exactly 5 days.',
    },
    {
      input: 'weights = [3,2,2,4,1,4], days = 3',
      output: '6',
      explanation: 'Capacity 6 allows: [3,2], [2,4], [1,4] — exactly 3 days.',
    },
    {
      input: 'weights = [1,2,3,1,1], days = 4',
      output: '3',
      explanation: 'Capacity 3 allows: [1,2], [3], [1,1] — only 3 days needed, within 4.',
    },
  ],
  hints: [
    'The minimum possible capacity is `max(weights)` (every package must fit). The maximum is `sum(weights)` (ship everything in one day).',
    'Binary search between those bounds. For each candidate capacity, greedily simulate how many days are needed.',
    'In the greedy check: walk through weights left to right, accumulating until adding the next weight would exceed capacity; then start a new day.',
  ],
  functionName: 'shipWithinDays',
  params: ['weights', 'days'],
  starterCode: {
    javascript: 'function shipWithinDays(weights, days) {\n  // Binary search on the ship capacity.\n}\n',
    python: 'def shipWithinDays(weights, days):\n    # Binary search on the ship capacity.\n    pass\n',
  },
  visibleTests: [
    { args: [[1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5], expected: 15 },
    { args: [[3, 2, 2, 4, 1, 4], 3], expected: 6 },
    { args: [[1, 2, 3, 1, 1], 4], expected: 3 },
  ],
  hiddenTests: [
    { args: [[1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 1], expected: 55 },
    { args: [[1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 10], expected: 10 },
    { args: [[5, 5, 5, 5], 2], expected: 10 },
    { args: [[1], 1], expected: 1 },
    { args: [[10, 1, 10], 3], expected: 10 },
  ],
};
