import type { Problem } from '../types';

export const problem: Problem = {
  id: 'largest-1-bordered-square',
  title: 'Largest 1-Bordered Square',
  difficulty: 'medium',
  tags: ['arrays', 'dynamic-programming'],
  description: `Given a 2D \`grid\` of \`0\`s and \`1\`s, return the number of elements in the largest **square** subgrid that has all \`1\`s on its **border**, or \`0\` if such a subgrid doesn't exist in the grid.`,
  constraints: [
    '1 <= grid.length <= 100',
    '1 <= grid[0].length <= 100',
    'grid[i][j] is 0 or 1',
  ],
  examples: [
    {
      input: 'grid = [[1,1,1],[1,0,1],[1,1,1]]',
      output: '9',
      explanation: 'The entire 3×3 grid has all 1s on its border, so the answer is 9 (3²).',
    },
    {
      input: 'grid = [[1,1,0,0]]',
      output: '1',
      explanation: 'The largest bordered square is any single 1, giving area 1.',
    },
  ],
  hints: [
    'Precompute for each cell the number of consecutive 1s going left (horiz[r][c]) and going up (vert[r][c]).',
    'For each possible bottom-right corner (r, c) and side length k, the square is valid if horiz[r][c] >= k, horiz[r-k+1][c] >= k, vert[r][c] >= k, and vert[r][c-k+1] >= k.',
    'Try side lengths from large to small; return k² as soon as a valid square is found.',
  ],
  functionName: 'largest1BorderedSquare',
  params: ['grid'],
  starterCode: {
    javascript: `function largest1BorderedSquare(grid) {
  // Precompute consecutive 1s left and up; check all (corner, size) pairs
}`,
    typescript: `function largest1BorderedSquare(grid: number[][]): number {
  // Precompute consecutive 1s left and up; check all (corner, size) pairs
}`,
    python: `def largest1BorderedSquare(grid):
    # Precompute consecutive 1s left and up; check all (corner, size) pairs
    pass`,
  },
  visibleTests: [
    { args: [[[1,1,1],[1,0,1],[1,1,1]]], expected: 9 },
    { args: [[[1,1,0,0]]], expected: 1 },
  ],
  hiddenTests: [
    { args: [[[0]]], expected: 0 },
    { args: [[[1]]], expected: 1 },
    { args: [[[1,1],[1,1]]], expected: 4 },
    { args: [[[1,1,1],[1,1,1],[1,1,1]]], expected: 9 },
    { args: [[[0,1,1],[1,1,1],[1,1,0]]], expected: 4 },
  ],
};
