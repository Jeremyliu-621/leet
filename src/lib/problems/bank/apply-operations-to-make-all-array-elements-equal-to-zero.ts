import type { Problem } from '../types';

export const problem: Problem = {
  id: 'apply-operations-to-make-all-array-elements-equal-to-zero',
  title: 'Apply Operations to Make All Array Elements Equal to Zero',
  difficulty: 'medium',
  tags: ['arrays'],
  description: `You are given a **0-indexed** integer array \`nums\` and a positive integer \`k\`.

You can apply the following operation any number of times:

- Choose any subarray of \`nums\` of length exactly \`k\` and decrease each element by \`1\`.

Return \`true\` *if you can make all the array elements equal to* \`0\`, or \`false\` *otherwise*.`,
  constraints: [
    '1 <= k <= nums.length <= 10^5',
    '0 <= nums[i] <= 10^6',
  ],
  examples: [
    {
      input: 'nums = [2,2,3,1,1,0], k = 3',
      output: 'true',
      explanation:
        'Apply 2 ops starting at index 0 (decrement [0..2] by 1 each time), then 1 op at index 2 (decrement [2..4]), then 0 more needed. All elements become 0.',
    },
    {
      input: 'nums = [1,3,1,1], k = 2',
      output: 'false',
      explanation:
        'There is no sequence of operations that can make all elements 0.',
    },
  ],
  hints: [
    'Sweep left to right: if nums[i] > active_ops, we must start (nums[i] - active_ops) new operations at index i.',
    'If i + k > n, we cannot start a new operation — return false.',
    'Track how many active operations expire at each position using a difference array (expire[i+k] += new_ops).',
  ],
  functionName: 'checkArray',
  params: ['nums', 'k'],
  starterCode: {
    javascript: 'function checkArray(nums, k) {\n\n}\n',
    typescript: 'function checkArray(nums: number[], k: number): boolean {\n\n}\n',
    python: 'def checkArray(nums, k):\n    pass\n',
  },
  visibleTests: [
    { args: [[2,2,3,1,1,0], 3], expected: true },
    { args: [[1,3,1,1], 2], expected: false },
  ],
  hiddenTests: [
    { args: [[0,0,0], 1], expected: true },
    { args: [[1,1,1], 3], expected: true },
    { args: [[1,0], 2], expected: false },
    { args: [[0,1,1,0], 2], expected: true },
    { args: [[1,1,1,1], 2], expected: true },
    { args: [[1,1,1,1], 3], expected: false },
    { args: [[2,2,2], 3], expected: true },
  ],
};
