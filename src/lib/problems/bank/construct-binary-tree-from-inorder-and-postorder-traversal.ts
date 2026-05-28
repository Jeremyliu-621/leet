import type { Problem } from '../types';

const JS_PREAMBLE = `
class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val; this.left = left; this.right = right;
  }
}
function __toArray__(root) {
  if (!root) return [];
  const result = [];
  const queue = [root];
  while (queue.length > 0) {
    const node = queue.shift();
    if (node === null) { result.push(null); continue; }
    result.push(node.val);
    queue.push(node.left ?? null);
    queue.push(node.right ?? null);
  }
  while (result.length > 0 && result[result.length - 1] === null) result.pop();
  return result;
}
function buildFromInorderPostorderRunner(inorder, postorder) {
  return __toArray__(buildTree(inorder, postorder));
}
`.trim();

const PY_PREAMBLE = `
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

def __to_array__(root):
    if not root:
        return []
    result = []
    queue = [root]
    while queue:
        node = queue.pop(0)
        if node is None:
            result.append(None)
            continue
        result.append(node.val)
        queue.append(node.left)
        queue.append(node.right)
    while result and result[-1] is None:
        result.pop()
    return result

def buildFromInorderPostorderRunner(inorder, postorder):
    ino = list(inorder)
    post = list(postorder)
    return __to_array__(buildTree(ino, post))
`.trim();

export const problem: Problem = {
  id: 'construct-binary-tree-from-inorder-and-postorder-traversal',
  title: 'Construct Binary Tree from Inorder and Postorder Traversal',
  difficulty: 'medium',
  tags: ['tree'],
  description: `Given two integer arrays \`inorder\` and \`postorder\` where \`inorder\` is the inorder traversal of a binary tree and \`postorder\` is the postorder traversal of the same tree, construct and return the binary tree.

The result is returned as a **level-order (BFS) array**, where \`null\` indicates a missing child.

**Key insight:** The last element of \`postorder\` is always the root. Locate that root in \`inorder\` — everything to its left forms the left subtree; everything to its right forms the right subtree. Recurse using corresponding windows of \`postorder\`.

> **Example:** inorder = \`[9,3,15,20,7]\`, postorder = \`[9,15,7,20,3]\` →
> \`3\` is root (last of postorder). In inorder, \`3\` is at index 1, so left subtree: \`[9]\`, right subtree: \`[15,20,7]\`.

> **Note:** \`TreeNode\` class and \`buildFromInorderPostorderRunner\` wrapper are pre-defined. Implement \`buildTree(inorder, postorder)\`.`,
  constraints: [
    '1 <= inorder.length <= 3000',
    'postorder.length == inorder.length',
    '-3000 <= inorder[i], postorder[i] <= 3000',
    'inorder and postorder consist of unique values',
    'Each value of inorder also appears in postorder',
    'inorder is guaranteed to be the inorder traversal of the tree',
    'postorder is guaranteed to be the postorder traversal of the tree',
  ],
  examples: [
    {
      input: 'inorder = [9,3,15,20,7], postorder = [9,15,7,20,3]',
      output: '[3,9,20,null,null,15,7]',
      explanation: 'Root is 3 (last of postorder). Left subtree has node 9, right subtree has root 20 with children 15 and 7.',
    },
    {
      input: 'inorder = [2,1,3], postorder = [2,3,1]',
      output: '[1,2,3]',
      explanation: 'Root is 1. Left subtree: node 2, right subtree: node 3.',
    },
  ],
  hints: [
    'The last element of postorder is always the root. Find that value in inorder to determine left/right subtree sizes.',
    'Use a hashmap (value → index) on the inorder array so each root lookup is O(1).',
    'The postorder array for a left subtree of size L occupies the range [poL, poL + L - 1]; the right subtree is [poL + L, poR - 1].',
  ],
  functionName: 'buildFromInorderPostorderRunner',
  params: ['inorder', 'postorder'],
  preamble: { javascript: JS_PREAMBLE, python: PY_PREAMBLE },
  starterCode: {
    javascript:
      '// TreeNode class and buildFromInorderPostorderRunner wrapper are pre-defined.\n// Implement the function below:\nfunction buildTree(inorder, postorder) {\n  \n}\n',
    typescript: "function buildFromInorderPostorderRunner(inorder: number[], postorder: number[]): (number | null)[] {\n  \n}",

    python:
      '# TreeNode class and buildFromInorderPostorderRunner wrapper are pre-defined.\n# Implement the function below:\ndef buildTree(inorder, postorder):\n    pass\n',
  },
  visibleTests: [
    { args: [[9, 3, 15, 20, 7], [9, 15, 7, 20, 3]], expected: [3, 9, 20, null, null, 15, 7] },
    { args: [[2, 1, 3], [2, 3, 1]], expected: [1, 2, 3] },
    { args: [[1], [1]], expected: [1] },
  ],
  hiddenTests: [
    {
      args: [[4, 2, 5, 1, 6, 3, 7], [4, 5, 2, 6, 7, 3, 1]],
      expected: [1, 2, 3, 4, 5, 6, 7],
    },
    { args: [[1, 2], [1, 2]], expected: [2, 1] },
    {
      args: [[4, 2, 5, 1, 3], [4, 5, 2, 3, 1]],
      expected: [1, 2, 3, 4, 5],
    },
  ],
};
