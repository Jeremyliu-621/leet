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
      node.left = new TreeNode(arr[i]); queue.push(node.left);
    }
    i++;
    if (i < arr.length && arr[i] !== null && arr[i] !== undefined) {
      node.right = new TreeNode(arr[i]); queue.push(node.right);
    }
    i++;
  }
  return root;
}
function longestUnivaluePathRunner(arr) {
  return longestUnivaluePath(__fromArray__(arr));
}
`.trim();

const PY_PREAMBLE = `
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

def __from_array__(raw):
    raw_list = raw.to_py() if hasattr(raw, 'to_py') else list(raw)
    a = [int(v) if isinstance(v, (int, float)) else None for v in raw_list]
    if not a or a[0] is None:
        return None
    root = TreeNode(a[0])
    queue = [root]
    i = 1
    while queue and i < len(a):
        node = queue.pop(0)
        if i < len(a) and a[i] is not None:
            node.left = TreeNode(a[i]); queue.append(node.left)
        i += 1
        if i < len(a) and a[i] is not None:
            node.right = TreeNode(a[i]); queue.append(node.right)
        i += 1
    return root

def longestUnivaluePathRunner(arr):
    return longestUnivaluePath(__from_array__(arr))
`.trim();

export const problem: Problem = {
  id: 'longest-univalue-path',
  title: 'Longest Univalue Path',
  difficulty: 'medium',
  tags: ['tree'],
  description: `Given the \`root\` of a binary tree, return the length of the longest path where **every node in the path has the same value**. The path does not need to pass through the root.

The **length** of the path is the number of **edges** (not nodes) between two nodes.

Trees are represented as level-order arrays, where \`null\` indicates a missing child.

> **Note:** \`TreeNode\` class and \`longestUnivaluePathRunner\` wrapper are pre-defined. Implement \`longestUnivaluePath(root)\`.`,
  constraints: [
    'The number of nodes in the tree is in the range [0, 10^4].',
    '-1000 <= Node.val <= 1000',
    'The depth of the tree will not exceed 1000.',
  ],
  examples: [
    {
      input: 'root = [5,4,5,1,1,null,5]',
      output: '2',
      explanation:
        'The path 5 → 5 → 5 (root to right child to its right child) has length 2.',
    },
    {
      input: 'root = [1,4,5,4,4,null,5]',
      output: '2',
      explanation:
        'The path 4 → 4 → 4 (left child and its two children) has length 2.',
    },
  ],
  hints: [
    'Use DFS. At each node, try to extend the path downward through children with the same value.',
    'Define a helper that returns the longest single-direction univalue path starting at the current node going downward.',
    'The answer at each node is leftExtension + rightExtension (when both sides match the node value). Track the global max across all nodes.',
  ],
  functionName: 'longestUnivaluePathRunner',
  params: ['root'],
  preamble: { javascript: JS_PREAMBLE, python: PY_PREAMBLE },
  starterCode: {
    javascript:
      '// TreeNode class and longestUnivaluePathRunner wrapper are pre-defined.\n// Implement the function below:\nfunction longestUnivaluePath(root) {\n  \n}\n',
    typescript: "function longestUnivaluePathRunner(root: (number | null)[]): number {\n  \n}",

    python:
      '# TreeNode class and longestUnivaluePathRunner wrapper are pre-defined.\n# Implement the function below:\ndef longestUnivaluePath(root):\n    pass\n',
  },
  visibleTests: [
    { args: [[5, 4, 5, 1, 1, null, 5]], expected: 2 },
    { args: [[1, 4, 5, 4, 4, null, 5]], expected: 2 },
    { args: [[1, 1, 1]], expected: 2 },
  ],
  hiddenTests: [
    { args: [[1]], expected: 0 },
    { args: [[1, 1, 1, 1, 1, 1, 1]], expected: 4 },
    { args: [[1, 2]], expected: 0 },
    { args: [[1, 1, null, 1, 1]], expected: 2 },
  ],
};
