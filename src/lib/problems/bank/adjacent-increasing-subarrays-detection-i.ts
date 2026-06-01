import type { Problem } from '../types';

export const problem: Problem = {
  id: 'adjacent-increasing-subarrays-detection-i',
  title: 'Adjacent Increasing Subarrays Detection I',
  difficulty: 'easy',
  tags: ['arrays'],
  description: `Given an integer array \`nums\` and a positive integer \`k\`, return \`true\` if there exist **two** adjacent subarrays of length \`k\` that are **both** strictly increasing, or \`false\` otherwise.

Two subarrays are **adjacent** if they share exactly one boundary. Specifically, the first subarray ends at index \`i\` and the second starts at index \`i + 1\`.

A subarray is **strictly increasing** if each element is strictly greater than the one before it.`,
  constraints: [
    '2 <= nums.length <= 100',
    '1 < 2 * k <= nums.length',
    '-1000 <= nums[i] <= 1000',
  ],
  examples: [
    {
      input: 'nums = [2,5,7,8,9,2,3,4,3,1], k = 3',
      output: 'true',
      explanation: 'The subarray [7,8,9] at indices [2,4] and the subarray [2,3,4] at indices [5,7] are both strictly increasing and adjacent.',
    },
    {
      input: 'nums = [1,2,3,4,4,4,4,5,6,7], k = 5',
      output: 'false',
      explanation: 'No two adjacent strictly increasing subarrays of length 5 exist.',
    },
    {
      input: 'nums = [1,2,3,5,4,6,7], k = 3',
      output: 'true',
      explanation: 'The subarrays [1,2,3] and [5,4,6] do not work. But [5,4,6] is not increasing. However [3,5,4] is not increasing. [2,3,5] and [4,6,7] are both strictly increasing and adjacent.',
    },
  ],
  hints: [
    'For each starting index i, check whether nums[i..i+k-1] is strictly increasing.',
    'Precompute an array `ok[i]` = true if nums[i..i+k-1] is strictly increasing. Then look for any index i where both `ok[i]` and `ok[i+k]` are true.',
    'To avoid recomputing for each i, compute `inc[i]` = length of the strictly increasing run starting at index i (how far right the run extends). Then `ok[i]` = `inc[i] >= k`.',
  ],
  functionName: 'hasIncreasingSubarrays',
  params: ['nums', 'k'],
  starterCode: {
    javascript: `function hasIncreasingSubarrays(nums, k) {
  function isInc(start) {
    for (let i = start; i < start + k - 1; i++)
      if (nums[i] >= nums[i+1]) return false;
    return true;
  }
  for (let i = 0; i <= nums.length - 2*k; i++)
    if (isInc(i) && isInc(i+k)) return true;
  return false;
}`,
    typescript: `function hasIncreasingSubarrays(nums: number[], k: number): boolean {
  function isInc(start: number): boolean {
    for (let i = start; i < start + k - 1; i++)
      if (nums[i]! >= nums[i+1]!) return false;
    return true;
  }
  for (let i = 0; i <= nums.length - 2*k; i++)
    if (isInc(i) && isInc(i+k)) return true;
  return false;
}`,
    python: `def hasIncreasingSubarrays(nums, k):
    nums = list(nums.to_py()) if hasattr(nums, 'to_py') else list(nums)
    def is_inc(start):
        return all(nums[i] < nums[i+1] for i in range(start, start+k-1))
    return any(is_inc(i) and is_inc(i+k) for i in range(len(nums) - 2*k + 1))`,
  },
  visibleTests: [
    { args: [[2, 5, 7, 8, 9, 2, 3, 4, 3, 1], 3], expected: true },
    { args: [[1, 2, 3, 4, 4, 4, 4, 5, 6, 7], 5], expected: false },
    { args: [[1, 2, 3, 5, 4, 6, 7], 3], expected: true },
  ],
  hiddenTests: [
    { args: [[1, 2, 3, 4, 5], 2], expected: true },
    { args: [[5, 4, 3, 2, 1], 2], expected: false },
    { args: [[1, 2, 1, 2], 2], expected: true },
    { args: [[1, 2, 3, 4], 2], expected: true },
    { args: [[1, 3, 2, 4, 5, 6], 3], expected: false },
    { args: [[1, 2], 1], expected: true },
    { args: [[3, 3, 3, 3], 2], expected: false },
    { args: [[1, 2, 3, 2, 3, 4], 3], expected: true },
  ],
};
