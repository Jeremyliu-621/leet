import type { Problem } from '../types';

export const problem: Problem = {
  id: 'find-the-difference-of-two-arrays',
  title: 'Find the Difference of Two Arrays',
  difficulty: 'easy',
  tags: ['arrays', 'hash-map'],
  description: `Given two **0-indexed** integer arrays \`nums1\` and \`nums2\`, return a list \`answer\` of size \`2\` where:

- \`answer[0]\` is a list of all **distinct** integers in \`nums1\` which are **not** present in \`nums2\`.
- \`answer[1]\` is a list of all **distinct** integers in \`nums2\` which are **not** present in \`nums1\`.

Note that the integers in the lists may be returned in **any** order.`,
  constraints: [
    '1 <= nums1.length, nums2.length <= 1000',
    '-1000 <= nums1[i], nums2[i] <= 1000',
  ],
  examples: [
    {
      input: 'nums1 = [1,2,3], nums2 = [2,4,6]',
      output: '[[1,3],[4,6]]',
      explanation: '1 and 3 are in nums1 but not nums2. 4 and 6 are in nums2 but not nums1.',
    },
    {
      input: 'nums1 = [1,2,3,3], nums2 = [1,1,2,2]',
      output: '[[3],[]]',
      explanation: '3 is in nums1 but not nums2. nums2 has no elements not in nums1.',
    },
  ],
  hints: [
    'Use two Sets. Compute the set difference in both directions.',
    'Return sorted lists for consistency.',
    `\`\`\`js
function findDifference(nums1, nums2) {
  const s1 = new Set(nums1), s2 = new Set(nums2);
  return [[...s1].filter(v=>!s2.has(v)), [...s2].filter(v=>!s1.has(v))];
}\`\`\``,
  ],
  functionName: 'findDifference',
  params: ['nums1', 'nums2'],
  starterCode: {
    javascript: `function findDifference(nums1, nums2) {

}`,
    typescript: "function findDifference(nums1: number[], nums2: number[]): number[][] {\n\n}",

    python: `def findDifference(nums1, nums2):
    pass`,
  },
  visibleTests: [
    { args: [[1, 2, 3], [2, 4, 6]], expected: [[1, 3], [4, 6]] },
    { args: [[1, 2, 3, 3], [1, 1, 2, 2]], expected: [[3], []] },
  ],
  hiddenTests: [
    { args: [[], [1]], expected: [[], [1]] },
    { args: [[1], [1]], expected: [[], []] },
    { args: [[1, 2], [2, 3]], expected: [[1], [3]] },
    { args: [[1, 1, 1], [2, 2, 2]], expected: [[1], [2]] },
  ],
};
