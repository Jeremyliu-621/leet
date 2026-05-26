import type { Problem } from '../types';

export const problem: Problem = {
  id: 'find-subarrays-with-equal-sum',
  title: 'Find Subarrays With Equal Sum',
  difficulty: 'easy',
  tags: ['arrays', 'hash-map'],
  description: `Given a **0-indexed** integer array \`nums\`, determine whether there exist **two** subarrays of length \`2\` with **equal** sum. Note that the two subarrays must begin at **different** indices.

Return \`true\` if these subarrays exist, and \`false\` otherwise.`,
  constraints: [
    '2 <= nums.length <= 1000',
    '-10^9 <= nums[i] <= 10^9',
  ],
  examples: [
    {
      input: 'nums = [4,2,4]',
      output: 'true',
      explanation: 'The subarrays starting at index 0 and 2 have the same sum of 6.',
    },
    {
      input: 'nums = [1,2,3,4,5]',
      output: 'false',
      explanation: 'No two distinct subarrays of length 2 have equal sums.',
    },
    {
      input: 'nums = [0,0,0]',
      output: 'true',
      explanation: 'The subarrays [0,0] starting at indices 0 and 1 both have sum 0.',
    },
  ],
  hints: [
    'Compute the sum of every consecutive pair of elements.',
    'Use a hash set to track sums you have already seen.',
    'If a sum repeats, return true immediately.',
  ],
  functionName: 'findSubarrays',
  params: ['nums'],
  starterCode: {
    javascript: `function findSubarrays(nums) {

}`,
    python: `def findSubarrays(nums):
    pass`,
  },
  visibleTests: [
    { args: [[4, 2, 4]], expected: true },
    { args: [[1, 2, 3, 4, 5]], expected: false },
    { args: [[0, 0, 0]], expected: true },
  ],
  hiddenTests: [
    { args: [[1, 1]], expected: false },
    { args: [[1, 2, 1, 2]], expected: true },
    { args: [[-1, -2, 3, -1, -2]], expected: true },
    { args: [[5, 10, 15, 20]], expected: false },
    { args: [[1000000000, -1000000000, 1000000000, -1000000000]], expected: true },
    { args: [[3, 3, 3]], expected: true },
  ],
};
