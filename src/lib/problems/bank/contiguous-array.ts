import type { Problem } from '../types';

export const problem: Problem = {
  id: 'contiguous-array',
  title: 'Contiguous Array',
  difficulty: 'medium',
  tags: ['arrays', 'hash-map'],
  description: `Given a binary array \`nums\`, return the maximum length of a contiguous subarray with an equal number of \`0\` and \`1\`.`,
  constraints: [
    '`1 <= nums.length <= 10^5`',
    '`nums[i]` is either `0` or `1`.',
  ],
  examples: [
    { input: 'nums = [0,1]', output: '2', explanation: '[0, 1] is the longest contiguous subarray.' },
    { input: 'nums = [0,1,0]', output: '2', explanation: '[0, 1] (or [1, 0]) is the longest.' },
  ],
  hints: [
    'Treat 0 as -1. Compute a running prefix sum.',
    'If you see the same prefix sum at indices i and j, the subarray (i, j] has equal 0s and 1s.',
    'Use a hash map to store the first occurrence of each prefix sum.',
  ],
  functionName: 'findMaxLength',
  params: ['nums'],
  starterCode: {
    javascript: 'function findMaxLength(nums) {\n  \n}\n',
    python: 'def findMaxLength(nums):\n    pass\n',
  },
  visibleTests: [
    { args: [[0, 1]], expected: 2 },
    { args: [[0, 1, 0]], expected: 2 },
  ],
  hiddenTests: [
    { args: [[0, 0, 1, 0, 0, 0, 1, 1]], expected: 6 },
    { args: [[0, 1, 1, 0, 1, 1, 1, 0]], expected: 4 },
    { args: [[1]], expected: 0 },
    { args: [[0, 0, 0, 1, 1, 1]], expected: 6 },
    { args: [[0, 1, 0, 1, 0, 1, 1]], expected: 6 },
  ],
};
