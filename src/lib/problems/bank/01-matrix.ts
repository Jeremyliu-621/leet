import type { Problem } from '../types';

export const problem: Problem = {
  id: '01-matrix',
  title: '01 Matrix',
  difficulty: 'medium',
  tags: ['graph'],
  description: `Given an \`m × n\` binary matrix \`mat\`, return a matrix of the same dimensions where each cell contains the **distance to the nearest 0**. The distance between two adjacent cells is 1.`,
  constraints: [
    '`m == mat.length`',
    '`n == mat[i].length`',
    '`1 <= m, n <= 10⁴`',
    '`1 <= m * n <= 10⁴`',
    '`mat[i][j]` is either `0` or `1`',
    'There is at least one `0` in `mat`',
  ],
  examples: [
    {
      input: 'mat = [[0,0,0],[0,1,0],[0,0,0]]',
      output: '[[0,0,0],[0,1,0],[0,0,0]]',
    },
    {
      input: 'mat = [[0,0,0],[0,1,0],[1,1,1]]',
      output: '[[0,0,0],[0,1,0],[1,2,1]]',
    },
  ],
  hints: [
    'Start BFS from **all zeros simultaneously** (multi-source BFS). Initialize the queue with every zero cell and set the distance of all 1-cells to Infinity.',
    'As BFS expands, each 1-cell is reached for the first time via the shortest path from a 0.',
    'This is more efficient than running BFS from each 0 separately.',
  ],
  functionName: 'updateMatrix',
  params: ['mat'],
  starterCode: {
    javascript: `function updateMatrix(mat) {

}`,
    typescript: "function updateMatrix(mat: number[][]): number[][] {\n\n}",

    python: `def updateMatrix(mat):
    pass`,
  },
  visibleTests: [
    {
      args: [[[0, 0, 0], [0, 1, 0], [0, 0, 0]]],
      expected: [[0, 0, 0], [0, 1, 0], [0, 0, 0]],
    },
    {
      args: [[[0, 0, 0], [0, 1, 0], [1, 1, 1]]],
      expected: [[0, 0, 0], [0, 1, 0], [1, 2, 1]],
    },
    { args: [[[0]]], expected: [[0]] },
  ],
  hiddenTests: [
    { args: [[[1, 0]]], expected: [[1, 0]] },
    {
      args: [[[0, 1, 1], [1, 1, 1], [1, 1, 0]]],
      expected: [[0, 1, 2], [1, 2, 1], [2, 1, 0]],
    },
    {
      args: [[[0, 0], [1, 1]]],
      expected: [[0, 0], [1, 1]],
    },
  ],
};
