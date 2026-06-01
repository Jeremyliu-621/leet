import type { Problem } from '../types';

export const problem: Problem = {
  id: 'segment-tree-range-update',
  title: 'Segment Tree with Lazy Propagation',
  difficulty: 'hard',
  tags: ['binary-indexed-tree', 'arrays'],
  description: `You are given an array of integers \`nums\` and a list of **operations**:

- \`["add", l, r, delta]\` — add \`delta\` to every element in \`nums[l..r]\` (1-indexed, inclusive).
- \`["query", l, r]\` — return the **sum** of \`nums[l..r]\` (1-indexed, inclusive).

Implement this using a **segment tree with lazy propagation**, so each operation runs in O(log n).

Return an array of results for every \`"query"\` operation.`,
  constraints: [
    '1 <= nums.length <= 10^5',
    '1 <= l <= r <= nums.length',
    '1 <= operations.length <= 10^5',
    '-10^4 <= delta <= 10^4',
  ],
  examples: [
    {
      input: 'nums = [1,2,3,4,5], operations = [["query",1,5],["add",2,4,10],["query",1,5],["query",2,4]]',
      output: '[15, 45, 36]',
      explanation: 'Initial sum(1..5)=15. After add(2..4,+10): nums=[1,12,13,14,5]. sum(1..5)=45. sum(2..4)=12+13+14=39.',
    },
    {
      input: 'nums = [0,0,0], operations = [["add",1,3,5],["query",1,3]]',
      output: '[15]',
      explanation: 'Add 5 to all 3 elements → [5,5,5]. Sum = 15.',
    },
  ],
  hints: [
    'Build a segment tree of size 4n. Each node stores the sum of its range. Add a lazy[] array: lazy[v] is a pending additive delta to be pushed to children before any child query.',
    'pushDown(v, tl, tr): if lazy[v]!=0, apply delta*(tm-tl+1) and delta*(tr-tm) to left/right children sums, add lazy[v] to lazy[left] and lazy[right], set lazy[v]=0. Then update(v,tl,tr,l,r,delta) recurses down pushing lazily; query(v,tl,tr,l,r) also pushes before recursing.',
    'The key invariant: tree[v] = actual sum of arr[tl..tr] accounting for all pending lazy updates at ancestors. Build: tree[v] = tree[2v]+tree[2v+1]. Leaf: tree[v] = arr[tl].',
  ],
  functionName: 'segTreeRangeUpdate',
  params: ['nums', 'operations'],
  starterCode: {
    javascript: `function segTreeRangeUpdate(nums, operations) {\n\n}`,
    typescript: `function segTreeRangeUpdate(nums: number[], operations: [string, number, number, number?][]): number[] {\n\n}`,
    python: `def segTreeRangeUpdate(nums: list[int], operations: list[list]) -> list[int]:\n    pass`,
  },
  visibleTests: [
    {
      args: [[1, 2, 3, 4, 5], [['query', 1, 5], ['add', 2, 4, 10], ['query', 1, 5], ['query', 2, 4]]],
      expected: [15, 45, 39],
    },
    {
      args: [[0, 0, 0], [['add', 1, 3, 5], ['query', 1, 3]]],
      expected: [15],
    },
    {
      args: [[10], [['query', 1, 1], ['add', 1, 1, -3], ['query', 1, 1]]],
      expected: [10, 7],
    },
  ],
  hiddenTests: [
    {
      args: [[1, 2, 3, 4, 5], [['add', 1, 5, 1], ['query', 1, 5]]],
      expected: [20],
    },
    {
      args: [[5, 5, 5, 5], [['query', 2, 3], ['add', 1, 4, -5], ['query', 2, 3]]],
      expected: [10, 0],
    },
    {
      args: [[1, 2, 3, 4, 5, 6], [['add', 3, 5, 2], ['query', 1, 6]]],
      expected: [27],
    },
    {
      args: [[0, 0, 0, 0], [['add', 1, 2, 3], ['add', 3, 4, 7], ['query', 1, 4]]],
      expected: [20],
    },
    {
      args: [[100, 200, 300], [['add', 1, 3, -100], ['query', 1, 3]]],
      expected: [300],
    },
  ],
};
