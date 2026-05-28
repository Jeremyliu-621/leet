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
function isValidBSTRunner(arr) { return isValidBST(__fromArray__(arr)); }
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
  id: 'validate-bst',
  title: 'Validate Binary Search Tree',
  difficulty: 'medium',
  tags: ['tree'],
  description: `Given the root of a binary tree, determine if it is a valid **binary search tree (BST)**.

A valid BST is defined as follows:
- The left subtree of a node contains only nodes with keys **strictly less than** the node's key.
- The right subtree of a node contains only nodes with keys **strictly greater than** the node's key.
- Both the left and right subtrees must also be binary search trees.

Trees are represented as level-order arrays (BFS order), where \`null\` indicates a missing child.

**Approach:** Pass min and max bounds through recursion. At each node, verify \`min < node.val < max\`, then recurse left with \`max = node.val\` and right with \`min = node.val\`.`,
  constraints: [
    'The number of nodes in the tree is in the range [1, 10000]',
    '-2^31 <= Node.val <= 2^31 - 1',
  ],
  examples: [
    {
      input: 'root = [2,1,3]',
      output: 'true',
      explanation: '1 < 2 < 3 — valid BST.',
    },
    {
      input: 'root = [5,1,4,null,null,3,6]',
      output: 'false',
      explanation: 'Node 4 is in the right subtree of 5 but 4 < 5.',
    },
  ],
  hints: [
    'A node-by-node check (left < root < right) is insufficient — the BST property is global, not local.',
    'Use a helper `validate(node, min, max)` where every node must satisfy `min < node.val < max`.',
    'Start with `validate(root, -Infinity, Infinity)`. Going left: upper bound becomes the parent val. Going right: lower bound becomes the parent val.',
  ],
  functionName: 'isValidBSTRunner',
  params: ['root'],
  preamble: { javascript: JS_PREAMBLE, python: PY_PREAMBLE },
  starterCode: {
    javascript:
      '// TreeNode class and isValidBSTRunner wrapper are pre-defined.\n// Implement the function below:\nfunction isValidBST(root) {\n  \n}\n',
    python:
      '# TreeNode class and isValidBSTRunner wrapper are pre-defined.\n# Implement the function below:\ndef isValidBST(root):\n    pass\n',
  },
  visibleTests: [
    { args: [[2, 1, 3]], expected: true },
    { args: [[5, 1, 4, null, null, 3, 6]], expected: false },
    { args: [[1]], expected: true },
  ],
  hiddenTests: [
    { args: [[0, -1, 2]], expected: true },
    { args: [[5, 4, 7, null, null, 2, 8]], expected: false },
    { args: [[3, 1, 4, null, null, 2, 5]], expected: false },
    { args: [[1, 1]], expected: false },
  ],
};
