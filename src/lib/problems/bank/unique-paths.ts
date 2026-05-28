import type { Problem } from '../types';

export const problem: Problem = {
  id: 'unique-paths',
  title: 'Unique Paths',
  difficulty: 'easy',
  tags: ['dynamic-programming', 'math'],
  description: `A robot is located at the **top-left corner** of an \`m × n\` grid. The robot can only move either **right** or **down** at each step. The robot is trying to reach the **bottom-right corner** of the grid.

How many possible unique paths are there?`,
  constraints: [
    '1 <= m, n <= 100',
  ],
  examples: [
    {
      input: 'm = 3, n = 7',
      output: '28',
    },
    {
      input: 'm = 3, n = 2',
      output: '3',
      explanation: 'Right→Down→Down, Down→Right→Down, Down→Down→Right.',
    },
  ],
  hints: [
    'The robot can only move right or down. The number of ways to reach cell (i,j) is the sum of ways to reach (i-1,j) and (i,j-1) — these are the only two predecessors.',
    'Set `dp[0][j] = 1` for all j (first row, only one way to reach each cell) and `dp[i][0] = 1` for all i (first column). Then fill row by row: `dp[i][j] = dp[i-1][j] + dp[i][j-1]`.',
    '`const dp = Array.from({length: m}, () => new Array(n).fill(1)); for (let i = 1; i < m; i++) for (let j = 1; j < n; j++) dp[i][j] = dp[i-1][j] + dp[i][j-1]; return dp[m-1][n-1];`',
  ],
  functionName: 'uniquePaths',
  params: ['m', 'n'],
  starterCode: {
    javascript: 'function uniquePaths(m, n) {\n  \n}\n',
    python: 'def uniquePaths(m: int, n: int) -> int:\n    pass\n',
  },
  visibleTests: [
    { args: [3, 7], expected: 28 },
    { args: [3, 2], expected: 3 },
    { args: [1, 1], expected: 1 },
    { args: [2, 2], expected: 2 },
  ],
  hiddenTests: [
    { args: [1, 10], expected: 1 },
    { args: [10, 1], expected: 1 },
    { args: [5, 5], expected: 70 },
  ],
};
