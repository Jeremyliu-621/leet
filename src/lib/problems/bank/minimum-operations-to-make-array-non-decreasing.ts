import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-operations-to-make-array-non-decreasing',
  title: 'Minimum Operations to Make Array Non-Decreasing',
  difficulty: 'medium',
  tags: ['stack', 'arrays'],
  description: `You are given an integer array \`nums\`. In one operation you can **increase** any element by 1. Return the **minimum number of operations** to make \`nums\` non-decreasing (i.e., \`nums[i] <= nums[i+1]\` for all valid \`i\`).

Since we can only increase values, the only valid strategy is to bring earlier elements up to match later larger elements, or to ensure each element is at least as large as the previous one. The minimum number of increments needed equals the sum over all positions where \`nums[i] > nums[i+1]\` of \`(nums[i] - nums[i+1])\`.

Wait — re-read: we want non-decreasing, so we need \`nums[i] <= nums[i+1]\`. If we can only increment, we must increase \`nums[i+1]\` to at least \`nums[i]\`. The answer is the total "catch-up" needed scanning left to right.

Return the total number of increment operations needed.

**Example:**
- \`nums = [3, 2, 1]\`
- After making non-decreasing: \`[3, 3, 3]\` — need 1 + 2 = 3 operations
- **Answer: 3**`,
  constraints: [
    '1 <= nums.length <= 10^5',
    '0 <= nums[i] <= 10^9',
  ],
  examples: [
    {
      input: 'nums = [3, 2, 1]',
      output: '3',
      explanation: 'Increase index 1 by 1 (→3) and index 2 by 2 (→3): total 3 operations.',
    },
    {
      input: 'nums = [1, 2, 3]',
      output: '0',
      explanation: 'Already non-decreasing.',
    },
    {
      input: 'nums = [5, 3, 4, 2]',
      output: '5',
      explanation: 'Need: index 1: max(3,5)=5 so +2; index 2: max(4,5)=5 so +1; index 3: max(2,5)=5 so +3. Total = 2+1+3=6? Let\'s recompute: prev=5, need nums[1]>=5, add 2 → prev=5; nums[2]=4, need >=5, add 1 → prev=5; nums[3]=2, need >=5, add 3 → total = 2+1+3=6.',
    },
  ],
  hints: [
    'Scan left to right. Maintain the current "minimum allowed value" (the running maximum of all values seen so far). For each element, if it is less than the running maximum, count the difference as operations needed and update it to the running maximum.',
    'The answer is simply `sum of max(0, prev - nums[i])` while tracking `prev = max(prev, nums[i])` at each step.',
    'One-liner: keep track of current required minimum. If `nums[i] < required`, add `required - nums[i]` to the answer. Always update `required = max(required, nums[i])`.',
  ],
  functionName: 'minOperationsNonDecreasing',
  params: ['nums'],
  starterCode: {
    javascript: `function minOperationsNonDecreasing(nums) {
  // Return minimum number of increment operations to make nums non-decreasing
}`,
    python: `def minOperationsNonDecreasing(nums: list[int]) -> int:
    # Return minimum number of increment operations to make nums non-decreasing
    pass`,
  },
  visibleTests: [
    { args: [[3, 2, 1]], expected: 3 },
    { args: [[1, 2, 3]], expected: 0 },
    { args: [[5, 3, 4, 2]], expected: 6 },
    { args: [[1]], expected: 0 },
  ],
  hiddenTests: [
    { args: [[1, 1, 1]], expected: 0 },
    { args: [[3, 1, 2]], expected: 2 },
    { args: [[5, 4, 3, 2, 1]], expected: 10 },
    { args: [[1, 5, 2, 3]], expected: 5 },
    { args: [[0, 0, 0]], expected: 0 },
    { args: [[4, 4, 4, 1]], expected: 3 },
    { args: [[2, 1, 1]], expected: 2 },
  ],
};
