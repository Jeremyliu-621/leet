import type { Problem } from '../types';

export const problem: Problem = {
  id: 'design-tic-tac-toe',
  title: 'Design Tic-Tac-Toe',
  difficulty: 'medium',
  tags: ['simulation', 'arrays'],
  description: `Assume the following rules are for a tic-tac-toe game on an \`n × n\` board between two players:

1. A move is guaranteed to be valid and is placed on an empty block.
2. Once a winning condition is reached, no more moves are allowed.
3. A player who succeeds in placing \`n\` of their marks in a horizontal, vertical, or diagonal row wins the game.

You are given an integer \`n\` and a 2D array \`moves\` where \`moves[i] = [row, col, player]\`. Simulate the game and return the winner (1 or 2) if there is one, or \`0\` if no one wins after all moves are played.`,
  constraints: [
    '`2 <= n <= 100`',
    '`1 <= moves.length <= n * n`',
    '`moves[i].length == 3`',
    '`0 <= row, col < n`',
    '`player` is `1` or `2`',
    'All `[row, col]` pairs are distinct',
  ],
  examples: [
    {
      input: 'n = 3, moves = [[0,0,1],[0,2,2],[1,1,1],[2,0,2],[2,2,1]]',
      output: '1',
      explanation:
        'Player 1 occupies (0,0), (1,1), and (2,2) — the main diagonal — and wins.',
    },
    {
      input: 'n = 2, moves = [[0,0,1],[1,1,2],[0,1,1],[1,0,2]]',
      output: '1',
      explanation:
        'Player 1 fills row 0 with moves at (0,0) and (0,1), winning on the third move.',
    },
  ],
  hints: [
    'Instead of scanning the whole board after every move, maintain per-player counters for each row, each column, the main diagonal, and the anti-diagonal.',
    'After placing a mark at (row, col) for player p, increment that player\'s row[row] and col[col] counters. If row == col, also increment the main-diagonal counter. If row + col == n − 1, increment the anti-diagonal counter.',
    'If any of the four counters reaches n after a move, that player wins immediately. Return them; otherwise continue. If all moves are exhausted without a winner, return 0.',
  ],
  functionName: 'ticTacToe',
  params: ['n', 'moves'],
  starterCode: {
    javascript: `function ticTacToe(n, moves) {

}`,
    typescript: "function ticTacToe(n: number, moves: number[][]): number {\n\n}",

    python: `def ticTacToe(n: int, moves: list[list[int]]) -> int:
    pass`,
  },
  visibleTests: [
    { args: [3, [[0, 0, 1], [0, 2, 2], [1, 1, 1], [2, 0, 2], [2, 2, 1]]], expected: 1 },
    { args: [2, [[0, 0, 1], [1, 1, 2], [0, 1, 1], [1, 0, 2]]], expected: 1 },
  ],
  hiddenTests: [
    { args: [3, [[0, 0, 1], [0, 1, 1], [0, 2, 1]]], expected: 1 },
    { args: [3, [[0, 0, 2], [1, 1, 2], [2, 2, 2]]], expected: 2 },
    { args: [3, [[0, 0, 1], [1, 0, 2], [0, 1, 1], [1, 1, 2]]], expected: 0 },
    { args: [3, [[0, 2, 1], [1, 1, 1], [2, 0, 1]]], expected: 1 },
  ],
};
