import type { Problem } from '../types';

const JS_PREAMBLE = `
class TreeNode {
  constructor(val, left = null, right = null) {
    this.v = val; this.l = left; this.r = right;
  }
}
function __fromArray__(arr) {
  if (!arr || arr.length === 0) return null;
  const root = new TreeNode(arr[0]);
  const q = [root]; let i = 1;
  while (i < arr.length) {
    const n = q.shift();
    if (i < arr.length && arr[i] != null) { n.l = new TreeNode(arr[i]); q.push(n.l); } i++;
    if (i < arr.length && arr[i] != null) { n.r = new TreeNode(arr[i]); q.push(n.r); } i++;
  }
  return root;
}
function distributeCoinsRunner(arr) {
  const root = __fromArray__(arr);
  return distributeCoins(root);
}
`;

const PY_PREAMBLE = `
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

def __from_array__(raw):
    raw_list = raw.to_py() if hasattr(raw, 'to_py') else list(raw)
    arr = [int(v) if isinstance(v, (int, float)) and not isinstance(v, bool) else None for v in raw_list]
    if not arr or arr[0] is None:
        return None
    root = TreeNode(arr[0])
    from collections import deque
    q = deque([root]); i = 1
    while q and i < len(arr):
        n = q.popleft()
        if i < len(arr) and arr[i] is not None:
            n.left = TreeNode(arr[i]); q.append(n.left)
        i += 1
        if i < len(arr) and arr[i] is not None:
            n.right = TreeNode(arr[i]); q.append(n.right)
        i += 1
    return root

def distributeCoinsRunner(arr):
    root = __from_array__(arr)
    return distributeCoins(root)
`;

export const problem: Problem = {
  id: 'distribute-coins-binary-tree',
  title: 'Distribute Coins in Binary Tree',
  difficulty: 'medium',
  tags: ['tree'],
  description: `You are given the \`root\` of a binary tree with \`n\` nodes where each node in the tree has \`node.val\` coins. There are \`n\` coins in total throughout the whole tree.

In one move, we may choose two adjacent nodes and move one coin from one node to another. A move is considered a "coin flow" across the edge between them.

Return the **minimum** number of moves required to make every node have **exactly one** coin.`,
  constraints: [
    'The number of nodes in the tree is `n`.',
    '`1 <= n <= 100`',
    '`0 <= Node.val <= n`',
    'The sum of all `Node.val` is `n`.',
  ],
  examples: [
    { input: 'root = [3,0,0]', output: '2', explanation: 'Move 1 coin from root to left, 1 to right.' },
    { input: 'root = [0,3,0]', output: '3' },
  ],
  hints: [
    'For each node, compute the "excess" = (number of coins in subtree) - (number of nodes in subtree).',
    'The number of moves across an edge = |excess of child subtree|.',
    'Use DFS and return the excess of each subtree.',
  ],
  functionName: 'distributeCoinsRunner',
  params: ['root'],
  preamble: {
    javascript: JS_PREAMBLE,
    python: PY_PREAMBLE,
  },
  starterCode: {
    javascript: 'function distributeCoins(root) {\n  \n}\n',
    typescript: "function distributeCoinsRunner(root: number[]): number {\n  \n}",

    python: 'def distributeCoins(root):\n    pass\n',
  },
  visibleTests: [
    { args: [[3, 0, 0]], expected: 2 },
    { args: [[0, 3, 0]], expected: 3 },
  ],
  hiddenTests: [
    { args: [[1]], expected: 0 },
    { args: [[1, 0, 2]], expected: 2 },
    { args: [[1, 0, 0, null, null, 1, 3]], expected: 4 },
    { args: [[1, 0, 0, null, 3]], expected: 4 },
  ],
};
