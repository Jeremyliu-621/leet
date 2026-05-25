import type { Problem } from '../types';

export const problem: Problem = {
  id: 'knight-probability-in-chessboard',
  title: 'Knight Probability in Chessboard',
  difficulty: 'medium',
  tags: ['dynamic-programming'],
  description: `On an \`n x n\` chessboard, a knight starts at row \`row\` and column \`column\` and attempts to make exactly \`k\` moves. Each move selects uniformly at random from up to 8 L-shaped moves. Return the probability that the knight remains on the board after all \`k\` moves.`,
  constraints: [
    '`1 <= n <= 25`',
    '`0 <= k <= 100`',
    '`0 <= row, column <= n - 1`',
  ],
  examples: [
    {
      input: 'n = 3, k = 2, row = 0, column = 0',
      output: '0.0625',
      explanation: 'From (0,0): 2 valid moves → (1,2) and (2,1). From each, 1 valid move stays on board. Probability = 2/8 * 1/8 * 2 = 2/64 = 0.03125? Actually 2*(1/64)=0.03125... wait: from (0,0) to 2 squares, each has 1/8 chance. From each of those squares, only 2 squares reachable on a 3x3, but only ones on board count. 2*(1/8)*(2/8)=4/64=0.0625.',
    },
    {
      input: 'n = 1, k = 0, row = 0, column = 0',
      output: '1.0',
      explanation: 'Already at the only cell; no moves needed.',
    },
  ],
  hints: [
    'Let dp[r][c] = probability of being at (r,c) after some number of moves. Start with dp[row][column]=1.0.',
    'After each move, compute new_dp[nr][nc] += dp[r][c]/8 for each of 8 knight moves that stay on board.',
    'Sum all dp[r][c] values after k moves to get the probability of remaining on the board.',
  ],
  functionName: 'knightProbability',
  params: ['n', 'k', 'row', 'column'],
  starterCode: {
    javascript: `function knightProbability(n, k, row, column) {

}`,
    python: `def knightProbability(n, k, row, column):
    pass`,
  },
  visibleTests: [
    { args: [3, 2, 0, 0], expected: 0.0625 },
    { args: [1, 0, 0, 0], expected: 1.0 },
    { args: [25, 2, 2, 2], expected: 0.65625 },
  ],
  hiddenTests: [
    { args: [3, 3, 0, 0], expected: 0.015625 },
    { args: [5, 1, 2, 2], expected: 1.0 },
    { args: [8, 3, 4, 4], expected: 0.62109375 },
    { args: [3, 0, 1, 1], expected: 1.0 },
  ],
};
