import type { Problem } from '../types';

export const problem: Problem = {
  id: 'find-the-integer-added-to-array-i',
  title: 'Find the Integer Added to Array I',
  difficulty: 'easy',
  tags: ['arrays', 'math'],
  description: `You are given two arrays of integers \`nums1\` and \`nums2\`.

You are told that \`nums2\` was obtained by adding an integer \`x\` to **every** element of \`nums1\`. That is, \`nums2[i] = nums1[i] + x\` for some fixed integer \`x\` and all valid \`i\`.

Return the integer \`x\`.`,
  constraints: [
    '`1 <= nums1.length == nums2.length <= 100`',
    '`0 <= nums1[i], nums2[i] <= 1000`',
    'The test cases are generated such that there exists a valid answer.',
  ],
  examples: [
    {
      input: 'nums1 = [2,3], nums2 = [0,1]',
      output: '-2',
      explanation: 'x = 0 - 2 = -2. Check: 3 + (-2) = 1. Correct.',
    },
    {
      input: 'nums1 = [5], nums2 = [10]',
      output: '5',
      explanation: 'x = 10 - 5 = 5.',
    },
    {
      input: 'nums1 = [1,2,3], nums2 = [4,5,6]',
      output: '3',
      explanation: 'x = 4 - 1 = 5 - 2 = 6 - 3 = 3.',
    },
  ],
  hints: [
    'Since every element of nums1 is shifted by the same x, pick any index and compute nums2[i] - nums1[i].',
    'Equivalently, x = min(nums2) - min(nums1), since the minimum of nums2 equals the minimum of nums1 shifted by x.',
    'Return nums2[0] - nums1[0] (or use the min approach for clarity).',
  ],
  functionName: 'addedInteger',
  params: ['nums1', 'nums2'],
  starterCode: {
    javascript: `function addedInteger(nums1, nums2) {

}`,
    typescript: 'function addedInteger(nums1: number[], nums2: number[]): number {\n\n}',
    python: `def addedInteger(nums1, nums2):
    pass`,
  },
  visibleTests: [
    { args: [[2, 3], [0, 1]], expected: -2 },
    { args: [[5], [10]], expected: 5 },
    { args: [[1, 2, 3], [4, 5, 6]], expected: 3 },
  ],
  hiddenTests: [
    { args: [[3, 1, 2], [6, 4, 5]], expected: 3 },
    { args: [[10, 20, 30], [15, 25, 35]], expected: 5 },
    { args: [[100], [100]], expected: 0 },
    { args: [[1, 3, 5, 7], [3, 5, 7, 9]], expected: 2 },
    { args: [[0, 0, 0], [7, 7, 7]], expected: 7 },
    { args: [[50, 30, 10], [45, 25, 5]], expected: -5 },
  ],
};
