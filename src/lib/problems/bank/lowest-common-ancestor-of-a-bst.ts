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
  const lca = lowestCommonAncestor(__fromArray__(arr), p, q);
  return lca.val;
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
    lca = lowestCommonAncestor(__from_array__(arr), int(p), int(q))
    return lca.val
`.trim();

export const problem: Problem = {
  id: 'lowest-common-ancestor-of-a-bst',
  title: 'Lowest Common Ancestor of a Binary Search Tree',
  difficulty: 'easy',
  tags: ['tree', 'binary-search'],
  description: `Given a binary search tree (BST), find the lowest common ancestor (LCA) node of two given nodes in the BST.

According to the [definition of LCA on Wikipedia](https://en.wikipedia.org/wiki/Lowest_common_ancestor): "The lowest common ancestor is defined between two nodes \`p\` and \`q\` as the lowest node in \`T\` that has both \`p\` and \`q\` as descendants (where we allow **a node to be a descendant of itself**)."

The function receives the root of the BST and two **integer values** \`p\` and \`q\`. Return the LCA node.

> **Note:** The tree is represented as a BFS-level array where \`null\` marks a missing child.`,
  constraints: [
    'The number of nodes in the tree is in the range [2, 10^5].',
    '-10^9 <= Node.val <= 10^9',
    'All Node.val are unique.',
    'p != q',
    'p and q will exist in the BST.',
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
      explanation: 'The LCA of nodes 2 and 4 is 2, since a node can be a descendant of itself.',
    },
  ],
  hints: [
    'In a BST, use the BST property to navigate: if both p and q are less than the current node\'s value, the LCA is in the left subtree. If both are greater, it\'s in the right subtree.',
    'If p and q straddle the current node (one on each side), or one of them equals the current node\'s value, then the current node IS the LCA.',
    '`function lowestCommonAncestor(root, p, q) { if (p < root.val && q < root.val) return lowestCommonAncestor(root.left, p, q); if (p > root.val && q > root.val) return lowestCommonAncestor(root.right, p, q); return root; }`',
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
    { args: [[6, 2, 8, 0, 4, 7, 9, null, null, 3, 5], 2, 8], expected: 6 },
    { args: [[6, 2, 8, 0, 4, 7, 9, null, null, 3, 5], 2, 4], expected: 2 },
    { args: [[2, 1], 2, 1], expected: 2 },
  ],
  hiddenTests: [
    { args: [[3, 1, 5], 1, 5], expected: 3 },
    { args: [[3, 1, 5], 1, 3], expected: 3 },
    { args: [[5, 3, 7, 1, 4, 6, 8], 1, 8], expected: 5 },
    { args: [[5, 3, 7, 1, 4, 6, 8], 3, 4], expected: 3 },
    { args: [[5, 3, 7, 1, 4, 6, 8], 6, 8], expected: 7 },
  ],
};
