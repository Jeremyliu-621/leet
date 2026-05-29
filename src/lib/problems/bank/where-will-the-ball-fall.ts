import type { Problem } from '../types';

export const problem: Problem = {
  id: 'where-will-the-ball-fall',
  title: 'Where Will the Ball Fall',
  difficulty: 'medium',
  tags: ['arrays', 'simulation'],
  description: `You have a 2D grid of size \`m x n\` representing a box, and you have \`n\` balls. The box is open on the top and bottom sides.

Each cell in the box has a diagonal board spanning two corners of the cell that can redirect a ball to the right or to the left.

- A board that redirects the ball to the **right** spans the top-left corner to the bottom-right corner and is represented as \`1\` in the grid.
- A board that redirects the ball to the **left** spans the top-right corner to the bottom-left corner and is represented as \`-1\` in the grid.

We drop one ball from the top of each column of the box. Each ball can get **stuck** in the box or fall out of the bottom. A ball gets stuck when it would go to the left/right side of the grid, or when two boards form a **"V"** shape making the ball unable to pass through (a board pointing right followed immediately by a board pointing left, or vice versa).

Return an array \`answer\` of size \`n\` where \`answer[i]\` is the column that the ball falls out of at the bottom after dropping the ball from the \`i\`th column of the top, or \`answer[i] == -1\` if the ball gets stuck in the box.`,
  constraints: [
    '`m == grid.length`',
    '`n == grid[i].length`',
    '`1 <= m, n <= 100`',
    '`grid[i][j]` is `1` or `-1`',
  ],
  examples: [
    {
      input: 'grid = [[1,1,1,-1,-1],[1,1,1,-1,-1],[-1,-1,-1,1,1],[1,1,1,1,-1],[-1,-1,-1,-1,-1]]',
      output: '[1,-1,-1,-1,-1]',
      explanation: 'Ball from column 0 exits at column 1. All other balls get stuck.',
    },
    {
      input: 'grid = [[-1]]',
      output: '[-1]',
      explanation: 'The single ball immediately tries to go left off the grid edge.',
    },
  ],
  hints: [
    'Simulate each ball independently through all m rows.',
    'At each row, the ball at column j moves to j+grid[r][j]. Check validity: in-bounds AND the neighboring cell has the same direction (avoiding V-shapes).',
    'If the ball falls off a boundary or hits a V, mark it -1 and stop.',
  ],
  functionName: 'findBall',
  params: ['grid'],
  starterCode: {
    javascript: `function findBall(grid) {

}`,
    typescript: `function findBall(grid: number[][]): number[] {

}`,
    python: `def findBall(grid):
    pass`,
  },
  visibleTests: [
    {
      args: [[[1, 1, 1, -1, -1], [1, 1, 1, -1, -1], [-1, -1, -1, 1, 1], [1, 1, 1, 1, -1], [-1, -1, -1, -1, -1]]],
      expected: [1, -1, -1, -1, -1],
    },
    { args: [[[-1]]], expected: [-1] },
  ],
  hiddenTests: [
    { args: [[[1]]], expected: [-1] },
    { args: [[[1, 1, 1]]], expected: [1, 2, -1] },
    { args: [[[-1, -1, -1]]], expected: [-1, 0, 1] },
    { args: [[[1, -1]]], expected: [-1, -1] },
    {
      args: [[[1, 1], [-1, -1]]],
      expected: [0, -1],
    },
    {
      args: [[[1, 1, 1], [1, 1, 1], [1, 1, 1]]],
      expected: [-1, -1, -1],
    },
  ],
};
