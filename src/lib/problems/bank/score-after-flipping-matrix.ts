import type { Problem } from '../types';

export const problem: Problem = {
  id: 'score-after-flipping-matrix',
  title: 'Score After Flipping Matrix',
  difficulty: 'medium',
  tags: ['arrays'],
  description: `You are given an \`m × n\` binary matrix \`grid\`. A **move** consists of choosing any row or column and flipping all the values in that row or column (0 → 1, 1 → 0).

After making any number of moves, every row of the matrix is interpreted as a binary number, and the **score** is the sum of these binary numbers.

Return the **highest possible score**.`,
  constraints: [
    'm == grid.length',
    'n == grid[i].length',
    '1 <= m, n <= 20',
    '`grid[i][j]` is either `0` or `1`',
  ],
  examples: [
    {
      input: 'grid = [[0,0,1,1],[1,0,1,0],[1,1,0,0]]',
      output: '39',
      explanation: 'After optimal moves: [[1,1,1,1],[1,0,0,1],[1,1,1,1]]. Scores: 15+9+15=39.',
    },
    {
      input: 'grid = [[0]]',
      output: '1',
      explanation: 'Flip the single row to get [1]. Score = 1.',
    },
  ],
  hints: [
    'The most significant bit (leftmost column) contributes the most to the score. Greedily ensure every row starts with a 1 by flipping any row where the first element is 0.',
    'After fixing the first column, for each subsequent column independently decide whether flipping it increases the total: flip if doing so makes more cells in that column equal to 1.',
    'For column `j`, count how many rows have a 1 in that column (after applying row flips). If count < m/2, flip the column. The contribution of column `j` is `max(count, m-count) * (1 << (n-1-j))`.',
  ],
  functionName: 'matrixScore',
  params: ['grid'],
  starterCode: {
    javascript: `function matrixScore(grid) {

}`,
    python: `def matrixScore(grid: list[list[int]]) -> int:
    pass`,
  },
  visibleTests: [
    { args: [[[0,0,1,1],[1,0,1,0],[1,1,0,0]]], expected: 39 },
    { args: [[[0]]], expected: 1 },
    { args: [[[1,0],[1,1]]], expected: 5 },
  ],
  hiddenTests: [
    { args: [[[1,1],[1,0]]], expected: 5 },
    { args: [[[0,0],[0,0]]], expected: 6 },
    { args: [[[1,0,1,1],[0,1,1,0],[1,1,0,1]]], expected: 39 },
    { args: [[[1,1,1],[1,0,1],[0,0,0]]], expected: 19 },
    { args: [[[0,1,0,0],[1,1,1,1]]], expected: 26 },
  ],
};
