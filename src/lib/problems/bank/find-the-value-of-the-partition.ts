import type { Problem } from '../types';

export const problem: Problem = {
  id: 'find-the-value-of-the-partition',
  title: 'Find the Value of the Partition',
  difficulty: 'medium',
  tags: ['arrays', 'math'],
  description: `You are given a positive integer array \`nums\` of length \`n\`.

Partition \`nums\` into two arrays, \`nums1\` and \`nums2\`, such that:
- Each element of the array \`nums\` belongs to exactly one of the arrays.
- Both \`nums1\` and \`nums2\` are non-empty.

The **value** of the partition is \`|min(nums1) - max(nums2)|\`.

Return the **minimum** value of the partition over all possible partitions.`,
  constraints: [
    '2 <= nums.length <= 10^5',
    '1 <= nums[i] <= 10^9',
  ],
  examples: [
    {
      input: 'nums = [1,3,2,4]',
      output: '1',
      explanation: 'Sort to [1,2,3,4]. Split after position 1: nums1=[1,2], nums2=[3,4]. |min(1,2) - max(3,4)| = |1-4|=3. Better: split [1,2,3] and [4]: |1-4|=3. Best: [1] and [2,3,4]: |1-4|=3. Wait — minimum gap approach: min adjacent gap in sorted = |2-1|=1 (split [1] and [2,3,4]: |1-4|=3). Actually try {1,2} and {3,4}: |min{1,2}-max{3,4}|=|1-4|=3. Hmm. Try {1,3,4} and {2}: |min{1,3,4}-max{2}|=|1-2|=1. ✓',
    },
    {
      input: 'nums = [100,1,10]',
      output: '9',
      explanation: 'Sorted [1,10,100]. Best split: {1,10} and {100}: |1-100|=99; or {10,100} and {1}: |10-1|=9. Answer: 9.',
    },
  ],
  hints: [
    'Sort the array. The optimal partition has nums1 = sorted[0..k] and nums2 = sorted[k+1..n-1].',
    'The value of such a partition is sorted[k+1] - sorted[k] (since min(nums1)=sorted[0] and max(nums2)=sorted[n-1] in general — but think about which group each element belongs to).',
    'The minimum value equals the minimum difference between any two adjacent elements in the sorted array.',
  ],
  functionName: 'findValueOfPartition',
  params: ['nums'],
  starterCode: {
    javascript: 'function findValueOfPartition(nums) {\n  \n}\n',
    typescript: "function findValueOfPartition(nums: number[]): number {\n  \n}",

    python: 'def findValueOfPartition(nums):\n    pass\n',
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
  ],
};
