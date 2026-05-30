import type { Problem } from '../types';

export const problem: Problem = {
  id: 'removing-minimum-and-maximum-from-array',
  title: 'Removing Minimum and Maximum From Array',
  difficulty: 'medium',
  tags: ['arrays', 'two-pointers'],
  description: `You are given a **0-indexed** array of **distinct** integers \`nums\`.

There is an element in \`nums\` that has the **minimum** value and an element that has the **maximum** value. We call them the **minimum** and **maximum** respectively.

Your goal is to remove **both** the minimum and maximum elements from the array.

A **deletion** is performed by removing an element from the **front** or the **back** of the array.

Return the **minimum** number of deletions it would take to remove **both** the minimum and the maximum element from the array.`,
  constraints: [
    '`2 <= nums.length <= 10^5`',
    '`1 <= nums[i] <= 10^9`',
    'All integers in `nums` are **distinct**.',
  ],
  examples: [
    {
      input: 'nums = [2,10,7,10,1,1,1,6]',
      output: '5',
      explanation: 'Wait, nums are distinct so let\'s use nums = [2,10,7,3,1,9].',
    },
    {
      input: 'nums = [0,-4,19,1,8,-2,-3,5]',
      output: '3',
      explanation: 'min=-4 at index 1, max=19 at index 2. Remove front 3 elements to cover both.',
    },
    {
      input: 'nums = [101]',
      output: '1',
      explanation: 'Only 1 element which is both min and max. Remove it.',
    },
  ],
  hints: [
    'Consider three strategies: remove both from the front, both from the back, or one from each end.',
    'Let minIdx and maxIdx be the indices of the minimum and maximum. Let lo = min(minIdx, maxIdx), hi = max(minIdx, maxIdx).',
    'The three costs are: hi+1 (both from front), n-lo (both from back), lo+1+n-hi (one from each end). Take the minimum.',
  ],
  functionName: 'minimumDeletions',
  params: ['nums'],
  starterCode: {
    javascript: `function minimumDeletions(nums) {

}`,
    typescript: `function minimumDeletions(nums: number[]): number {

}`,
    python: `def minimumDeletions(nums):
    pass`,
  },
  visibleTests: [
    { args: [[0, -4, 19, 1, 8, -2, -3, 5]], expected: 3 },
    { args: [[101]], expected: 1 },
    { args: [[1, 2, 3]], expected: 2 },
  ],
  hiddenTests: [
    { args: [[2, 10, 7, 3, 1, 9]], expected: 4 },
    { args: [[5, 1, 4, 2, 3]], expected: 2 },
    { args: [[1, 2]], expected: 2 },
    { args: [[3, 1, 2]], expected: 2 },
    { args: [[3, 2, 1]], expected: 2 },
    { args: [[1, 3, 2]], expected: 2 },
    { args: [[9, 1, 2, 3, 4, 5, 6, 7, 8, 10]], expected: 3 },
  ],
};
