import type { Problem } from '../types';

export const problem: Problem = {
  id: 'find-the-longest-equal-subarray',
  title: 'Find the Longest Equal Subarray',
  difficulty: 'medium',
  tags: ['arrays', 'sliding-window', 'hash-map'],
  description: `You are given a **0-indexed** integer array \`nums\` and a positive integer \`k\`.

A subarray is called **equal** if all of its elements are equal. Note that an empty subarray is an equal subarray.

Return the **length of the longest equal subarray** after deleting **at most** \`k\` elements from \`nums\`.`,
  constraints: [
    '1 <= nums.length <= 10^5',
    '1 <= nums[i] <= nums.length',
    '0 <= k < nums.length',
  ],
  examples: [
    {
      input: 'nums = [1,3,2,3,1,3], k = 3',
      output: '3',
      explanation: 'Delete indices 0, 2, and 4 to get [3,3,3]. The longest equal subarray has length 3.',
    },
    {
      input: 'nums = [1,1,2,2,1,1], k = 2',
      output: '4',
      explanation: 'Delete indices 2 and 3 to get [1,1,1,1]. The longest equal subarray has length 4.',
    },
  ],
  hints: [
    'Group positions of each value. For a fixed value v with positions p[0] < p[1] < ... < p[m-1], find the longest window p[i..j] where (p[j] - p[i] + 1) - (j - i + 1) <= k.',
    'The expression (p[j] - p[i] + 1) - (j - i + 1) counts deletions needed: all elements in [p[i], p[j]] except the (j-i+1) occurrences of v.',
    'Use a sliding window on the positions array for each value.',
  ],
  functionName: 'longestEqualSubarray',
  params: ['nums', 'k'],
  starterCode: {
    javascript: 'function longestEqualSubarray(nums, k) {\n  \n}\n',
    python: 'def longestEqualSubarray(nums, k):\n    pass\n',
  },
  visibleTests: [
    { args: [[1, 3, 2, 3, 1, 3], 3], expected: 3 },
    { args: [[1, 1, 2, 2, 1, 1], 2], expected: 4 },
    { args: [[1], 0], expected: 1 },
  ],
  hiddenTests: [
    { args: [[1, 1, 1], 0], expected: 3 },
    { args: [[1, 2, 1, 2], 1], expected: 2 },
    { args: [[1, 2, 3, 4, 5], 4], expected: 1 },
    { args: [[2, 2, 2, 2, 2], 0], expected: 5 },
    { args: [[1, 2, 1, 2, 1], 2], expected: 3 },
  ],
};
