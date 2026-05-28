import type { Problem } from '../types';

export const problem: Problem = {
  id: 'intersection-of-two-arrays',
  title: 'Intersection of Two Arrays',
  difficulty: 'easy',
  tags: ['hash-map'],
  description: `Given two integer arrays \`nums1\` and \`nums2\`, return an array of their **intersection**. Each element in the result must be **unique** and you may return the result in **any order**.`,
  constraints: [
    '1 <= nums1.length, nums2.length <= 1000',
    '0 <= nums1[i], nums2[i] <= 1000',
  ],
  examples: [
    {
      input: 'nums1 = [1,2,2,1], nums2 = [2,2]',
      output: '[2]',
    },
    {
      input: 'nums1 = [4,9,5], nums2 = [9,4,9,8,4]',
      output: '[4,9]',
      explanation: '[9,4] is also accepted.',
    },
  ],
  hints: [
    'Use a Set for `nums1`. Then check which elements of `nums2` are in the set.',
    'Add matching elements to a result Set to deduplicate, then convert to a sorted array.',
    `\`\`\`js
function intersection(nums1, nums2) {
  const s = new Set(nums2);
  return [...new Set(nums1.filter(v => s.has(v)))];
}\`\`\``,
  ],
  functionName: 'intersection',
  params: ['nums1', 'nums2'],
  starterCode: {
    javascript: 'function intersection(nums1, nums2) {\n  \n}\n',
    typescript: "function intersection(nums1: number[], nums2: number[]): number[] {\n  \n}",

    python: 'def intersection(nums1, nums2):\n    pass\n',
  },
  visibleTests: [
    { args: [[1, 2, 2, 1], [2, 2]], expected: [2] },
    { args: [[4, 9, 5], [9, 4, 9, 8, 4]], expected: [4, 9] },
    { args: [[1], [1]], expected: [1] },
  ],
  hiddenTests: [
    { args: [[1, 2, 3], [4, 5, 6]], expected: [] },
    { args: [[1, 2], [1, 2, 3]], expected: [1, 2] },
    { args: [[7, 7, 7], [7, 7]], expected: [7] },
    { args: [[1, 2, 3, 4, 5], [3, 5, 7]], expected: [3, 5] },
  ],
};
