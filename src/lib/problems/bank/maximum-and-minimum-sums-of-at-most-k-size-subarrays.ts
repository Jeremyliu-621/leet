import type { Problem } from '../types';

export const problem: Problem = {
  id: 'maximum-and-minimum-sums-of-at-most-k-size-subarrays',
  title: 'Maximum and Minimum Sums of At Most K Size Subarrays',
  difficulty: 'hard',
  tags: ['arrays', 'stack', 'math'],
  description: `You are given an integer array \`nums\` and a positive integer \`k\`.

For every **contiguous subarray** of \`nums\` whose length is between **1** and **k** (inclusive), add both its **maximum** and its **minimum** element to a running total.

Return the total sum **modulo** \`10^9 + 7\`.

> A subarray is a contiguous, non-empty sequence of elements within an array.`,
  constraints: [
    '1 <= nums.length <= 80',
    '1 <= k <= nums.length',
    '0 <= nums[i] <= 10^9',
  ],
  examples: [
    {
      input: 'nums = [1, 2, 3], k = 2',
      output: '20',
      explanation:
        'Subarrays of length ≤ 2: [1]→1+1=2, [1,2]→1+2=3, [2]→2+2=4, [2,3]→2+3=5, [3]→3+3=6. Total = 20.',
    },
    {
      input: 'nums = [1, 2, 3], k = 1',
      output: '12',
      explanation:
        'Only length-1 subarrays: [1]→2, [2]→4, [3]→6. Total = 12.',
    },
    {
      input: 'nums = [2, 1, 3], k = 3',
      output: '23',
      explanation:
        'All subarrays: [2]→4, [2,1]→3, [2,1,3]→4, [1]→2, [1,3]→4, [3]→6. Total = 23.',
    },
  ],
  hints: [
    'Level 1: A brute-force O(n·k) solution works for small n. For each starting index i, expand up to k elements tracking the running min and max, and accumulate.',
    'Level 2: For a more efficient approach, think about each element\'s contribution independently. For mins: element nums[i] is the minimum of a subarray [l..r] iff it is the smallest in that range. Count (i-L)*(R-i) such subarrays using monotone stacks to find the nearest smaller element on each side.',
    'Level 3: Use two monotone stacks — one to find for each index i, the farthest left index where nums[i] is still the minimum (call it left[i]), and the farthest right (right[i]). Repeat for maximum. Subtract contributions from subarrays of length > k with inclusion-exclusion.',
  ],
  functionName: 'minMaxSums',
  params: ['nums', 'k'],
  starterCode: {
    javascript: `function minMaxSums(nums, k) {

}`,
    typescript: `function minMaxSums(nums: number[], k: number): number {

}`,
    python: `def minMaxSums(nums, k):
    pass`,
  },
  visibleTests: [
    { args: [[1, 2, 3], 2], expected: 20 },
    { args: [[1, 2, 3], 1], expected: 12 },
    { args: [[2, 1, 3], 3], expected: 23 },
  ],
  hiddenTests: [
    { args: [[1, 3, 2], 2], expected: 21 },
    { args: [[1, 2, 3, 4], 2], expected: 35 },
    { args: [[5], 1], expected: 10 },
    { args: [[1, 1, 1, 1], 2], expected: 14 },
    { args: [[3, 1, 4, 1, 5], 3], expected: 64 },
    { args: [[1, 2, 3], 3], expected: 24 },
    { args: [[10, 1, 10], 2], expected: 64 },
  ],
};
