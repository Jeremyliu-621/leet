import type { Problem } from '../types';

const JS_PREAMBLE = `
class TreeNode {
  constructor(val = 0, left = null, right = null) {
    this.val = val; this.left = left; this.right = right;
  }
}
function __fromArray__(arr) {
  if (!arr || arr.length === 0 || arr[0] === null) return null;
  const root = new TreeNode(arr[0]);
  const queue = [root];
  let i = 1;
  while (queue.length > 0 && i < arr.length) {
    const node = queue.shift();
    if (arr[i] !== null && arr[i] !== undefined) { node.left = new TreeNode(arr[i]); queue.push(node.left); }
    i++;
    if (i < arr.length && arr[i] !== null && arr[i] !== undefined) { node.right = new TreeNode(arr[i]); queue.push(node.right); }
    i++;
  }
  return root;
}
function findTiltRunner(arr) { return findTilt(__fromArray__(arr)); }
`.trim();

const PY_PREAMBLE = `
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

def __from_array__(arr):
    if hasattr(arr, 'to_py'):
        raw = arr.to_py()
    else:
        raw = list(arr)
    arr = [int(v) if isinstance(v, (int, float)) and not isinstance(v, bool) else None for v in raw]
    if not arr or arr[0] is None:
        return None
    root = TreeNode(arr[0])
    queue = [root]
    i = 1
    while queue and i < len(arr):
        node = queue.pop(0)
        if i < len(arr) and arr[i] is not None:
            node.left = TreeNode(arr[i])
            queue.append(node.left)
        i += 1
        if i < len(arr) and arr[i] is not None:
            node.right = TreeNode(arr[i])
            queue.append(node.right)
        i += 1
    return root

def findTiltRunner(arr):
    return findTilt(__from_array__(arr))
`.trim();

export const problem: Problem = {
  id: 'binary-tree-tilt',
  title: 'Binary Tree Tilt',
  difficulty: 'easy',
  tags: ['tree'],
  description: `Given the \`root\` of a binary tree, return the **sum of every tree node's tilt**.

The **tilt** of a tree node is the **absolute difference** between the sum of all left subtree node values and all right subtree node values. If a node does not have a left child, the sum of the left subtree is 0. The same applies for the right child.

> **Note:** A \`TreeNode\` class is pre-defined. Nodes have \`val\`, \`left\`, and \`right\` fields.`,
  constraints: [
    'The number of nodes in the tree is in the range [0, 10^4]',
    '-1000 <= Node.val <= 1000',
  ],
  examples: [
    {
      input: 'root = [1,2,3]',
      output: '1',
      explanation: 'Tilt of node 2 = |0-0| = 0. Tilt of node 3 = 0. Tilt of node 1 = |2-3| = 1. Total = 1.',
    },
    {
      input: 'root = [4,2,9,3,5,null,7]',
      output: '15',
      explanation: 'Tilt of 3=0, 5=0, 2=|3-5|=2, 7=0, 9=|0-7|=7, 4=|10-16|=6. Total = 15.',
    },
  ],
  hints: [
    'Use a post-order DFS: compute each subtree\'s sum, accumulate the tilt, return the sum upward.',
    '`function sum(node) { if (!node) return 0; const l=sum(node.left), r=sum(node.right); total+=Math.abs(l-r); return node.val+l+r; }`',
    `\`\`\`js
function findTilt(root) {
  let total=0;
  function sum(node){
    if(!node) return 0;
    const l=sum(node.left),r=sum(node.right);
    total+=Math.abs(l-r);
    return node.val+l+r;
  }
  sum(root);
  return total;
}\`\`\``,
  ],
  functionName: 'findTiltRunner',
  params: ['root'],
  preamble: { javascript: JS_PREAMBLE, python: PY_PREAMBLE },
  starterCode: {
    javascript:
      '// TreeNode class is pre-defined. Implement the function below:\nfunction findTilt(root) {\n  let total = 0;\n  function sum(node) {\n    if (!node) return 0;\n    const l = sum(node.left), r = sum(node.right);\n    total += Math.abs(l - r);\n    return node.val + l + r;\n  }\n  sum(root);\n  return total;\n}\n',
    typescript: `function findTiltRunner(root: (number | null)[]): number {
  if (!root.length || root[0] == null) return 0;
  type N = { v: number; l: N|null; r: N|null };
  const mk = (v: number): N => ({v, l: null, r: null});
  const r = mk(root[0] as number);
  const q: N[] = [r]; let i = 1;
  while (q.length && i < root.length) {
    const n = q.shift()!;
    if (root[i] != null) { n.l = mk(root[i] as number); q.push(n.l); } i++;
    if (i < root.length && root[i] != null) { n.r = mk(root[i] as number); q.push(n.r); } i++;
  }
  let total = 0;
  const sum = (n: N|null): number => {
    if (!n) return 0;
    const l = sum(n.l), rv = sum(n.r);
    total += Math.abs(l - rv);
    return n.v + l + rv;
  };
  sum(r);
  return total;
}`,

    python:
      '# TreeNode class is pre-defined. Implement the function below:\ndef findTilt(root):\n    total = [0]\n    def sum_tree(node):\n        if not node: return 0\n        l, r = sum_tree(node.left), sum_tree(node.right)\n        total[0] += abs(l - r)\n        return node.val + l + r\n    sum_tree(root)\n    return total[0]\n',
  },
  visibleTests: [
    { args: [[1, 2, 3]], expected: 1 },
    { args: [[4, 2, 9, 3, 5, null, 7]], expected: 15 },
    { args: [[]], expected: 0 },
  ],
  hiddenTests: [
    { args: [[1]], expected: 0 },
    { args: [[1, 2]], expected: 2 },
    { args: [[1, 2, 3, 4, 5]], expected: 9 },
    { args: [[2, 2, 2]], expected: 0 },
  ],
};
