import type { Problem } from '../types';

export const problem: Problem = {
  id: 'intersection-two-arrays',
  title: 'Intersection of Two Arrays',
  difficulty: 'easy',
  tags: ['hash-map'],
  description: `Given two integer arrays \`nums1\` and \`nums2\`, return an array of their **intersection** — the values that appear in **both** arrays. Each value in the result must be **unique**, and the result can be returned in any order.

For example, the intersection of \`[1,2,2,1]\` and \`[2,2]\` is \`[2]\` (the value 2 is common, but appears only once in the result).`,
  constraints: [
    '1 <= nums1.length, nums2.length <= 1000',
    '0 <= nums1[i], nums2[i] <= 1000',
    'All values are integers.',
  ],
  examples: [
    {
      input: 'nums1 = [1,2,2,1], nums2 = [2,2]',
      output: '[2]',
      explanation: '2 is the only common value.',
    },
    {
      input: 'nums1 = [4,9,5], nums2 = [9,4,9,8,4]',
      output: '[4,9]',
      explanation: '4 and 9 both appear in nums1 and nums2.',
    },
    {
      input: 'nums1 = [1,2,3], nums2 = [4,5,6]',
      output: '[]',
      explanation: 'No common elements.',
    },
  ],
  hints: [
    'Convert one array to a `Set` for O(1) lookup. Then filter the other array for values present in that set.',
    'To avoid duplicates in the result, convert both arrays to sets and compute the set intersection.',
    '`const set1 = new Set(nums1); return [...new Set(nums2)].filter(n => set1.has(n));`',
  ],
  functionName: 'intersectionTwoArrays',
  params: ['nums1', 'nums2'],
  starterCode: {
    javascript: 'function intersectionTwoArrays(nums1, nums2) {\n  // your code here\n}\n',
    python: 'def intersectionTwoArrays(nums1, nums2):\n    # your code here\n    pass\n',
  },
  visibleTests: [
    { args: [[1, 2, 2, 1], [2, 2]], expected: [2] },
    { args: [[4, 9, 5], [9, 4, 9, 8, 4]], expected: [9, 4] },
    { args: [[1, 2, 3], [4, 5, 6]], expected: [] },
  ],
  hiddenTests: [
    { args: [[1], [1]], expected: [1] },
    { args: [[1], [2]], expected: [] },
    { args: [[1, 2, 3], [1, 2, 3]], expected: [1, 2, 3] },
    { args: [[1, 1, 1], [1]], expected: [1] },
    { args: [[0, 0], [0, 0]], expected: [0] },
    { args: [[5, 3, 1], [1, 3]], expected: [1, 3] },
  ],
};
