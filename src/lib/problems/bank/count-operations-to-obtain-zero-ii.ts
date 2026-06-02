import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-operations-to-obtain-zero-ii',
  title: 'Minimum Operations to Reduce X to Zero',
  difficulty: 'medium',
  tags: ['sliding-window'],
  description: `You are given an integer array \`nums\` and an integer \`x\`. In one operation you can either remove the leftmost or the rightmost element from \`nums\` and subtract its value from \`x\`.

Return the **minimum number of operations** to reduce \`x\` to **exactly** 0, or \`-1\` if it is not possible.

**Example 1:**
\`\`\`
Input: nums = [1,1,4,2,3], x = 5
Output: 2
Explanation: Remove 3 then 2 from the right. (5 - 3 - 2 = 0)
\`\`\`

**Example 2:**
\`\`\`
Input: nums = [5,6,7,8,9], x = 4
Output: -1
\`\`\`

**Example 3:**
\`\`\`
Input: nums = [3,2,20,1,1,3], x = 10
Output: 5
\`\`\`

**Constraints:**
- \`1 ≤ nums.length ≤ 10⁵\`
- \`1 ≤ nums[i] ≤ 10⁴\`
- \`1 ≤ x ≤ 10⁹\``,
  constraints: [
    '1 ≤ nums.length ≤ 10⁵',
    '1 ≤ nums[i] ≤ 10⁴',
  ],
  examples: [
    { input: 'nums = [1,1,4,2,3], x = 5', output: '2' },
    { input: 'nums = [5,6,7,8,9], x = 4', output: '-1' },
    { input: 'nums = [3,2,20,1,1,3], x = 10', output: '5' },
  ],
  hints: [
    'Removing from both ends = keeping a contiguous subarray.',
    'Find the longest subarray with sum = total − x.',
    'Answer = n − longest subarray length (or −1 if no such subarray exists).',
    'Use a sliding window for the longest subarray with a given sum.',
  ],
  functionName: 'minOperations',
  params: ['nums', 'x'],
  starterCode: {
    javascript: `function minOperations(nums, x) {
  const total = nums.reduce((a, b) => a + b, 0);
  const target = total - x;
  if (target < 0) return -1;
  if (target === 0) return nums.length;
  let left = 0, sum = 0, maxLen = -1;
  for (let right = 0; right < nums.length; right++) {
    sum += nums[right];
    while (sum > target) sum -= nums[left++];
    if (sum === target) maxLen = Math.max(maxLen, right - left + 1);
  }
  return maxLen === -1 ? -1 : nums.length - maxLen;
}`,
    typescript: `function minOperations(nums: number[], x: number): number {
  const total = nums.reduce((a, b) => a + b, 0);
  const target = total - x;
  if (target < 0) return -1;
  if (target === 0) return nums.length;
  let left = 0, sum = 0, maxLen = -1;
  for (let right = 0; right < nums.length; right++) {
    sum += nums[right]!;
    while (sum > target) sum -= nums[left++]!;
    if (sum === target) maxLen = Math.max(maxLen, right - left + 1);
  }
  return maxLen === -1 ? -1 : nums.length - maxLen;
}`,
    python: `def minOperations(nums, x):
    total = sum(nums)
    target = total - x
    if target < 0:
        return -1
    if target == 0:
        return len(nums)
    left = cur_sum = 0
    max_len = -1
    for right, v in enumerate(nums):
        cur_sum += v
        while cur_sum > target:
            cur_sum -= nums[left]
            left += 1
        if cur_sum == target:
            max_len = max(max_len, right - left + 1)
    return -1 if max_len == -1 else len(nums) - max_len`,
  },
  visibleTests: [
    { args: [[1, 1, 4, 2, 3], 5], expected: 2 },
    { args: [[5, 6, 7, 8, 9], 4], expected: -1 },
    { args: [[3, 2, 20, 1, 1, 3], 10], expected: 5 },
  ],
  hiddenTests: [
    { args: [[1, 1], 3], expected: -1 },
    { args: [[1, 1], 2], expected: 2 },
    { args: [[1], 1], expected: 1 },
    { args: [[2, 3, 1, 1, 1, 1, 1], 5], expected: 2 },
  ],
};
