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
function isBalancedRunner(arr) { return isBalanced(__fromArray__(arr)); }
`.trim();

const PY_PREAMBLE = `
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

def __from_array__(arr):
    if arr is None:
        return None
    if hasattr(arr, 'to_py'):
        raw = arr.to_py()
    else:
        try:
            raw = list(arr)
        except TypeError:
            return None
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

def isBalancedRunner(arr):
    return isBalanced(__from_array__(arr))
`.trim();

export const problem: Problem = {
  id: 'balanced-binary-tree',
  title: 'Balanced Binary Tree',
  difficulty: 'easy',
  tags: ['tree'],
  description: `Given the \`root\` of a binary tree, return \`true\` if the tree is **height-balanced**, and \`false\` otherwise.

A binary tree is **height-balanced** if for every node, the heights of its left and right subtrees differ by **at most 1**.

> **Note:** A \`TreeNode\` class is pre-defined. Nodes have \`val\`, \`left\`, and \`right\` fields.`,
  constraints: [
    'The number of nodes in the tree is in the range [0, 5000]',
    '-10⁴ <= Node.val <= 10⁴',
  ],
  examples: [
    {
      input: 'root = [3,9,20,null,null,15,7]',
      output: 'true',
      explanation: 'The left subtree of root has height 1; the right subtree has height 2. Difference is 1 ≤ 1.',
    },
    {
      input: 'root = [1,2,2,3,3,null,null,4,4]',
      output: 'false',
      explanation: 'The left subtree has height 3 while the right subtree has height 1. Difference is 2 > 1.',
    },
    { input: 'root = []', output: 'true' },
  ],
  hints: [
    'A recursive helper that returns the height of a subtree (or -1 if it is unbalanced) avoids redundant traversals.',
    'At each node: compute the heights of the left and right subtrees. If either is -1 (already unbalanced) or their difference exceeds 1, return -1. Otherwise return 1 + max(leftHeight, rightHeight).',
    'The top-level call just checks whether the helper returns ≥ 0.',
  ],
  functionName: 'isBalancedRunner',
  params: ['root'],
  preamble: { javascript: JS_PREAMBLE, python: PY_PREAMBLE },
  starterCode: {
    javascript:
      '// TreeNode class is pre-defined. Implement the function below:\nfunction isBalanced(root) {\n  \n}\n',
    python:
      '# TreeNode class is pre-defined. Implement the function below:\ndef isBalanced(root):\n    pass\n',
  },
  visibleTests: [
    { args: [[3, 9, 20, null, null, 15, 7]], expected: true },
    { args: [[1, 2, 2, 3, 3, null, null, 4, 4]], expected: false },
    { args: [[]], expected: true },
  ],
  hiddenTests: [
    { args: [[1]], expected: true },
    { args: [[1, 2, null, 3]], expected: false },
    { args: [[1, 2, 3, 4, 5, 6]], expected: true },
  ],
};
