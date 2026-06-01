import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-operations-to-make-array-divisible-by-three',
  title: 'Minimum Operations to Make Array Divisible by Three',
  difficulty: 'easy',
  tags: ['arrays', 'math'],
  description: `You are given an integer array \`nums\`. In one operation, you can **add** or **subtract** \`1\` from any element of \`nums\`.

Return the **minimum** number of operations to make every element of \`nums\` divisible by \`3\`.`,
  constraints: [
    '1 <= nums.length <= 50',
    '1 <= nums[i] <= 1000',
  ],
  examples: [
    {
      input: 'nums = [1,2,3,4]',
      output: '3',
      explanation: '1→0 (+1 op), 2→3 (+1 op), 3→3 (0 ops), 4→3 (+1 op). Total = 3.',
    },
    {
      input: 'nums = [3,6,9]',
      output: '0',
      explanation: 'All elements are already divisible by 3.',
    },
    {
      input: 'nums = [1,2,4,5]',
      output: '4',
      explanation: 'Each element needs 1 operation: 1→0, 2→3, 4→3, 5→6.',
    },
  ],
  hints: [
    'For each element, find its remainder when divided by 3. The cost is min(remainder, 3 - remainder).',
    'A remainder of 0 means 0 ops. A remainder of 1 means either subtract 1 (cost 1) or add 2 (cost 2) — pick 1. A remainder of 2 means subtract 2 (cost 2) or add 1 (cost 1) — pick 1.',
    'Sum up min(n % 3, 3 - n % 3) for every n in nums.',
  ],
  functionName: 'minimumOperations',
  params: ['nums'],
  starterCode: {
    javascript: `function minimumOperations(nums) {
  return nums.reduce((total, n) => total + Math.min(n % 3, 3 - n % 3), 0);
}`,
    typescript: `function minimumOperations(nums: number[]): number {
  return nums.reduce((total, n) => total + Math.min(n % 3, 3 - n % 3), 0);
}`,
    python: `def minimumOperations(nums):
    nums = list(nums.to_py()) if hasattr(nums, 'to_py') else list(nums)
    return sum(min(n % 3, 3 - n % 3) for n in nums)`,
  },
  visibleTests: [
    { args: [[1, 2, 3, 4]], expected: 3 },
    { args: [[3, 6, 9]], expected: 0 },
    { args: [[1, 2, 4, 5]], expected: 4 },
  ],
  hiddenTests: [
    { args: [[1]], expected: 1 },
    { args: [[5]], expected: 1 },
    { args: [[3]], expected: 0 },
    { args: [[1, 2]], expected: 2 },
    { args: [[10, 20, 30]], expected: 2 },
    { args: [[7, 14, 22]], expected: 3 },
    { args: [[1000]], expected: 1 },
  ],
};
