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
function constructTreeRunner(preorder, inorder) { return __toArray__(buildTree(preorder, inorder)); }
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

def constructTreeRunner(preorder, inorder):
    pre = list(preorder)
    ino = list(inorder)
    return __to_array__(buildTree(pre, ino))
`.trim();

export const problem: Problem = {
  id: 'construct-binary-tree',
  title: 'Construct Binary Tree from Preorder and Inorder Traversal',
  difficulty: 'medium',
  tags: ['tree'],
  description: `Given two integer arrays \`preorder\` and \`inorder\` where \`preorder\` is the preorder traversal of a binary tree and \`inorder\` is the inorder traversal of the same tree, construct and return the binary tree.

The result is returned as a **level-order (BFS) array**, where \`null\` indicates a missing child.

**Key insight:** The first element of \`preorder\` is always the root. Locate that root in \`inorder\` — everything to its left forms the left subtree; everything to its right forms the right subtree. Recurse.

> **Example:** preorder = \`[3,9,20,15,7]\`, inorder = \`[9,3,15,20,7]\` →
> \`3\` is the root. In inorder, \`3\` is at index 1, so left subtree has 1 node (\`9\`) and right subtree has 3 nodes (\`20,15,7\`). Build recursively.`,
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
      input: 'preorder = [1,2,3], inorder = [2,1,3]',
      output: '[1,2,3]',
      explanation: 'Root is 1. Left subtree has node 2, right subtree has node 3.',
    },
    {
      input: 'preorder = [1,2,4,5,3,6,7], inorder = [4,2,5,1,6,3,7]',
      output: '[1,2,3,4,5,6,7]',
      explanation: 'Perfect 7-node binary tree reconstructed from its traversals.',
    },
  ],
  hints: [
    'The first element of preorder is always the root. Find that value in inorder to split the array into left and right subtrees.',
    'Use a hashmap (value → index) on the inorder array so each root lookup is O(1) instead of O(n).',
    'Track the preorder index with a closure variable or pass it as a parameter. After consuming the root, recurse left (leftLen elements from preorder) then right.',
  ],
  functionName: 'constructTreeRunner',
  params: ['preorder', 'inorder'],
  preamble: { javascript: JS_PREAMBLE, python: PY_PREAMBLE },
  starterCode: {
    javascript: `// TreeNode class and constructTreeRunner wrapper are pre-defined.
// Implement the function below:
function buildTree(preorder, inorder) {

}
`,
    typescript: "function constructTreeRunner(preorder: number[], inorder: number[]): number[] {\n\n}",

    python: `# TreeNode class and constructTreeRunner wrapper are pre-defined.
# Implement the function below:
def buildTree(preorder, inorder):
    pass
`,
  },
  visibleTests: [
    { args: [[1, 2, 3], [2, 1, 3]], expected: [1, 2, 3] },
    { args: [[1, 2, 4, 5, 3, 6, 7], [4, 2, 5, 1, 6, 3, 7]], expected: [1, 2, 3, 4, 5, 6, 7] },
    { args: [[1], [1]], expected: [1] },
  ],
  hiddenTests: [
    { args: [[1, 2, 4, 5, 3], [4, 2, 5, 1, 3]], expected: [1, 2, 3, 4, 5] },
    { args: [[4, 2, 1, 3, 6, 5, 7], [1, 2, 3, 4, 5, 6, 7]], expected: [4, 2, 6, 1, 3, 5, 7] },
    { args: [[1, 2, 4, 3], [4, 2, 1, 3]], expected: [1, 2, 3, 4] },
    { args: [[3, 9, 1, 2, 20, 15, 7], [1, 9, 2, 3, 15, 20, 7]], expected: [3, 9, 20, 1, 2, 15, 7] },
  ],
};
