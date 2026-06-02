import type { Problem } from '../types';

export const problem: Problem = {
  id: 'longest-increasing-subsequence-ii',
  title: 'Longest Increasing Subsequence II',
  difficulty: 'hard',
  tags: ['arrays', 'dynamic-programming'],
  description: `You are given an integer array \`nums\` and an integer \`k\`. Find the **longest subsequence** of \`nums\` that meets the following requirements:

- The subsequence is **strictly increasing**.
- The **difference** between adjacent elements in the subsequence is at most \`k\`.

Return the **length** of the longest such subsequence.

A **subsequence** is derived from an array by deleting some elements without changing the order.`,
  constraints: [
    '1 <= nums.length <= 10^5',
    '1 <= nums[i], k <= 10^5',
  ],
  examples: [
    {
      input: 'nums = [4,2,1,4,3,4,5,8,15], k = 3',
      output: '5',
      explanation:
        'The longest subsequence is [1,3,4,5,8] with differences [2,1,1,3] all ≤ 3. Length = 5.',
    },
    {
      input: 'nums = [7,4,5,1,8,12,4,7], k = 5',
      output: '4',
      explanation:
        'The longest subsequence is [4,5,8,12] with differences [1,3,4] all ≤ 5. Length = 4.',
    },
    {
      input: 'nums = [1,5], k = 1',
      output: '1',
      explanation: 'No two elements are within k=1 of each other while increasing.',
    },
  ],
  hints: [
    'Level 1: Define dp[v] = length of longest valid subsequence ending with value v. For each nums[i], dp[nums[i]] = max(dp[max(0, nums[i]-k)..nums[i]-1]) + 1. You need efficient range max queries.',
    'Level 2: Use a segment tree over values 1..max(nums). For each num, query the max dp value in range [num-k, num-1], then update position num with the new dp value.',
    'Level 3: Build a segment tree with point-update and range-max-query. For each element v in nums (left to right), query max in [max(1,v-k), v-1], set dp = query+1, update tree at position v with dp. Return overall max dp.',
  ],
  functionName: 'lengthOfLIS',
  params: ['nums', 'k'],
  starterCode: {
    javascript: `function lengthOfLIS(nums, k) {
  const M = Math.max(...nums) + 1;
  const tree = new Array(4 * M).fill(0);
  function update(node, start, end, idx, val) {
    if (start === end) { tree[node] = Math.max(tree[node], val); return; }
    const mid = (start + end) >> 1;
    if (idx <= mid) update(2*node, start, mid, idx, val);
    else update(2*node+1, mid+1, end, idx, val);
    tree[node] = Math.max(tree[2*node], tree[2*node+1]);
  }
  function query(node, start, end, l, r) {
    if (r < start || end < l || l > r) return 0;
    if (l <= start && end <= r) return tree[node];
    const mid = (start + end) >> 1;
    return Math.max(query(2*node, start, mid, l, r), query(2*node+1, mid+1, end, l, r));
  }
  let ans = 0;
  for (const v of nums) {
    const lo = Math.max(1, v - k);
    const best = query(1, 1, M - 1, lo, v - 1);
    const dp = best + 1;
    ans = Math.max(ans, dp);
    update(1, 1, M - 1, v, dp);
  }
  return ans;
}`,
    typescript: `function lengthOfLIS(nums: number[], k: number): number {
  const M = Math.max(...nums) + 1;
  const tree = new Array(4 * M).fill(0) as number[];
  function update(node: number, start: number, end: number, idx: number, val: number): void {
    if (start === end) { tree[node] = Math.max(tree[node]!, val); return; }
    const mid = (start + end) >> 1;
    if (idx <= mid) update(2*node, start, mid, idx, val);
    else update(2*node+1, mid+1, end, idx, val);
    tree[node] = Math.max(tree[2*node]!, tree[2*node+1]!);
  }
  function query(node: number, start: number, end: number, l: number, r: number): number {
    if (r < start || end < l || l > r) return 0;
    if (l <= start && end <= r) return tree[node]!;
    const mid = (start + end) >> 1;
    return Math.max(query(2*node, start, mid, l, r), query(2*node+1, mid+1, end, l, r));
  }
  let ans = 0;
  for (const v of nums) {
    const lo = Math.max(1, v - k);
    const best = query(1, 1, M - 1, lo, v - 1);
    const dp = best + 1;
    ans = Math.max(ans, dp);
    update(1, 1, M - 1, v, dp);
  }
  return ans;
}`,
    python: `def lengthOfLIS(nums, k):
    if hasattr(nums, 'to_py'): nums = nums.to_py()
    if hasattr(k, 'to_py'): k = k.to_py()
    nums = [int(x) for x in nums]; k = int(k)
    M = max(nums) + 1
    tree = [0] * (4 * M)
    def update(node, start, end, idx, val):
        if start == end: tree[node] = max(tree[node], val); return
        mid = (start + end) >> 1
        if idx <= mid: update(2*node, start, mid, idx, val)
        else: update(2*node+1, mid+1, end, idx, val)
        tree[node] = max(tree[2*node], tree[2*node+1])
    def query(node, start, end, l, r):
        if r < start or end < l or l > r: return 0
        if l <= start <= end <= r: return tree[node]
        mid = (start + end) >> 1
        return max(query(2*node, start, mid, l, r), query(2*node+1, mid+1, end, l, r))
    ans = 0
    for v in nums:
        lo = max(1, v - k)
        best = query(1, 1, M - 1, lo, v - 1)
        dp = best + 1; ans = max(ans, dp)
        update(1, 1, M - 1, v, dp)
    return ans`,
  },
  visibleTests: [
    {
      args: [[4,2,1,4,3,4,5,8,15], 3],
      expected: 5,
    },
    {
      args: [[7,4,5,1,8,12,4,7], 5],
      expected: 4,
    },
    {
      args: [[1,5], 1],
      expected: 1,
    },
  ],
  hiddenTests: [
    {
      args: [[1], 1],
      expected: 1,
    },
    {
      args: [[1,2,3,4,5], 1],
      expected: 5,
    },
    {
      args: [[5,4,3,2,1], 2],
      expected: 1,
    },
    {
      args: [[3,1,4,1,5,9,2,6,5,3], 4],
      expected: 4,
    },
    {
      args: [[1,2,3,4,5,6,7,8,9,10], 100],
      expected: 10,
    },
    {
      args: [[10,9,8,7,6,5,4,3,2,1], 1],
      expected: 1,
    },
  ],
};
