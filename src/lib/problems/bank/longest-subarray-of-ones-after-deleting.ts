import type { Problem } from '../types';

export const problem: Problem = {
  id: 'longest-subarray-of-ones-after-deleting',
  title: 'Longest Subarray of 1\'s After Deleting One Element',
  difficulty: 'medium',
  tags: ['sliding-window', 'arrays'],
  description: `Given a binary array \`nums\`, you should delete one element from it.

Return the size of the longest non-empty subarray containing only \`1\`'s in the resulting array. Return \`0\` if there is no such subarray.`,
  constraints: [
    '1 <= nums.length <= 10^5',
    'nums[i] is either 0 or 1',
  ],
  examples: [
    {
      input: 'nums = [1,1,0,1]',
      output: '3',
      explanation: 'Delete the zero at index 2. Then nums = [1,1,1], which has 3 ones.',
    },
    {
      input: 'nums = [0,1,1,1,0,1,1,0,1]',
      output: '5',
      explanation: 'Delete the zero at index 4. Then nums becomes [0,1,1,1,1,1,0,1], longest subarray of 1s = 5.',
    },
    {
      input: 'nums = [1,1,1]',
      output: '2',
      explanation: 'You must delete one element. So delete any 1, leaving [1,1], length 2.',
    },
  ],
  hints: [
    'Use a sliding window that allows at most one 0 in the window.',
    'When the window has more than one 0, shrink from the left.',
    'The answer is the maximum window size minus 1 (since we delete the zero inside, or any element if no zeros).',
  ],
  functionName: 'longestSubarray',
  params: ['nums'],
  starterCode: {
    javascript: `function longestSubarray(nums) {

}`,
    python: `def longestSubarray(nums):
    pass`,
  },
  visibleTests: [
    { args: [[1, 1, 0, 1]], expected: 3 },
    { args: [[0, 1, 1, 1, 0, 1, 1, 0, 1]], expected: 5 },
    { args: [[1, 1, 1]], expected: 2 },
  ],
  hiddenTests: [
    { args: [[1]], expected: 0 },
    { args: [[0]], expected: 0 },
    { args: [[1, 0, 1]], expected: 2 },
    { args: [[1, 1, 0, 0, 1, 1, 1]], expected: 3 },
  ],
};
