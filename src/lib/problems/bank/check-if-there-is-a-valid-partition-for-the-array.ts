import type { Problem } from '../types';

export const problem: Problem = {
  id: 'check-if-there-is-a-valid-partition-for-the-array',
  title: 'Check if There is a Valid Partition For The Array',
  difficulty: 'medium',
  tags: ['arrays', 'dynamic-programming'],
  description: `You are given a **0-indexed** integer array \`nums\`. You must partition the array into one or more **contiguous** subarrays.

A partition is **valid** if every subarray satisfies **one** of:
1. The subarray consists of **exactly 2 equal elements** — e.g. \`[2, 2]\`.
2. The subarray consists of **exactly 3 equal elements** — e.g. \`[4, 4, 4]\`.
3. The subarray consists of **exactly 3 consecutive increasing elements** (each differing by 1) — e.g. \`[3, 4, 5]\`.

Return \`true\` if at least one valid partition exists, otherwise return \`false\`.`,
  constraints: [
    '`2 <= nums.length <= 10^5`',
    '`1 <= nums[i] <= 10^6`',
  ],
  examples: [
    {
      input: 'nums = [4,4,4,5,6]',
      output: 'true',
      explanation: 'Partition into [4,4] and [4,5,6] — first subarray has 2 equal elements, second has 3 consecutive increasing elements.',
    },
    {
      input: 'nums = [1,1,1,2]',
      output: 'false',
      explanation: 'No valid way to partition this array.',
    },
  ],
  hints: [
    'Define `dp[i]` as whether the first `i` elements can form a valid partition. Base case: `dp[0] = true` (empty prefix is trivially valid).',
    'For each index `i` (1-indexed), check if we can extend a valid partition ending at `i`. Three transitions: (1) if `nums[i-1] == nums[i-2]`, then `dp[i] |= dp[i-2]`; (2) if `nums[i-1] == nums[i-2] == nums[i-3]`, then `dp[i] |= dp[i-3]`; (3) if `nums[i-1] == nums[i-2]+1 == nums[i-3]+2`, then `dp[i] |= dp[i-3]`.',
    'Return `dp[n]`. Since each `dp[i]` only depends on `dp[i-2]` and `dp[i-3]`, you can use O(1) extra space with three boolean variables.',
  ],
  functionName: 'validPartition',
  params: ['nums'],
  starterCode: {
    javascript: `function validPartition(nums) {

}`,
    typescript: "function validPartition(nums: number[]): boolean {\n\n}",

    python: `def validPartition(nums):
    pass`,
  },
  visibleTests: [
    { args: [[4, 4, 4, 5, 6]], expected: true },
    { args: [[1, 1, 1, 2]], expected: false },
    { args: [[1, 1, 2, 2]], expected: true },
  ],
  hiddenTests: [
    { args: [[1, 1]], expected: true },
    { args: [[1, 2, 3]], expected: true },
    { args: [[1, 2, 3, 4]], expected: false },
    { args: [[1, 1, 1]], expected: true },
    { args: [[2, 2, 3, 3, 3, 3]], expected: true },
    { args: [[1, 1, 2, 2, 3, 3]], expected: true },
    { args: [[1, 2, 3, 1, 2, 3]], expected: true },
    { args: [[5, 5, 5, 5]], expected: true },
  ],
};
