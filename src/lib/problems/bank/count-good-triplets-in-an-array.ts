import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-good-triplets-in-an-array',
  title: 'Count Good Triplets in an Array',
  difficulty: 'hard',
  tags: ['arrays', 'binary-indexed-tree'],
  description: `You are given two **0-indexed** arrays \`nums1\` and \`nums2\` of length \`n\`, both of which are **permutations** of \`[0, 1, ..., n - 1]\`.

A **good triplet** is a set of **3** distinct values which are present in **increasing order** by position in both \`nums1\` and \`nums2\`. In other words, if we consider their positions in \`nums1\` as \`pos1v\`, \`pos1u\`, \`pos1w\` and in \`nums2\` as \`pos2v\`, \`pos2u\`, \`pos2w\`, then a good triplet satisfies:

- \`pos1v < pos1u < pos1w\` and \`pos2v < pos2u < pos2w\`.

Return *the **total number** of good triplets*.`,
  constraints: [
    'n == nums1.length == nums2.length',
    '3 <= n <= 10^5',
    '0 <= nums1[i], nums2[i] <= n - 1',
    'nums1 and nums2 are permutations of [0, 1, ..., n - 1].',
  ],
  examples: [
    {
      input: 'nums1 = [2,0,1,3], nums2 = [0,1,2,3]',
      output: '1',
      explanation: 'The only good triplet is (0,1,3): pos1=[1,2,3] and pos2=[0,1,3], both increasing.',
    },
    {
      input: 'nums1 = [4,0,1,3,2], nums2 = [4,1,0,2,3]',
      output: '4',
      explanation: 'Good triplets: (4,1,3),(4,1,2),(4,0,3),(4,0,2). All have increasing positions in both arrays.',
    },
  ],
  hints: [
    'Map each value to its position in nums2. This creates a new array pos where pos[i] = position of nums1[i] in nums2.',
    'Now count the number of increasing triplets in the array pos (i.e., count (i,j,k) with i<j<k and pos[i]<pos[j]<pos[k]).',
    'For each middle element j, count the elements to its left with pos < pos[j] (call it leftSmaller[j]) and elements to its right with pos > pos[j] (call it rightLarger[j]). Answer = sum of leftSmaller[j] * rightLarger[j].',
    'Use a Binary Indexed Tree (Fenwick Tree) to compute prefix sums efficiently.',
  ],
  functionName: 'goodTriplets',
  params: ['nums1', 'nums2'],
  starterCode: {
    javascript: `function goodTriplets(nums1, nums2) {

}`,
    python: `def goodTriplets(nums1, nums2):
    pass`,
  },
  visibleTests: [
    { args: [[2, 0, 1, 3], [0, 1, 2, 3]], expected: 1 },
    { args: [[4, 0, 1, 3, 2], [4, 1, 0, 2, 3]], expected: 4 },
  ],
  hiddenTests: [
    { args: [[0, 1, 2], [0, 1, 2]], expected: 1 },
    { args: [[0, 1, 2], [2, 1, 0]], expected: 0 },
    { args: [[0, 1, 2, 3], [0, 1, 2, 3]], expected: 4 },
    { args: [[0, 1, 2, 3], [3, 2, 1, 0]], expected: 0 },
    { args: [[1, 0, 2, 3], [0, 1, 2, 3]], expected: 2 },
  ],
};
