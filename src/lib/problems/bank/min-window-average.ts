import type { Problem } from '../types';

export const problem: Problem = {
  id: 'min-window-average',
  title: 'Smallest Window Sum',
  difficulty: 'easy',
  tags: ['sliding-window'],
  description:
    'Given an integer array nums and a positive integer k, look at every contiguous block of exactly k elements.\n\nReturn the smallest sum among all such blocks. As with the maximum version, a sliding window of width k computes each block sum in constant time after the first.\n\nYou may assume k is at least 1 and never larger than nums.length.',
  constraints: [
    '1 <= k <= nums.length <= 1000',
    'All values in nums are integers.',
    '-10000 <= nums[i] <= 10000',
  ],
  examples: [
    {
      input: 'nums = [4,2,1,7], k = 2',
      output: '3',
      explanation: 'The block [2,1] has the smallest sum, 3.',
    },
    {
      input: 'nums = [3,3,3], k = 3',
      output: '9',
      explanation: 'The only block of width 3 sums to 9.',
    },
    {
      input: 'nums = [9,1,9], k = 1',
      output: '1',
    },
  ],
  hints: [
    'A naive approach recomputes each window sum from scratch — O(n·k). How can you update the window sum in O(1) when you slide one position to the right?',
    'Compute the sum of the first `k` elements. Then for each new position, subtract the element leaving the left edge (`nums[i - k]`) and add the element entering the right edge (`nums[i]`). Track the running minimum.',
    '`let win = nums.slice(0, k).reduce((a, b) => a + b, 0); let min = win; for (let i = k; i < nums.length; i++) { win += nums[i] - nums[i - k]; if (win < min) min = win; } return min;`',
  ],
  functionName: 'minWindowSum',
  params: ['nums', 'k'],
  starterCode: {
    javascript: 'function minWindowSum(nums, k) {\n  // your code here\n}\n',
    python: 'def minWindowSum(nums, k):\n    # your code here\n    pass\n',
  },
  visibleTests: [
    { args: [[4, 2, 1, 7], 2], expected: 3 },
    { args: [[3, 3, 3], 3], expected: 9 },
    { args: [[9, 1, 9], 1], expected: 1 },
  ],
  hiddenTests: [
    { args: [[8], 1], expected: 8 },
    { args: [[-1, -2, -3, -4], 2], expected: -7 },
    { args: [[5, 1, 5, 1, 5], 2], expected: 6 },
    { args: [[0, 0, 0], 2], expected: 0 },
    { args: [[10, 20, 30, 5], 3], expected: 55 },
    { args: [[-5, 5, -5, 5], 4], expected: 0 },
  ],
};
