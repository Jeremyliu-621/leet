import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-operations-to-write-letter-y-on-grid',
  title: 'Minimum Operations to Write the Letter Y on a Grid',
  difficulty: 'medium',
  tags: ['arrays', 'hash-map'],
  description: `You are given a **0-indexed** \`n x n\` grid where \`n\` is odd, and \`grid[r][c]\` is \`0\`, \`1\`, or \`2\`.

We say that a cell \`(r, c)\` belongs to the **letter Y** if it belongs to:

- The **left diagonal** of the top half of the grid: \`r == c\` and \`r < n / 2\` (integer division).
- The **right diagonal** of the top half of the grid: \`r + c == n - 1\` and \`r < n / 2\`.
- The **vertical line** in the bottom half of the grid: \`c == n / 2\` and \`r >= n / 2\`.

In one operation, you can change the value in any cell to \`0\`, \`1\`, or \`2\`.

Return the **minimum** number of operations needed to make the letter Y equal to one value, and the rest of the grid equal to a **different** value.`,
  constraints: [
    '3 <= n <= 49',
    'n is odd',
    '0 <= grid[i][j] <= 2',
  ],
  examples: [
    {
      input: 'grid = [[1,2,2],[1,1,0],[0,1,0]]',
      output: '3',
      explanation: 'Make Y equal to 1 and the rest equal to 0. The Y cells are (0,0), (0,2), (1,1), (2,1). Change (0,2)=2→1, (1,0)=1→0, (2,0)=0→0 (no change needed), wait... 3 changes total.',
    },
    {
      input: 'grid = [[1,0,1],[0,1,0],[0,1,0]]',
      output: '0',
      explanation: 'The Y cells are (0,0), (0,2), (1,1), (2,1), all equal to 1. The non-Y cells (0,1), (1,0), (1,2), (2,0), (2,2) are all 0. Already perfect — Y=1, non-Y=0.',
    },
    {
      input: 'grid = [[0,0,0],[0,0,0],[0,0,0]]',
      output: '4',
      explanation: 'The best option is to change the 4 Y cells from 0 to 1 (or 2), leaving non-Y cells as 0. Cost = 4.',
    },
  ],
  hints: [
    'Partition all cells into two groups: "Y cells" and "non-Y cells". Count the frequency of each value (0, 1, 2) in each group separately.',
    'For each pair of distinct values (yVal, nonYVal) where yVal ≠ nonYVal, compute the cost: (number of Y cells not equal to yVal) + (number of non-Y cells not equal to nonYVal).',
    'Answer = min over all 6 valid (yVal, nonYVal) pairs with yVal ≠ nonYVal of (ySize - yCount[yVal]) + (nonYSize - nonYCount[nonYVal]).',
  ],
  functionName: 'minimumOperationsToWriteY',
  params: ['grid'],
  starterCode: {
    javascript: `function minimumOperationsToWriteY(grid) {

}`,
    typescript: `function minimumOperationsToWriteY(grid: number[][]): number {

}`,
    python: `def minimumOperationsToWriteY(grid):
    pass`,
  },
  visibleTests: [
    { args: [[[1, 2, 2], [1, 1, 0], [0, 1, 0]]], expected: 3 },
    { args: [[[1, 0, 1], [0, 1, 0], [0, 1, 0]]], expected: 0 },
    { args: [[[0, 0, 0], [0, 0, 0], [0, 0, 0]]], expected: 4 },
  ],
  hiddenTests: [
    { args: [[[1, 1, 1], [1, 1, 1], [1, 1, 1]]], expected: 4 },
    { args: [[[2, 2, 2], [2, 2, 2], [2, 2, 2]]], expected: 4 },
    { args: [[[0, 1, 2], [0, 0, 2], [1, 0, 1]]], expected: 3 },
    { args: [[[2, 1, 0], [0, 0, 1], [0, 2, 1]]], expected: 4 },
    { args: [[[0, 1, 0, 1, 0], [2, 1, 0, 1, 2], [2, 2, 2, 0, 1], [2, 2, 0, 2, 2], [0, 0, 0, 2, 2]]], expected: 11 },
    { args: [[[0, 1, 0], [1, 0, 1], [0, 0, 0]]], expected: 2 },
  ],
};
