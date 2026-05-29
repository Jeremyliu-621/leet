import type { Problem } from '../types';

export const problem: Problem = {
  id: 'equal-sum-arrays-with-minimum-number-of-operations',
  title: 'Equal Sum Arrays With Minimum Number of Operations',
  difficulty: 'medium',
  tags: ['arrays'],
  description: `Given two integer arrays \`nums1\` and \`nums2\` where every element is between **1** and **6** inclusive, return the **minimum** number of operations required to make the sum of \`nums1\` equal to the sum of \`nums2\`.

In one operation you may choose any single element from either array and change it to any value between 1 and 6 (inclusive).

Return **-1** if it is not possible to make the sums equal.`,
  constraints: [
    '1 ≤ nums1.length, nums2.length ≤ 10^5',
    '1 ≤ nums1[i], nums2[i] ≤ 6',
  ],
  examples: [
    {
      input: 'nums1 = [1,2,3,4,5,6], nums2 = [1,1,2,2,2,2]',
      output: '3',
      explanation: 'You can make the sums equal in 3 operations.',
    },
    {
      input: 'nums1 = [1,2], nums2 = [4,6]',
      output: '2',
    },
  ],
  hints: [
    'Once you know which array has the larger sum, think of each element as a potential "gain": how much can one operation reduce the difference?',
    'For the smaller-sum array each element can contribute up to `6 - value` gain (increasing toward 6). For the larger-sum array each element contributes up to `value - 1` gain (decreasing toward 1). Collect all gains and sort descending.',
    'Greedily apply the largest available gain. Count operations until the difference reaches 0 or below. If the total of all available gains is still less than the initial difference, return -1.',
  ],
  functionName: 'minOperations',
  params: ['nums1', 'nums2'],
  starterCode: {
    javascript: `function minOperations(nums1, nums2) {\n\n}`,
    python: `def minOperations(nums1, nums2) -> int:\n    pass`,
    typescript: `function minOperations(nums1: number[], nums2: number[]): number {\n\n}`,
  },
  visibleTests: [
    { args: [[1, 2, 3, 4, 5, 6], [1, 1, 2, 2, 2, 2]], expected: 3 },
    { args: [[1], [1]], expected: 0 },
    { args: [[1, 2], [4, 6]], expected: 2 },
  ],
  hiddenTests: [
    { args: [[6], [1]], expected: 1 },
    { args: [[3], [3]], expected: 0 },
    { args: [[1, 6], [6, 1]], expected: 0 },
    { args: [[1], [6, 6, 6, 6, 6, 6, 6]], expected: -1 },
    { args: [[1, 1, 1, 1], [6, 6]], expected: 2 },
    { args: [[2, 3], [5, 1]], expected: 1 },
    { args: [[1, 1, 1, 1, 1, 1], [6, 6, 6, 6, 6, 6]], expected: 6 },
    { args: [[1, 1, 2], [5, 6]], expected: 2 },
  ],
};
