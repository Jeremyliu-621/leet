import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-operations-to-make-array-increasing',
  title: 'Minimum Operations to Make Array Increasing',
  difficulty: 'easy',
  tags: ['arrays', 'math'],
  description: `You are given an integer array \`nums\` (**0-indexed**). In one operation, you can choose an element of the array and increment it by \`1\`.

- For example, if \`nums = [1,2,3]\`, you can choose to increment \`nums[1]\` to make \`nums = [1,3,3]\`.

Return the **minimum** number of operations needed to make \`nums\` **strictly increasing**.

An array \`nums\` is **strictly increasing** if \`nums[i] < nums[i+1]\` for all \`0 <= i < nums.length - 1\`. An array of length 1 is trivially strictly increasing.`,
  constraints: [
    '1 <= nums.length <= 5000',
    '0 <= nums[i] <= 10^9',
  ],
  examples: [
    {
      input: 'nums = [1,1,1]',
      output: '3',
      explanation: 'Increment index 1 once and index 2 twice: [1,2,3].',
    },
    {
      input: 'nums = [1,5,2,4,1]',
      output: '14',
    },
    {
      input: 'nums = [8]',
      output: '0',
    },
  ],
  hints: [
    'Greedy: for each element, if it is not greater than the previous, set it to prev+1 and add the difference to operations.',
    'For each element, it must be strictly greater than the previous. If `nums[i] <= nums[i-1]`, you need `nums[i-1]+1 - nums[i]` operations to bring it up.',
    `\`\`\`js
let ops = 0;
for (let i = 1; i < nums.length; i++) {
  if (nums[i] <= nums[i-1]) {
    ops += nums[i-1] + 1 - nums[i];
    nums[i] = nums[i-1] + 1;
  }
}
return ops;\`\`\``
  ],
  functionName: 'minOperations',
  params: ['nums'],
  starterCode: {
    javascript: 'function minOperations(nums) {\n  \n}\n',
    python: 'def minOperations(nums):\n    pass\n',
  },
  visibleTests: [
    { args: [[1, 1, 1]], expected: 3 },
    { args: [[1, 5, 2, 4, 1]], expected: 14 },
    { args: [[8]], expected: 0 },
  ],
  hiddenTests: [
    { args: [[1, 2, 3]], expected: 0 },
    { args: [[3, 2, 1]], expected: 6 },
    { args: [[1, 2, 2]], expected: 1 },
    { args: [[5, 5, 5, 5]], expected: 6 },
    { args: [[0, 0, 0]], expected: 3 },
  ],
};
