import type { Problem } from '../types';

export const problem: Problem = {
  id: 'longest-subarray-of-1s-after-deleting-one-element',
  title: 'Longest Subarray of 1\'s After Deleting One Element',
  difficulty: 'medium',
  tags: ['sliding-window', 'arrays'],
  description: `Given a binary array \`nums\`, you should delete one element from it.

Return the size of the longest non-empty subarray containing only \`1\`'s in the resulting array. Return \`0\` if there is no such subarray.`,
  constraints: [
    '1 <= nums.length <= 10^5',
    'nums[i] is either 0 or 1.',
  ],
  examples: [
    {
      input: 'nums = [1,1,1,0,1,1,0,1]',
      output: '5',
      explanation: 'After deleting the element at index 3, the array becomes [1,1,1,1,1,0,1] and the longest subarray of 1s has length 5.',
    },
    {
      input: 'nums = [0,1,1,1,0,1,1,0,1]',
      output: '5',
      explanation: 'After deleting the element at index 4, the answer is 5.',
    },
  ],
  hints: [
    'Use a sliding window that contains at most one 0.',
    'The valid window size minus 1 (for the mandatory deletion) gives the candidate length.',
    'Expand the right pointer freely; shrink the left pointer whenever the window has more than one 0.',
  ],
  functionName: 'longestSubarray',
  params: ['nums'],
  starterCode: {
    javascript: 'function longestSubarray(nums) {\n\n}\n',
    python: 'def longestSubarray(nums):\n    pass\n',
  },
  visibleTests: [
    { args: [[1, 1, 1, 0, 1, 1, 0, 1]], expected: 5 },
    { args: [[0, 1, 1, 1, 0, 1, 1, 0, 1]], expected: 5 },
  ],
  hiddenTests: [
    { args: [[1, 1, 1]], expected: 2 },
    { args: [[0, 0, 0]], expected: 0 },
    { args: [[1, 0, 1, 1]], expected: 3 },
    { args: [[1, 1, 0, 0, 1]], expected: 2 },
  ],
};
