import type { Problem } from '../types';

export const problem: Problem = {
  id: 'concatenate-two-arrays',
  title: 'Concatenate Two Arrays',
  difficulty: 'easy',
  tags: ['arrays'],
  description: `Given two integer arrays \`nums1\` and \`nums2\`, return a **new array** formed by appending all elements of \`nums2\` to the end of \`nums1\`.`,
  constraints: [
    '1 <= nums1.length, nums2.length <= 10^3',
    '-10^3 <= nums1[i], nums2[i] <= 10^3',
  ],
  examples: [
    {
      input: 'nums1 = [1,2,3], nums2 = [4,5,6]',
      output: '[1,2,3,4,5,6]',
      explanation: 'Append nums2 after nums1.',
    },
    {
      input: 'nums1 = [10], nums2 = [20,30]',
      output: '[10,20,30]',
      explanation: 'Single-element first array followed by the second array.',
    },
    {
      input: 'nums1 = [5,3], nums2 = [1]',
      output: '[5,3,1]',
      explanation: 'Two-element first array followed by one-element second array.',
    },
  ],
  hints: [
    'In JavaScript, nums1.concat(nums2) or [...nums1, ...nums2] both work.',
    'In Python, nums1 + nums2 concatenates lists.',
    'Do not modify the original arrays — return a new combined array.',
  ],
  functionName: 'concatenateTwoArrays',
  params: ['nums1', 'nums2'],
  starterCode: {
    javascript: `function concatenateTwoArrays(nums1, nums2) {

}`,
    typescript: `function concatenateTwoArrays(nums1: number[], nums2: number[]): number[] {

}`,
    python: `def concatenateTwoArrays(nums1: list[int], nums2: list[int]) -> list[int]:
    pass`,
  },
  visibleTests: [
    { args: [[1, 2, 3], [4, 5, 6]], expected: [1, 2, 3, 4, 5, 6] },
    { args: [[10], [20, 30]], expected: [10, 20, 30] },
    { args: [[5, 3], [1]], expected: [5, 3, 1] },
  ],
  hiddenTests: [
    { args: [[1], [1]], expected: [1, 1] },
    { args: [[-1, -2], [1, 2]], expected: [-1, -2, 1, 2] },
    { args: [[0], [0]], expected: [0, 0] },
    { args: [[1, 2, 3, 4, 5], [6, 7, 8, 9, 10]], expected: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] },
    { args: [[100], [200]], expected: [100, 200] },
    { args: [[3, 1, 4], [1, 5, 9]], expected: [3, 1, 4, 1, 5, 9] },
    { args: [[7, 8, 9], [1, 2]], expected: [7, 8, 9, 1, 2] },
    { args: [[5], [4, 3, 2, 1]], expected: [5, 4, 3, 2, 1] },
  ],
};
