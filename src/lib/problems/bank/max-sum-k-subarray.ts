import type { Problem } from '../types';

export const problem: Problem = {
  id: 'max-sum-k-subarray',
  title: 'Maximum Sum of Subarray of Size K',
  difficulty: 'medium',
  tags: ['sliding-window', 'arrays'],
  description: `Given an array of integers \`nums\` and an integer \`k\`, find the **maximum sum** of any contiguous subarray of size exactly \`k\`.`,
  examples: [
    { input: 'nums = [2,1,5,1,3,2], k = 3', output: '9', explanation: 'Subarray [5,1,3] has sum 9.' },
    { input: 'nums = [2,3,4,1,5], k = 2', output: '7', explanation: 'Subarray [3,4] has sum 7.' },
  ],
  constraints: [
    '1 <= k <= nums.length <= 10^5',
    '-10^4 <= nums[i] <= 10^4',
  ],
  functionName: 'maxSumKSubarray',
  params: ['nums', 'k'],
  starterCode: {
    javascript: 'function maxSumKSubarray(nums, k) {\n  // your code here\n}\n',
    python: 'def maxSumKSubarray(nums, k):\n    # your code here\n    pass\n',
  },
  hints: [
    'Compute the sum of the first k elements as the initial window sum.',
    'Slide the window right: add nums[i] and subtract nums[i-k] to update the sum in O(1) per step.',
    'Track the maximum sum seen across all windows.',
  ],
  visibleTests: [
    { args: [[2, 1, 5, 1, 3, 2], 3], expected: 9 },
    { args: [[2, 3, 4, 1, 5], 2], expected: 7 },
    { args: [[1, 2, 3, 4, 5], 1], expected: 5 },
  ],
  hiddenTests: [
    { args: [[1], 1], expected: 1 },
    { args: [[-1, -2, -3], 2], expected: -3 },
    { args: [[10, -5, 2, 3, -1, 8], 3], expected: 10 },
    { args: [[1, 2, 3, 4, 5], 5], expected: 15 },
  ],
};
