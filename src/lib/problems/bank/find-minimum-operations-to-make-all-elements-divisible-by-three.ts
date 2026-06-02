import type { Problem } from '../types';

export const problem: Problem = {
  id: 'find-minimum-operations-to-make-all-elements-divisible-by-three',
  title: 'Find Minimum Operations to Make All Array Elements Divisible by Three',
  difficulty: 'easy',
  tags: ['arrays', 'math'],
  description: `You are given an integer array \`nums\`. In one operation, you can add or subtract 1 from **any** element of \`nums\`.

Return the **minimum** number of operations to make all elements of \`nums\` divisible by 3.`,
  constraints: [
    '1 <= nums.length <= 50',
    '1 <= nums[i] <= 50',
  ],
  examples: [
    {
      input: 'nums = [1,2,3,4]',
      output: '3',
      explanation: '1 → 0 or 3 (1 op), 2 → 3 (1 op), 3 → already divisible (0 ops), 4 → 3 or 6 (1 op). Total = 3.',
    },
    {
      input: 'nums = [3,6,9]',
      output: '0',
      explanation: 'All elements are already divisible by 3.',
    },
    {
      input: 'nums = [2,3,4]',
      output: '2',
      explanation: '2 → 3 (1 op), 3 → 0 ops, 4 → 3 (1 op). Total = 2.',
    },
  ],
  hints: [
    'For each element, check its remainder when divided by 3.',
    'If remainder is 0: no operation needed. If remainder is 1 or 2: exactly 1 operation suffices (±1 to reach the nearest multiple of 3).',
    'Count the number of elements whose remainder is non-zero.',
  ],
  functionName: 'minimumOperations',
  params: ['nums'],
  starterCode: {
    javascript: `function minimumOperations(nums) {
  return nums.filter(n => n % 3 !== 0).length;
}`,
    typescript: `function minimumOperations(nums: number[]): number {
  return nums.filter(n => n % 3 !== 0).length;
}`,
    python: `def minimumOperations(nums):
    return sum(1 for n in nums if n % 3 != 0)`,
  },
  visibleTests: [
    { args: [[1, 2, 3, 4]], expected: 3 },
    { args: [[3, 6, 9]], expected: 0 },
    { args: [[2, 3, 4]], expected: 2 },
  ],
  hiddenTests: [
    { args: [[1]], expected: 1 },
    { args: [[3]], expected: 0 },
    { args: [[5]], expected: 1 },
    { args: [[1, 1, 1]], expected: 3 },
    { args: [[6, 12, 18]], expected: 0 },
    { args: [[1, 2, 4, 5, 7, 8]], expected: 6 },
  ],
};
