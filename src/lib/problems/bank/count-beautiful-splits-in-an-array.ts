import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-beautiful-splits-in-an-array',
  title: 'Count Beautiful Splits in an Array',
  difficulty: 'medium',
  tags: ['arrays', 'dynamic-programming'],
  description: `You are given an array \`nums\`.

A split of an array is **beautiful** if:

1. The array is split into three subarrays: \`nums[0..i-1]\`, \`nums[i..j-1]\`, and \`nums[j..n-1]\`, where \`0 < i < j < n\`.
2. The first subarray is a **prefix** of the second subarray, **OR** the second subarray is a **prefix** of the third subarray.

Return the number of beautiful splits.`,
  constraints: [
    '2 <= nums.length <= 5000',
    '0 <= nums[i] <= 50',
  ],
  examples: [
    {
      input: 'nums = [1,1,2,1]',
      output: '2',
      explanation: 'Split (1,2): [1] is prefix of [1,2]; Split (1,3): [1] is prefix of [1,2,1]. Both are beautiful.',
    },
    {
      input: 'nums = [1,2,3,4]',
      output: '0',
      explanation: 'No split has the first subarray as a prefix of the second, or the second as a prefix of the third.',
    },
  ],
  hints: [
    'Level 1: Precompute a 2D LCP (longest common prefix) table: lcp[i][j] = length of the longest common prefix of nums[i..] and nums[j..].',
    'Level 2: Build lcp bottom-up: lcp[i][j] = (nums[i]==nums[j]) ? lcp[i+1][j+1]+1 : 0. Then for each pair (i,j) with 0<i<j<n, check: cond1 = i<=j-i && lcp[0][i]>=i; cond2 = j-i<=n-j && lcp[i][j]>=j-i.',
    'Level 3: Count all (i,j) pairs where cond1 || cond2 is true. The LCP table is O(n²) space and time.',
  ],
  functionName: 'beautifulSplits',
  params: ['nums'],
  starterCode: {
    javascript: `function beautifulSplits(nums) {
  const n = nums.length;
  const lcp = Array.from({length: n + 1}, () => new Array(n + 1).fill(0));
  for (let i = n - 1; i >= 0; i--)
    for (let j = n - 1; j >= 0; j--)
      lcp[i][j] = nums[i] === nums[j] ? lcp[i+1][j+1] + 1 : 0;
  let count = 0;
  for (let i = 1; i < n - 1; i++) {
    for (let j = i + 1; j < n; j++) {
      const cond1 = i <= j - i && lcp[0][i] >= i;
      const cond2 = j - i <= n - j && lcp[i][j] >= j - i;
      if (cond1 || cond2) count++;
    }
  }
  return count;
}`,
    typescript: `function beautifulSplits(nums: number[]): number {
  const n = nums.length;
  const lcp: number[][] = Array.from({length: n + 1}, () => new Array(n + 1).fill(0));
  for (let i = n - 1; i >= 0; i--)
    for (let j = n - 1; j >= 0; j--)
      lcp[i]![j] = nums[i] === nums[j] ? lcp[i+1]![j+1]! + 1 : 0;
  let count = 0;
  for (let i = 1; i < n - 1; i++) {
    for (let j = i + 1; j < n; j++) {
      const cond1 = i <= j - i && lcp[0]![i]! >= i;
      const cond2 = j - i <= n - j && lcp[i]![j]! >= j - i;
      if (cond1 || cond2) count++;
    }
  }
  return count;
}`,
    python: `def beautifulSplits(nums):
    n = len(nums)
    lcp = [[0] * (n + 1) for _ in range(n + 1)]
    for i in range(n - 1, -1, -1):
        for j in range(n - 1, -1, -1):
            lcp[i][j] = lcp[i+1][j+1] + 1 if nums[i] == nums[j] else 0
    count = 0
    for i in range(1, n - 1):
        for j in range(i + 1, n):
            cond1 = i <= j - i and lcp[0][i] >= i
            cond2 = j - i <= n - j and lcp[i][j] >= j - i
            if cond1 or cond2:
                count += 1
    return count`,
  },
  visibleTests: [
    {
      args: [[1,1,2,1]],
      expected: 2,
    },
    {
      args: [[1,2,3,4]],
      expected: 0,
    },
  ],
  hiddenTests: [
    {
      args: [[1,1,1,1]],
      expected: 3,
    },
    {
      args: [[1,1,1]],
      expected: 1,
    },
    {
      args: [[1,2,1,2,1]],
      expected: 2,
    },
    {
      args: [[1,1,2,2]],
      expected: 3,
    },
  ],
};
