import type { Problem } from '../types';

export const problem: Problem = {
  id: 'longest-increasing-path-matrix',
  title: 'Longest Increasing Path in a Matrix',
  difficulty: 'hard',
  tags: ['graph', 'dynamic-programming', 'arrays'],
  description: `Given an \`m × n\` integer matrix, return the length of the **longest strictly increasing path**. From each cell, you can move in four directions (up, down, left, right) but not diagonally. Movement must be to a **strictly larger** value.

The matrix is given as a 2D array where \`matrix[i][j]\` is the value at row \`i\`, column \`j\`.

**Example:**
\`\`\`
9  9  4
6  6  8
2  1  1
\`\`\`
Longest increasing path: 1 → 2 → 6 → 9, length **4**.`,
  constraints: [
    'm == matrix.length',
    'n == matrix[0].length',
    '1 <= m, n <= 200',
    '0 <= matrix[i][j] <= 2^31 - 1',
  ],
  examples: [
    {
      input: 'matrix = [[9,9,4],[6,6,8],[2,1,1]]',
      output: '4',
      explanation: 'The longest increasing path is [1,2,6,9].',
    },
    {
      input: 'matrix = [[3,4,5],[3,2,6],[2,2,1]]',
      output: '4',
      explanation: 'The longest increasing path is [3,4,5,6].',
    },
    {
      input: 'matrix = [[1]]',
      output: '1',
      explanation: 'Single cell — path length is 1.',
    },
  ],
  hints: [
    'Use DFS with memoization. For each cell (i, j), the longest increasing path from it = 1 + max over all valid neighbors where neighbor value > current value. Cache results in a `memo` 2D array (initialized to 0).',
    'If `memo[i][j] > 0`, return it directly (already computed). Otherwise recurse into all 4 directions where the neighbor is in-bounds and strictly larger. Set `memo[i][j] = result` before returning.',
    `\`\`\`js\nfunction longestIncreasingPath(matrix) {\n  const m = matrix.length, n = matrix[0].length;\n  const memo = Array.from({length: m}, () => new Array(n).fill(0));\n  const dirs = [[-1,0],[1,0],[0,-1],[0,1]];\n  function dfs(i, j) {\n    if (memo[i][j]) return memo[i][j];\n    let best = 1;\n    for (const [di, dj] of dirs) {\n      const ni = i + di, nj = j + dj;\n      if (ni >= 0 && ni < m && nj >= 0 && nj < n && matrix[ni][nj] > matrix[i][j])\n        best = Math.max(best, 1 + dfs(ni, nj));\n    }\n    return (memo[i][j] = best);\n  }\n  let ans = 0;\n  for (let i = 0; i < m; i++) for (let j = 0; j < n; j++) ans = Math.max(ans, dfs(i, j));\n  return ans;\n}\n\`\`\``,
  ],
  functionName: 'longestIncreasingPath',
  params: ['matrix'],
  starterCode: {
    javascript: `function longestIncreasingPath(matrix) {\n\n}`,
    typescript: `function longestIncreasingPath(matrix: number[][]): number {\n\n}`,
    python: `def longestIncreasingPath(matrix: list[list[int]]) -> int:\n    pass`,
  },
  visibleTests: [
    { args: [[[9, 9, 4], [6, 6, 8], [2, 1, 1]]], expected: 4 },
    { args: [[[3, 4, 5], [3, 2, 6], [2, 2, 1]]], expected: 4 },
    { args: [[[1]]], expected: 1 },
  ],
  hiddenTests: [
    { args: [[[1, 2], [3, 4]]], expected: 3 },
    { args: [[[1, 2, 3], [6, 5, 4]]], expected: 6 },
    { args: [[[7, 8, 9], [6, 1, 2], [5, 4, 3]]], expected: 9 },
    { args: [[[1, 1], [1, 1]]], expected: 1 },
    { args: [[[1, 2, 3, 4, 5]]], expected: 5 },
    { args: [[[5, 4, 3, 2, 1]]], expected: 5 },
    { args: [[[0, 1, 2, 3], [11, 12, 13, 4], [10, 15, 14, 5], [9, 8, 7, 6]]], expected: 16 },
    { args: [[[3, 3, 3], [3, 1, 3], [3, 3, 3]]], expected: 2 },
  ],
};
