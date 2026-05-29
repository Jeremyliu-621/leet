import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-operations-to-make-array-continuous',
  title: 'Minimum Operations to Make the Array Continuous',
  difficulty: 'medium',
  tags: ['arrays', 'binary-search'],
  description: `You are given an integer array \`nums\`. In one operation, you can replace **any** element in \`nums\` with **any** integer.

\`nums\` is considered **continuous** if both of the following conditions are fulfilled:

- All elements in \`nums\` are **unique**.
- The difference between the **maximum** element and the **minimum** element in \`nums\` equals \`nums.length - 1\`.

For example, \`nums = [4, 2, 5, 3]\` is continuous, but \`nums = [1, 2, 3, 5, 6]\` is not.

Return the **minimum** number of operations to make \`nums\` continuous.`,
  constraints: [
    '1 <= nums.length <= 10^5',
    '1 <= nums[i] <= 10^9',
  ],
  examples: [
    {
      input: 'nums = [4,2,5,3]',
      output: '0',
      explanation: 'nums is already continuous.',
    },
    {
      input: 'nums = [1,2,3,5,6]',
      output: '1',
      explanation: 'Replace 5 with 4 → [1,2,3,4,6] or replace 6 with 4 → [1,2,3,5,4]. Either gives a continuous array.',
    },
    {
      input: 'nums = [1,10,100,1000]',
      output: '3',
      explanation: 'Keep one element and replace the other three to form a range of 4 consecutive integers.',
    },
  ],
  hints: [
    'Sort and deduplicate the array. The answer is n minus the maximum number of original elements we can keep.',
    'We want the largest subset of unique elements that fits in a window [v, v+n-1] for some v.',
    'Use a sliding window on the sorted unique array: for each left boundary, advance right while arr[right] <= arr[left] + n - 1.',
    'The maximum window size (right - left + 1) gives the most elements we can keep without replacement.',
  ],
  functionName: 'minOperations',
  params: ['nums'],
  starterCode: {
    javascript: `function minOperations(nums) {

}`,
    typescript: `function minOperations(nums: number[]): number {

}`,
    python: `def minOperations(nums: list[int]) -> int:
    pass`,
  },
  visibleTests: [
    { args: [[4, 2, 5, 3]], expected: 0 },
    { args: [[1, 2, 3, 5, 6]], expected: 1 },
    { args: [[1, 10, 100, 1000]], expected: 3 },
  ],
  hiddenTests: [
    { args: [[1]], expected: 0 },
    { args: [[1, 2]], expected: 0 },
    { args: [[1, 3]], expected: 1 },
    { args: [[1, 1]], expected: 1 },
    { args: [[1, 2, 3, 4]], expected: 0 },
    { args: [[3, 1, 4, 1, 5]], expected: 1 },
    { args: [[1, 2, 2, 2, 2]], expected: 3 },
    { args: [[1, 2, 3, 4, 5]], expected: 0 },
  ],
};
