import type { Problem } from '../types';

export const problem: Problem = {
  id: 'subarray-product-less-than-k',
  title: 'Subarray Product Less Than K',
  difficulty: 'medium',
  tags: ['sliding-window', 'arrays'],
  description: `Given an array of positive integers \`nums\` and a positive integer \`k\`, return the **number of contiguous subarrays** where the product of all elements is strictly less than \`k\`.

A sliding window works here because all elements are positive: expanding the right boundary can only increase the product, and shrinking the left boundary can only decrease it.

When the window \`[l, r]\` has product < \`k\`, all \`r - l + 1\` subarrays ending at \`r\` that start at or after \`l\` are valid.`,
  constraints: [
    '1 <= nums.length <= 3 * 10^4',
    '1 <= nums[i] <= 1000',
    '0 <= k <= 10^6',
  ],
  examples: [
    {
      input: 'nums = [10,5,2,6], k = 100',
      output: '8',
      explanation: '[10], [5], [2], [6], [10,5], [5,2], [2,6], [5,2,6] — 8 subarrays.',
    },
    {
      input: 'nums = [1,2,3], k = 0',
      output: '0',
      explanation: 'k = 0, no subarray product can be < 0.',
    },
    {
      input: 'nums = [1,1,1], k = 2',
      output: '6',
      explanation: 'All 6 subarrays have product 1.',
    },
  ],
  hints: [
    'Since all `nums[i] >= 1`, the product in the window only grows as you expand right and shrinks as you shrink left. This makes a sliding window valid — the invariant is monotonic.',
    'Maintain `product = 1` for the window `[l, r]`. Multiply in `nums[r]`. While `product >= k`, divide out `nums[l]` and advance `l`. Each valid window `[l, r]` contributes `r - l + 1` subarrays (those ending at `r`).',
    '`let l = 0, product = 1, count = 0; for (let r = 0; r < nums.length; r++) { product *= nums[r]; while (product >= k && l <= r) { product /= nums[l++]; } count += r - l + 1; } return count;`',
  ],
  functionName: 'subarrayProductLessThanK',
  params: ['nums', 'k'],
  starterCode: {
    javascript: `function subarrayProductLessThanK(nums, k) {
  let l = 0, product = 1, count = 0;
  for (let r = 0; r < nums.length; r++) {
    product *= nums[r];
    while (product >= k && l <= r) product /= nums[l++];
    count += r - l + 1;
  }
  return count;
}`,
    typescript: `function subarrayProductLessThanK(nums: number[], k: number): number {
  let l = 0, product = 1, count = 0;
  for (let r = 0; r < nums.length; r++) {
    product *= nums[r]!;
    while (product >= k && l <= r) product /= nums[l++]!;
    count += r - l + 1;
  }
  return count;
}`,
    python: `def subarrayProductLessThanK(nums: list[int], k: int) -> int:
    if hasattr(nums, 'to_py'): nums = nums.to_py()
    nums = [int(x) for x in nums]; k = int(k)
    l, product, count = 0, 1, 0
    for r in range(len(nums)):
        product *= nums[r]
        while product >= k and l <= r: product //= nums[l]; l += 1
        count += r - l + 1
    return count`,
  },
  visibleTests: [
    { args: [[10, 5, 2, 6], 100], expected: 8 },
    { args: [[1, 2, 3], 0], expected: 0 },
    { args: [[1, 1, 1], 2], expected: 6 },
    { args: [[1, 2, 3, 4], 10], expected: 7 },
  ],
  hiddenTests: [
    { args: [[1], 1], expected: 0 },
    { args: [[1], 2], expected: 1 },
    { args: [[10, 9, 10, 4, 3, 8, 3, 3, 6, 2, 10, 10, 9, 3], 19], expected: 18 },
    { args: [[2, 3, 5], 100], expected: 6 },
  ],
};
