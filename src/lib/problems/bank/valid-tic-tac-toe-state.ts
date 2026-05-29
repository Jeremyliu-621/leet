import type { Problem } from '../types';

export const problem: Problem = {
  id: 'valid-tic-tac-toe-state',
  title: 'Valid Tic-Tac-Toe State',
  difficulty: 'medium',
  tags: ['arrays', 'simulation'],
  description: `Given a Tic-Tac-Toe board as an array of strings, determine if the board represents a **valid state** that could be reached by following the rules of the game.

Rules:
- **X always goes first.**
- Players alternate turns, so the count of X's is either equal to or exactly one more than the count of O's.
- At most one player can win (once a player wins, the game stops).
- If X wins, X must have one more cell than O (X played the winning move).
- If O wins, X and O must have the same count (O played the winning move).

The board is a \`3 × 3\` grid where each cell is \`'X'\`, \`'O'\`, or \`' '\`.`,
  constraints: [
    'board.length == 3',
    'board[i].length == 3',
    "board[i][j] is 'X', 'O', or ' '",
  ],
  examples: [
    {
      input: 'board = ["O  ","   ","   "]',
      output: 'false',
      explanation: 'O cannot move first. Invalid.',
    },
    {
      input: 'board = ["XOX"," X ","   "]',
      output: 'false',
      explanation: 'X appears 3 times, O appears once. X count must be at most O count + 1 (i.e., ≤ 2). Invalid.',
    },
    {
      input: 'board = ["XXX","   ","OOO"]',
      output: 'false',
      explanation: 'X wins (row 0) and O wins (row 2) simultaneously. Impossible — the game would have ended when the first winner was found.',
    },
    {
      input: 'board = ["XO ","XO ","X  "]',
      output: 'true',
      explanation: 'X=3, O=2. X wins via column 0. xs = os + 1. Valid.',
    },
  ],
  hints: [
    'Count the number of X\'s and O\'s. The invariant is: os ≤ xs and xs ≤ os + 1.',
    'Check all rows, columns, and both diagonals to determine if X or O wins.',
    'At most one player can win. If X wins, xs must equal os + 1. If O wins, xs must equal os.',
  ],
  functionName: 'validTicTacToe',
  params: ['board'],
  starterCode: {
    javascript: `function validTicTacToe(board) {
  // your code here
}`,
    typescript: `function validTicTacToe(board: string[]): boolean {
  // your code here
}`,
    python: `def validTicTacToe(board):
    # your code here
    pass`,
  },
  visibleTests: [
    { args: [['O  ', '   ', '   ']], expected: false },
    { args: [['XOX', ' X ', '   ']], expected: false },
    { args: [['XXX', '   ', 'OOO']], expected: false },
    { args: [['XO ', 'XO ', 'X  ']], expected: true },
    { args: [['   ', '   ', '   ']], expected: true },
    { args: [['X  ', '   ', '   ']], expected: true },
  ],
  hiddenTests: [
    { args: [['XXX', 'OO ', '   ']], expected: true },
    { args: [['XX ', 'OOO', 'X  ']], expected: true },
    { args: [['XOX', 'OOX', 'XOX']], expected: false },
    { args: [['XXX', 'OOX', 'OO ']], expected: false },
    { args: [['OXX', 'XOX', 'OOX']], expected: true },
    { args: [['XXO', 'XOO', 'OXX']], expected: false },
    { args: [['X  ', 'X  ', 'XO ']], expected: false },
    { args: [['XOX', 'OXO', 'XOX']], expected: true },
    { args: [['XO ', 'OX ', '   ']], expected: true },
    { args: [['XOX', ' OX', ' O ']], expected: true },
  ],
};
