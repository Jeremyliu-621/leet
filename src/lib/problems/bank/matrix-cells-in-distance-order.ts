import type { Problem } from '../types';

export const problem: Problem = {
  id: 'matrix-cells-in-distance-order',
  title: 'Matrix Cells in Distance Order',
  difficulty: 'easy',
  tags: ['arrays'],
  description: `You are given four integers \`rows\`, \`cols\`, \`rCenter\`, and \`cCenter\`. There is a \`rows × cols\` matrix and you are on the cell with coordinates \`(rCenter, cCenter)\`.

Return the coordinates of all cells in the matrix, sorted by their distance from \`(rCenter, cCenter)\` from the smallest distance to the largest distance. You may return the answer in any order that satisfies this condition.

The **Manhattan distance** between two cells \`(r1, c1)\` and \`(r2, c2)\` is \`|r1 - r2| + |c1 - c2|\`.

Ties are broken by row (ascending), then by column (ascending).`,
  constraints: [
    '`1 <= rows, cols <= 100`',
    '`0 <= rCenter < rows`',
    '`0 <= cCenter < cols`',
  ],
  examples: [
    {
      input: 'rows = 1, cols = 2, rCenter = 0, cCenter = 0',
      output: '[[0,0],[0,1]]',
      explanation: 'The distances from (0,0) are: (0,0)→0, (0,1)→1.',
    },
    {
      input: 'rows = 2, cols = 2, rCenter = 0, cCenter = 1',
      output: '[[0,1],[0,0],[1,1],[1,0]]',
      explanation: 'Distances: (0,1)→0, (0,0)→1, (1,1)→1, (1,0)→2.',
    },
    {
      input: 'rows = 2, cols = 3, rCenter = 1, cCenter = 2',
      output: '[[1,2],[0,2],[1,1],[0,1],[1,0],[0,0]]',
      explanation: 'Cells sorted by Manhattan distance from (1,2).',
    },
  ],
  hints: [
    'Collect all [r, c] pairs and sort them by Manhattan distance from (rCenter, cCenter).',
    'Break ties by row ascending, then column ascending.',
    `\`\`\`js
function allCellsDistOrder(rows, cols, rCenter, cCenter) {
  const cells = [];
  for (let r = 0; r < rows; r++)
    for (let c = 0; c < cols; c++)
      cells.push([r,c]);
  return cells.sort((a,b)=>(Math.abs(a[0]-rCenter)+Math.abs(a[1]-cCenter))-(Math.abs(b[0]-rCenter)+Math.abs(b[1]-cCenter)));
}\`\`\``,
  ],
  functionName: 'matrixCellsInDistanceOrder',
  params: ['rows', 'cols', 'rCenter', 'cCenter'],
  starterCode: {
    javascript: `function matrixCellsInDistanceOrder(rows, cols, rCenter, cCenter) {
  const cells = [];
  for (let r = 0; r < rows; r++) for (let c = 0; c < cols; c++) cells.push([r, c]);
  return cells.sort((a, b) =>
    (Math.abs(a[0]-rCenter)+Math.abs(a[1]-cCenter)) - (Math.abs(b[0]-rCenter)+Math.abs(b[1]-cCenter)));
}`,
    typescript: `function matrixCellsInDistanceOrder(rows: number, cols: number, rCenter: number, cCenter: number): number[][] {
  const cells: number[][] = [];
  for (let r = 0; r < rows; r++) for (let c = 0; c < cols; c++) cells.push([r, c]);
  return cells.sort((a, b) =>
    (Math.abs(a[0]-rCenter)+Math.abs(a[1]-cCenter)) - (Math.abs(b[0]-rCenter)+Math.abs(b[1]-cCenter)));
}`,
    python: `def matrixCellsInDistanceOrder(rows, cols, rCenter, cCenter):
    cells = [[r, c] for r in range(rows) for c in range(cols)]
    cells.sort(key=lambda p: abs(p[0]-rCenter)+abs(p[1]-cCenter))
    return cells`,
  },
  visibleTests: [
    { args: [1, 2, 0, 0], expected: [[0, 0], [0, 1]] },
    { args: [2, 2, 0, 1], expected: [[0, 1], [0, 0], [1, 1], [1, 0]] },
    { args: [2, 3, 1, 2], expected: [[1, 2], [0, 2], [1, 1], [0, 1], [1, 0], [0, 0]] },
  ],
  hiddenTests: [
    { args: [1, 1, 0, 0], expected: [[0, 0]] },
    { args: [3, 3, 1, 1], expected: [[1, 1], [0, 1], [1, 0], [1, 2], [2, 1], [0, 0], [0, 2], [2, 0], [2, 2]] },
    { args: [2, 2, 1, 1], expected: [[1, 1], [0, 1], [1, 0], [0, 0]] },
    { args: [1, 4, 0, 2], expected: [[0, 2], [0, 1], [0, 3], [0, 0]] },
  ],
};
