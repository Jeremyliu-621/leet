import type { Problem } from '../types';

export const problem: Problem = {
  id: 'intersection-of-two-arrays-ii',
  title: 'Intersection of Two Arrays II',
  difficulty: 'easy',
  tags: ['arrays', 'hash-map'],
  description: `Given two integer arrays \`nums1\` and \`nums2\`, return an array of their intersection. Each element in the result must appear as many times as it shows in both arrays. You may return the result in **any order**.`,
  constraints: [
    '1 <= nums1.length, nums2.length <= 1000',
    '0 <= nums1[i], nums2[i] <= 1000',
  ],
  examples: [
    {
      input: 'nums1 = [1,2,2,1], nums2 = [2,2]',
      output: '[2,2]',
      explanation: '2 appears twice in both arrays, so it appears twice in the result.',
    },
    {
      input: 'nums1 = [4,9,5], nums2 = [9,4,9,8,4]',
      output: '[4,9]',
      explanation: '4 and 9 each appear at least once in both arrays.',
    },
  ],
  hints: [
    'Count the frequency of each element in both arrays using a hash map.',
    'For each element, the number of times it appears in the result is min(count in nums1, count in nums2).',
    'Iterate through the frequency map and push each element the appropriate number of times.',
  ],
  functionName: 'intersect',
  params: ['nums1', 'nums2'],
  starterCode: {
    javascript: `function intersect(nums1, nums2) {\n\n}`,
    typescript: "function intersect(nums1: number[], nums2: number[]): number[] {\n\n}",

    python: `def intersect(nums1, nums2):\n    pass`,
  },
  visibleTests: [
    { args: [[1, 2, 2, 1], [2, 2]], expected: [2, 2] },
    { args: [[4, 9, 5], [9, 4, 9, 8, 4]], expected: [4, 9] },
  ],
  hiddenTests: [
    { args: [[1], [1]], expected: [1] },
    { args: [[1, 2, 3], [4, 5, 6]], expected: [] },
    { args: [[1, 1, 1], [1]], expected: [1] },
    { args: [[2, 2, 3, 3], [2, 3, 3, 3]], expected: [2, 3, 3] },
  ],
};
