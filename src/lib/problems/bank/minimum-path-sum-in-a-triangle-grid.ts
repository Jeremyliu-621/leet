import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-path-sum-in-a-triangle-grid',
  title: 'Minimum Path Sum in a Triangle Grid',
  difficulty: 'medium',
  tags: ['arrays', 'dynamic-programming'],
  description: `Given a \`triangle\` array, return the **minimum path sum** from top to bottom.

For each step, you may move to an adjacent number of the row below. More formally, if you are at index \`i\` on the current row, you may move to either index \`i\` or index \`i + 1\` on the next row.

The triangle is given as a list of lists where \`triangle[i]\` has exactly \`i + 1\` elements.`,
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
      explanation: 'Path 2→3→5→1 = 11.',
    },
    {
      input: 'triangle = [[-10]]',
      output: '-10',
      explanation: 'Only one element.',
    },
    {
      input: 'triangle = [[2],[3,4],[6,5,7]]',
      output: '10',
      explanation: 'Path 2→3→5 = 10.',
    },
  ],
  hints: [
    'Level 1: Bottom-up DP: start from the last row and work upwards.',
    'Level 2: dp[j] = min(dp[j], dp[j+1]) + triangle[i][j]. After processing all rows, dp[0] is the answer.',
    'Level 3: In-place modification of a copy of the last row, updating upward. O(n^2) time, O(n) space.',
  ],
  functionName: 'minimumTotal',
  params: ['triangle'],
  starterCode: {
    javascript: `function minimumTotal(triangle) {
  const dp = [...triangle[triangle.length - 1]];
  for (let i = triangle.length - 2; i >= 0; i--) {
    for (let j = 0; j <= i; j++) {
      dp[j] = triangle[i][j] + Math.min(dp[j], dp[j + 1]);
    }
  }
  return dp[0];
}`,
    typescript: `function minimumTotal(triangle: number[][]): number {
  const dp = [...triangle[triangle.length - 1]!];
  for (let i = triangle.length - 2; i >= 0; i--) {
    for (let j = 0; j <= i; j++) {
      dp[j] = triangle[i]![j]! + Math.min(dp[j]!, dp[j + 1]!);
    }
  }
  return dp[0]!;
}`,
    python: `def minimumTotal(triangle):
    if hasattr(triangle, 'to_py'): triangle = triangle.to_py()
    triangle = [[int(x) for x in (row.to_py() if hasattr(row,'to_py') else row)] for row in triangle]
    dp = triangle[-1][:]
    for i in range(len(triangle) - 2, -1, -1):
        for j in range(i + 1):
            dp[j] = triangle[i][j] + min(dp[j], dp[j + 1])
    return dp[0]`,
  },
  visibleTests: [
    { args: [[[2], [3, 4], [6, 5, 7], [4, 1, 8, 3]]], expected: 11 },
    { args: [[[-10]]], expected: -10 },
    { args: [[[2], [3, 4], [6, 5, 7]]], expected: 10 },
  ],
  hiddenTests: [
    { args: [[[1], [2, 3]]], expected: 3 },
    { args: [[[-1], [2, 3], [1, -1, -3]]], expected: -1 },
    { args: [[[0], [0, 0], [0, 0, 0]]], expected: 0 },
    { args: [[[5], [4, 8], [3, 2, 6], [1, 4, 3, 2]]], expected: 13 },
  ],
};
