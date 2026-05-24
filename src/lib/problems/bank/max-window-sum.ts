import type { Problem } from '../types';

export const problem: Problem = {
  id: 'max-window-sum',
  title: 'Maximum Window Sum',
  difficulty: 'easy',
  tags: ['sliding-window'],
  description: `Given an integer array \`nums\` and a positive integer \`k\`, consider every contiguous block of *exactly* \`k\` elements.

Return the **largest sum** among all such blocks. A sliding window of width \`k\` can compute this efficiently: as the window moves one step right, subtract the element leaving and add the element entering.

You may assume \`k\` is at least \`1\` and never larger than \`nums.length\`.`,
  constraints: [
    '1 <= k <= nums.length <= 1000',
    'All values in nums are integers.',
    '-10000 <= nums[i] <= 10000',
  ],
  examples: [
    {
      input: 'nums = [1,2,3,4], k = 2',
      output: '7',
      explanation: 'The block [3,4] has the largest sum, 7.',
    },
    {
      input: 'nums = [5,5,5], k = 3',
      output: '15',
      explanation: 'The only block of width 3 sums to 15.',
    },
    {
      input: 'nums = [-1,-2,-3], k = 1',
      output: '-1',
    },
  ],
  functionName: 'maxWindowSum',
  params: ['nums', 'k'],
  starterCode: {
    javascript: 'function maxWindowSum(nums, k) {\n  // your code here\n}\n',
    python: 'def maxWindowSum(nums, k):\n    # your code here\n    pass\n',
  },
  visibleTests: [
    { args: [[1, 2, 3, 4], 2], expected: 7 },
    { args: [[5, 5, 5], 3], expected: 15 },
    { args: [[-1, -2, -3], 1], expected: -1 },
  ],
  hiddenTests: [
    { args: [[10], 1], expected: 10 },
    { args: [[2, 1, 5, 1, 3, 2], 3], expected: 9 },
    { args: [[-5, -1, -3, -2], 2], expected: -4 },
    { args: [[0, 0, 0, 0], 2], expected: 0 },
    { args: [[100, -100, 100, -100], 2], expected: 0 },
    { args: [[1, 2, 3, 4, 5], 5], expected: 15 },
  ],
  hints: [
    'Recomputing the sum of each window from scratch is `O(n · k)` — most of that work is duplicated, because adjacent windows overlap in `k - 1` elements.',
    'Compute the sum of the **first** window (`nums[0]` through `nums[k - 1]`) once and call it the running `windowSum`. That is also your initial answer.',
    'Slide the window one step at a time: `windowSum += nums[i] - nums[i - k]`, then update the best with `Math.max`. The whole pass is `O(n)` time and `O(1)` extra space — handle negative numbers by *not* initialising the best to `0`.',
  ],
};
