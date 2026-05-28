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
function goodNodesRunner(arr) { return goodNodes(__fromArray__(arr)); }
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

def goodNodesRunner(arr):
    return goodNodes(__from_array__(arr))
`.trim();

export const problem: Problem = {
  id: 'count-good-nodes',
  title: 'Count Good Nodes in Binary Tree',
  difficulty: 'medium',
  tags: ['tree'],
  description: `Given a binary tree \`root\`, a node \`X\` in the tree is named **good** if in the path from \`root\` to \`X\` there are no nodes with a value **greater than** \`X.val\`.

Return the number of **good** nodes in the binary tree.

Trees are represented as level-order arrays (BFS order), where \`null\` indicates a missing child.

**Approach:** DFS, passing the maximum value seen so far on the path from root to the current node. A node is good if its value ≥ the running maximum. Count all such nodes.`,
  constraints: [
    'The number of nodes in the binary tree is in the range [1, 100000]',
    'Each node\'s value is between [-10, 10]',
  ],
  examples: [
    {
      input: 'root = [3,1,4,3,null,1,5]',
      output: '4',
      explanation: 'Nodes 3 (root), 4, 5, and the 3 in the left subtree are good (no greater ancestor).',
    },
    {
      input: 'root = [3,3,null,4,2]',
      output: '3',
      explanation: 'Nodes 3 (root), 3 (left), and 4 are good.',
    },
  ],
  hints: [
    'DFS with a `maxSoFar` parameter tracking the largest value on the current root-to-node path.',
    'A node is good if `node.val >= maxSoFar`. Increment a counter for each good node.',
    'The root is always good (maxSoFar starts at -Infinity).',
  ],
  functionName: 'goodNodesRunner',
  params: ['root'],
  preamble: { javascript: JS_PREAMBLE, python: PY_PREAMBLE },
  starterCode: {
    javascript:
      '// TreeNode class and goodNodesRunner wrapper are pre-defined.\n// Implement the function below:\nfunction goodNodes(root) {\n  \n}\n',
    typescript: "function goodNodesRunner(root: (number | null)[]): number {\n  \n}",

    python:
      '# TreeNode class and goodNodesRunner wrapper are pre-defined.\n# Implement the function below:\ndef goodNodes(root):\n    pass\n',
  },
  visibleTests: [
    { args: [[3, 1, 4, 3, null, 1, 5]], expected: 4 },
    { args: [[3, 3, null, 4, 2]], expected: 3 },
    { args: [[1]], expected: 1 },
  ],
  hiddenTests: [
    { args: [[1, 2, 3]], expected: 3 },
    { args: [[2, null, 4, 10, 8, null, null, 4]], expected: 4 },
    { args: [[1, 2, 3, 4, 5, 6, 7]], expected: 7 },
    { args: [[5, 3, 7, 1, 4, 6, 8]], expected: 3 },
  ],
};
