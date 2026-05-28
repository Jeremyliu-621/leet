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
function lcaRunner(arr, p, q) {
  function lca(node) {
    if (!node) return null;
    if (node.val === p || node.val === q) return node;
    const left = lca(node.left);
    const right = lca(node.right);
    if (left && right) return node;
    return left || right;
  }
  return lca(__fromArray__(arr)).val;
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

def lcaRunner(arr, p, q):
    p, q = int(p), int(q)
    root = __from_array__(arr)
    def lca(node):
        if node is None:
            return None
        if node.val == p or node.val == q:
            return node
        left = lca(node.left)
        right = lca(node.right)
        if left and right:
            return node
        return left or right
    return lca(root).val
`.trim();

export const problem: Problem = {
  id: 'lowest-common-ancestor-of-a-binary-tree',
  title: 'Lowest Common Ancestor of a Binary Tree',
  difficulty: 'medium',
  tags: ['tree'],
  description: `Given a binary tree, find the lowest common ancestor (LCA) of two given nodes in the tree.

According to the [definition of LCA on Wikipedia](https://en.wikipedia.org/wiki/Lowest_common_ancestor): "The lowest common ancestor is defined between two nodes \`p\` and \`q\` as the lowest node in \`T\` that has both \`p\` and \`q\` as descendants (where we allow **a node to be a descendant of itself**)."

The function receives the root and two **integer values** \`p\` and \`q\`. Return the value of the LCA node.

> **Note:** The tree is represented as a BFS-level array where \`null\` marks a missing child.`,
  constraints: [
    'The number of nodes in the tree is in the range [2, 10^5].',
    '-10^9 <= Node.val <= 10^9',
    'All Node.val are unique.',
    'p != q',
    'p and q exist in the tree.',
  ],
  examples: [
    {
      input: 'root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 1',
      output: '3',
      explanation: 'The LCA of nodes 5 and 1 is 3.',
    },
    {
      input: 'root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 4',
      output: '5',
      explanation: 'The LCA of nodes 5 and 4 is 5, since a node can be a descendant of itself.',
    },
  ],
  hints: [
    'Use post-order DFS. Return the node itself if it matches p or q.',
    'After recursing left and right: if both subtrees returned a non-null value, the current node is the LCA.',
    'If only one subtree returned a value, propagate that value upward. The LCA will be the first node where both sides find a match.',
  ],
  functionName: 'lcaRunner',
  params: ['root', 'p', 'q'],
  preamble: { javascript: JS_PREAMBLE, python: PY_PREAMBLE },
  starterCode: {
    javascript: `// TreeNode is pre-defined. p and q are integer values (not TreeNode objects).
// Return the LCA TreeNode.
function lowestCommonAncestor(root, p, q) {

}`,
    python: `# TreeNode is pre-defined. p and q are integer values (not TreeNode objects).
# Return the LCA TreeNode.
def lowestCommonAncestor(root, p, q):
    pass`,
  },
  visibleTests: [
    { args: [[3, 5, 1, 6, 2, 0, 8, null, null, 7, 4], 5, 1], expected: 3 },
    { args: [[3, 5, 1, 6, 2, 0, 8, null, null, 7, 4], 5, 4], expected: 5 },
    { args: [[1, 2], 1, 2], expected: 1 },
  ],
  hiddenTests: [
    { args: [[1, 2, 3], 2, 3], expected: 1 },
    { args: [[1, 2, 3], 1, 2], expected: 1 },
    { args: [[3, 5, 1, 6, 2, 0, 8, null, null, 7, 4], 6, 4], expected: 5 },
    { args: [[3, 5, 1, 6, 2, 0, 8, null, null, 7, 4], 0, 8], expected: 1 },
    { args: [[3, 5, 1], 3, 5], expected: 3 },
  ],
};
