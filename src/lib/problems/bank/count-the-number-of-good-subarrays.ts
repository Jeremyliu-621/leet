import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-the-number-of-good-subarrays',
  title: 'Count the Number of Good Subarrays',
  difficulty: 'medium',
  tags: ['arrays', 'hash-map'],
  description: `Given an integer array \`nums\` and an integer \`k\`, return the number of **good** subarrays of \`nums\`.

A subarray \`arr\` is **good** if there are **at least** \`k\` pairs of indices \`(i, j)\` such that \`i < j\` and \`arr[i] == arr[j]\`.

A **subarray** is a contiguous **non-empty** sequence of elements within an array.`,
  constraints: [
    '1 <= nums.length <= 10^5',
    '1 <= nums[i] <= 10^9',
    '1 <= k <= 10^9',
  ],
  examples: [
    {
      input: 'nums = [1,1,1,1,1], k = 10',
      output: '1',
      explanation: 'The only good subarray is the array itself.',
    },
    {
      input: 'nums = [3,1,4,3,2,2,4], k = 2',
      output: '4',
      explanation: 'There are 4 different good subarrays: [3,1,4,3,2,2], [3,1,4,3,2,2,4], [1,4,3,2,2,4], [4,3,2,2,4].',
    },
  ],
  hints: [
    'Use a sliding window: maintain a left pointer and expand right. Track the count of pairs using a frequency map.',
    'When you add nums[right], the number of new pairs added equals the current frequency of nums[right] before incrementing.',
    'While pairs >= k, all extensions of the right pointer are also valid; add (n - right) to answer, then shrink from left.',
  ],
  functionName: 'countGood',
  params: ['nums', 'k'],
  starterCode: {
    javascript: `function countGood(nums, k) {

}`,
    typescript: "function countGood(nums: number[], k: number): number {\n\n}",

    python: `def countGood(nums: list, k: int) -> int:
    pass`,
  },
  visibleTests: [
    { args: [[1, 1, 1, 1, 1], 10], expected: 1 },
    { args: [[3, 1, 4, 3, 2, 2, 4], 2], expected: 4 },
  ],
  hiddenTests: [
    { args: [[1, 1, 1], 1], expected: 3 },
    { args: [[1, 2, 3, 4], 1], expected: 0 },
    { args: [[1, 1, 2, 2], 1], expected: 5 },
    { args: [[1, 1, 1, 1], 3], expected: 3 },
    { args: [[1], 1], expected: 0 },
  ],
};
