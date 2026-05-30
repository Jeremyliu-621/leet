import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-number-of-operations-to-make-binary-array-elements-equal-to-one-ii',
  title: 'Minimum Number of Operations to Make Binary Array Elements Equal to One II',
  difficulty: 'medium',
  tags: ['arrays'],
  description: `You are given a **binary array** \`nums\`.

You can do the following operation **any** number of times (including zero):

- Choose an index \`i\` and **flip** all elements from index \`i\` to the end of the array (i.e., \`nums[i], nums[i+1], ..., nums[nums.length - 1]\`).

Return the **minimum** number of operations required to make all elements of \`nums\` equal to \`1\`.`,
  constraints: [
    '`1 <= nums.length <= 10^5`',
    '`0 <= nums[i] <= 1`',
  ],
  examples: [
    {
      input: 'nums = [0,1,0,1]',
      output: '4',
      explanation: 'Each position alternates, requiring a separate flip for each transition. 4 operations needed.',
    },
    {
      input: 'nums = [1,0,0,0]',
      output: '1',
      explanation: 'Flip from index 1 to end: [1,1,1,1]. 1 operation.',
    },
    {
      input: 'nums = [1,1,1,1]',
      output: '0',
      explanation: 'Already all 1s. No operations needed.',
    },
  ],
  hints: [
    'Simulate greedily: track a cumulative flip parity. If the effective value at position i is 0, you must flip from i.',
    'Each flip toggles the parity for all positions from i onwards.',
    'Equivalently, the answer equals the number of value transitions when you prepend a virtual "1" before the array.',
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
    { args: [[0, 1, 0, 1]], expected: 4 },
    { args: [[1, 0, 0, 0]], expected: 1 },
    { args: [[1, 1, 1, 1]], expected: 0 },
  ],
  hiddenTests: [
    { args: [[0]], expected: 1 },
    { args: [[1]], expected: 0 },
    { args: [[1, 0]], expected: 1 },
    { args: [[0, 1]], expected: 2 },
    { args: [[1, 0, 1]], expected: 2 },
    { args: [[0, 0, 1, 1]], expected: 2 },
    { args: [[1, 1, 0, 0]], expected: 1 },
  ],
};
