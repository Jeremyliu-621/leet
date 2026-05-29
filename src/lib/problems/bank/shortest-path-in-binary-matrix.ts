import type { Problem } from '../types';

export const problem: Problem = {
  id: 'shortest-path-in-binary-matrix',
  title: 'Shortest Path in Binary Matrix',
  difficulty: 'medium',
  tags: ['graph', 'shortest-path'],
  description: `Given an \`n × n\` binary matrix \`grid\`, return the length of the shortest **clear path** from the top-left cell \`(0, 0)\` to the bottom-right cell \`(n - 1, n - 1)\`. A clear path is a path where every cell is \`0\` and each adjacent step is in one of the **8 directions** (horizontal, vertical, diagonal).

Return \`-1\` if no such path exists. The length is the number of cells visited.`,
  constraints: [
    'n == grid.length == grid[i].length',
    '1 <= n <= 100',
    'grid[i][j] is 0 or 1',
  ],
  examples: [
    {
      input: 'grid = [[0,1],[1,0]]',
      output: '2',
      explanation: 'The path goes (0,0) → (1,1), visiting 2 cells.',
    },
    {
      input: 'grid = [[0,0,0],[1,1,0],[1,1,0]]',
      output: '4',
      explanation: 'The shortest clear path visits 4 cells: (0,0)→(0,1)→(1,2)→(2,2).',
    },
    {
      input: 'grid = [[1,0,0],[1,1,0],[1,1,0]]',
      output: '-1',
      explanation: 'The start cell (0,0) is blocked.',
    },
  ],
  hints: [
    'Use BFS from (0,0). Each state is a cell; the distance is the number of cells visited so far.',
    'Try all 8 neighbors at each step. Keep a visited set or mark cells in place to avoid revisiting.',
    'If the start or end cell is 1, immediately return -1. If n == 1 and grid[0][0] == 0, return 1.',
  ],
  functionName: 'shortestPathBinaryMatrix',
  params: ['grid'],
  starterCode: {
    javascript: 'function shortestPathBinaryMatrix(grid) {\n  \n}\n',
    typescript: 'function shortestPathBinaryMatrix(grid: number[][]): number {\n  \n}\n',
    python: 'def shortestPathBinaryMatrix(grid):\n    pass\n',
  },
  visibleTests: [
    { args: [[[0, 1], [1, 0]]], expected: 2 },
    { args: [[[0, 0, 0], [1, 1, 0], [1, 1, 0]]], expected: 4 },
    { args: [[[1, 0, 0], [1, 1, 0], [1, 1, 0]]], expected: -1 },
  ],
  hiddenTests: [
    { args: [[[0]]], expected: 1 },
    { args: [[[1]]], expected: -1 },
    { args: [[[0, 0], [0, 0]]], expected: 2 },
    { args: [[[0, 0, 0], [0, 0, 0], [0, 0, 0]]], expected: 3 },
    { args: [[[0, 1, 1, 0, 0], [0, 1, 0, 1, 1], [0, 1, 1, 0, 0], [0, 0, 0, 0, 1], [0, 0, 0, 0, 0]]], expected: 7 },
    { args: [[[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]]], expected: 4 },
  ],
};
