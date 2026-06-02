import type { Problem } from '../types';

export const problem: Problem = {
  id: 'maximum-number-of-operations-with-the-same-score-ii',
  title: 'Maximum Number of Operations With the Same Score II',
  difficulty: 'medium',
  tags: ['arrays', 'dynamic-programming'],
  description: `Given an array of integers \`nums\`, you are allowed to perform operations. In each operation, choose **two indices** and remove the elements at those indices if their sum equals some target score. All operations in the same run must use the **same score**.

The allowed index pairs for each operation are:
- The first two elements (indices 0 and 1).
- The last two elements (indices n-2 and n-1).
- The first and last elements (indices 0 and n-1).

Return the **maximum** number of operations you can perform.`,
  constraints: [
    '`2 <= nums.length <= 2000`',
    '`1 <= nums[i] <= 1000`',
  ],
  examples: [
    {
      input: 'nums = [3,2,1,4,5]',
      output: '2',
      explanation: 'Score = 5. First op removes nums[0]+nums[1]=3+2=5; second op removes nums[1]+nums[2]=1+4=5 from the remaining [1,4,5]. Total: 2 operations.',
    },
    {
      input: 'nums = [3,2,6,1,4]',
      output: '2',
      explanation: 'Score = 5. Remove front two (3+2=5), then remove back two (1+4=5). Total: 2 operations.',
    },
    {
      input: 'nums = [1,2]',
      output: '1',
      explanation: 'Score = 3. Remove both elements. Total: 1 operation.',
    },
  ],
  hints: [
    'The score is determined by the first operation — try all three possibilities: front-two, back-two, or ends.',
    'For each fixed score, use top-down memoization: `dp(l, r)` = max ops achievable on subarray `nums[l..r]` with that score.',
    'At each step, try all three valid operations. Memoize on `(l, r)` pairs since the score is fixed.',
    'Since the score is fixed per run, only three target values are possible (nums[0]+nums[1], nums[n-2]+nums[n-1], nums[0]+nums[n-1]). Run DP for each and take the max.',
  ],
  functionName: 'maxOperations',
  params: ['nums'],
  starterCode: {
    javascript: `function maxOperations(nums) {
  const n = nums.length;
  const solve = (target) => {
    const memo = new Map();
    const dp = (l, r) => {
      if (r - l < 1) return 0;
      const key = l * 2001 + r;
      if (memo.has(key)) return memo.get(key);
      let best = 0;
      if (nums[l] + nums[l + 1] === target) best = Math.max(best, 1 + dp(l + 2, r));
      if (nums[r - 1] + nums[r] === target) best = Math.max(best, 1 + dp(l, r - 2));
      if (nums[l] + nums[r] === target) best = Math.max(best, 1 + dp(l + 1, r - 1));
      memo.set(key, best);
      return best;
    };
    return dp(0, n - 1);
  };
  const targets = new Set([nums[0] + nums[1], nums[n - 2] + nums[n - 1], nums[0] + nums[n - 1]]);
  let ans = 0;
  for (const t of targets) ans = Math.max(ans, solve(t));
  return ans;
}`,
    typescript: `function maxOperations(nums: number[]): number {
  const n = nums.length;
  const solve = (target: number): number => {
    const memo = new Map<number, number>();
    const dp = (l: number, r: number): number => {
      if (r - l < 1) return 0;
      const key = l * 2001 + r;
      if (memo.has(key)) return memo.get(key)!;
      let best = 0;
      if (nums[l]! + nums[l + 1]! === target) best = Math.max(best, 1 + dp(l + 2, r));
      if (nums[r - 1]! + nums[r]! === target) best = Math.max(best, 1 + dp(l, r - 2));
      if (nums[l]! + nums[r]! === target) best = Math.max(best, 1 + dp(l + 1, r - 1));
      memo.set(key, best);
      return best;
    };
    return dp(0, n - 1);
  };
  const targets = new Set([nums[0]! + nums[1]!, nums[n - 2]! + nums[n - 1]!, nums[0]! + nums[n - 1]!]);
  let ans = 0;
  for (const t of targets) ans = Math.max(ans, solve(t));
  return ans;
}`,
    python: `def maxOperations(nums: list[int]) -> int:
    if hasattr(nums, 'to_py'): nums = list(nums.to_py())
    n = len(nums)
    def solve(target):
        from functools import lru_cache
        @lru_cache(maxsize=None)
        def dp(l, r):
            if r - l < 1: return 0
            best = 0
            if nums[l] + nums[l+1] == target: best = max(best, 1 + dp(l+2, r))
            if nums[r-1] + nums[r] == target: best = max(best, 1 + dp(l, r-2))
            if nums[l] + nums[r] == target: best = max(best, 1 + dp(l+1, r-1))
            return best
        return dp(0, n-1)
    targets = {nums[0]+nums[1], nums[n-2]+nums[n-1], nums[0]+nums[n-1]}
    return max(solve(t) for t in targets)`,
  },
  visibleTests: [
    { args: [[3, 2, 1, 4, 5]], expected: 2 },
    { args: [[3, 2, 6, 1, 4]], expected: 2 },
    { args: [[1, 2]], expected: 1 },
  ],
  hiddenTests: [
    { args: [[1, 1, 1, 1]], expected: 2 },
    { args: [[2, 2, 2, 2, 2]], expected: 2 },
    { args: [[1, 2, 3, 4, 5, 6]], expected: 3 },
    { args: [[1, 2, 3]], expected: 1 },
    { args: [[5, 5, 5, 5, 5, 5]], expected: 3 },
    { args: [[1, 1000, 1000, 1]], expected: 2 },
  ],
};
