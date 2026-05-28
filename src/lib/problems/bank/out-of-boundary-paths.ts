import type { Problem } from '../types';

export const problem: Problem = {
  id: 'out-of-boundary-paths',
  title: 'Out of Boundary Paths',
  difficulty: 'medium',
  tags: ['dynamic-programming'],
  description: `There is an \`m x n\` grid with a ball. The ball is initially at the position \`[startRow, startColumn]\`. You are allowed to move the ball to one of the four adjacent cells in the grid (possibly out of the grid crossing the grid boundary). You can apply **at most** \`maxMove\` moves to the ball.

Given the five integers \`m\`, \`n\`, \`maxMove\`, \`startRow\`, \`startColumn\`, return the number of paths to move the ball out of the grid boundary. Since the answer can be very large, return it **modulo** \`10^9 + 7\`.`,
  constraints: [
    '1 <= m, n <= 50',
    '0 <= maxMove <= 50',
    '0 <= startRow < m',
    '0 <= startColumn < n',
  ],
  examples: [
    {
      input: 'm = 2, n = 2, maxMove = 2, startRow = 0, startColumn = 0',
      output: '6',
      explanation: 'There are 6 paths to move the ball out of the 2x2 grid in at most 2 moves starting from (0,0).',
    },
    {
      input: 'm = 1, n = 3, maxMove = 3, startRow = 0, startColumn = 1',
      output: '12',
    },
  ],
  hints: [
    'dp[move][row][col] = number of ways to reach (row, col) after exactly `move` moves.',
    'For each step from an in-bounds cell, add contributions going out-of-bounds to the answer.',
    'Transition: dp[k][r][c] = sum of dp[k-1][r±1][c] + dp[k-1][r][c±1] for valid neighbors.',
  ],
  functionName: 'findPaths',
  params: ['m', 'n', 'maxMove', 'startRow', 'startColumn'],
  starterCode: {
    javascript: `function findPaths(m, n, maxMove, startRow, startColumn) {

}`,
    typescript: "function findPaths(m: number, n: number, maxMove: number, startRow: number, startColumn: number): number {\n\n}",

    python: `def findPaths(m, n, maxMove, startRow, startColumn):
    pass`,
  },
  visibleTests: [
    { args: [2, 2, 2, 0, 0], expected: 6 },
    { args: [1, 3, 3, 0, 1], expected: 12 },
  ],
  hiddenTests: [
    { args: [1, 1, 0, 0, 0], expected: 0 },
    { args: [1, 1, 1, 0, 0], expected: 4 },
    { args: [2, 2, 0, 1, 1], expected: 0 },
    { args: [8, 7, 16, 1, 5], expected: 102984580 },
  ],
};
