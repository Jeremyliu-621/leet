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
function __findNode__(root, val) {
  if (!root) return null;
  if (root.val === val) return root;
  return __findNode__(root.left, val) || __findNode__(root.right, val);
}
function lcaBinaryTreeRunner(arr, p, q) {
  const root = __fromArray__(arr);
  const pNode = __findNode__(root, p);
  const qNode = __findNode__(root, q);
  const result = lowestCommonAncestor(root, pNode, qNode);
  return result ? result.val : null;
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

def __find_node__(root, val):
    if root is None:
        return None
    if root.val == val:
        return root
    return __find_node__(root.left, val) or __find_node__(root.right, val)

def lcaBinaryTreeRunner(arr, p, q):
    root = __from_array__(arr)
    p_node = __find_node__(root, int(p))
    q_node = __find_node__(root, int(q))
    result = lowestCommonAncestor(root, p_node, q_node)
    return result.val if result else None
`.trim();

export const problem: Problem = {
  id: 'lowest-common-ancestor-binary-tree',
  title: 'Lowest Common Ancestor of a Binary Tree',
  difficulty: 'medium',
  tags: ['tree'],
  description: `Given a binary tree, find the **lowest common ancestor (LCA)** of two given nodes \`p\` and \`q\`.

The LCA is defined as the lowest node in the tree that has both \`p\` and \`q\` as descendants (a node can be a descendant of itself).

The runner calls your function with \`root\` (a TreeNode), \`p\` (a TreeNode), and \`q\` (a TreeNode), and returns the LCA node's value.`,
  constraints: [
    'The number of nodes in the tree is in the range [2, 10^5]',
    '-10^9 <= Node.val <= 10^9',
    'All Node.val are unique',
    'p != q',
    'p and q will exist in the tree',
  ],
  examples: [
    {
      input: 'root = [3,5,1,6,2,0,8], p = 5, q = 1',
      output: '3',
      explanation: 'The LCA of nodes 5 and 1 is 3 (the root).',
    },
    {
      input: 'root = [3,5,1,6,2,0,8], p = 5, q = 6',
      output: '5',
      explanation: 'Node 5 is an ancestor of 6, so the LCA is 5 itself.',
    },
    {
      input: 'root = [1,2,3], p = 2, q = 3',
      output: '1',
    },
  ],
  hints: [
    'Recurse: if the current node is null, return null. If it equals p or q, return it.',
    'Recurse left and right. If both sides return non-null, the current node is the LCA.',
    'If only one side returns non-null, that side contains both p and q — bubble it up.',
  ],
  functionName: 'lcaBinaryTreeRunner',
  params: ['arr', 'p', 'q'],
  preamble: { javascript: JS_PREAMBLE, python: PY_PREAMBLE },
  starterCode: {
    javascript: `// TreeNode class and lcaBinaryTreeRunner wrapper are pre-defined.
// p and q are TreeNode objects (not values).
function lowestCommonAncestor(root, p, q) {

}
`,
    python: `# TreeNode class and lcaBinaryTreeRunner wrapper are pre-defined.
# p and q are TreeNode objects (not values).
def lowestCommonAncestor(root, p, q):
    pass
`,
  },
  visibleTests: [
    { args: [[3, 5, 1, 6, 2, 0, 8], 5, 1], expected: 3 },
    { args: [[3, 5, 1, 6, 2, 0, 8], 5, 6], expected: 5 },
    { args: [[1, 2, 3], 2, 3], expected: 1 },
  ],
  hiddenTests: [
    { args: [[3, 5, 1, 6, 2, 0, 8], 6, 8], expected: 3 },
    { args: [[1, 2, 3, 4, 5, 6, 7], 4, 5], expected: 2 },
    { args: [[1, 2, 3, 4, 5, 6, 7], 4, 7], expected: 1 },
    { args: [[1, 2, 3, 4, 5, 6, 7], 2, 5], expected: 2 },
  ],
};
