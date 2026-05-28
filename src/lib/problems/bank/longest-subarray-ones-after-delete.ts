import type { Problem } from '../types';

export const problem: Problem = {
  id: 'longest-subarray-ones-after-delete',
  title: 'Longest Subarray of 1\'s After Deleting One Element',
  difficulty: 'medium',
  tags: ['sliding-window', 'arrays'],
  description: `Given a binary array \`nums\`, you should delete **one element** from it.

Return the **size of the longest non-empty subarray containing only 1's** in the resulting array. Return \`0\` if there is no such subarray.`,
  constraints: ['1 <= nums.length <= 10^5', 'nums[i] is either 0 or 1'],
  examples: [
    {
      input: 'nums = [1,1,0,1]',
      output: '3',
      explanation: 'Delete nums[2]=[0]. The result is [1,1,1] with length 3.',
    },
    {
      input: 'nums = [0,1,1,1,0,1,1,0,1]',
      output: '5',
      explanation: 'Delete nums[4]=[0]. The result is [0,1,1,1,1,1,0,1]. Longest 1s subarray is 5.',
    },
    { input: 'nums = [1,1,1]', output: '2', explanation: 'Must delete one element; result is [1,1].' },
  ],
  hints: [
    'Use a sliding window with at most one 0. Track the window with at most one zero (the deleted element).',
    'When the window has more than one 0, shrink from the left.',
    'The answer is the maximum window size minus 1 (for the deleted element), but since we must delete exactly one, the window of all-1s loses 1.',
  ],
  functionName: 'longestSubarray',
  params: ['nums'],
  starterCode: {
    javascript: 'function longestSubarray(nums) {\n\n}\n',
    typescript: "function longestSubarray(nums: number[]): number {\n\n}",

    python: 'def longestSubarray(nums):\n    pass\n',
  },
  visibleTests: [
    { args: [[1, 1, 0, 1]], expected: 3 },
    { args: [[0, 1, 1, 1, 0, 1, 1, 0, 1]], expected: 5 },
    { args: [[1, 1, 1]], expected: 2 },
  ],
  hiddenTests: [
    { args: [[0, 0, 0]], expected: 0 },
    { args: [[1, 0, 1, 1, 0, 1]], expected: 3 },
    { args: [[1]], expected: 0 },
    { args: [[0, 1]], expected: 1 },
  ],
};
