import type { Problem } from '../types';

export const problem: Problem = {
  id: 'maximum-sum-of-subsequence-with-non-adjacent-elements',
  title: 'Maximum Sum of Subsequence With Non-Adjacent Elements',
  difficulty: 'hard',
  tags: ['arrays', 'dynamic-programming', 'segment-tree'],
  description: `You are given an array \`nums\` consisting of integers. You are also given a 2D array \`queries\`, where \`queries[i] = [pos_i, val_i]\`.

For each query \`i\`, first set \`nums[pos_i]\` equal to \`val_i\`, then calculate the answer to query \`i\` which is the **maximum** sum of a **subsequence** of \`nums\` where **no two adjacent elements** are selected.

Return the sum of all the answers to the queries modulo \`10^9 + 7\`.

**Note:** Subsequence means you may pick any subset of indices; non-adjacent means no two chosen indices differ by exactly 1.`,
  constraints: [
    '1 <= nums.length <= 5 * 10^4',
    '-10^5 <= nums[i] <= 10^5',
    '1 <= queries.length <= 5 * 10^4',
    '0 <= queries[i][0] <= nums.length - 1',
    '-10^5 <= queries[i][1] <= 10^5',
  ],
  examples: [
    {
      input: 'nums = [3,5,9], queries = [[1,-2],[0,-3]]',
      output: '21',
      explanation: 'After query 0: nums=[3,-2,9]. Max non-adj sum = 3+9 = 12. After query 1: nums=[-3,-2,9]. Max = 9. Total = 21.',
    },
    {
      input: 'nums = [0,-1], queries = [[0,-5]]',
      output: '0',
      explanation: 'After query 0: nums=[-5,-1]. Best non-adj sum = 0 (pick nothing). Total = 0.',
    },
  ],
  hints: [
    'Use a segment tree. Each node stores [f00, f01, f10, f11] where fij = max non-adj sum over this segment when i=0/1 means first element is NOT/IS picked and j=0/1 means last element is NOT/IS picked.',
    'For a single element v: [0, -inf, -inf, v]. It cannot simultaneously be "first not picked" and "last picked" (same element), so f01 = f10 = -inf.',
    'Merge two nodes L and R: the last of L and first of R cannot both be picked. result[i][j] = max(L[i][0]+R[0][j], L[i][0]+R[1][j], L[i][1]+R[0][j]).',
    'The final answer per query is max(f00, f01, f10, f11) of the root, clamped to 0 (empty subsequence is valid).',
  ],
  functionName: 'maximumSumSubsequence',
  params: ['nums', 'queries'],
  starterCode: {
    javascript: `function maximumSumSubsequence(nums, queries) {
  const MOD = 1000000007n;
  const n = nums.length;
  const NEG = -BigInt(1e15);
  // Node: [f00, f01, f10, f11]
  // fij: i=first-picked, j=last-picked; 0=not-picked, 1=picked
  const tree = Array.from({length: 4 * n}, () => [NEG, NEG, NEG, NEG]);

  const make = (v) => [0n, NEG, NEG, BigInt(v)];

  const merge = ([a00, a01, a10, a11], [b00, b01, b10, b11]) => {
    const mx = (...xs) => xs.reduce((a, b) => a > b ? a : b);
    return [
      mx(a00+b00, a00+b10, a01+b00),
      mx(a00+b01, a00+b11, a01+b01),
      mx(a10+b00, a10+b10, a11+b00),
      mx(a10+b01, a10+b11, a11+b01),
    ];
  };

  const build = (nd, l, r) => {
    if (l === r) { tree[nd] = make(nums[l]); return; }
    const mid = (l + r) >> 1;
    build(2*nd, l, mid);
    build(2*nd+1, mid+1, r);
    tree[nd] = merge(tree[2*nd], tree[2*nd+1]);
  };

  const update = (nd, l, r, idx, val) => {
    if (l === r) { tree[nd] = make(val); return; }
    const mid = (l + r) >> 1;
    if (idx <= mid) update(2*nd, l, mid, idx, val);
    else update(2*nd+1, mid+1, r, idx, val);
    tree[nd] = merge(tree[2*nd], tree[2*nd+1]);
  };

  build(1, 0, n - 1);
  let ans = 0n;
  for (const [pos, val] of queries) {
    nums[pos] = val;
    update(1, 0, n - 1, pos, val);
    const best = tree[1].reduce((a, b) => a > b ? a : b);
    ans = (ans + (best > 0n ? best : 0n)) % MOD;
  }
  return Number(ans);
}`,
    typescript: `function maximumSumSubsequence(nums: number[], queries: number[][]): number {
  const MOD = 1000000007n;
  const n = nums.length;
  const NEG = -BigInt(1e15);
  const tree: bigint[][] = Array.from({length: 4 * n}, () => [NEG, NEG, NEG, NEG]);

  const make = (v: number): bigint[] => [0n, NEG, NEG, BigInt(v)];

  const merge = ([a00, a01, a10, a11]: bigint[], [b00, b01, b10, b11]: bigint[]): bigint[] => {
    const mx = (...xs: bigint[]) => xs.reduce((a, b) => a > b ? a : b);
    return [
      mx(a00!+b00!, a00!+b10!, a01!+b00!),
      mx(a00!+b01!, a00!+b11!, a01!+b01!),
      mx(a10!+b00!, a10!+b10!, a11!+b00!),
      mx(a10!+b01!, a10!+b11!, a11!+b01!),
    ];
  };

  const build = (nd: number, l: number, r: number): void => {
    if (l === r) { tree[nd] = make(nums[l]!); return; }
    const mid = (l + r) >> 1;
    build(2*nd, l, mid);
    build(2*nd+1, mid+1, r);
    tree[nd] = merge(tree[2*nd]!, tree[2*nd+1]!);
  };

  const update = (nd: number, l: number, r: number, idx: number, val: number): void => {
    if (l === r) { tree[nd] = make(val); return; }
    const mid = (l + r) >> 1;
    if (idx <= mid) update(2*nd, l, mid, idx, val);
    else update(2*nd+1, mid+1, r, idx, val);
    tree[nd] = merge(tree[2*nd]!, tree[2*nd+1]!);
  };

  build(1, 0, n - 1);
  let ans = 0n;
  for (const [pos, val] of queries) {
    nums[pos!] = val!;
    update(1, 0, n - 1, pos!, val!);
    const best = tree[1]!.reduce((a, b) => a! > b! ? a : b)!;
    ans = (ans + (best > 0n ? best : 0n)) % MOD;
  }
  return Number(ans);
}`,
    python: `def maximumSumSubsequence(nums, queries):
    MOD = 10**9 + 7
    n = len(nums)
    NEG = float('-inf')

    def make(v):
        return [0, NEG, NEG, v]

    def merge(a, b):
        a00, a01, a10, a11 = a
        b00, b01, b10, b11 = b
        return [
            max(a00+b00, a00+b10, a01+b00),
            max(a00+b01, a00+b11, a01+b01),
            max(a10+b00, a10+b10, a11+b00),
            max(a10+b01, a10+b11, a11+b01),
        ]

    tree = [[NEG]*4 for _ in range(4 * n)]

    def build(nd, l, r):
        if l == r:
            tree[nd] = make(nums[l])
            return
        mid = (l + r) // 2
        build(2*nd, l, mid)
        build(2*nd+1, mid+1, r)
        tree[nd] = merge(tree[2*nd], tree[2*nd+1])

    def update(nd, l, r, idx, val):
        if l == r:
            tree[nd] = make(val)
            return
        mid = (l + r) // 2
        if idx <= mid:
            update(2*nd, l, mid, idx, val)
        else:
            update(2*nd+1, mid+1, r, idx, val)
        tree[nd] = merge(tree[2*nd], tree[2*nd+1])

    build(1, 0, n - 1)
    ans = 0
    for pos, val in queries:
        nums[pos] = val
        update(1, 0, n - 1, pos, val)
        best = max(tree[1])
        ans = (ans + max(0, best)) % MOD
    return ans`,
  },
  visibleTests: [
    { args: [[3, 5, 9], [[1, -2], [0, -3]]], expected: 21 },
    { args: [[0, -1], [[0, -5]]], expected: 0 },
  ],
  hiddenTests: [
    { args: [[1], [[0, 5]]], expected: 5 },
    { args: [[-1, -2], [[0, 3], [1, 4]]], expected: 7 },
    { args: [[5, 5, 5, 5], [[0, -5]]], expected: 10 },
    { args: [[1, 2, 3], [[0, 10], [2, 10]]], expected: 33 },
  ],
};
