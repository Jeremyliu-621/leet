import type { Problem } from '../types';

export const problem: Problem = {
  id: 'stone-game-ix',
  title: 'Stone Game IX',
  difficulty: 'medium',
  tags: ['math'],
  description: `Alice and Bob continue their games with piles of stones. There are several stones arranged in a row, and each stone has an associated value which is an integer given in the array \`stones\`.

Alice and Bob take turns, with **Alice starting first**. On each player's turn, that player can remove any stone from \`stones\`. The **running total** updates to be the sum of all removed stones.

- The player who causes the running total to be **divisible by 3** loses.
- If all stones are removed without triggering a loss, Bob wins.

Return \`true\` if Alice can win with optimal play, or \`false\` otherwise.`,
  constraints: [
    '1 <= stones.length <= 10^5',
    '1 <= stones[i] <= 10^4',
  ],
  examples: [
    {
      input: 'stones = [2]',
      output: 'false',
      explanation: 'Alice removes 2 (total = 2). Bob has no moves. Alice cannot force Bob to lose.',
    },
    {
      input: 'stones = [2,1]',
      output: 'true',
      explanation: 'Alice removes 2 (total 2), Bob removes 1 (total 3). Bob loses.',
    },
    {
      input: 'stones = [5,1,2,4,3]',
      output: 'false',
    },
  ],
  hints: [
    'Only the value mod 3 matters. Count c0, c1, c2 = counts of stones with value % 3 equal to 0, 1, 2.',
    'If c0 is even: Alice wins iff c1 > 0 AND c2 > 0.',
    'If c0 is odd: Alice wins iff |c1 − c2| > 2.',
  ],
  functionName: 'stoneGameIX',
  params: ['stones'],
  starterCode: {
    javascript: 'function stoneGameIX(stones) {\n\n}\n',
    typescript: "function stoneGameIX(stones: number[]): boolean {\n\n}",

    python: 'def stoneGameIX(stones):\n    pass\n',
  },
  visibleTests: [
    { args: [[2]], expected: false },
    { args: [[2,1]], expected: true },
    { args: [[5,1,2,4,3]], expected: false },
  ],
  hiddenTests: [
    { args: [[1]], expected: false },
    { args: [[1,2,1,2]], expected: true },
    { args: [[1,2,2,2,2,2,3]], expected: true },
    { args: [[3,3,3]], expected: false },
  ],
};
