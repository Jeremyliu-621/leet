import type { Problem } from '../types';

export const problem: Problem = {
  id: 'map-of-highest-peak',
  title: 'Map of Highest Peak',
  difficulty: 'medium',
  tags: ['graph'],
  description: `You are given an integer matrix \`isWater\` of size \`m × n\` representing a map of land and water cells:

- \`isWater[i][j] == 0\` — land cell
- \`isWater[i][j] == 1\` — water cell

Assign a **non-negative integer height** to every cell such that:
1. Every water cell has height **0**.
2. Any two adjacent cells (sharing an edge) must have heights differing by at most **1**.

Return a height assignment that **maximizes the maximum height**. If multiple valid assignments exist, return any one.`,
  constraints: [
    'm == isWater.length',
    'n == isWater[0].length',
    '1 ≤ m, n ≤ 1000',
    'isWater[i][j] is 0 or 1',
    'There is at least one water cell',
  ],
  examples: [
    {
      input: 'isWater = [[0,1],[0,0]]',
      output: '[[1,0],[2,1]]',
    },
    {
      input: 'isWater = [[1,0,1],[0,0,0],[1,0,1]]',
      output: '[[0,1,0],[1,2,1],[0,1,0]]',
    },
  ],
  hints: [
    'The height of any land cell is at most its distance to the nearest water cell — exceeding that would violate the ≤1 adjacency rule.',
    'Multi-source BFS from all water cells simultaneously assigns each land cell exactly its minimum distance to any water cell, which is both valid and maximises the heights globally.',
    'Initialise a queue with every water cell at height 0. In BFS order, visit unvisited neighbours and set their height to the current cell\'s height plus 1.',
  ],
  functionName: 'highestPeak',
  params: ['isWater'],
  starterCode: {
    javascript: `function highestPeak(isWater) {\n\n}`,
    python: `def highestPeak(isWater) -> list:\n    pass`,
    typescript: `function highestPeak(isWater: number[][]): number[][] {\n\n}`,
  },
  visibleTests: [
    { args: [[[0, 1], [0, 0]]], expected: [[1, 0], [2, 1]] },
    { args: [[[1, 0, 1], [0, 0, 0], [1, 0, 1]]], expected: [[0, 1, 0], [1, 2, 1], [0, 1, 0]] },
  ],
  hiddenTests: [
    { args: [[[1]]], expected: [[0]] },
    { args: [[[0, 0], [0, 1]]], expected: [[2, 1], [1, 0]] },
    { args: [[[1, 1], [1, 1]]], expected: [[0, 0], [0, 0]] },
    { args: [[[0, 0, 0], [0, 0, 0], [0, 0, 1]]], expected: [[4, 3, 2], [3, 2, 1], [2, 1, 0]] },
    { args: [[[0, 0, 0, 0], [0, 0, 0, 0], [0, 1, 0, 0]]], expected: [[3, 2, 3, 4], [2, 1, 2, 3], [1, 0, 1, 2]] },
    { args: [[[0, 1, 0], [0, 0, 0], [0, 0, 0]]], expected: [[1, 0, 1], [2, 1, 2], [3, 2, 3]] },
  ],
};
