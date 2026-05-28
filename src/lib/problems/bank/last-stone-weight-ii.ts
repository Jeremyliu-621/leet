import type { Problem } from '../types';

export const problem: Problem = {
  id: 'last-stone-weight-ii',
  title: 'Last Stone Weight II',
  difficulty: 'medium',
  tags: ['dynamic-programming'],
  description: `You are given an array of integers \`stones\` where \`stones[i]\` is the weight of the \`i\`th stone.

We are playing a game with the stones. On each turn, we choose any two stones and smash them together. Suppose the stones have weights \`x\` and \`y\` with \`x <= y\`. The result is:

- If \`x == y\`, both stones are destroyed.
- If \`x != y\`, the stone of weight \`x\` is destroyed, and the stone of weight \`y\` has new weight \`y - x\`.

Return the **smallest possible weight** of the leftmost stone. If there are no stones left, return \`0\`.

**Approach:** Partition stones into two groups; minimize |sum1 − sum2|. This reduces to: find the maximum sum ≤ total/2 achievable by a subset. Use 0/1 knapsack DP. Answer = total − 2 × bestSum.`,
  constraints: [
    '1 <= stones.length <= 30',
    '1 <= stones[i] <= 100',
  ],
  examples: [
    {
      input: 'stones = [2,7,4,1,8,1]',
      output: '1',
      explanation: 'Optimal: split into groups {8,2,1}=11 and {7,4,1}=12. |12−11|=1.',
    },
    {
      input: 'stones = [31,26,33,21,40]',
      output: '5',
      explanation: 'Split into {40,33}=73 and {31,26,21}=78. |78−73|=5.',
    },
  ],
  hints: [
    'This is equivalent to partitioning stones into two groups to minimize the difference of their sums.',
    'Use 0/1 knapsack to find the maximum achievable subset sum ≤ total/2.',
    '```js\nfunction lastStoneWeightII(stones) {\n  const total = stones.reduce((a, b) => a + b, 0);\n  const half = Math.floor(total / 2);\n  const dp = new Array(half + 1).fill(false);\n  dp[0] = true;\n  for (const s of stones)\n    for (let j = half; j >= s; j--)\n      dp[j] = dp[j] || dp[j - s];\n  for (let j = half; j >= 0; j--)\n    if (dp[j]) return total - 2 * j;\n  return total;\n}\n```',
  ],
  functionName: 'lastStoneWeightII',
  params: ['stones'],
  starterCode: {
    javascript: `function lastStoneWeightII(stones) {
  // return minimum possible last stone weight

}`,
    python: `def lastStoneWeightII(stones: list) -> int:
    # return minimum possible last stone weight
    pass
`,
  },
  visibleTests: [
    { args: [[2, 7, 4, 1, 8, 1]], expected: 1 },
    { args: [[31, 26, 33, 21, 40]], expected: 5 },
  ],
  hiddenTests: [
    { args: [[1, 2]], expected: 1 },
    { args: [[2, 2]], expected: 0 },
    { args: [[1]], expected: 1 },
    { args: [[1, 1, 2, 3]], expected: 1 },
    { args: [[10, 10, 10]], expected: 10 },
    { args: [[1, 1, 1, 1, 1]], expected: 1 },
    { args: [[100]], expected: 100 },
  ],
};
