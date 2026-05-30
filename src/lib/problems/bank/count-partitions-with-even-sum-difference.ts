import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-partitions-with-even-sum-difference',
  title: 'Count Partitions with Even Sum Difference',
  difficulty: 'easy',
  tags: ['arrays', 'math'],
  description: `You are given an integer array \`nums\` of length \`n\`.

A partition is defined as an index \`i\` where \`0 <= i < n - 1\`, splitting the array into two non-empty parts:

- Left part: \`nums[0..i]\`
- Right part: \`nums[i+1..n-1]\`

Return the number of partitions where the **difference** between the sum of the left part and the sum of the right part is **even**.`,
  constraints: [
    '2 <= nums.length <= 100',
    '1 <= nums[i] <= 100',
  ],
  examples: [
    {
      input: 'nums = [10, 10, 3, 7, 6]',
      output: '4',
      explanation: 'Total sum = 36 (even). Partitions at indices 0,1,2,3 all yield even difference since leftSum - rightSum = 2*leftSum - total, which is even when total is even.',
    },
    {
      input: 'nums = [1, 2, 2]',
      output: '0',
      explanation: 'Total sum = 5 (odd). No partition can produce an even difference.',
    },
    {
      input: 'nums = [2, 4]',
      output: '1',
      explanation: 'Total = 6 (even). Only one possible partition (at index 0): left=[2], right=[4], diff=2-4=-2 (even).',
    },
  ],
  hints: [
    'The difference leftSum - rightSum = leftSum - (total - leftSum) = 2*leftSum - total.',
    'This difference is even if and only if 2*leftSum - total is even, which happens when total is even.',
    'So the answer is simply: if the total sum is even, return n-1; otherwise return 0.',
  ],
  functionName: 'countPartitions',
  params: ['nums'],
  starterCode: {
    javascript: `function countPartitions(nums) {
  // your code here
}`,
    typescript: `function countPartitions(nums: number[]): number {
  // your code here
}`,
    python: `def countPartitions(nums):
    # your code here
    pass`,
  },
  visibleTests: [
    { args: [[10, 10, 3, 7, 6]], expected: 4 },
    { args: [[1, 2, 2]], expected: 0 },
    { args: [[2, 4]], expected: 1 },
    { args: [[1, 1]], expected: 1 },
    { args: [[1, 2]], expected: 0 },
  ],
  hiddenTests: [
    { args: [[1, 1, 1, 1]], expected: 3 },
    { args: [[2, 2, 2, 2]], expected: 3 },
    { args: [[1, 3, 5, 7]], expected: 3 },
    { args: [[1, 2, 3]], expected: 2 },
    { args: [[4, 6, 8, 10]], expected: 3 },
    { args: [[100, 100]], expected: 1 },
    { args: [[1, 1, 2]], expected: 2 },
    { args: [[2, 4, 6, 8, 10]], expected: 4 },
  ],
};
