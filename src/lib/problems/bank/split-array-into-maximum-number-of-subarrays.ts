import type { Problem } from '../types';

export const problem: Problem = {
  id: 'split-array-into-maximum-number-of-subarrays',
  title: 'Split Array into Maximum Number of Subarrays',
  difficulty: 'medium',
  tags: ['arrays', 'math'],
  description: `You are given an array \`nums\` consisting of **non-negative** integers.

A split of the array is valid if the **bitwise AND** of each subarray's elements equals the **minimum possible AND** of the entire array (i.e., the AND of all elements in \`nums\`).

Return the **maximum number of subarrays** you can split \`nums\` into while keeping the split valid.

**Note:** The entire array is always a valid split (1 subarray).`,
  constraints: [
    '1 <= nums.length <= 10^5',
    '0 <= nums[i] <= 10^6',
  ],
  examples: [
    {
      input: 'nums = [1,0,2,1]',
      output: '2',
      explanation: 'The AND of all elements is 0. We can split into [1,0] (AND=0) and [2,1] (AND=0). Each equals the total AND.',
    },
    {
      input: 'nums = [5,7,1,3]',
      output: '1',
      explanation: 'The AND of all elements is 1. The greedy scan yields one full segment [5,7,1] at index 2, then [3] alone (AND=3 ≠ 1). Only 1 valid segment.',
    },
    {
      input: 'nums = [0,0]',
      output: '2',
      explanation: 'Total AND = 0. Each element is already 0, so [0] and [0] are two valid segments.',
    },
  ],
  hints: [
    'Compute `totalAnd` = AND of all elements.',
    'Scan left to right with a running AND. Whenever the running AND equals `totalAnd`, close the current segment and start a new one.',
    'Return the number of closed segments (at least 1 — the whole array is always valid).',
    '`const totalAnd = nums.reduce((a, b) => a & b, ~0); let count = 0, run = ~0; for (const n of nums) { run &= n; if (run === totalAnd) { count++; run = ~0; } } return Math.max(1, count);`',
  ],
  functionName: 'maxSubarrays',
  params: ['nums'],
  starterCode: {
    javascript: `function maxSubarrays(nums) {
  const totalAnd = nums.reduce((a, b) => a & b, ~0);
  let count = 0, run = ~0;
  for (const n of nums) { run &= n; if (run === totalAnd) { count++; run = ~0; } }
  return Math.max(1, count);
}`,
    typescript: `function maxSubarrays(nums: number[]): number {
  const totalAnd = nums.reduce((a, b) => a & b, ~0);
  let count = 0, run = ~0;
  for (const n of nums) { run &= n; if (run === totalAnd) { count++; run = ~0; } }
  return Math.max(1, count);
}`,
    python: `def maxSubarrays(nums):
    if hasattr(nums, 'to_py'): nums = nums.to_py()
    nums = [int(x) for x in nums]
    total_and = nums[0]
    for x in nums[1:]: total_and &= x
    count = 0; run = ~0
    for n in nums:
        run &= n
        if run == total_and: count += 1; run = ~0
    return max(1, count)`,
  },
  visibleTests: [
    { args: [[1, 0, 2, 1]], expected: 2 },
    { args: [[5, 7, 1, 3]], expected: 1 },
    { args: [[0, 0]], expected: 2 },
  ],
  hiddenTests: [
    { args: [[1]], expected: 1 },
    { args: [[3, 3, 3, 3]], expected: 4 },
    { args: [[2, 1, 4]], expected: 1 },
  ],
};
