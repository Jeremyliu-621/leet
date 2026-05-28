import type { Problem } from '../types';

export const problem: Problem = {
  id: 'min-subarray-length',
  title: 'Minimum Length Subarray With Sum',
  difficulty: 'easy',
  tags: ['sliding-window'],
  description: `Given an array of **positive** integers \`nums\` and a positive integer \`target\`, return the length of the **shortest** contiguous subarray whose sum is **greater than or equal to** \`target\`. If no such subarray exists, return \`0\`.

A variable-size sliding window expands when the sum is too small and shrinks when the sum meets the target, keeping track of the minimum window length found so far.`,
  constraints: [
    '1 <= nums.length <= 1000',
    '1 <= nums[i] <= 1000',
    '1 <= target <= 10^6',
    'All nums[i] are positive integers.',
  ],
  examples: [
    {
      input: 'nums = [2,3,1,2,4,3], target = 7',
      output: '2',
      explanation: '[4,3] has sum 7 and length 2 — the shortest valid window.',
    },
    {
      input: 'nums = [1,4,4], target = 4',
      output: '1',
      explanation: 'A single 4 already meets the target.',
    },
    {
      input: 'nums = [1,1,1,1,1], target = 11',
      output: '0',
      explanation: 'Total sum of the array is only 5, so no subarray can reach 11.',
    },
  ],
  hints: [
    'A fixed-size window will not work because the optimal length varies. You need a window whose size can both grow and shrink.',
    'Use two pointers `left` and `right`. Advance `right` to expand the window, adding `nums[right]` to a running sum. Whenever `sum >= target`, record the window length and shrink from the left (subtract `nums[left]`, advance `left`), repeating while the window still qualifies.',
    '`let left = 0, sum = 0, best = Infinity; for (let right = 0; right < nums.length; right++) { sum += nums[right]; while (sum >= target) { best = Math.min(best, right - left + 1); sum -= nums[left++]; } } return best === Infinity ? 0 : best;`',
  ],
  functionName: 'minSubarrayLength',
  params: ['nums', 'target'],
  starterCode: {
    javascript: 'function minSubarrayLength(nums, target) {\n  // your code here\n}\n',
    typescript: "function minSubarrayLength(nums: number[], target: number): number {\n  // your code here\n}",

    python: 'def minSubarrayLength(nums, target):\n    # your code here\n    pass\n',
  },
  visibleTests: [
    { args: [[2, 3, 1, 2, 4, 3], 7], expected: 2 },
    { args: [[1, 4, 4], 4], expected: 1 },
    { args: [[1, 1, 1, 1, 1], 11], expected: 0 },
  ],
  hiddenTests: [
    { args: [[1, 2, 3, 4, 5], 15], expected: 5 },
    { args: [[10, 2, 3], 10], expected: 1 },
    { args: [[1, 2, 3], 6], expected: 3 },
    { args: [[5, 5, 5], 5], expected: 1 },
    { args: [[1, 1, 1, 1, 7], 7], expected: 1 },
    { args: [[2, 2, 2, 2], 9], expected: 0 },
  ],
};
