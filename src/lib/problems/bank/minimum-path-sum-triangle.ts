import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-path-sum-triangle',
  title: 'Minimum Path Sum in Triangle',
  difficulty: 'medium',
  tags: ['dynamic-programming'],
  description: `Given a \`triangle\` array where \`triangle[i]\` has \`i + 1\` numbers, find the **minimum path sum** from the top to the bottom.

At each step you may move to an **adjacent number** on the row below — i.e., from index \`j\` in row \`i\` you may move to index \`j\` or \`j + 1\` in row \`i + 1\`.

**Bonus:** Solve it in O(n) extra space, where n is the number of rows.`,
  constraints: [
    '1 <= triangle.length <= 200',
    'triangle[i].length == i + 1',
    '-10^4 <= triangle[i][j] <= 10^4',
  ],
  examples: [
    {
      input: 'triangle = [[2],[3,4],[6,5,7],[4,1,8,3]]',
      output: '11',
      explanation: 'Path: 2 → 3 → 5 → 1 = 11.',
    },
    {
      input: 'triangle = [[-10]]',
      output: '-10',
      explanation: 'Single element — the only path is the element itself.',
    },
    {
      input: 'triangle = [[1],[2,3],[4,5,6]]',
      output: '7',
      explanation: 'Path: 1 → 2 → 4 = 7.',
    },
  ],
  hints: [
    'Work bottom-up: start from the last row and for each row, compute the minimum path sum to the bottom by combining the current element with the better of its two children.',
    'You can do this in-place on a copy of the last row (the dp array). For row index `row`, column `col`: `dp[col] = triangle[row][col] + Math.min(dp[col], dp[col+1])`. After processing all rows, `dp[0]` is the answer.',
    'Code skeleton:\n```js\nfunction minimumTotal(triangle) {\n  const dp = [...triangle[triangle.length - 1]];\n  for (let row = triangle.length - 2; row >= 0; row--) {\n    for (let col = 0; col <= row; col++) {\n      dp[col] = triangle[row][col] + Math.min(dp[col], dp[col + 1]);\n    }\n  }\n  return dp[0];\n}\n```',
  ],
  functionName: 'minimumTotal',
  params: ['triangle'],
  starterCode: {
    javascript: `function minimumTotal(triangle) {

}`,
    typescript: `function minimumTotal(triangle: number[][]): number {

}`,
    python: `def minimumTotal(triangle):
    pass`,
  },
  visibleTests: [
    { args: [[[2], [3, 4], [6, 5, 7], [4, 1, 8, 3]]], expected: 11 },
    { args: [[[-10]]], expected: -10 },
    { args: [[[1], [2, 3], [4, 5, 6]]], expected: 7 },
  ],
  hiddenTests: [
    { args: [[[1], [2, 3]]], expected: 3 },
    { args: [[[-1], [2, 3], [1, -1, -3]]], expected: -1 },
    { args: [[[1], [1, 1], [1, 1, 1]]], expected: 3 },
    { args: [[[1], [2, 3], [4, 5, 6], [7, 8, 9, 10]]], expected: 14 },
    { args: [[[-5], [1, -2], [3, 4, -1]]], expected: -8 },
    { args: [[[5], [4, 8], [3, 6, 3], [2, 4, 6, 5]]], expected: 14 },
    { args: [[[0], [1, 2], [3, 4, 5], [6, 7, 8, 9]]], expected: 10 },
    { args: [[[7], [3, 8], [8, 1, 0], [2, 7, 4, 4], [4, 5, 2, 6, 5]]], expected: 17 },
    { args: [[[10], [5, 15], [2, 20, 25], [1, 4, 5, 6]]], expected: 18 },
  ],
};
