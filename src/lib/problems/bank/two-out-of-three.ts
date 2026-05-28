import type { Problem } from '../types';

export const problem: Problem = {
  id: 'two-out-of-three',
  title: 'Two Out of Three',
  difficulty: 'easy',
  tags: ['hash-map', 'arrays'],
  description: `Given three integer arrays \`nums1\`, \`nums2\`, and \`nums3\`, return a **distinct** array containing all the values that are present in **at least two** out of the three arrays. You may return the values in **any order**.`,
  constraints: [
    '`1 <= nums1.length, nums2.length, nums3.length <= 100`',
    '`1 <= nums1[i], nums2[i], nums3[i] <= 100`',
  ],
  examples: [
    {
      input: 'nums1 = [1,1,3,2], nums2 = [2,3], nums3 = [3]',
      output: '[3,2]',
      explanation: '3 appears in all three; 2 appears in nums1 and nums2.',
    },
    {
      input: 'nums1 = [3,1], nums2 = [2,3], nums3 = [1,2]',
      output: '[3,1,2]',
      explanation: 'Each value appears in exactly two arrays.',
    },
    {
      input: 'nums1 = [1,2,2], nums2 = [4,3,3], nums3 = [5]',
      output: '[]',
      explanation: 'No value appears in two or more arrays.',
    },
  ],
  hints: [
    'For each value, count how many of the three arrays contain it (using sets to deduplicate within each array).',
    'Collect values with a count ≥ 2.',
    `\`\`\`js
function twoOutOfThree(nums1, nums2, nums3) {
  const count={};
  for(const arr of [nums1,nums2,nums3])
    for(const n of new Set(arr)) count[n]=(count[n]||0)+1;
  return Object.entries(count).filter(([,v])=>v>=2).map(([k])=>Number(k));
}\`\`\``,
  ],
  functionName: 'twoOutOfThree',
  params: ['nums1', 'nums2', 'nums3'],
  starterCode: {
    javascript: `function twoOutOfThree(nums1, nums2, nums3) {

}`,
    typescript: "function twoOutOfThree(nums1: number[], nums2: number[], nums3: number[]): number[] {\n\n}",

    python: `def twoOutOfThree(nums1, nums2, nums3):
    pass`,
  },
  visibleTests: [
    { args: [[1, 1, 3, 2], [2, 3], [3]], expected: [2, 3] },
    { args: [[3, 1], [2, 3], [1, 2]], expected: [1, 2, 3] },
    { args: [[1, 2, 2], [4, 3, 3], [5]], expected: [] },
  ],
  hiddenTests: [
    { args: [[1], [1], [1]], expected: [1] },
    { args: [[1, 2], [2, 3], [1, 3]], expected: [1, 2, 3] },
    { args: [[1], [2], [3]], expected: [] },
    { args: [[1, 2], [1], [2]], expected: [1, 2] },
  ],
};
