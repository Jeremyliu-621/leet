import type { Problem } from '../types';

export const problem: Problem = {
  id: 'first-completely-painted-row-or-column',
  title: 'First Completely Painted Row or Column',
  difficulty: 'medium',
  tags: ['arrays', 'hash-map'],
  description: `You are given a **0-indexed** integer array \`arr\`, and an \`m x n\` integer **matrix** \`mat\`. \`arr\` and \`mat\` both contain **all** the integers in the range \`[1, m * n]\`.

Go through each index \`i\` in \`arr\` starting from index \`0\` and paint the cell in \`mat\` containing the integer \`arr[i]\`.

Return the smallest index \`i\` at which either a row or a column will be **completely painted** in \`mat\`.`,
  constraints: [
    'm == mat.length',
    'n == mat[i].length',
    '1 <= m, n <= 10^5',
    '1 <= m * n <= 10^5',
    '1 <= arr[i], mat[r][c] <= m * n',
    'All integers in arr are unique.',
    'All integers in mat are unique.',
  ],
  examples: [
    {
      input: 'arr = [1,3,4,2], mat = [[1,4],[2,3]]',
      output: '2',
      explanation: 'Paint order: 1 (0,0), 3 (1,1), 4 (0,1). After index 2, row 0 (cells 1,4) is completely painted.',
    },
    {
      input: 'arr = [2,8,7,4,1,3,5,6,9], mat = [[3,2,5],[1,4,6],[8,7,9]]',
      output: '3',
      explanation: 'After painting arr[3]=4: column 1 (cells 2,4,7) is all painted.',
    },
  ],
  hints: [
    'Pre-compute a position map: for each value v, store which (row, col) it lives in.',
    'For each row, the row completes when the last of its cells is painted. That is the max index among all its cells in arr.',
    'Similarly for columns. Return the minimum across all rows and columns of these max-indices.',
  ],
  functionName: 'firstCompleteIndex',
  params: ['arr', 'mat'],
  starterCode: {
    javascript: 'function firstCompleteIndex(arr, mat) {\n  \n}\n',
    python: 'def firstCompleteIndex(arr, mat):\n    pass\n',
  },
  visibleTests: [
    { args: [[1,3,4,2], [[1,4],[2,3]]], expected: 2 },
    { args: [[2,8,7,4,1,3,5,6,9], [[3,2,5],[1,4,6],[8,7,9]]], expected: 3 },
    { args: [[2,1], [[1],[2]]], expected: 0 },
  ],
  hiddenTests: [
    { args: [[1], [[1]]], expected: 0 },
    { args: [[4,3,2,1], [[1,2],[3,4]]], expected: 1 },
    { args: [[1,2,3,4], [[1,2],[3,4]]], expected: 1 },
    { args: [[2,5,1,4,3,6], [[1,2,3],[4,5,6]]], expected: 1 },
  ],
};
