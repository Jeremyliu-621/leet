import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-inversions',
  title: 'Count Inversions',
  difficulty: 'medium',
  tags: ['binary-indexed-tree', 'arrays'],
  description: `Given an integer array \`nums\`, return the number of **inversions**.

An **inversion** is a pair \`(i, j)\` where \`i < j\` and \`nums[i] > nums[j]\`.`,
  constraints: [
    '1 <= nums.length <= 10^4',
    '-10^4 <= nums[i] <= 10^4',
  ],
  examples: [
    {
      input: 'nums = [3,1,2]',
      output: '2',
      explanation: 'Pairs: (0,1): 3>1 ✓, (0,2): 3>2 ✓, (1,2): 1<2 ✗. Total = 2.',
    },
    {
      input: 'nums = [1,2,3]',
      output: '0',
      explanation: 'The array is sorted; no inversions exist.',
    },
    {
      input: 'nums = [3,2,1]',
      output: '3',
      explanation: 'Every pair is an inversion: (0,1), (0,2), (1,2).',
    },
  ],
  hints: [
    'Use coordinate compression to map values to indices [1..n], then scan left to right. For each element, count how many already-inserted elements are strictly larger — that\'s the BIT prefix query from rank+1 to n.',
    'Equivalently, query the number of elements already seen with rank > current rank. That equals (count so far) − prefixSum(rank). Update BIT at rank after querying.',
    'Compress: build a sorted unique array, then find each value\'s 1-based rank via binary search. BIT update: `bit[i] += 1` propagating up. BIT query: sum `bit[i]` from 1 to k by stripping lowest set bit.',
  ],
  functionName: 'countInversions',
  params: ['nums'],
  starterCode: {
    javascript: `function countInversions(nums) {
  const sorted = [...new Set(nums)].sort((a, b) => a - b);
  const rank = new Map(sorted.map((v, i) => [v, i + 1]));
  const n = sorted.length;
  const bit = new Array(n + 1).fill(0);
  const update = i => { for (; i <= n; i += i & -i) bit[i]++; };
  const query = i => { let s = 0; for (; i > 0; i -= i & -i) s += bit[i]; return s; };
  let inv = 0, inserted = 0;
  for (const v of nums) {
    const r = rank.get(v);
    inv += inserted - query(r);
    update(r);
    inserted++;
  }
  return inv;
}`,
    typescript: `function countInversions(nums: number[]): number {
  const sorted = [...new Set(nums)].sort((a, b) => a - b);
  const rank = new Map<number, number>(sorted.map((v, i) => [v, i + 1]));
  const n = sorted.length;
  const bit = new Array<number>(n + 1).fill(0);
  const update = (i: number) => { for (; i <= n; i += i & -i) bit[i]!++; };
  const query = (i: number) => { let s = 0; for (; i > 0; i -= i & -i) s += bit[i]!; return s; };
  let inv = 0, inserted = 0;
  for (const v of nums) {
    const r = rank.get(v)!;
    inv += inserted - query(r);
    update(r);
    inserted++;
  }
  return inv;
}`,
    python: `def countInversions(nums):
    sorted_u = sorted(set(nums))
    rank = {v: i + 1 for i, v in enumerate(sorted_u)}
    n = len(sorted_u)
    bit = [0] * (n + 1)
    def update(i):
        while i <= n: bit[i] += 1; i += i & -i
    def query(i):
        s = 0
        while i > 0: s += bit[i]; i -= i & -i
        return s
    inv = inserted = 0
    for v in nums:
        r = rank[v]
        inv += inserted - query(r)
        update(r)
        inserted += 1
    return inv`,
  },
  visibleTests: [
    { args: [[3, 1, 2]], expected: 2 },
    { args: [[1, 2, 3]], expected: 0 },
    { args: [[3, 2, 1]], expected: 3 },
  ],
  hiddenTests: [
    { args: [[1]], expected: 0 },
    { args: [[2, 1]], expected: 1 },
    { args: [[1, 3, 2, 5, 4]], expected: 2 },
    { args: [[5, 4, 3, 2, 1]], expected: 10 },
    { args: [[2, 4, 1, 3, 5]], expected: 3 },
  ],
};
