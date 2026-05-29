import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-operations-to-make-array-increasing',
  title: 'Minimum Operations to Make the Array Increasing',
  difficulty: 'easy',
  tags: ['arrays'],
  description: `You are given a 0-indexed array \`nums\` consisting of non-negative integers.

In one operation, you can choose any index and add \`1\` to the element at that index. Return the **minimum number of operations** needed to make \`nums\` strictly increasing.

An array is **strictly increasing** if \`nums[i] < nums[i+1]\` for every \`0 <= i < nums.length - 1\`. An array of length 1 is trivially strictly increasing.`,
  constraints: [
    '1 <= nums.length <= 5000',
    '0 <= nums[i] <= 10^4',
  ],
  examples: [
    {
      input: 'nums = [1,1,1]',
      output: '3',
      explanation: 'We must make the array strictly increasing. One valid result is [1,2,3], requiring 0+1+2 = 3 total increment operations.',
    },
    {
      input: 'nums = [1,2,3]',
      output: '0',
      explanation: 'The array is already strictly increasing, so no operations are needed.',
    },
    {
      input: 'nums = [2,1]',
      output: '2',
      explanation: 'nums[1] must exceed nums[0]=2, so the minimum valid value is 3. We need 3-1 = 2 operations.',
    },
  ],
  hints: [
    'Scan left to right. For each index i, the element must be strictly greater than the previous element.',
    'The minimum valid value for nums[i] is max(nums[i], prev + 1) where prev is the final value assigned to nums[i-1].',
    'Count how many total increments are needed: if nums[i] < prev + 1, add (prev + 1 - nums[i]) to the answer and update nums[i] to prev + 1.',
  ],
  functionName: 'minOperations',
  params: ['nums'],
  starterCode: {
    javascript: 'function minOperations(nums) {\n\n}\n',
    typescript: 'function minOperations(nums: number[]): number {\n\n}',
    python: 'def minOperations(nums):\n    pass\n',
  },
  visibleTests: [
    { args: [[1, 1, 1]], expected: 3 },
    { args: [[1, 2, 3]], expected: 0 },
  ],
  hiddenTests: [
    { args: [[2, 1]], expected: 2 },
    { args: [[3, 1, 2]], expected: 6 },
    { args: [[5, 5, 5, 5]], expected: 6 },
    { args: [[1, 5, 2, 4]], expected: 7 },
    { args: [[1]], expected: 0 },
  ],
};
