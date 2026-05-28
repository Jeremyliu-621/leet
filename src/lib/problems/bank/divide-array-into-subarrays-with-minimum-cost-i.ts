import type { Problem } from '../types';

export const problem: Problem = {
  id: 'divide-array-into-subarrays-with-minimum-cost-i',
  title: 'Divide an Array Into Subarrays With Minimum Cost I',
  difficulty: 'easy',
  tags: ['arrays'],
  description: `You are given an array of integers \`nums\` of length \`n\`, and a positive integer \`k\`.

The **cost** of a subarray is the value of its **first element**. The **cost** of a division is the sum of the costs of each subarray in the division.

You have to divide the array into exactly \`k\` non-empty **contiguous** subarrays.

Return the **minimum** possible cost of a valid division.`,
  constraints: [
    '`1 <= n <= 50`',
    '`1 <= k <= n`',
    '`1 <= nums[i] <= 50`',
  ],
  examples: [
    {
      input: 'nums = [1,2,3,12], k = 2',
      output: '3',
      explanation: 'Best split: [1] and [2,3,12]. Costs: 1 + 2 = 3.',
    },
    {
      input: 'nums = [5,4,3,2,1], k = 4',
      output: '11',
      explanation: 'Pick the 3 smallest elements from nums[1..] as additional starting points: 1+2+3=6. Total = 5+6=11.',
    },
    {
      input: 'nums = [10,3,1,1], k = 2',
      output: '11',
      explanation: 'Smallest in nums[1..] is 1. Total = 10 + 1 = 11.',
    },
  ],
  hints: [
    'The first subarray always starts at index 0, so nums[0] is always included in the cost.',
    'You need to choose k-1 more starting indices from nums[1..n-1].',
    'Any subset of k-1 indices from 1..n-1 forms a valid division (sort them to get contiguous subarrays). So minimize by picking the k-1 smallest values from nums[1..].',
  ],
  functionName: 'minimumCost',
  params: ['nums', 'k'],
  starterCode: {
    javascript: `function minimumCost(nums, k) {

}`,
    typescript: 'function minimumCost(nums: number[], k: number): number {\n\n}',
    python: `def minimumCost(nums, k):
    pass`,
  },
  visibleTests: [
    { args: [[1, 2, 3, 12], 2], expected: 3 },
    { args: [[5, 4, 3, 2, 1], 4], expected: 11 },
    { args: [[10, 3, 1, 1], 2], expected: 11 },
  ],
  hiddenTests: [
    { args: [[1, 1, 1, 1, 1], 1], expected: 1 },
    { args: [[3, 1, 2], 3], expected: 6 },
    { args: [[10], 1], expected: 10 },
    { args: [[2, 1, 4, 3], 2], expected: 3 },
    { args: [[1, 50, 50, 50], 2], expected: 51 },
    { args: [[7, 3, 5, 1, 2], 3], expected: 10 },
  ],
};
