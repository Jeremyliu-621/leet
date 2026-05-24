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
function flattenRunner(arr) {
  const root = __fromArray__(arr);
  flatten(root);
  const result = [];
  let cur = root;
  while (cur) { result.push(cur.val); cur = cur.right; }
  return result;
}
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

def flattenRunner(arr):
    root = __from_array__(arr)
    flatten(root)
    result = []
    cur = root
    while cur:
        result.append(cur.val)
        cur = cur.right
    return result
`.trim();

export const problem: Problem = {
  id: 'flatten-binary-tree',
  title: 'Flatten Binary Tree to Linked List',
  difficulty: 'medium',
  tags: ['tree'],
  description: `Given the \`root\` of a binary tree, flatten it **in-place** to a linked list using only right pointers, following **pre-order** traversal order. All left pointers must be set to \`null\` after flattening.

> **Note:** A \`TreeNode\` class is pre-defined. Nodes have \`val\`, \`left\`, and \`right\` fields. The runner calls your \`flatten(root)\` function, then traverses the right-pointer chain to collect the result.`,
  constraints: [
    'The number of nodes in the tree is in the range [0, 2000]',
    '-100 <= Node.val <= 100',
    'Flatten in-place — do not return a new structure; modify the tree directly',
  ],
  examples: [
    {
      input: 'root = [1,2,5,3,4,null,6]',
      output: '[1,2,3,4,5,6]',
      explanation:
        'Pre-order visits: 1, 2, 3, 4, 5, 6. The flattened right-pointer chain holds these values in order.',
    },
    { input: 'root = []', output: '[]' },
    { input: 'root = [1]', output: '[1]' },
  ],
  hints: [
    'Pre-order traversal visits: root, then left subtree, then right subtree. The flattened list follows this order.',
    'For each node: save `node.right`, set `node.right = node.left`, set `node.left = null`, then find the tail of the new right chain and attach the saved right subtree.',
    'Alternatively, traverse in *reverse* pre-order (right, left, root) and keep a `prev` pointer, setting `node.right = prev; node.left = null` at each step.',
  ],
  functionName: 'flattenRunner',
  params: ['root'],
  preamble: { javascript: JS_PREAMBLE, python: PY_PREAMBLE },
  starterCode: {
    javascript:
      '// TreeNode class is pre-defined. Implement the function below:\nfunction flatten(root) {\n  \n}\n',
    python:
      '# TreeNode class is pre-defined. Implement the function below:\ndef flatten(root):\n    pass\n',
  },
  visibleTests: [
    { args: [[1, 2, 5, 3, 4, null, 6]], expected: [1, 2, 3, 4, 5, 6] },
    { args: [[]], expected: [] },
    { args: [[1]], expected: [1] },
  ],
  hiddenTests: [
    { args: [[1, 2, 3]], expected: [1, 2, 3] },
    { args: [[3, 1, 2]], expected: [3, 1, 2] },
    { args: [[1, null, 2, null, 3]], expected: [1, 2, 3] },
    { args: [[1, 2, null, 3]], expected: [1, 2, 3] },
  ],
};
