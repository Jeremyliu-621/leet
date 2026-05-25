import type { Problem } from '../types';

export const problem: Problem = {
  id: 'reshape-the-matrix',
  title: 'Reshape the Matrix',
  difficulty: 'easy',
  tags: ['arrays'],
  description: `In MATLAB, there is a handy function called \`reshape\` which can reshape an \`m x n\` matrix into a new one with a different size \`r x c\` keeping its original data.

You are given an \`m x n\` matrix \`mat\` and two integers \`r\` and \`c\` representing the number of rows and columns of the wanted reshaped matrix.

The reshaped matrix should be filled with all the elements of the original matrix in the same row-traversing order as they were.

If the reshape operation with given parameters is possible and legal, output the new reshaped matrix; otherwise, output the original matrix.`,
  constraints: [
    'm == mat.length',
    'n == mat[0].length',
    '1 <= m, n <= 100',
    '1 <= r, c <= 300',
    '-1000 <= mat[i][j] <= 1000',
  ],
  examples: [
    {
      input: 'mat = [[1,2],[3,4]], r = 1, c = 4',
      output: '[[1,2,3,4]]',
      explanation: 'Flatten then fill 1×4.',
    },
    {
      input: 'mat = [[1,2],[3,4]], r = 2, c = 4',
      output: '[[1,2],[3,4]]',
      explanation: '2×2=4 elements cannot fill a 2×4=8 grid; return original.',
    },
  ],
  hints: [
    'Level 1: First check if m*n == r*c. If not, return the original matrix.',
    'Level 2: Flatten the matrix into a 1D array, then fill the r×c result row by row.',
    'Level 3: const flat=mat.flat();if(flat.length!==r*c)return mat;const res=[];for(let i=0;i<r;i++)res.push(flat.slice(i*c,(i+1)*c));return res;',
  ],
  functionName: 'matrixReshape',
  params: ['mat', 'r', 'c'],
  starterCode: {
    javascript: 'function matrixReshape(mat, r, c) {\n  // your code here\n}\n',
    python: 'def matrixReshape(mat, r, c):\n    # your code here\n    pass\n',
  },
  visibleTests: [
    { args: [[[1, 2], [3, 4]], 1, 4], expected: [[1, 2, 3, 4]] },
    { args: [[[1, 2], [3, 4]], 2, 4], expected: [[1, 2], [3, 4]] },
  ],
  hiddenTests: [
    { args: [[[1, 2, 3, 4]], 2, 2], expected: [[1, 2], [3, 4]] },
    { args: [[[1]], 1, 1], expected: [[1]] },
    { args: [[[1, 2, 3], [4, 5, 6]], 3, 2], expected: [[1, 2], [3, 4], [5, 6]] },
    { args: [[[1, 2, 3], [4, 5, 6]], 1, 6], expected: [[1, 2, 3, 4, 5, 6]] },
    { args: [[[1, 2], [3, 4]], 4, 1], expected: [[1], [2], [3], [4]] },
  ],
};
