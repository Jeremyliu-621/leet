import type { Problem } from '../types';

export const problem: Problem = {
  id: 'maximum-or',
  title: 'Maximum OR',
  difficulty: 'medium',
  tags: ['arrays', 'math'],
  description: `You are given a **0-indexed** integer array \`nums\` of length \`n\` and a non-negative integer \`k\`. In one operation you can choose **any** index \`i\` in the range \`[0, n - 1]\` and replace \`nums[i]\` with \`2 * nums[i]\`.

Return the **maximum** possible value of \`nums[0] OR nums[1] OR ... OR nums[n - 1]\` after applying the operation **exactly** \`k\` times.

**Note:** the result may exceed the 32-bit integer range.`,
  constraints: [
    '1 <= nums.length <= 10^5',
    '0 <= nums[i] <= 10^9',
    '0 <= k <= 15',
  ],
  examples: [
    {
      input: 'nums = [12, 9], k = 1',
      output: '30',
      explanation: 'Double nums[1] = 9 → 18. 12 OR 18 = 30.',
    },
    {
      input: 'nums = [8, 1, 2], k = 2',
      output: '35',
      explanation: 'Double nums[0] twice: 8 → 32. 32 OR 1 OR 2 = 35.',
    },
    {
      input: 'nums = [1, 2, 4, 8], k = 0',
      output: '15',
      explanation: 'No operations. 1 OR 2 OR 4 OR 8 = 15.',
    },
  ],
  hints: [
    'Applying all k doublings to a single element is always optimal. Spreading doublings across elements never produces a strictly better OR.',
    'Build prefix OR and suffix OR arrays. For each candidate element i, the OR value is (nums[i] << k) | prefixOR[i] | suffixOR[i]. Take the maximum.',
    "Because nums[i] can be up to 10^9 and k up to 15, the doubled value can exceed 32 bits. Use BigInt (JavaScript) or Python's arbitrary-precision integers to avoid overflow.",
  ],
  functionName: 'maximumOr',
  params: ['nums', 'k'],
  starterCode: {
    javascript: `function maximumOr(nums, k) {
  const n = nums.length;
  const prefix = new Array(n + 1).fill(0n);
  for (let i = 0; i < n; i++) prefix[i + 1] = prefix[i] | BigInt(nums[i]);
  const suffix = new Array(n + 1).fill(0n);
  for (let i = n - 1; i >= 0; i--) suffix[i] = suffix[i + 1] | BigInt(nums[i]);
  const shift = BigInt(k);
  let ans = 0n;
  for (let i = 0; i < n; i++) {
    const val = prefix[i] | (BigInt(nums[i]) << shift) | suffix[i + 1];
    if (val > ans) ans = val;
  }
  return Number(ans);
}`,
    typescript: `function maximumOr(nums: number[], k: number): number {
  const n = nums.length;
  const prefix = new Array<bigint>(n + 1).fill(0n);
  for (let i = 0; i < n; i++) prefix[i + 1] = prefix[i]! | BigInt(nums[i]!);
  const suffix = new Array<bigint>(n + 1).fill(0n);
  for (let i = n - 1; i >= 0; i--) suffix[i] = suffix[i + 1]! | BigInt(nums[i]!);
  const shift = BigInt(k);
  let ans = 0n;
  for (let i = 0; i < n; i++) {
    const val = prefix[i]! | (BigInt(nums[i]!) << shift) | suffix[i + 1]!;
    if (val > ans) ans = val;
  }
  return Number(ans);
}`,
    python: `def maximumOr(nums, k):
    if hasattr(nums, 'to_py'): nums = list(nums.to_py())
    n = len(nums)
    prefix = [0] * (n + 1)
    for i in range(n): prefix[i+1] = prefix[i] | nums[i]
    suffix = [0] * (n + 1)
    for i in range(n-1, -1, -1): suffix[i] = suffix[i+1] | nums[i]
    ans = 0
    for i in range(n):
        val = prefix[i] | (nums[i] << k) | suffix[i+1]
        if val > ans: ans = val
    return ans`,
  },
  visibleTests: [
    { args: [[12, 9], 1], expected: 30 },
    { args: [[8, 1, 2], 2], expected: 35 },
    { args: [[1, 2, 4, 8], 0], expected: 15 },
  ],
  hiddenTests: [
    { args: [[1], 0], expected: 1 },
    { args: [[1], 5], expected: 32 },
    { args: [[5, 3], 2], expected: 23 },
    { args: [[0, 1], 10], expected: 1024 },
    { args: [[7, 7], 3], expected: 63 },
    { args: [[2, 2, 2], 4], expected: 34 },
  ],
};
