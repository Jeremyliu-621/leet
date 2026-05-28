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
function postorderTraversalRunner(arr) { return postorderTraversal(__fromArray__(arr)); }
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

def postorderTraversalRunner(arr):
    return postorderTraversal(__from_array__(arr))
`.trim();

export const problem: Problem = {
  id: 'binary-tree-postorder-traversal',
  title: 'Binary Tree Postorder Traversal',
  difficulty: 'easy',
  tags: ['tree'],
  description: `Given the \`root\` of a binary tree, return *the postorder traversal of its nodes' values*.

Postorder traversal visits nodes in **left → right → root** order.

Trees are represented as level-order arrays (BFS order), where \`null\` indicates a missing child.

> **Note:** A \`TreeNode\` class and helper utilities are pre-defined. Your function receives a \`TreeNode | null\`.`,
  constraints: [
    'The number of nodes in the tree is in the range [0, 100].',
    '-100 <= Node.val <= 100',
  ],
  examples: [
    {
      input: 'root = [1,null,2,3]',
      output: '[3,2,1]',
      explanation: 'Postorder: left subtree of 2 (3), then 2, then root 1. Result: [3,2,1].',
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
    'Use recursion: recurse on node.left, then node.right, then append node.val.',
    'Iteratively: do a modified preorder (root → right → left) and reverse the result.',
    'Base case: if node is null, return.',
  ],
  functionName: 'postorderTraversalRunner',
  params: ['root'],
  preamble: { javascript: JS_PREAMBLE, python: PY_PREAMBLE },
  starterCode: {
    javascript:
      '// TreeNode class and postorderTraversalRunner wrapper are pre-defined.\n// Implement the function below:\nfunction postorderTraversal(root) {\n  \n}\n',
    typescript: "function postorderTraversalRunner(root: (number | null)[]): number[] {\n  \n}",

    python:
      '# TreeNode class and postorderTraversalRunner wrapper are pre-defined.\n# Implement the function below:\ndef postorderTraversal(root):\n    pass\n',
  },
  visibleTests: [
    { args: [[1, null, 2, 3]], expected: [3, 2, 1] },
    { args: [[]], expected: [] },
    { args: [[1]], expected: [1] },
  ],
  hiddenTests: [
    { args: [[1, 2, 3]], expected: [2, 3, 1] },
    { args: [[1, 2, 3, 4, 5]], expected: [4, 5, 2, 3, 1] },
    { args: [[5, 3, 7, 1, 4]], expected: [1, 4, 3, 7, 5] },
    { args: [[1, null, 2]], expected: [2, 1] },
  ],
};
