import type { Problem } from '../types';

export const problem: Problem = {
  id: 'segment-tree-range-max',
  title: 'Segment Tree — Point Update, Range Maximum',
  difficulty: 'medium',
  tags: ['segment-tree', 'arrays'],
  description: `You are given an array of integers \`nums\` and a list of **operations**:

- \`["update", i, val]\` — set \`nums[i]\` to \`val\` (0-indexed).
- \`["query", l, r]\` — return the **maximum** value in \`nums[l..r]\` (0-indexed, inclusive).

Implement this using a **segment tree** so each operation runs in O(log n).

Return an array of results for every \`"query"\` operation, in order.`,
  constraints: [
    '1 <= nums.length <= 10^5',
    '0 <= i, l, r < nums.length',
    'l <= r',
    '-10^9 <= nums[i], val <= 10^9',
    '1 <= operations.length <= 10^5',
  ],
  examples: [
    {
      input: 'nums = [1, 3, 2, 7, 9, 11], operations = [["query",0,2],["update",2,10],["query",0,2],["query",0,5]]',
      output: '[3, 10, 11]',
      explanation: 'max(1,3,2)=3. After update: nums=[1,3,10,7,9,11]. max(1,3,10)=10. max(1,3,10,7,9,11)=11.',
    },
    {
      input: 'nums = [5], operations = [["query",0,0],["update",0,-1],["query",0,0]]',
      output: '[5, -1]',
      explanation: 'Single element: initial max is 5, after update it is -1.',
    },
  ],
  hints: [
    'Build a segment tree where each node stores the max of its range. Leaves store nums[i]; internal nodes store max(left child, right child). Build in O(n), query/update in O(log n).',
    'To update index i with val: walk down to the leaf for i, set it to val, then update each ancestor by re-computing max of its two children on the way back up.',
    `\`\`\`js
function segTreeRangeMax(nums, operations) {
  const n = nums.length, tree = new Array(4*n).fill(-Infinity);
  function build(v, lo, hi) {
    if (lo === hi) { tree[v] = nums[lo]; return; }
    const mid = (lo+hi)>>1;
    build(2*v, lo, mid); build(2*v+1, mid+1, hi);
    tree[v] = Math.max(tree[2*v], tree[2*v+1]);
  }
  function update(v, lo, hi, i, val) {
    if (lo === hi) { tree[v] = val; return; }
    const mid = (lo+hi)>>1;
    if (i <= mid) update(2*v, lo, mid, i, val);
    else update(2*v+1, mid+1, hi, i, val);
    tree[v] = Math.max(tree[2*v], tree[2*v+1]);
  }
  function query(v, lo, hi, l, r) {
    if (r < lo || hi < l) return -Infinity;
    if (l <= lo && hi <= r) return tree[v];
    const mid = (lo+hi)>>1;
    return Math.max(query(2*v,lo,mid,l,r), query(2*v+1,mid+1,hi,l,r));
  }
  build(1, 0, n-1);
  const res = [];
  for (const op of operations) {
    if (op[0]==='update') update(1, 0, n-1, op[1], op[2]);
    else res.push(query(1, 0, n-1, op[1], op[2]));
  }
  return res;
}\`\`\``,
  ],
  functionName: 'segTreeRangeMax',
  params: ['nums', 'operations'],
  starterCode: {
    javascript: `function segTreeRangeMax(nums, operations) {
  const n = nums.length;
  const tree = new Array(4 * n).fill(-Infinity);
  function build(v, lo, hi) {
    if (lo === hi) { tree[v] = nums[lo]; return; }
    const mid = (lo + hi) >> 1;
    build(2*v, lo, mid); build(2*v+1, mid+1, hi);
    tree[v] = Math.max(tree[2*v], tree[2*v+1]);
  }
  function update(v, lo, hi, i, val) {
    if (lo === hi) { tree[v] = val; return; }
    const mid = (lo + hi) >> 1;
    if (i <= mid) update(2*v, lo, mid, i, val);
    else update(2*v+1, mid+1, hi, i, val);
    tree[v] = Math.max(tree[2*v], tree[2*v+1]);
  }
  function query(v, lo, hi, l, r) {
    if (r < lo || hi < l) return -Infinity;
    if (l <= lo && hi <= r) return tree[v];
    const mid = (lo + hi) >> 1;
    return Math.max(query(2*v, lo, mid, l, r), query(2*v+1, mid+1, hi, l, r));
  }
  build(1, 0, n - 1);
  const res = [];
  for (const op of operations) {
    if (op[0] === 'update') update(1, 0, n-1, op[1], op[2]);
    else res.push(query(1, 0, n-1, op[1], op[2]));
  }
  return res;
}`,
    typescript: `function segTreeRangeMax(nums: number[], operations: (string | number)[][]): number[] {
  const n = nums.length;
  const tree = new Array(4 * n).fill(-Infinity);
  function build(v: number, lo: number, hi: number): void {
    if (lo === hi) { tree[v] = nums[lo]; return; }
    const mid = (lo + hi) >> 1;
    build(2*v, lo, mid); build(2*v+1, mid+1, hi);
    tree[v] = Math.max(tree[2*v]!, tree[2*v+1]!);
  }
  function update(v: number, lo: number, hi: number, i: number, val: number): void {
    if (lo === hi) { tree[v] = val; return; }
    const mid = (lo + hi) >> 1;
    if (i <= mid) update(2*v, lo, mid, i, val);
    else update(2*v+1, mid+1, hi, i, val);
    tree[v] = Math.max(tree[2*v]!, tree[2*v+1]!);
  }
  function query(v: number, lo: number, hi: number, l: number, r: number): number {
    if (r < lo || hi < l) return -Infinity;
    if (l <= lo && hi <= r) return tree[v]!;
    const mid = (lo + hi) >> 1;
    return Math.max(query(2*v, lo, mid, l, r), query(2*v+1, mid+1, hi, l, r));
  }
  build(1, 0, n - 1);
  const res: number[] = [];
  for (const op of operations) {
    if (op[0] === 'update') update(1, 0, n-1, op[1] as number, op[2] as number);
    else res.push(query(1, 0, n-1, op[1] as number, op[2] as number));
  }
  return res;
}`,
    python: `def segTreeRangeMax(nums: list[int], operations: list[list]) -> list[int]:
    n = len(nums)
    tree = [-float('inf')] * (4 * n)
    def build(v, lo, hi):
        if lo == hi:
            tree[v] = nums[lo]; return
        mid = (lo + hi) >> 1
        build(2*v, lo, mid); build(2*v+1, mid+1, hi)
        tree[v] = max(tree[2*v], tree[2*v+1])
    def update(v, lo, hi, i, val):
        if lo == hi:
            tree[v] = val; return
        mid = (lo + hi) >> 1
        if i <= mid: update(2*v, lo, mid, i, val)
        else: update(2*v+1, mid+1, hi, i, val)
        tree[v] = max(tree[2*v], tree[2*v+1])
    def query(v, lo, hi, l, r):
        if r < lo or hi < l: return -float('inf')
        if l <= lo and hi <= r: return tree[v]
        mid = (lo + hi) >> 1
        return max(query(2*v, lo, mid, l, r), query(2*v+1, mid+1, hi, l, r))
    build(1, 0, n - 1)
    res = []
    for op in operations:
        if op[0] == 'update': update(1, 0, n-1, int(op[1]), int(op[2]))
        else: res.append(query(1, 0, n-1, int(op[1]), int(op[2])))
    return res
`,
  },
  visibleTests: [
    {
      args: [[1, 3, 2, 7, 9, 11], [['query', 0, 2], ['update', 2, 10], ['query', 0, 2], ['query', 0, 5]]],
      expected: [3, 10, 11],
    },
    {
      args: [[5], [['query', 0, 0], ['update', 0, -1], ['query', 0, 0]]],
      expected: [5, -1],
    },
    {
      args: [[4, 2, 8, 1, 6], [['query', 0, 4], ['query', 1, 3], ['update', 3, 100], ['query', 1, 4]]],
      expected: [8, 8, 100],
    },
  ],
  hiddenTests: [
    {
      args: [[10, 20, 30, 40, 50], [['query', 0, 4], ['query', 2, 4], ['update', 4, 5], ['query', 2, 4]]],
      expected: [50, 50, 40],
    },
    {
      args: [[-5, -3, -1, -4, -2], [['query', 0, 4], ['query', 1, 3], ['update', 0, -10], ['query', 0, 2]]],
      expected: [-1, -1, -1],
    },
    {
      args: [[1, 2, 3, 4, 5], [['update', 0, 100], ['query', 0, 4], ['update', 4, -100], ['query', 0, 4]]],
      expected: [100, 100],
    },
    {
      args: [[7, 7, 7, 7], [['query', 0, 3], ['update', 2, 5], ['query', 0, 3], ['query', 2, 3]]],
      expected: [7, 7, 7],
    },
    {
      args: [[3, 1, 4, 1, 5, 9, 2, 6], [['query', 0, 7], ['query', 0, 3], ['update', 5, 0], ['query', 4, 7]]],
      expected: [9, 4, 6],
    },
  ],
};
