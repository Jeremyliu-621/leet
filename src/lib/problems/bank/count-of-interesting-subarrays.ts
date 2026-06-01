import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-of-interesting-subarrays',
  title: 'Count of Interesting Subarrays',
  difficulty: 'medium',
  tags: ['arrays', 'hash-map'],
  description: `You are given a **0-indexed** integer array \`nums\`, an integer \`modulo\`, and an integer \`k\`.

Your task is to find the number of **interesting** subarrays.

A subarray \`nums[l..r]\` (0-indexed) is **interesting** if the following condition holds:
- Let \`cnt\` be the number of indices \`i\` in \`[l, r]\` such that \`nums[i] % modulo == k\`. Then \`cnt % modulo == k\`.

Return the **count** of interesting subarrays.

**Note:** A subarray is a contiguous non-empty sequence of elements within an array.`,
  constraints: [
    '1 <= nums.length <= 10^5',
    '1 <= modulo <= 10^9',
    '0 <= k < modulo',
  ],
  examples: [
    {
      input: 'nums = [3,2,4], modulo = 2, k = 1',
      output: '3',
      explanation: 'Only nums[0]=3 satisfies 3%2=1=k. Valid subarrays: [0,0] → cnt=1, 1%2=1=k ✓; [0,1] → cnt=1 ✓; [0,2] → cnt=1 ✓. Answer = 3.',
    },
    {
      input: 'nums = [3,1,9,6], modulo = 3, k = 0',
      output: '2',
      explanation: 'nums[0]=3, nums[2]=9, nums[3]=6 satisfy %3=0. Valid subarrays: [0,3] → cnt=3, 3%3=0 ✓; [1,1] → cnt=0, 0%3=0 ✓. Answer = 2.',
    },
    {
      input: 'nums = [1,1,1], modulo = 3, k = 1',
      output: '3',
      explanation: 'All elements satisfy %3=1. Subarrays: [0,0]→cnt=1=1%3=1 ✓; [1,1]→1 ✓; [2,2]→1 ✓; [0,1]→cnt=2, 2%3=2≠1 ✗; [1,2]→2 ✗; [0,2]→cnt=3, 3%3=0≠1 ✗. Answer = 3.',
    },
  ],
  hints: [
    'Define `prefix[j]` as the count of elements in nums[0..j-1] that satisfy `nums[i] % modulo == k` (so `prefix[0] = 0`).',
    'For a subarray [l, r], its interesting-count is `cnt = prefix[r+1] - prefix[l]`. We need `cnt % modulo == k`, i.e., `(prefix[r+1] - prefix[l]) % modulo == k`.',
    'Rearrange: `prefix[l] % modulo == (prefix[r+1] - k + modulo) % modulo`. Use a hash map to count past prefix values modulo `modulo`, then for each new right endpoint look up the needed value.',
  ],
  functionName: 'countInterestingSubarrays',
  params: ['nums', 'modulo', 'k'],
  starterCode: {
    javascript: `function countInterestingSubarrays(nums, modulo, k) {\n\n}`,
    typescript: `function countInterestingSubarrays(nums: number[], modulo: number, k: number): number {

}`,
    python: `def countInterestingSubarrays(nums: list[int], modulo: int, k: int) -> int:\n    pass`,
  },
  visibleTests: [
    { args: [[3, 2, 4], 2, 1], expected: 3 },
    { args: [[3, 1, 9, 6], 3, 0], expected: 2 },
    { args: [[1, 1, 1], 3, 1], expected: 3 },
  ],
  hiddenTests: [
    // single element edge cases
    { args: [[1], 1, 0], expected: 1 },
    { args: [[2], 3, 2], expected: 0 },
    // every element satisfies x%modulo==k but cnt%modulo==k requires exact count
    { args: [[3, 3, 3], 3, 0], expected: 1 },
    { args: [[5, 10, 15, 20, 25], 5, 0], expected: 1 },
    // modulo=1 so everything qualifies — all subarrays valid
    { args: [[1, 2, 3], 1, 0], expected: 6 },
    // alternating — prefix sum trick
    { args: [[1, 1, 1, 1], 2, 1], expected: 6 },
    // even elements only — cnt parity check
    { args: [[2, 4, 6, 8], 2, 0], expected: 4 },
    // mixed, only 3%2=1 matches
    { args: [[3, 2, 4], 2, 0], expected: 3 },
    // many non-matching elements pad subarrays
    { args: [[1, 2, 3, 4, 5], 5, 0], expected: 10 },
    { args: [[1, 1, 1], 2, 1], expected: 4 },
  ],
};
