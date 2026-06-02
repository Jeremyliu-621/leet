import type { Problem } from '../types';

export const problem: Problem = {
  id: 'maximum-value-at-a-given-index-in-a-bounded-array',
  title: 'Maximum Value at a Given Index in a Bounded Array',
  difficulty: 'medium',
  tags: ['arrays', 'binary-search', 'math'],
  description: `You are given three positive integers: \`n\`, \`index\`, and \`maxSum\`.

Construct an array \`nums\` (0-indexed) that satisfies all of the following conditions:

- \`nums.length == n\`
- \`nums[i]\` is a **positive** integer where \`1 <= nums[i]\` for all \`i\`.
- \`|nums[i] - nums[i+1]| <= 1\` for all valid \`i\` (adjacent elements differ by at most 1).
- The sum of all elements of \`nums\` does not exceed \`maxSum\`.

Maximize \`nums[index]\` and return it.`,
  constraints: [
    '1 <= n <= maxSum <= 10^9',
    '0 <= index < n',
  ],
  examples: [
    {
      input: 'n = 4, index = 2, maxSum = 6',
      output: '2',
      explanation: 'Array [1, 1, 2, 1] has sum 5 ≤ 6, with nums[2] = 2.',
    },
    {
      input: 'n = 6, index = 1, maxSum = 10',
      output: '3',
      explanation: 'Array [2, 3, 2, 1, 1, 1] has sum 10 = 10, with nums[1] = 3.',
    },
    {
      input: 'n = 1, index = 0, maxSum = 10',
      output: '10',
      explanation: 'Only one element, it can be at most 10.',
    },
  ],
  hints: [
    'Binary search on the answer v = nums[index].',
    'For a given v, compute the minimum possible sum: left side contributes sum of max(1, v-k) for k=0..index and right side for k=0..n-1-index.',
    'Arithmetic sum formula: for length m from index and value v, cost = v*min(v,m) - min(v,m)*(min(v,m)-1)/2 + max(0, m-v).',
  ],
  functionName: 'maxValue',
  params: ['n', 'index', 'maxSum'],
  starterCode: {
    javascript: `function maxValue(n, index, maxSum) {
  function minCost(v, len) {
    if (v >= len) return (2n * BigInt(v) - BigInt(len) + 1n) * BigInt(len) / 2n;
    return BigInt(v) * (BigInt(v) + 1n) / 2n + BigInt(len - v);
  }
  let lo = 1, hi = maxSum;
  while (lo < hi) {
    const mid = (lo + hi + 1) >> 1;
    const total = minCost(mid, index + 1) + minCost(mid, n - index) - BigInt(mid);
    if (total <= BigInt(maxSum)) lo = mid;
    else hi = mid - 1;
  }
  return lo;
}`,
    typescript: `function maxValue(n: number, index: number, maxSum: number): number {
  function minCost(v: number, len: number): bigint {
    if (v >= len) return (2n * BigInt(v) - BigInt(len) + 1n) * BigInt(len) / 2n;
    return BigInt(v) * (BigInt(v) + 1n) / 2n + BigInt(len - v);
  }
  let lo = 1, hi = maxSum;
  while (lo < hi) {
    const mid = (lo + hi + 1) >> 1;
    const total = minCost(mid, index + 1) + minCost(mid, n - index) - BigInt(mid);
    if (total <= BigInt(maxSum)) lo = mid;
    else hi = mid - 1;
  }
  return lo;
}`,
    python: `def maxValue(n: int, index: int, maxSum: int) -> int:
    def min_cost(v: int, length: int) -> int:
        if v >= length:
            return (2 * v - length + 1) * length // 2
        return v * (v + 1) // 2 + (length - v)
    lo, hi = 1, maxSum
    while lo < hi:
        mid = (lo + hi + 1) // 2
        total = min_cost(mid, index + 1) + min_cost(mid, n - index) - mid
        if total <= maxSum:
            lo = mid
        else:
            hi = mid - 1
    return lo`,
  },
  visibleTests: [
    { args: [4, 2, 6], expected: 2 },
    { args: [6, 1, 10], expected: 3 },
    { args: [1, 0, 10], expected: 10 },
    { args: [3, 2, 18], expected: 7 },
  ],
  hiddenTests: [
    { args: [1, 0, 1], expected: 1 },
    { args: [2, 0, 2], expected: 1 },
    { args: [2, 1, 2], expected: 1 },
    { args: [2, 0, 3], expected: 2 },
    { args: [5, 2, 15], expected: 4 },
    { args: [10, 5, 20], expected: 4 },
    { args: [1000000000, 0, 1000000000], expected: 1 },
    { args: [4, 0, 10], expected: 4 },
    { args: [3, 1, 10], expected: 4 },
  ],
};
