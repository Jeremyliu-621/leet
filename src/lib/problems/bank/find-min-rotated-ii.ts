import type { Problem } from '../types';

export const problem: Problem = {
  id: 'find-min-rotated-ii',
  title: 'Find Minimum in Rotated Sorted Array II',
  difficulty: 'medium',
  tags: ['binary-search'],
  description: `Suppose an array of length \`n\` sorted in ascending order is **rotated** between \`1\` and \`n\` times. Given the sorted rotated array \`nums\` that may contain **duplicates**, return the minimum element of this array.

You must decrease the overall operation steps as much as possible.`,
  constraints: [
    'n == nums.length',
    '1 <= n <= 5000',
    '-5000 <= nums[i] <= 5000',
    'nums is sorted and rotated between 1 and n times',
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
    {
      input: 'nums = [3,3,1,3]',
      output: '1',
    },
  ],
  hints: [
    'Use binary search with a twist: when nums[mid] === nums[right], you cannot determine which half is sorted, so just decrement right by 1.',
    'When nums[mid] < nums[right], the minimum is in the left half (including mid). Otherwise it is in the right half.',
  ],
  functionName: 'findMin',
  params: ['nums'],
  starterCode: {
    javascript: `function findMin(nums) {
  // Return minimum element
}`,
    python: `def findMin(nums):
    # Return minimum element
    pass`,
  },
  visibleTests: [
    { args: [[1, 3, 5]], expected: 1 },
    { args: [[2, 2, 2, 0, 1]], expected: 0 },
    { args: [[3, 3, 1, 3]], expected: 1 },
  ],
  hiddenTests: [
    { args: [[1]], expected: 1 },
    { args: [[3, 1, 3, 3]], expected: 1 },
    { args: [[2, 2, 2, 2, 2]], expected: 2 },
    { args: [[4, 4, 4, 1, 2, 3, 4]], expected: 1 },
  ],
};
