import type { Problem } from '../types';

export const problem: Problem = {
  id: 'rotate-image',
  title: 'Rotate Image',
  difficulty: 'medium',
  tags: ['arrays', 'two-pointers'],
  description: `You are given an \`n × n\` 2D integer \`matrix\`. Rotate the matrix **90 degrees clockwise** **in-place** (without using extra space for another matrix).

**Two-step trick:**
1. **Transpose** the matrix: swap \`matrix[i][j]\` with \`matrix[j][i]\` for all \`i < j\`.
2. **Reverse each row**: for each row, reverse its elements left-to-right.

Return the modified matrix.`,
  constraints: [
    'n == matrix.length == matrix[i].length',
    '1 <= n <= 20',
    '-1000 <= matrix[i][j] <= 1000',
  ],
  examples: [
    {
      input: 'matrix = [[1,2,3],[4,5,6],[7,8,9]]',
      output: '[[7,4,1],[8,5,2],[9,6,3]]',
      explanation: 'Transpose: [[1,4,7],[2,5,8],[3,6,9]], then reverse each row.',
    },
    {
      input: 'matrix = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]',
      output: '[[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]',
      explanation: '4×4 matrix rotated 90° clockwise.',
    },
    {
      input: 'matrix = [[1]]',
      output: '[[1]]',
      explanation: 'Single element is unchanged.',
    },
  ],
  hints: [
    'A 90° clockwise rotation maps element at [i][j] to [j][n-1-i]. To do it in-place without a full copy, break it into two simpler in-place operations.',
    'First transpose: swap matrix[i][j] with matrix[j][i] for all i < j. Then reverse each row. Verify by tracing a corner element: [0][0] → after transpose it\'s still [0][0]\'s value at [0][0]; after row-reverse, that value moves to [0][n-1] — which is correct for a 90° CW rotation.',
    '`for(let i=0;i<n;i++) for(let j=i+1;j<n;j++) [matrix[i][j],matrix[j][i]]=[matrix[j][i],matrix[i][j]]; for(const row of matrix) row.reverse(); return matrix;`',
  ],
  functionName: 'rotate',
  params: ['matrix'] as readonly string[],
  starterCode: {
    javascript: 'function rotate(matrix) {\n  // your code here\n}\n',
    typescript: "function rotate(matrix: number[][]): number[][] {\n  // your code here\n}",

    python: 'def rotate(matrix: list[list[int]]) -> list[list[int]]:\n    # your code here\n    pass\n',
  },
  visibleTests: [
    { args: [[[1,2,3],[4,5,6],[7,8,9]]], expected: [[7,4,1],[8,5,2],[9,6,3]] },
    { args: [[[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]], expected: [[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]] },
    { args: [[[1]]], expected: [[1]] },
  ],
  hiddenTests: [
    { args: [[[1,2],[3,4]]], expected: [[3,1],[4,2]] },
    { args: [[[1,2,3],[4,5,6],[7,8,9]]], expected: [[7,4,1],[8,5,2],[9,6,3]] },
    { args: [[[0,0,0],[0,1,0],[0,0,0]]], expected: [[0,0,0],[0,1,0],[0,0,0]] },
  ],
};
