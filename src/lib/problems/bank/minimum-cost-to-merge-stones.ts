import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-cost-to-merge-stones',
  title: 'Minimum Cost to Merge Stones',
  difficulty: 'hard',
  tags: ['dynamic-programming'],
  description: `There are \`n\` piles of stones arranged in a row. The \`i\`th pile has \`stones[i]\` stones. A **move** consists of merging exactly \`k\` **consecutive** piles into one pile, and the cost of this move equals the **total number** of stones in these \`k\` piles.

Return the minimum cost to merge all piles of stones into **one pile**. If it is impossible, return \`-1\`.

**Interval DP:** It is possible only when \`(n - 1) % (k - 1) == 0\`. \`dp[i][j]\` = min cost to merge \`stones[i..j]\` into as few piles as possible. Split interval at multiples of \`k-1\`. When the interval length satisfies \`(length - 1) % (k - 1) == 0\`, add the range sum (this final merge is free in the split but paid when needed).`,
  constraints: [
    '1 <= stones.length <= 30',
    '2 <= k <= 30',
    '1 <= stones[i] <= 100',
  ],
  examples: [
    {
      input: 'stones = [3,2,4,1], k = 2',
      output: '20',
    },
    {
      input: 'stones = [3,2,4,1], k = 3',
      output: '-1',
      explanation: '(n-1)%(k-1) = 3%2 = 1 ≠ 0, impossible.',
    },
    {
      input: 'stones = [3,5,1,2,6], k = 3',
      output: '25',
    },
  ],
  hints: [
    'First check if possible: (n - 1) % (k - 1) must equal 0.',
    'dp[i][j] = min cost to merge piles[i..j] as much as possible. Split as dp[i][m] + dp[m+1][j] for m stepping by k-1.',
    'When (j - i) % (k - 1) == 0, the segment can be fully merged into one pile; add the segment sum to account for the final merge.',
  ],
  functionName: 'mergeStones',
  params: ['stones', 'k'],
  starterCode: {
    javascript: 'function mergeStones(stones, k) {\n\n}\n',
    python: 'def mergeStones(stones: list, k: int) -> int:\n    pass\n',
  },
  visibleTests: [
    { args: [[3,2,4,1], 2], expected: 20 },
    { args: [[3,2,4,1], 3], expected: -1 },
    { args: [[3,5,1,2,6], 3], expected: 25 },
  ],
  hiddenTests: [
    { args: [[1,2,3], 2], expected: 9 },
    { args: [[1], 2], expected: 0 },
    { args: [[1,1,1,1,1,1,1], 3], expected: 13 },
    { args: [[2,3,3,2], 2], expected: 20 },
  ],
};
