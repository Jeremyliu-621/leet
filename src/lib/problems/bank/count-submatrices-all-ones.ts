import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-submatrices-all-ones',
  title: 'Count Submatrices With All Ones',
  difficulty: 'medium',
  tags: ['dynamic-programming'],
  description: `Given an \`m x n\` binary matrix \`mat\`, return the **number of submatrices** that have all ones.`,
  constraints: [
    '1 <= m, n <= 150',
    '1 <= mat[i][j] <= 1',
  ],
  examples: [
    {
      input: 'mat = [[1,0,1],[1,1,0],[1,1,0]]',
      output: '13',
      explanation: 'There are 6 submatrices of size 1x1, 2 of size 1x2, 3 of size 2x1, 1 of size 2x2, and 1 of size 3x1.',
    },
    {
      input: 'mat = [[0,1,1,0],[0,1,1,1],[1,1,1,0]]',
      output: '24',
      explanation: 'Count all submatrices consisting entirely of 1s.',
    },
  ],
  hints: [
    'For each cell (i, j), compute height[j] = number of consecutive 1s ending at row i in column j.',
    'For each row, use the height array to count submatrices ending at that row using a stack or running sum approach.',
    'For a fixed bottom row i and right column j, iterate leftward summing min heights to count valid submatrices.',
  ],
  functionName: 'numSubmat',
  params: ['mat'],
  starterCode: {
    javascript: 'function numSubmat(mat) {\n\n}',
    python: 'def numSubmat(mat):\n    pass',
  },
  visibleTests: [
    { args: [[[1, 0, 1], [1, 1, 0], [1, 1, 0]]], expected: 13 },
    { args: [[[0, 1, 1, 0], [0, 1, 1, 1], [1, 1, 1, 0]]], expected: 24 },
  ],
  hiddenTests: [
    { args: [[[1]]], expected: 1 },
    { args: [[[0]]], expected: 0 },
    { args: [[[1, 1], [1, 1]]], expected: 9 },
    { args: [[[1, 0], [0, 1]]], expected: 2 },
    { args: [[[1, 1, 1]]], expected: 6 },
    { args: [[[1], [1], [1]]], expected: 6 },
    { args: [[[0, 0], [0, 0]]], expected: 0 },
  ],
};
