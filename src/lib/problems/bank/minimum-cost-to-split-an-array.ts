import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-cost-to-split-an-array',
  title: 'Minimum Cost to Split an Array',
  difficulty: 'hard',
  tags: ['arrays', 'dynamic-programming', 'hash-map'],
  description: `You are given an integer array \`nums\` and an integer \`k\`.

Split the array into some number of non-empty subarrays. The **cost** of a split is the sum of the **importance value** of each subarray in the split.

The **importance value** of a subarray is defined as \`k + trim(subarray)\`, where:

- **trim(subarray)** is the number of elements in the subarray which appear **at least twice** in the subarray plus the length of the subarray.

For example, if \`subarray = [1,2,1,3,3,1,3]\`, then the importance value is \`k + 7 + 2 = k + 9\`. (\`2\` because \`1\` and \`3\` each appear more than once; length = 7.)

Return the **minimum** possible cost of a split of \`nums\`.`,
  constraints: [
    '1 <= nums.length <= 1000',
    '0 <= nums[i] < nums.length',
    '1 <= k <= 10^9',
  ],
  examples: [
    {
      input: 'nums = [1,2,1,2,1,3], k = 2',
      output: '10',
      explanation: 'One optimal split: keep the entire array as one subarray. Importance = 2 + 6 + 2 = 10 (length 6, elements 1 and 2 appear twice each = 2 distinct). No split is cheaper.',
    },
    {
      input: 'nums = [1,2,3,4], k = 2',
      output: '6',
      explanation: 'No element repeats. One subarray: k + length + 0 = 2 + 4 + 0 = 6.',
    },
    {
      input: 'nums = [1,1], k = 2',
      output: '5',
      explanation: 'One subarray: k + 2 + 1 = 5 (element 1 appears twice = 1 distinct). Two subarrays [1]+[1]: (k+1+0)+(k+1+0) = 6.',
    },
  ],
  hints: [
    'Level 1: DP: dp[i] = min cost to split nums[0..i-1]. For each starting index j, expand the subarray to the right, tracking element frequencies.',
    'Level 2: dp[i+1] = min over j in [0,i] of (dp[j] + k + importance(nums[j..i])). Compute importance incrementally: when a new element\'s frequency reaches 2, increment the distinct-repeat count.',
    'Level 3: Outer loop over j (start of subarray), inner loop over i (end). Use a freq map; when freq[c] first hits 2, add 1 to `extra`. importance = (i-j+1) + extra. Total time O(n^2).',
  ],
  functionName: 'minCost',
  params: ['nums', 'k'],
  starterCode: {
    javascript: `function minCost(nums, k) {
  const n = nums.length;
  const dp = new Array(n + 1).fill(Infinity); dp[0] = 0;
  for (let i = 1; i <= n; i++) {
    const freq = new Map(); let extra = 0;
    for (let j = i - 1; j >= 0; j--) {
      const v = nums[j], cnt = (freq.get(v) || 0) + 1; freq.set(v, cnt);
      if (cnt === 2) extra++;
      if (dp[j] < Infinity) dp[i] = Math.min(dp[i], dp[j] + k + (i - j) + extra);
    }
  }
  return dp[n];
}`,
    typescript: `function minCost(nums: number[], k: number): number {
  const n = nums.length;
  const dp = new Array<number>(n + 1).fill(Infinity); dp[0] = 0;
  for (let i = 1; i <= n; i++) {
    const freq = new Map<number, number>(); let extra = 0;
    for (let j = i - 1; j >= 0; j--) {
      const v = nums[j]!, cnt = (freq.get(v) ?? 0) + 1; freq.set(v, cnt);
      if (cnt === 2) extra++;
      if (dp[j]! < Infinity) dp[i] = Math.min(dp[i]!, dp[j]! + k + (i - j) + extra);
    }
  }
  return dp[n]!;
}`,
    python: `def minCost(nums, k):
    if hasattr(nums, 'to_py'): nums = list(nums.to_py())
    n = len(nums); dp = [float('inf')] * (n + 1); dp[0] = 0
    for i in range(1, n + 1):
        freq = {}; extra = 0
        for j in range(i - 1, -1, -1):
            v = nums[j]; freq[v] = freq.get(v, 0) + 1
            if freq[v] == 2: extra += 1
            if dp[j] < float('inf'): dp[i] = min(dp[i], dp[j] + k + (i - j) + extra)
    return dp[n]`,
  },
  visibleTests: [
    { args: [[1, 2, 1, 2, 1, 3], 2], expected: 10 },
    { args: [[1, 2, 3, 4], 2], expected: 6 },
    { args: [[1, 1], 2], expected: 5 },
  ],
  hiddenTests: [
    { args: [[1], 1], expected: 2 },
    { args: [[1, 2], 3], expected: 5 },
    { args: [[1, 1, 2, 2], 1], expected: 7 },
    { args: [[1, 2, 1, 2], 2], expected: 8 },
    { args: [[0, 0, 0, 0], 5], expected: 10 },
    { args: [[1, 2, 3], 1], expected: 4 },
    { args: [[1, 1, 1], 3], expected: 7 },
    { args: [[0, 1, 0, 1, 0], 3], expected: 10 },
  ],
};
