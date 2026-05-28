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
function maxDepthRunner(arr) { return maxDepth(__fromArray__(arr)); }
`.trim();

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

def maxDepthRunner(arr):
    return maxDepth(__from_array__(arr))
`.trim();

export const problem: Problem = {
  id: 'max-depth-binary-tree',
  title: 'Maximum Depth of Binary Tree',
  difficulty: 'easy',
  tags: ['tree'],
  description: `Given the root of a binary tree, return its **maximum depth**.

A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

Trees are represented as level-order arrays (BFS order), where \`null\` indicates a missing child.

**Approach:** Use recursion: depth = 1 + max(depth(left), depth(right)). Base case: null node returns 0.`,
  constraints: [
    'The number of nodes in the tree is in the range [0, 10000]',
    '-100 <= Node.val <= 100',
  ],
  examples: [
    {
      input: 'root = [3,9,20,null,null,15,7]',
      output: '3',
      explanation: 'The longest path is 3→20→7 or 3→20→15, length 3.',
    },
    {
      input: 'root = [1,null,2]',
      output: '2',
      explanation: 'Only right child exists: path is 1→2.',
    },
  ],
  hints: [
    'Think recursively: the depth of a tree is 1 + the depth of its deeper subtree.',
    'Base case: an empty tree (null) has depth 0.',
    '`function maxDepth(root) { if (!root) return 0; return 1 + Math.max(maxDepth(root.left), maxDepth(root.right)); }`',
  ],
  functionName: 'maxDepthRunner',
  params: ['root'],
  preamble: { javascript: JS_PREAMBLE, python: PY_PREAMBLE },
  starterCode: {
    javascript:
      '// TreeNode class and maxDepthRunner wrapper are pre-defined.\n// Implement the function below:\nfunction maxDepth(root) {\n  \n}\n',
    python:
      '# TreeNode class and maxDepthRunner wrapper are pre-defined.\n# Implement the function below:\ndef maxDepth(root):\n    pass\n',
  },
  visibleTests: [
    { args: [[3, 9, 20, null, null, 15, 7]], expected: 3 },
    { args: [[1, null, 2]], expected: 2 },
    { args: [[]], expected: 0 },
  ],
  hiddenTests: [
    { args: [[1]], expected: 1 },
    { args: [[1, 2, 3, 4, 5]], expected: 3 },
    { args: [[1, 2, null, 3, null, 4]], expected: 4 },
    { args: [[1, 2, 3, 4, null, null, 5]], expected: 3 },
  ],
};
