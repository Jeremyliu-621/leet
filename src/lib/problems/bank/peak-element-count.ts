import type { Problem } from '../types';

export const problem: Problem = {
  id: 'peak-element-count',
  title: 'Count Interior Peaks',
  difficulty: 'easy',
  tags: ['arrays'],
  description: `An **interior peak** is an element that is *strictly* greater than both of its immediate neighbours.

Given an integer array \`nums\`, count how many interior peaks it contains. The first and last elements can never be interior peaks because they each have only one neighbour.

Return the count as a number.`,
  constraints: [
    '1 <= nums.length <= 1000',
    'All values in nums are integers.',
    '-10000 <= nums[i] <= 10000',
  ],
  examples: [
    {
      input: 'nums = [1,3,2,4,1]',
      output: '2',
      explanation: '3 is greater than 1 and 2; 4 is greater than 2 and 1.',
    },
    {
      input: 'nums = [5,4,3,2,1]',
      output: '0',
      explanation: 'A strictly decreasing array has no peaks.',
    },
    {
      input: 'nums = [1,2,2,1]',
      output: '0',
      explanation: 'A peak must be strictly greater than both neighbours.',
    },
  ],
  functionName: 'countInteriorPeaks',
  params: ['nums'],
  starterCode: {
    javascript: `function countInteriorPeaks(nums) {
  let count = 0;
  for (let i = 1; i < nums.length - 1; i++) {
    if (nums[i] > nums[i - 1] && nums[i] > nums[i + 1]) count++;
  }
  return count;
}`,
    typescript: `function countInteriorPeaks(nums: number[]): number {
  let count = 0;
  for (let i = 1; i < nums.length - 1; i++) {
    if (nums[i]! > nums[i - 1]! && nums[i]! > nums[i + 1]!) count++;
  }
  return count;
}`,
    python: `def countInteriorPeaks(nums):
    if hasattr(nums, 'to_py'): nums = nums.to_py()
    nums = [int(x) for x in nums]
    count = 0
    for i in range(1, len(nums)-1):
        if nums[i] > nums[i-1] and nums[i] > nums[i+1]: count += 1
    return count`,
  },
  visibleTests: [
    { args: [[1, 3, 2, 4, 1]], expected: 2 },
    { args: [[5, 4, 3, 2, 1]], expected: 0 },
    { args: [[1, 2, 2, 1]], expected: 0 },
  ],
  hiddenTests: [
    { args: [[1]], expected: 0 },
    { args: [[1, 2]], expected: 0 },
    { args: [[1, 5, 1]], expected: 1 },
    { args: [[0, 10, 0, 10, 0, 10, 0]], expected: 3 },
    { args: [[-3, -1, -3, -1, -3]], expected: 2 },
    { args: [[2, 2, 2, 2]], expected: 0 },
  ],
  hints: [
    'Only indices `1` through `nums.length - 2` can be peaks — endpoints are missing a neighbour and never qualify.',
    'For each interior index `i`, check both sides at once: `nums[i] > nums[i - 1]` **and** `nums[i] > nums[i + 1]`. Both comparisons must be strict, so a plateau like `[1,2,2,1]` contributes zero.',
    'Walk the array once with a counter. No sorting, no nested loops — a single linear scan is `O(n)` time and `O(1)` extra space.',
  ],
};
