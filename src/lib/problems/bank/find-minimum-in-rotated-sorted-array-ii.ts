import type { Problem } from '../types';

export const problem: Problem = {
  id: 'find-minimum-in-rotated-sorted-array-ii',
  title: 'Find Minimum in Rotated Sorted Array II',
  difficulty: 'hard',
  tags: ['binary-search', 'arrays'],
  description: `Suppose an array of length \`n\` sorted in ascending order is **rotated** between \`1\` and \`n\` times. Given the sorted rotated array \`nums\` that may contain **duplicates**, return the minimum element of this array.

You must decrease the overall operation steps as much as possible.`,
  constraints: [
    'n == nums.length',
    '1 <= n <= 5000',
    '-5000 <= nums[i] <= 5000',
    'nums is sorted and rotated between 1 and n times.',
  ],
  examples: [
    {
      input: 'nums = [1,3,5]',
      output: '1',
    },
    {
      input: 'nums = [2,2,2,0,1]',
      output: '0',
    },
  ],
  hints: [
    'Modified binary search: compare nums[mid] with nums[right].',
    'If nums[mid] < nums[right]: minimum is in [lo, mid].',
    'If nums[mid] > nums[right]: minimum is in [mid+1, right].',
    'If nums[mid] == nums[right]: cannot determine side, so right--.',
  ],
  functionName: 'findMin',
  params: ['nums'],
  starterCode: {
    javascript: `function findMin(nums) {

}`,
    typescript: "function findMin(nums: number[]): number {\n\n}",

    python: `def findMin(nums):
    pass`,
  },
  visibleTests: [
    { args: [[1, 3, 5]], expected: 1 },
    { args: [[2, 2, 2, 0, 1]], expected: 0 },
  ],
  hiddenTests: [
    { args: [[1]], expected: 1 },
    { args: [[1, 1]], expected: 1 },
    { args: [[3, 1, 1]], expected: 1 },
    { args: [[1, 0, 1, 1, 1]], expected: 0 },
  ],
};
