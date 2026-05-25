import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-common-value',
  title: 'Minimum Common Value',
  difficulty: 'easy',
  tags: ['arrays', 'two-pointers', 'binary-search'],
  description: `Given two integer arrays \`nums1\` and \`nums2\`, sorted in **non-decreasing order**, return the **minimum integer common to both arrays**. If there is no common integer amongst \`nums1\` and \`nums2\`, return \`-1\`.

Note that an integer is said to be **common** to \`nums1\` and \`nums2\` if both arrays have **at least one** occurrence of that integer.`,
  constraints: [
    '1 <= nums1.length, nums2.length <= 10^5',
    '1 <= nums1[i], nums2[j] <= 10^9',
    'Both nums1 and nums2 are sorted in non-decreasing order.',
  ],
  examples: [
    {
      input: 'nums1 = [1,2,3,6], nums2 = [2,3,4,5]',
      output: '2',
      explanation: '2 and 3 are common. Minimum is 2.',
    },
    {
      input: 'nums1 = [1,2,3], nums2 = [2,4]',
      output: '2',
      explanation: '2 is the only common element.',
    },
    {
      input: 'nums1 = [1,2,3,6], nums2 = [4,5]',
      output: '-1',
      explanation: 'No common elements.',
    },
  ],
  hints: [
    'Use two pointers, one for each array. Start both at index 0.',
    'If the values at both pointers are equal, return that value (it is the minimum common).',
    'Otherwise, advance the pointer pointing to the smaller value.',
  ],
  functionName: 'getCommon',
  params: ['nums1', 'nums2'],
  starterCode: {
    javascript: 'function getCommon(nums1, nums2) {\n  \n}\n',
    python: 'def getCommon(nums1, nums2):\n    pass\n',
  },
  visibleTests: [
    { args: [[1, 2, 3, 6], [2, 3, 4, 5]], expected: 2 },
    { args: [[1, 2, 3], [2, 4]], expected: 2 },
    { args: [[1, 2, 3, 6], [4, 5]], expected: -1 },
  ],
  hiddenTests: [
    { args: [[1], [1]], expected: 1 },
    { args: [[1, 2], [3, 4]], expected: -1 },
    { args: [[1, 1, 2, 3], [1, 3, 5]], expected: 1 },
    { args: [[5, 10, 15], [5, 10]], expected: 5 },
    { args: [[1000000000], [1000000000]], expected: 1000000000 },
  ],
};
