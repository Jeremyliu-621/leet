import type { Problem } from '../types';

export const problem: Problem = {
  id: 'maximum-sum-after-xor-operations',
  title: 'Maximum Sum After XOR Operations',
  difficulty: 'medium',
  tags: ['arrays', 'bit-manipulation', 'math'],
  description: `You are given an integer array \`nums\` and a non-negative integer \`k\`.

In one **operation**, you choose exactly **two distinct** elements of \`nums\` and XOR both of them with \`k\` (i.e., replace each chosen element \`x\` with \`x ^ k\`). You may perform any number of operations.

Return the **maximum possible sum** of \`nums\` after any number of operations.`,
  constraints: [
    '1 <= nums.length <= 10^5',
    '0 <= nums[i] <= 10^9',
    '0 <= k <= 10^9',
  ],
  examples: [
    {
      input: 'nums = [1,2,1], k = 3',
      output: '6',
      explanation: 'XOR elements at indices 0 and 2 with k=3: [2,2,2]. Sum = 6.',
    },
    {
      input: 'nums = [2,3], k = 7',
      output: '9',
      explanation: 'XOR both elements: [5,4]. Sum = 9.',
    },
    {
      input: 'nums = [3,4], k = 5',
      output: '7',
      explanation: 'XOR both: [6,1]. Sum = 7, same as original. No improvement possible.',
    },
  ],
  hints: [
    'Each operation XORs exactly two elements with k. After any sequence of operations, each element ends up XOR\'d either 0 or 1 times (repetitions cancel). The constraint is that the total number of XOR\'d elements must be even.',
    'For each element compute its "gain": `gain = (nums[i] ^ k) − nums[i]`. Sort gains in descending order. You want to pick an even-sized subset to maximize total gain.',
    'Greedily consume pairs from the sorted gains list. Take a pair only if its combined gain is positive. Stop as soon as a pair would be non-positive. Return `sum(nums) + total_gain`.',
  ],
  functionName: 'maxXorSum',
  params: ['nums', 'k'],
  starterCode: {
    javascript: `function maxXorSum(nums, k) {

}`,
    typescript: `function maxXorSum(nums: number[], k: number): number {

}`,
    python: `def maxXorSum(nums, k):
    pass`,
  },
  visibleTests: [
    { args: [[1, 2, 1], 3], expected: 6 },
    { args: [[2, 3], 7], expected: 9 },
    { args: [[3, 4], 5], expected: 7 },
  ],
  hiddenTests: [
    { args: [[1, 5, 4], 3], expected: 14 },
    { args: [[5, 1, 2], 6], expected: 16 },
    { args: [[1, 1, 1], 0], expected: 3 },
    { args: [[4, 4, 4], 4], expected: 12 },
    { args: [[10], 5], expected: 10 },
    { args: [[1, 2, 3, 4], 7], expected: 18 },
    { args: [[7, 8], 15], expected: 15 },
    { args: [[0, 0], 1], expected: 2 },
  ],
};
