import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-path-sum-in-triangle',
  title: 'Minimum Path Sum in Triangle',
  difficulty: 'medium',
  tags: ['arrays', 'dynamic-programming'],
  description: `Given a \`triangle\` array, return the **minimum path sum** from top to bottom.

For each step, you may move to an adjacent number of the row below. More formally, if you are on index \`i\` on the current row, you may move to either index \`i\` or index \`i + 1\` on the next row.`,
  constraints: [
    '1 <= triangle.length <= 200',
    'triangle[0].length == 1',
    'triangle[i].length == triangle[i - 1].length + 1',
    '-10^4 <= triangle[i][j] <= 10^4',
  ],
  examples: [
    {
      input: 'triangle = [[2],[3,4],[6,5,7],[4,1,8,3]]',
      output: '11',
      explanation: 'The minimum path is 2 → 3 → 5 → 1 = 11.',
    },
    {
      input: 'triangle = [[-10]]',
      output: '-10',
      explanation: 'Only one element.',
    },
  ],
  hints: [
    'Use bottom-up DP: initialize dp with the last row of the triangle.',
    'For each row from second-to-last up to the top, update dp[j] = triangle[i][j] + min(dp[j], dp[j+1]).',
    'The answer is dp[0] after processing all rows.',
  ],
  functionName: 'minimumTotal',
  params: ['triangle'],
  starterCode: {
    javascript: 'function minimumTotal(triangle) {\n  \n}\n',
    typescript: 'function minimumTotal(triangle: number[][]): number {\n  \n}',
    python: 'def minimumTotal(triangle):\n    pass\n',
  },
  visibleTests: [
    { args: [[[2], [3, 4], [6, 5, 7], [4, 1, 8, 3]]], expected: 11 },
    { args: [[[-10]]], expected: -10 },
  ],
  hiddenTests: [
    { args: [[[1], [2, 3], [4, 5, 6]]], expected: 7 },
    { args: [[[1], [1, 1], [1, 1, 1]]], expected: 3 },
    { args: [[[-1], [2, 3], [1, -1, -3]]], expected: -1 },
    { args: [[[0], [0, 0]]], expected: 0 },
  ],
};
