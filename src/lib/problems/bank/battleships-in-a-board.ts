import type { Problem } from '../types';

export const problem: Problem = {
  id: 'battleships-in-a-board',
  title: 'Battleships in a Board',
  difficulty: 'medium',
  tags: ['arrays', 'simulation'],
  description: `Given an \`m x n\` matrix \`board\` where each cell is either a battleship \`'X'\` or empty \`'.'\`, return the number of battleships on the board.

Battleships can only be placed horizontally or vertically on the board. In other words, they can only occupy a contiguous run of \`'X'\` cells in a single row or single column. Furthermore, there are **no adjacent battleships** (i.e., no two battleships are orthogonally neighbouring each other).

Count the battleships **without** modifying the board and using **O(1)** extra space.`,
  constraints: [
    '`m == board.length`',
    '`n == board[i].length`',
    '`1 <= m, n <= 200`',
    '`board[i][j]` is either `\'.\' ` or `\'X\'`',
  ],
  examples: [
    {
      input: 'board = [["X",".",".","X"],[".",".",".","."],[".",".",".","."]]]',
      output: '2',
      explanation:
        'Two battleships: one single-cell ship at (0,0) and one single-cell ship at (0,3).',
    },
    {
      input: 'board = [["."]]',
      output: '0',
      explanation: 'No battleships on the board.',
    },
  ],
  hints: [
    'A cell is the top-left corner of a ship if it contains \'X\' and neither the cell directly above it nor the cell directly to its left contains \'X\'.',
    'Count only those top-left corners. Every ship has exactly one, so you get the exact number of ships.',
    '```js\nfunction countBattleships(board) {\n  let count = 0;\n  for (let r = 0; r < board.length; r++)\n    for (let c = 0; c < board[0].length; c++)\n      if (board[r][c] === "X" &&\n          (r === 0 || board[r-1][c] !== "X") &&\n          (c === 0 || board[r][c-1] !== "X"))\n        count++;\n  return count;\n}\n```',
  ],
  functionName: 'countBattleships',
  params: ['board'],
  starterCode: {
    javascript: `function countBattleships(board) {

}`,
    python: `def countBattleships(board: list[list[str]]) -> int:
    pass`,
  },
  visibleTests: [
    {
      args: [[['X', '.', '.', 'X'], ['.', '.', '.', '.'], ['.', '.', '.', '.']]],
      expected: 2,
    },
    {
      args: [[['X', 'X'], ['.', '.'], ['X', '.']]],
      expected: 2,
    },
  ],
  hiddenTests: [
    { args: [[['X']]], expected: 1 },
    { args: [[['.', '.', '.'], ['.', '.', '.']]], expected: 0 },
    { args: [[['X', 'X', 'X']]], expected: 1 },
    { args: [[['X'], ['X'], ['.']]], expected: 1 },
    { args: [[['X', '.', '.'], ['X', '.', '.'], ['.', '.', 'X']]], expected: 2 },
  ],
};
