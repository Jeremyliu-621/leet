import type { Problem } from '../types';

export const problem: Problem = {
  id: 'subarrays-with-k-different-integers',
  title: 'Subarrays with K Different Integers',
  difficulty: 'hard',
  tags: ['sliding-window', 'hash-map'],
  description: `Given an integer array \`nums\` and an integer \`k\`, return the number of **good** subarrays of \`nums\`. A good array is an array where the number of different integers in that array is exactly \`k\`.`,
  constraints: [
    '`1 <= nums.length <= 2 * 10^4`',
    '`1 <= nums[i] <= nums.length`',
    '`1 <= k <= nums.length`',
  ],
  examples: [
    {
      input: 'nums = [1,2,1,2,3], k = 2',
      output: '7',
      explanation: 'Subarrays with exactly 2 different integers: [1,2], [2,1], [1,2], [2,3], [1,2,1], [2,1,2], [1,2,1,2].',
    },
    {
      input: 'nums = [1,2,1,3,4], k = 3',
      output: '3',
      explanation: 'Subarrays with exactly 3 different integers: [1,2,1,3], [2,1,3], [1,3,4].',
    },
  ],
  hints: [
    'Use the identity: exactly(k) = atMost(k) - atMost(k-1).',
    'atMost(k): sliding window counting subarrays with at most k distinct integers. When the window has more than k distinct values, shrink from the left.',
    'For each right pointer position, add (right - left + 1) to the count — these are all valid subarrays ending at right.',
  ],
  functionName: 'subarraysWithKDistinct',
  params: ['nums', 'k'],
  starterCode: {
    javascript: `function subarraysWithKDistinct(nums, k) {

}`,
    python: `def subarraysWithKDistinct(nums, k):
    pass`,
  },
  visibleTests: [
    { args: [[1, 2, 1, 2, 3], 2], expected: 7 },
    { args: [[1, 2, 1, 3, 4], 3], expected: 3 },
    { args: [[1, 2, 1, 1, 1], 2], expected: 7 },
  ],
  hiddenTests: [
    { args: [[1], 1], expected: 1 },
    { args: [[1, 2, 3, 4], 2], expected: 3 },
    { args: [[1, 1, 2, 2], 2], expected: 4 },
    { args: [[1, 2, 3, 2, 3], 2], expected: 7 },
  ],
};
