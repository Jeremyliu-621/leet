import type { Problem } from '../types';

const JS_PREAMBLE = `
class TreeNode {
  constructor(val, left = null, right = null) {
    this.v = val; this.l = left; this.r = right;
  }
}
function __fromArray__(arr) {
  if (!arr || arr.length === 0) return null;
  const root = new TreeNode(arr[0]);
  const q = [root]; let i = 1;
  while (i < arr.length) {
    const n = q.shift();
    if (i < arr.length && arr[i] != null) { n.l = new TreeNode(arr[i]); q.push(n.l); } i++;
    if (i < arr.length && arr[i] != null) { n.r = new TreeNode(arr[i]); q.push(n.r); } i++;
  }
  return root;
}
function __toArray__(root) {
  if (!root) return [];
  const result = [], q = [root];
  while (q.length) {
    const n = q.shift();
    if (!n) { result.push(null); continue; }
    result.push(n.v);
    q.push(n.l); q.push(n.r);
  }
  while (result.length && result[result.length - 1] === null) result.pop();
  return result;
}
function convertBSTRunner(arr) {
  const root = __fromArray__(arr);
  convertBST(root);
  return __toArray__(root);
}
`;

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
    from collections import deque
    q = deque([root]); i = 1
    while q and i < len(arr):
        n = q.popleft()
        if i < len(arr) and arr[i] is not None:
            n.left = TreeNode(arr[i]); q.append(n.left)
        i += 1
        if i < len(arr) and arr[i] is not None:
            n.right = TreeNode(arr[i]); q.append(n.right)
        i += 1
    return root

def __to_array__(root):
    if not root:
        return []
    from collections import deque
    result = []
    q = deque([root])
    while q:
        n = q.popleft()
        if n is None:
            result.append(None)
            continue
        result.append(n.val)
        q.append(n.left)
        q.append(n.right)
    while result and result[-1] is None:
        result.pop()
    return result

def convertBSTRunner(arr):
    root = __from_array__(arr)
    convertBST(root)
    return __to_array__(root)
`;

export const problem: Problem = {
  id: 'convert-bst-to-greater-tree',
  title: 'Convert BST to Greater Tree',
  difficulty: 'medium',
  tags: ['tree'],
  description: `Given the \`root\` of a Binary Search Tree (BST), convert it to a Greater Tree such that every key of the original BST is changed to the original key plus the sum of all keys greater than the original key in BST.

As a reminder, a *binary search tree* is a tree that satisfies these constraints:
- The left subtree of a node contains only nodes with keys **less than** the node's key.
- The right subtree of a node contains only nodes with keys **greater than** the node's key.
- Both the left and right subtrees must also be binary search trees.`,
  constraints: [
    'The number of nodes in the tree is in the range `[0, 10^4]`.',
    '`-10^4 <= Node.val <= 10^4`',
    'All the values in the tree are **unique**.',
    '`root` is guaranteed to be a valid BST.',
  ],
  examples: [
    {
      input: 'root = [4,1,6,0,2,5,7,null,null,null,3,null,null,null,8]',
      output: '[30,36,21,36,35,26,15,null,null,null,33,null,null,null,8]',
    },
    { input: 'root = [0,null,1]', output: '[1,null,1]' },
  ],
  hints: [
    'Do a reverse in-order traversal (right → node → left) to visit nodes in decreasing order.',
    'Maintain a running suffix sum and add it to each node\'s value.',
    `\`\`\`js
let acc = 0;
function dfs(node) {
  if (!node) return;
  dfs(node.right);
  acc += node.val;
  node.val = acc;
  dfs(node.left);
}
dfs(root);
return root;\`\`\``
  ],
  functionName: 'convertBSTRunner',
  params: ['root'],
  preamble: {
    javascript: JS_PREAMBLE,
    python: PY_PREAMBLE,
  },
  starterCode: {
    javascript: 'function convertBST(root) {\n  \n}\n',
    typescript: "function convertBSTRunner(root: (number | null)[]): (number | null)[] {\n  \n}",

    python: 'def convertBST(root):\n    pass\n',
  },
  visibleTests: [
    { args: [[4, 1, 6, 0, 2, 5, 7, null, null, null, 3, null, null, null, 8]], expected: [30, 36, 21, 36, 35, 26, 15, null, null, null, 33, null, null, null, 8] },
    { args: [[0, null, 1]], expected: [1, null, 1] },
  ],
  hiddenTests: [
    { args: [[1]], expected: [1] },
    { args: [[3, 2, 4, 1]], expected: [7, 9, 4, 10] },
    { args: [[2, 1, 3]], expected: [5, 6, 3] },
  ],
};
