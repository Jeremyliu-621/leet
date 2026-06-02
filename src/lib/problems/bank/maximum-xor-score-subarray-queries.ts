import type { Problem } from '../types';

export const problem: Problem = {
  id: 'maximum-xor-score-subarray-queries',
  title: 'Maximum XOR Score Subarray Queries',
  difficulty: 'hard',
  tags: ['arrays', 'dynamic-programming', 'bit-manipulation'],
  description: `You are given an array \`nums\` of integers and a 2D array \`queries\` where \`queries[i] = [l, r]\`.

The **XOR score** of an array \`a\` is defined by repeatedly replacing \`a\` with a new array of XOR-adjacent pairs until only one element remains:
- If \`a\` has length 1, the score is \`a[0]\`.
- Otherwise, XOR every adjacent pair: \`a' = [a[0]^a[1], a[1]^a[2], ..., a[n-2]^a[n-1]]\`, then recurse.

For each query \`[l, r]\`, find the **maximum XOR score** among all subarrays \`nums[a..b]\` where \`l ≤ a ≤ b ≤ r\`.

Return an integer array \`answer\` where \`answer[i]\` is the answer to the \`i\`-th query.`,
  constraints: [
    '1 <= nums.length <= 2000',
    '1 <= queries.length <= 10^5',
    '0 <= l <= r < nums.length',
    '0 <= nums[i] <= 10^9',
  ],
  examples: [
    {
      input: 'nums = [4,5,2,3], queries = [[0,3]]',
      output: '[7]',
      explanation:
        'Subarray [5,2] has score 5^2 = 7, which is the maximum among all subarrays in [0,3].',
    },
    {
      input: 'nums = [2,8,4], queries = [[0,2],[0,0],[1,1]]',
      output: '[12,2,8]',
      explanation:
        'For [0,2]: subarray [8,4] has score 8^4=12. For [0,0]: only [2], score=2. For [1,1]: only [8], score=8.',
    },
    {
      input: 'nums = [1,2,3,4,5], queries = [[0,4],[2,4]]',
      output: '[7,7]',
      explanation:
        'Subarray [3,4] has score 3^4=7. It lies within both query ranges.',
    },
  ],
  hints: [
    'Level 1: Define dp[i][j] = XOR score of nums[i..j]. There is a recurrence: dp[i][j] = dp[i][j-1] ^ dp[i+1][j]. Precompute all O(n^2) values. For each query [l,r], scan all subarrays O(n^2) per query — feasible for small n.',
    'Level 2: Precompute an additional 2D table: mx[j][i] = maximum XOR score over all subarrays nums[a..b] where i <= a <= b <= j. Recurrence: mx[j][i] = max(mx[j-1][i], suf[j][i]) where suf[j][i] = max(dp[i][j], suf[j][i+1]) is the suffix max over starting points for a fixed right endpoint j.',
    'Level 3: Fill dp in O(n^2), then suf in O(n^2), then mx in O(n^2). Each query [l,r] is answered in O(1) as mx[r][l]. Total: O(n^2 + q).',
  ],
  functionName: 'maximumSubarrayXor',
  params: ['nums', 'queries'],
  starterCode: {
    javascript: `function maximumSubarrayXor(nums, queries) {
  const n = nums.length;
  const dp = Array.from({length: n}, (_, i) => new Array(n).fill(0));
  for (let i = 0; i < n; i++) dp[i][i] = nums[i];
  for (let len = 2; len <= n; len++)
    for (let i = 0; i <= n - len; i++) {
      const j = i + len - 1;
      dp[i][j] = dp[i][j - 1] ^ dp[i + 1][j];
    }
  const suf = Array.from({length: n}, () => new Array(n).fill(0));
  for (let j = 0; j < n; j++) {
    suf[j][j] = dp[j][j];
    for (let i = j - 1; i >= 0; i--)
      suf[j][i] = Math.max(dp[i][j], suf[j][i + 1]);
  }
  const mx = Array.from({length: n}, () => new Array(n).fill(0));
  for (let j = 0; j < n; j++)
    for (let i = 0; i <= j; i++) {
      mx[j][i] = suf[j][i];
      if (j > 0 && j - 1 >= i) mx[j][i] = Math.max(mx[j][i], mx[j - 1][i]);
    }
  return queries.map(([l, r]) => mx[r][l]);
}`,
    typescript: `function maximumSubarrayXor(nums: number[], queries: number[][]): number[] {
  const n = nums.length;
  const dp: number[][] = Array.from({length: n}, (_, i) => { const a = new Array<number>(n).fill(0); a[i] = nums[i]!; return a; });
  for (let len = 2; len <= n; len++)
    for (let i = 0; i <= n - len; i++) {
      const j = i + len - 1;
      dp[i]![j] = dp[i]![j - 1]! ^ dp[i + 1]![j]!;
    }
  const suf: number[][] = Array.from({length: n}, () => new Array<number>(n).fill(0));
  for (let j = 0; j < n; j++) {
    suf[j]![j] = dp[j]![j]!;
    for (let i = j - 1; i >= 0; i--)
      suf[j]![i] = Math.max(dp[i]![j]!, suf[j]![i + 1]!);
  }
  const mx: number[][] = Array.from({length: n}, () => new Array<number>(n).fill(0));
  for (let j = 0; j < n; j++)
    for (let i = 0; i <= j; i++) {
      mx[j]![i] = suf[j]![i]!;
      if (j > 0 && j - 1 >= i) mx[j]![i] = Math.max(mx[j]![i]!, mx[j - 1]![i]!);
    }
  return queries.map(q => mx[q[1]!]![q[0]!]!);
}`,
    python: `def maximumSubarrayXor(nums, queries):
    if hasattr(nums, 'to_py'): nums = list(nums.to_py())
    if hasattr(queries, 'to_py'): queries = [[int(x) for x in (q.to_py() if hasattr(q, 'to_py') else q)] for q in queries.to_py()]
    n = len(nums)
    dp = [[0]*n for _ in range(n)]
    for i in range(n): dp[i][i] = nums[i]
    for length in range(2, n+1):
        for i in range(n - length + 1):
            j = i + length - 1
            dp[i][j] = dp[i][j-1] ^ dp[i+1][j]
    suf = [[0]*n for _ in range(n)]
    for j in range(n):
        suf[j][j] = dp[j][j]
        for i in range(j-1, -1, -1):
            suf[j][i] = max(dp[i][j], suf[j][i+1])
    mx = [[0]*n for _ in range(n)]
    for j in range(n):
        for i in range(j+1):
            mx[j][i] = suf[j][i]
            if j > 0 and j-1 >= i:
                mx[j][i] = max(mx[j][i], mx[j-1][i])
    return [mx[r][l] for l, r in queries]`,
  },
  visibleTests: [
    { args: [[4, 5, 2, 3], [[0, 3]]], expected: [7] },
    { args: [[2, 8, 4], [[0, 2], [0, 0], [1, 1]]], expected: [12, 2, 8] },
    { args: [[1, 2, 3, 4, 5], [[0, 4], [2, 4]]], expected: [7, 7] },
  ],
  hiddenTests: [
    { args: [[5], [[0, 0]]], expected: [5] },
    { args: [[1, 3], [[0, 1]]], expected: [3] },
    { args: [[3, 1], [[0, 1]]], expected: [3] },
    { args: [[1, 1, 1, 1], [[0, 3]]], expected: [1] },
    { args: [[7, 6, 5], [[0, 2]]], expected: [7] },
    { args: [[2, 4, 8], [[0, 2], [1, 2]]], expected: [12, 12] },
    { args: [[3, 5, 2, 7, 1], [[1, 4], [0, 4]]], expected: [7, 7] },
    { args: [[4, 5, 2, 3], [[0, 1], [1, 3], [2, 3]]], expected: [5, 7, 3] },
  ],
};
