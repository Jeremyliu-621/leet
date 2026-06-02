import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-number-of-good-subarrays',
  title: 'Count Number of Good Subarrays',
  difficulty: 'medium',
  tags: ['arrays', 'hash-map', 'two-pointers'],
  description: `Given an integer array \`nums\` and an integer \`k\`, return the number of **good** subarrays of \`nums\`.

A subarray \`arr\` is **good** if it has **at least** \`k\` pairs of indices \`(i, j)\` such that \`i < j\` and \`arr[i] == arr[j]\`.

A **subarray** is a contiguous non-empty sequence of elements within an array.`,
  constraints: [
    '1 <= nums.length <= 10^5',
    '1 <= nums[i] <= 10^9',
    '1 <= k <= 10^9',
  ],
  examples: [
    {
      input: 'nums = [1,1,1,1,1], k = 10',
      output: '1',
      explanation: 'Only the subarray [1,1,1,1,1] has C(5,2)=10 pairs, meeting k=10.',
    },
    {
      input: 'nums = [3,1,4,3,2,2,4], k = 2',
      output: '4',
      explanation: 'Good subarrays: [3,1,4,3,2,2,4], [1,4,3,2,2,4], [4,3,2,2,4], [3,1,4,3,2,2].',
    },
  ],
  hints: [
    'Level 1: A pair (i,j) with i<j and arr[i]==arr[j] contributes to the pair count. When we extend the window to include a new element x, the new pairs added = (current count of x in the window before adding it).',
    'Level 2: Use a two-pointer (sliding window): for each right endpoint r, find the leftmost l such that the window [l,r] has < k pairs. Then all starting positions 0..l-1 yield valid subarrays ending at r.',
    'Level 3: Two-pointer: maintain freq map and pair count. For each r: cnt += freq[nums[r]]; freq[nums[r]]++. While cnt >= k: freq[nums[l]]--; cnt -= freq[nums[l]]; l++. Answer += l.',
  ],
  functionName: 'countGoodSubarrays',
  params: ['nums', 'k'],
  starterCode: {
    javascript: `function countGoodSubarrays(nums, k) {

}`,
    typescript: `function countGoodSubarrays(nums: number[], k: number): number {

}`,
    python: `def countGoodSubarrays(nums, k):
    pass`,
  },
  visibleTests: [
    { args: [[1, 1, 1, 1, 1], 10], expected: 1 },
    { args: [[3, 1, 4, 3, 2, 2, 4], 2], expected: 4 },
  ],
  hiddenTests: [
    { args: [[1], 1], expected: 0 },
    { args: [[1, 1], 1], expected: 1 },
    { args: [[1, 2, 3], 1], expected: 0 },
    { args: [[1, 1, 2, 2], 2], expected: 1 },
    { args: [[1, 1, 1], 3], expected: 1 },
    { args: [[1, 1, 2, 1, 1], 2], expected: 3 },
  ],
};
