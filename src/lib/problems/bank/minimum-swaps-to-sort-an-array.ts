import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-swaps-to-sort-an-array',
  title: 'Minimum Swaps to Sort an Array',
  difficulty: 'medium',
  tags: ['arrays', 'math'],
  description: `Given an array of \`n\` distinct integers, return the **minimum number of swaps** required to sort the array in **non-decreasing** order.

A swap exchanges any two elements of the array (not necessarily adjacent).`,
  constraints: [
    '1 <= nums.length <= 10^5',
    '1 <= nums[i] <= 10^9',
    'All values in nums are distinct.',
  ],
  examples: [
    {
      input: 'nums = [4, 3, 2, 1]',
      output: '2',
      explanation: 'Swap 4 and 1 → [1,3,2,4]. Swap 3 and 2 → [1,2,3,4]. Total 2 swaps.',
    },
    {
      input: 'nums = [1, 5, 4, 3, 2]',
      output: '2',
      explanation: 'Swap 5 and 2 → [1,2,4,3,5]. Swap 4 and 3 → [1,2,3,4,5]. Total 2 swaps.',
    },
    {
      input: 'nums = [2, 3, 4, 1, 5]',
      output: '3',
      explanation: 'Elements 1,2,3,4 form a 4-cycle in the permutation, requiring 3 swaps.',
    },
  ],
  hints: [
    'Sort a copy of the array. Map each value to its target index.',
    'Build a permutation graph where i → targetIndex[nums[i]].',
    'Count cycles in this permutation. A cycle of length k needs k-1 swaps.',
    'Total swaps = n - (number of cycles).',
    'Use a visited array to track which positions have been included in a cycle.',
  ],
  functionName: 'minSwaps',
  params: ['nums'],
  starterCode: {
    javascript: `function minSwaps(nums) {

}`,
    python: `def minSwaps(nums):
    pass`,
  },
  visibleTests: [
    { args: [[4, 3, 2, 1]], expected: 2 },
    { args: [[1, 5, 4, 3, 2]], expected: 2 },
    { args: [[2, 3, 4, 1, 5]], expected: 3 },
  ],
  hiddenTests: [
    { args: [[1]], expected: 0 },
    { args: [[1, 2, 3]], expected: 0 },
    { args: [[3, 2, 1]], expected: 1 },
    { args: [[5, 4, 3, 2, 1]], expected: 2 },
  ],
};
