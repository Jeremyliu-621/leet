import type { Problem } from '../types';

export const problem: Problem = {
  id: 'maximum-sum-with-at-most-k-elements',
  title: 'Maximum Sum with at Most K Elements',
  difficulty: 'medium',
  tags: ['arrays', 'heap'],
  description: `You are given a 0-indexed \`m × n\` integer matrix \`grid\`, an integer array \`limits\` of length \`m\`, and an integer \`k\`.

You may select elements from \`grid\` subject to two constraints:
- From row \`i\`, you may select **at most** \`limits[i]\` elements.
- The **total** number of selected elements must be **at most** \`k\`.

Return the **maximum possible sum** of the selected elements.`,
  constraints: [
    'm == grid.length == limits.length',
    'n == grid[i].length',
    '1 <= m, n <= 50',
    '1 <= limits[i] <= n',
    '1 <= k <= m * n',
    '0 <= grid[i][j] <= 10^9',
  ],
  examples: [
    {
      input: 'grid = [[1,2],[3,4]], limits = [1,2], k = 2',
      output: '7',
      explanation:
        'From row 0 take at most 1: pick 2. From row 1 take at most 2: pick 4 and 3. Candidates: [4,3,2], top 2 = 4+3 = 7.',
    },
    {
      input: 'grid = [[5,3,7],[2,6,4]], limits = [2,1], k = 2',
      output: '13',
      explanation:
        'From row 0 take at most 2: [7,5]. From row 1 take at most 1: [6]. Top 2 of [7,6,5] = 7+6 = 13.',
    },
    {
      input: 'grid = [[1,2,3]], limits = [2], k = 1',
      output: '3',
      explanation: 'From the only row take at most 2: candidates [3,2]. Top 1 = 3.',
    },
  ],
  hints: [
    'Level 1: You cannot simply take the global top k elements — you must respect each row\'s limit.',
    'Level 2: From each row i, greedily collect the best limits[i] elements (sort that row descending and take the first limits[i]). These candidates are the only ones worth considering.',
    'Level 3: After collecting candidates from every row, sort all candidates descending and take the top k. The greedy works because picking a smaller candidate can never be better than skipping a larger one that is still available.',
  ],
  functionName: 'maxSum',
  params: ['grid', 'limits', 'k'],
  starterCode: {
    javascript: `function maxSum(grid, limits, k) {

}`,
    typescript: `function maxSum(grid: number[][], limits: number[], k: number): number {

}`,
    python: `def maxSum(grid, limits, k):
    pass`,
  },
  visibleTests: [
    { args: [[[1, 2], [3, 4]], [1, 2], 2], expected: 7 },
    { args: [[[5, 3, 7], [2, 6, 4]], [2, 1], 2], expected: 13 },
    { args: [[[1, 2, 3]], [2], 1], expected: 3 },
  ],
  hiddenTests: [
    { args: [[[1]], [1], 1], expected: 1 },
    { args: [[[1, 2], [3, 4]], [1, 1], 2], expected: 6 },
    { args: [[[5, 1, 4], [6, 2, 3]], [1, 1], 1], expected: 6 },
    { args: [[[1, 2, 3], [4, 5, 6], [7, 8, 9]], [1, 2, 3], 4], expected: 30 },
    { args: [[[10, 9], [8, 7]], [2, 2], 3], expected: 27 },
    { args: [[[0, 0], [0, 0]], [2, 2], 4], expected: 0 },
    { args: [[[3, 1], [2, 4]], [2, 1], 2], expected: 7 },
  ],
};
