import type { Problem } from '../types';

export const problem: Problem = {
  id: 'maximum-sum-two-non-overlapping-subarrays',
  title: 'Maximum Sum of Two Non-Overlapping Subarrays',
  difficulty: 'medium',
  tags: ['sliding-window', 'arrays'],
  description: `Given an integer array \`nums\` and two integers \`firstLen\` and \`secondLen\`, return the **maximum sum** of elements in two non-overlapping subarrays with lengths \`firstLen\` and \`secondLen\`.

The array with length \`firstLen\` could occur before or after the array with length \`secondLen\`, but they have to be non-overlapping.`,
  constraints: [
    '1 <= firstLen, secondLen <= 1000',
    '2 <= firstLen + secondLen <= nums.length <= 1000',
    '0 <= nums[i] <= 1000',
  ],
  examples: [
    { input: 'nums = [0,6,5,2,2,5,1,9,4], firstLen = 1, secondLen = 2', output: '20', explanation: 'Subarray of length 1: [9]. Subarray of length 2: [6,5]. 9+11=20.' },
    { input: 'nums = [3,8,1,3,2,1,8,9,0], firstLen = 3, secondLen = 2', output: '29', explanation: '[3,8,1] (sum 12) before [8,9] (sum 17): 12+17=29.' },
  ],
  hints: [
    'Compute prefix sums. Then for each position, track the maximum sum of a firstLen subarray ending before or at that position (maxFirst), and use it to pair with a secondLen subarray starting there.',
    'Also try with firstLen and secondLen swapped (second before first).',
    'Take the maximum of both orderings.',
  ],
  functionName: 'maxSumTwoNoOverlap',
  params: ['nums', 'firstLen', 'secondLen'],
  starterCode: {
    javascript: 'function maxSumTwoNoOverlap(nums, firstLen, secondLen) {\n\n}\n',
    typescript: "function maxSumTwoNoOverlap(nums: number[], firstLen: number, secondLen: number): number {\n\n}",

    python: 'def maxSumTwoNoOverlap(nums, firstLen, secondLen):\n    pass\n',
  },
  visibleTests: [
    { args: [[0, 6, 5, 2, 2, 5, 1, 9, 4], 1, 2], expected: 20 },
    { args: [[3, 8, 1, 3, 2, 1, 8, 9, 0], 3, 2], expected: 29 },
  ],
  hiddenTests: [
    { args: [[1, 1], 1, 1], expected: 2 },
    { args: [[1, 2, 3, 4, 5], 2, 2], expected: 14 },
    { args: [[0, 0, 0, 0, 0], 2, 2], expected: 0 },
  ],
};
