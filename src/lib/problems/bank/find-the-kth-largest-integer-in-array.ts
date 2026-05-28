import type { Problem } from '../types';

export const problem: Problem = {
  id: 'find-the-kth-largest-integer-in-array',
  title: 'Find the Kth Largest Integer in the Array',
  difficulty: 'medium',
  tags: ['arrays', 'strings', 'binary-search'],
  description: `You are given an array of strings \`nums\` and an integer \`k\`. Each string in \`nums\` represents a large integer.

Return the string that represents the **k-th largest** integer in \`nums\`.

Two integers are compared by their **numeric value**. Two strings of different lengths can be compared by length alone (longer = numerically larger). Two strings of the same length are compared lexicographically.`,
  constraints: [
    '1 <= k <= nums.length <= 10^4',
    '1 <= nums[i].length <= 100',
    'nums[i] consists of only digits',
    'nums[i] will not have leading zeros',
  ],
  examples: [
    {
      input: 'nums = ["3","6","7","10"], k = 4',
      output: '"3"',
      explanation: 'Sorted descending: 10 > 7 > 6 > 3. The 4th largest is "3".',
    },
    {
      input: 'nums = ["2","21","12","1"], k = 3',
      output: '"2"',
      explanation: 'Sorted descending: 21 > 12 > 2 > 1. The 3rd largest is "2".',
    },
    {
      input: 'nums = ["0","0"], k = 2',
      output: '"0"',
      explanation: 'Both are equal; the 2nd largest is "0".',
    },
  ],
  hints: [
    'You cannot compare the strings directly with `<` or `>` because of variable length. A longer string always represents a larger number.',
    'For strings of the same length, standard lexicographic comparison gives the correct numeric order.',
    'Sort the array in descending order using a custom comparator, then return the element at index k−1.',
  ],
  functionName: 'kthLargestNumber',
  params: ['nums', 'k'],
  starterCode: {
    javascript: 'function kthLargestNumber(nums, k) {\n  \n}\n',
    python: 'def kthLargestNumber(nums, k):\n    pass\n',
  },
  visibleTests: [
    { args: [['3', '6', '7', '10'], 4], expected: '3' },
    { args: [['2', '21', '12', '1'], 3], expected: '2' },
    { args: [['0', '0'], 2], expected: '0' },
  ],
  hiddenTests: [
    { args: [['100', '25', '1000'], 2], expected: '100' },
    { args: [['5', '99', '100', '1000'], 1], expected: '1000' },
    { args: [['1', '2', '3', '4', '5'], 3], expected: '3' },
    { args: [['999', '1000'], 1], expected: '1000' },
  ],
};
