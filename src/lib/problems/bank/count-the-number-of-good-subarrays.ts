import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-the-number-of-good-subarrays',
  title: 'Count the Number of Good Subarrays',
  difficulty: 'medium',
  tags: ['arrays', 'sliding-window', 'hash-map'],
  description: `Given an integer array \`nums\` and an integer \`k\`, return the number of **good** subarrays of \`nums\`.

A subarray \`arr\` is **good** if it contains at least \`k\` pairs of indices \`(i, j)\` such that \`i < j\` and \`arr[i] == arr[j]\`.

A **subarray** is a contiguous non-empty sequence of elements within an array.`,
  constraints: [
    '\`1 <= nums.length <= 10^5\`',
    '\`1 <= nums[i] <= 10^9\`',
    '\`1 <= k <= 10^9\`',
  ],
  examples: [
    {
      input: 'nums = [1,1,1,1,1], k = 10',
      output: '1',
      explanation: 'The only good subarray is [1,1,1,1,1] with C(5,2)=10 pairs.',
    },
    {
      input: 'nums = [3,1,4,3,2,2,4], k = 2',
      output: '4',
    },
  ],
  hints: [
    'Use a sliding window (two pointers). Maintain the count of pairs in the current window.',
    'When adding nums[right], it creates freq[nums[right]] new pairs (before incrementing the frequency). Increment freq[nums[right]] after.',
    'When the pair count reaches k, shrink the window from the left. All subarrays ending at right with start <= left are good — add left to the answer.',
  ],
  functionName: 'countGoodSubarrays',
  params: ['nums', 'k'],
  starterCode: {
    javascript: `function countGoodSubarrays(nums, k) {

}`,
    typescript: 'function countGoodSubarrays(nums: number[], k: number): number {\n\n}',
    python: `def countGoodSubarrays(nums, k):
    pass`,
  },
  visibleTests: [
    { args: [[1, 1, 1, 1, 1], 10], expected: 1 },
    { args: [[3, 1, 4, 3, 2, 2, 4], 2], expected: 4 },
  ],
  hiddenTests: [
    { args: [[1, 2, 3], 1], expected: 0 },
    { args: [[1, 1], 1], expected: 1 },
    { args: [[1, 1, 2, 1, 1], 3], expected: 3 },
    { args: [[1, 1, 1, 2, 2, 2], 2], expected: 8 },
    { args: [[1, 1, 1, 1], 1], expected: 6 },
  ],
};
