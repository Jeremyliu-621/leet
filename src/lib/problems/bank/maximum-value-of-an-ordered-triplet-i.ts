import type { Problem } from '../types';

export const problem: Problem = {
  id: 'maximum-value-of-an-ordered-triplet-i',
  title: 'Maximum Value of an Ordered Triplet I',
  difficulty: 'easy',
  tags: ['arrays'],
  description: `You are given a **0-indexed** integer array \`nums\`.

Return the **maximum** value over all triplets of indices \`(i, j, k)\` such that \`i < j < k\`. If all such triplets have a negative value, return \`0\`.

The **value** of a triplet of indices \`(i, j, k)\` is equal to \`(nums[i] - nums[j]) * nums[k]\`.`,
  constraints: [
    '3 <= nums.length <= 100',
    '1 <= nums[i] <= 10^6',
  ],
  examples: [
    {
      input: 'nums = [12,6,1,2,7]',
      output: '77',
      explanation: '(nums[0] - nums[2]) * nums[4] = (12 - 1) * 7 = 77.',
    },
    {
      input: 'nums = [1,10,3,4,19]',
      output: '133',
      explanation: '(nums[1] - nums[2]) * nums[4] = (10 - 3) * 19 = 133.',
    },
    {
      input: 'nums = [1,2,3]',
      output: '0',
      explanation: 'The only triplet is (0,1,2): (1-2)*3 = -3 < 0 → return 0.',
    },
  ],
  hints: [
    'With the small constraint (n ≤ 100), a brute-force O(n³) triple loop over all (i, j, k) with i < j < k is fast enough.',
    'Track the maximum of (nums[i] - nums[j]) * nums[k] across all valid triplets.',
    'Return Math.max(0, best) so that a negative maximum becomes 0.',
  ],
  functionName: 'maximumTripletValue',
  params: ['nums'],
  starterCode: {
    javascript: `function maximumTripletValue(nums) {

}`,
    typescript: "function maximumTripletValue(nums: number[]): number {\n\n}",

    python: `def maximumTripletValue(nums):
    pass`,
  },
  visibleTests: [
    { args: [[12, 6, 1, 2, 7]], expected: 77 },
    { args: [[1, 10, 3, 4, 19]], expected: 133 },
    { args: [[1, 2, 3]], expected: 0 },
  ],
  hiddenTests: [
    { args: [[5, 5, 5]], expected: 0 },
    { args: [[10, 1, 10]], expected: 90 },
    { args: [[1, 1, 1, 1]], expected: 0 },
    { args: [[3, 1, 2, 5]], expected: 10 },
    { args: [[100, 1, 1, 100]], expected: 9900 },
    { args: [[1, 2, 3, 4]], expected: 0 },
  ],
};
