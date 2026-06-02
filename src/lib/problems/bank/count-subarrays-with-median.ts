import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-subarrays-with-median',
  title: 'Count Subarrays with Median K',
  difficulty: 'hard',
  tags: ['arrays', 'hash-map'],
  description: `You are given an array \`nums\` of size \`n\` consisting of **distinct** integers from \`1\` to \`n\` and a positive integer \`k\`.

Return the number of non-empty subarrays in \`nums\` where \`k\` is the **median** of the subarray.

The **median** of an array is the middle element after sorting. If the array has even length, the median is the left middle element.

**Example 1:**
\`\`\`
Input: nums = [3,2,1,4,5], k = 4
Output: 3
Explanation: Subarrays with median 4: [4], [2,1,4,5], [3,2,1,4,5].
\`\`\`

**Example 2:**
\`\`\`
Input: nums = [2,3,1], k = 3
Output: 1
Explanation: Only [3] has median 3.
\`\`\`

**Constraints:**
- \`n == nums.length\`
- \`1 <= n <= 10^5\`
- \`1 <= nums[i], k <= n\`
- All integers in \`nums\` are distinct.`,
  constraints: ['1 <= n <= 10^5', '1 <= nums[i], k <= n', 'All integers are distinct.'],
  examples: [
    { input: 'nums = [3,2,1,4,5], k = 4', output: '3' },
    { input: 'nums = [2,3,1], k = 3', output: '1' },
  ],
  hints: [
    'Find the index of k. For any subarray containing k, assign +1 to elements > k, -1 to elements < k. The median is k iff the running balance is 0 (odd length) or 1 (even length with k as left-center).',
    'Compute balance sums going left from k\'s index. Store frequency of each balance in a map.',
    'Going right from k\'s index, for each right balance r, count left balances in {-r, -r+1} (corresponding to total balance 0 or 1 when combined). Sum and return.',
  ],
  functionName: 'countSubarrays',
  params: ['nums', 'k'],
  starterCode: {
    javascript: `function countSubarrays(nums, k) {
  const ki = nums.indexOf(k);
  const freq = new Map([[0, 1]]);
  let balance = 0;
  for (let i = ki - 1; i >= 0; i--) {
    balance += nums[i] > k ? 1 : -1;
    freq.set(balance, (freq.get(balance) || 0) + 1);
  }
  let count = 0, rBalance = 0;
  for (let j = ki; j < nums.length; j++) {
    if (j > ki) rBalance += nums[j] > k ? 1 : -1;
    count += (freq.get(-rBalance) || 0) + (freq.get(1 - rBalance) || 0);
  }
  return count;
}`,
    typescript: `function countSubarrays(nums: number[], k: number): number {
  const ki = nums.indexOf(k);
  const freq = new Map<number, number>([[0, 1]]);
  let balance = 0;
  for (let i = ki - 1; i >= 0; i--) {
    balance += nums[i]! > k ? 1 : -1;
    freq.set(balance, (freq.get(balance) ?? 0) + 1);
  }
  let count = 0, rBalance = 0;
  for (let j = ki; j < nums.length; j++) {
    if (j > ki) rBalance += nums[j]! > k ? 1 : -1;
    count += (freq.get(-rBalance) ?? 0) + (freq.get(1 - rBalance) ?? 0);
  }
  return count;
}`,
    python: `def countSubarrays(nums, k):
    ki = nums.index(k)
    freq = {0: 1}
    balance = 0
    for i in range(ki - 1, -1, -1):
        balance += 1 if nums[i] > k else -1
        freq[balance] = freq.get(balance, 0) + 1
    count = r_balance = 0
    for j in range(ki, len(nums)):
        if j > ki:
            r_balance += 1 if nums[j] > k else -1
        count += freq.get(-r_balance, 0) + freq.get(1 - r_balance, 0)
    return count`,
  },
  visibleTests: [
    { args: [[3, 2, 1, 4, 5], 4], expected: 3 },
    { args: [[2, 3, 1], 3], expected: 1 },
    { args: [[1], 1], expected: 1 },
  ],
  hiddenTests: [
    { args: [[1, 2, 3, 4, 5], 3], expected: 5 },
    { args: [[5, 4, 3, 2, 1], 3], expected: 5 },
    { args: [[2, 1], 1], expected: 2 },
    { args: [[1, 2], 2], expected: 1 },
  ],
};
