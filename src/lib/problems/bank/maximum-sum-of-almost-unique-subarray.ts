import type { Problem } from '../types';

export const problem: Problem = {
  id: 'maximum-sum-of-almost-unique-subarray',
  title: 'Maximum Sum of Almost Unique Subarray',
  difficulty: 'medium',
  tags: ['arrays', 'sliding-window', 'hash-map'],
  description: `You are given an integer array \`nums\` and two positive integers \`m\` and \`k\`.

Return the **maximum sum** among all **almost unique** subarrays of length \`m\` of \`nums\`. If no such subarray exists, return \`0\`.

A subarray of length \`m\` is **almost unique** if it contains at least \`k\` distinct elements.`,
  constraints: [
    '\`1 <= nums.length <= 2 * 10^4\`',
    '\`1 <= m <= nums.length\`',
    '\`1 <= k <= m\`',
    '\`1 <= nums[i] <= 10^9\`',
  ],
  examples: [
    {
      input: 'nums = [2,6,7,3,1,7], m = 4, k = 3',
      output: '18',
      explanation: 'Subarray [2,6,7,3] has 4 distinct elements and sum 18. Subarray [7,3,1,7] also has 3 distinct elements and sum 18. Maximum = 18.',
    },
    {
      input: 'nums = [5,9,9,2,4,5,4], m = 1, k = 1',
      output: '9',
      explanation: 'Every single-element subarray has 1 distinct element. Maximum = 9.',
    },
  ],
  hints: [
    'Use a fixed-size sliding window of length m. Maintain a frequency map and the current window sum.',
    'As the window slides right, add the new element and remove the leftmost element, updating the frequency map and sum.',
    'Track the number of distinct elements (keys with frequency > 0). If distinct count >= k, update the answer with the current sum.',
  ],
  functionName: 'maxSumAlmostUniqueSubarray',
  params: ['nums', 'm', 'k'],
  starterCode: {
    javascript: `function maxSumAlmostUniqueSubarray(nums, m, k) {
  const freq = new Map();
  let windowSum = 0, ans = 0;
  for (let i = 0; i < nums.length; i++) {
    freq.set(nums[i], (freq.get(nums[i]) || 0) + 1);
    windowSum += nums[i];
    if (i >= m) {
      const l = nums[i - m];
      const c = freq.get(l) - 1;
      if (c === 0) freq.delete(l);
      else freq.set(l, c);
      windowSum -= l;
    }
    if (i >= m - 1 && freq.size >= k && windowSum > ans) ans = windowSum;
  }
  return ans;
}`,
    typescript: `function maxSumAlmostUniqueSubarray(nums: number[], m: number, k: number): number {
  const freq = new Map<number, number>();
  let windowSum = 0, ans = 0;
  for (let i = 0; i < nums.length; i++) {
    freq.set(nums[i]!, (freq.get(nums[i]!) ?? 0) + 1);
    windowSum += nums[i]!;
    if (i >= m) {
      const l = nums[i - m]!;
      const c = (freq.get(l) ?? 0) - 1;
      if (c === 0) freq.delete(l);
      else freq.set(l, c);
      windowSum -= l;
    }
    if (i >= m - 1 && freq.size >= k && windowSum > ans) ans = windowSum;
  }
  return ans;
}`,
    python: `def maxSumAlmostUniqueSubarray(nums, m, k):
    if hasattr(nums, 'to_py'): nums = list(nums.to_py())
    from collections import defaultdict
    freq = defaultdict(int)
    window_sum = ans = 0
    for i, x in enumerate(nums):
        freq[x] += 1
        window_sum += x
        if i >= m:
            l = nums[i - m]
            freq[l] -= 1
            if freq[l] == 0: del freq[l]
            window_sum -= l
        if i >= m - 1 and len(freq) >= k and window_sum > ans:
            ans = window_sum
    return ans`,
  },
  visibleTests: [
    { args: [[2, 6, 7, 3, 1, 7], 4, 3], expected: 18 },
    { args: [[5, 9, 9, 2, 4, 5, 4], 1, 1], expected: 9 },
  ],
  hiddenTests: [
    { args: [[1, 2, 1, 2, 1, 2, 1], 3, 3], expected: 0 },
    { args: [[1, 1, 1, 1], 2, 2], expected: 0 },
    { args: [[1, 2, 3, 4, 5], 3, 2], expected: 12 },
    { args: [[10, 20, 30], 2, 2], expected: 50 },
    { args: [[1, 2, 3, 4], 4, 4], expected: 10 },
  ],
};
