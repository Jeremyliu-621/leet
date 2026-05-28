import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-operations-to-make-binary-array-elements-equal-to-one-ii',
  title: 'Minimum Operations to Make Binary Array Elements Equal to One II',
  difficulty: 'medium',
  tags: ['arrays'],
  description: `You are given a **0-indexed** binary array \`nums\`.

In one operation, you can choose any index \`i\` from the array and **flip** all the elements from index \`i\` to the end of the array (i.e., flip \`nums[i], nums[i + 1], ..., nums[nums.length - 1]\`).

Return the **minimum** number of operations required to make all elements of the array equal to \`1\`.`,
  constraints: [
    '1 <= nums.length <= 10^5',
    '0 <= nums[i] <= 1',
  ],
  examples: [
    {
      input: 'nums = [0,1,1,0,1]',
      output: '4',
    },
    {
      input: 'nums = [1,0,0,0]',
      output: '1',
    },
  ],
  hints: [
    'Scan left to right. Track the parity of flips applied so far.',
    'When the effective value of nums[i] (after applying current flip parity) is 0, we must flip from i.',
    'Count the number of flips needed.',
  ],
  functionName: 'minOperations',
  params: ['nums'],
  starterCode: {
    javascript: 'function minOperations(nums) {\n\n}\n',
    typescript: "function minOperations(nums: number[]): number {\n\n}",

    python: 'def minOperations(nums):\n    pass\n',
  },
  visibleTests: [
    { args: [[0,1,1,0,1]], expected: 4 },
    { args: [[1,0,0,0]], expected: 1 },
  ],
  hiddenTests: [
    { args: [[0,0,0]], expected: 1 },
    { args: [[1,1,1]], expected: 0 },
    { args: [[0,1,0]], expected: 3 },
    { args: [[1,0,1,0]], expected: 3 },
  ],
};
