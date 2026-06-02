import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-time-to-make-array-sum-at-most-x',
  title: 'Minimum Time to Make Array Sum At Most x',
  difficulty: 'hard',
  tags: ['arrays', 'dynamic-programming'],
  description: `You are given two 0-indexed integer arrays \`nums1\` and \`nums2\` of equal length. Every second, for all indices \`0 <= i < nums1.length\`, value of \`nums1[i]\` is incremented by \`nums2[i]\`. After this is done, you can do the following operation:

- Choose an index \`0 <= i < nums1.length\` and set \`nums1[i] = 0\`.

You are also given an integer \`x\`.

Return the **minimum** number of operations needed to make the sum of all elements of \`nums1\` to be less than or equal to \`x\`, or \`-1\` if this is impossible.`,
  constraints: [
    '1 <= nums1.length <= 10^3',
    '1 <= nums2.length <= 10^3',
    'nums1.length == nums2.length',
    '0 <= nums1[i] <= 10^3',
    '0 <= nums2[i] <= 10^3',
    '0 <= x <= 10^6',
  ],
  examples: [
    {
      input: 'nums1 = [1,2,3], nums2 = [1,2,3], x = 4',
      output: '3',
      explanation: 'Reset all elements. After 3 operations sum = 2+2+0 = 4.',
    },
    {
      input: 'nums1 = [1,2,3], nums2 = [3,3,3], x = 4',
      output: '-1',
      explanation: 'Sum grows too fast: even resetting all elements each turn, sum is always > 4.',
    },
    {
      input: 'nums1 = [1,2,3], nums2 = [1,2,3], x = 5',
      output: '2',
      explanation: 'Reset (2,2) at t=1 (saves 2+1×2=4) and (3,3) at t=2 (saves 3+2×3=9). Total savings=13. Sum=6+2×6-13=5.',
    },
  ],
  hints: [
    'Resetting element i at second t saves nums1[i] + t × nums2[i] (the value that would remain after t seconds is reduced to t×nums2[i] total, saving the reset value at time t).',
    'Sort elements by nums2 ascending. The optimal strategy assigns the earliest seconds to elements with the lowest nums2 (maximizing the large-multiplier benefit for high-nums2 elements).',
    'DP: dp[j] = max savings from exactly j resets. Transition: dp[j] = max(dp[j], dp[j-1] + nums1[i] + j×nums2[i]) where elements are processed in ascending nums2 order. Check each t from 0..n: if sum(nums1) + t×sum(nums2) - dp[t] <= x, return t.',
  ],
  functionName: 'minimumTime',
  params: ['nums1', 'nums2', 'x'],
  starterCode: {
    javascript: `function minimumTime(nums1, nums2, x) {
  const n = nums1.length;
  const pairs = nums1.map((v, i) => [v, nums2[i]]).sort((a, b) => a[1] - b[1]);
  const s1 = nums1.reduce((a, b) => a + b, 0);
  const s2 = nums2.reduce((a, b) => a + b, 0);
  const dp = new Array(n + 1).fill(0);
  for (const [n1, n2] of pairs) {
    for (let j = n; j >= 1; j--) {
      dp[j] = Math.max(dp[j], dp[j - 1] + n1 + j * n2);
    }
  }
  for (let t = 0; t <= n; t++) {
    if (s1 + t * s2 - dp[t] <= x) return t;
  }
  return -1;
}`,
    typescript: `function minimumTime(nums1: number[], nums2: number[], x: number): number {
  const n = nums1.length;
  const pairs = nums1.map((v, i) => [v, nums2[i]!] as [number, number]).sort((a, b) => a[1] - b[1]);
  const s1 = nums1.reduce((a, b) => a + b, 0);
  const s2 = nums2.reduce((a, b) => a + b, 0);
  const dp = new Array<number>(n + 1).fill(0);
  for (const [n1, n2] of pairs) {
    for (let j = n; j >= 1; j--) {
      dp[j] = Math.max(dp[j]!, dp[j - 1]! + n1 + j * n2);
    }
  }
  for (let t = 0; t <= n; t++) {
    if (s1 + t * s2 - dp[t]! <= x) return t;
  }
  return -1;
}`,
    python: `def minimumTime(nums1: list[int], nums2: list[int], x: int) -> int:
    if hasattr(nums1, 'to_py'): nums1 = nums1.to_py()
    if hasattr(nums2, 'to_py'): nums2 = nums2.to_py()
    nums1 = [int(v) for v in nums1]
    nums2 = [int(v) for v in nums2]
    n = len(nums1)
    pairs = sorted(zip(nums2, nums1))
    s1, s2 = sum(nums1), sum(nums2)
    dp = [0] * (n + 1)
    for n2, n1 in pairs:
        for j in range(n, 0, -1):
            dp[j] = max(dp[j], dp[j - 1] + n1 + j * n2)
    for t in range(n + 1):
        if s1 + t * s2 - dp[t] <= x:
            return t
    return -1`,
  },
  visibleTests: [
    { args: [[1, 2, 3], [1, 2, 3], 4], expected: 3 },
    { args: [[1, 2, 3], [3, 3, 3], 4], expected: -1 },
    { args: [[1, 2, 3], [1, 2, 3], 5], expected: 2 },
    { args: [[0], [0], 0], expected: 0 },
  ],
  hiddenTests: [
    { args: [[1], [1], 0], expected: 1 },
    { args: [[1], [0], 1], expected: 0 },
    { args: [[5], [3], 5], expected: 0 },
    { args: [[1, 1], [1, 1], 0], expected: -1 },
    { args: [[1, 2], [1, 2], 6], expected: 0 },
    { args: [[3, 3], [1, 1], 2], expected: 2 },
    { args: [[1, 2, 3], [1, 2, 3], 6], expected: 0 },
    { args: [[0, 0, 0], [0, 0, 0], 0], expected: 0 },
    { args: [[1000, 1000], [1000, 1000], 1000000], expected: 0 },
  ],
};
