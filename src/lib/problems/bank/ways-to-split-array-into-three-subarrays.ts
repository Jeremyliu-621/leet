import type { Problem } from '../types';

export const problem: Problem = {
  id: 'ways-to-split-array-into-three-subarrays',
  title: 'Ways to Split Array Into Three Subarrays',
  difficulty: 'medium',
  tags: ['arrays', 'binary-search', 'two-pointers'],
  description: `A split of an integer array is **good** if:

- The array is split into three **non-empty** contiguous subarrays — named \`left\`, \`mid\`, \`right\` from left to right.
- The sum of the elements in \`left\` is less than or equal to the sum of the elements in \`mid\`, and the sum of the elements in \`mid\` is less than or equal to the sum of the elements in \`right\`.

Given \`nums\`, a **0-indexed** integer array of **non-negative** integers, return the number of **good** ways to split \`nums\`. As the number may be too large, return it **modulo** \`10^9 + 7\`.`,
  constraints: [
    '3 <= nums.length <= 10^5',
    '0 <= nums[i] <= 10^4',
  ],
  examples: [
    {
      input: 'nums = [1,1,1]',
      output: '1',
      explanation: 'The only good split is left=[1], mid=[1], right=[1].',
    },
    {
      input: 'nums = [1,2,2,2,5,0]',
      output: '3',
      explanation: 'Good splits: [1]/[2]/[2,2,5,0], [1]/[2,2]/[2,5,0], [1]/[2,2,2]/[5,0].',
    },
  ],
  hints: [
    'Build a prefix sum array to compute subarray sums in O(1).',
    'Fix the end of the left subarray (index i); use binary search to find the valid range for the end of mid.',
    'For a fixed left end i, the mid end j must satisfy: sum(mid) >= sum(left) AND sum(right) >= sum(mid). Both constraints define a range; count valid j values.',
  ],
  functionName: 'waysToSplit',
  params: ['nums'],
  starterCode: {
    javascript: `function waysToSplit(nums) {

}`,
    python: `def waysToSplit(nums):
    pass`,
  },
  visibleTests: [
    { args: [[1, 1, 1]], expected: 1 },
    { args: [[1, 2, 2, 2, 5, 0]], expected: 3 },
  ],
  hiddenTests: [
    { args: [[0, 0, 0]], expected: 1 },
    { args: [[1, 2, 3]], expected: 1 },
    { args: [[0, 0, 0, 0]], expected: 3 },
    { args: [[1, 1, 2]], expected: 1 },
    { args: [[3, 2, 1]], expected: 0 },
    { args: [[1, 0, 0, 0, 1]], expected: 0 },
  ],
};
