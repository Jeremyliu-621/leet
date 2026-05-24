import type { Problem } from '../types';

export const problem: Problem = {
  id: 'two-sum-less-than-k',
  title: 'Two Sum Less Than K',
  difficulty: 'easy',
  tags: ['two-pointers', 'arrays'],
  description: `Given an integer array \`nums\` and an integer \`k\`, return the **maximum sum** of a pair \`nums[i] + nums[j]\` such that \`i < j\` and \`nums[i] + nums[j] < k\`.

If no such pair exists, return \`-1\`.`,
  constraints: [
    '`1 <= nums.length <= 100`',
    '`1 <= nums[i] <= 1000`',
    '`1 <= k <= 2000`',
  ],
  examples: [
    {
      input: 'nums = [34,23,1,24,75,33,54,8], k = 60',
      output: '58',
      explanation: '34 + 24 = 58 is the maximum pair sum less than 60.',
    },
    {
      input: 'nums = [10,20,30], k = 15',
      output: '-1',
      explanation: 'No pair sums to less than 15.',
    },
  ],
  hints: [
    'Sort the array, then use two pointers (lo at start, hi at end).',
    'If nums[lo] + nums[hi] < k, record the sum and advance lo. Otherwise retreat hi.',
  ],
  functionName: 'twoSumLessThanK',
  params: ['nums', 'k'],
  starterCode: {
    javascript: `function twoSumLessThanK(nums, k) {

}`,
    python: `def twoSumLessThanK(nums, k):
    pass`,
  },
  visibleTests: [
    { args: [[34, 23, 1, 24, 75, 33, 54, 8], 60], expected: 58 },
    { args: [[10, 20, 30], 15], expected: -1 },
    { args: [[1, 2, 3], 5], expected: 4 },
  ],
  hiddenTests: [
    { args: [[1], 2], expected: -1 },
    { args: [[1, 2], 4], expected: 3 },
    { args: [[5, 5, 5], 11], expected: 10 },
    { args: [[100, 200, 300], 150], expected: -1 },
    { args: [[1, 1000], 1002], expected: 1001 },
  ],
};
