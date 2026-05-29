import type { Problem } from '../types';

export const problem: Problem = {
  id: 'find-valid-matrix-given-row-and-column-sums',
  title: 'Find Valid Matrix Given Row and Column Sums',
  difficulty: 'medium',
  tags: ['arrays', 'math'],
  description: `You are given two arrays \`rowSum\` and \`colSum\` of non-negative integers where \`rowSum[i]\` is the sum of the elements in the \`i\`th row and \`colSum[j]\` is the sum of the elements in the \`j\`th column of a 2D matrix. In other words, you do not know the elements of the matrix, but you do know the sums of each row and column.

Find any matrix of **non-negative integers** of size \`rowSum.length x colSum.length\` that satisfies the \`rowSum\` and \`colSum\` requirements.

Return *a 2D array representing any matrix that fulfills the requirements*. It's guaranteed that **at least one** matrix that fulfills the requirements exists.`,
  constraints: [
    '`1 <= rowSum.length, colSum.length <= 500`',
    '`0 <= rowSum[i], colSum[j] <= 10^8`',
    '`sum(rowSum) == sum(colSum)`',
  ],
  examples: [
    {
      input: 'rowSum = [3,8], colSum = [4,7]',
      output: '[[3,0],[1,7]]',
      explanation: 'Row 0: 3+0=3, Row 1: 1+7=8. Col 0: 3+1=4, Col 1: 0+7=7.',
    },
    {
      input: 'rowSum = [5,7,10], colSum = [8,6,8]',
      output: '[[5,0,0],[3,4,0],[0,2,8]]',
    },
  ],
  hints: [
    'For each cell (i, j), place min(rowSum[i], colSum[j]) and subtract from both.',
    'After placing the value, either the row is fully satisfied and moves to i+1, or the column is and moves to j+1.',
    `\`\`\`js
function findValidMatrixGivenRowAndColumnSums(rowSum, colSum) {
  const m = rowSum.length, n = colSum.length;
  const mat = Array.from({length: m}, () => Array(n).fill(0));
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      const val = Math.min(rowSum[i], colSum[j]);
      mat[i][j] = val;
      rowSum[i] -= val;
      colSum[j] -= val;
    }
  }
  return mat;
}\`\`\``,
  ],
  functionName: 'findValidMatrixGivenRowAndColumnSums',
  params: ['rowSum', 'colSum'],
  starterCode: {
    javascript: `function findValidMatrixGivenRowAndColumnSums(rowSum, colSum) {

}`,
    typescript: 'function findValidMatrixGivenRowAndColumnSums(rowSum: number[], colSum: number[]): number[][] {\n\n}',
    python: `def findValidMatrixGivenRowAndColumnSums(rowSum, colSum):
    pass`,
  },
  visibleTests: [
    { args: [[3, 8], [4, 7]], expected: [[3, 0], [1, 7]] },
    { args: [[5, 7, 10], [8, 6, 8]], expected: [[5, 0, 0], [3, 4, 0], [0, 2, 8]] },
    { args: [[0], [0]], expected: [[0]] },
  ],
  hiddenTests: [
    { args: [[1, 1], [1, 1]], expected: [[1, 0], [0, 1]] },
    { args: [[3], [3]], expected: [[3]] },
    { args: [[1, 2, 3], [6]], expected: [[1], [2], [3]] },
    { args: [[6], [1, 2, 3]], expected: [[1, 2, 3]] },
    { args: [[4, 4], [4, 4]], expected: [[4, 0], [0, 4]] },
  ],
};
