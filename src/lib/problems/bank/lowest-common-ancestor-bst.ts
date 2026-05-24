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
function lcaBSTRunner(arr, p, q) {
  const result = lowestCommonAncestor(__fromArray__(arr), new TreeNode(p), new TreeNode(q));
  return result ? result.val : -1;
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

def lcaBSTRunner(arr, p, q):
    result = lowestCommonAncestor(__from_array__(arr), TreeNode(int(p)), TreeNode(int(q)))
    return result.val if result else -1
`.trim();

export const problem: Problem = {
  id: 'lowest-common-ancestor-bst',
  title: 'Lowest Common Ancestor of a BST',
  difficulty: 'medium',
  tags: ['tree'],
  description: `Given a **binary search tree (BST)**, find the **lowest common ancestor (LCA)** of two given nodes \`p\` and \`q\`.

The LCA is defined as the lowest node in the tree that has both \`p\` and \`q\` as descendants (where we allow a node to be a descendant of itself).

The function signature is \`lowestCommonAncestor(root, p, q)\` where \`p\` and \`q\` are TreeNode objects. You can use \`p.val\` and \`q.val\` to access their values.

Trees are represented as level-order arrays (BFS order). Return the **value** of the LCA node.

**Approach:** Use BST properties. If both p and q are less than the current node, go left. If both are greater, go right. Otherwise, the current node is the LCA.`,
  constraints: [
    'The number of nodes in the tree is in the range [2, 100000]',
    '-10^9 <= Node.val <= 10^9',
    'All node values are unique',
    'p != q',
    'p and q will exist in the BST',
  ],
  examples: [
    {
      input: 'root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 8',
      output: '6',
      explanation: 'The LCA of nodes 2 and 8 is 6 (the root).',
    },
    {
      input: 'root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 4',
      output: '2',
      explanation: 'The LCA of nodes 2 and 4 is 2, since a node can be its own ancestor.',
    },
  ],
  hints: [
    'In a BST, if both p.val and q.val are less than the current node, the LCA must be in the left subtree.',
    'If both are greater, the LCA is in the right subtree.',
    'When the current node\'s value is between p.val and q.val (inclusive), it is the LCA.',
  ],
  functionName: 'lcaBSTRunner',
  params: ['root', 'p', 'q'],
  preamble: { javascript: JS_PREAMBLE, python: PY_PREAMBLE },
  starterCode: {
    javascript:
      '// TreeNode class and lcaBSTRunner wrapper are pre-defined.\n// Implement the function below:\nfunction lowestCommonAncestor(root, p, q) {\n  \n}\n',
    python:
      '# TreeNode class and lcaBSTRunner wrapper are pre-defined.\n# Implement the function below:\ndef lowestCommonAncestor(root, p, q):\n    pass\n',
  },
  visibleTests: [
    { args: [[6, 2, 8, 0, 4, 7, 9, null, null, 3, 5], 2, 8], expected: 6 },
    { args: [[6, 2, 8, 0, 4, 7, 9, null, null, 3, 5], 2, 4], expected: 2 },
    { args: [[2, 1, 3], 1, 3], expected: 2 },
  ],
  hiddenTests: [
    { args: [[2, 1, 3], 1, 2], expected: 2 },
    { args: [[5, 3, 7, 1, 4, 6, 8], 1, 4], expected: 3 },
    { args: [[5, 3, 7, 1, 4, 6, 8], 6, 8], expected: 7 },
    { args: [[5, 3, 7, 1, 4, 6, 8], 3, 7], expected: 5 },
  ],
};
