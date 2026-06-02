import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-smaller-before-self-bit',
  title: 'Count Smaller Elements Before Self (BIT)',
  difficulty: 'medium',
  tags: ['binary-indexed-tree', 'arrays'],
  description: `Given an integer array \`nums\`, return an array \`counts\` where \`counts[i]\` is the number of elements **to the left** of \`nums[i]\` that are **strictly smaller** than \`nums[i]\`.

Use coordinate compression and a Binary Indexed Tree (Fenwick Tree) for an O(n log n) solution.`,
  constraints: [
    '1 <= nums.length <= 10^5',
    '-10^4 <= nums[i] <= 10^4',
  ],
  examples: [
    {
      input: 'nums = [3,1,2,4]',
      output: '[0,0,1,3]',
      explanation: 'Before 3: nothing → 0. Before 1: nothing smaller → 0. Before 2: only 1 is smaller → 1. Before 4: 3,1,2 are all smaller → 3.',
    },
    {
      input: 'nums = [1,2,3]',
      output: '[0,1,2]',
      explanation: 'Sorted array: each element has all previous elements smaller.',
    },
    {
      input: 'nums = [3,3,3]',
      output: '[0,0,0]',
      explanation: 'All equal — no strictly smaller elements.',
    },
  ],
  hints: [
    'Process elements left to right. For each element, query the BIT for prefixSum(rank−1) to count elements already inserted that are strictly smaller.',
    'Coordinate-compress values to ranks 1..m (sorted unique values). After querying, insert the current element\'s rank into the BIT with update(rank, +1).',
    'Build a sorted unique array. For each nums[i], its rank = position in sorted unique array (1-indexed). BIT prefix query up to rank−1 gives the count of smaller elements seen so far.',
  ],
  functionName: 'countSmallerBefore',
  params: ['nums'],
  starterCode: {
    javascript: `function countSmallerBefore(nums) {
  const sorted = [...new Set(nums)].sort((a, b) => a - b);
  const rank = new Map(sorted.map((v, i) => [v, i + 1]));
  const n = sorted.length;
  const bit = new Array(n + 1).fill(0);
  const update = i => { for (; i <= n; i += i & -i) bit[i]++; };
  const query = i => { let s = 0; for (; i > 0; i -= i & -i) s += bit[i]; return s; };
  return nums.map(v => {
    const r = rank.get(v);
    const cnt = query(r - 1);
    update(r);
    return cnt;
  });
}`,
    typescript: `function countSmallerBefore(nums: number[]): number[] {
  const sorted = [...new Set(nums)].sort((a, b) => a - b);
  const rank = new Map<number, number>(sorted.map((v, i) => [v, i + 1]));
  const n = sorted.length;
  const bit = new Array<number>(n + 1).fill(0);
  const update = (i: number) => { for (; i <= n; i += i & -i) bit[i]!++; };
  const query = (i: number) => { let s = 0; for (; i > 0; i -= i & -i) s += bit[i]!; return s; };
  return nums.map(v => {
    const r = rank.get(v)!;
    const cnt = query(r - 1);
    update(r);
    return cnt;
  });
}`,
    python: `def countSmallerBefore(nums):
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
    result = []
    for v in nums:
        r = rank[v]
        result.append(query(r - 1))
        update(r)
    return result`,
  },
  visibleTests: [
    { args: [[3, 1, 2, 4]], expected: [0, 0, 1, 3] },
    { args: [[1, 2, 3]], expected: [0, 1, 2] },
    { args: [[3, 3, 3]], expected: [0, 0, 0] },
  ],
  hiddenTests: [
    { args: [[1]], expected: [0] },
    { args: [[2, 1]], expected: [0, 0] },
    { args: [[1, 3, 2, 5, 4]], expected: [0, 1, 1, 3, 3] },
    { args: [[5, 4, 3, 2, 1]], expected: [0, 0, 0, 0, 0] },
    { args: [[1, 1, 2, 2, 3]], expected: [0, 0, 2, 2, 4] },
  ],
};
