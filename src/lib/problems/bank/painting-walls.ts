import type { Problem } from '../types';

export const problem: Problem = {
  id: 'painting-walls',
  title: 'Painting Walls',
  difficulty: 'hard',
  tags: ['dynamic-programming', 'arrays'],
  description: `You have \`n\` walls to paint and one paid painter and one free painter.

You are given two **0-indexed** integer arrays \`cost\` and \`time\` of length \`n\`:
- \`cost[i]\` is the amount paid to hire the paid painter to paint wall \`i\`.
- \`time[i]\` is the number of days it takes the paid painter to paint wall \`i\`.

The free painter paints **one wall per day** and can only work when the paid painter is also working (during the paid painter's current job).

Return the **minimum cost** to paint all \`n\` walls.`,
  constraints: [
    '1 <= cost.length <= 500',
    'cost.length == time.length',
    '1 <= cost[i] <= 10^6',
    '1 <= time[i] <= 500',
  ],
  examples: [
    {
      input: 'cost = [1,2,3,2], time = [1,2,3,2]',
      output: '3',
      explanation: 'Hire paid painter for wall 2 (cost 3, time 3). While it takes 3 days, the free painter paints walls 0, 1, and 3. Total cost: 3.',
    },
    {
      input: 'cost = [2,3,4,2], time = [1,1,1,1]',
      output: '4',
      explanation: 'Hire paid for walls 0 and 3 (cost 2+2=4). While they work, free painter paints walls 1 and 2.',
    },
  ],
  hints: [
    'When the paid painter paints wall i (taking time[i] days), the free painter can do time[i] additional walls for free.',
    'Think of it as a knapsack: we select a subset of walls to pay for. If the total time[i] of selected walls ≥ (n - number of selected walls), all walls get painted.',
    'Define dp[j] = minimum cost to "cover" j free walls. dp[0] = 0. For each wall i: dp[min(n, j + time[i] + 1)] = min(..., dp[j] + cost[i]).',
  ],
  functionName: 'paintWalls',
  params: ['cost', 'time'],
  starterCode: {
    javascript: 'function paintWalls(cost, time) {\n  \n}\n',
    typescript: 'function paintWalls(cost: number[], time: number[]): number {\n  \n}\n',
    python: 'def paintWalls(cost, time):\n    pass\n',
  },
  visibleTests: [
    { args: [[1, 2, 3, 2], [1, 2, 3, 2]], expected: 3 },
    { args: [[2, 3, 4, 2], [1, 1, 1, 1]], expected: 4 },
  ],
  hiddenTests: [
    { args: [[1], [1]], expected: 1 },
    { args: [[1, 1], [1, 1]], expected: 1 },
    { args: [[26, 53, 10, 24, 25, 20, 63, 51], [1, 1, 1, 1, 2, 2, 2, 2]], expected: 55 },
    { args: [[1, 2, 3, 2], [1, 2, 3, 2]], expected: 3 },
    { args: [[100, 1], [1, 100]], expected: 1 },
    { args: [[3, 5, 1, 2], [2, 1, 3, 1]], expected: 1 },
  ],
};
