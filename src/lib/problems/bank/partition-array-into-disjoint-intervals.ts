import type { Problem } from '../types';

export const problem: Problem = {
  id: 'partition-array-into-disjoint-intervals',
  title: 'Partition Array into Disjoint Intervals',
  difficulty: 'medium',
  tags: ['arrays', 'two-pointers'],
  description: `Given an integer array \`nums\`, partition it into two contiguous subarrays \`left\` and \`right\` such that:

- Every element in \`left\` is less than or equal to every element in \`right\`.
- \`left\` and \`right\` are non-empty.
- \`left\` has the smallest possible size.

Return the **length** of \`left\` after such a partitioning.

**Test cases** are generated such that partitioning exists.`,
  constraints: [
    '`2 <= nums.length <= 10^5`',
    '`0 <= nums[i] <= 10^6`',
    'There is always a valid answer for the given input.',
  ],
  examples: [
    {
      input: 'nums = [5,0,3,8,6]',
      output: '3',
      explanation: 'left = [5,0,3], right = [8,6]. max(left) = 5 ≤ min(right) = 6.',
    },
    {
      input: 'nums = [1,1,1,0,6,12]',
      output: '4',
      explanation: 'left = [1,1,1,0], right = [6,12]. max(left) = 1 ≤ min(right) = 6.',
    },
  ],
  hints: [
    'Track two values: maxLeft (max of the current partition) and potMax (potential maximum encountered so far).',
    'Scan left to right. When nums[i] < maxLeft, the partition must extend to include i — set partition = i, maxLeft = potMax. Otherwise update potMax = max(potMax, nums[i]).',
    'The answer is partition + 1 (partition is the last index of the left subarray).',
  ],
  functionName: 'partitionDisjoint',
  params: ['nums'],
  starterCode: {
    javascript: `function partitionDisjoint(nums) {

}`,
    typescript: 'function partitionDisjoint(nums: number[]): number {\n\n}',
    python: `def partitionDisjoint(nums):
    pass`,
  },
  visibleTests: [
    { args: [[5, 0, 3, 8, 6]], expected: 3 },
    { args: [[1, 1, 1, 0, 6, 12]], expected: 4 },
  ],
  hiddenTests: [
    { args: [[1, 2, 3, 4, 5]], expected: 1 },
    { args: [[3, 2, 1]], expected: 3 },
    { args: [[1, 1]], expected: 1 },
    { args: [[2, 1, 4, 3]], expected: 2 },
    { args: [[1, 0, 0, 0]], expected: 4 },
  ],
};
