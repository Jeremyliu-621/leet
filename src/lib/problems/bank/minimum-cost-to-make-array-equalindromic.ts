import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-cost-to-make-array-equalindromic',
  title: 'Minimum Cost to Make Array Equalindromic',
  difficulty: 'medium',
  tags: ['arrays', 'math'],
  description: `You are given a **0-indexed** integer array \`nums\` having length \`n\`.

You are allowed to perform a special move **any** number of times (**including zero**) on \`nums\`. In one special move you will choose one index \`i\` that was **not** chosen before, and change \`nums[i]\` to any value.

Return the **minimum** total cost to make all elements of \`nums\` **equal** to some palindromic number. The cost of changing \`nums[i]\` to value \`v\` is \`|nums[i] - v|\`.

A palindromic number is a positive integer that is the same when read from left to right and right to left.`,
  constraints: [
    '`1 <= n <= 10^5`',
    '`1 <= nums[i] <= 10^9`',
  ],
  examples: [
    {
      input: 'nums = [1,2]',
      output: '1',
      explanation: 'Change nums[0] to 2 (cost = 1) or change nums[1] to 1 (cost = 1). Either way, total cost is 1.',
    },
    {
      input: 'nums = [1,2,3,4,5]',
      output: '6',
      explanation: 'Change all elements to 3 (the palindromic median): |1-3|+|2-3|+|3-3|+|4-3|+|5-3| = 2+1+0+1+2 = 6.',
    },
    {
      input: 'nums = [10,12]',
      output: '2',
      explanation: 'Change both to 11: |10-11|+|12-11| = 1+1 = 2. The palindrome 11 is optimal.',
    },
  ],
  hints: [
    'The optimal palindromic number p minimises total L1 deviation — it will be near the median of nums.',
    'Sort nums, then find the median element. The answer palindrome is the palindrome closest to the median.',
    'Generate palindrome candidates by mirroring the first half of the median; try delta -1, 0, +1 on the first half.',
    'Also try boundary palindromes: all 9s one digit shorter, and 100…01 one digit longer than the median.',
    'Compute total cost for each candidate palindrome and return the minimum.',
  ],
  functionName: 'minimumCost',
  params: ['nums'],
  starterCode: {
    javascript: `function minimumCost(nums) {

}`,
    typescript: `function minimumCost(nums: number[]): number {

}`,
    python: `def minimumCost(nums):
    pass`,
  },
  visibleTests: [
    { args: [[1, 2]], expected: 1 },
    { args: [[1, 2, 3, 4, 5]], expected: 6 },
    { args: [[10, 12]], expected: 2 },
  ],
  hiddenTests: [
    { args: [[1]], expected: 0 },
    { args: [[11]], expected: 0 },
    { args: [[1, 2, 3]], expected: 2 },
    { args: [[10, 20, 30]], expected: 22 },
    { args: [[1, 1, 1, 1]], expected: 0 },
    { args: [[1, 3]], expected: 2 },
    { args: [[99, 100, 101]], expected: 3 },
    { args: [[100, 200, 300, 400, 500]], expected: 603 },
  ],
};
