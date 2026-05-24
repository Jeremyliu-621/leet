import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-size-subarray-sum',
  title: 'Minimum Size Subarray Sum',
  difficulty: 'medium',
  tags: ['sliding-window'],
  description: `Given an array of positive integers \`nums\` and a positive integer \`target\`, return the **minimal length** of a subarray whose sum is greater than or equal to \`target\`. If there is no such subarray, return \`0\` instead.`,
  constraints: [
    '1 <= target <= 10^9',
    '1 <= nums.length <= 10^5',
    '1 <= nums[i] <= 10^4',
  ],
  examples: [
    {
      input: 'target = 7, nums = [2,3,1,2,4,3]',
      output: '2',
      explanation: 'The subarray [4,3] has the minimal length under the problem constraint.',
    },
    {
      input: 'target = 4, nums = [1,4,4]',
      output: '1',
    },
    {
      input: 'target = 11, nums = [1,1,1,1,1,1,1,1]',
      output: '0',
    },
  ],
  hints: [
    'Use a sliding window with two pointers (left and right). Expand right to grow the window sum, then shrink left when the sum meets the target.',
    'Each time the window sum >= target, record the window length and try shrinking.',
    'The answer is the minimum window length across all valid windows, or 0 if none found.',
  ],
  functionName: 'minSubArrayLen',
  params: ['target', 'nums'],
  starterCode: {
    javascript: 'function minSubArrayLen(target, nums) {\n  \n}\n',
    python: 'def minSubArrayLen(target, nums):\n    pass\n',
  },
  visibleTests: [
    { args: [7, [2, 3, 1, 2, 4, 3]], expected: 2 },
    { args: [4, [1, 4, 4]], expected: 1 },
    { args: [11, [1, 1, 1, 1, 1, 1, 1, 1]], expected: 0 },
  ],
  hiddenTests: [
    { args: [15, [1, 2, 3, 4, 5]], expected: 5 },
    { args: [6, [2, 3, 1, 2, 4, 3]], expected: 2 },
    { args: [7, [1, 2, 3, 4, 5]], expected: 2 },
    { args: [100, [1, 2, 3]], expected: 0 },
  ],
};
