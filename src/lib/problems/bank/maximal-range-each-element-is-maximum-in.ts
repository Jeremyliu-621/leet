import type { Problem } from '../types';

export const problem: Problem = {
  id: 'maximal-range-each-element-is-maximum-in',
  title: 'Maximal Range That Each Element Is Maximum In',
  difficulty: 'medium',
  tags: ['arrays', 'stack'],
  description: `You are given a **0-indexed** array \`nums\` of distinct integers.

For each element \`nums[i]\`, let \`ranges[i]\` be the **length** of the longest contiguous subarray starting and ending with \`nums[i]\` as the **maximum** element.

More formally, \`ranges[i]\` is the length of the largest subarray \`nums[l..r]\` such that:
- \`l <= i <= r\`, and
- \`nums[i] >= nums[j]\` for all \`j\` in \`[l, r]\`.

Return the array \`ranges\`.`,
  constraints: [
    '1 <= nums.length <= 10^5',
    '1 <= nums[i] <= 10^9',
    'All values in nums are distinct.',
  ],
  examples: [
    {
      input: 'nums = [1, 5, 2, 3]',
      output: '[1, 4, 1, 2]',
      explanation:
        'For nums[0]=1: only subarray [1] (length 1) since nums[1]=5 > 1. For nums[1]=5: all of [1,5,2,3] (length 4). For nums[2]=2: only [2] (length 1). For nums[3]=3: subarray [2,3] (length 2).',
    },
    {
      input: 'nums = [1, 2, 3]',
      output: '[1, 2, 3]',
      explanation: 'Each element is max in the longest suffix ending at that element.',
    },
    {
      input: 'nums = [3, 2, 1]',
      output: '[3, 2, 1]',
      explanation: 'Each element is max in the longest prefix starting at that element.',
    },
  ],
  hints: [
    'For each index i, find the nearest index to the left where nums[left] > nums[i] (strictly), and similarly to the right.',
    'The answer for i is right - left - 1 where left is the last index with a strictly larger element (or -1) and right is the first such index (or n).',
    'Use a monotone decreasing stack to compute prevGreater and nextGreater in O(n).',
  ],
  functionName: 'maximumSizeSubarray',
  params: ['nums'],
  starterCode: {
    javascript: 'function maximumSizeSubarray(nums) {\n  // your code here\n}\n',
    typescript: 'function maximumSizeSubarray(nums: number[]): number[] {\n  // your code here\n}',
    python: 'def maximumSizeSubarray(nums):\n    # your code here\n    pass\n',
  },
  visibleTests: [
    { args: [[1, 5, 2, 3]], expected: [1, 4, 1, 2] },
    { args: [[1, 2, 3]], expected: [1, 2, 3] },
    { args: [[3, 2, 1]], expected: [3, 2, 1] },
  ],
  hiddenTests: [
    { args: [[5]], expected: [1] },
    { args: [[1, 2]], expected: [1, 2] },
    { args: [[2, 1]], expected: [2, 1] },
    { args: [[3, 1, 2]], expected: [3, 1, 2] },
    { args: [[2, 3, 1]], expected: [1, 3, 1] },
    { args: [[1, 3, 2, 5, 4]], expected: [1, 3, 1, 5, 1] },
    { args: [[4, 1, 3, 2]], expected: [4, 1, 3, 1] },
  ],
};
