import type { Problem } from '../types';

export const problem: Problem = {
  id: 'two-sum',
  title: 'Two Sum',
  difficulty: 'easy',
  tags: ['arrays', 'hash-map'],
  description: `Given an array of integers \`nums\` and an integer \`target\`, return the **indices** of the two numbers that add up to \`target\`.

You may assume that each input has **exactly one solution**, and you may not use the same element twice.

Return the answer in any order.`,
  constraints: [
    '2 <= nums.length <= 10^4',
    '-10^9 <= nums[i] <= 10^9',
    '-10^9 <= target <= 10^9',
    'Only one valid answer exists.',
  ],
  examples: [
    {
      input: 'nums = [2,7,11,15], target = 9',
      output: '[0,1]',
      explanation: 'nums[0] + nums[1] = 2 + 7 = 9.',
    },
    {
      input: 'nums = [3,2,4], target = 6',
      output: '[1,2]',
      explanation: 'nums[1] + nums[2] = 2 + 4 = 6.',
    },
    {
      input: 'nums = [3,3], target = 6',
      output: '[0,1]',
      explanation: 'nums[0] + nums[1] = 3 + 3 = 6.',
    },
  ],
  hints: [
    'A brute-force double loop works but is O(n²). Can you do it in one pass?',
    'Use a hash map to store each value and its index as you iterate. For each element, check if `target - nums[i]` is already in the map.',
    'If `complement = target - nums[i]` exists in the map and its stored index ≠ i, you have your answer: `[map.get(complement), i]`.',
  ],
  functionName: 'twoSum',
  params: ['nums', 'target'],
  starterCode: {
    javascript: `function twoSum(nums, target) {

}`,
    typescript: `function twoSum(nums: number[], target: number): number[] {

}`,
    python: `def twoSum(nums, target):
    pass`,
  },
  visibleTests: [
    { args: [[2, 7, 11, 15], 9], expected: [0, 1] },
    { args: [[3, 2, 4], 6], expected: [1, 2] },
    { args: [[3, 3], 6], expected: [0, 1] },
  ],
  hiddenTests: [
    { args: [[1, 5, 3, 2], 4], expected: [0, 2] },
    { args: [[0, 4, 3, 0], 0], expected: [0, 3] },
    { args: [[-1, -2, -3, -4, -5], -8], expected: [2, 4] },
    { args: [[1, 2, 3, 4, 5], 9], expected: [3, 4] },
    { args: [[2, 5, 5, 11], 10], expected: [1, 2] },
    { args: [[1, 1000000000], 1000000001], expected: [0, 1] },
  ],
};
