import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-cost-homecoming-of-a-robot',
  title: 'Minimum Cost Homecoming of a Robot in a Grid',
  difficulty: 'medium',
  tags: ['arrays'],
  description: `There is an \`m x n\` grid (0-indexed) with a robot initially at position \`startPos = [startRow, startCol]\` that needs to reach \`homePos = [homeRow, homeCol]\`.

Every cell \`[r][c]\` in the grid has a cost to **enter**: entering row \`r\` costs \`rowCosts[r]\` and entering column \`c\` costs \`colCosts[c]\`.

The robot can move **up, down, left, or right** one step at a time. Return the **minimum total cost** for the robot to go from \`startPos\` to \`homePos\`.`,
  constraints: [
    'm == rowCosts.length',
    'n == colCosts.length',
    '1 <= m, n <= 10^5',
    '0 <= rowCosts[r], colCosts[c] <= 10^4',
    'startPos.length == homePos.length == 2',
    '0 <= startRow, homeRow < m',
    '0 <= startCol, homeCol < n',
  ],
  examples: [
    {
      input: 'startPos = [1,0], homePos = [2,3], rowCosts = [5,4,3], colCosts = [8,2,6,7]',
      output: '18',
      explanation: 'Optimal path enters row 2 (cost 3) then columns 1, 2, 3 (cost 2+6+7=15). Total = 3+15 = 18.',
    },
    {
      input: 'startPos = [0,0], homePos = [0,0], rowCosts = [5], colCosts = [26]',
      output: '0',
      explanation: 'The robot is already at home. No movement needed.',
    },
  ],
  hints: [
    'Any detour (moving away from the target and back) adds extra cost, so the optimal path moves exclusively toward homePos.',
    'The minimum cost path traverses each row between startRow and homeRow exactly once, and each column between startCol and homeCol exactly once.',
    'Sum rowCosts for rows strictly between startRow and homeRow (inclusive of homeRow, exclusive of startRow), and colCosts similarly.',
  ],
  functionName: 'minCostHomecoming',
  params: ['startPos', 'homePos', 'rowCosts', 'colCosts'],
  starterCode: {
    javascript: 'function minCostHomecoming(startPos, homePos, rowCosts, colCosts) {\n  \n}\n',
    typescript: 'function minCostHomecoming(startPos: number[], homePos: number[], rowCosts: number[], colCosts: number[]): number {\n  \n}',
    python: 'def minCostHomecoming(startPos, homePos, rowCosts, colCosts):\n    pass\n',
  },
  visibleTests: [
    { args: [[1, 0], [2, 3], [5, 4, 3], [8, 2, 6, 7]], expected: 18 },
    { args: [[0, 0], [0, 0], [5], [26]], expected: 0 },
  ],
  hiddenTests: [
    { args: [[1, 3], [0, 0], [1, 2], [3, 4, 5, 6]], expected: 13 },
    { args: [[0, 0], [3, 3], [1, 2, 3, 4], [1, 2, 3, 4]], expected: 18 },
    { args: [[1, 2], [0, 0], [4, 3, 2], [5, 6, 1]], expected: 15 },
  ],
};
