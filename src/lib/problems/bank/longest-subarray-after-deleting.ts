import type { Problem } from '../types';

export const problem: Problem = {
  id: 'longest-subarray-after-deleting',
  title: 'Longest Subarray of 1\'s After Deleting One Element',
  difficulty: 'medium',
  tags: ['sliding-window'],
  description: `Given a binary array \`nums\`, you should delete **one element** from it.

Return the size of the **longest non-empty subarray containing only 1's** in the resulting array. Return \`0\` if there is no such subarray.`,
  constraints: [
    '1 <= nums.length <= 10^5',
    'nums[i] is either 0 or 1',
  ],
  examples: [
    {
      input: 'nums = [1,1,0,1]',
      output: '3',
      explanation: 'Delete the 0 to get [1,1,1]. Longest subarray of 1s is length 3.',
    },
    {
      input: 'nums = [0,1,1,1,0,1,1,0,1]',
      output: '5',
      explanation: 'Delete the 0 at index 4 to get [0,1,1,1,1,1,0,1]. Longest is 5.',
    },
    {
      input: 'nums = [1,1,1]',
      output: '2',
      explanation: 'You must delete one element. Deleting any 1 gives [1,1] of length 2.',
    },
  ],
  hints: [
    'Use a sliding window where you track the number of zeros in the current window.',
    'The window can contain at most 1 zero (since we delete one element).',
    'The answer is window_size - 1 (subtract the deleted element).',
  ],
  functionName: 'longestSubarray',
  params: ['nums'],
  starterCode: {
    javascript: `function longestSubarray(nums) {
  // Return longest subarray of 1s after deleting exactly one element
}`,
    typescript: "function longestSubarray(nums: number[]): number {\n  // Return longest subarray of 1s after deleting exactly one element\n}",

    python: `def longestSubarray(nums):
    # Return longest subarray of 1s after deleting exactly one element
    pass`,
  },
  visibleTests: [
    { args: [[1, 1, 0, 1]], expected: 3 },
    { args: [[0, 1, 1, 1, 0, 1, 1, 0, 1]], expected: 5 },
    { args: [[1, 1, 1]], expected: 2 },
  ],
  hiddenTests: [
    { args: [[0, 0, 0]], expected: 0 },
    { args: [[1, 0, 1, 1, 0]], expected: 3 },
    { args: [[1, 1, 1, 1]], expected: 3 },
    { args: [[0, 1]], expected: 1 },
  ],
};
