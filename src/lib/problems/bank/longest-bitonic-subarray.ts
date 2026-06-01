import type { Problem } from '../types';

export const problem: Problem = {
  id: 'longest-bitonic-subarray',
  title: 'Longest Bitonic Subarray',
  difficulty: 'medium',
  tags: ['arrays', 'two-pointers'],
  description: `Given an integer array \`nums\`, return the length of the **longest bitonic subarray**.

A subarray is **bitonic** if it first **strictly increases** and then **strictly decreases**. A purely increasing subarray or a purely decreasing subarray is also considered bitonic (the turning point is at one end).

For example, \`[1, 3, 5, 4, 2]\` is bitonic (increases to 5, then decreases). \`[1, 2, 3, 4, 5]\` is bitonic (purely increasing). \`[5, 4, 3]\` is bitonic (purely decreasing).

**Approach:** Compute two auxiliary arrays:
- \`inc[i]\` — length of the longest strictly increasing run **ending** at index \`i\`.
- \`dec[i]\` — length of the longest strictly decreasing run **starting** at index \`i\`.

The bitonic length centered at index \`i\` is \`inc[i] + dec[i] - 1\`. Return the maximum over all indices.`,
  constraints: [
    '1 <= nums.length <= 10^5',
    '-10^4 <= nums[i] <= 10^4',
  ],
  examples: [
    {
      input: 'nums = [1,3,5,4,2]',
      output: '5',
      explanation: 'The entire array [1,3,5,4,2] is bitonic: it strictly increases to 5 then strictly decreases.',
    },
    {
      input: 'nums = [1,2,3,4,5]',
      output: '5',
      explanation: 'A purely increasing array is bitonic with the peak at the last element.',
    },
    {
      input: 'nums = [1,3,2,4,1]',
      output: '3',
      explanation: '[1,3,2] and [2,4,1] are both bitonic subarrays of length 3.',
    },
  ],
  functionName: 'longestBitonicSubarray',
  params: ['nums'],
  starterCode: {
    javascript: `function longestBitonicSubarray(nums) {
  const n = nums.length;
  const inc = new Array(n).fill(1);
  const dec = new Array(n).fill(1);
  for (let i = 1; i < n; i++) if (nums[i] > nums[i - 1]) inc[i] = inc[i - 1] + 1;
  for (let i = n - 2; i >= 0; i--) if (nums[i] > nums[i + 1]) dec[i] = dec[i + 1] + 1;
  let best = 1;
  for (let i = 0; i < n; i++) best = Math.max(best, inc[i] + dec[i] - 1);
  return best;
}`,
    typescript: `function longestBitonicSubarray(nums: number[]): number {
  const n = nums.length;
  const inc = new Array(n).fill(1) as number[];
  const dec = new Array(n).fill(1) as number[];
  for (let i = 1; i < n; i++) if (nums[i]! > nums[i - 1]!) inc[i]! = inc[i - 1]! + 1;
  for (let i = n - 2; i >= 0; i--) if (nums[i]! > nums[i + 1]!) dec[i]! = dec[i + 1]! + 1;
  let best = 1;
  for (let i = 0; i < n; i++) best = Math.max(best, inc[i]! + dec[i]! - 1);
  return best;
}`,
    python: `def longestBitonicSubarray(nums):
    nums = list(nums.to_py()) if hasattr(nums, 'to_py') else list(nums)
    n = len(nums)
    inc = [1] * n
    dec = [1] * n
    for i in range(1, n):
        if nums[i] > nums[i - 1]: inc[i] = inc[i - 1] + 1
    for i in range(n - 2, -1, -1):
        if nums[i] > nums[i + 1]: dec[i] = dec[i + 1] + 1
    return max(inc[i] + dec[i] - 1 for i in range(n))`,
  },
  visibleTests: [
    { args: [[1, 3, 5, 4, 2]], expected: 5 },
    { args: [[1, 2, 3, 4, 5]], expected: 5 },
    { args: [[1, 3, 2, 4, 1]], expected: 3 },
  ],
  hiddenTests: [
    { args: [[5, 4, 3, 2, 1]], expected: 5 },
    { args: [[1]], expected: 1 },
    { args: [[1, 2]], expected: 2 },
    { args: [[2, 1]], expected: 2 },
    { args: [[1, 1, 1]], expected: 1 },
    { args: [[2, 5, 1, 4, 3]], expected: 3 },
    { args: [[1, 3, 5, 2, 7, 4]], expected: 4 },
    { args: [[1, 3, 2, 2, 5]], expected: 3 },
    { args: [[10, 20, 30, 25, 15, 5]], expected: 6 },
  ],
  hints: [
    'Build an `inc` array: `inc[i]` is the length of the longest strictly increasing run ending at index `i`. Scan left to right — if `nums[i] > nums[i-1]`, then `inc[i] = inc[i-1] + 1`, otherwise `inc[i] = 1`.',
    'Similarly build a `dec` array scanning right to left: `dec[i]` is the length of the longest strictly decreasing run starting at index `i`.',
    'The longest bitonic subarray with its peak at index `i` has length `inc[i] + dec[i] - 1` (the peak element is counted once). Return the maximum over all `i`.',
  ],
};
