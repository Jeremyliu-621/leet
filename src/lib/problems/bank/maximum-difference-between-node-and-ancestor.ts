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
function maxAncestorDiffRunner(arr) { return maxAncestorDiff(__fromArray__(arr)); }
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

def maxAncestorDiffRunner(arr):
    return maxAncestorDiff(__from_array__(arr))
`.trim();

export const problem: Problem = {
  id: 'maximum-difference-between-node-and-ancestor',
  title: 'Maximum Difference Between Node and Ancestor',
  difficulty: 'medium',
  tags: ['tree'],
  description: `Given the root of a binary tree, find the maximum value \`v\` for which there exist **different** nodes \`a\` and \`b\` where \`v = |a.val - b.val|\` and \`a\` is an ancestor of \`b\`.

A node \`a\` is an ancestor of \`b\` if either: any child of \`a\` is equal to \`b\`, or any child of \`a\` is an ancestor of \`b\`.

Trees are given as BFS level-order arrays with \`null\` for missing nodes.`,
  constraints: [
    'The number of nodes in the tree is in the range `[2, 5000]`.',
    '`0 <= Node.val <= 10^5`',
  ],
  examples: [
    {
      input: 'root = [8,3,10,1,6,null,14,null,null,4,7,13]',
      output: '7',
      explanation: 'The maximum difference is |8-1| = 7.',
    },
    {
      input: 'root = [1,null,2,null,0,3]',
      output: '3',
    },
  ],
  hints: [
    'For each path from root to leaf, track the min and max values seen along that path.',
    'At each node, compare |min - node.val| and |max - node.val| and update the answer.',
    'DFS: pass the running min and max down to children.',
  ],
  functionName: 'maxAncestorDiffRunner',
  params: ['root'],
  preamble: { javascript: JS_PREAMBLE, python: PY_PREAMBLE },
  starterCode: {
    javascript:
      '// TreeNode class and maxAncestorDiffRunner wrapper are pre-defined.\n// Implement the function below:\nfunction maxAncestorDiff(root) {\n  \n}\n',
    python:
      '# TreeNode class and maxAncestorDiffRunner wrapper are pre-defined.\n# Implement the function below:\ndef maxAncestorDiff(root):\n    pass\n',
  },
  visibleTests: [
    { args: [[8, 3, 10, 1, 6, null, 14, null, null, 4, 7, 13]], expected: 7 },
    { args: [[1, null, 2, null, 0, 3]], expected: 3 },
    { args: [[1, 0, 2]], expected: 1 },
  ],
  hiddenTests: [
    { args: [[5, 3, 8, 1, 4, 6, 9]], expected: 4 },
    { args: [[2, 1]], expected: 1 },
    { args: [[0, null, 1]], expected: 1 },
    { args: [[10, 5, 15, 3, 7, 12, 20]], expected: 10 },
  ],
};
