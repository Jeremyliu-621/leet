import type { Problem } from '../types';

export const problem: Problem = {
  id: 'find-k-or',
  title: 'Find K-Or of an Array',
  difficulty: 'easy',
  tags: ['arrays', 'bit-manipulation'],
  description: `You are given a **0-indexed** integer array \`nums\` and an integer \`k\`.

The **K-Or** of \`nums\` is a non-negative integer that satisfies the following:

- The \`i\`th bit is set in the K-Or **if and only if** there are at least \`k\` elements of \`nums\` in which bit \`i\` is set.

Return *the **K-Or** of* \`nums\`.`,
  constraints: [
    '`1 <= nums.length <= 50`',
    '`0 <= nums[i] < 2^31`',
    '`1 <= k <= nums.length`',
  ],
  examples: [
    {
      input: 'nums = [7,12,9,8,9,15], k = 4',
      output: '9',
      explanation:
        'Bit 0 is set in 7, 9, 9, 15 (4 elements) → included. Bit 1 is set in 7, 15 (2 elements) → excluded. Bit 2 is set in 7, 12, 15 (3 elements) → excluded. Bit 3 is set in 12, 8, 9, 9, 15 (5 elements) → included. K-Or = 1001 in binary = 9.',
    },
    {
      input: 'nums = [2,12,1,11,4,5], k = 6',
      output: '0',
      explanation:
        'No bit is set in all 6 elements, so K-Or is 0.',
    },
    {
      input: 'nums = [10,8,5,9,11,6,8], k = 1',
      output: '15',
      explanation:
        'When k = 1, K-Or is the bitwise OR of all elements.',
    },
  ],
  hints: [
    'For each bit position 0 through 30, count how many numbers in `nums` have that bit set.',
    'If the count for a bit position is at least `k`, include that bit in your result.',
    `\`\`\`js
function findKOr(nums, k) {
  let result = 0;
  for (let bit = 0; bit < 31; bit++) {
    let count = 0;
    for (const n of nums) if ((n >> bit) & 1) count++;
    if (count >= k) result |= (1 << bit);
  }
  return result;
}
\`\`\``,
  ],
  functionName: 'findKOr',
  params: ['nums', 'k'],
  starterCode: {
    javascript: `function findKOr(nums, k) {

}`,
    typescript: `function findKOr(nums: number[], k: number): number {

}`,
    python: `def findKOr(nums, k):
    pass`,
  },
  visibleTests: [
    { args: [[7, 12, 9, 8, 9, 15], 4], expected: 9 },
    { args: [[2, 12, 1, 11, 4, 5], 6], expected: 0 },
    { args: [[10, 8, 5, 9, 11, 6, 8], 1], expected: 15 },
  ],
  hiddenTests: [
    { args: [[1], 1], expected: 1 },
    { args: [[0], 1], expected: 0 },
    { args: [[3, 3, 3], 2], expected: 3 },
    { args: [[15, 15], 2], expected: 15 },
    { args: [[1, 2, 4, 8], 1], expected: 15 },
    { args: [[1, 2, 4, 8], 2], expected: 0 },
    { args: [[7, 7, 7, 7, 7], 3], expected: 7 },
    { args: [[1073741823, 1073741823], 2], expected: 1073741823 },
    { args: [[5, 5, 5], 4], expected: 0 },
  ],
};
