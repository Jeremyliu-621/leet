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
      node.left = new TreeNode(arr[i]); queue.push(node.left);
    }
    i++;
    if (i < arr.length && arr[i] !== null && arr[i] !== undefined) {
      node.right = new TreeNode(arr[i]); queue.push(node.right);
    }
    i++;
  }
  return root;
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
function addOneRowRunner(arr, val, depth) {
  return __toArray__(addOneRow(__fromArray__(arr), val, depth));
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
    a = [int(v) if isinstance(v, (int, float)) else None for v in raw_list]
    if not a or a[0] is None:
        return None
    root = TreeNode(a[0])
    queue = [root]
    i = 1
    while queue and i < len(a):
        node = queue.pop(0)
        if i < len(a) and a[i] is not None:
            node.left = TreeNode(a[i]); queue.append(node.left)
        i += 1
        if i < len(a) and a[i] is not None:
            node.right = TreeNode(a[i]); queue.append(node.right)
        i += 1
    return root

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

def addOneRowRunner(arr, val, depth):
    return __to_array__(addOneRow(__from_array__(arr), int(val), int(depth)))
`.trim();

export const problem: Problem = {
  id: 'add-one-row-to-tree',
  title: 'Add One Row to Tree',
  difficulty: 'medium',
  tags: ['tree'],
  description: `Given the \`root\` of a binary tree, an integer \`val\`, and an integer \`depth\`, add a row of nodes with value \`val\` at depth \`depth\`.

The rules for adding the row:
- The root is at depth **1**.
- For each node at depth \`depth - 1\`, create two new TreeNode(val) nodes as its left and right children.
  - The new left node's **left** subtree will be the original left child.
  - The new right node's **right** subtree will be the original right child.
- **Special case:** If \`depth == 1\`, create a new root with value \`val\` and make the original tree its left child.

Return the modified tree as a **level-order (BFS) array**.

> **Note:** \`TreeNode\` class and \`addOneRowRunner\` wrapper are pre-defined. Implement \`addOneRow(root, val, depth)\`.`,
  constraints: [
    'The number of nodes in the tree is in the range [1, 10^4].',
    'The depth of the tree is in the range [1, 10^4].',
    '-100 <= Node.val <= 100',
    '-10^5 <= val <= 10^5',
    '1 <= depth <= the depth of tree + 1',
  ],
  examples: [
    {
      input: 'root = [4,2,6,3,1,5], val = 1, depth = 2',
      output: '[4,1,1,2,null,null,6,3,1,5]',
      explanation:
        'At depth 1 (the root), two new nodes with value 1 are inserted. The left new node adopts the original left subtree (rooted at 2), and the right new node adopts the original right subtree (rooted at 6).',
    },
    {
      input: 'root = [4,2,null,3,1], val = 1, depth = 3',
      output: '[4,2,null,1,1,3,null,null,1]',
      explanation:
        'Node at depth 2 is 2. Two new nodes (val=1) are inserted: the new left adopts original left (3), the new right adopts original right (1).',
    },
  ],
  hints: [
    'Handle depth == 1 separately: create a new root and make the old root its left child.',
    'For depth > 1, use BFS or DFS to reach depth − 1. At each such node, insert two new nodes.',
    'The new left child gets the original left subtree; the new right child gets the original right subtree. Both new nodes have value val.',
  ],
  functionName: 'addOneRowRunner',
  params: ['root', 'val', 'depth'],
  preamble: { javascript: JS_PREAMBLE, python: PY_PREAMBLE },
  starterCode: {
    javascript:
      '// TreeNode class and addOneRowRunner wrapper are pre-defined.\n// Implement the function below:\nfunction addOneRow(root, val, depth) {\n  \n}\n',
    python:
      '# TreeNode class and addOneRowRunner wrapper are pre-defined.\n# Implement the function below:\ndef addOneRow(root, val, depth):\n    pass\n',
  },
  visibleTests: [
    { args: [[4, 2, 6, 3, 1, 5], 1, 2], expected: [4, 1, 1, 2, null, null, 6, 3, 1, 5] },
    { args: [[4, 2, null, 3, 1], 1, 3], expected: [4, 2, null, 1, 1, 3, null, null, 1] },
    { args: [[1], 5, 1], expected: [5, 1] },
  ],
  hiddenTests: [
    { args: [[1], 5, 2], expected: [1, 5, 5] },
    { args: [[1, 2, 3], 5, 2], expected: [1, 5, 5, 2, null, null, 3] },
    { args: [[1, 2, 3, 4, 5, 6, 7], 0, 3], expected: [1, 2, 3, 0, 0, 0, 0, 4, null, null, 5, 6, null, null, 7] },
  ],
};
