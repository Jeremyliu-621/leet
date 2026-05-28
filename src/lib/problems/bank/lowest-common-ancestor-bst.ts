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
function lowestCommonAncestorRunner(arr, p, q) {
  const result = lowestCommonAncestor(__fromArray__(arr), p, q);
  return result ? result.val : null;
}
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

def lowestCommonAncestorRunner(arr, p, q):
    result = lowestCommonAncestor(__from_array__(arr), p, q)
    return result.val if result else None
`.trim();

export const problem: Problem = {
  id: 'lowest-common-ancestor-bst',
  title: 'Lowest Common Ancestor of a BST',
  difficulty: 'medium',
  tags: ['tree'],
  description: `Given a binary search tree (BST) and two node values \`p\` and \`q\`, find their **lowest common ancestor (LCA)**.

The LCA of two nodes \`p\` and \`q\` is the lowest node in the tree that has both \`p\` and \`q\` as descendants (a node can be a descendant of itself).

Your function receives the tree \`root\` (a TreeNode) and two integer values \`p\` and \`q\` representing node values that are guaranteed to exist in the tree. Return the LCA **node** (not just its value).

> **Note:** A \`TreeNode\` class is pre-defined. Nodes have \`val\`, \`left\`, and \`right\` fields. The test harness checks \`result.val\`.`,
  constraints: [
    'The number of nodes in the tree is in the range [2, 10^5]',
    '-10^9 <= Node.val <= 10^9',
    'All Node.val are unique',
    'p and q are different node values that exist in the tree',
  ],
  examples: [
    {
      input: 'root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 8',
      output: '6',
      explanation: 'LCA of 2 and 8 is the root 6.',
    },
    {
      input: 'root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 4',
      output: '2',
      explanation: '2 is an ancestor of 4, so LCA is 2.',
    },
  ],
  hints: [
    'Use the BST property: if both p and q are less than the current node, the LCA must be in the left subtree.',
    'If both are greater, the LCA is in the right subtree. Otherwise, the current node IS the LCA.',
    '`function lowestCommonAncestor(root, p, q) { if (p < root.val && q < root.val) return lowestCommonAncestor(root.left, p, q); if (p > root.val && q > root.val) return lowestCommonAncestor(root.right, p, q); return root; }`',
  ],
  functionName: 'lowestCommonAncestorRunner',
  params: ['root', 'p', 'q'],
  preamble: { javascript: JS_PREAMBLE, python: PY_PREAMBLE },
  starterCode: {
    javascript:
      '// TreeNode class is pre-defined. Implement the function below:\n// p and q are node VALUES (integers), not TreeNodes.\nfunction lowestCommonAncestor(root, p, q) {\n  \n}\n',
    python:
      '# TreeNode class is pre-defined. Implement the function below:\n# p and q are node VALUES (integers), not TreeNodes.\ndef lowestCommonAncestor(root, p, q):\n    pass\n',
  },
  visibleTests: [
    { args: [[6, 2, 8, 0, 4, 7, 9, null, null, 3, 5], 2, 8], expected: 6 },
    { args: [[6, 2, 8, 0, 4, 7, 9, null, null, 3, 5], 2, 4], expected: 2 },
    { args: [[2, 1, 3], 1, 3], expected: 2 },
    { args: [[2, 1], 1, 2], expected: 2 },
  ],
  hiddenTests: [
    { args: [[6, 2, 8, 0, 4, 7, 9, null, null, 3, 5], 3, 5], expected: 4 },
    { args: [[6, 2, 8, 0, 4, 7, 9, null, null, 3, 5], 0, 5], expected: 2 },
    { args: [[6, 2, 8, 0, 4, 7, 9, null, null, 3, 5], 7, 9], expected: 8 },
    { args: [[10, 5, 15, 3, 7], 3, 7], expected: 5 },
  ],
};
