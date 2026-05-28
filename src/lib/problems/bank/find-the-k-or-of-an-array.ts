import type { Problem } from '../types';

export const problem: Problem = {
  id: 'find-the-k-or-of-an-array',
  title: 'Find the K-or of an Array',
  difficulty: 'easy',
  tags: ['arrays', 'math'],
  description: `You are given a **0-indexed** integer array \`nums\` and a positive integer \`k\`.

The **K-or** of \`nums\` is a non-negative integer that satisfies the following:
- The \`i\`-th bit is set in the K-or **if and only if** there are at least \`k\` elements of \`nums\` whose \`i\`-th bit is set.

Return the **K-or** of \`nums\`.`,
  constraints: [
    '1 <= nums.length <= 50',
    '0 <= nums[i] < 2^31',
    '1 <= k <= nums.length',
  ],
  examples: [
    {
      input: 'nums = [7,12,9,8,9,15], k = 4',
      output: '9',
      explanation: 'Bit 0: set in 7,9,9,15 — 4 elements ≥ k. Bit 3: set in 12,8,9,9,15 — 5 elements ≥ k. No other bits meet the threshold. Result = 1001₂ = 9.',
    },
    {
      input: 'nums = [2,12,1,11,4,5], k = 6',
      output: '0',
      explanation: 'No bit position has all 6 elements with that bit set, so the result is 0.',
    },
    {
      input: 'nums = [10,8,5,9,11,6,8], k = 1',
      output: '15',
      explanation: 'k = 1 means any bit set in at least one element counts. The K-or equals the bitwise OR of all elements = 15.',
    },
  ],
  hints: [
    'For each bit position 0 through 30, count how many elements have that bit set.',
    'If the count is at least k, set that bit in the result.',
    '`let result = 0; for (let bit = 0; bit < 31; bit++) { let count = 0; for (const n of nums) if (n & (1 << bit)) count++; if (count >= k) result |= 1 << bit; } return result;`',
  ],
  functionName: 'findKOr',
  params: ['nums', 'k'],
  starterCode: {
    javascript: `function findKOr(nums, k) {
  // your code here
}`,
    python: `def findKOr(nums, k):
    # your code here
    pass`,
  },
  visibleTests: [
    { args: [[7, 12, 9, 8, 9, 15], 4], expected: 9 },
    { args: [[2, 12, 1, 11, 4, 5], 6], expected: 0 },
    { args: [[10, 8, 5, 9, 11, 6, 8], 1], expected: 15 },
  ],
  hiddenTests: [
    { args: [[1, 1, 1], 2], expected: 1 },
    { args: [[0], 1], expected: 0 },
    { args: [[5, 5, 5, 5], 4], expected: 5 },
    { args: [[0, 1, 2, 3, 4], 3], expected: 0 },
  ],
};
