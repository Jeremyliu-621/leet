import type { Problem } from '../types';

export const problem: Problem = {
  id: 'target-sum',
  title: 'Target Sum',
  difficulty: 'medium',
  tags: ['dynamic-programming', 'arrays'],
  description: `You are given an integer array \`nums\` and an integer \`target\`.

You want to build an **expression** out of \`nums\` by adding the symbol \`'+'\` or \`'-'\` before each integer in \`nums\` and then concatenate all the integers.

Return the **number of different expressions** that you can build which evaluates to \`target\`.`,
  constraints: [
    '1 <= nums.length <= 20',
    '0 <= nums[i] <= 1000',
    '0 <= sum(nums[i]) <= 1000',
    '-1000 <= target <= 1000',
  ],
  examples: [
    {
      input: 'nums = [1, 1, 1, 1, 1], target = 3',
      output: '5',
      explanation: '-1+1+1+1+1 = 3, +1-1+1+1+1 = 3, +1+1-1+1+1 = 3, +1+1+1-1+1 = 3, +1+1+1+1-1 = 3. There are 5 ways to reach target = 3.',
    },
    {
      input: 'nums = [1], target = 1',
      output: '1',
    },
  ],
  hints: [
    'Think of a DP map where keys are reachable sums and values are the count of ways to reach each sum. Start with `{0: 1}`. For each number, update the map by adding or subtracting the number.',
    'For each number `num`, create a new map: for each `(sum, count)` in the current map, add `count` to `newMap[sum + num]` and `newMap[sum - num]`. Replace the map and return `map.get(target) ?? 0` at the end.',
    '`let dp = new Map([[0, 1]]); for (const num of nums) { const next = new Map(); for (const [s, c] of dp) { next.set(s + num, (next.get(s + num) ?? 0) + c); next.set(s - num, (next.get(s - num) ?? 0) + c); } dp = next; } return dp.get(target) ?? 0;`',
  ],
  functionName: 'findTargetSumWays',
  params: ['nums', 'target'],
  starterCode: {
    javascript: 'function findTargetSumWays(nums, target) {\n  \n}\n',
    typescript: "function findTargetSumWays(nums: number[], target: number): number {\n  \n}",

    python: 'def findTargetSumWays(nums: list[int], target: int) -> int:\n    pass\n',
  },
  visibleTests: [
    { args: [[1, 1, 1, 1, 1], 3], expected: 5 },
    { args: [[1], 1], expected: 1 },
    { args: [[1], -1], expected: 1 },
    { args: [[1], 2], expected: 0 },
  ],
  hiddenTests: [
    { args: [[0, 0, 0, 0, 0, 0, 0, 0, 1], 1], expected: 256 },
    { args: [[1, 0], 1], expected: 2 },
    { args: [[1, 2, 3], 0], expected: 2 },
    { args: [[100], -200], expected: 0 },
    { args: [[2, 2, 2], 2], expected: 3 },
  ],
};
