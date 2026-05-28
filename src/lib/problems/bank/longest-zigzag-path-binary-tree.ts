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
function longestZigZagRunner(arr) {
  const root = __fromArray__(arr);
  return longestZigZag(root);
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

def longestZigZagRunner(arr):
    root = __from_array__(arr)
    return longestZigZag(root)
`;

export const problem: Problem = {
  id: 'longest-zigzag-path-binary-tree',
  title: 'Longest ZigZag Path in a Binary Tree',
  difficulty: 'medium',
  tags: ['tree', 'dynamic-programming'],
  description: `You are given the \`root\` of a binary tree.

A ZigZag path for a binary tree is defined as follows:
- Choose **any** node in the binary tree and a direction (right or left).
- If the current direction is right, move to the right child of the current node; otherwise, move to the left child.
- **Change** the direction from right to left or from left to right.
- Repeat the second and third steps until you can't move in the tree.

ZigZag length is defined as the number of nodes visited - 1. (A single node has a length of 0.)

Return the longest ZigZag path contained in that tree.`,
  constraints: [
    'The number of nodes in the tree is in the range `[1, 5 * 10^4]`.',
    '`1 <= Node.val <= 100`',
  ],
  examples: [
    {
      input: 'root = [1,null,1,1,1,null,null,1,1,null,1,null,null,null,1]',
      output: '3',
    },
    {
      input: 'root = [1,1,1,null,1,null,null,1,null,1]',
      output: '4',
    },
    {
      input: 'root = [1]',
      output: '0',
    },
  ],
  hints: [
    'For each node, track the maximum zigzag going left-first and right-first.',
    'Use DFS: at each node, the max zigzag going left is 1 + (child\'s max zigzag going right). Similarly for going right.',
    'The answer is the maximum of all left-first and right-first values across all nodes.',
  ],
  functionName: 'longestZigZagRunner',
  params: ['root'],
  preamble: {
    javascript: JS_PREAMBLE,
    python: PY_PREAMBLE,
  },
  starterCode: {
    javascript: 'function longestZigZag(root) {\n  \n}\n',
    typescript: "function longestZigZagRunner(root: number[]): number {\n  \n}",

    python: 'def longestZigZag(root):\n    pass\n',
  },
  visibleTests: [
    { args: [[1]], expected: 0 },
    { args: [[1, null, 2, 3, 4]], expected: 2 },
    { args: [[1, 1, 1, null, 1, null, null, 1]], expected: 3 },
  ],
  hiddenTests: [
    { args: [[1, 1]], expected: 1 },
    { args: [[1, null, 1, null, 1]], expected: 1 },
    { args: [[1, 2, null, null, 3, 4]], expected: 3 },
    { args: [[1, 2, 3, null, 4]], expected: 2 },
  ],
};
