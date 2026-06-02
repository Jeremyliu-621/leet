import type { Problem } from '../types';

export const problem: Problem = {
  id: 'maximum-sum-of-two-non-overlapping-subarrays',
  title: 'Maximum Sum of Two Non-Overlapping Subarrays',
  difficulty: 'medium',
  tags: ['arrays', 'sliding-window'],
  description: `Given an integer array \`nums\` and two integers \`firstLen\` and \`secondLen\`, return the maximum sum of elements in two non-overlapping subarrays with lengths \`firstLen\` and \`secondLen\` respectively.

The subarrays may appear in either order — the subarray of length \`firstLen\` can appear before or after the subarray of length \`secondLen\`.`,
  constraints: [
    '`1 <= firstLen, secondLen <= 1000`',
    '`firstLen + secondLen <= nums.length <= 1000`',
    '`0 <= nums[i] <= 1000`',
  ],
  examples: [
    {
      input: 'nums = [0,6,5,2,2,5,1,9,4], firstLen = 1, secondLen = 2',
      output: '20',
      explanation: 'One subarray of length 1 is [9] and subarray of length 2 is [6,5]. Sum = 9 + 6 + 5 = 20.',
    },
    {
      input: 'nums = [2,1,5,6,0,9,5,0,3,8], firstLen = 4, secondLen = 3',
      output: '31',
      explanation: '[5,6,0,9] (sum 20) and [3,8] are non-overlapping and not correct — correct is [5,6,0,9] (20) and subarray [0,3,8] or similar; actual optimum is 20 + 11 = 31.',
    },
  ],
  hints: [
    'Build prefix sums so any subarray sum can be computed in O(1).',
    'Slide a window of length M across the array; for each position, track the maximum sum of an L-window that appears entirely before the current M-window.',
    'Try both orderings: L before M, and M before L. Return the maximum across both.',
  ],
  functionName: 'maxSumTwoNoOverlap',
  params: ['nums', 'firstLen', 'secondLen'],
  starterCode: {
    javascript: `function maxSumTwoNoOverlap(nums, firstLen, secondLen) {
  const solve = (L, M) => {
    const n = nums.length;
    const prefix = new Array(n + 1).fill(0);
    for (let i = 0; i < n; i++) prefix[i + 1] = prefix[i] + nums[i];
    const winSum = (l, r) => prefix[r + 1] - prefix[l];
    let maxL = 0, ans = 0;
    for (let i = L + M - 1; i < n; i++) {
      maxL = Math.max(maxL, winSum(i - M - L + 1, i - M));
      ans = Math.max(ans, maxL + winSum(i - M + 1, i));
    }
    return ans;
  };
  return Math.max(solve(firstLen, secondLen), solve(secondLen, firstLen));
}`,
    typescript: `function maxSumTwoNoOverlap(nums: number[], firstLen: number, secondLen: number): number {
  const solve = (L: number, M: number): number => {
    const n = nums.length;
    const prefix = new Array<number>(n + 1).fill(0);
    for (let i = 0; i < n; i++) prefix[i + 1] = prefix[i]! + nums[i]!;
    const winSum = (l: number, r: number) => prefix[r + 1]! - prefix[l]!;
    let maxL = 0, ans = 0;
    for (let i = L + M - 1; i < n; i++) {
      maxL = Math.max(maxL, winSum(i - M - L + 1, i - M));
      ans = Math.max(ans, maxL + winSum(i - M + 1, i));
    }
    return ans;
  };
  return Math.max(solve(firstLen, secondLen), solve(secondLen, firstLen));
}`,
    python: `def maxSumTwoNoOverlap(nums, firstLen, secondLen):
    if hasattr(nums, 'to_py'): nums = list(nums.to_py())
    def solve(L, M):
        n = len(nums)
        prefix = [0] * (n + 1)
        for i in range(n): prefix[i+1] = prefix[i] + nums[i]
        def win(l, r): return prefix[r+1] - prefix[l]
        max_l = ans = 0
        for i in range(L + M - 1, n):
            max_l = max(max_l, win(i - M - L + 1, i - M))
            ans = max(ans, max_l + win(i - M + 1, i))
        return ans
    return max(solve(firstLen, secondLen), solve(secondLen, firstLen))`,
  },
  visibleTests: [
    { args: [[0, 6, 5, 2, 2, 5, 1, 9, 4], 1, 2], expected: 20 },
    { args: [[0, 6, 5, 2, 2, 5, 1, 9, 4], 2, 1], expected: 20 },
    { args: [[2, 1, 5, 6, 0, 9, 5, 0, 3, 8], 4, 3], expected: 31 },
  ],
  hiddenTests: [
    { args: [[3, 8, 1, 3, 2, 1, 8, 9, 0], 3, 2], expected: 29 },
    { args: [[1, 2], 1, 1], expected: 3 },
    { args: [[4, 5, 6], 1, 1], expected: 11 },
    { args: [[1, 0, 1], 1, 1], expected: 2 },
    { args: [[10, 1, 2, 10, 10], 2, 1], expected: 30 },
  ],
};
