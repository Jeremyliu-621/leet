import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-swaps-to-group-all-1s-together-ii',
  title: 'Minimum Swaps to Group All 1\'s Together II',
  difficulty: 'medium',
  tags: ['arrays', 'sliding-window'],
  description: `A **swap** is defined as taking two distinct positions in an array and swapping the values in them.

A **circular** array is defined as an array where we consider the first element and the last element to be adjacent.

Given a binary circular array \`nums\`, return *the minimum number of swaps required to group all* \`1\`*'s present in the array together at any location*.`,
  constraints: [
    '1 <= nums.length <= 10^5',
    'nums[i] is either 0 or 1.',
  ],
  examples: [
    {
      input: 'nums = [0,1,0,1,1,0,0]',
      output: '1',
      explanation: 'Group all 1\'s to [1,1,1,0,0,0,0] using 1 swap (index 0 and 3).',
    },
    {
      input: 'nums = [0,1,1,1,0,0,1,1,0]',
      output: '2',
      explanation: 'Minimum 2 swaps needed.',
    },
    {
      input: 'nums = [1,1,1,0,0]',
      output: '0',
      explanation: 'All 1\'s are already grouped.',
    },
  ],
  hints: [
    'Level 1: The minimum swaps equals the minimum number of 0s in any window of size k (where k = total count of 1s). A swap replaces a 0 in the window with a 1 outside.',
    'Level 2: Since the array is circular, double the array (or use modular indexing). Slide a window of size k over 2n positions, counting zeros. Track the minimum.',
    'Level 3: Initial window = nums[0..k-1]. Then slide: add nums[i % n], remove nums[(i-k) % n], maintaining a count of zeros. O(n) time.',
  ],
  functionName: 'minSwaps',
  params: ['nums'],
  starterCode: {
    javascript: `function minSwaps(nums) {

}`,
    typescript: `function minSwaps(nums: number[]): number {

}`,
    python: `def minSwaps(nums):
    pass`,
  },
  visibleTests: [
    { args: [[0, 1, 0, 1, 1, 0, 0]], expected: 1 },
    { args: [[0, 1, 1, 1, 0, 0, 1, 1, 0]], expected: 2 },
    { args: [[1, 1, 1, 0, 0]], expected: 0 },
  ],
  hiddenTests: [
    { args: [[1]], expected: 0 },
    { args: [[0]], expected: 0 },
    { args: [[1, 0]], expected: 0 },
    { args: [[0, 1, 0]], expected: 0 },
    { args: [[0, 0, 1, 0, 1, 1, 0]], expected: 1 },
    { args: [[1, 0, 0, 0, 1]], expected: 0 },
    { args: [[0, 0, 0, 1, 0, 1, 0, 1]], expected: 1 },
  ],
};
