import type { Problem } from '../types';

export const problem: Problem = {
  id: 'predict-the-winner',
  title: 'Predict the Winner',
  difficulty: 'medium',
  tags: ['dynamic-programming', 'arrays'],
  description: `You are given an integer array \`nums\`. Two players are playing a game with this array: player 1 and player 2.

Player 1 and player 2 take turns, with **player 1 starting first**. Both players start with a score of \`0\`. At each turn, the current player takes one of the numbers from either end of the array (i.e., \`nums[0]\` or \`nums[nums.length - 1]\`) which reduces \`nums\` to a shorter array. The player adds the chosen number to their score. The game ends when there are no more elements in the array.

Return \`true\` if Player 1 can win the game. If the scores of both players are equal, then player 1 is still the winner, and you should also return \`true\`. You may assume that every optimal strategy results in a unique winner.`,
  constraints: [
    '1 <= nums.length <= 20',
    '0 <= nums[i] <= 10^7',
  ],
  examples: [
    {
      input: 'nums = [1,5,2]',
      output: 'false',
      explanation: 'Initially, player 1 can choose between 1 and 2. If the player chooses 2, then player 2 can choose between 1 and 5. If player 2 chooses 5, then player 1 will be left with 1. So, final scores are Player 1 = 2 + 1 = 3, Player 2 = 5. Player 2 wins.',
    },
    {
      input: 'nums = [1,5,233,7]',
      output: 'true',
      explanation: 'Player 1 first chooses 1. Then player 2 has to choose between 5 and 7. No matter what player 2 picks, player 1 can win. Player 1 = 1 + 233 = 234; Player 2 = 5 + 7 = 12.',
    },
  ],
  hints: [
    'Define dp[i][j] = the maximum score difference (current player minus opponent) when the remaining array is nums[i..j].',
    'dp[i][j] = max(nums[i] - dp[i+1][j], nums[j] - dp[i][j-1]).',
    'Player 1 wins if dp[0][n-1] >= 0.',
  ],
  functionName: 'predictTheWinner',
  params: ['nums'],
  starterCode: {
    javascript: 'function predictTheWinner(nums) {\n\n}\n',
    python: 'def predictTheWinner(nums):\n    pass\n',
  },
  visibleTests: [
    { args: [[1, 5, 2]], expected: false },
    { args: [[1, 5, 233, 7]], expected: true },
  ],
  hiddenTests: [
    { args: [[1]], expected: true },
    { args: [[1, 2]], expected: true },
    { args: [[1, 2, 3]], expected: true },
    { args: [[4, 3, 1, 5]], expected: true },
  ],
};
