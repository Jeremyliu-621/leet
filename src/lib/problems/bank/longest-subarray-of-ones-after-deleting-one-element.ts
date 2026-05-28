import type { Problem } from '../types';

export const problem: Problem = {
  id: 'longest-subarray-of-ones-after-deleting-one-element',
  title: 'Longest Subarray of 1\'s After Deleting One Element',
  difficulty: 'medium',
  tags: ['arrays', 'sliding-window'],
  description: `Given a binary array \`nums\`, you should delete **one** element from it.

Return the size of the **longest non-empty subarray** containing only \`1\`'s in the resulting array. Return \`0\` if no such subarray exists.`,
  constraints: [
    '1 <= nums.length <= 10^5',
    'nums[i] is either 0 or 1.',
  ],
  examples: [
    {
      input: 'nums = [1,1,0,1]',
      output: '3',
      explanation: 'Delete nums[2]. The resulting array is [1,1,1] which has length 3.',
    },
    {
      input: 'nums = [0,1,1,1,0,1,1,0,1]',
      output: '5',
      explanation: 'Delete nums[4]. The result [0,1,1,1,1,1,0,1] contains a subarray of 5 ones.',
    },
    {
      input: 'nums = [1,1,1]',
      output: '2',
      explanation: 'You must delete one element. Best is to delete any 1, leaving [1,1].',
    },
  ],
  hints: [
    'Since we must delete exactly one element, the answer is the length of the best window minus 1.',
    'Use a sliding window that allows at most one 0 inside.',
    'The answer is the max window size minus 1.',
  ],
  functionName: 'longestSubarray',
  params: ['nums'],
  starterCode: {
    javascript: 'function longestSubarray(nums) {\n  \n}\n',
    python: 'def longestSubarray(nums):\n    pass\n',
  },
  visibleTests: [
    { args: [[1, 1, 0, 1]], expected: 3 },
    { args: [[0, 1, 1, 1, 0, 1, 1, 0, 1]], expected: 5 },
    { args: [[1, 1, 1]], expected: 2 },
  ],
  hiddenTests: [
    { args: [[0]], expected: 0 },
    { args: [[1]], expected: 0 },
    { args: [[0, 0, 0]], expected: 0 },
    { args: [[1, 0, 1, 0, 1]], expected: 2 },
    { args: [[1, 1, 1, 0, 1, 1, 1, 1]], expected: 7 },
  ],
};
