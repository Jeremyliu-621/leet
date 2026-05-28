import type { Problem } from '../types';

const JS_PREAMBLE = `
class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val; this.left = left; this.right = right;
  }
}
function __fromArray__(arr) {
  if (!arr || arr.length === 0) return null;
  const root = new TreeNode(arr[0]);
  const queue = [root];
  let i = 1;
  while (queue.length > 0 && i < arr.length) {
    const node = queue.shift();
    if (arr[i] !== null && arr[i] !== undefined) {
      node.left = new TreeNode(arr[i]);
      queue.push(node.left);
    }
    i++;
    if (i < arr.length && arr[i] !== null && arr[i] !== undefined) {
      node.right = new TreeNode(arr[i]);
      queue.push(node.right);
    }
    i++;
  }
  return root;
}
function preorderTraversalRunner(arr) { return preorderTraversal(__fromArray__(arr)); }
`.trim();

const PY_PREAMBLE = `
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

def __from_array__(raw):
    raw_list = raw.to_py() if hasattr(raw, 'to_py') else list(raw)
    arr = [int(v) if isinstance(v, (int, float)) else None for v in raw_list]
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

def preorderTraversalRunner(arr):
    return preorderTraversal(__from_array__(arr))
`.trim();

export const problem: Problem = {
  id: 'binary-tree-preorder-traversal',
  title: 'Binary Tree Preorder Traversal',
  difficulty: 'easy',
  tags: ['tree'],
  description: `Given the \`root\` of a binary tree, return *the preorder traversal of its nodes' values*.

Preorder traversal visits nodes in **root → left → right** order.

Trees are represented as level-order arrays (BFS order), where \`null\` indicates a missing child.

> **Note:** A \`TreeNode\` class and helper utilities are pre-defined. Your function receives a \`TreeNode | null\`.`,
  constraints: [
    'The number of nodes in the tree is in the range [0, 100].',
    '-100 <= Node.val <= 100',
  ],
  examples: [
    {
      input: 'root = [1,null,2,3]',
      output: '[1,2,3]',
      explanation: 'Preorder: visit 1, then right subtree (2 then 3). Result: [1,2,3].',
    },
    {
      input: 'root = []',
      output: '[]',
    },
    {
      input: 'root = [1]',
      output: '[1]',
    },
  ],
  hints: [
    'Use recursion: append node.val, then recurse on node.left, then node.right.',
    'Iteratively: push root, then pop and visit; push right then left so left is processed first.',
    'Base case: if node is null, return.',
  ],
  functionName: 'preorderTraversalRunner',
  params: ['root'],
  preamble: { javascript: JS_PREAMBLE, python: PY_PREAMBLE },
  starterCode: {
    javascript:
      '// TreeNode class and preorderTraversalRunner wrapper are pre-defined.\n// Implement the function below:\nfunction preorderTraversal(root) {\n  \n}\n',
    python:
      '# TreeNode class and preorderTraversalRunner wrapper are pre-defined.\n# Implement the function below:\ndef preorderTraversal(root):\n    pass\n',
  },
  visibleTests: [
    { args: [[1, null, 2, 3]], expected: [1, 2, 3] },
    { args: [[]], expected: [] },
    { args: [[1]], expected: [1] },
  ],
  hiddenTests: [
    { args: [[1, 2, 3]], expected: [1, 2, 3] },
    { args: [[1, 2, 3, 4, 5]], expected: [1, 2, 4, 5, 3] },
    { args: [[5, 3, 7, 1, 4]], expected: [5, 3, 1, 4, 7] },
    { args: [[1, null, 2]], expected: [1, 2] },
  ],
};
