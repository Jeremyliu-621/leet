import type { Problem } from '../types';

export const problem: Problem = {
  id: 'find-the-number-of-good-pairs-ii',
  title: 'Find the Number of Good Pairs II',
  difficulty: 'medium',
  tags: ['arrays', 'hash-map'],
  description: `You are given two **1-indexed** integer arrays, \`nums1\` and \`nums2\`, and a positive integer \`k\`.

A pair \`(i, j)\` is called **good** if \`nums1[i]\` is divisible by \`nums2[j] * k\` (i.e., \`nums1[i] % (nums2[j] * k) == 0\`).

Return the total number of **good** pairs.

**Note:** Unlike Part I (where constraints are \`n, m ≤ 100\`), here \`n, m ≤ 10^5\` and values up to \`10^6\`, so a brute force O(n*m) may be too slow. Use a frequency map and divisor enumeration.`,
  constraints: [
    '`1 <= nums1.length, nums2.length <= 10^5`',
    '`1 <= nums1[i], nums2[j] <= 10^6`',
    '`1 <= k <= 10^3`',
  ],
  examples: [
    {
      input: 'nums1 = [1,3,4], nums2 = [1,3,4], k = 1',
      output: '5',
      explanation: 'Same as Part I — the 5 good pairs are (0,0), (1,0), (1,1), (2,0), (2,2).',
    },
    {
      input: 'nums1 = [1,2,4,12], nums2 = [2,4], k = 3',
      output: '2',
      explanation: 'Pairs (3,0) with 12%(2*3)=0 and (3,1) with 12%(4*3)=0.',
    },
  ],
  hints: [
    'Build a frequency map of `nums1`. For each `nums2[j]`, compute `target = nums2[j] * k`.',
    'Count multiples of `target` in `nums1` by iterating multiples: `target, 2*target, 3*target, ...` up to max(nums1).',
    `\`\`\`js
function numberOfPairs(nums1, nums2, k) {
  const freq = new Map();
  for (const a of nums1) freq.set(a, (freq.get(a) ?? 0) + 1);
  let count = 0;
  for (const b of nums2) {
    const target = b * k;
    for (let mul = target; mul <= 1000000; mul += target) {
      count += freq.get(mul) ?? 0;
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
