import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-subarrays-with-median-k',
  title: 'Count Subarrays With Median K',
  difficulty: 'hard',
  tags: ['arrays', 'hash-map'],
  description: `You are given an array \`nums\` of size \`n\`, and an integer \`k\`. Return the **number of non-empty subarrays** of \`nums\` whose **median** equals \`k\`.

The **median** of an array is the middle element after sorting. For an array of even length, the median is the **left-middle** element (e.g., the median of \`[3,1,2,4]\` is \`2\`).

Note: \`k\` is guaranteed to appear in \`nums\`.`,
  constraints: [
    'n == nums.length',
    '1 <= n <= 10^5',
    '1 <= nums[i], k <= n',
    'The integers in nums are distinct',
    'k appears in nums exactly once',
  ],
  examples: [
    {
      input: 'nums = [3,2,1,4,5], k = 4',
      output: '3',
      explanation: 'Subarrays with median 4: [4] (median=4), [4,5] (sorted [4,5] left-middle=4), [1,4,5] (median=4). Count = 3.',
    },
    {
      input: 'nums = [2,3,1], k = 3',
      output: '1',
      explanation: 'Only [3] has median 3. [2,3]: median=2. [3,1]: median=1. [2,3,1] sorted [1,2,3]: median=2. Count = 1.',
    },
  ],
  hints: [
    'Level 1: Convert each element to +1 if > k, -1 if < k, 0 if == k. A subarray has median k iff it contains k AND its prefix sum from k\'s position to both ends has a balance of 0 (odd length) or 1 (even length, more big elements).',
    'Level 2: Find the index of k. For any subarray [i..j] containing k\'s position, define balance = count(>k) - count(<k) in the subarray. Median is k iff balance == 0 (odd-length subarray: k is middle) or balance == 1 (even-length: k is left-middle).',
    'Level 3: Use a hash map. From k\'s position, compute running balance going left (store counts) and going right (count matches where rightBalance + leftBalance ∈ {0,1}). O(n) time.',
  ],
  functionName: 'countSubarrays',
  params: ['nums', 'k'],
  starterCode: {
    javascript: `function countSubarrays(nums, k) {
  const n = nums.length;
  const idx = nums.indexOf(k);
  const cnt = new Map([[0, 1]]);
  let balance = 0;
  for (let i = idx - 1; i >= 0; i--) {
    balance += nums[i] > k ? 1 : -1;
    cnt.set(balance, (cnt.get(balance) ?? 0) + 1);
  }
  let ans = (cnt.get(0) ?? 0) + (cnt.get(1) ?? 0);
  balance = 0;
  for (let i = idx + 1; i < n; i++) {
    balance += nums[i] > k ? 1 : -1;
    ans += (cnt.get(-balance) ?? 0) + (cnt.get(1 - balance) ?? 0);
  }
  return ans;
}`,
    typescript: `function countSubarrays(nums: number[], k: number): number {
  const n = nums.length;
  const idx = nums.indexOf(k);
  const cnt = new Map<number, number>([[0, 1]]);
  let balance = 0;
  for (let i = idx - 1; i >= 0; i--) {
    balance += nums[i]! > k ? 1 : -1;
    cnt.set(balance, (cnt.get(balance) ?? 0) + 1);
  }
  let ans = (cnt.get(0) ?? 0) + (cnt.get(1) ?? 0);
  balance = 0;
  for (let i = idx + 1; i < n; i++) {
    balance += nums[i]! > k ? 1 : -1;
    ans += (cnt.get(-balance) ?? 0) + (cnt.get(1 - balance) ?? 0);
  }
  return ans;
}`,
    python: `def countSubarrays(nums, k):
    nums = list(nums.to_py()) if hasattr(nums, 'to_py') else list(nums)
    n = len(nums)
    idx = nums.index(k)
    cnt = {0: 1}
    balance = 0
    for i in range(idx - 1, -1, -1):
        balance += 1 if nums[i] > k else -1
        cnt[balance] = cnt.get(balance, 0) + 1
    ans = cnt.get(0, 0) + cnt.get(1, 0)
    balance = 0
    for i in range(idx + 1, n):
        balance += 1 if nums[i] > k else -1
        ans += cnt.get(-balance, 0) + cnt.get(1 - balance, 0)
    return ans`,
  },
  visibleTests: [
    { args: [[3, 2, 1, 4, 5], 4], expected: 3 },
    { args: [[2, 3, 1], 3], expected: 1 },
    { args: [[1], 1], expected: 1 },
  ],
  hiddenTests: [
    { args: [[1, 2, 3], 2], expected: 3 },
    { args: [[3, 2, 1], 2], expected: 3 },
    { args: [[5, 3, 1, 4, 2], 3], expected: 6 },
    { args: [[1, 3, 2], 2], expected: 3 },
    { args: [[2, 1], 2], expected: 1 },
  ],
};
