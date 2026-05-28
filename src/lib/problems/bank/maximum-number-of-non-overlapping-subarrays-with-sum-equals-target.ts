import type { Problem } from '../types';

export const problem: Problem = {
  id: 'maximum-number-of-non-overlapping-subarrays-with-sum-equals-target',
  title: 'Maximum Number of Non-Overlapping Subarrays With Sum Equals Target',
  difficulty: 'medium',
  tags: ['arrays', 'hash-map'],
  description: `Given an array \`nums\` and an integer \`target\`, return the **maximum** number of **non-empty non-overlapping** subarrays such that the sum of each subarray equals \`target\`.`,
  constraints: [
    '1 <= nums.length <= 10^5',
    '-10^4 <= nums[i] <= 10^4',
    '0 <= target <= 10^6',
  ],
  examples: [
    {
      input: 'nums = [1,1,1,1,1], target = 2',
      output: '2',
      explanation:
        'Pick [1,1] at indices 0-1 and [1,1] at indices 2-3. Two non-overlapping subarrays each with sum 2.',
    },
    {
      input: 'nums = [-1,3,5,1,4,2,-9], target = 6',
      output: '2',
      explanation:
        'Pick [5,1] at indices 2-3 (sum=6) and [4,2] at indices 4-5 (sum=6). Two non-overlapping subarrays.',
    },
    {
      input: 'nums = [0,0,0], target = 0',
      output: '3',
      explanation:
        'Each single element [0] has sum 0, and they are non-overlapping. Three subarrays.',
    },
  ],
  hints: [
    'Use a greedy approach: as soon as you find a valid subarray, take it and start fresh. This maximises the number of subarrays.',
    'Track prefix sums and use a hash set of seen prefix sums. When the current prefix minus target is in the set, you have found a subarray ending here.',
    'After claiming a subarray, reset the set to only contain the current prefix sum, so the next subarray cannot overlap with the one just found.',
  ],
  functionName: 'maxNonOverlapping',
  params: ['nums', 'target'],
  starterCode: {
    javascript: `function maxNonOverlapping(nums, target) {

}`,
    typescript: "function maxNonOverlapping(nums: number[], target: number): number {\n\n}",

    python: `def maxNonOverlapping(nums, target):
    pass`,
  },
  visibleTests: [
    { args: [[1, 1, 1, 1, 1], 2], expected: 2 },
    { args: [[-1, 3, 5, 1, 4, 2, -9], 6], expected: 2 },
    { args: [[0, 0, 0], 0], expected: 3 },
  ],
  hiddenTests: [
    { args: [[1, -1, 1, -1, 1, -1], 0], expected: 3 },
    { args: [[1, 2, 3], 10], expected: 0 },
    { args: [[5], 5], expected: 1 },
    { args: [[1, 2, 3, 4, 5], 3], expected: 2 },
  ],
};
