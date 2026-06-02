import type { Problem } from '../types';

export const problem: Problem = {
  id: 'adjacent-increasing-subarrays-detection-ii',
  title: 'Adjacent Increasing Subarrays Detection II',
  difficulty: 'medium',
  tags: ['arrays'],
  description: `Given an integer array \`nums\`, return the **maximum** value of \`k\` such that there exist **two** adjacent subarrays of length \`k\` that are **both** strictly increasing.

Two subarrays are **adjacent** if they share exactly one boundary — the first ends at index \`i\` and the second starts at index \`i + 1\`.

A subarray is **strictly increasing** if each element is strictly greater than the one before it. A subarray of length 1 is trivially strictly increasing.`,
  constraints: [
    '2 <= nums.length <= 2 * 10^5',
    '-10^9 <= nums[i] <= 10^9',
  ],
  examples: [
    {
      input: 'nums = [2,5,7,8,9,2,3,4,3,1]',
      output: '3',
      explanation: 'The subarrays [7,8,9] (indices 2–4) and [2,3,4] (indices 5–7) are adjacent, both strictly increasing, and each has length 3. No longer pair exists.',
    },
    {
      input: 'nums = [1,2,3,4,4,4,4,5,6,7]',
      output: '2',
      explanation: 'Adjacent pairs [2,3] and [4,4] fail because [4,4] is not strictly increasing. The best valid pair has k = 2.',
    },
    {
      input: 'nums = [1,2,3,5,4,6,7]',
      output: '3',
      explanation: 'Subarrays [1,2,3] (indices 0–2) and [5,4,6]… not increasing. But [2,3,5] (indices 1–3) and [4,6,7] (indices 4–6) are both strictly increasing. k = 3.',
    },
  ],
  hints: [
    'For each index i, precompute `leftLen[i]` = the length of the longest strictly increasing run **ending** at index i (e.g., if nums[i-1] < nums[i], then leftLen[i] = leftLen[i-1] + 1; otherwise 1).',
    'Similarly, precompute `rightLen[i]` = the length of the longest strictly increasing run **starting** at index i (nums[i] < nums[i+1] → rightLen[i] = rightLen[i+1] + 1; otherwise 1).',
    'For each possible split boundary b (1 ≤ b ≤ n−1), the maximum k achievable is `min(leftLen[b-1], rightLen[b])`. Scan all boundaries and return the maximum.',
  ],
  functionName: 'maxIncreasingSubarrays',
  params: ['nums'],
  starterCode: {
    javascript: `function maxIncreasingSubarrays(nums) {
  const n = nums.length;
  const left = new Array(n).fill(1);
  const right = new Array(n).fill(1);
  for (let i = 1; i < n; i++) if (nums[i] > nums[i - 1]) left[i] = left[i - 1] + 1;
  for (let i = n - 2; i >= 0; i--) if (nums[i] < nums[i + 1]) right[i] = right[i + 1] + 1;
  let ans = 1;
  for (let b = 1; b < n; b++) ans = Math.max(ans, Math.min(left[b - 1], right[b]));
  return ans;
}`,
    typescript: `function maxIncreasingSubarrays(nums: number[]): number {
  const n = nums.length;
  const left = new Array<number>(n).fill(1);
  const right = new Array<number>(n).fill(1);
  for (let i = 1; i < n; i++) if (nums[i]! > nums[i - 1]!) left[i] = left[i - 1]! + 1;
  for (let i = n - 2; i >= 0; i--) if (nums[i]! < nums[i + 1]!) right[i] = right[i + 1]! + 1;
  let ans = 1;
  for (let b = 1; b < n; b++) ans = Math.max(ans, Math.min(left[b - 1]!, right[b]!));
  return ans;
}`,
    python: `def maxIncreasingSubarrays(nums):
    n = len(nums)
    left = [1] * n
    right = [1] * n
    for i in range(1, n):
        if nums[i] > nums[i - 1]:
            left[i] = left[i - 1] + 1
    for i in range(n - 2, -1, -1):
        if nums[i] < nums[i + 1]:
            right[i] = right[i + 1] + 1
    ans = 1
    for b in range(1, n):
        ans = max(ans, min(left[b - 1], right[b]))
    return ans`,
  },
  visibleTests: [
    { args: [[2, 5, 7, 8, 9, 2, 3, 4, 3, 1]], expected: 3 },
    { args: [[1, 2, 3, 4, 4, 4, 4, 5, 6, 7]], expected: 2 },
    { args: [[1, 2, 3, 5, 4, 6, 7]], expected: 3 },
  ],
  hiddenTests: [
    { args: [[1, 2, 3, 4, 5, 6]], expected: 3 },
    { args: [[5, 4, 3, 2, 1]], expected: 1 },
    { args: [[1, 2, 1, 2, 1, 2]], expected: 2 },
    { args: [[3, 3, 3, 3, 3]], expected: 1 },
    { args: [[1, 2]], expected: 1 },
    { args: [[2, 1]], expected: 1 },
    { args: [[1, 2, 3, 4, 5, 6, 7, 8]], expected: 4 },
    { args: [[1, 2, 3, 2, 3, 4]], expected: 3 },
  ],
};
