import type { Problem } from '../types';

export const problem: Problem = {
  id: 'unique-paths-ii',
  title: 'Unique Paths II',
  difficulty: 'medium',
  tags: ['dynamic-programming'],
  description: `You are given an \`m x n\` integer array \`obstacleGrid\`. A robot is initially located at the **top-left corner** and wants to reach the **bottom-right corner**.

An obstacle and space are marked as \`1\` or \`0\` respectively in the grid. A path that the robot takes **cannot** include any square that is an obstacle.

Return the number of possible unique paths that the robot can take to reach the bottom-right corner.`,
  constraints: [
    'm == obstacleGrid.length',
    'n == obstacleGrid[i].length',
    '1 <= m, n <= 100',
    'obstacleGrid[i][j] is 0 or 1',
  ],
  examples: [
    {
      input: 'obstacleGrid = [[0,0,0],[0,1,0],[0,0,0]]',
      output: '2',
      explanation: 'There is one obstacle in the middle. There are two ways to reach the bottom-right: right→right→down→down or down→down→right→right.',
    },
    {
      input: 'obstacleGrid = [[0,1],[0,0]]',
      output: '1',
    },
  ],
  hints: [
    'Use 2D DP. dp[i][j] = number of ways to reach cell (i,j). Set dp[i][j] = 0 if grid[i][j] == 1.',
    'Initialize dp[0][0] = 1 if no obstacle. Fill first row/col: if any cell has obstacle, all subsequent cells in that row/col are 0.',
    'Transition: dp[i][j] = dp[i-1][j] + dp[i][j-1] for non-obstacle cells.',
  ],
  functionName: 'uniquePathsWithObstacles',
  params: ['obstacleGrid'],
  starterCode: {
    javascript: `function uniquePathsWithObstacles(obstacleGrid) {
  // Return number of unique paths avoiding obstacles
}`,
    python: `def uniquePathsWithObstacles(obstacleGrid):
    # Return number of unique paths avoiding obstacles
    pass`,
  },
  visibleTests: [
    { args: [[[0,0,0],[0,1,0],[0,0,0]]], expected: 2 },
    { args: [[[0,1],[0,0]]], expected: 1 },
    { args: [[[0,0],[1,0]]], expected: 1 },
  ],
  hiddenTests: [
    { args: [[[0]]], expected: 1 },
    { args: [[[1]]], expected: 0 },
    { args: [[[0,0,0],[0,0,0],[0,0,0]]], expected: 6 },
    { args: [[[0,0],[0,0]]], expected: 2 },
  ],
};
