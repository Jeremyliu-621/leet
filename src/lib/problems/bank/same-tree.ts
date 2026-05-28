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
function isSameTreeRunner(arr1, arr2) { return isSameTree(__fromArray__(arr1), __fromArray__(arr2)); }
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

def isSameTreeRunner(arr1, arr2):
    return isSameTree(__from_array__(arr1), __from_array__(arr2))
`.trim();

export const problem: Problem = {
  id: 'same-tree',
  title: 'Same Tree',
  difficulty: 'easy',
  tags: ['tree'],
  description: `Given the roots of two binary trees \`p\` and \`q\`, write a function to check if they are the same or not.

Two binary trees are considered the same if they are structurally identical and the nodes have the same values.

> **Note:** A \`TreeNode\` class is pre-defined. Nodes have \`val\`, \`left\`, and \`right\` fields.`,
  constraints: [
    'The number of nodes in both trees is in the range [0, 100]',
    '-10^4 <= Node.val <= 10^4',
  ],
  examples: [
    { input: 'p = [1,2,3], q = [1,2,3]', output: 'true' },
    {
      input: 'p = [1,2], q = [1,null,2]',
      output: 'false',
      explanation: 'The trees have the same values but different structures.',
    },
    { input: 'p = [1,2,1], q = [1,1,2]', output: 'false' },
  ],
  hints: [
    'If both nodes are null the trees match at this position. If exactly one is null they don\'t.',
    'When both are non-null, they match if their values are equal AND the left subtrees match AND the right subtrees match.',
    '`function isSameTree(p, q) { if (!p && !q) return true; if (!p || !q) return false; return p.val === q.val && isSameTree(p.left, q.left) && isSameTree(p.right, q.right); }`',
  ],
  functionName: 'isSameTreeRunner',
  params: ['p', 'q'],
  preamble: { javascript: JS_PREAMBLE, python: PY_PREAMBLE },
  starterCode: {
    javascript:
      '// TreeNode class is pre-defined. Implement the function below:\nfunction isSameTree(p, q) {\n  \n}\n',
    typescript: "function isSameTreeRunner(p: number[], q: number[]): boolean {\n  \n}",

    python:
      '# TreeNode class is pre-defined. Implement the function below:\ndef isSameTree(p, q):\n    pass\n',
  },
  visibleTests: [
    { args: [[1, 2, 3], [1, 2, 3]], expected: true },
    { args: [[1, 2], [1, null, 2]], expected: false },
    { args: [[1, 2, 1], [1, 1, 2]], expected: false },
    { args: [[], []], expected: true },
  ],
  hiddenTests: [
    { args: [[1], [1]], expected: true },
    { args: [[1, null, 2], [1, null, 2]], expected: true },
    { args: [[1, null, 2], [1, 2]], expected: false },
    { args: [[1, 2, 3, 4], [1, 2, 3, null, 4]], expected: false },
  ],
};
