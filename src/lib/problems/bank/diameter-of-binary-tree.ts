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
function diameterOfBinaryTreeRunner(arr) { return diameterOfBinaryTree(__fromArray__(arr)); }
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

def diameterOfBinaryTreeRunner(arr):
    return diameterOfBinaryTree(__from_array__(arr))
`.trim();

export const problem: Problem = {
  id: 'diameter-of-binary-tree',
  title: 'Diameter of Binary Tree',
  difficulty: 'easy',
  tags: ['tree'],
  description: `Given the root of a binary tree, return the length of the **diameter** of the tree.

The **diameter** of a binary tree is the length of the longest path between any two nodes in a tree. This path may or may not pass through the root.

The **length** of a path between two nodes is the number of **edges** between them.

Trees are represented as level-order arrays (BFS order), where \`null\` indicates a missing child.

**Approach:** For each node, the longest path through it equals \`depth(left) + depth(right)\`. Track the maximum across all nodes using a closure variable while computing depths recursively.`,
  constraints: [
    'The number of nodes in the tree is in the range [1, 10000]',
    '-100 <= Node.val <= 100',
  ],
  examples: [
    {
      input: 'root = [1,2,3,4,5]',
      output: '3',
      explanation: 'The path 4→2→1→3 or 5→2→1→3 has length 3.',
    },
    {
      input: 'root = [1,2]',
      output: '1',
      explanation: 'Single edge between nodes 1 and 2.',
    },
  ],
  hints: [
    'Define a helper that returns the depth of a subtree. The diameter at each node is depth(left) + depth(right).',
    'Use a variable (or array) outside the helper to track the maximum diameter seen so far.',
    'Return `1 + max(depth(left), depth(right))` from the helper to propagate depth upward.',
  ],
  functionName: 'diameterOfBinaryTreeRunner',
  params: ['root'],
  preamble: { javascript: JS_PREAMBLE, python: PY_PREAMBLE },
  starterCode: {
    javascript:
      '// TreeNode class and diameterOfBinaryTreeRunner wrapper are pre-defined.\n// Implement the function below:\nfunction diameterOfBinaryTree(root) {\n  \n}\n',
    typescript: "function diameterOfBinaryTreeRunner(root: number[]): number {\n  \n}",

    python:
      '# TreeNode class and diameterOfBinaryTreeRunner wrapper are pre-defined.\n# Implement the function below:\ndef diameterOfBinaryTree(root):\n    pass\n',
  },
  visibleTests: [
    { args: [[1, 2, 3, 4, 5]], expected: 3 },
    { args: [[1, 2]], expected: 1 },
    { args: [[1]], expected: 0 },
  ],
  hiddenTests: [
    { args: [[1, 2, 3]], expected: 2 },
    { args: [[1, 2, null, 3, null, 4]], expected: 3 },
    { args: [[1, 2, 3, 4, 5, 6, 7]], expected: 4 },
    { args: [[4, 2, 6, 1, 3, 5, 7]], expected: 4 },
  ],
};
