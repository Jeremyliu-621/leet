import type { Problem } from '../types';

export const problem: Problem = {
  id: 'painting-the-walls',
  title: 'Painting the Walls',
  difficulty: 'hard',
  tags: ['dynamic-programming'],
  description: `You are given two **0-indexed** integer arrays, \`cost\` and \`time\`, of size \`n\` representing the costs and the time taken to paint \`n\` walls respectively. There are two painters available:

- A **paid painter** that paints wall \`i\` in \`time[i]\` units of time and costs \`cost[i]\`.
- A **free painter** that will paint **any** wall in **1** unit of time at **0** cost, but **can only work when the paid painter is working**.

Return the **minimum cost** to paint all \`n\` walls.

**DP:** When the paid painter paints wall \`i\` (taking \`time[i]\` time), the free painter can paint \`time[i]\` other walls. So effectively, paying \`cost[i]\` covers \`time[i]+1\` walls. This reduces to a **0/1 Knapsack** where we maximize walls covered ≥ \`n\`.`,
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
      explanation: 'Paint wall 1 (cost 2, time 2) with paid painter; free painter paints 2 walls in parallel. Then paint wall 0 (cost 1, time 1); free painter paints 1 wall. Total cost=3.',
    },
    {
      input: 'cost = [2,3,4,2], time = [1,1,1,1]',
      output: '4',
      explanation: 'Paint walls 0 and 3 (cost 2+2=4). Each takes 1 unit, free painter handles remaining 2 walls.',
    },
  ],
  hints: [
    'Reframe: choosing wall i with the paid painter "covers" time[i]+1 walls (the one being painted + time[i] free-painter walls). We need to cover at least n walls total.',
    'This is a 0/1 knapsack: dp[j] = minimum cost to cover j walls. For each wall i, it covers min(time[i]+1, n) additional walls.',
    'dp[0] = 0. For each wall i (in reverse): dp[j] = min(dp[j], dp[max(0, j-(time[i]+1))] + cost[i]). Answer is dp[n].',
  ],
  functionName: 'paintWalls',
  params: ['cost', 'time'],
  starterCode: {
    javascript: 'function paintWalls(cost, time) {\n\n}\n',
    typescript: "function paintWalls(cost: number[], time: number[]): number {\n\n}",

    python: 'def paintWalls(cost: list, time: list) -> int:\n    pass\n',
  },
  visibleTests: [
    { args: [[1,2,3,2], [1,2,3,2]], expected: 3 },
    { args: [[2,3,4,2], [1,1,1,1]], expected: 4 },
  ],
  hiddenTests: [
    { args: [[1], [1]], expected: 1 },
    { args: [[5,3], [3,1]], expected: 3 },
    { args: [[1,1,1,1], [4,3,2,1]], expected: 1 },
    { args: [[3,2,1], [1,2,3]], expected: 1 },
  ],
};
