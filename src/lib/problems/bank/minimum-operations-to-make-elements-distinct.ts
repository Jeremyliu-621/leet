import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-operations-to-make-elements-distinct',
  title: 'Minimum Number of Operations to Make Elements in Array Distinct',
  difficulty: 'easy',
  tags: ['arrays', 'hash-map'],
  description: `You are given an integer array \`nums\`. In one **operation** you can **remove the first 3 elements** of the array (or all remaining elements if fewer than 3 remain).

Return the **minimum number of operations** needed so that all remaining elements of the array are **distinct** (no duplicates). An empty array is considered distinct.`,
  constraints: [
    '1 <= nums.length <= 100',
    '1 <= nums[i] <= 100',
  ],
  examples: [
    {
      input: 'nums = [1,2,3,4,2,3,3,5,7]',
      output: '2',
      explanation: 'After 2 operations: remove [1,2,3] then [4,2,3], leaving [3,5,7] — all distinct.',
    },
    {
      input: 'nums = [4,5,6,4,4]',
      output: '2',
      explanation: 'After 2 operations: remove [4,5,6] then [4,4], leaving [] — trivially distinct.',
    },
    {
      input: 'nums = [6,7,8,9]',
      output: '0',
      explanation: 'Already distinct — no operations needed.',
    },
  ],
  hints: [
    'Iterate from right to left, tracking elements seen so far. The **rightmost** duplicate determines how many prefix elements must be removed.',
    'When scanning right-to-left with a Set, the first duplicate you encounter at index `i` means you must remove all elements at indices 0 through `i`. That requires `Math.ceil((i + 1) / 3)` operations.',
    'Scan `nums` from the last index to the first with a Set. The moment `nums[i]` is already in the Set, return `Math.ceil((i + 1) / 3)`. If the scan completes without finding a duplicate, return 0.',
  ],
  functionName: 'minimumOperations',
  params: ['nums'],
  starterCode: {
    javascript: `function minimumOperations(nums) {

}`,
    python: `def minimumOperations(nums):
    pass`,
  },
  visibleTests: [
    { args: [[1, 2, 3, 4, 2, 3, 3, 5, 7]], expected: 2 },
    { args: [[4, 5, 6, 4, 4]], expected: 2 },
    { args: [[6, 7, 8, 9]], expected: 0 },
  ],
  hiddenTests: [
    { args: [[1]], expected: 0 },
    { args: [[1, 1]], expected: 1 },
    { args: [[1, 2, 1]], expected: 1 },
    { args: [[1, 2, 3, 1]], expected: 1 },
    { args: [[1, 1, 1, 1, 1]], expected: 2 },
    { args: [[5, 5, 5, 5, 5, 5, 5]], expected: 2 },
    { args: [[1, 2, 3, 4, 5, 6]], expected: 0 },
    { args: [[3, 2, 1, 2, 3]], expected: 1 },
    { args: [[2, 1, 1, 3, 4]], expected: 1 },
  ],
};
