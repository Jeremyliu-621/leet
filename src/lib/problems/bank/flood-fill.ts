import type { Problem } from '../types';

export const problem: Problem = {
  id: 'flood-fill',
  title: 'Flood Fill',
  difficulty: 'easy',
  tags: ['graph', 'arrays'],
  description: `An image is represented by a 2D grid of pixels. You are given a pixel coordinate \`(sr, sc)\` (row, column) and a new \`color\`.

Perform a **flood fill**: starting from \`image[sr][sc]\`, change the color of that pixel and all connected pixels sharing the same original color to \`color\`. Two pixels are connected if they are adjacent horizontally or vertically.

**Follow-up:** What happens if the starting pixel already has the target color?`,
  constraints: [
    '`m == image.length`, `n == image[i].length`',
    '`1 <= m, n <= 50`',
    '`0 <= image[i][j] < 65536`',
    '`0 <= color < 65536`',
  ],
  examples: [
    {
      input: 'image = [[1,1,1],[1,1,0],[1,0,1]], sr = 1, sc = 1, color = 2',
      output: '[[2,2,2],[2,2,0],[2,0,1]]',
      explanation: 'All cells connected to (1,1) with color 1 become color 2.',
    },
    {
      input: 'image = [[0,0,0],[0,0,0]], sr = 0, sc = 0, color = 0',
      output: '[[0,0,0],[0,0,0]]',
      explanation: 'Starting pixel already has the target color — return unchanged.',
    },
  ],
  params: ['image', 'sr', 'sc', 'color'],
  functionName: 'floodFill',
  starterCode: {
    javascript: `function floodFill(image, sr, sc, color) {
  // DFS/BFS from (sr, sc), painting connected same-color pixels
}`,
    python: `def floodFill(image, sr, sc, color):
    # DFS/BFS from (sr, sc), painting connected same-color pixels
    pass`,
  },
  hints: [
    'If the starting pixel already has the target color, return the image unchanged — otherwise you get infinite recursion.',
    'Save the original color first. DFS visits all 4 neighbors (up, down, left, right) that still have the original color.',
    'Mark a cell by setting it to `color` before recursing — this is the "visited" flag for free.',
  ],
  visibleTests: [
    {
      args: [[[1,1,1],[1,1,0],[1,0,1]], 1, 1, 2],
      expected: [[2,2,2],[2,2,0],[2,0,1]],
    },
    {
      args: [[[0,0,0],[0,0,0]], 0, 0, 0],
      expected: [[0,0,0],[0,0,0]],
    },
    {
      args: [[[0,0,0],[0,1,1]], 1, 1, 1],
      expected: [[0,0,0],[0,1,1]],
    },
  ],
  hiddenTests: [
    {
      args: [[[1,1,1],[1,1,0],[1,0,1]], 0, 0, 3],
      expected: [[3,3,3],[3,3,0],[3,0,1]],
    },
    {
      args: [[[1]], 0, 0, 2],
      expected: [[2]],
    },
    {
      args: [[[0,0,0],[0,0,0],[0,0,0]], 1, 1, 5],
      expected: [[5,5,5],[5,5,5],[5,5,5]],
    },
    {
      args: [[[1,0,1],[0,1,0],[1,0,1]], 0, 0, 2],
      expected: [[2,0,1],[0,1,0],[1,0,1]],
    },
  ],
};
