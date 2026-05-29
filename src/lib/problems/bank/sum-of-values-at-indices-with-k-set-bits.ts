import type { Problem } from '../types';

export const problem: Problem = {
  id: 'sum-of-values-at-indices-with-k-set-bits',
  title: 'Sum of Values at Indices With K Set Bits',
  difficulty: 'easy',
  tags: ['arrays', 'bit-manipulation'],
  description: `You are given a **0-indexed** integer array \`nums\` and an integer \`k\`.

Return the **sum** of elements \`nums[i]\` such that \`i\` has exactly \`k\` set bits in its binary representation.`,
  constraints: [
    '`1 <= nums.length <= 1000`',
    '`1 <= nums[i] <= 1000`',
    '`0 <= k <= 10`',
  ],
  examples: [
    {
      input: 'nums = [5,10,1,5,2], k = 1',
      output: '13',
      explanation:
        'Indices with exactly 1 set bit: 1 (binary 01), 2 (binary 10), 4 (binary 100). nums[1] + nums[2] + nums[4] = 10 + 1 + 2 = 13.',
    },
    {
      input: 'nums = [4,3,2,1], k = 2',
      output: '1',
      explanation: 'Index 3 (binary 11) has exactly 2 set bits. nums[3] = 1.',
    },
  ],
  hints: [
    'For each index i, count the number of set bits (1s) in its binary representation using bit operations.',
    'A common way to count set bits: repeatedly check the lowest bit with `i & 1` and shift right with `i >> 1`.',
    `\`\`\`js
function sumIndicesWithKSetBits(nums, k) {
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    let bits = 0, n = i;
    while (n > 0) { bits += n & 1; n >>= 1; }
    if (bits === k) sum += nums[i];
  }
  return sum;
}
\`\`\``,
  ],
  functionName: 'sumIndicesWithKSetBits',
  params: ['nums', 'k'],
  starterCode: {
    javascript: `function sumIndicesWithKSetBits(nums, k) {

}`,
    typescript: `function sumIndicesWithKSetBits(nums: number[], k: number): number {

}`,
    python: `def sumIndicesWithKSetBits(nums, k):
    pass`,
  },
  visibleTests: [
    { args: [[5, 10, 1, 5, 2], 1], expected: 13 },
    { args: [[4, 3, 2, 1], 2], expected: 1 },
  ],
  hiddenTests: [
    { args: [[1], 0], expected: 1 },
    { args: [[1, 2, 3], 0], expected: 1 },
    { args: [[1, 2, 3, 4, 5, 6, 7, 8], 3], expected: 8 },
    { args: [[10, 10, 10, 10], 1], expected: 20 },
    { args: [[5, 5, 5, 5, 5], 0], expected: 5 },
    { args: [[1, 1, 1, 1, 1, 1, 1, 1], 2], expected: 3 },
    { args: [[100, 200, 300], 10], expected: 0 },
  ],
};
