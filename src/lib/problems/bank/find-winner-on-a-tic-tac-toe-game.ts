import type { Problem } from '../types';

export const problem: Problem = {
  id: 'find-winner-on-a-tic-tac-toe-game',
  title: 'Find Winner on a Tic Tac Toe Game',
  difficulty: 'easy',
  tags: ['arrays', 'simulation'],
  description: `Tic-tac-toe is played on a **3 x 3** grid. Two players take turns placing their marks: player **A** always places \`"X"\` and goes first, player **B** always places \`"O"\` and goes second.

You are given a 2D integer array \`moves\` where \`moves[i] = [rowi, coli]\` indicates the position of the \`i\`th move. All moves are valid.

Return the winner of the game if it exists (\`"A"\` or \`"B"\`). If the game ends in a draw (all 9 squares filled, no winner), return \`"Draw"\`. If the game is still in progress, return \`"Pending"\`.

A player **wins** by filling any row, any column, or either diagonal completely.`,
  constraints: [
    '1 <= moves.length <= 9',
    'moves[i].length == 2',
    '0 <= rowi, coli <= 2',
    'There are no repeated moves.',
    'moves follow the rules of Tic-Tac-Toe.',
  ],
  examples: [
    {
      input: 'moves = [[0,0],[2,0],[1,1],[2,1],[2,2]]',
      output: '"A"',
      explanation: 'A wins with the main diagonal: (0,0), (1,1), (2,2).',
    },
    {
      input: 'moves = [[0,0],[0,1],[1,0],[1,1],[2,2],[2,1]]',
      output: '"B"',
      explanation: 'B fills column 1: (0,1), (1,1), (2,1).',
    },
    {
      input: 'moves = [[0,0],[1,1],[2,0],[1,0],[1,2],[2,1],[0,1],[0,2],[2,2]]',
      output: '"Draw"',
      explanation: 'All 9 cells filled, no winner.',
    },
  ],
  hints: [
    'Track row[r], col[c], and two diagonals with +1 for A and -1 for B. If any reaches +3 or -3, that player wins.',
    'After all moves, if no winner and moves.length < 9 return "Pending", else "Draw".',
    `\`\`\`js
function tictactoe(moves) {
  const rows = [0,0,0], cols = [0,0,0];
  let diag = 0, anti = 0;
  moves.forEach(([r,c], i) => {
    const v = i % 2 === 0 ? 1 : -1;
    rows[r] += v; cols[c] += v;
    if (r === c) diag += v;
    if (r + c === 2) anti += v;
  });
  for (let k = 0; k < 3; k++) {
    if (Math.abs(rows[k]) === 3 || Math.abs(cols[k]) === 3) return rows[k] > 0 || cols[k] > 0 ? "A" : "B";
  }
  if (Math.abs(diag) === 3) return diag > 0 ? "A" : "B";
  if (Math.abs(anti) === 3) return anti > 0 ? "A" : "B";
  return moves.length === 9 ? "Draw" : "Pending";
}
\`\`\``,
  ],
  functionName: 'tictactoe',
  params: ['moves'],
  starterCode: {
    javascript: `function tictactoe(moves) {
  // Return "A", "B", "Draw", or "Pending"
}`,
    typescript: "function tictactoe(moves: number[][]): string {\n  // Return \"A\", \"B\", \"Draw\", or \"Pending\"\n}",

    python: `def tictactoe(moves) -> str:
    # Return "A", "B", "Draw", or "Pending"
    pass`,
  },
  visibleTests: [
    { args: [[[0, 0], [2, 0], [1, 1], [2, 1], [2, 2]]], expected: 'A' },
    { args: [[[0, 0], [0, 1], [1, 0], [1, 1], [2, 2], [2, 1]]], expected: 'B' },
    { args: [[[0, 0], [1, 1], [2, 0], [1, 0], [1, 2], [2, 1], [0, 1], [0, 2], [2, 2]]], expected: 'Draw' },
  ],
  hiddenTests: [
    { args: [[[0, 0], [1, 0], [0, 1], [1, 1], [0, 2]]], expected: 'A' },
    { args: [[[0, 0]]], expected: 'Pending' },
    { args: [[[0, 0], [1, 0], [2, 0]]], expected: 'Pending' },
    { args: [[[0, 0], [0, 2], [1, 0], [1, 1], [2, 2], [2, 0]]], expected: 'B' },
    { args: [[[1, 0], [0, 0], [1, 1], [0, 1], [1, 2]]], expected: 'A' },
  ],
};
