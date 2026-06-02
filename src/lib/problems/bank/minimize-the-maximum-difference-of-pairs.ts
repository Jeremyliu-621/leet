import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimize-the-maximum-difference-of-pairs',
  title: 'Minimize the Maximum Difference of Pairs',
  difficulty: 'medium',
  tags: ['arrays', 'binary-search'],
  description: `You are given a **0-indexed** integer array \`nums\` and an integer \`p\`. Find \`p\` pairs of indices of \`nums\` such that the **maximum** difference amongst all the pairs is **minimized**. Also, ensure no index appears more than once amongst the \`p\` pairs.

Note that for a pair of elements at indices \`i\` and \`j\`, the difference of this pair is \`|nums[i] - nums[j]|\`.

Return the **minimum** maximum difference among all \`p\` pairs. We define the maximum of an empty set to be zero.`,
  constraints: [
    '`1 <= nums.length <= 10^5`',
    '`0 <= nums[i] <= 10^9`',
    '`0 <= p <= (nums.length)/2`',
  ],
  examples: [
    {
      input: 'nums = [10,1,2,7,1,3], p = 2',
      output: '1',
      explanation: 'Sort to [1,1,2,3,7,10]. Pairs (1,1) diff=0 and (2,3) diff=1. Max=1.',
    },
    {
      input: 'nums = [4,2,1,2], p = 1',
      output: '0',
      explanation: 'Sort to [1,2,2,4]. Pair (2,2) diff=0. Max=0.',
    },
  ],
  hints: [
    'After sorting, optimal pairs always consist of adjacent elements in the sorted array.',
    'Binary search on the answer d. For a given d, greedily count non-overlapping adjacent pairs with difference ≤ d.',
    'The answer is the smallest d for which the greedy count is ≥ p.',
  ],
  functionName: 'minimizeMax',
  params: ['nums', 'p'],
  starterCode: {
    javascript: `function minimizeMax(nums, p) {
  if (p === 0) return 0;
  nums.sort((a, b) => a - b);
  const n = nums.length;
  const canForm = d => {
    let count = 0;
    for (let i = 1; i < n; i++) if (nums[i] - nums[i-1] <= d) { count++; i++; }
    return count >= p;
  };
  let lo = 0, hi = nums[n-1] - nums[0];
  while (lo < hi) { const mid = (lo + hi) >> 1; if (canForm(mid)) hi = mid; else lo = mid + 1; }
  return lo;
}`,
    typescript: `function minimizeMax(nums: number[], p: number): number {
  if (p === 0) return 0;
  nums.sort((a, b) => a - b);
  const n = nums.length;
  const canForm = (d: number) => {
    let count = 0;
    for (let i = 1; i < n; i++) if (nums[i]! - nums[i-1]! <= d) { count++; i++; }
    return count >= p;
  };
  let lo = 0, hi = nums[n-1]! - nums[0]!;
  while (lo < hi) { const mid = (lo + hi) >> 1; if (canForm(mid)) hi = mid; else lo = mid + 1; }
  return lo;
}`,
    python: `def minimizeMax(nums, p):
    if hasattr(nums, 'to_py'): nums = list(nums.to_py())
    if p == 0: return 0
    nums.sort(); n = len(nums)
    def can_form(d):
        count = i = 0
        while i < n - 1:
            if nums[i+1] - nums[i] <= d: count += 1; i += 2
            else: i += 1
        return count >= p
    lo, hi = 0, nums[-1] - nums[0]
    while lo < hi:
        mid = (lo + hi) // 2
        if can_form(mid): hi = mid
        else: lo = mid + 1
    return lo`,
  },
  visibleTests: [
    { args: [[10, 1, 2, 7, 1, 3], 2], expected: 1 },
    { args: [[4, 2, 1, 2], 1], expected: 0 },
  ],
  hiddenTests: [
    { args: [[0, 0], 1], expected: 0 },
    { args: [[3, 4], 1], expected: 1 },
    { args: [[1, 3, 5, 7], 2], expected: 2 },
    { args: [[1, 1, 1, 1], 2], expected: 0 },
    { args: [[1, 2, 3, 4, 5], 1], expected: 1 },
  ],
};
