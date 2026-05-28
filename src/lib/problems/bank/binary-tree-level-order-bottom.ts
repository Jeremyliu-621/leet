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
function levelOrderBottomRunner(arr) { return levelOrderBottom(__fromArray__(arr)); }
`.trim();

const PY_PREAMBLE = `
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

def __from_array__(arr):
    if arr is None:
        return None
    if hasattr(arr, 'to_py'):
        raw = arr.to_py()
    else:
        try:
            raw = list(arr)
        except TypeError:
            return None
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

def levelOrderBottomRunner(arr):
    return levelOrderBottom(__from_array__(arr))
`.trim();

export const problem: Problem = {
  id: 'binary-tree-level-order-bottom',
  title: 'Binary Tree Level Order Traversal II',
  difficulty: 'easy',
  tags: ['tree'],
  description: `Given the \`root\` of a binary tree, return the **bottom-up level order traversal** of its nodes' values (i.e., from left to right, level by level from leaf to root).

> **Note:** A \`TreeNode\` class is pre-defined. Nodes have \`val\`, \`left\`, and \`right\` fields.`,
  constraints: [
    'The number of nodes in the tree is in the range [0, 2000]',
    '-1000 <= Node.val <= 1000',
  ],
  examples: [
    {
      input: 'root = [3,9,20,null,null,15,7]',
      output: '[[15,7],[9,20],[3]]',
      explanation: 'BFS gives [[3],[9,20],[15,7]]; reverse it for bottom-up.',
    },
    { input: 'root = [1]', output: '[[1]]' },
    { input: 'root = []', output: '[]' },
  ],
  hints: [
    'This is standard BFS level-order traversal, but with one extra step: reverse the result array at the end.',
    'Alternatively, prepend each level to the front of the result instead of appending.',
    `\`\`\`js
// BFS level-order, then reverse result
const res = [], q = [root];
while (q.length) {
  const n = q.length, lvl = [];
  for (let i = 0; i < n; i++) {
    const node = q.shift();
    lvl.push(node.val);
    if (node.left) q.push(node.left);
    if (node.right) q.push(node.right);
  }
  res.push(lvl);
}
return res.reverse();\`\`\``,
  ],
  functionName: 'levelOrderBottomRunner',
  params: ['root'],
  preamble: { javascript: JS_PREAMBLE, python: PY_PREAMBLE },
  starterCode: {
    javascript:
      '// TreeNode class is pre-defined. Implement the function below:\nfunction levelOrderBottom(root) {\n  \n}\n',
    typescript: "function levelOrderBottomRunner(root: (number | null)[]): number[][] {\n  \n}",

    python:
      '# TreeNode class is pre-defined. Implement the function below:\ndef levelOrderBottom(root):\n    pass\n',
  },
  visibleTests: [
    { args: [[3, 9, 20, null, null, 15, 7]], expected: [[15, 7], [9, 20], [3]] },
    { args: [[1]], expected: [[1]] },
    { args: [[]], expected: [] },
  ],
  hiddenTests: [
    { args: [[1, 2, 3]], expected: [[2, 3], [1]] },
    { args: [[1, 2, null, 3]], expected: [[3], [2], [1]] },
    { args: [[1, 2, 3, 4, 5, 6, 7]], expected: [[4, 5, 6, 7], [2, 3], [1]] },
  ],
};
