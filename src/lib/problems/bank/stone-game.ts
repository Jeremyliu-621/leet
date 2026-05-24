import type { Problem } from '../types';

export const problem: Problem = {
  id: 'stone-game',
  title: 'Stone Game',
  difficulty: 'medium',
  tags: ['dynamic-programming'],
  description: `Alice and Bob play a game with piles of stones. There are an **even** number of piles arranged in a row, and each pile has a positive integer number of stones.

The objective is to end the game with the **most stones**. The **total number of stones** across all the piles is odd, so there are no ties.

Alice and Bob take turns, with **Alice starting first**. Each turn, a player takes the entire pile from either the **beginning** or the **end** of the row. This continues until there are no more piles left, at which point the person with the **most stones wins**.

Assuming Alice and Bob play **optimally**, return \`true\` *if Alice wins the game, or* \`false\` *if Bob wins*.`,
  constraints: [
    '2 <= piles.length <= 500',
    'piles.length is even',
    '1 <= piles[i] <= 500',
    'sum(piles[i]) is odd',
  ],
  examples: [
    {
      input: 'piles = [5,3,4,5]',
      output: 'true',
      explanation: 'Alice starts first, and can guarantee a win by optimal play.',
    },
    {
      input: 'piles = [3,7,2,3]',
      output: 'true',
    },
  ],
  hints: [
    'Let dp[i][j] = the maximum score difference the current player can achieve over the other from piles[i..j].',
    'At each step, the current player picks piles[i] or piles[j], and the opponent faces the remaining subarray.',
    'dp[i][j] = max(piles[i] - dp[i+1][j], piles[j] - dp[i][j-1])',
    'Alice wins if dp[0][n-1] > 0.',
  ],
  functionName: 'stoneGame',
  params: ['piles'],
  starterCode: {
    javascript: `function stoneGame(piles) {

}`,
    python: `def stoneGame(piles):
    pass`,
  },
  visibleTests: [
    { args: [[5, 3, 4, 5]], expected: true },
    { args: [[3, 7, 2, 3]], expected: true },
  ],
  hiddenTests: [
    { args: [[2, 6, 1, 8]], expected: true },
    { args: [[1, 2, 3, 5]], expected: true },
    { args: [[2, 4, 6, 9]], expected: true },
    { args: [[8, 2, 4, 3]], expected: true },
    { args: [[1, 100, 2, 4]], expected: true },
  ],
};
