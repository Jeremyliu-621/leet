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
function isSymmetricRunner(arr) { return isSymmetric(__fromArray__(arr)); }
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

def isSymmetricRunner(arr):
    return isSymmetric(__from_array__(arr))
`.trim();

export const problem: Problem = {
  id: 'symmetric-tree',
  title: 'Symmetric Tree',
  difficulty: 'easy',
  tags: ['tree'],
  description: `Given the root of a binary tree, check whether it is a **mirror of itself** (i.e., symmetric around its center).

Trees are represented as level-order arrays (BFS order), where \`null\` indicates a missing child.

**Approach:** Compare the tree against its own mirror. Use a helper that checks if two subtrees are mirror images: left.val == right.val, left.left mirrors right.right, and left.right mirrors right.left.`,
  constraints: [
    'The number of nodes in the tree is in the range [1, 1000]',
    '-100 <= Node.val <= 100',
  ],
  examples: [
    {
      input: 'root = [1,2,2,3,4,4,3]',
      output: 'true',
      explanation: 'The tree is symmetric: both sides have [2, 3, 4] mirrored.',
    },
    {
      input: 'root = [1,2,2,null,3,null,3]',
      output: 'false',
      explanation: 'The right subtree has a right child 3 but the left subtree has a right child 3 (not a left child).',
    },
  ],
  hints: [
    'Define a helper `isMirror(left, right)` that returns true when both are null, false when only one is null or values differ, and recursively checks left.left==right.right and left.right==right.left.',
    'Call `isMirror(root.left, root.right)` from `isSymmetric`.',
    'Alternatively, use an iterative approach with a queue, pushing pairs (left, right) and checking mirrored positions.',
  ],
  functionName: 'isSymmetricRunner',
  params: ['root'],
  preamble: { javascript: JS_PREAMBLE, python: PY_PREAMBLE },
  starterCode: {
    javascript:
      '// TreeNode class and isSymmetricRunner wrapper are pre-defined.\n// Implement the function below:\nfunction isSymmetric(root) {\n  \n}\n',
    python:
      '# TreeNode class and isSymmetricRunner wrapper are pre-defined.\n# Implement the function below:\ndef isSymmetric(root):\n    pass\n',
  },
  visibleTests: [
    { args: [[1, 2, 2, 3, 4, 4, 3]], expected: true },
    { args: [[1, 2, 2, null, 3, null, 3]], expected: false },
    { args: [[1]], expected: true },
  ],
  hiddenTests: [
    { args: [[1, 2, 2]], expected: true },
    { args: [[1, 2, 3]], expected: false },
    { args: [[1, 2, 2, null, 3, 3, null]], expected: true },
    { args: [[1, 2, 2, 2, null, 2]], expected: false },
  ],
};
