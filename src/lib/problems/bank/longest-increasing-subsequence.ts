import type { Problem } from '../types';

export const problem: Problem = {
  id: 'longest-increasing-subsequence',
  title: 'Longest Increasing Subsequence',
  difficulty: 'hard',
  tags: ['arrays', 'binary-search', 'dynamic-programming'],
  description: `Given an integer array \`nums\`, return the **length of the longest strictly increasing subsequence**.

A **subsequence** is a sequence derived from the array by deleting some or no elements without changing the order of the remaining elements.

**Example:** \`nums = [10,9,2,5,3,7,101,18]\` — one longest increasing subsequence is \`[2,3,7,101]\` with length **4**.

The O(n²) DP solution is acceptable, but the O(n log n) patience sorting approach with binary search is the elegant solution.`,
  constraints: [
    '1 <= nums.length <= 1000',
    '-10000 <= nums[i] <= 10000',
  ],
  examples: [
    {
      input: 'nums = [10,9,2,5,3,7,101,18]',
      output: '4',
      explanation: 'The LIS is [2,3,7,101] or [2,3,7,18], both of length 4.',
    },
    {
      input: 'nums = [0,1,0,3,2,3]',
      output: '4',
      explanation: 'The LIS is [0,1,2,3] with length 4.',
    },
    {
      input: 'nums = [7,7,7,7,7]',
      output: '1',
      explanation: 'All elements are equal; strictly increasing means length is 1.',
    },
  ],
  hints: [
    'The O(n²) approach: let dp[i] = length of LIS ending at index i. For each i, check all j < i where nums[j] < nums[i] and take dp[j] + 1. The answer is max(dp).',
    'For O(n log n): maintain a "tails" array where tails[i] is the smallest tail element of all increasing subsequences of length i+1. For each number, binary search in tails for its insertion position and update.',
    '`// O(n log n) patience sort approach\nconst tails = [];\nfor (const num of nums) {\n  let lo = 0, hi = tails.length;\n  while (lo < hi) {\n    const mid = (lo + hi) >> 1;\n    if (tails[mid] < num) lo = mid + 1;\n    else hi = mid;\n  }\n  tails[lo] = num;\n}\nreturn tails.length;`',
  ],
  functionName: 'lengthOfLIS',
  params: ['nums'],
  starterCode: {
    javascript: `function lengthOfLIS(nums) {
  const tails = [];
  for (const num of nums) {
    let lo = 0, hi = tails.length;
    while (lo < hi) {
      const mid = (lo + hi) >> 1;
      if (tails[mid] < num) lo = mid + 1;
      else hi = mid;
    }
    tails[lo] = num;
  }
  return tails.length;
}`,
    typescript: `function lengthOfLIS(nums: number[]): number {
  const tails: number[] = [];
  for (const num of nums) {
    let lo = 0, hi = tails.length;
    while (lo < hi) {
      const mid = (lo + hi) >> 1;
      if (tails[mid]! < num) lo = mid + 1;
      else hi = mid;
    }
    tails[lo] = num;
  }
  return tails.length;
}`,
    python: `def lengthOfLIS(nums):
    nums = list(nums.to_py()) if hasattr(nums, 'to_py') else list(nums)
    import bisect
    tails = []
    for num in nums:
        pos = bisect.bisect_left(tails, num)
        if pos == len(tails): tails.append(num)
        else: tails[pos] = num
    return len(tails)`,
  },
  visibleTests: [
    { args: [[10, 9, 2, 5, 3, 7, 101, 18]], expected: 4 },
    { args: [[0, 1, 0, 3, 2, 3]], expected: 4 },
    { args: [[7, 7, 7, 7, 7]], expected: 1 },
  ],
  hiddenTests: [
    { args: [[1]], expected: 1 },
    { args: [[1, 2, 3, 4, 5]], expected: 5 },
    { args: [[5, 4, 3, 2, 1]], expected: 1 },
    { args: [[3, 10, 2, 1, 20]], expected: 3 },
    { args: [[1, 3, 2, 4, 3, 5]], expected: 4 },
  ],
};
