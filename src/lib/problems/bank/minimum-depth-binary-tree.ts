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
function minDepthRunner(arr) { return minDepth(__fromArray__(arr)); }
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

def minDepthRunner(arr):
    return minDepth(__from_array__(arr))
`.trim();

export const problem: Problem = {
  id: 'minimum-depth-binary-tree',
  title: 'Minimum Depth of Binary Tree',
  difficulty: 'easy',
  tags: ['tree'],
  description: `Given the \`root\` of a binary tree, return its **minimum depth**.

The minimum depth is the number of nodes along the **shortest path** from the root node down to the **nearest leaf node**. A leaf node has no children.

> **Note:** A \`TreeNode\` class is pre-defined. Nodes have \`val\`, \`left\`, and \`right\` fields.`,
  constraints: [
    'The number of nodes in the tree is in the range [0, 10⁵]',
    '-1000 <= Node.val <= 1000',
  ],
  examples: [
    {
      input: 'root = [3,9,20,null,null,15,7]',
      output: '2',
      explanation: 'The shortest path is root → 9 (depth 2). Node 9 is a leaf.',
    },
    {
      input: 'root = [2,null,3,null,4,null,5,null,6]',
      output: '5',
      explanation: 'The tree is a right-skewed chain; the only leaf is at depth 5.',
    },
  ],
  hints: [
    'Beware the edge case where a node has only one child — it is NOT a leaf, so you cannot simply take `min(left, right)` at that node.',
    'If the root has no left child, the minimum depth comes only from the right subtree (and vice versa).',
    'BFS is a natural fit: return as soon as you dequeue the first leaf node — that level is the minimum depth.',
  ],
  functionName: 'minDepthRunner',
  params: ['root'],
  preamble: { javascript: JS_PREAMBLE, python: PY_PREAMBLE },
  starterCode: {
    javascript:
      '// TreeNode class is pre-defined. Implement the function below:\nfunction minDepth(root) {\n  \n}\n',
    typescript: "function minDepthRunner(root: (number | null)[]): number {\n  \n}",

    python:
      '# TreeNode class is pre-defined. Implement the function below:\ndef minDepth(root):\n    pass\n',
  },
  visibleTests: [
    { args: [[3, 9, 20, null, null, 15, 7]], expected: 2 },
    { args: [[2, null, 3, null, 4, null, 5, null, 6]], expected: 5 },
    { args: [[1]], expected: 1 },
  ],
  hiddenTests: [
    { args: [[]], expected: 0 },
    { args: [[1, 2]], expected: 2 },
    { args: [[1, 2, 3, 4, 5]], expected: 2 },
  ],
};
