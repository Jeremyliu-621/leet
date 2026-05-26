import type { Problem } from '../types';

export const problem: Problem = {
  id: 'special-positions-binary-matrix',
  title: 'Special Positions in a Binary Matrix',
  difficulty: 'easy',
  tags: ['arrays', 'math'],
  description: `Given an \`m x n\` binary matrix \`mat\`, return the number of **special** positions in \`mat\`.

A position \`(i, j)\` is called special if \`mat[i][j] == 1\` and all other elements in row \`i\` and column \`j\` are \`0\` (rows and columns are **0-indexed**).`,
  constraints: [
    '`m == mat.length`',
    '`n == mat[i].length`',
    '`1 <= m, n <= 100`',
    '`mat[i][j]` is either `0` or `1`.',
  ],
  examples: [
    {
      input: 'mat = [[1,0,0],[0,0,1],[1,0,0]]',
      output: '1',
      explanation: '(1,2) is special: row 1 sum=1, col 2 sum=1.',
    },
    {
      input: 'mat = [[1,0,0],[0,1,0],[0,0,1]]',
      output: '3',
      explanation: 'All diagonal positions are special.',
    },
  ],
  hints: [
    'For each cell (i,j) where mat[i][j]==1, check that the row sum and column sum are both 1.',
    'A position `(i, j)` is special if `mat[i][j] === 1`, the entire row `i` sums to 1, and the entire column `j` sums to 1.',
    `\`\`\`js
let count = 0;
for (let i = 0; i < mat.length; i++)
  for (let j = 0; j < mat[0].length; j++)
    if (mat[i][j] === 1 && mat[i].reduce((a,b)=>a+b,0) === 1 &&
        mat.reduce((a,r)=>a+r[j],0) === 1) count++;
return count;\`\`\``
  ],
  functionName: 'numSpecial',
  params: ['mat'],
  starterCode: {
    javascript: `function numSpecial(mat) {

}`,
    python: `def numSpecial(mat):
    pass`,
  },
  visibleTests: [
    { args: [[[1, 0, 0], [0, 0, 1], [1, 0, 0]]], expected: 1 },
    { args: [[[1, 0, 0], [0, 1, 0], [0, 0, 1]]], expected: 3 },
  ],
  hiddenTests: [
    { args: [[[0]]], expected: 0 },
    { args: [[[1]]], expected: 1 },
    { args: [[[1, 1], [1, 0]]], expected: 0 },
    { args: [[[0, 0, 0], [0, 1, 0], [0, 0, 0]]], expected: 1 },
    { args: [[[1, 0], [0, 0]]], expected: 1 },
  ],
};
