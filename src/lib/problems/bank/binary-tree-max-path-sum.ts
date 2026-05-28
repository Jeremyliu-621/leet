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
function maxPathSumRunner(arr) { return maxPathSum(__fromArray__(arr)); }
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

def maxPathSumRunner(arr):
    return maxPathSum(__from_array__(arr))
`.trim();

export const problem: Problem = {
  id: 'binary-tree-max-path-sum',
  title: 'Binary Tree Maximum Path Sum',
  difficulty: 'hard',
  tags: ['tree'],
  description: `A **path** in a binary tree is a sequence of nodes where each pair of adjacent nodes in the sequence has an edge connecting them. A node can only appear in the sequence **at most once**. Note that the path does not need to pass through the root.

Given the \`root\` of a binary tree, return the maximum **path sum** of any non-empty path.

> **Note:** A \`TreeNode\` class is pre-defined. Nodes have \`val\`, \`left\`, and \`right\` fields.`,
  constraints: [
    'The number of nodes in the tree is in the range [1, 3 * 10^4]',
    '-1000 <= Node.val <= 1000',
  ],
  examples: [
    {
      input: 'root = [1,2,3]',
      output: '6',
      explanation: 'The optimal path is 2 → 1 → 3 with a path sum of 2 + 1 + 3 = 6.',
    },
    {
      input: 'root = [-10,9,20,null,null,15,7]',
      output: '42',
      explanation: 'The optimal path is 15 → 20 → 7 with a path sum of 15 + 20 + 7 = 42.',
    },
  ],
  hints: [
    'At each node, the maximum path through that node is: `node.val + max(0, gainLeft) + max(0, gainRight)`, where `gainLeft` and `gainRight` are the best one-sided contributions from each subtree.',
    'The "gain" a node contributes to its parent is `node.val + max(0, gainLeft, gainRight)` — you can only extend a path in one direction up to the parent.',
    'Use a post-order DFS with a `maxSum` variable. For each node compute the gain (clamp negative to 0), update `maxSum` with the through-node sum, and return the gain.',
  ],
  functionName: 'maxPathSumRunner',
  params: ['root'],
  preamble: { javascript: JS_PREAMBLE, python: PY_PREAMBLE },
  starterCode: {
    javascript:
      '// TreeNode class is pre-defined. Implement the function below:\nfunction maxPathSum(root) {\n  \n}\n',
    typescript: "function maxPathSumRunner(root: number[]): number {\n  \n}",

    python:
      '# TreeNode class is pre-defined. Implement the function below:\ndef maxPathSum(root):\n    pass\n',
  },
  visibleTests: [
    { args: [[1, 2, 3]], expected: 6 },
    { args: [[-10, 9, 20, null, null, 15, 7]], expected: 42 },
    { args: [[-3]], expected: -3 },
    { args: [[2, -1, -2]], expected: 2 },
  ],
  hiddenTests: [
    { args: [[1]], expected: 1 },
    { args: [[1, 2]], expected: 3 },
    { args: [[1, -2, 3]], expected: 4 },
    { args: [[-1, -2, -3]], expected: -1 },
  ],
};
