import type { Problem } from '../types';

export const problem: Problem = {
  id: 'find-lucky-number-in-matrix',
  title: 'Find Lucky Number in a Matrix',
  difficulty: 'easy',
  tags: ['arrays', 'hash-map'],
  description: `Given an \`m x n\` matrix of **distinct** integers, a **lucky number** is an element that is the minimum of its row and the maximum of its column. Return all lucky numbers in the matrix in **any order**.

**Note:** Only one lucky number can exist per row.`,
  constraints: [
    'm == matrix.length',
    'n == matrix[i].length',
    '1 <= n, m <= 50',
    '1 <= matrix[i][j] <= 10^5',
    'All elements in the matrix are distinct.',
  ],
  examples: [
    {
      input: 'matrix = [[3,7,8],[9,11,13],[15,16,17]]',
      output: '[15]',
      explanation: '15 is the minimum of its row (row 2) and the maximum of its column (col 0).',
    },
    {
      input: 'matrix = [[1,10,4,2],[9,3,8,7],[15,16,17,12]]',
      output: '[12]',
      explanation: '12 is the minimum of row 2 and the maximum of col 3.',
    },
    {
      input: 'matrix = [[7,8],[1,2]]',
      output: '[7]',
      explanation: '7 is the minimum of row 0 and the maximum of col 0.',
    },
  ],
  hints: [
    'For each row, find the minimum value. Then check whether that minimum is also the maximum of its column.',
    'Compute row minimums first. For each row min, find its column index and verify it equals the column maximum.',
    'const colMax=(c:number)=>Math.max(...matrix.map(r=>r[c]!));return matrix.map(row=>{const m=Math.min(...row);return colMax(row.indexOf(m))===m?m:null;}).filter((v):v is number=>v!==null);',
  ],
  functionName: 'luckyNumbers',
  params: ['matrix'],
  starterCode: {
    javascript: 'function luckyNumbers(matrix) {\n  // your code here\n}\n',
    typescript: 'function luckyNumbers(matrix: number[][]): number[] {\n  // your code here\n  return [];\n}',
    python: 'def luckyNumbers(matrix):\n    # your code here\n    pass\n',
  },
  visibleTests: [
    { args: [[[3, 7, 8], [9, 11, 13], [15, 16, 17]]], expected: [15] },
    { args: [[[1, 10, 4, 2], [9, 3, 8, 7], [15, 16, 17, 12]]], expected: [12] },
    { args: [[[7, 8], [1, 2]]], expected: [7] },
  ],
  hiddenTests: [
    { args: [[[5]]], expected: [5] },
    { args: [[[1, 2, 3]]], expected: [1] },
    { args: [[[3], [2], [1]]], expected: [3] },
    { args: [[[3, 2], [1, 4]]], expected: [] },
    { args: [[[10, 20], [30, 5]]], expected: [] },
    { args: [[[5, 1, 2], [3, 4, 6], [7, 8, 9]]], expected: [7] },
    { args: [[[2, 9, 8], [5, 1, 4], [7, 3, 6]]], expected: [] },
    { args: [[[5, 1], [3, 4]]], expected: [] },
    { args: [[[100, 50], [1, 60]]], expected: [] },
    { args: [[[6, 3], [4, 5]]], expected: [] },
  ],
};
