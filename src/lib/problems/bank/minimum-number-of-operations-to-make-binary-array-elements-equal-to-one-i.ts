import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-number-of-operations-to-make-binary-array-elements-equal-to-one-i',
  title: 'Minimum Number of Operations to Make Binary Array Elements Equal to One I',
  difficulty: 'medium',
  tags: ['arrays'],
  description: `You are given a **binary array** \`nums\`.

You can do the following operation **any** number of times (including zero):

- Choose **any** 3 **consecutive** elements of the array and **flip** all of them (flip means changing value \`0\` to \`1\` and vice versa).

Return the **minimum** number of operations required to make all elements of \`nums\` equal to \`1\`. If it is impossible, return \`-1\`.`,
  constraints: [
    '`3 <= nums.length <= 10^5`',
    '`0 <= nums[i] <= 1`',
  ],
  examples: [
    {
      input: 'nums = [0,1,1,1,0,0]',
      output: '3',
      explanation: 'Flip [0,1,2] → [1,0,0,1,0,0]. Flip [1,2,3] → [1,1,1,0,0,0]. Flip [3,4,5] → [1,1,1,1,1,1]. 3 ops.',
    },
    {
      input: 'nums = [0,1,1,1]',
      output: '-1',
      explanation: 'The last element can only be reached by flipping [1,2,3]. After that [0,0,0,0] cannot be solved either.',
    },
    {
      input: 'nums = [1,1,1]',
      output: '0',
      explanation: 'All elements are already 1.',
    },
  ],
  hints: [
    'Use a greedy left-to-right scan: whenever you encounter a 0 at position i, flip elements at i, i+1, i+2.',
    'This is always optimal — if nums[i]=0 and you do not flip starting at i, nums[i] can never be fixed (no future flip covers i without also covering something to its left).',
    'If after the greedy pass the last two elements are not all 1, return -1.',
  ],
  functionName: 'minOperations',
  params: ['nums'],
  starterCode: {
    javascript: `function minOperations(nums) {

}`,
    typescript: `function minOperations(nums: number[]): number {

}`,
    python: `def minOperations(nums):
    pass`,
  },
  visibleTests: [
    { args: [[0, 1, 1, 1, 0, 0]], expected: 3 },
    { args: [[0, 1, 1, 1]], expected: -1 },
    { args: [[1, 1, 1]], expected: 0 },
  ],
  hiddenTests: [
    { args: [[0, 0, 0]], expected: 1 },
    { args: [[0, 0, 0, 0]], expected: -1 },
    { args: [[1, 0, 1]], expected: -1 },
    { args: [[1, 0, 1, 1, 0, 1]], expected: 2 },
    { args: [[0, 1, 0, 1, 0, 1]], expected: 3 },
    { args: [[0, 0, 1, 0, 0, 1]], expected: 2 },
    { args: [[0, 0, 1, 0, 0, 0]], expected: -1 },
  ],
};
