import type { Problem } from '../types';

const JS_PREAMBLE = `
class TreeNode {
  constructor(val = 0, left = null, right = null) {
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
    if (arr[i] !== null && arr[i] !== undefined) { node.left = new TreeNode(arr[i]); queue.push(node.left); }
    i++;
    if (i < arr.length && arr[i] !== null && arr[i] !== undefined) { node.right = new TreeNode(arr[i]); queue.push(node.right); }
    i++;
  }
  return root;
}
function isValidBSTRunner(arr) {
  return isValidBST(__fromArray__(arr));
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

def isValidBSTRunner(arr):
    return isValidBST(__from_array__(arr))
`.trim();

export const problem: Problem = {
  id: 'validate-binary-search-tree',
  title: 'Validate Binary Search Tree',
  difficulty: 'medium',
  tags: ['tree', 'binary-search'],
  description: `Given the \`root\` of a binary tree, determine if it is a valid **binary search tree** (BST).

A **valid BST** is defined as follows:

- The left subtree of a node contains only nodes with keys **strictly less than** the node's key.
- The right subtree of a node contains only nodes with keys **strictly greater than** the node's key.
- Both the left and right subtrees must also be binary search trees.

> **Note:** The tree is represented as a BFS-level array where \`null\` marks a missing child.`,
  constraints: [
    'The number of nodes in the tree is in the range [1, 10^4].',
    '-2^31 <= Node.val <= 2^31 - 1',
  ],
  examples: [
    {
      input: 'root = [2,1,3]',
      output: 'true',
      explanation: '1 < 2 < 3, all BST conditions satisfied.',
    },
    {
      input: 'root = [5,1,4,null,null,3,6]',
      output: 'false',
      explanation: 'The root has value 5 but its right child has value 4, which violates the BST property.',
    },
  ],
  hints: [
    'Use DFS, passing along the valid range [min, max] for each node. Initially the range is (-∞, +∞).',
    'At each node, check that `min < node.val < max`. For the left child, update the max to `node.val`. For the right child, update the min to `node.val`.',
    'Return false immediately if any node violates its range constraint.',
  ],
  functionName: 'isValidBSTRunner',
  params: ['root'],
  preamble: { javascript: JS_PREAMBLE, python: PY_PREAMBLE },
  starterCode: {
    javascript: `// TreeNode is pre-defined. Implement the function below:
function isValidBST(root) {

}`,
    typescript: "function isValidBSTRunner(root: number[]): boolean {\n\n}",

    python: `# TreeNode is pre-defined. Implement the function below:
def isValidBST(root):
    pass`,
  },
  visibleTests: [
    { args: [[2, 1, 3]], expected: true },
    { args: [[5, 1, 4, null, null, 3, 6]], expected: false },
    { args: [[1]], expected: true },
  ],
  hiddenTests: [
    { args: [[2, 2, 2]], expected: false },
    { args: [[5, 3, 7, 1, 4, 6, 8]], expected: true },
    { args: [[3, 1, 5, 0, 2, 4, 6]], expected: true },
    { args: [[10, 5, 15, null, null, 6, 20]], expected: false },
    { args: [[5, 4, 6, null, null, 3, 7]], expected: false },
    { args: [[1, null, 2]], expected: true },
  ],
};
