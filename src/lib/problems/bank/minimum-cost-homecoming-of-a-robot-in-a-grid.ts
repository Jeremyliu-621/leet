import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-cost-homecoming-of-a-robot-in-a-grid',
  title: 'Minimum Cost Homecoming of a Robot in a Grid',
  difficulty: 'medium',
  tags: ['arrays', 'math'],
  description: `There is an \`m × n\` grid, where a robot is at position \`startPos = [startRow, startCol]\` and wants to reach home at position \`homePos = [homeRow, homeCol]\`. Moving to any cell in row \`i\` costs \`rowCosts[i]\` and moving to any cell in column \`j\` costs \`colCosts[j]\`. You do **not** pay to start at \`startPos\`.

Return the **minimum total cost** to go from \`startPos\` to \`homePos\`.`,
  constraints: [
    '`m == rowCosts.length`',
    '`n == colCosts.length`',
    '`1 <= m, n <= 10^5`',
    '`0 <= rowCosts[i], colCosts[j] <= 10^4`',
    '`startPos.length == homePos.length == 2`',
    '`0 <= startRow, homeRow < m`',
    '`0 <= startCol, homeCol < n`',
  ],
  examples: [
    {
      input: 'startPos = [1,0], homePos = [2,3], rowCosts = [5,4,3], colCosts = [8,2,6,7]',
      output: '18',
      explanation: 'Move to row 2 (cost 3) then cols 1,2,3 (costs 2+6+7=15). Total=18.',
    },
    {
      input: 'startPos = [0,0], homePos = [0,0], rowCosts = [5], colCosts = [26]',
      output: '0',
      explanation: 'Already at home.',
    },
  ],
  hints: [
    'Any path that moves directly to homePos traverses the same set of rows and columns.',
    'Sum all rowCosts between startRow and homeRow (exclusive of start) and all colCosts between startCol and homeCol (exclusive of start).',
    'The order of row vs. column movement does not affect total cost.',
  ],
  functionName: 'minCost',
  params: ['startPos', 'homePos', 'rowCosts', 'colCosts'],
  starterCode: {
    javascript: `function minCost(startPos, homePos, rowCosts, colCosts) {

}`,
    typescript: `function minCost(startPos: number[], homePos: number[], rowCosts: number[], colCosts: number[]): number {

}`,
    python: `def minCost(startPos, homePos, rowCosts, colCosts):
    pass`,
  },
  visibleTests: [
    { args: [[1, 0], [2, 3], [5, 4, 3], [8, 2, 6, 7]], expected: 18 },
    { args: [[0, 0], [0, 0], [5], [26]], expected: 0 },
  ],
  hiddenTests: [
    { args: [[0, 0], [1, 1], [5, 4], [8, 2]], expected: 6 },
    { args: [[2, 3], [0, 0], [5, 4, 3], [8, 2, 6, 7]], expected: 25 },
    { args: [[0, 1], [2, 3], [3, 2, 1], [4, 5, 6, 7]], expected: 16 },
    { args: [[1, 1], [0, 0], [3, 4], [2, 1]], expected: 5 },
    { args: [[0, 0], [2, 2], [1, 2, 3], [4, 5, 6]], expected: 16 },
  ],
};
