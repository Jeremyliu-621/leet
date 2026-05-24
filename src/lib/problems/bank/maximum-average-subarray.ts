import type { Problem } from '../types';

export const problem: Problem = {
  id: 'maximum-average-subarray',
  title: 'Maximum Average Subarray I',
  difficulty: 'easy',
  tags: ['sliding-window'],
  description: `You are given an integer array \`nums\` consisting of \`n\` elements, and an integer \`k\`.

Find a contiguous subarray whose **length is equal to** \`k\` that has the maximum average value and return this value. Any answer with a calculation error less than \`10^-5\` will be accepted.`,
  constraints: [
    'n == nums.length',
    '1 <= k <= n <= 10^5',
    '-10^4 <= nums[i] <= 10^4',
  ],
  examples: [
    { input: 'nums = [1,12,-5,-6,50,3], k = 4', output: '12.75', explanation: 'Maximum average is (12 - 5 - 6 + 50) / 4 = 51 / 4 = 12.75.' },
    { input: 'nums = [5], k = 1', output: '5.0' },
  ],
  hints: [
    'Use a sliding window of size k. Track the sum, slide it one step at a time, and keep the max sum found. Divide by k at the end.',
  ],
  functionName: 'findMaxAverage',
  params: ['nums', 'k'],
  starterCode: {
    javascript: 'function findMaxAverage(nums, k) {\n  \n}\n',
    python: 'def findMaxAverage(nums, k):\n    pass\n',
  },
  visibleTests: [
    { args: [[1, 12, -5, -6, 50, 3], 4], expected: 12.75 },
    { args: [[5], 1], expected: 5.0 },
    { args: [[0, 4, 0, 3, 2], 1], expected: 4.0 },
  ],
  hiddenTests: [
    { args: [[1, 2, 3, 4, 5], 2], expected: 4.5 },
    { args: [[-1, -2, -3, -4], 2], expected: -1.5 },
    { args: [[3, 3, 3, 3], 4], expected: 3.0 },
    { args: [[4, 2, 1, 3, 3], 2], expected: 3.0 },
  ],
};
