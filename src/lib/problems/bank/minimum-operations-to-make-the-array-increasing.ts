import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-operations-to-make-the-array-increasing',
  title: 'Minimum Operations to Make the Array Increasing',
  difficulty: 'easy',
  tags: ['arrays'],
  description: `You are given a **0-indexed** integer array \`nums\`. In one operation, you can choose an index \`i\` where \`0 <= i < nums.length\` and **increment** \`nums[i]\` by 1.

Return the **minimum** number of operations needed to make \`nums\` **strictly increasing**.

An array \`nums\` is **strictly increasing** if \`nums[i - 1] < nums[i]\` for every index \`i\` where \`1 <= i < nums.length\`.`,
  constraints: [
    '`1 <= nums.length <= 5000`',
    '`1 <= nums[i] <= 10^4`',
  ],
  examples: [
    {
      input: 'nums = [1,1,1]',
      output: '3',
      explanation: 'One set of optimal operations: nums[1] += 1, nums[2] += 2. Result: [1,2,3], which is strictly increasing.',
    },
    {
      input: 'nums = [1,5,2,4,1]',
      output: '14',
      explanation: 'One set of optimal operations makes the array [1,5,6,7,8].',
    },
    {
      input: 'nums = [8]',
      output: '0',
      explanation: 'A single element is already strictly increasing.',
    },
  ],
  hints: [
    'Process elements left to right. For each element, it must be strictly greater than the previous element.',
    'If the current element is not greater than the previous, increment it to `previous + 1`. Count the increments.',
    '```js\nfunction minOperations(nums) {\n  let ops = 0;\n  for (let i = 1; i < nums.length; i++) {\n    if (nums[i] <= nums[i-1]) {\n      ops += nums[i-1] + 1 - nums[i];\n      nums[i] = nums[i-1] + 1;\n    }\n  }\n  return ops;\n}\n```',
  ],
  functionName: 'minOperations',
  params: ['nums'],
  starterCode: {
    javascript: `function minOperations(nums) {

}`,
    typescript: 'function minOperations(nums: number[]): number {\n\n}',
    python: `def minOperations(nums):
    pass`,
  },
  visibleTests: [
    { args: [[1, 1, 1]], expected: 3 },
    { args: [[1, 5, 2, 4, 1]], expected: 14 },
    { args: [[8]], expected: 0 },
  ],
  hiddenTests: [
    { args: [[1, 2, 3]], expected: 0 },
    { args: [[1, 1]], expected: 1 },
    { args: [[3, 1, 2]], expected: 6 },
    { args: [[5, 4, 3, 2, 1]], expected: 20 },
    { args: [[1, 2, 1, 1, 3]], expected: 7 },
    { args: [[2, 2, 2, 2]], expected: 6 },
    { args: [[1, 10, 1, 1, 1]], expected: 33 },
  ],
};
