import type { Problem } from '../types';

export const problem: Problem = {
  id: 'missing-integer',
  title: 'Missing Integer',
  difficulty: 'easy',
  tags: ['arrays', 'hash-map'],
  description: `Given a **0-indexed** integer array \`nums\`, find the **smallest** integer \`x\` greater than or equal to \`1\` such that \`x\` is **not** equal to any of the **prefix sums** of \`nums\`.

A **prefix sum** is the sum of the first \`k\` elements of \`nums\` for some \`1 <= k <= nums.length\`.`,
  constraints: [
    '1 <= nums.length <= 50',
    '1 <= nums[i] <= 50',
  ],
  examples: [
    {
      input: 'nums = [1,2,3,2,5]',
      output: '2',
      explanation: 'Prefix sums: 1, 3, 6, 8, 13. The smallest missing positive integer is 2.',
    },
    {
      input: 'nums = [3,4,5,1,2]',
      output: '1',
      explanation: 'Prefix sums: 3, 7, 12, 13, 15. The smallest missing positive integer is 1.',
    },
  ],
  hints: [
    'Compute all prefix sums and store them in a hash set.',
    'Starting from 1, find the smallest integer not in the set.',
    'Since all nums[i] >= 1, the prefix sums are strictly increasing, so the missing value is at most O(n^2) which is small.',
  ],
  functionName: 'missingInteger',
  params: ['nums'],
  starterCode: {
    javascript: 'function missingInteger(nums) {\n  \n}\n',
    typescript: 'function missingInteger(nums: number[]): number {\n  \n}',
    python: 'def missingInteger(nums):\n    pass\n',
  },
  visibleTests: [
    { args: [[1, 2, 3, 2, 5]], expected: 2 },
    { args: [[3, 4, 5, 1, 2]], expected: 1 },
  ],
  hiddenTests: [
    { args: [[1]], expected: 2 },
    { args: [[5]], expected: 1 },
    { args: [[1, 2]], expected: 2 },
    { args: [[1, 1, 1]], expected: 4 },
    { args: [[2, 3, 4]], expected: 1 },
  ],
};
