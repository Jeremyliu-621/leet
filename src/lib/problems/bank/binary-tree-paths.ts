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
function binaryTreePathsRunner(arr) { return binaryTreePaths(__fromArray__(arr)); }
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

def binaryTreePathsRunner(arr):
    return binaryTreePaths(__from_array__(arr))
`.trim();

export const problem: Problem = {
  id: 'binary-tree-paths',
  title: 'Binary Tree Paths',
  difficulty: 'easy',
  tags: ['tree'],
  description: `Given the root of a binary tree, return **all root-to-leaf paths** in any order.

A **leaf** is a node with no children.

Trees are represented as level-order arrays (BFS order), where \`null\` indicates a missing child.

**Approach:** Use DFS, tracking the current path as a string. When you reach a leaf (no left or right child), add the path to the result.`,
  constraints: [
    'The number of nodes in the tree is in the range [1, 100]',
    '-100 <= Node.val <= 100',
  ],
  examples: [
    {
      input: 'root = [1,2,3,null,5]',
      output: '["1->2->5","1->3"]',
      explanation: 'Leaf nodes are 5 and 3. Paths: 1→2→5 and 1→3.',
    },
    {
      input: 'root = [1]',
      output: '["1"]',
      explanation: 'The root is also a leaf.',
    },
  ],
  hints: [
    'Use DFS: pass the current path string as a parameter to a helper function.',
    'A leaf is identified by having both `node.left` and `node.right` as null.',
    'Build paths with `->` separator: `path ? path + "->" + node.val : String(node.val)`.',
  ],
  functionName: 'binaryTreePathsRunner',
  params: ['root'],
  preamble: { javascript: JS_PREAMBLE, python: PY_PREAMBLE },
  starterCode: {
    javascript:
      '// TreeNode class and binaryTreePathsRunner wrapper are pre-defined.\n// Implement the function below:\nfunction binaryTreePaths(root) {\n  \n}\n',
    typescript: "function binaryTreePathsRunner(root: (number | null)[]): string[] {\n  \n}",

    python:
      '# TreeNode class and binaryTreePathsRunner wrapper are pre-defined.\n# Implement the function below:\ndef binaryTreePaths(root):\n    pass\n',
  },
  visibleTests: [
    { args: [[1, 2, 3, null, 5]], expected: ['1->2->5', '1->3'] },
    { args: [[1]], expected: ['1'] },
    { args: [[1, 2]], expected: ['1->2'] },
  ],
  hiddenTests: [
    { args: [[1, 2, 3]], expected: ['1->2', '1->3'] },
    { args: [[1, 2, null, 3]], expected: ['1->2->3'] },
    { args: [[1, 2, 3, 4, 5]], expected: ['1->2->4', '1->2->5', '1->3'] },
    { args: [[1, null, 2, null, 3]], expected: ['1->2->3'] },
  ],
};
