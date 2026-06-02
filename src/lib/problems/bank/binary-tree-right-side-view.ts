import type { Problem } from '../types';

const JS_PREAMBLE = `
class TreeNode {
  constructor(val = 0, left = null, right = null) {
    this.val = val; this.left = left; this.right = right;
  }
}
function __fromArray__(arr) {
  if (!arr || arr.length === 0 || arr[0] === null) return null;
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
function rightSideViewRunner(arr) { return rightSideView(__fromArray__(arr)); }
`.trim();

const PY_PREAMBLE = `
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

def __from_array__(arr):
    if hasattr(arr, 'to_py'):
        raw = arr.to_py()
    else:
        raw = list(arr)
    arr = [int(v) if isinstance(v, (int, float)) and not isinstance(v, bool) else None for v in raw]
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

def rightSideViewRunner(arr):
    return rightSideView(__from_array__(arr))
`.trim();

export const problem: Problem = {
  id: 'binary-tree-right-side-view',
  title: 'Binary Tree Right Side View',
  difficulty: 'medium',
  tags: ['tree'],
  description: `Given the \`root\` of a binary tree, imagine yourself standing on the **right side** of it. Return the values of the nodes you can see, ordered from top to bottom.

> **Note:** A \`TreeNode\` class is pre-defined. Nodes have \`val\`, \`left\`, and \`right\` fields.`,
  constraints: [
    'The number of nodes in the tree is in the range [0, 100]',
    '-100 <= Node.val <= 100',
  ],
  examples: [
    {
      input: 'root = [1,2,3,null,5,null,4]',
      output: '[1,3,4]',
      explanation:
        'At each level the rightmost node is visible: 1 (root), 3 (right child), 4 (right grandchild).',
    },
    { input: 'root = [1,null,3]', output: '[1,3]' },
    { input: 'root = []', output: '[]' },
  ],
  hints: [
    'Do a BFS level-by-level. The last node dequeued at each level is the one visible from the right side.',
    'Process each level by first recording its size, then iterating through all nodes at that level; the last one is the visible node.',
    'Alternatively, do a DFS visiting right children before left; the first node visited at each depth is the rightmost one.',
  ],
  functionName: 'rightSideViewRunner',
  params: ['root'],
  preamble: { javascript: JS_PREAMBLE, python: PY_PREAMBLE },
  starterCode: {
    javascript:
      '// TreeNode class is pre-defined. Implement the function below:\nfunction rightSideView(root) {\n  if (!root) return [];\n  const result = [], q = [root];\n  while (q.length) {\n    const sz = q.length;\n    for (let i = 0; i < sz; i++) {\n      const node = q.shift();\n      if (i === sz - 1) result.push(node.val);\n      if (node.left) q.push(node.left);\n      if (node.right) q.push(node.right);\n    }\n  }\n  return result;\n}\n',
    typescript: `function rightSideViewRunner(root: (number | null)[]): number[] {
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
  const result: number[] = [], bfsQ: N[] = [r];
  while (bfsQ.length) {
    const sz = bfsQ.length;
    for (let j = 0; j < sz; j++) {
      const n = bfsQ.shift()!;
      if (j === sz - 1) result.push(n.v);
      if (n.l) bfsQ.push(n.l);
      if (n.r) bfsQ.push(n.r);
    }
  }
  return result;
}`,

    python:
      '# TreeNode class is pre-defined. Implement the function below:\ndef rightSideView(root):\n    if not root: return []\n    result, q = [], [root]\n    while q:\n        nxt = []\n        for node in q:\n            if node.left: nxt.append(node.left)\n            if node.right: nxt.append(node.right)\n        result.append(q[-1].val)\n        q = nxt\n    return result\n',
  },
  visibleTests: [
    { args: [[1, 2, 3, null, 5, null, 4]], expected: [1, 3, 4] },
    { args: [[1, null, 3]], expected: [1, 3] },
    { args: [[]], expected: [] },
    { args: [[1, 2]], expected: [1, 2] },
  ],
  hiddenTests: [
    { args: [[1]], expected: [1] },
    { args: [[1, 2, 3, 4]], expected: [1, 3, 4] },
    { args: [[1, 2, 3, null, 5]], expected: [1, 3, 5] },
    { args: [[1, 2, null, 3, null, 4]], expected: [1, 2, 3, 4] },
  ],
};
