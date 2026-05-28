import type { Problem } from '../types';

export const problem: Problem = {
  id: 'find-the-number-of-good-pairs-i',
  title: 'Find the Number of Good Pairs I',
  difficulty: 'easy',
  tags: ['arrays', 'math'],
  description: `You are given two **1-indexed** integer arrays, \`nums1\` and \`nums2\`, and a positive integer \`k\`.

A pair \`(i, j)\` is called **good** if \`nums1[i]\` is divisible by \`nums2[j] * k\` (i.e., \`nums1[i] % (nums2[j] * k) == 0\`).

Return the total number of **good** pairs.`,
  constraints: [
    '`1 <= nums1.length <= 100`',
    '`1 <= nums2.length <= 100`',
    '`1 <= nums1[i], nums2[j] <= 100`',
    '`1 <= k <= 100`',
  ],
  examples: [
    {
      input: 'nums1 = [1,3,4], nums2 = [1,3,4], k = 1',
      output: '5',
      explanation: 'The 5 good pairs are (0,0), (1,0), (1,1), (2,0), (2,2) (0-indexed).',
    },
    {
      input: 'nums1 = [1,2,4,12], nums2 = [2,4], k = 3',
      output: '2',
      explanation: 'Good pairs: (2,0): 4%(2*3)=4%6≠0; (3,0): 12%(2*3)=12%6=0 ✓; (3,1): 12%(4*3)=12%12=0 ✓.',
    },
  ],
  hints: [
    'With constraints of 100×100 = 10,000 pairs, a brute-force nested loop is efficient enough.',
    'For each pair (i, j), check if `nums1[i] % (nums2[j] * k) === 0`.',
    `\`\`\`js
function numberOfPairs(nums1, nums2, k) {
  let count = 0;
  for (const a of nums1) {
    for (const b of nums2) {
      if (a % (b * k) === 0) count++;
    }
  }
  return count;
}\`\`\``,
  ],
  functionName: 'numberOfPairs',
  params: ['nums1', 'nums2', 'k'],
  starterCode: {
    javascript: `function numberOfPairs(nums1, nums2, k) {

}`,
    typescript: 'function numberOfPairs(nums1: number[], nums2: number[], k: number): number {\n\n}',
    python: `def numberOfPairs(nums1, nums2, k):
    pass`,
  },
  visibleTests: [
    { args: [[1, 3, 4], [1, 3, 4], 1], expected: 5 },
    { args: [[1, 2, 4, 12], [2, 4], 3], expected: 2 },
    { args: [[6], [2], 3], expected: 1 },
  ],
  hiddenTests: [
    { args: [[6, 12], [2, 3], 1], expected: 4 },
    { args: [[1, 1, 1], [1], 1], expected: 3 },
    { args: [[12, 6, 3], [2, 1], 2], expected: 3 },
    { args: [[100], [5, 10, 20], 2], expected: 2 },
    { args: [[8, 4, 12, 16], [2, 4], 2], expected: 6 },
  ],
};
