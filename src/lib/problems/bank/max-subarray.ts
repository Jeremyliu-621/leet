import type { Problem } from '../types';

export const problem: Problem = {
  id: 'max-subarray',
  title: 'Maximum Subarray Sum',
  difficulty: 'easy',
  tags: ['arrays'],
  description: `Given an integer array \`nums\`, find the contiguous subarray (containing at least one element) that has the largest sum, and return that sum.

A single element counts as a valid subarray, so the answer is at least the largest element in the array.

**Kadane's algorithm** solves this in a single pass: keep a running "current sum" and reset it to the current element whenever continuing would make it smaller.`,
  constraints: [
    '1 <= nums.length <= 1000',
    '-10000 <= nums[i] <= 10000',
    'All values in nums are integers.',
  ],
  examples: [
    {
      input: 'nums = [-2,1,-3,4,-1,2,1,-5,4]',
      output: '6',
      explanation: 'The subarray [4,-1,2,1] has the largest sum = 6.',
    },
    {
      input: 'nums = [1]',
      output: '1',
      explanation: 'Only one element, so the answer is 1.',
    },
    {
      input: 'nums = [5,4,-1,7,8]',
      output: '23',
      explanation: 'The entire array sums to 23.',
    },
  ],
  hints: [
    'Think about how the "best subarray ending at position i" relates to the "best subarray ending at position i-1". Can you build on previous results?',
    'Kadane\'s insight: the best subarray ending at index `i` is either `nums[i]` alone (start fresh) or `nums[i]` appended to whatever was best ending at `i-1`. Take the larger of the two.',
    '`let cur = nums[0], best = nums[0]; for (let i = 1; i < nums.length; i++) { cur = Math.max(nums[i], cur + nums[i]); best = Math.max(best, cur); } return best;`',
  ],
  functionName: 'maxSubarraySum',
  params: ['nums'],
  starterCode: {
    javascript: 'function maxSubarraySum(nums) {\n  // your code here\n}\n',
    python: 'def maxSubarraySum(nums):\n    # your code here\n    pass\n',
  },
  visibleTests: [
    { args: [[-2, 1, -3, 4, -1, 2, 1, -5, 4]], expected: 6 },
    { args: [[1]], expected: 1 },
    { args: [[5, 4, -1, 7, 8]], expected: 23 },
  ],
  hiddenTests: [
    { args: [[-1, -2, -3]], expected: -1 },
    { args: [[-2, -1]], expected: -1 },
    { args: [[0, -1, 2]], expected: 2 },
    { args: [[1, 2, 3, 4, 5]], expected: 15 },
    { args: [[3, -2, 5]], expected: 6 },
    { args: [[-1, 5, -2, 3, -1, 4]], expected: 9 },
  ],
};
