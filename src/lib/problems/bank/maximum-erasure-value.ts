import type { Problem } from '../types';

export const problem: Problem = {
  id: 'maximum-erasure-value',
  title: 'Maximum Unique Subarray Sum',
  difficulty: 'medium',
  tags: ['sliding-window', 'hash-map'],
  description: `Given an array of positive integers \`nums\`, return the **maximum sum** of a contiguous subarray in which all elements are **unique** (no duplicates within the subarray).

You must choose a contiguous subarray; you may not skip elements.

**Example:** For \`nums = [4,2,4,5,6]\`, the subarray \`[2,4,5,6]\` has sum \`17\` and all elements are unique.`,
  constraints: [
    '1 <= nums.length <= 1000',
    '1 <= nums[i] <= 10000',
  ],
  examples: [
    {
      input: 'nums = [4,2,4,5,6]',
      output: '17',
      explanation: '[2,4,5,6] sums to 17. The subarray [4,2,4] is invalid because 4 appears twice.',
    },
    {
      input: 'nums = [5,2,1,2,5,2,1,2,5]',
      output: '8',
      explanation: '[5,2,1] sums to 8 and all elements are unique.',
    },
    {
      input: 'nums = [1,2,3]',
      output: '6',
      explanation: 'The entire array has unique elements, sum = 6.',
    },
  ],
  hints: [
    'Use a sliding window. Maintain a window [left, right] where all elements inside are unique. Track the current window sum and update the maximum.',
    'Use a Set to check for duplicates. Expand `right` by adding `nums[right]` to the set and to the running sum. If `nums[right]` is already in the set, shrink from `left`: remove `nums[left]` from the set and subtract it from the sum, advance `left`. Record the max sum after each valid expansion.',
    '`let left = 0, sum = 0, best = 0; const seen = new Set(); for (let right = 0; right < nums.length; right++) { while (seen.has(nums[right])) { seen.delete(nums[left]); sum -= nums[left]; left++; } seen.add(nums[right]); sum += nums[right]; best = Math.max(best, sum); } return best;`',
  ],
  functionName: 'maximumUniqueSum',
  params: ['nums'],
  starterCode: {
    javascript: 'function maximumUniqueSum(nums) {\n  // your code here\n}\n',
    typescript: "function maximumUniqueSum(nums: number[]): number {\n  // your code here\n}",

    python: 'def maximumUniqueSum(nums):\n    # your code here\n    pass\n',
  },
  visibleTests: [
    { args: [[4, 2, 4, 5, 6]], expected: 17 },
    { args: [[5, 2, 1, 2, 5, 2, 1, 2, 5]], expected: 8 },
    { args: [[1, 2, 3]], expected: 6 },
  ],
  hiddenTests: [
    { args: [[1]], expected: 1 },
    { args: [[1, 1]], expected: 1 },
    { args: [[1, 2, 3, 4, 5]], expected: 15 },
    { args: [[3, 3, 3, 3]], expected: 3 },
    { args: [[10, 5, 2, 7, 5, 1]], expected: 24 },
    { args: [[1, 2, 3, 1, 2, 3]], expected: 6 },
    { args: [[100, 1, 100]], expected: 101 },
  ],
};
