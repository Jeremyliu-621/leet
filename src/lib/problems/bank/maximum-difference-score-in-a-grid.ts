import type { Problem } from '../types';

export const problem: Problem = {
  id: 'maximum-difference-score-in-a-grid',
  title: 'Maximum Difference Score in a Grid',
  difficulty: 'medium',
  tags: ['arrays', 'dynamic-programming'],
  description: `You are given an \`m x n\` matrix \`grid\` consisting of **positive** integers. You can move from a cell in the matrix to **any** other cell that is in the rows **below** and columns to the **right** (strictly). The **score** of a move from a cell with value \`c1\` to a cell with value \`c2\` is \`c2 - c1\`.

You can make **any** number of moves before stopping. The total score of a **path** is the sum of the scores of all moves made. Return the **maximum** total score you can achieve.

**Note:** You must make at least one move.`,
  constraints: [
    '2 <= m == grid.length, n == grid[i].length <= 1000',
    '1 <= grid[i][j] <= 10^5',
  ],
  examples: [
    {
      input: 'grid = [[9,5,7,3],[8,9,6,1],[6,7,14,3],[2,5,3,1]]',
      output: '9',
      explanation: 'Best path: 5 → 14 (score = 14 - 5 = 9). The total score telescopes to last - first.',
    },
    {
      input: 'grid = [[4,3,2],[3,2,1]]',
      output: '-2',
      explanation: 'All moves decrease in value. The best single move is -2 (e.g., 4→2 or 3→1).',
    },
    {
      input: 'grid = [[1,2,3],[4,5,6],[7,8,9]]',
      output: '8',
      explanation: 'Best path: (0,0)=1 → (2,2)=9, score = 9 - 1 = 8.',
    },
  ],
  hints: [
    'The total score of any path telescopes: score = last_cell - first_cell.',
    'For each destination cell (i,j), find the minimum value among all cells (r,c) with r < i and c < j.',
    'Track dp[i][j] = minimum grid value in the rectangle [0..i][0..j]. Then score at (i,j) = grid[i][j] - dp[i-1][j-1].',
    'Update dp[i][j] = min(dp[i-1][j], dp[i][j-1], grid[i][j]) as you scan.',
  ],
  functionName: 'maxScore',
  params: ['grid'],
  starterCode: {
    javascript: `function maxScore(grid) {
  const m = grid.length, n = grid[0].length;
  const mn = Array.from({length: m}, () => new Array(n).fill(Infinity));
  mn[0][0] = grid[0][0];
  for (let i = 1; i < m; i++) mn[i][0] = Math.min(mn[i-1][0], grid[i][0]);
  for (let j = 1; j < n; j++) mn[0][j] = Math.min(mn[0][j-1], grid[0][j]);
  for (let i = 1; i < m; i++)
    for (let j = 1; j < n; j++)
      mn[i][j] = Math.min(mn[i-1][j], mn[i][j-1], grid[i][j]);
  let ans = -Infinity;
  for (let i = 1; i < m; i++)
    for (let j = 1; j < n; j++)
      ans = Math.max(ans, grid[i][j] - mn[i-1][j-1]);
  return ans;
}`,
    typescript: `function maxScore(grid: number[][]): number {
  const m = grid.length, n = grid[0]!.length;
  const mn: number[][] = Array.from({length: m}, () => new Array(n).fill(Infinity));
  mn[0]![0] = grid[0]![0]!;
  for (let i = 1; i < m; i++) mn[i]![0] = Math.min(mn[i-1]![0]!, grid[i]![0]!);
  for (let j = 1; j < n; j++) mn[0]![j] = Math.min(mn[0]![j-1]!, grid[0]![j]!);
  for (let i = 1; i < m; i++)
    for (let j = 1; j < n; j++)
      mn[i]![j] = Math.min(mn[i-1]![j]!, mn[i]![j-1]!, grid[i]![j]!);
  let ans = -Infinity;
  for (let i = 1; i < m; i++)
    for (let j = 1; j < n; j++)
      ans = Math.max(ans, grid[i]![j]! - mn[i-1]![j-1]!);
  return ans;
}`,
    python: `def maxScore(grid: list[list[int]]) -> int:
    m, n = len(grid), len(grid[0])
    mn = [[float('inf')]*n for _ in range(m)]
    mn[0][0] = grid[0][0]
    for i in range(1, m): mn[i][0] = min(mn[i-1][0], grid[i][0])
    for j in range(1, n): mn[0][j] = min(mn[0][j-1], grid[0][j])
    for i in range(1, m):
        for j in range(1, n):
            mn[i][j] = min(mn[i-1][j], mn[i][j-1], grid[i][j])
    ans = float('-inf')
    for i in range(1, m):
        for j in range(1, n):
            ans = max(ans, grid[i][j] - mn[i-1][j-1])
    return ans`,
  },
  visibleTests: [
    { args: [[[9, 5, 7, 3], [8, 9, 6, 1], [6, 7, 14, 3], [2, 5, 3, 1]]], expected: 9 },
    { args: [[[4, 3, 2], [3, 2, 1]]], expected: -2 },
    { args: [[[1, 2, 3], [4, 5, 6], [7, 8, 9]]], expected: 8 },
  ],
  hiddenTests: [
    { args: [[[1, 1], [1, 1]]], expected: 0 },
    { args: [[[2, 1], [3, 4]]], expected: 2 },
    { args: [[[1, 3, 1, 2], [4, 3, 2, 1], [5, 4, 3, 2], [6, 5, 4, 3]]], expected: 4 },
    { args: [[[3, 2], [1, 4]]], expected: 1 },
    { args: [[[10, 1], [1, 10]]], expected: 0 },
    { args: [[[1, 10], [1, 10]]], expected: 9 },
    { args: [[[5, 5, 5], [5, 5, 5], [5, 5, 5]]], expected: 0 },
    { args: [[[3, 5, 2], [6, 1, 4]]], expected: 1 },
  ],
};
