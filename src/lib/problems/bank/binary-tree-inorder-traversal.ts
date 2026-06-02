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
function inorderTraversalRunner(arr) { return inorderTraversal(__fromArray__(arr)); }
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

def inorderTraversalRunner(arr):
    return inorderTraversal(__from_array__(arr))
`.trim();

export const problem: Problem = {
  id: 'binary-tree-inorder-traversal',
  title: 'Binary Tree Inorder Traversal',
  difficulty: 'easy',
  tags: ['tree'],
  description: `Given the \`root\` of a binary tree, return *the inorder traversal of its nodes' values*.

Inorder traversal visits nodes in **left → root → right** order.

Trees are represented as level-order arrays (BFS order), where \`null\` indicates a missing child.

> **Note:** A \`TreeNode\` class and helper utilities are pre-defined. Your function receives a \`TreeNode | null\`.`,
  constraints: [
    'The number of nodes in the tree is in the range [0, 100].',
    '-100 <= Node.val <= 100',
  ],
  examples: [
    {
      input: 'root = [1,null,2,3]',
      output: '[1,3,2]',
      explanation: 'Inorder: left(null)→1→left(3)→2. Result: [1,3,2].',
    },
    {
      input: 'root = []',
      output: '[]',
    },
    {
      input: 'root = [1]',
      output: '[1]',
    },
  ],
  hints: [
    'Use recursion: inorder(node.left), then append node.val, then inorder(node.right).',
    'Alternatively, use an iterative approach with a stack: push nodes while going left, pop and visit, then move right.',
    'Base case: if node is null, return.',
  ],
  functionName: 'inorderTraversalRunner',
  params: ['root'],
  preamble: { javascript: JS_PREAMBLE, python: PY_PREAMBLE },
  starterCode: {
    javascript:
      '// TreeNode class and inorderTraversalRunner wrapper are pre-defined.\n// Implement the function below:\nfunction inorderTraversal(root) {\n  const result = [];\n  function dfs(node) {\n    if (!node) return;\n    dfs(node.left);\n    result.push(node.val);\n    dfs(node.right);\n  }\n  dfs(root);\n  return result;\n}\n',
    typescript: `function inorderTraversalRunner(root: (number | null)[]): number[] {
  if (!root.length || root[0] === null) return [];
  type N = { v: number; l: N|null; r: N|null };
  const mk = (v: number): N => ({v, l: null, r: null});
  const r = mk(root[0] as number);
  const q: N[] = [r]; let i = 1;
  while (q.length && i < root.length) {
    const n = q.shift()!;
    if (root[i] != null) { n.l = mk(root[i] as number); q.push(n.l); } i++;
    if (i < root.length && root[i] != null) { n.r = mk(root[i] as number); q.push(n.r); } i++;
  }
  const res: number[] = [];
  const dfs = (n: N|null): void => { if (!n) return; dfs(n.l); res.push(n.v); dfs(n.r); };
  dfs(r);
  return res;
}`,

    python:
      '# TreeNode class and inorderTraversalRunner wrapper are pre-defined.\n# Implement the function below:\ndef inorderTraversal(root):\n    result = []\n    def dfs(node):\n        if not node: return\n        dfs(node.left)\n        result.append(node.val)\n        dfs(node.right)\n    dfs(root)\n    return result\n',
  },
  visibleTests: [
    { args: [[1, null, 2, 3]], expected: [1, 3, 2] },
    { args: [[]], expected: [] },
    { args: [[1]], expected: [1] },
  ],
  hiddenTests: [
    { args: [[1, 2, 3]], expected: [2, 1, 3] },
    { args: [[1, 2, 3, 4, 5]], expected: [4, 2, 5, 1, 3] },
    { args: [[5, 3, 7, 1, 4]], expected: [1, 3, 4, 5, 7] },
    { args: [[1, null, 2]], expected: [1, 2] },
  ],
};
