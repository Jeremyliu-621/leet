import type { Problem } from '../types';

export const problem: Problem = {
  id: 'power-of-heroes',
  title: 'Power of Heroes',
  difficulty: 'hard',
  tags: ['arrays', 'math'],
  description: `You are given a **0-indexed** integer array \`nums\` representing the strength of some heroes. The **power** of a group of heroes is defined as follows:

- Let \`i_0, i_1, ... ,i_k\` be the indices of the heroes in a group. Then the power of this group is \`max(nums[i_0], nums[i_1], ... ,nums[i_k])^2 * min(nums[i_0], nums[i_1], ... ,nums[i_k])\`.

Return the **sum** of the power of all **non-empty** groups of heroes possible. Since the sum could be very large, return it modulo \`10^9 + 7\`.

**Approach:** Sort the array. For each index \`j\` (as the max), compute the contribution of all subsets where \`nums[j]\` is the max. Each such subset has some \`nums[i] (i<j)\` as the min. The contribution of min \`nums[i]\` is \`nums[j]^2 * nums[i] * 2^(j-i-1)\` (choosing middle elements freely). Maintain a running weighted sum \`s = 2*s + nums[j-1]\` for efficiency.`,
  constraints: [
    '1 <= nums.length <= 10^5',
    '1 <= nums[i] <= 10^9',
  ],
  examples: [
    {
      input: 'nums = [2,1,4]',
      output: '141',
      explanation: 'All groups: {1}→1, {2}→8, {4}→64, {1,2}→4, {1,4}→16, {2,4}→32, {1,2,4}→16. Sum=141.',
    },
    {
      input: 'nums = [1,1,1]',
      output: '7',
      explanation: 'Each singleton is 1. Each pair: 1^2*1=1 (3 pairs). The triple: 1. Total=3+3+1=7.',
    },
    {
      input: 'nums = [4]',
      output: '64',
      explanation: 'Only {4}: 4^2*4=64.',
    },
  ],
  hints: [
    'Sort the array. For sorted array, nums[j] is the max of any subset ending at j.',
    'For each j, the subset has min nums[i] for some i ≤ j. The contribution is nums[j]^2 * nums[i] * 2^(j-i-1) for i<j, plus nums[j]^3 for the singleton {j}.',
    'Maintain running sum: before processing j, s = sum_{i<j}(nums[i] * 2^(j-i-1)). Then ans += nums[j]^2 * s + nums[j]^3; then s = 2*s + nums[j].',
    '```js\nconst MOD = 1_000_000_007n;\nconst arr = [...nums].sort((a, b) => a - b).map(BigInt);\nlet ans = 0n, s = 0n;\nfor (const x of arr) {\n  ans = (ans + x * x * (s + x)) % MOD;\n  s = (2n * s + x) % MOD;\n}\nreturn Number(ans);\n```',
  ],
  functionName: 'sumOfPower',
  params: ['nums'],
  starterCode: {
    javascript: `function sumOfPower(nums) {
  // return sum of power of all non-empty groups, modulo 1e9+7

}`,
    typescript: "function sumOfPower(nums: number[]): number {\n  // return sum of power of all non-empty groups, modulo 1e9+7\n\n}",

    python: `def sumOfPower(nums: list) -> int:
    # return sum of power of all non-empty groups, modulo 1e9+7
    pass
`,
  },
  visibleTests: [
    { args: [[2, 1, 4]], expected: 141 },
    { args: [[1, 1, 1]], expected: 7 },
    { args: [[4]], expected: 64 },
  ],
  hiddenTests: [
    { args: [[1]], expected: 1 },
    { args: [[1, 2]], expected: 13 },
    { args: [[3, 3]], expected: 81 },
    { args: [[1, 2, 3]], expected: 76 },
    { args: [[1, 1, 2]], expected: 23 },
    { args: [[5, 1, 3]], expected: 287 },
    { args: [[2, 2, 2, 2]], expected: 120 },
  ],
};
