import type { Problem } from '../types';

export const problem: Problem = {
  id: 'sparse-matrix-multiplication',
  title: 'Sparse Matrix Multiplication',
  difficulty: 'medium',
  tags: ['arrays'],
  description: `Given two **sparse** matrices \`mat1\` of size \`m × k\` and \`mat2\` of size \`k × n\`, return their product matrix of size \`m × n\`.

A matrix is **sparse** if most of its elements are zero. You can use a naive triple-nested loop for correctness, but an efficient solution skips multiplications where \`mat1[i][p] == 0\`.

The product matrix \`result[i][j] = sum over p of mat1[i][p] * mat2[p][j]\`.`,
  examples: [
    {
      input: 'mat1 = [[1,0,0],[-1,0,3]], mat2 = [[7,0,0],[0,0,0],[0,0,1]]',
      output: '[[7,0,0],[-7,0,3]]',
      explanation: 'result[0][0] = 1*7 + 0*0 + 0*0 = 7. result[1][0] = -1*7 + 0*0 + 3*0 = -7. result[1][2] = -1*0 + 0*0 + 3*1 = 3.',
    },
    {
      input: 'mat1 = [[0]], mat2 = [[0]]',
      output: '[[0]]',
      explanation: 'Product of two 1x1 zero matrices is [[0]].',
    },
  ],
  constraints: [
    'm == mat1.length',
    'k == mat1[0].length == mat2.length',
    'n == mat2[0].length',
    '1 <= m, n, k <= 100',
    '-100 <= mat1[i][j], mat2[i][j] <= 100',
  ],
  functionName: 'multiply',
  params: ['mat1', 'mat2'],
  starterCode: {
    javascript: 'function multiply(mat1, mat2) {\n  // your code here\n}\n',
    typescript: "function multiply(mat1: number[][], mat2: number[][]): number[][] {\n  // your code here\n}",

    python: 'def multiply(mat1, mat2):\n    # your code here\n    pass\n',
  },
  hints: [
    'The naive O(m*k*n) triple-nested loop works within the constraints. For each cell result[i][j], accumulate mat1[i][p] * mat2[p][j] for all p.',
    'To exploit sparsity, iterate over mat1 rows: for each non-zero mat1[i][p], add its contribution to the entire row p of mat2 into row i of the result.',
    'The sparse optimization is: `for i in range(m): for p in range(k): if mat1[i][p] != 0: for j in range(n): result[i][j] += mat1[i][p] * mat2[p][j]`',
  ],
  visibleTests: [
    {
      args: [[[1, 0, 0], [-1, 0, 3]], [[7, 0, 0], [0, 0, 0], [0, 0, 1]]],
      expected: [[7, 0, 0], [-7, 0, 3]],
    },
    {
      args: [[[0]], [[0]]],
      expected: [[0]],
    },
    {
      args: [[[1, 2], [3, 4]], [[5, 6], [7, 8]]],
      expected: [[19, 22], [43, 50]],
    },
  ],
  hiddenTests: [
    {
      args: [[[1, 0], [0, 1]], [[4, 5], [6, 7]]],
      expected: [[4, 5], [6, 7]],
    },
    {
      args: [[[0, 0, 0], [0, 1, 0], [0, 0, 0]], [[1, 2, 3], [4, 5, 6], [7, 8, 9]]],
      expected: [[0, 0, 0], [4, 5, 6], [0, 0, 0]],
    },
    {
      args: [[[2]], [[3]]],
      expected: [[6]],
    },
    {
      args: [[[1, 0, 0], [0, 0, 0]], [[0, 1], [1, 0], [0, 0]]],
      expected: [[0, 1], [0, 0]],
    },
  ],
};
