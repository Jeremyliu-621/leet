import type { Problem } from '../types';

export const problem: Problem = {
  id: 'zero-array-transformation-ii',
  title: 'Zero Array Transformation II',
  difficulty: 'medium',
  tags: ['arrays', 'binary-search'],
  description: `You are given an integer array \`nums\` of length \`n\` and a 2D array \`queries\` where \`queries[i] = [l, r, val]\`.

For each query, you can **decrement** each element of \`nums\` in the range \`[l, r]\` by **at most** \`val\` (each element independently).

Return the **minimum** number of queries needed to make every element of \`nums\` equal to \`0\`. If it is not possible, return \`-1\`.`,
  constraints: [
    '`1 <= nums.length <= 10^5`',
    '`0 <= nums[i] <= 5 * 10^5`',
    '`1 <= queries.length <= 10^5`',
    '`queries[i].length == 3`',
    '`0 <= l <= r < nums.length`',
    '`1 <= val <= 5`',
  ],
  examples: [
    {
      input: 'nums = [2,0,2], queries = [[0,2,1],[0,2,1],[1,1,3]]',
      output: '2',
      explanation: 'With 2 queries, both applying val=1 to [0,2], position 0 gets −2, position 2 gets −2. All become 0.',
    },
    {
      input: 'nums = [4,3,2,1], queries = [[1,3,2],[0,2,1]]',
      output: '-1',
      explanation: 'nums[0]=4 can receive at most val=1 from query[1], leaving 3 remaining. Impossible.',
    },
  ],
  hints: [
    'Binary search on the number of queries `k` to use.',
    'For a given `k`, build a difference array: for each of the first `k` queries, add `val` at `l` and subtract `val` at `r+1`. The prefix sum gives total decrement capacity at each position.',
    'If `capacity[i] >= nums[i]` for all `i`, then `k` queries suffice.',
    `\`\`\`js
function minZeroArray(nums, queries) {
  const n = nums.length;
  const check = (k) => {
    const diff = new Array(n + 1).fill(0);
    for (let i = 0; i < k; i++) {
      const [l, r, val] = queries[i];
      diff[l] += val;
      if (r + 1 <= n) diff[r + 1] -= val;
    }
    let cap = 0;
    for (let i = 0; i < n; i++) {
      cap += diff[i];
      if (cap < nums[i]) return false;
    }
    return true;
  };
  if (check(0)) return 0;
  let lo = 1, hi = queries.length;
  if (!check(hi)) return -1;
  while (lo < hi) {
    const mid = (lo + hi) >> 1;
    if (check(mid)) hi = mid;
    else lo = mid + 1;
  }
  return lo;
}\`\`\``,
  ],
  functionName: 'minZeroArray',
  params: ['nums', 'queries'],
  starterCode: {
    javascript: `function minZeroArray(nums, queries) {
  const n = nums.length;
  const check = (k) => {
    const diff = new Array(n + 1).fill(0);
    for (let i = 0; i < k; i++) {
      const [l, r, val] = queries[i];
      diff[l] += val;
      if (r + 1 <= n) diff[r + 1] -= val;
    }
    let cap = 0;
    for (let i = 0; i < n; i++) {
      cap += diff[i];
      if (cap < nums[i]) return false;
    }
    return true;
  };
  if (check(0)) return 0;
  let lo = 1, hi = queries.length;
  if (!check(hi)) return -1;
  while (lo < hi) {
    const mid = (lo + hi) >> 1;
    if (check(mid)) hi = mid; else lo = mid + 1;
  }
  return lo;
}`,
    typescript: `function minZeroArray(nums: number[], queries: number[][]): number {
  const n = nums.length;
  const check = (k: number): boolean => {
    const diff = new Array<number>(n + 1).fill(0);
    for (let i = 0; i < k; i++) {
      const [l, r, val] = queries[i]!;
      diff[l!]! += val!;
      if (r! + 1 <= n) diff[r! + 1]! -= val!;
    }
    let cap = 0;
    for (let i = 0; i < n; i++) {
      cap += diff[i]!;
      if (cap < nums[i]!) return false;
    }
    return true;
  };
  if (check(0)) return 0;
  let lo = 1, hi = queries.length;
  if (!check(hi)) return -1;
  while (lo < hi) {
    const mid = (lo + hi) >> 1;
    if (check(mid)) hi = mid; else lo = mid + 1;
  }
  return lo;
}`,
    python: `def minZeroArray(nums, queries):
    n = len(nums)
    def check(k):
        diff = [0] * (n + 1)
        for i in range(k):
            l, r, val = queries[i]
            diff[l] += val
            if r + 1 <= n: diff[r + 1] -= val
        cap = 0
        for i in range(n):
            cap += diff[i]
            if cap < nums[i]: return False
        return True
    if check(0): return 0
    lo, hi = 1, len(queries)
    if not check(hi): return -1
    while lo < hi:
        mid = (lo + hi) // 2
        if check(mid): hi = mid
        else: lo = mid + 1
    return lo`,
  },
  visibleTests: [
    { args: [[2, 0, 2], [[0, 2, 1], [0, 2, 1], [1, 1, 3]]], expected: 2 },
    { args: [[4, 3, 2, 1], [[1, 3, 2], [0, 2, 1]]], expected: -1 },
    { args: [[0, 0, 0], [[0, 2, 5]]], expected: 0 },
  ],
  hiddenTests: [
    { args: [[1], [[0, 0, 1]]], expected: 1 },
    { args: [[3], [[0, 0, 1], [0, 0, 1], [0, 0, 1]]], expected: 3 },
    { args: [[5, 5], [[0, 1, 3], [0, 1, 3]]], expected: 2 },
    { args: [[1, 2, 3], [[0, 2, 1], [1, 2, 2]]], expected: 2 },
    { args: [[10], [[0, 0, 5]]], expected: -1 },
    { args: [[2, 3, 1], [[0, 1, 2], [1, 2, 2], [0, 2, 1]]], expected: 2 },
  ],
};
