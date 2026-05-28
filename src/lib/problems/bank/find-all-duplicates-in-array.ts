import type { Problem } from '../types';

export const problem: Problem = {
  id: 'find-all-duplicates-in-array',
  title: 'Find All Duplicates in an Array',
  difficulty: 'medium',
  tags: ['arrays', 'hash-map'],
  description: `Given an integer array \`nums\` of length \`n\` where all the integers of \`nums\` are in the range \`[1, n]\` and each integer appears **once** or **twice**, return an array of all the integers that appear **twice**.

You must write an algorithm that runs in \`O(n)\` time and uses only constant extra space.`,
  constraints: [
    'n == nums.length',
    '1 <= n <= 10^5',
    '1 <= nums[i] <= n',
    'Each element in nums appears once or twice',
  ],
  examples: [
    {
      input: 'nums = [4,3,2,7,8,2,3,1]',
      output: '[2,3]',
      explanation: '2 and 3 each appear twice.',
    },
    {
      input: 'nums = [1,1,2]',
      output: '[1]',
      explanation: '1 appears twice.',
    },
    {
      input: 'nums = [1]',
      output: '[]',
      explanation: 'No duplicates.',
    },
  ],
  hints: [
    'Use the array indices as a hash map: negate nums[|nums[i]| - 1] to mark visited.',
    'If the value at index |nums[i]| - 1 is already negative, nums[i] is a duplicate.',
    'Restore the sign at the end (or just collect during the marking pass).',
  ],
  functionName: 'findDuplicates',
  params: ['nums'],
  starterCode: {
    javascript: `function findDuplicates(nums) {

}`,
    python: `def findDuplicates(nums):
    pass`,
  },
  visibleTests: [
    { args: [[4, 3, 2, 7, 8, 2, 3, 1]], expected: [2, 3] },
    { args: [[1, 1, 2]], expected: [1] },
    { args: [[1]], expected: [] },
  ],
  hiddenTests: [
    { args: [[2, 2]], expected: [2] },
    { args: [[1, 2, 3, 4]], expected: [] },
    { args: [[3, 1, 3, 4, 2]], expected: [3] },
    { args: [[1, 2, 3, 1, 2, 3]], expected: [1, 2, 3] },
  ],
};
