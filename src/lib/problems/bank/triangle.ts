import type { Problem } from '../types';

export const problem: Problem = {
  id: 'triangle',
  title: 'Triangle',
  difficulty: 'medium',
  tags: ['dynamic-programming'],
  description: `Given a \`triangle\` array, return the **minimum path sum** from top to bottom.

For each step, you may move to an **adjacent number** of the row below. More formally, if you are on index \`i\` on the current row, you may move to either index \`i\` or index \`i + 1\` on the next row.`,
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
      explanation: 'Minimum path: 2 → 3 → 5 → 1 = 11.',
    },
    {
      input: 'triangle = [[-10]]',
      output: '-10',
    },
  ],
  hints: [
    'Bottom-up DP: start from the second-to-last row. For each element, add the minimum of the two adjacent elements in the row below.',
    'You can modify in-place (or use a 1D DP array the size of the last row). After processing, dp[0] is the answer.',
    'dp[j] = triangle[i][j] + min(dp[j], dp[j+1]) for each row i from bottom-2 to 0.',
  ],
  functionName: 'minimumTotal',
  params: ['triangle'],
  starterCode: {
    javascript: `function minimumTotal(triangle) {
  // Return the minimum path sum from top to bottom
}`,
    typescript: "function minimumTotal(triangle: number[][]): number {\n  // Return the minimum path sum from top to bottom\n}",

    python: `def minimumTotal(triangle):
    # Return the minimum path sum from top to bottom
    pass`,
  },
  visibleTests: [
    { args: [[[2], [3, 4], [6, 5, 7], [4, 1, 8, 3]]], expected: 11 },
    { args: [[[-10]]], expected: -10 },
    { args: [[[1], [2, 3]]], expected: 3 },
  ],
  hiddenTests: [
    { args: [[[1], [2, 3], [4, 5, 6]]], expected: 7 },
    { args: [[[2], [3, 4], [6, 5, 7]]], expected: 10 },
    { args: [[[-1], [2, 3], [1, -1, -3]]], expected: -1 },
    { args: [[[1], [-2, -3], [1, 2, 3], [-4, 3, 2, -1]]], expected: -4 },
  ],
};
