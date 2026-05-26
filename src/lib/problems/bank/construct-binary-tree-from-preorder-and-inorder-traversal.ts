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
function buildFromPreorderInorderRunner(preorder, inorder) {
  return __toArray__(buildTree(preorder, inorder));
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

def buildFromPreorderInorderRunner(preorder, inorder):
    pre = list(preorder)
    ino = list(inorder)
    return __to_array__(buildTree(pre, ino))
`.trim();

export const problem: Problem = {
  id: 'construct-binary-tree-from-preorder-and-inorder-traversal',
  title: 'Construct Binary Tree from Preorder and Inorder Traversal',
  difficulty: 'medium',
  tags: ['tree'],
  description: `Given two integer arrays \`preorder\` and \`inorder\` where \`preorder\` is the preorder traversal of a binary tree and \`inorder\` is the inorder traversal of the same tree, construct and return the binary tree.

The result is returned as a **level-order (BFS) array**, where \`null\` indicates a missing child.

**Key insight:** The first element of \`preorder\` is always the root. Locate that root in \`inorder\` — everything to its left forms the left subtree; everything to its right forms the right subtree. Recurse using corresponding windows of both arrays.

> **Example:** preorder = \`[3,9,20,15,7]\`, inorder = \`[9,3,15,20,7]\` →
> \`3\` is the root (first of preorder). In inorder, \`3\` is at index 1, so left subtree: \`[9]\`, right subtree: \`[15,20,7]\`.

> **Note:** \`TreeNode\` class and \`buildFromPreorderInorderRunner\` wrapper are pre-defined. Implement \`buildTree(preorder, inorder)\`.`,
  constraints: [
    '1 <= preorder.length <= 3000',
    'inorder.length == preorder.length',
    '-3000 <= preorder[i], inorder[i] <= 3000',
    'preorder and inorder consist of unique values',
    'Each value of inorder also appears in preorder',
    'preorder is guaranteed to be the preorder traversal of the tree',
    'inorder is guaranteed to be the inorder traversal of the tree',
  ],
  examples: [
    {
      input: 'preorder = [3,9,20,15,7], inorder = [9,3,15,20,7]',
      output: '[3,9,20,null,null,15,7]',
      explanation:
        'Root is 3 (first of preorder). In inorder, 3 is at index 1, so left subtree has node 9, right subtree has root 20 with children 15 and 7.',
    },
    {
      input: 'preorder = [1,2,3], inorder = [2,1,3]',
      output: '[1,2,3]',
      explanation: 'Root is 1. Left subtree: node 2, right subtree: node 3.',
    },
  ],
  hints: [
    'The first element of preorder is always the root. Find that value in inorder — everything to its left forms the left subtree, everything to its right forms the right subtree.',
    'Use a hash map from value → inorder index for O(1) lookup. Recurse with tracked windows into both arrays: leftLen = inIndex - inL.',
    'Skeleton: function build(preL, preR, inL, inR). Root = preorder[preL]. inIndex = map.get(root). leftLen = inIndex - inL. Left child: build(preL+1, preL+leftLen, inL, inIndex-1). Right child: build(preL+leftLen+1, preR, inIndex+1, inR).',
  ],
  functionName: 'buildFromPreorderInorderRunner',
  params: ['preorder', 'inorder'],
  preamble: { javascript: JS_PREAMBLE, python: PY_PREAMBLE },
  starterCode: {
    javascript:
      '// TreeNode class and buildFromPreorderInorderRunner wrapper are pre-defined.\n// Implement the function below:\nfunction buildTree(preorder, inorder) {\n  \n}\n',
    python:
      '# TreeNode class and buildFromPreorderInorderRunner wrapper are pre-defined.\n# Implement the function below:\ndef buildTree(preorder, inorder):\n    pass\n',
  },
  visibleTests: [
    { args: [[3, 9, 20, 15, 7], [9, 3, 15, 20, 7]], expected: [3, 9, 20, null, null, 15, 7] },
    { args: [[-1], [-1]], expected: [-1] },
    { args: [[1, 2, 3], [2, 1, 3]], expected: [1, 2, 3] },
  ],
  hiddenTests: [
    { args: [[1, 2], [2, 1]], expected: [1, 2] },
    { args: [[1, 2], [1, 2]], expected: [1, null, 2] },
    { args: [[1, 2, 4, 5, 3, 6, 7], [4, 2, 5, 1, 6, 3, 7]], expected: [1, 2, 3, 4, 5, 6, 7] },
  ],
};
