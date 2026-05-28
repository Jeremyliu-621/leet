import type { Problem } from '../types';

export const problem: Problem = {
  id: 'find-winner-tictactoe',
  title: 'Find Winner on a Tic Tac Toe Game',
  difficulty: 'easy',
  tags: ['arrays', 'hash-map'],
  description: `**Tic-tac-toe** is played by two players \`A\` and \`B\` on a \`3 x 3\` grid. The rules of Tic-Tac-Toe are:

- Players take turns placing characters into empty squares \`' '\`.
- The first player \`A\` always places \`'X'\` characters, while the second player \`B\` always places \`'O'\` characters.
- \`'X'\` and \`'O'\` characters are always placed into empty squares, never on filled ones.
- The game ends when there are three of the same (non-empty) character filling any row, column, or diagonal.
- The game also ends if all squares are non-empty.
- No more moves can be played if the game is over.

Given a 2D integer array \`moves\` where \`moves[i] = [row_i, col_i]\` indicates that the \`i\`th move will be played on \`grid[row_i][col_i]\`. return the winner of the game if it exists (\`"A"\` or \`"B"\`). In case the game ends in a draw return \`"Draw"\`. If there are still movements to play return \`"Pending"\`.`,
  constraints: ['1 <= moves.length <= 9', 'moves[i].length == 2', '0 <= row_i, col_i <= 2', "There are no repeated elements on moves.", 'moves follow the rules of tic tac toe.'],
  examples: [
    { input: 'moves = [[0,0],[2,0],[1,1],[2,1],[2,2]]', output: '"A"', explanation: 'A wins with diagonal (0,0),(1,1),(2,2).' },
    { input: 'moves = [[0,0],[1,1],[0,1],[0,2],[1,0],[2,0]]', output: '"B"', explanation: 'B wins with column 0.' },
    { input: 'moves = [[0,0],[1,1],[2,0],[1,0],[1,2],[2,1],[0,1],[0,2],[2,2]]', output: '"Draw"' },
  ],
  hints: [
    'Track wins by checking rows, columns, and diagonals after each move.',
    'Maintain count arrays for each player: rows[3], cols[3], diag, anti_diag.',
    'A player wins if any count reaches 3. If all 9 squares are filled without a winner, it\'s a Draw. Otherwise Pending.',
  ],
  functionName: 'tictactoe',
  params: ['moves'],
  starterCode: {
    javascript: 'function tictactoe(moves) {\n\n}\n',
    python: 'def tictactoe(moves):\n    pass\n',
  },
  visibleTests: [
    { args: [[[0, 0], [2, 0], [1, 1], [2, 1], [2, 2]]], expected: 'A' },
    { args: [[[0, 0], [1, 1], [0, 1], [0, 2], [1, 0], [2, 0]]], expected: 'B' },
    { args: [[[0, 0], [1, 1], [2, 0], [1, 0], [1, 2], [2, 1], [0, 1], [0, 2], [2, 2]]], expected: 'Draw' },
  ],
  hiddenTests: [
    { args: [[[0, 0]]], expected: 'Pending' },
    { args: [[[0, 0], [0, 1], [0, 2], [1, 0], [1, 1], [1, 2], [2, 0], [2, 2], [2, 1]]], expected: 'A' },
  ],
};
