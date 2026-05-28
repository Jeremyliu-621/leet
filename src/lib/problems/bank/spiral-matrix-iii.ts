import type { Problem } from '../types';

const JS_PREAMBLE = `
function spiralMatrixIIIRunner(rows, cols, rStart, cStart) {
  const result = spiralMatrixIII(Number(rows), Number(cols), Number(rStart), Number(cStart));
  return result.map ? result.map(p => Array.isArray(p) ? p : [...p]) : result;
}
`.trim();

const PY_PREAMBLE = `
def spiralMatrixIIIRunner(rows, cols, rStart, cStart):
    result = spiralMatrixIII(int(rows), int(cols), int(rStart), int(cStart))
    return [list(p) for p in result]
`.trim();

export const problem: Problem = {
  id: 'spiral-matrix-iii',
  title: 'Spiral Matrix III',
  difficulty: 'medium',
  tags: ['arrays'],
  description: `You start at the cell \`(rStart, cStart)\` of an \`rows × cols\` grid facing east. The northwest corner is at the first row and column in the grid, and the southeast corner is at the last row and column.

You will walk in a clockwise spiral shape to visit every position in this grid. Whenever you move outside the grid's boundary, you continue your walk outside the grid (but may return to the grid boundary later). Eventually, you reach all \`rows * cols\` spaces of the grid.

Return an array of coordinates representing the positions of the grid in the order you visited them.`,
  constraints: [
    '1 <= rows, cols <= 100',
    '0 <= rStart < rows',
    '0 <= cStart < cols',
  ],
  examples: [
    {
      input: 'rows = 1, cols = 4, rStart = 0, cStart = 0',
      output: '[[0,0],[0,1],[0,2],[0,3]]',
    },
    {
      input: 'rows = 5, cols = 6, rStart = 1, cStart = 4',
      output: '[[1,4],[1,5],[2,5],[2,4],[2,3],[1,3],[0,3],[0,4],[0,5],[3,5],[3,4],[3,3],[3,2],[2,2],[1,2],[0,2],[4,5],[4,4],[4,3],[4,2],[4,1],[3,1],[2,1],[1,1],[0,1],[4,0],[3,0],[2,0],[1,0],[0,0]]',
    },
  ],
  hints: [
    'Simulate the spiral: walk in direction right, down, left, up. After every two direction changes, increase the step count by 1.',
    'Start with step=1. For each step count, take that many steps in the current direction, change direction, then take that many steps again, change direction, then increment step.',
    'Only record cells that are within the grid bounds.',
  ],
  functionName: 'spiralMatrixIIIRunner',
  params: ['rows', 'cols', 'rStart', 'cStart'],
  preamble: { javascript: JS_PREAMBLE, python: PY_PREAMBLE },
  starterCode: {
    javascript: '// spiralMatrixIIIRunner is pre-defined.\nfunction spiralMatrixIII(rows, cols, rStart, cStart) {\n  // return array of [row, col] pairs\n}\n',
    python: '# spiralMatrixIIIRunner is pre-defined.\ndef spiralMatrixIII(rows, cols, rStart, cStart):\n    pass\n',
  },
  visibleTests: [
    { args: [1, 4, 0, 0], expected: [[0, 0], [0, 1], [0, 2], [0, 3]] },
  ],
  hiddenTests: [
    { args: [1, 1, 0, 0], expected: [[0, 0]] },
    { args: [2, 2, 0, 0], expected: [[0, 0], [0, 1], [1, 1], [1, 0]] },
    { args: [3, 3, 1, 1], expected: [[1, 1], [1, 2], [2, 2], [2, 1], [2, 0], [1, 0], [0, 0], [0, 1], [0, 2]] },
  ],
};
