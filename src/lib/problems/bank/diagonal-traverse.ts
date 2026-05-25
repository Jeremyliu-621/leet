import type { Problem } from '../types';

export const problem: Problem = {
  id: 'diagonal-traverse',
  title: 'Diagonal Traverse',
  difficulty: 'medium',
  tags: ['arrays'],
  description: `Given an \`m x n\` matrix \`mat\`, return an array of all the elements of the array in a diagonal order.

The traversal goes diagonally — first upward-right, then downward-left, alternating direction for each diagonal.`,
  constraints: [
    'm == mat.length',
    'n == mat[0].length',
    '1 <= m, n <= 10^4',
    '1 <= m * n <= 10^4',
    '-10^5 <= mat[i][j] <= 10^5',
  ],
  examples: [
    {
      input: 'mat = [[1,2,3],[4,5,6],[7,8,9]]',
      output: '[1,2,4,7,5,3,6,8,9]',
      explanation: 'Diagonals: [1], [2,4], [3,5,7], [6,8], [9]. Even diagonals go up-right, odd go down-left.',
    },
    {
      input: 'mat = [[1,2],[3,4]]',
      output: '[1,2,3,4]',
      explanation: 'Diagonals: [1], [2,3], [4]. After reversal of even-index diagonals: [1], [2,3], [4].',
    },
  ],
  hints: [
    'Level 1: Group elements by diagonal index (i+j). Within each diagonal, the order alternates: even diagonals go top to bottom (decreasing row), odd diagonals go bottom to top (increasing row).',
    'Level 2: Iterate over all diagonals d from 0 to m+n-2. For each, collect cells where i+j==d, then reverse if d is even.',
    'Level 3: const res=[];for(let d=0;d<m+n-1;d++){const tmp=[];for(let r=Math.max(0,d-n+1);r<=Math.min(d,m-1);r++)tmp.push(mat[r][d-r]);if(d%2===0)tmp.reverse();res.push(...tmp);}return res;',
  ],
  functionName: 'findDiagonalOrder',
  params: ['mat'],
  starterCode: {
    javascript: 'function findDiagonalOrder(mat) {\n  // your code here\n}\n',
    python: 'def findDiagonalOrder(mat):\n    # your code here\n    pass\n',
  },
  visibleTests: [
    { args: [[[1, 2, 3], [4, 5, 6], [7, 8, 9]]], expected: [1, 2, 4, 7, 5, 3, 6, 8, 9] },
    { args: [[[1, 2], [3, 4]]], expected: [1, 2, 3, 4] },
  ],
  hiddenTests: [
    { args: [[[1]]], expected: [1] },
    { args: [[[1, 2, 3]]], expected: [1, 2, 3] },
    { args: [[[1], [2], [3]]], expected: [1, 2, 3] },
    { args: [[[1, 2, 3], [4, 5, 6]]], expected: [1, 2, 4, 5, 3, 6] },
  ],
};
