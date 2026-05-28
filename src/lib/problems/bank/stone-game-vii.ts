import type { Problem } from '../types';

export const problem: Problem = {
  id: 'stone-game-vii',
  title: 'Stone Game VII',
  difficulty: 'medium',
  tags: ['dynamic-programming'],
  description: `Alice and Bob take turns playing a game, with **Alice starting first**.

There are \`n\` stones arranged in a row. On each player's turn, they can **remove** either the leftmost stone or the rightmost stone from the row and receive points equal to the **sum of the remaining stones' values** in the row. The winner is the one with the higher score, and both players play optimally.

Return the **difference** in score between Alice and Bob if they both play optimally.`,
  constraints: [
    'n == stones.length',
    '2 <= n <= 1000',
    '1 <= stones[i] <= 10^4',
  ],
  examples: [
    {
      input: 'stones = [5,3,1,4,2]',
      output: '6',
      explanation:
        '- Alice removes 2 → sum of remaining [5,3,1,4] = 13. Score: Alice=13.\n- Bob removes 5 → sum of remaining [3,1,4] = 8. Score: Bob=8.\n- Alice removes 4 → sum of remaining [3,1] = 4. Score: Alice=4.\n- Bob removes 3 → sum of remaining [1] = 1. Score: Bob=1.\n- Alice removes 1 → score 0. Alice total=17, Bob total=9. Diff=8. (Optimal play yields diff=6.)',
    },
    {
      input: 'stones = [7,90,5,1,100,10,10,2]',
      output: '122',
    },
  ],
  hints: [
    'Use interval DP: dp[i][j] = max score difference the current player can achieve over stones[i..j].',
    'Precompute prefix sums so sum(i,j) = prefix[j+1] - prefix[i] is O(1).',
    'When current player removes stones[i]: they score sum(i+1,j) = total - stones[i], opponent plays on [i+1,j]. Net gain = sum(i+1,j) - dp[i+1][j]. Similarly for removing stones[j].',
  ],
  functionName: 'stoneGameVII',
  params: ['stones'],
  starterCode: {
    javascript: 'function stoneGameVII(stones) {\n\n}\n',
    typescript: "function stoneGameVII(stones: number[]): number {\n\n}",

    python: 'def stoneGameVII(stones):\n    pass\n',
  },
  visibleTests: [
    { args: [[5,3,1,4,2]], expected: 6 },
    { args: [[7,90,5,1,100,10,10,2]], expected: 122 },
  ],
  hiddenTests: [
    { args: [[1,2]], expected: 2 },
    { args: [[1,2,3]], expected: 2 },
    { args: [[10,10,10]], expected: 10 },
    { args: [[1,1,1,1,1]], expected: 2 },
  ],
};
