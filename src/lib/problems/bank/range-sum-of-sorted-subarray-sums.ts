import type { Problem } from '../types';

export const problem: Problem = {
  id: 'range-sum-of-sorted-subarray-sums',
  title: 'Range Sum of Sorted Subarray Sums',
  difficulty: 'medium',
  tags: ['arrays', 'binary-search'],
  description: `You are given an integer array \`nums\` of length \`n\`. The array has \`n * (n + 1) / 2\` non-empty contiguous subarrays. Their sums are calculated, and the results are placed in an array in sorted (non-decreasing) order.

Return the sum of the numbers from position \`left\` to \`right\` (both **1-indexed**) in the resulting sorted array, modulo \`10^9 + 7\`.`,
  constraints: [
    '`n == nums.length`',
    '`1 <= nums.length <= 1000`',
    '`1 <= nums[i] <= 100`',
    '`1 <= left <= right <= n * (n + 1) / 2`',
  ],
  examples: [
    {
      input: 'nums = [1,2,3,4], n = 4, left = 1, right = 5',
      output: '13',
      explanation:
        'All subarray sums sorted: [1,2,3,3,4,5,6,7,9,10]. The sum of positions 1–5 is 1+2+3+3+4 = 13.',
    },
    {
      input: 'nums = [1,2,3,4], n = 4, left = 3, right = 4',
      output: '6',
      explanation: 'Positions 3 and 4 in the sorted list are both 3; sum = 6.',
    },
    {
      input: 'nums = [1,2,3,4], n = 4, left = 1, right = 10',
      output: '50',
      explanation: 'Sum of all 10 subarray sums = 1+2+3+3+4+5+6+7+9+10 = 50.',
    },
  ],
  hints: [
    'The brute-force approach is O(n² log n): generate all n*(n+1)/2 subarray sums using a double loop, sort them, then take a prefix sum over the range [left-1, right-1].',
    'For a faster approach (not required here): binary search on value `x` to count how many subarray sums ≤ x, using two pointers in O(n). Then sum all values ≤ x efficiently with another two-pointer pass. But the O(n² log n) brute force is fine for n ≤ 1000.',
    '```js\nfunction rangeSum(nums, n, left, right) {\n  const MOD = BigInt(1e9 + 7);\n  const sums = [];\n  for (let i = 0; i < n; i++) {\n    let s = 0;\n    for (let j = i; j < n; j++) {\n      s += nums[j];\n      sums.push(s);\n    }\n  }\n  sums.sort((a, b) => a - b);\n  let total = 0n;\n  for (let k = left - 1; k < right; k++) {\n    total = (total + BigInt(sums[k])) % MOD;\n  }\n  return Number(total);\n}\n```',
  ],
  functionName: 'rangeSum',
  params: ['nums', 'n', 'left', 'right'],
  starterCode: {
    javascript: `function rangeSum(nums, n, left, right) {

}`,
    typescript: "function rangeSum(nums: number[], n: number, left: number, right: number): number {\n\n}",

    python: `def rangeSum(nums: list[int], n: int, left: int, right: int) -> int:
    pass`,
  },
  visibleTests: [
    { args: [[1, 2, 3, 4], 4, 1, 5], expected: 13 },
    { args: [[1, 2, 3, 4], 4, 3, 4], expected: 6 },
    { args: [[1, 2, 3, 4], 4, 1, 10], expected: 50 },
  ],
  hiddenTests: [
    { args: [[5], 1, 1, 1], expected: 5 },
    { args: [[3, 2, 1], 3, 1, 6], expected: 20 },
    { args: [[2, 4, 3, 1], 4, 2, 7], expected: 26 },
    { args: [[1, 1], 2, 1, 3], expected: 4 },
    { args: [[10, 1, 10], 3, 3, 5], expected: 32 },
  ],
};
