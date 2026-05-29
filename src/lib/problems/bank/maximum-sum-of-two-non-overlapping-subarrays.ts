import type { Problem } from '../types';

export const problem: Problem = {
  id: 'maximum-sum-of-two-non-overlapping-subarrays',
  title: 'Maximum Sum of Two Non-Overlapping Subarrays',
  difficulty: 'medium',
  tags: ['arrays', 'sliding-window'],
  description: `Given an integer array \`nums\` and two integers \`firstLen\` and \`secondLen\`, return the maximum sum of elements in two non-overlapping subarrays with lengths \`firstLen\` and \`secondLen\` respectively.

The subarrays may appear in either order — the subarray of length \`firstLen\` can appear before or after the subarray of length \`secondLen\`.`,
  constraints: [
    '`1 <= firstLen, secondLen <= 1000`',
    '`firstLen + secondLen <= nums.length <= 1000`',
    '`0 <= nums[i] <= 1000`',
  ],
  examples: [
    {
      input: 'nums = [0,6,5,2,2,5,1,9,4], firstLen = 1, secondLen = 2',
      output: '20',
      explanation: 'One subarray of length 1 is [9] and subarray of length 2 is [6,5]. Sum = 9 + 6 + 5 = 20.',
    },
    {
      input: 'nums = [2,1,5,6,0,9,5,0,3,8], firstLen = 4, secondLen = 3',
      output: '31',
      explanation: '[5,6,0,9] (sum 20) and [3,8] are non-overlapping and not correct — correct is [5,6,0,9] (20) and subarray [0,3,8] or similar; actual optimum is 20 + 11 = 31.',
    },
  ],
  hints: [
    'Build prefix sums so any subarray sum can be computed in O(1).',
    'Slide a window of length M across the array; for each position, track the maximum sum of an L-window that appears entirely before the current M-window.',
    'Try both orderings: L before M, and M before L. Return the maximum across both.',
  ],
  functionName: 'maxSumTwoNoOverlap',
  params: ['nums', 'firstLen', 'secondLen'],
  starterCode: {
    javascript: `function maxSumTwoNoOverlap(nums, firstLen, secondLen) {

}`,
    typescript: `function maxSumTwoNoOverlap(nums: number[], firstLen: number, secondLen: number): number {

}`,
    python: `def maxSumTwoNoOverlap(nums, firstLen, secondLen):
    pass`,
  },
  visibleTests: [
    { args: [[0, 6, 5, 2, 2, 5, 1, 9, 4], 1, 2], expected: 20 },
    { args: [[0, 6, 5, 2, 2, 5, 1, 9, 4], 2, 1], expected: 20 },
    { args: [[2, 1, 5, 6, 0, 9, 5, 0, 3, 8], 4, 3], expected: 31 },
  ],
  hiddenTests: [
    { args: [[3, 8, 1, 3, 2, 1, 8, 9, 0], 3, 2], expected: 29 },
    { args: [[1, 2], 1, 1], expected: 3 },
    { args: [[4, 5, 6], 1, 1], expected: 11 },
    { args: [[1, 0, 1], 1, 1], expected: 2 },
    { args: [[10, 1, 2, 10, 10], 2, 1], expected: 30 },
  ],
};
