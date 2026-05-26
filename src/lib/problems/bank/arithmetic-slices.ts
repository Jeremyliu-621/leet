import type { Problem } from '../types';

export const problem: Problem = {
  id: 'arithmetic-slices',
  title: 'Arithmetic Slices',
  difficulty: 'medium',
  tags: ['arrays', 'dynamic-programming'],
  description: `An integer array is called **arithmetic** if it consists of **at least three elements** and if the difference between any two consecutive elements is the same.

- For example, \`[1,3,5,7,9]\`, \`[7,7,7,7]\`, and \`[3,-1,-5,-9]\` are arithmetic sequences.

Given an integer array \`nums\`, return the number of arithmetic **subarrays** of \`nums\`.

A **subarray** is a contiguous subsequence of the array.`,
  constraints: [
    '`1 <= nums.length <= 5000`',
    '`-1000 <= nums[i] <= 1000`',
  ],
  examples: [
    {
      input: 'nums = [1,2,3,4]',
      output: '3',
      explanation: '[1,2,3], [2,3,4], [1,2,3,4] are the 3 arithmetic slices.',
    },
    {
      input: 'nums = [1]',
      output: '0',
    },
  ],
  hints: [
    'Use DP. Let dp[i] = number of arithmetic slices ending at index i. If nums[i]-nums[i-1]==nums[i-1]-nums[i-2], then dp[i] = dp[i-1]+1, else dp[i]=0. Sum all dp[i].',
    'Alternatively, use a running counter: if the current triple is arithmetic, increment a local counter `cur` and add it to the total; otherwise reset `cur` to 0.',
    'let r=0,c=0;for(let i=2;i<nums.length;i++){if(nums[i]-nums[i-1]===nums[i-1]-nums[i-2])r+=++c;else c=0;}return r;',
  ],
  functionName: 'numberOfArithmeticSlices',
  params: ['nums'],
  starterCode: {
    javascript: 'function numberOfArithmeticSlices(nums) {\n  \n}\n',
    python: 'def numberOfArithmeticSlices(nums):\n    pass\n',
  },
  visibleTests: [
    { args: [[1, 2, 3, 4]], expected: 3 },
    { args: [[1]], expected: 0 },
    { args: [[1, 2, 3, 8, 9, 10]], expected: 2 },
  ],
  hiddenTests: [
    { args: [[1, 1, 1]], expected: 1 },
    { args: [[1, 2, 3, 4, 5]], expected: 6 },
    { args: [[1, 3, 5, 7, 9]], expected: 6 },
    { args: [[1, 2, 4, 8]], expected: 0 },
  ],
};
