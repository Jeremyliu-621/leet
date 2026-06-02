import type { Problem } from '../types';

export const problem: Problem = {
  id: 'find-good-indices',
  title: 'Find All Good Indices',
  difficulty: 'medium',
  tags: ['arrays', 'dynamic-programming'],
  description: `You are given a **0-indexed** integer array \`nums\` of size \`n\` and a positive integer \`k\`.

We call an index \`i\` in the range \`k <= i < n - k\` **good** if the following conditions are satisfied:

- The \`k\` elements that are just **before** the index \`i\` are in **non-increasing** order.
- The \`k\` elements that are just **after** the index \`i\` are in **non-decreasing** order.

Return an array of all good indices sorted in **increasing** order.`,
  constraints: [
    'n == nums.length',
    '1 <= n <= 10^5',
    '0 <= nums[i] <= 10^6',
    '1 <= k <= n',
  ],
  examples: [
    {
      input: 'nums = [2,1,1,1,3,4,1], k = 2',
      output: '[2,3]',
      explanation:
        'i=2: [2,1] is non-increasing, [1,3] is non-decreasing ✓. i=3: [1,1] is non-increasing, [3,4] is non-decreasing ✓.',
    },
    {
      input: 'nums = [2,1,1,2], k = 2',
      output: '[]',
      explanation: 'No valid index exists in range [2,1].',
    },
  ],
  hints: [
    'Level 1: For each index i in [k, n-1-k], brute-force check the k elements before and after. O(nk) time.',
    'Level 2: Precompute decLen[i] = length of the non-increasing suffix run ending at i. Then decLen[i-1] >= k means k elements before i are non-increasing.',
    'Level 3: decLen[0]=1; decLen[i] = nums[i]<=nums[i-1] ? decLen[i-1]+1 : 1. Similarly incLen[n-1]=1; incLen[i] = nums[i]<=nums[i+1] ? incLen[i+1]+1 : 1. Index i is good iff decLen[i-1]>=k and incLen[i+1]>=k. O(n) time.',
  ],
  functionName: 'goodIndices',
  params: ['nums', 'k'],
  starterCode: {
    javascript: `function goodIndices(nums, k) {
  const n = nums.length;
  const dec = new Array(n).fill(1), inc = new Array(n).fill(1);
  for (let i = 1; i < n; i++) if (nums[i] <= nums[i-1]) dec[i] = dec[i-1] + 1;
  for (let i = n-2; i >= 0; i--) if (nums[i] <= nums[i+1]) inc[i] = inc[i+1] + 1;
  const res = [];
  for (let i = k; i < n - k; i++) if (dec[i-1] >= k && inc[i+1] >= k) res.push(i);
  return res;
}`,
    typescript: `function goodIndices(nums: number[], k: number): number[] {
  const n = nums.length;
  const dec = new Array(n).fill(1), inc = new Array(n).fill(1);
  for (let i = 1; i < n; i++) if (nums[i] <= nums[i-1]) dec[i] = dec[i-1] + 1;
  for (let i = n-2; i >= 0; i--) if (nums[i] <= nums[i+1]) inc[i] = inc[i+1] + 1;
  const res: number[] = [];
  for (let i = k; i < n - k; i++) if (dec[i-1] >= k && inc[i+1] >= k) res.push(i);
  return res;
}`,
    python: `def goodIndices(nums, k):
    n = len(nums)
    dec, inc = [1]*n, [1]*n
    for i in range(1, n):
        if nums[i] <= nums[i-1]: dec[i] = dec[i-1] + 1
    for i in range(n-2, -1, -1):
        if nums[i] <= nums[i+1]: inc[i] = inc[i+1] + 1
    return [i for i in range(k, n-k) if dec[i-1] >= k and inc[i+1] >= k]`,
  },
  visibleTests: [
    { args: [[2, 1, 1, 1, 3, 4, 1], 2], expected: [2, 3] },
    { args: [[2, 1, 1, 2], 2], expected: [] },
  ],
  hiddenTests: [
    { args: [[1], 1], expected: [] },
    { args: [[1, 2, 1], 1], expected: [1] },
    { args: [[1, 1, 1, 1, 1], 2], expected: [2] },
    { args: [[5, 4, 3, 2, 1, 2, 3], 2], expected: [3, 4] },
    { args: [[1, 2, 3, 4, 5], 1], expected: [1, 2, 3] },
  ],
};
