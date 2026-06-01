import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-number-of-operations-to-make-array-xor-equal-to-k',
  title: 'Minimum Number of Operations to Make Array XOR Equal to K',
  difficulty: 'medium',
  tags: ['bit-manipulation', 'arrays', 'math'],
  description: `You are given a **0-indexed** integer array \`nums\` and a positive integer \`k\`.

In one operation you may choose **any** element of \`nums\` and **flip one of its bits** (change a 0-bit to 1 or vice versa).

Return the **minimum number of operations** required to make the bitwise XOR of all elements of \`nums\` equal to \`k\`.

**Observation:** Each flip changes exactly one bit in exactly one element, which flips that bit in the overall XOR. So the answer equals the number of bit positions where the current XOR of \`nums\` differs from \`k\`.`,
  constraints: [
    '1 <= nums.length <= 10^5',
    '0 <= nums[i] <= 10^6',
    '1 <= k <= 10^6',
  ],
  examples: [
    {
      input: 'nums = [2,1,3,4], k = 1',
      output: '2',
      explanation: 'Current XOR: 2^1^3^4 = 4. We need XOR = 1. 4 XOR 1 = 5 = 101₂, which has 2 set bits — so 2 operations.',
    },
    {
      input: 'nums = [2,0,2,0], k = 0',
      output: '0',
      explanation: 'Current XOR: 2^0^2^0 = 0 = k. No operations needed.',
    },
    {
      input: 'nums = [1], k = 3',
      output: '1',
      explanation: 'Current XOR = 1. 1 XOR 3 = 2 = 10₂, which has 1 set bit — so 1 operation.',
    },
  ],
  hints: [
    'Compute `xorAll` = XOR of all elements in nums.',
    'The number of bits you need to flip equals the number of bits where `xorAll` and `k` differ, i.e., `popcount(xorAll ^ k)`.',
    '`const xorAll = nums.reduce((a, b) => a ^ b, 0); let diff = xorAll ^ k, count = 0; while (diff) { count += diff & 1; diff >>= 1; } return count;`',
  ],
  functionName: 'minOperations',
  params: ['nums', 'k'],
  starterCode: {
    javascript: `function minOperations(nums, k) {
  const xorAll = nums.reduce((a, b) => a ^ b, 0);
  let diff = xorAll ^ k, count = 0;
  while (diff) { count += diff & 1; diff >>= 1; }
  return count;
}`,
    typescript: `function minOperations(nums: number[], k: number): number {
  const xorAll = nums.reduce((a, b) => a ^ b, 0);
  let diff = xorAll ^ k, count = 0;
  while (diff) { count += diff & 1; diff >>= 1; }
  return count;
}`,
    python: `def minOperations(nums, k):
    nums = list(nums.to_py()) if hasattr(nums, 'to_py') else list(nums)
    from functools import reduce
    xor_all = reduce(lambda a, b: a ^ b, nums, 0)
    return bin(xor_all ^ k).count('1')`,
  },
  visibleTests: [
    { args: [[2, 1, 3, 4], 1], expected: 2 },
    { args: [[2, 0, 2, 0], 0], expected: 0 },
    { args: [[1], 3], expected: 1 },
  ],
  hiddenTests: [
    { args: [[7], 7], expected: 0 },
    { args: [[1, 2, 3], 0], expected: 0 },
    { args: [[0, 0, 0], 1], expected: 1 },
  ],
};
