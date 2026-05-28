import type { Problem } from '../types';

export const problem: Problem = {
  id: 'grid-count-paths-mod',
  title: 'Count Paths in Grid (Mod 10^9+7)',
  difficulty: 'medium',
  tags: ['dynamic-programming', 'arrays', 'math'],
  description: `You are given an \`m x n\` integer grid \`grid\`. You start in the top-left cell \`(0, 0)\` and want to reach the bottom-right cell \`(m-1, n-1)\`. You can only move **right** or **down** at each step.

A cell is **blocked** if \`grid[i][j] === 1\`. You cannot pass through blocked cells. Count all distinct paths from the top-left to the bottom-right that avoid blocked cells.

Return the answer modulo **10^9 + 7**.

**Example:**
\`\`\`
grid = [
  [0, 0, 0],
  [0, 1, 0],
  [0, 0, 0]
]
\`\`\`
There are **2** paths: right→right→down→down and down→down→right→right.`,
  constraints: [
    '1 <= m, n <= 100',
    'grid[i][j] is 0 or 1',
    'grid[0][0] == 0 and grid[m-1][n-1] == 0',
  ],
  examples: [
    {
      input: 'grid = [[0,0,0],[0,1,0],[0,0,0]]',
      output: '2',
      explanation: 'Two valid paths: R→R→D→D and D→D→R→R. The center cell (1,1) is blocked.',
    },
    {
      input: 'grid = [[0,1],[0,0]]',
      output: '1',
      explanation: 'Only path is D→R.',
    },
    {
      input: 'grid = [[0,0],[1,0]]',
      output: '1',
      explanation: 'Only path is R→D.',
    },
  ],
  hints: [
    'Use standard DP: `dp[i][j]` = number of paths to reach cell `(i, j)`. If `grid[i][j] === 1`, `dp[i][j] = 0`.',
    '`dp[i][j] = dp[i-1][j] + dp[i][j-1]` for non-blocked cells, where out-of-bounds values are treated as 0. `dp[0][0] = 1`.',
    'Take each addition modulo 10^9+7. Final answer is `dp[m-1][n-1]`.',
  ],
  functionName: 'countPaths',
  params: ['grid'],
  starterCode: {
    javascript: `function countPaths(grid) {
  // Return number of distinct paths from top-left to bottom-right, mod 10^9+7
  const MOD = 1_000_000_007;
}`,
    typescript: "function countPaths(grid: number[][]): number {\n  // Return number of distinct paths from top-left to bottom-right, mod 10^9+7\n  const MOD = 1_000_000_007;\n}",

    python: `def countPaths(grid: list[list[int]]) -> int:
    # Return number of distinct paths from top-left to bottom-right, mod 10^9+7
    MOD = 10**9 + 7
    pass`,
  },
  visibleTests: [
    { args: [[[0, 0, 0], [0, 1, 0], [0, 0, 0]]], expected: 2 },
    { args: [[[0, 1], [0, 0]]], expected: 1 },
    { args: [[[0, 0], [1, 0]]], expected: 1 },
    { args: [[[0]]], expected: 1 },
  ],
  hiddenTests: [
    { args: [[[0, 0], [0, 0]]], expected: 2 },
    { args: [[[0, 0, 0], [0, 0, 0], [0, 0, 0]]], expected: 6 },
    { args: [[[0, 0, 0, 0]]], expected: 1 },
    { args: [[[0, 0, 1], [0, 0, 0], [0, 0, 0]]], expected: 5 },
    { args: [[[0, 0, 0], [1, 1, 0], [0, 0, 0]]], expected: 1 },
    { args: [[[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]]], expected: 10 },
  ],
};
