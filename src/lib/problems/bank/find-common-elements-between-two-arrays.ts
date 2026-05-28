import type { Problem } from '../types';

export const problem: Problem = {
  id: 'find-common-elements-between-two-arrays',
  title: 'Find Common Elements Between Two Arrays',
  difficulty: 'easy',
  tags: ['arrays', 'hash-map'],
  description: `You are given two integer arrays \`nums1\` and \`nums2\` of sizes \`n\` and \`m\`, respectively. Calculate the following values:

- \`answer1\` — the number of indices \`i\` such that \`nums1[i]\` exists in \`nums2\`.
- \`answer2\` — the number of indices \`j\` such that \`nums2[j]\` exists in \`nums1\`.

Return the array \`[answer1, answer2]\`.`,
  constraints: [
    '1 <= nums1.length, nums2.length <= 100',
    '1 <= nums1[i], nums2[j] <= 100',
  ],
  examples: [
    {
      input: 'nums1 = [4,3,2,3,1], nums2 = [2,2,5,2,3,6]',
      output: '[3,4]',
      explanation: 'Elements of nums1 in nums2: indices 1,2,3 (values 3,2,3). Elements of nums2 in nums1: indices 0,1,3,4 (values 2,2,2,3). → [3,4].',
    },
    {
      input: 'nums1 = [3,4,2,3], nums2 = [1,5]',
      output: '[0,0]',
      explanation: 'No element of nums1 is in nums2, and no element of nums2 is in nums1.',
    },
    {
      input: 'nums1 = [1,2,3], nums2 = [3,2,1]',
      output: '[3,3]',
      explanation: 'Every element of each array appears in the other.',
    },
  ],
  hints: [
    'Build a Set from nums2, then count how many elements of nums1 are in that set.',
    'Repeat symmetrically: build a Set from nums1, then count how many elements of nums2 are in it.',
    'Return [count1, count2] where count1 = nums1.filter(x => set2.has(x)).length.',
  ],
  functionName: 'findIntersectionValues',
  params: ['nums1', 'nums2'],
  starterCode: {
    javascript: `function findIntersectionValues(nums1, nums2) {

}`,
    typescript: "function findIntersectionValues(nums1: number[], nums2: number[]): number[] {\n\n}",

    python: `def findIntersectionValues(nums1, nums2):
    pass`,
  },
  visibleTests: [
    { args: [[4, 3, 2, 3, 1], [2, 2, 5, 2, 3, 6]], expected: [3, 4] },
    { args: [[3, 4, 2, 3], [1, 5]], expected: [0, 0] },
    { args: [[1, 2, 3], [3, 2, 1]], expected: [3, 3] },
  ],
  hiddenTests: [
    { args: [[1], [1]], expected: [1, 1] },
    { args: [[1], [2]], expected: [0, 0] },
    { args: [[2, 1, 2], [1]], expected: [1, 1] },
    { args: [[1, 2, 3, 4, 5], [5, 4, 3, 2, 1]], expected: [5, 5] },
    { args: [[1, 1, 1], [1, 1]], expected: [3, 2] },
  ],
};
