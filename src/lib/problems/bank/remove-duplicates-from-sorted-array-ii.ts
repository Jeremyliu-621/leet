import type { Problem } from '../types';

export const problem: Problem = {
  id: 'remove-duplicates-from-sorted-array-ii',
  title: 'Remove Duplicates from Sorted Array II',
  difficulty: 'medium',
  tags: ['arrays', 'two-pointers'],
  description: `Given an integer array \`nums\` sorted in **non-decreasing order**, remove some duplicates **in-place** such that each unique element appears **at most twice**. The **relative order** of the elements should be kept the same.

Since it is impossible to change the length of the array in some languages, you must instead have the result be placed in the **first part** of the array \`nums\`. More formally, if there are \`k\` elements after removing the duplicates, then the first \`k\` elements of \`nums\` should hold the final result. It does not matter what you leave beyond the first \`k\` elements.

Return \`k\` after placing the final result in the first \`k\` slots of \`nums\`.`,
  constraints: [
    '`1 <= nums.length <= 3 * 10^4`',
    '`-10^4 <= nums[i] <= 10^4`',
    '`nums` is sorted in **non-decreasing** order.',
  ],
  examples: [
    {
      input: 'nums = [1,1,1,2,2,3]',
      output: '5, nums = [1,1,2,2,3,_]',
      explanation: 'Your function should return k = 5, with the first five elements of nums being 1, 1, 2, 2 and 3.',
    },
    {
      input: 'nums = [0,0,1,1,1,1,2,3,3]',
      output: '7, nums = [0,0,1,1,2,3,3,_,_]',
      explanation: 'Your function should return k = 7, with the first seven elements being 0, 0, 1, 1, 2, 3 and 3.',
    },
  ],
  hints: [
    'Use a write pointer k. For each element, include it if k < 2 (first two elements are always included) or if it differs from nums[k-2].',
    'Since the array is sorted, duplicates are adjacent. The condition nums[k-2] !== nums[i] ensures at most two of each value.',
    'The key insight: comparing with nums[k-2] (not nums[k-1]) ensures you keep at most two copies — if nums[k-2] equals the current element, the two slots are already used.',
  ],
  functionName: 'removeDuplicates',
  params: ['nums'],
  starterCode: {
    javascript: `function removeDuplicates(nums) {

}`,
    typescript: 'function removeDuplicates(nums: number[]): number {\n\n}',
    python: `def removeDuplicates(nums):
    pass`,
  },
  visibleTests: [
    { args: [[1, 1, 1, 2, 2, 3]], expected: 5 },
    { args: [[0, 0, 1, 1, 1, 1, 2, 3, 3]], expected: 7 },
  ],
  hiddenTests: [
    { args: [[1]], expected: 1 },
    { args: [[1, 1]], expected: 2 },
    { args: [[1, 1, 1]], expected: 2 },
    { args: [[1, 1, 2, 2, 3, 3]], expected: 6 },
    { args: [[1, 1, 1, 2, 2, 2, 3, 3, 3]], expected: 6 },
  ],
};
