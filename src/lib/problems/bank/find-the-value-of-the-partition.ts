import type { Problem } from '../types';

export const problem: Problem = {
  id: 'find-the-value-of-the-partition',
  title: 'Find the Value of the Partition',
  difficulty: 'medium',
  tags: ['arrays', 'math'],
  description: `You are given a **positive** integer array \`nums\`.

Partition \`nums\` into two arrays, \`nums1\` and \`nums2\`, such that:
- Each element of \`nums\` belongs to **exactly one** of the two arrays.
- **Both arrays are non-empty.**

The **value** of the partition is \`|min(nums1) - max(nums2)|\`.

Return the **minimum** value of the partition over all possible partitions of \`nums\`.`,
  constraints: [
    '2 <= nums.length <= 10^5',
    '1 <= nums[i] <= 10^9',
  ],
  examples: [
    {
      input: 'nums = [1,3,2,4]',
      output: '1',
      explanation: 'Sort to [1,2,3,4]. Put {1,3,4} in nums1 and {2} in nums2: |min{1,3,4} - max{2}| = |1-2| = 1.',
    },
    {
      input: 'nums = [100,1,10]',
      output: '9',
      explanation: 'Sort to [1,10,100]. Put {10,100} in nums1 and {1} in nums2: |10-1| = 9.',
    },
  ],
  hints: [
    'Sort the array. The key insight is that the minimum |min(nums1) - max(nums2)| equals the minimum difference between any two adjacent elements in the sorted array.',
    'For any adjacent pair (sorted[i], sorted[i+1]): put sorted[i] in nums1 alone (or with smaller elements), and sorted[i+1] in nums2 (or with larger). Then min(nums1) = sorted[i] and max(nums2) = sorted[i+1].',
    'This gives |sorted[i] - sorted[i+1]| = sorted[i+1] - sorted[i] for the value.',
    'Minimize over all adjacent pairs: answer = min(sorted[i+1] - sorted[i]) for i = 0..n-2.',
  ],
  functionName: 'findValueOfPartition',
  params: ['nums'],
  starterCode: {
    javascript: `function findValueOfPartition(nums) {
  nums.sort((a, b) => a - b);
  let ans = Infinity;
  for (let i = 0; i < nums.length - 1; i++) {
    ans = Math.min(ans, nums[i + 1] - nums[i]);
  }
  return ans;
}`,
    typescript: `function findValueOfPartition(nums: number[]): number {
  nums.sort((a, b) => a - b);
  let ans = Infinity;
  for (let i = 0; i < nums.length - 1; i++) {
    ans = Math.min(ans, nums[i + 1]! - nums[i]!);
  }
  return ans;
}`,
    python: `def findValueOfPartition(nums):
    nums.sort()
    return min(nums[i+1] - nums[i] for i in range(len(nums) - 1))`,
  },
  visibleTests: [
    { args: [[1, 3, 2, 4]], expected: 1 },
    { args: [[100, 1, 10]], expected: 9 },
    { args: [[3, 3, 3]], expected: 0 },
  ],
  hiddenTests: [
    { args: [[1, 2]], expected: 1 },
    { args: [[10, 10]], expected: 0 },
    { args: [[1, 5, 3]], expected: 2 },
    { args: [[1, 1000000000]], expected: 999999999 },
    { args: [[2, 4, 6, 8]], expected: 2 },
  ],
};
