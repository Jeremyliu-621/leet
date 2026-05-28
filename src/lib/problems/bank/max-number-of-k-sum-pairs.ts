import type { Problem } from '../types';

export const problem: Problem = {
  id: 'max-number-of-k-sum-pairs',
  title: 'Max Number of K-Sum Pairs',
  difficulty: 'medium',
  tags: ['arrays', 'two-pointers', 'hash-map'],
  description: `You are given an integer array \`nums\` and an integer \`k\`.

In one operation, you can pick two numbers from the array that **sum to \`k\`** and remove them from the array.

Return the **maximum number of operations** you can perform.

Each element may be used in **at most one** operation.

**Examples:**
- \`nums = [1, 2, 3, 4]\`, \`k = 5\` → \`2\` (pairs: (1,4) and (2,3))
- \`nums = [3, 1, 3, 4, 3]\`, \`k = 6\` → \`1\` (only one pair: (3,3))

**Constraints:**
- \`1 ≤ nums.length ≤ 10⁵\`
- \`1 ≤ nums[i] ≤ 10⁹\`
- \`1 ≤ k ≤ 10⁹\``,
  constraints: [
    '1 ≤ nums.length ≤ 10⁵',
    '1 ≤ nums[i] ≤ 10⁹',
    '1 ≤ k ≤ 10⁹',
  ],
  examples: [
    {
      input: 'nums = [1,2,3,4], k = 5',
      output: '2',
      explanation: 'Starting with [1,2,3,4]. Remove 1 and 4, then 2 and 3. That is 2 operations.',
    },
    {
      input: 'nums = [3,1,3,4,3], k = 6',
      output: '1',
      explanation: 'Starting with [3,1,3,4,3]. Remove the first and second 3. That is 1 operation.',
    },
  ],
  hints: [
    'Sort the array first. Then use two pointers — one at the left, one at the right.',
    'If `nums[l] + nums[r] === k`, count a pair and move both pointers inward.',
    'If the sum is less than k, move the left pointer right (need larger value). If greater, move right pointer left.',
    'Alternatively, use a hash map to count frequencies. For each number `x`, if `freq[k-x] > 0`, count a pair and decrement both counts.',
  ],
  functionName: 'maxOperations',
  params: ['nums', 'k'],
  starterCode: {
    javascript: `function maxOperations(nums, k) {
  // Return max number of pairs (a, b) where a + b === k, each element used at most once
}`,
    typescript: "function maxOperations(nums: number[], k: number): number {\n  // Return max number of pairs (a, b) where a + b === k, each element used at most once\n}",

    python: `def maxOperations(nums: list[int], k: int) -> int:
    # Return max number of pairs (a, b) where a + b === k, each element used at most once
    pass`,
  },
  visibleTests: [
    { args: [[1, 2, 3, 4], 5], expected: 2 },
    { args: [[3, 1, 3, 4, 3], 6], expected: 1 },
    { args: [[1, 1, 1, 1], 2], expected: 2 },
  ],
  hiddenTests: [
    { args: [[1, 2, 3, 4, 5], 6], expected: 2 },
    { args: [[2, 2, 2, 2], 4], expected: 2 },
    { args: [[1], 2], expected: 0 },
    { args: [[5, 5], 10], expected: 1 },
    { args: [[1, 3, 2, 4, 5, 6], 7], expected: 3 },
    { args: [[1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 11], expected: 5 },
  ],
};
