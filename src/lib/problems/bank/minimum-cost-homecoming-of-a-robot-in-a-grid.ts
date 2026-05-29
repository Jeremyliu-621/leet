import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-cost-homecoming-of-a-robot-in-a-grid',
  title: 'Minimum Cost Homecoming of a Robot in a Grid',
  difficulty: 'medium',
  tags: ['arrays', 'math'],
  description: `A robot is placed at position \`startPos = [startRow, startCol]\` on a grid with \`numRows\` rows and \`numCols\` columns. It wants to reach \`homePos = [homeRow, homeCol]\`.

- Moving to row \`r\` (from any adjacent row) costs \`rowCosts[r]\`.
- Moving to column \`c\` (from any adjacent column) costs \`colCosts[c]\`.

The robot can move in any direction (up, down, left, right) and must reach home using the **minimum cost**. Return that minimum cost.

**Key insight:** Because costs are incurred per row/column entered (not per step), the optimal path visits each intermediate row and column exactly once. Total cost = sum of row costs traversed + sum of column costs traversed (both excluding the starting position, including the home position).`,
  constraints: [
    '1 <= numRows, numCols <= 10^5',
    '0 <= startRow < numRows',
    '0 <= startCol < numCols',
    '0 <= homeRow < numRows',
    '0 <= homeCol < numCols',
    'rowCosts.length == numRows',
    'colCosts.length == numCols',
    '0 <= rowCosts[i], colCosts[i] <= 10^4',
  ],
  examples: [
    {
      input: 'startPos = [1,0], homePos = [2,3], rowCosts = [5,4,3], colCosts = [8,2,6,7]',
      output: '18',
      explanation: 'Move down: enter row 2 (cost 3). Move right 3 times: enter cols 1,2,3 (cost 2+6+7=15). Total = 18.',
    },
    {
      input: 'startPos = [0,0], homePos = [0,0], rowCosts = [5], colCosts = [26]',
      output: '0',
      explanation: 'Already at home. No movement needed.',
    },
    {
      input: 'startPos = [0,0], homePos = [2,3], rowCosts = [1,1,1], colCosts = [1,1,1,1]',
      output: '5',
      explanation: 'Enter rows 1,2 (cost 2) and cols 1,2,3 (cost 3). Total = 5.',
    },
  ],
  hints: [
    'The minimum cost path visits each row and column between start and home exactly once.',
    'Row costs: sum rowCosts[r] for r strictly between startRow and homeRow (exclusive of start, inclusive of home).',
    'Column costs: similarly sum colCosts[c] from startCol toward homeCol.',
    "Direction doesn't matter — just sum the costs of the rows and columns you pass through.",
  ],
  functionName: 'minCostHomecomingRobot',
  params: ['startPos', 'homePos', 'rowCosts', 'colCosts'],
  starterCode: {
    javascript: `function minCostHomecomingRobot(startPos, homePos, rowCosts, colCosts) {
  // Sum rowCosts traversed + colCosts traversed (excluding start, including home).
}`,
    typescript: `function minCostHomecomingRobot(startPos: number[], homePos: number[], rowCosts: number[], colCosts: number[]): number {
  // Sum rowCosts traversed + colCosts traversed (excluding start, including home).
}`,
    python: `def minCostHomecomingRobot(startPos, homePos, rowCosts, colCosts):
    # Sum rowCosts traversed + colCosts traversed (excluding start, including home).
    pass
`,
  },
  visibleTests: [
    { args: [[1, 0], [2, 3], [5, 4, 3], [8, 2, 6, 7]], expected: 18 },
    { args: [[0, 0], [0, 0], [5], [26]], expected: 0 },
    { args: [[0, 0], [2, 3], [1, 1, 1], [1, 1, 1, 1]], expected: 5 },
  ],
  hiddenTests: [
    { args: [[0, 3], [3, 0], [1, 2, 3, 4], [5, 6, 7, 8]], expected: 27 },
    { args: [[2, 2], [0, 0], [3, 5, 10], [2, 4, 8]], expected: 14 },
    { args: [[0, 0], [0, 4], [1], [3, 1, 4, 1, 5]], expected: 11 },
    { args: [[3, 0], [0, 0], [6, 7, 8, 9], [1]], expected: 21 },
    { args: [[1, 1], [1, 1], [5, 5], [5, 5]], expected: 0 },
    { args: [[0, 0], [1, 1], [10, 20], [30, 40]], expected: 60 },
  ],
};
