import type { Problem } from '../types';

export const problem: Problem = {
  id: 'maximum-sum-of-3-non-overlapping-subarrays',
  title: 'Maximum Sum of 3 Non-Overlapping Subarrays',
  difficulty: 'hard',
  tags: ['arrays', 'dynamic-programming'],
  description: `Given an integer array \`nums\` and an integer \`k\`, find three non-overlapping subarrays of length \`k\` with maximum sum and return them.

Return the result as a list of indices representing the starting position of each interval (0-indexed). If there are multiple answers, return the lexicographically smallest one.`,
  constraints: [
    '1 <= nums.length <= 2 * 10^4',
    '1 <= nums[i] < 2^16',
    '1 <= k <= floor(nums.length / 3)',
  ],
  examples: [
    {
      input: 'nums = [1,2,1,2,6,7,5,1], k = 2',
      output: '[0,3,5]',
      explanation: 'Subarrays [1,2], [2,6], [7,5] start at indices 0, 3, 5 and have sums 3, 8, 12 respectively.',
    },
    {
      input: 'nums = [1,2,1,2,1,2,1,2,1], k = 2',
      output: '[0,2,4]',
      explanation: 'Subarrays starting at [0,2,4] each have sum 3. The answer is lexicographically smallest.',
    },
  ],
  hints: [
    'Precompute sliding window sums of length k for all valid starting positions.',
    'Build a left[] array where left[i] is the index of the maximum window sum in w[0..i].',
    'Build a right[] array where right[i] is the index of the maximum window sum in w[i..end]. Use >= when scanning right-to-left to ensure lexicographic preference.',
    'Enumerate the middle window position j; the best left is left[j-k] and the best right is right[j+k]. Track the combination with the maximum total sum.',
  ],
  functionName: 'maxSumOfThreeSubarrays',
  params: ['nums', 'k'],
  starterCode: {
    javascript: `function maxSumOfThreeSubarrays(nums, k) {
  const n = nums.length;
  const w = new Array(n - k + 1);
  let sum = 0;
  for (let i = 0; i < k; i++) sum += nums[i];
  w[0] = sum;
  for (let i = 1; i <= n - k; i++) {
    sum += nums[i + k - 1] - nums[i - 1];
    w[i] = sum;
  }
  const left = new Array(w.length);
  let best = 0;
  for (let i = 0; i < w.length; i++) {
    if (w[i] > w[best]) best = i;
    left[i] = best;
  }
  const right = new Array(w.length);
  best = w.length - 1;
  for (let i = w.length - 1; i >= 0; i--) {
    if (w[i] >= w[best]) best = i;
    right[i] = best;
  }
  let ans = -1, res = [-1, -1, -1];
  for (let j = k; j <= n - 2 * k; j++) {
    const l = left[j - k], r = right[j + k];
    const total = w[l] + w[j] + w[r];
    if (total > ans) { ans = total; res = [l, j, r]; }
  }
  return res;
}`,
    typescript: `function maxSumOfThreeSubarrays(nums: number[], k: number): number[] {
  const n = nums.length;
  const w = new Array<number>(n - k + 1);
  let sum = 0;
  for (let i = 0; i < k; i++) sum += nums[i]!;
  w[0] = sum;
  for (let i = 1; i <= n - k; i++) {
    sum += nums[i + k - 1]! - nums[i - 1]!;
    w[i] = sum;
  }
  const left = new Array<number>(w.length);
  let best = 0;
  for (let i = 0; i < w.length; i++) {
    if (w[i]! > w[best]!) best = i;
    left[i] = best;
  }
  const right = new Array<number>(w.length);
  best = w.length - 1;
  for (let i = w.length - 1; i >= 0; i--) {
    if (w[i]! >= w[best]!) best = i;
    right[i] = best;
  }
  let ans = -1; const res = [-1, -1, -1];
  for (let j = k; j <= n - 2 * k; j++) {
    const l = left[j - k]!, r = right[j + k]!;
    const total = w[l]! + w[j]! + w[r]!;
    if (total > ans) { ans = total; res[0] = l; res[1] = j; res[2] = r; }
  }
  return res;
}`,
    python: `def maxSumOfThreeSubarrays(nums, k):
    if hasattr(nums, 'to_py'): nums = list(nums.to_py())
    n = len(nums)
    w = [0] * (n - k + 1)
    w[0] = sum(nums[:k])
    for i in range(1, n - k + 1):
        w[i] = w[i-1] + nums[i+k-1] - nums[i-1]
    left = [0] * len(w)
    best = 0
    for i in range(len(w)):
        if w[i] > w[best]: best = i
        left[i] = best
    right = [0] * len(w)
    best = len(w) - 1
    for i in range(len(w) - 1, -1, -1):
        if w[i] >= w[best]: best = i
        right[i] = best
    ans, res = -1, [-1, -1, -1]
    for j in range(k, n - 2*k + 1):
        l, r = left[j-k], right[j+k]
        total = w[l] + w[j] + w[r]
        if total > ans:
            ans, res = total, [l, j, r]
    return res`,
  },
  visibleTests: [
    { args: [[1, 2, 1, 2, 6, 7, 5, 1], 2], expected: [0, 3, 5] },
    { args: [[1, 2, 1, 2, 1, 2, 1, 2, 1], 2], expected: [0, 2, 4] },
  ],
  hiddenTests: [
    { args: [[1, 2, 3, 4, 5, 6, 7, 8, 9], 1], expected: [6, 7, 8] },
    { args: [[4, 3, 2, 1, 2, 3, 4, 5, 6, 7], 2], expected: [0, 6, 8] },
    { args: [[2, 1, 5, 1, 3, 2, 1, 1], 1], expected: [0, 2, 4] },
    { args: [[1, 1, 1, 1, 1, 1, 1, 1, 1], 3], expected: [0, 3, 6] },
    { args: [[9, 8, 7, 6, 5, 4, 3, 2, 1], 1], expected: [0, 1, 2] },
    { args: [[1, 1, 10, 1, 1, 10, 1, 1, 10], 1], expected: [2, 5, 8] },
  ],
};
