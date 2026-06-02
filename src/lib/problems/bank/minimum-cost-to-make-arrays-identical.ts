import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-cost-to-make-arrays-identical',
  title: 'Minimum Cost to Make Arrays Identical',
  difficulty: 'medium',
  tags: ['arrays', 'math'],
  description: `You are given two integer arrays \`arr\` and \`brr\` of length \`n\`, containing the same multiset of integers, and an integer \`k\`.

In one operation you may **sort** the array \`arr\` (cost \`k\`). You may also perform **adjacent swaps** in \`arr\` at cost \`1\` per swap.

Return the **minimum total cost** to make \`arr\` identical to \`brr\`.`,
  constraints: [
    '1 <= arr.length == brr.length <= 10^5',
    '0 <= arr[i], brr[i] <= 10^9',
    '0 <= k <= 10^15',
    'arr and brr contain the same multiset of values.',
  ],
  examples: [
    {
      input: 'arr = [3,1,2], brr = [1,2,3], k = 5',
      output: '2',
      explanation:
        'Without sorting: match arr[0]=3→pos2, arr[1]=1→pos0, arr[2]=2→pos1 in brr giving permutation [2,0,1] with 2 inversions. Cost=2. With sorting (cost=5): sorted=[1,2,3] already equals brr, 0 extra swaps. Cost=5. Min=2.',
    },
    {
      input: 'arr = [3,2,1], brr = [1,2,3], k = 2',
      output: '2',
      explanation:
        'Without sorting: permutation [2,1,0] has 3 inversions. Cost=3. With sorting (cost=2): sorted=[1,2,3] equals brr. Cost=2. Min=2.',
    },
    {
      input: 'arr = [1,2,3], brr = [1,2,3], k = 10',
      output: '0',
      explanation: 'arr already equals brr. 0 swaps needed.',
    },
  ],
  hints: [
    'Level 1: Two options: (A) transform arr to brr directly using adjacent swaps; (B) sort arr first (cost k), then transform sorted arr to brr.',
    'Level 2: The minimum adjacent swaps to transform one array into a permutation of the same elements equals the number of inversions in the induced permutation. Map arr elements to their target positions in brr (matching equal values in left-to-right order).',
    'Level 3: Count inversions via merge sort in O(n log n). Answer = min(inversions_direct, k + inversions_after_sort).',
  ],
  functionName: 'minCost',
  params: ['arr', 'brr', 'k'],
  starterCode: {
    javascript: `function minCost(arr, brr, k) {
  const n = arr.length;
  function buildPerm(a, b) {
    const posMap = new Map();
    for (let i = 0; i < n; i++) {
      if (!posMap.has(b[i])) posMap.set(b[i], []);
      posMap.get(b[i]).push(i);
    }
    const idx = new Map();
    return a.map(v => {
      const c = idx.get(v) || 0; idx.set(v, c + 1);
      return posMap.get(v)[c];
    });
  }
  function countInv(perm) {
    let inv = 0;
    function merge(a, lo, mid, hi) {
      const left = a.slice(lo, mid), right = a.slice(mid, hi);
      let i = 0, j = 0, p = lo;
      while (i < left.length && j < right.length) {
        if (left[i] <= right[j]) a[p++] = left[i++];
        else { inv += left.length - i; a[p++] = right[j++]; }
      }
      while (i < left.length) a[p++] = left[i++];
      while (j < right.length) a[p++] = right[j++];
    }
    function sort(a, lo, hi) {
      if (hi - lo <= 1) return;
      const mid = (lo + hi) >> 1;
      sort(a, lo, mid); sort(a, mid, hi); merge(a, lo, mid, hi);
    }
    const copy = [...perm]; sort(copy, 0, copy.length); return inv;
  }
  const cost1 = countInv(buildPerm(arr, brr));
  const sorted = [...arr].sort((a, b) => a - b);
  const cost2 = k + countInv(buildPerm(sorted, brr));
  return Math.min(cost1, cost2);
}`,
    typescript: `function minCost(arr: number[], brr: number[], k: number): number {
  const n = arr.length;
  function buildPerm(a: number[], b: number[]): number[] {
    const posMap = new Map<number, number[]>();
    for (let i = 0; i < n; i++) {
      if (!posMap.has(b[i]!)) posMap.set(b[i]!, []);
      posMap.get(b[i]!)!.push(i);
    }
    const idx = new Map<number, number>();
    return a.map(v => {
      const c = idx.get(v) ?? 0; idx.set(v, c + 1);
      return posMap.get(v)![c]!;
    });
  }
  function countInv(perm: number[]): number {
    let inv = 0;
    function merge(a: number[], lo: number, mid: number, hi: number): void {
      const left = a.slice(lo, mid), right = a.slice(mid, hi);
      let i = 0, j = 0, p = lo;
      while (i < left.length && j < right.length) {
        if (left[i]! <= right[j]!) a[p++] = left[i++]!;
        else { inv += left.length - i; a[p++] = right[j++]!; }
      }
      while (i < left.length) a[p++] = left[i++]!;
      while (j < right.length) a[p++] = right[j++]!;
    }
    function sort(a: number[], lo: number, hi: number): void {
      if (hi - lo <= 1) return;
      const mid = (lo + hi) >> 1;
      sort(a, lo, mid); sort(a, mid, hi); merge(a, lo, mid, hi);
    }
    const copy = [...perm]; sort(copy, 0, copy.length); return inv;
  }
  const cost1 = countInv(buildPerm(arr, brr));
  const sorted = [...arr].sort((a, b) => a - b);
  const cost2 = k + countInv(buildPerm(sorted, brr));
  return Math.min(cost1, cost2);
}`,
    python: `def minCost(arr, brr, k):
    if hasattr(arr, 'to_py'): arr = arr.to_py()
    if hasattr(brr, 'to_py'): brr = brr.to_py()
    if hasattr(k, 'to_py'): k = k.to_py()
    arr = [int(x) for x in arr]; brr = [int(x) for x in brr]; k = int(k)
    n = len(arr)
    def build_perm(a, b):
        from collections import defaultdict
        pos_map = defaultdict(list)
        for i, v in enumerate(b): pos_map[v].append(i)
        idx = defaultdict(int)
        perm = []
        for v in a:
            perm.append(pos_map[v][idx[v]]); idx[v] += 1
        return perm
    def count_inv(perm):
        inv = [0]
        def merge_sort(a):
            if len(a) <= 1: return a
            mid = len(a) // 2
            left, right = merge_sort(a[:mid]), merge_sort(a[mid:])
            merged = []; i = j = 0
            while i < len(left) and j < len(right):
                if left[i] <= right[j]: merged.append(left[i]); i += 1
                else: inv[0] += len(left) - i; merged.append(right[j]); j += 1
            merged.extend(left[i:]); merged.extend(right[j:])
            return merged
        merge_sort(perm)
        return inv[0]
    cost1 = count_inv(build_perm(arr, brr))
    sorted_arr = sorted(arr)
    cost2 = k + count_inv(build_perm(sorted_arr, brr))
    return min(cost1, cost2)`,
  },
  visibleTests: [
    { args: [[3, 1, 2], [1, 2, 3], 5], expected: 2 },
    { args: [[3, 2, 1], [1, 2, 3], 2], expected: 2 },
    { args: [[1, 2, 3], [1, 2, 3], 10], expected: 0 },
  ],
  hiddenTests: [
    { args: [[2, 1], [1, 2], 0], expected: 0 },
    { args: [[3, 4, 1, 2], [1, 2, 3, 4], 3], expected: 3 },
    { args: [[2, 1, 4, 3], [1, 2, 3, 4], 3], expected: 2 },
    { args: [[5, 4, 3, 2, 1], [1, 2, 3, 4, 5], 6], expected: 6 },
    { args: [[2, 2, 1, 1], [1, 1, 2, 2], 2], expected: 2 },
  ],
};
