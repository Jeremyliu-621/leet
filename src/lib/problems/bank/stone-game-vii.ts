import type { Problem } from '../types';

export const problem: Problem = {
  id: 'stone-game-vii',
  title: 'Stone Game VII',
  difficulty: 'hard',
  tags: ['dynamic-programming'],
  description: `Alice and Bob take turns playing a game, with **Alice starting first**.

There are \`n\` stones arranged in a row. On each player's turn, they can **remove** either the leftmost or rightmost stone from the row. That player earns points equal to the **sum of the remaining** stones' values in the row. The winner is the one with the highest score, and both players play **optimally**.

Return the **maximum score difference** Alice can achieve if Alice goes first.

**Interval DP:** \`dp[i][j]\` = max score advantage the current player can achieve in range \`[i, j]\`. Removing left: score = \`sum(i+1..j)\` minus what opponent gets from \`dp[i+1][j]\`. Removing right: score = \`sum(i..j-1)\` minus \`dp[i][j-1]\`.`,
  constraints: [
    'n == stoneValue.length',
    '2 <= n <= 1000',
    '1 <= stoneValue[i] <= 1000',
  ],
  examples: [
    {
      input: 'stoneValue = [5,3,1,4,2]',
      output: '6',
      explanation: 'Alice can guarantee a score advantage of 6 with optimal play.',
    },
    {
      input: 'stoneValue = [7,90,5,1,100,10,10,2]',
      output: '122',
    },
  ],
  hints: [
    'Let dp[i][j] = max score advantage the current player can get from stones[i..j].',
    'dp[i][j] = max(sum(i+1..j) - dp[i+1][j], sum(i..j-1) - dp[i][j-1]).',
    'Use prefix sums for O(1) range sum queries. Fill dp by increasing length.',
  ],
  functionName: 'stoneGameVII',
  params: ['stoneValue'],
  starterCode: {
    javascript: 'function stoneGameVII(stoneValue) {\n\n}\n',
    python: 'def stoneGameVII(stoneValue: list) -> int:\n    pass\n',
  },
  visibleTests: [
    { args: [[5,3,1,4,2]], expected: 6 },
    { args: [[7,90,5,1,100,10,10,2]], expected: 122 },
  ],
  hiddenTests: [
    { args: [[1,2]], expected: 2 },
    { args: [[1,2,3,7]], expected: 9 },
    { args: [[2,4,6]], expected: 4 },
    { args: [[3,1,4,1,5]], expected: 2 },
  ],
};
