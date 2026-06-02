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
  const flat = board.join('');
  const xs = flat.split('X').length - 1, os = flat.split('O').length - 1;
  if (os > xs || xs > os + 1) return false;
  const wins = p => {
    for (let i = 0; i < 3; i++) {
      if (board[i][0]===p&&board[i][1]===p&&board[i][2]===p) return true;
      if (board[0][i]===p&&board[1][i]===p&&board[2][i]===p) return true;
    }
    return (board[0][0]===p&&board[1][1]===p&&board[2][2]===p)||(board[0][2]===p&&board[1][1]===p&&board[2][0]===p);
  };
  if (wins('X') && xs !== os + 1) return false;
  if (wins('O') && xs !== os) return false;
  if (wins('X') && wins('O')) return false;
  return true;
}`,
    typescript: `function validTicTacToe(board: string[]): boolean {
  const flat = board.join('');
  const xs = flat.split('X').length - 1, os = flat.split('O').length - 1;
  if (os > xs || xs > os + 1) return false;
  const wins = (p: string) => {
    for (let i = 0; i < 3; i++) {
      if (board[i]![0]===p&&board[i]![1]===p&&board[i]![2]===p) return true;
      if (board[0]![i]===p&&board[1]![i]===p&&board[2]![i]===p) return true;
    }
    return (board[0]![0]===p&&board[1]![1]===p&&board[2]![2]===p)||(board[0]![2]===p&&board[1]![1]===p&&board[2]![0]===p);
  };
  if (wins('X') && xs !== os + 1) return false;
  if (wins('O') && xs !== os) return false;
  if (wins('X') && wins('O')) return false;
  return true;
}`,
    python: `def validTicTacToe(board):
    if hasattr(board, 'to_py'): board = board.to_py()
    board = [str(r) for r in board]
    flat = ''.join(board)
    xs, os = flat.count('X'), flat.count('O')
    if os > xs or xs > os + 1: return False
    def wins(p):
        for i in range(3):
            if board[i][0]==p==board[i][1]==board[i][2]: return True
            if board[0][i]==p==board[1][i]==board[2][i]: return True
        return (board[0][0]==p==board[1][1]==board[2][2]) or (board[0][2]==p==board[1][1]==board[2][0])
    if wins('X') and xs != os + 1: return False
    if wins('O') and xs != os: return False
    if wins('X') and wins('O'): return False
    return True`,
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
