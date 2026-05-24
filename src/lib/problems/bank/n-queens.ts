import type { Problem } from '../types';

export const problem: Problem = {
  id: 'n-queens',
  title: 'N-Queens',
  difficulty: 'hard',
  tags: ['arrays', 'backtracking'],
  description: `The **n-queens** puzzle is the problem of placing \`n\` queens on an \`n x n\` chessboard such that no two queens attack each other.

Given an integer \`n\`, return all distinct solutions to the n-queens puzzle. You may return the answer in **any order**.

Each solution contains a distinct board configuration of the n-queens' placement, where \`'Q'\` and \`'.'\` both indicate a queen and an empty space, respectively.`,
  constraints: [
    '`1 <= n <= 9`',
  ],
  examples: [
    {
      input: 'n = 4',
      output: '[[".Q..","...Q","Q...","..Q."],["..Q.","Q...","...Q",".Q.."]]',
      explanation: 'There exist two distinct solutions to the 4-queens puzzle.',
    },
    {
      input: 'n = 1',
      output: '[["Q"]]',
    },
  ],
  hints: [
    'Use backtracking row by row. For each row, try placing a queen in each column and recurse if the placement is valid.',
    'A placement is valid if no other queen is in the same column, or on the same diagonal (|row1-row2| == |col1-col2|). Track used columns and diagonals with sets for O(1) lookup.',
    'When you\'ve successfully placed queens in all `n` rows, convert the column array to a board representation and push to results.',
  ],
  functionName: 'solveNQueens',
  params: ['n'],
  starterCode: {
    javascript: `function solveNQueens(n) {

}`,
    python: `def solveNQueens(n):
    pass`,
  },
  visibleTests: [
    {
      args: [4],
      expected: [['.Q..','...Q','Q...','..Q.'],['..Q.','Q...','...Q','.Q..']],
    },
    { args: [1], expected: [['Q']] },
  ],
  hiddenTests: [
    { args: [2], expected: [] },
    { args: [3], expected: [] },
  ],
};
