import type { Problem } from '../types';

export const problem: Problem = {
  id: 'stone-game-viii',
  title: 'Stone Game VIII',
  difficulty: 'medium',
  tags: ['dynamic-programming'],
  description: `Alice and Bob take turns playing a game, with Alice starting first.

There are \`n\` stones arranged in a row. On each player's turn, while the number of stones is more than one, the player removes the leftmost stone. The removed stones form a score; the score is the sum of all values in the stones currently on the table before the pick.

Wait — more precisely, when a player picks up all stones **up to and including** index \`i\` (1-indexed), the player earns the **prefix sum** of the original array up to index \`i\`.

Alice and Bob play optimally. Return the **maximum difference** in score (Alice's score − Bob's score).`,
  constraints: [
    'n == stones.length',
    '2 <= n <= 10^5',
    '-10^4 <= stones[i] <= 10^4',
  ],
  examples: [
    {
      input: 'stones = [-1,2,-3,4,-5]',
      output: '5',
      explanation: 'Alice picks index 2 (prefix sum = 1), Bob picks index 4 (prefix sum = 3−4=... actually sum is 1+2=... see editorial). With optimal play the difference is 5.',
    },
    {
      input: 'stones = [7,-6,5,10,5,-2,-6]',
      output: '13',
    },
    {
      input: 'stones = [-10,-12]',
      output: '-22',
      explanation: 'Alice must take both stones (the only option): score = -10 + (-12) = -22.',
    },
  ],
  hints: [
    'Build prefix sums. The player picking "from index i" earns prefix[i].',
    'Let dp[i] = best (current-player − opponent) score difference when the next pick must be ≥ index i.',
    'dp[n-1] = prefix[n-1] (only choice). For i going right-to-left: dp[i] = max(prefix[i] − dp[i+1], dp[i+1]).',
  ],
  functionName: 'stoneGameVIII',
  params: ['stones'],
  starterCode: {
    javascript: 'function stoneGameVIII(stones) {\n\n}\n',
    typescript: "function stoneGameVIII(stones: number[]): number {\n\n}",

    python: 'def stoneGameVIII(stones):\n    pass\n',
  },
  visibleTests: [
    { args: [[-1,2,-3,4,-5]], expected: 5 },
    { args: [[7,-6,5,10,5,-2,-6]], expected: 13 },
    { args: [[-10,-12]], expected: -22 },
  ],
  hiddenTests: [
    { args: [[1,2]], expected: 3 },
    { args: [[1,-1,1]], expected: 1 },
    { args: [[0,0,0]], expected: 0 },
    { args: [[-5,3,1,4,-2]], expected: 2 },
  ],
};
