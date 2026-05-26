import type { Problem } from '../types';

export const problem: Problem = {
  id: 'maximum-number-of-points-with-cost',
  title: 'Maximum Number of Points with Cost',
  difficulty: 'medium',
  tags: ['dynamic-programming'],
  description: `You are given an \`m × n\` integer matrix \`points\` (0-indexed). Starting with 0 points, you must pick exactly one cell from each row. Picking cell \`(r, c)\` adds \`points[r][c]\` to your score. However, for adjacent rows, you subtract \`|c_curr - c_prev|\` from your score.

Return the **maximum** number of points you can achieve.`,
  constraints: [
    '`m == points.length`',
    '`n == points[r].length`',
    '`1 <= m, n <= 10^5`',
    '`1 <= m * n <= 10^5`',
    '`0 <= points[i][j] <= 10^5`',
  ],
  examples: [
    {
      input: 'points = [[1,2,3],[1,5,1],[3,1,1]]',
      output: '9',
      explanation: 'Pick (0,2)=3, (1,1)=5 (penalty |1-2|=1), (0,0)=3 (penalty |0-1|=1): 3+5-1+3-1=9.',
    },
    {
      input: 'points = [[1,5],[2,3],[4,2]]',
      output: '11',
      explanation: 'Pick (0,1)=5, (1,0)=2 (penalty 1), (2,0)=4 (penalty 0): 5+2-1+4=10... actually pick (1,1)=3: 5+3+0+2-1=9. Optimal: col1, col1, col0 = 5+3-0+4-1=11.',
    },
  ],
  hints: [
    'A naive DP is O(mn²). You need to propagate the row\'s best dp values in O(n) per row.',
    'Do a left-to-right sweep to compute left[j] = max(dp[k] - k) for k <= j, giving best top-left contribution. Do right-to-left for right[j] = max(dp[k] + k) for k >= j.',
    'For each cell j in the new row: dp[j] = points[i][j] + max(left[j] + j, right[j] - j).',
  ],
  functionName: 'maxPoints',
  params: ['points'],
  starterCode: {
    javascript: `function maxPoints(points) {

}`,
    python: `def maxPoints(points):
    pass`,
  },
  visibleTests: [
    { args: [[[1, 2, 3], [1, 5, 1], [3, 1, 1]]], expected: 9 },
    { args: [[[1, 5], [2, 3], [4, 2]]], expected: 11 },
    { args: [[[0]]], expected: 0 },
  ],
  hiddenTests: [
    { args: [[[5, 1, 3], [1, 5, 1], [1, 1, 5]]], expected: 13 },
    { args: [[[1, 2], [3, 4]]], expected: 6 },
    { args: [[[2, 3, 4, 1], [1, 4, 3, 2]]], expected: 7 },
  ],
};
