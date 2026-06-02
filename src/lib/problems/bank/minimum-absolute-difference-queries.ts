import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-absolute-difference-queries',
  title: 'Minimum Absolute Difference Queries',
  difficulty: 'medium',
  tags: ['arrays', 'hash-map'],
  description: `Given a **0-indexed** integer array \`nums\` where \`1 <= nums[i] <= 100\`, and a 2D array \`queries\` where \`queries[i] = [li, ri]\`.

For each query, find the **minimum absolute difference** between any two **distinct** elements in the subarray \`nums[li..ri]\` (inclusive). If all elements in the subarray are the same, return \`-1\` for that query.

Return an array of answers, one per query.`,
  constraints: [
    '2 <= nums.length <= 10^5',
    '1 <= nums[i] <= 100',
    '1 <= queries.length <= 2 * 10^4',
    '0 <= queries[i][0] < queries[i][1] < nums.length',
  ],
  examples: [
    {
      input: 'nums = [1,3,4,8], queries = [[0,1],[1,2],[2,3],[0,3]]',
      output: '[2,1,4,1]',
      explanation: 'Query [0,1]: subarray [1,3], min diff = 2. Query [1,2]: subarray [3,4], min diff = 1. Query [2,3]: subarray [4,8], min diff = 4. Query [0,3]: subarray [1,3,4,8], min diff = 1 (between 3 and 4).',
    },
    {
      input: 'nums = [4,5,2,2,7,10], queries = [[2,3],[0,2],[0,5]]',
      output: '[-1,1,1]',
      explanation: 'Query [2,3]: subarray [2,2], all same → -1. Query [0,2]: subarray [4,5,2], min diff = 1. Query [0,5]: subarray [4,5,2,2,7,10], min diff = 1.',
    },
  ],
  hints: [
    'Since values are bounded to [1, 100], build a prefix count array: for each value v (1–100), prefix[v][i] stores how many times v appears in nums[0..i-1].',
    'For a query [l, r], a value v is present in the subarray if prefix[v][r+1] - prefix[v][l] > 0.',
    'Scan values 1–100 in order. Track the last present value. The answer is the minimum gap between consecutive present values. If only one distinct value exists, return -1.',
  ],
  functionName: 'minDifference',
  params: ['nums', 'queries'],
  starterCode: {
    javascript: `function minDifference(nums, queries) {
  const n = nums.length;
  const cnt = Array.from({length: 101}, () => new Array(n + 1).fill(0));
  for (let i = 0; i < n; i++) {
    for (let v = 1; v <= 100; v++) cnt[v][i+1] = cnt[v][i];
    cnt[nums[i]][i+1]++;
  }
  return queries.map(([l, r]) => {
    let ans = -1, prev = -1;
    for (let v = 1; v <= 100; v++) {
      if (cnt[v][r+1] - cnt[v][l] > 0) {
        if (prev !== -1) { const d = v - prev; if (ans === -1 || d < ans) ans = d; }
        prev = v;
      }
    }
    return ans;
  });
}`,
    typescript: `function minDifference(nums: number[], queries: number[][]): number[] {
  const n = nums.length;
  const cnt = Array.from({length: 101}, () => new Array<number>(n + 1).fill(0));
  for (let i = 0; i < n; i++) {
    for (let v = 1; v <= 100; v++) cnt[v]![i+1] = cnt[v]![i]!;
    cnt[nums[i]!]![i+1]!++;
  }
  return queries.map(([l, r]) => {
    let ans = -1, prev = -1;
    for (let v = 1; v <= 100; v++) {
      if (cnt[v]![r!+1]! - cnt[v]![l!]! > 0) {
        if (prev !== -1) { const d = v - prev; if (ans === -1 || d < ans) ans = d; }
        prev = v;
      }
    }
    return ans;
  });
}`,
    python: `def minDifference(nums, queries):
    if hasattr(nums, 'to_py'): nums = list(nums.to_py())
    if hasattr(queries, 'to_py'): queries = [[int(x) for x in (q.to_py() if hasattr(q, 'to_py') else q)] for q in queries.to_py()]
    n = len(nums)
    cnt = [[0] * (n + 1) for _ in range(101)]
    for i, x in enumerate(nums):
        for v in range(1, 101): cnt[v][i+1] = cnt[v][i]
        cnt[x][i+1] += 1
    res = []
    for l, r in queries:
        ans, prev = -1, -1
        for v in range(1, 101):
            if cnt[v][r+1] - cnt[v][l] > 0:
                if prev != -1:
                    d = v - prev
                    if ans == -1 or d < ans: ans = d
                prev = v
        res.append(ans)
    return res`,
  },
  visibleTests: [
    {
      args: [[1, 3, 4, 8], [[0, 1], [1, 2], [2, 3], [0, 3]]],
      expected: [2, 1, 4, 1],
    },
    {
      args: [[4, 5, 2, 2, 7, 10], [[2, 3], [0, 2], [0, 5]]],
      expected: [-1, 1, 1],
    },
  ],
  hiddenTests: [
    { args: [[1, 2, 3, 4, 5], [[0, 4]]], expected: [1] },
    { args: [[10, 10, 10], [[0, 2]]], expected: [-1] },
    { args: [[1, 100], [[0, 1]]], expected: [99] },
    { args: [[3, 6, 9], [[0, 1], [1, 2], [0, 2]]], expected: [3, 3, 3] },
    { args: [[5, 3, 1, 4, 2], [[0, 4], [1, 3]]], expected: [1, 1] },
  ],
};
