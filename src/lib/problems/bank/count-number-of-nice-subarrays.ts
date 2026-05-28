import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-number-of-nice-subarrays',
  title: 'Count Number of Nice Subarrays',
  difficulty: 'medium',
  tags: ['sliding-window', 'arrays'],
  description: `Given an array of integers \`nums\` and an integer \`k\`. A continuous subarray is called **nice** if there are \`k\` odd numbers on it.

Return the number of **nice** sub-arrays.`,
  constraints: [
    '1 <= nums.length <= 50000',
    '1 <= nums[i] <= 10^5',
    '1 <= k <= nums.length',
  ],
  examples: [
    {
      input: 'nums = [1,1,2,1,1], k = 3',
      output: '2',
      explanation: 'The only sub-arrays with 3 odd numbers are [1,1,2,1] and [1,2,1,1].',
    },
    {
      input: 'nums = [2,4,6], k = 1',
      output: '0',
      explanation: 'There are no odd numbers in the array.',
    },
  ],
  hints: [
    'Use the "exactly k" = "at most k" − "at most k−1" sliding window trick.',
    'Count subarrays with at most k odd numbers by expanding a window and shrinking the left when the odd count exceeds k.',
    'The difference of the two at-most counts gives exactly k.',
  ],
  functionName: 'numberOfSubarrays',
  params: ['nums', 'k'],
  starterCode: {
    javascript: 'function numberOfSubarrays(nums, k) {\n\n}\n',
    typescript: "function numberOfSubarrays(nums: number[], k: number): number {\n\n}",

    python: 'def numberOfSubarrays(nums, k):\n    pass\n',
  },
  visibleTests: [
    { args: [[1, 1, 2, 1, 1], 3], expected: 2 },
    { args: [[2, 4, 6], 1], expected: 0 },
  ],
  hiddenTests: [
    { args: [[1], 1], expected: 1 },
    { args: [[1, 1, 2, 1, 1], 2], expected: 5 },
    { args: [[1, 2, 1, 2, 1], 2], expected: 4 },
    { args: [[2, 2, 2, 1, 2, 2, 1, 2, 2, 2], 2], expected: 16 },
  ],
};
