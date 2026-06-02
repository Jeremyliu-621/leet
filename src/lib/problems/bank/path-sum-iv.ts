import type { Problem } from '../types';

export const problem: Problem = {
  id: 'path-sum-iv',
  title: 'Path Sum IV',
  difficulty: 'medium',
  tags: ['tree', 'hash-map'],
  description: `If the depth of a tree is smaller than \`5\`, then the tree can be represented by an array of three-digit integers. For each integer in this array:

- The **hundreds digit** represents the **depth** \`d\` of this node (1-indexed).
- The **tens digit** represents the **position** \`p\` of this node in the level it belongs to (1-indexed, left-to-right).
- The **units digit** represents the **value** \`v\` of this node.

The parent of a node at depth \`d\`, position \`p\` is the node at depth \`d - 1\`, position \`⌈p/2⌉\`.

Given a list of **ascending** three-digit integers \`nums\` representing a binary tree with depth less than 5, return the **sum of all root-to-leaf path sums**.`,
  constraints: [
    '1 <= nums.length <= 15',
    '110 <= nums[i] <= 489',
    'nums represents a valid binary tree with depth less than 5.',
  ],
  examples: [
    {
      input: 'nums = [113,215,221]',
      output: '12',
      explanation: 'Tree: root=3, left=5, right=1. Paths: 3+5=8, 3+1=4. Sum=12.',
    },
    {
      input: 'nums = [113,221]',
      output: '4',
      explanation: 'Tree: root=3, right=1 (no left child). Only path: 3+1=4.',
    },
    {
      input: 'nums = [111,217,221,315,322]',
      output: '25',
      explanation: 'Tree: root=1, left=7(with children 5,2), right=1. Paths: 1+7+5=13, 1+7+2=10, 1+1=2. Wait: the node at (2,2) has no children so path is 1+1=2. But the output shows the tree in the problem. Actually: paths 13+10+2=25.',
    },
  ],
  hints: [
    'Level 1: Parse each number: `d = n / 100`, `p = (n / 10) % 10`, `v = n % 10`. Build a map `(d*10+p) → value`.',
    'Level 2: DFS from root (d=1, p=1). A node at (d, p) has left child at (d+1, 2p-1) and right child at (d+1, 2p).',
    'Level 3: A node is a leaf if neither child key exists in the map. Accumulate the sum when you reach a leaf.',
  ],
  functionName: 'pathSum',
  params: ['nums'],
  starterCode: {
    javascript: `function pathSum(nums) {
  const map = new Map();
  for (const n of nums) {
    const d = Math.floor(n / 100), p = Math.floor(n / 10) % 10, v = n % 10;
    map.set(d * 10 + p, v);
  }
  let total = 0;
  const dfs = (d, p, sum) => {
    const val = map.get(d * 10 + p);
    if (val === undefined) return;
    sum += val;
    const lKey = (d + 1) * 10 + 2 * p - 1;
    const rKey = (d + 1) * 10 + 2 * p;
    if (!map.has(lKey) && !map.has(rKey)) { total += sum; return; }
    dfs(d + 1, 2 * p - 1, sum);
    dfs(d + 1, 2 * p, sum);
  };
  dfs(1, 1, 0);
  return total;
}`,
    typescript: `function pathSum(nums: number[]): number {
  const map = new Map<number, number>();
  for (const n of nums) {
    const d = Math.floor(n / 100), p = Math.floor(n / 10) % 10, v = n % 10;
    map.set(d * 10 + p, v);
  }
  let total = 0;
  const dfs = (d: number, p: number, sum: number) => {
    const val = map.get(d * 10 + p);
    if (val === undefined) return;
    sum += val;
    const lKey = (d + 1) * 10 + 2 * p - 1;
    const rKey = (d + 1) * 10 + 2 * p;
    if (!map.has(lKey) && !map.has(rKey)) { total += sum; return; }
    dfs(d + 1, 2 * p - 1, sum);
    dfs(d + 1, 2 * p, sum);
  };
  dfs(1, 1, 0);
  return total;
}`,
    python: `def pathSum(nums):
    nums = [int(x) for x in (nums.to_py() if hasattr(nums, 'to_py') else nums)]
    tree = {}
    for n in nums:
        d, p, v = n // 100, (n // 10) % 10, n % 10
        tree[d * 10 + p] = v
    total = [0]
    def dfs(d, p, s):
        key = d * 10 + p
        if key not in tree: return
        s += tree[key]
        lk, rk = (d+1)*10 + 2*p-1, (d+1)*10 + 2*p
        if lk not in tree and rk not in tree:
            total[0] += s; return
        dfs(d+1, 2*p-1, s); dfs(d+1, 2*p, s)
    dfs(1, 1, 0)
    return total[0]`,
  },
  visibleTests: [
    { args: [[113, 215, 221]], expected: 12 },
    { args: [[113, 221]], expected: 4 },
    { args: [[111, 217, 221, 315, 322]], expected: 25 },
  ],
  hiddenTests: [
    { args: [[111]], expected: 1 },
    { args: [[111, 212, 223]], expected: 7 },
    { args: [[111, 212, 223, 311, 322]], expected: 13 },
    { args: [[111, 213]], expected: 4 },
  ],
};
