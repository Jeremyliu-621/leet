import type { Problem } from '../types';

export const problem: Problem = {
  id: 'find-the-score-of-all-prefixes-of-an-array',
  title: 'Find the Score of All Prefixes of an Array',
  difficulty: 'medium',
  tags: ['arrays'],
  description: `We define the **conversion array** \`conver\` of an array \`arr\` as follows:

- \`conver[i] = arr[i] + max(arr[0..i])\` where \`max(arr[0..i])\` is the maximum value of \`arr[j]\` over \`0 <= j <= i\`.

We also define the **score** of an array \`arr\` as the sum of the values of the conversion array of \`arr\`.

Given a **0-indexed** integer array \`nums\` of length \`n\`, return an array \`ans\` of length \`n\` where \`ans[i]\` is the score of the prefix \`nums[0..i]\`.`,
  constraints: [
    '`1 <= nums.length <= 10^5`',
    '`1 <= nums[i] <= 10^9`',
  ],
  examples: [
    {
      input: 'nums = [2,3,7,5,10]',
      output: '[4,10,24,36,56]',
      explanation:
        'conver[0]=[2+2]=4, score=4. conver[1]=[2+2,3+3]=10, score=10. conver[2]=[2+2,3+3,7+7]=24. ' +
        'conver[3]=[2+2,3+3,7+7,5+7]=36. conver[4]=[2+2,3+3,7+7,5+7,10+10]=56.',
    },
    {
      input: 'nums = [1,1,2,4,8,16]',
      output: '[2,4,8,16,32,64]',
      explanation: 'Each prefix score doubles because max grows to dominate.',
    },
  ],
  functionName: 'findPrefixScore',
  params: ['nums'],
  starterCode: {
    javascript: `/**
 * @param {number[]} nums
 * @return {number[]}
 */
function findPrefixScore(nums) {

}`,
    typescript: "function findPrefixScore(nums: number[]): number[] {number[]} nums\n * @return {number[]}\n */\nfunction findPrefixScore(nums) {\n\n}",

    python: `def findPrefixScore(nums: list[int]) -> list[int]:
    pass`,
  },
  hints: [
    'The score of a prefix is the sum of `nums[j] + max(nums[0..j])` for each j in the prefix.',
    'Track the running maximum as you scan left to right. At index i: `conver[i] = nums[i] + runMax`. Accumulate a running sum.',
    'Use prefix sums. Maintain `maxSoFar` and `prefixSum`. At each step: `prefixSum += nums[i] + maxSoFar`. Push `prefixSum` to results.',
  ],
  visibleTests: [
    { args: [[2, 3, 7, 5, 10]], expected: [4, 10, 24, 36, 56] },
    { args: [[1, 1, 2, 4, 8, 16]], expected: [2, 4, 8, 16, 32, 64] },
  ],
  hiddenTests: [
    { args: [[1]], expected: [2] },
    { args: [[5, 5]], expected: [10, 20] },
    { args: [[3, 1, 2]], expected: [6, 10, 15] },
    { args: [[1, 2, 3]], expected: [2, 6, 12] },
    { args: [[4, 3, 2, 1]], expected: [8, 15, 21, 26] },
  ],
};
