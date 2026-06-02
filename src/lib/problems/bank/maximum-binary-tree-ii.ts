import type { Problem } from '../types';

const JS_PREAMBLE = `
class TreeNode { constructor(val, left=null, right=null) { this.val=val; this.left=left; this.right=right; } }
function __fromArray__(arr) {
  const a = Array.from(arr);
  if (!a.length || a[0] == null) return null;
  const root = new TreeNode(a[0]); const q = [root]; let i = 1;
  while (q.length && i < a.length) {
    const node = q.shift();
    if (i < a.length && a[i] != null) { node.left = new TreeNode(a[i]); q.push(node.left); } i++;
    if (i < a.length && a[i] != null) { node.right = new TreeNode(a[i]); q.push(node.right); } i++;
  }
  return root;
}
function __toArray__(root) {
  if (!root) return [];
  const res = []; const q = [root];
  while (q.length) {
    const n = q.shift();
    if (!n) { res.push(null); continue; }
    res.push(n.val); q.push(n.left); q.push(n.right);
  }
  while (res.length && res[res.length-1] == null) res.pop();
  return res;
}
function insertIntoMaxTreeRunner(arr, val) {
  return __toArray__(insertIntoMaxTree(__fromArray__(arr), val));
}`.trim();

const PY_PREAMBLE = `
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val; self.left = left; self.right = right

def __from_array__(raw):
    a = raw.to_py() if hasattr(raw, 'to_py') else list(raw)
    a = [int(x) if isinstance(x, (int, float)) else None for x in a]
    if not a or a[0] is None: return None
    root = TreeNode(a[0]); queue = [root]; i = 1
    while queue and i < len(a):
        node = queue.pop(0)
        if i < len(a) and a[i] is not None: node.left = TreeNode(a[i]); queue.append(node.left)
        i += 1
        if i < len(a) and a[i] is not None: node.right = TreeNode(a[i]); queue.append(node.right)
        i += 1
    return root

def __to_array__(root):
    if not root: return []
    result = []; queue = [root]
    while queue:
        node = queue.pop(0)
        if node is None: result.append(None); continue
        result.append(node.val)
        if node.left is not None or node.right is not None:
            queue.append(node.left); queue.append(node.right)
    while result and result[-1] is None: result.pop()
    return result

def insertIntoMaxTreeRunner(arr, val):
    return __to_array__(insertIntoMaxTree(__from_array__(arr), int(val)))
`.trim();

export const problem: Problem = {
  id: 'maximum-binary-tree-ii',
  title: 'Maximum Binary Tree II',
  difficulty: 'medium',
  tags: ['tree'],
  description: `A **maximum tree** is a tree where every node has a value **greater** than any other value in its subtree.

You are given the \`root\` of a maximum binary tree and an integer \`val\`.

Just as in the [previous problem](maximum-binary-tree), the given tree was constructed from a list \`a\` (\`root = Construct(a)\`) recursively with the following procedure:

- \`Construct(a)\`: Select the maximum value as the root and split the array at that position. Left subtree = \`Construct(left part)\`, right subtree = \`Construct(right part)\`.

The list \`a\` was constructed by appending \`val\` to the original array. Return the root of \`Construct(a)\`.

**Note:** The given tree and \`val\` determine the result **uniquely**.`,
  constraints: [
    'The number of nodes in the tree is in the range [1, 100].',
    '1 <= Node.val <= 200',
    'All the values of the tree are unique.',
    '1 <= val <= 200',
    'val is not in the tree.',
  ],
  examples: [
    {
      input: 'root = [4,1,3,null,null,2], val = 5',
      output: '[5,4,null,1,3,null,null,2]',
      explanation: 'val=5 > all nodes, so new root is 5 with original tree as left child.',
    },
    {
      input: 'root = [5,2,4,null,1], val = 3',
      output: '[5,2,4,null,1,null,3]',
      explanation: 'val=3 goes into the rightmost path: 3 < 4, becomes 4\'s right child.',
    },
    {
      input: 'root = [5,2,3,null,1], val = 4',
      output: '[5,2,4,null,1,3]',
      explanation: 'val=4 > 3, so 4 replaces 3 as 5\'s right child, with 3 becoming 4\'s left child.',
    },
  ],
  hints: [
    'Level 1: The new value is always appended to the end of array a. Since max-tree construction is left-to-right, val is somewhere on the rightmost path.',
    'Level 2: Walk down the rightmost path (always follow right children). If val > current node, val becomes a new node whose left child is the current node.',
    'Level 3: If you reach a null right child without finding a node where val > node.val, create a new node and attach it as the rightmost null child.',
  ],
  functionName: 'insertIntoMaxTreeRunner',
  params: ['root', 'val'],
  preamble: { javascript: JS_PREAMBLE, typescript: JS_PREAMBLE, python: PY_PREAMBLE },
  starterCode: {
    javascript: `// TreeNode class and insertIntoMaxTreeRunner wrapper are pre-defined.
// Implement the function below:
function insertIntoMaxTree(root, val) {
  if (!root || val > root.val) {
    const node = new TreeNode(val);
    node.left = root;
    return node;
  }
  root.right = insertIntoMaxTree(root.right, val);
  return root;
}`,
    typescript: `// TreeNode class and insertIntoMaxTreeRunner wrapper are pre-defined.
// Implement the function below:
function insertIntoMaxTree(root: TreeNode | null, val: number): TreeNode {
  if (!root || val > root.val) {
    const node = new TreeNode(val);
    node.left = root;
    return node;
  }
  root.right = insertIntoMaxTree(root.right, val);
  return root;
}`,
    python: `# TreeNode class and insertIntoMaxTreeRunner wrapper are pre-defined.
# Implement the function below:
def insertIntoMaxTree(root, val):
    if root is None or val > root.val:
        node = TreeNode(val)
        node.left = root
        return node
    root.right = insertIntoMaxTree(root.right, val)
    return root`,
  },
  visibleTests: [
    {
      args: [[4, 1, 3, null, null, 2], 5],
      expected: [5, 4, null, 1, 3, null, null, 2],
    },
    {
      args: [[5, 2, 4, null, 1], 3],
      expected: [5, 2, 4, null, 1, null, 3],
    },
    {
      args: [[5, 2, 3, null, 1], 4],
      expected: [5, 2, 4, null, 1, 3],
    },
  ],
  hiddenTests: [
    {
      args: [[1], 2],
      expected: [2, 1],
    },
    {
      args: [[2, 1], 3],
      expected: [3, 2, null, 1],
    },
    {
      args: [[3, 2, null, 1], 4],
      expected: [4, 3, null, 2, null, 1],
    },
    {
      args: [[5, 4, null, 3, null, 2, null, 1], 6],
      expected: [6, 5, null, 4, null, 3, null, 2, null, 1],
    },
  ],
};
