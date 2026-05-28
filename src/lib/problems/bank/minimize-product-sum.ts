import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimize-product-sum',
  title: 'Minimize Product Sum of Two Arrays',
  difficulty: 'medium',
  tags: ['arrays', 'math'],
  description: `The **product sum** of two arrays is the sum of products of their corresponding elements. Given two arrays \`nums1\` and \`nums2\` of the same length, return the **minimum product sum** if you are allowed to rearrange the order of the elements in \`nums1\`.`,
  constraints: [
    '`1 <= nums1.length, nums2.length <= 10^5`',
    '`nums1.length == nums2.length`',
    '`0 <= nums1[i], nums2[i] <= 100`',
  ],
  examples: [
    {
      input: 'nums1 = [5,3,4,2], nums2 = [4,2,2,5]',
      output: '40',
      explanation: 'Rearrange nums1 to [2,3,4,5]. Product sum = 2×5 + 3×4 + 4×2 + 5×2 = 40.',
    },
    {
      input: 'nums1 = [2,1,4,5,7], nums2 = [3,2,4,8,6]',
      output: '65',
      explanation: 'Rearrange nums1 to [1,2,4,5,7]. Product sum = 1×8 + 2×6 + 4×4 + 5×3 + 7×2 = 65.',
    },
  ],
  hints: [
    'To minimize the sum of products, pair the largest element of one array with the smallest of the other (opposite-order sorting).',
    'Sort nums1 in ascending order and nums2 in descending order (or vice versa). The minimum product sum is achieved by pairing the largest with the smallest.',
    'This follows from the rearrangement inequality: sum(a[i]*b[i]) is minimized when one sequence is sorted ascending and the other descending.',
  ],
  functionName: 'minProductSum',
  params: ['nums1', 'nums2'],
  starterCode: {
    javascript: `function minProductSum(nums1, nums2) {

}`,
    python: `def minProductSum(nums1, nums2):
    pass`,
  },
  visibleTests: [
    { args: [[5,3,4,2], [4,2,2,5]], expected: 40 },
    { args: [[2,1,4,5,7], [3,2,4,8,6]], expected: 65 },
  ],
  hiddenTests: [
    { args: [[1,1,1], [1,1,1]], expected: 3 },
    { args: [[3,1,2], [2,3,1]], expected: 10 },
    { args: [[1,2,3,4,5], [5,4,3,2,1]], expected: 35 },
    { args: [[10,5], [3,7]], expected: 65 },
  ],
};
