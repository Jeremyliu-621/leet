import type { Problem } from '../types';

export const problem: Problem = {
  id: 'cells-with-odd-values-in-a-matrix',
  title: 'Cells with Odd Values in a Matrix',
  difficulty: 'easy',
  tags: ['arrays', 'math', 'simulation'],
  description: `There is an \`m x n\` matrix that is initialized to all \`0\`'s. There is also a 2D array \`indices\` where each \`indices[i] = [ri, ci]\` represents a **0-indexed location** to perform some increment operations on the matrix.

For each location \`[ri, ci]\`, do the following:

1. Increment **all** values in row \`ri\` by 1.
2. Increment **all** values in column \`ci\` by 1.

Return the **number of odd-valued cells** in the matrix after performing all the increment operations.`,
  constraints: [
    '1 <= m, n <= 50',
    '1 <= indices.length <= 100',
    '0 <= ri < m',
    '0 <= ci < n',
  ],
  examples: [
    {
      input: 'm = 2, n = 3, indices = [[0,1],[1,1]]',
      output: '6',
      explanation: 'After [0,1]: matrix = [[1,2,1],[0,1,0]]. After [1,1]: matrix = [[1,3,1],[1,3,1]]. All 6 values are odd.',
    },
    {
      input: 'm = 2, n = 2, indices = [[1,1],[0,0]]',
      output: '0',
      explanation: 'After both operations, the matrix is [[2,2],[2,2]]. No odd values.',
    },
  ],
  hints: [
    'Count how many times each row and column is incremented.',
    'Cell (i, j) has value rowCount[i] + colCount[j]. It\'s odd when the sum is odd.',
    'The sum is odd when exactly one of rowCount[i] or colCount[j] is odd.',
    'Answer = (oddRows * evenCols) + (evenRows * oddCols), where oddRows/evenRows counts rows with odd/even increment counts.',
  ],
  functionName: 'oddCells',
  params: ['m', 'n', 'indices'],
  starterCode: {
    javascript: `function oddCells(m, n, indices) {

}`,
    typescript: `function oddCells(m: number, n: number, indices: number[][]): number {

}`,
    python: `def oddCells(m: int, n: int, indices: list[list[int]]) -> int:
    pass`,
  },
  visibleTests: [
    { args: [2, 3, [[0, 1], [1, 1]]], expected: 6 },
    { args: [2, 2, [[1, 1], [0, 0]]], expected: 0 },
  ],
  hiddenTests: [
    { args: [1, 1, [[0, 0]]], expected: 0 },
    { args: [1, 2, [[0, 0]]], expected: 1 },
    { args: [2, 2, [[0, 0], [1, 1]]], expected: 0 },
    { args: [3, 3, [[0, 0]]], expected: 4 },
    { args: [2, 3, [[0, 0], [1, 2]]], expected: 2 },
    { args: [1, 1, [[0, 0], [0, 0]]], expected: 0 },
    { args: [3, 2, [[0, 0], [1, 0], [2, 1]]], expected: 3 },
    { args: [2, 2, [[0, 0], [0, 0], [0, 0]]], expected: 2 },
  ],
};
