import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-subarrays-with-more-ones-than-zeros',
  title: 'Count Subarrays With More Ones Than Zeros',
  difficulty: 'medium',
  tags: ['arrays', 'binary-search'],
  description: `You are given a binary array \`nums\` containing only \`0\`s and \`1\`s.

Return the number of subarrays that have **strictly more** \`1\`s than \`0\`s.

Since the answer may be very large, return it modulo \`10^9 + 7\`.`,
  constraints: [
    '1 <= nums.length <= 10^5',
    '0 <= nums[i] <= 1',
  ],
  examples: [
    {
      input: 'nums = [0,1,1,0,1]',
      output: '9',
      explanation: 'Subarrays with more 1s than 0s: [1](index 1), [1](index 2), [1,1](indices 1-2), [0,1,1](indices 0-2), [1](index 4), [1,1,0,1](indices 1-4), [0,1](indices 3-4) are some of the valid ones. Total is 9.',
    },
    {
      input: 'nums = [0]',
      output: '0',
      explanation: 'No subarray has more 1s than 0s.',
    },
    {
      input: 'nums = [1]',
      output: '1',
      explanation: 'The only subarray [1] has one 1 and zero 0s.',
    },
  ],
  hints: [
    'Map 0 → -1, keep 1 → +1. Now count subarrays with positive sum.',
    'Use prefix sums: subarray [i+1..j] has positive sum iff prefix[j] > prefix[i].',
    'For each j, count how many previous prefix values are strictly less than prefix[j].',
    'Use a Binary Indexed Tree (Fenwick tree) over the offset prefix sum range.',
  ],
  functionName: 'subarraysWithMoreZerosThanOnes',
  params: ['nums'],
  starterCode: {
    javascript: `function subarraysWithMoreZerosThanOnes(nums) {\n  \n}`,
    typescript: `function subarraysWithMoreZerosThanOnes(nums: number[]): number {\n  \n}`,
    python: `def subarraysWithMoreZerosThanOnes(nums):\n    `,
  },
  visibleTests: [
    { args: [[0, 1, 1, 0, 1]], expected: 9 },
    { args: [[0]], expected: 0 },
    { args: [[1]], expected: 1 },
  ],
  hiddenTests: [
    { args: [[0, 1, 1, 0, 1]], expected: 9 },
    { args: [[0]], expected: 0 },
    { args: [[1]], expected: 1 },
    { args: [[1, 1]], expected: 3 },
    { args: [[0, 1]], expected: 1 },
    { args: [[1, 0, 1]], expected: 3 },
    { args: [[0, 0, 1, 1, 1]], expected: 9 },
    { args: [[1, 1, 1, 1]], expected: 10 },
  ],
};
