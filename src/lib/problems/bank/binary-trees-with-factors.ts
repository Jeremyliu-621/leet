import type { Problem } from '../types';

export const problem: Problem = {
  id: 'binary-trees-with-factors',
  title: 'Binary Trees With Factors',
  difficulty: 'medium',
  tags: ['arrays', 'dynamic-programming', 'hash-map'],
  description: `Given an array \`arr\` of unique integers, each integer \`arr[i]\` is strictly greater than \`1\`.

We make a binary tree using these integers, and each number may be used for any number of times. Each non-leaf node's value should be equal to the product of the values of its children.

Return the number of binary trees we can make. The answer may be too large so return the answer **modulo** \`10^9 + 7\`.`,
  constraints: [
    '1 <= arr.length <= 1000',
    '2 <= arr[i] <= 10^9',
    'All values in arr are unique.',
  ],
  examples: [
    {
      input: 'arr = [2,4]',
      output: '3',
      explanation: 'Trees: [2], [4], [4,[2],[2]]. Total = 3.',
    },
    {
      input: 'arr = [2,4,5,10]',
      output: '7',
      explanation: 'Trees with 10 as root: [10], [10,[2],[5]], [10,[5],[2]]. Plus [2],[4],[5],[4,[2],[2]]. Total = 7.',
    },
    {
      input: 'arr = [2,3,6]',
      output: '5',
      explanation: 'Trees: [2],[3],[6],[6,[2],[3]],[6,[3],[2]]. Total = 5.',
    },
  ],
  hints: [
    'Level 1: Sort arr. Use DP: dp[v] = number of binary trees rooted at v.',
    'Level 2: dp[v] = 1 (leaf) + sum over all a in arr where a < v, a divides v, and v/a is in arr of dp[a]*dp[v/a].',
    'Level 3: Use a hash set for O(1) membership checks. Since arr is sorted, iterate a < v to avoid double-counting — both (a, v/a) and (v/a, a) are counted since left/right children are ordered.',
  ],
  functionName: 'numFactoredBinaryTrees',
  params: ['arr'],
  starterCode: {
    javascript: `function numFactoredBinaryTrees(arr) {
  const MOD = 1_000_000_007n;
  arr.sort((a, b) => a - b);
  const dp = new Map();
  const set = new Set(arr);
  for (const v of arr) {
    let count = 1n;
    for (const a of dp.keys()) {
      if (v % a === 0 && set.has(v / a)) {
        count = (count + dp.get(a) * dp.get(v / a)) % MOD;
      }
    }
    dp.set(v, count);
  }
  let ans = 0n;
  for (const c of dp.values()) ans = (ans + c) % MOD;
  return Number(ans);
}`,
    typescript: `function numFactoredBinaryTrees(arr: number[]): number {
  const MOD = 1_000_000_007n;
  arr.sort((a, b) => a - b);
  const dp = new Map<number, bigint>();
  const set = new Set(arr);
  for (const v of arr) {
    let count = 1n;
    for (const a of dp.keys()) {
      if (v % a === 0 && set.has(v / a)) {
        count = (count + dp.get(a)! * dp.get(v / a)!) % MOD;
      }
    }
    dp.set(v, count);
  }
  let ans = 0n;
  for (const c of dp.values()) ans = (ans + c) % MOD;
  return Number(ans);
}`,
    python: `def numFactoredBinaryTrees(arr):
    if hasattr(arr, 'to_py'): arr = arr.to_py()
    arr = sorted(int(x) for x in arr)
    MOD = 10**9 + 7
    dp = {}
    s = set(arr)
    for v in arr:
        dp[v] = 1
        for a in dp:
            if v % a == 0 and v // a in s:
                dp[v] = (dp[v] + dp[a] * dp[v // a]) % MOD
    return sum(dp.values()) % MOD`,
  },
  visibleTests: [
    { args: [[2, 4]], expected: 3 },
    { args: [[2, 4, 5, 10]], expected: 7 },
    { args: [[2, 3, 6]], expected: 5 },
  ],
  hiddenTests: [
    { args: [[2]], expected: 1 },
    { args: [[2, 3]], expected: 2 },
    { args: [[2, 3, 4, 6]], expected: 7 },
    { args: [[2, 4, 8]], expected: 8 },
    { args: [[2, 3, 6, 12]], expected: 12 },
  ],
};
