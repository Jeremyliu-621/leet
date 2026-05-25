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
function isCousinsRunner(arr, x, y) { return isCousins(__fromArray__(arr), x, y); }
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
            node.left = TreeNode(a[i])
            queue.append(node.left)
        i += 1
        if i < len(a) and a[i] is not None:
            node.right = TreeNode(a[i])
            queue.append(node.right)
        i += 1
    return root

def isCousinsRunner(arr, x, y):
    return isCousins(__from_array__(arr), int(x), int(y))
`.trim();

export const problem: Problem = {
  id: 'cousins-in-binary-tree',
  title: 'Cousins in Binary Tree',
  difficulty: 'easy',
  tags: ['tree', 'binary-search'],
  description: `Given the \`root\` of a binary tree and two distinct values \`x\` and \`y\`, return \`true\` if the nodes with values \`x\` and \`y\` are **cousins**.

Two nodes are **cousins** if they have the **same depth** but **different parents**.

Trees are represented as level-order arrays (BFS order), where \`null\` indicates a missing child.

> **Note:** A \`TreeNode\` class and helper utilities are pre-defined. Your function receives a \`TreeNode | null\` and two integers.`,
  constraints: [
    'The number of nodes in the tree is in the range [2, 100].',
    '1 <= Node.val <= 100',
    'Each node has a unique value.',
    'x != y',
    'x and y are guaranteed to be in the tree.',
  ],
  examples: [
    {
      input: 'root = [1,2,3,4], x = 4, y = 3',
      output: 'false',
      explanation: '4 is at depth 2 (parent 2), 3 is at depth 1. Different depths → not cousins.',
    },
    {
      input: 'root = [1,2,3,null,4,null,5], x = 5, y = 4',
      output: 'true',
      explanation: 'Both 5 and 4 are at depth 2 with different parents (3 and 2 respectively).',
    },
    {
      input: 'root = [1,2,3,null,4], x = 2, y = 3',
      output: 'false',
      explanation: '2 and 3 are siblings (same parent 1), not cousins.',
    },
  ],
  hints: [
    'Use BFS level-by-level. At each level, track (node, parent) pairs.',
    'Find the depth and parent of x and y. Return true if depths match but parents differ.',
    'Alternatively, use DFS with a helper that returns (depth, parent) for each target value.',
  ],
  functionName: 'isCousinsRunner',
  params: ['root', 'x', 'y'],
  preamble: { javascript: JS_PREAMBLE, python: PY_PREAMBLE },
  starterCode: {
    javascript:
      '// TreeNode class and isCousinsRunner wrapper are pre-defined.\n// Implement the function below:\nfunction isCousins(root, x, y) {\n  \n}\n',
    python:
      '# TreeNode class and isCousinsRunner wrapper are pre-defined.\n# Implement the function below:\ndef isCousins(root, x, y):\n    pass\n',
  },
  visibleTests: [
    { args: [[1, 2, 3, 4], 4, 3], expected: false },
    { args: [[1, 2, 3, null, 4, null, 5], 5, 4], expected: true },
    { args: [[1, 2, 3, null, 4], 2, 3], expected: false },
  ],
  hiddenTests: [
    { args: [[1, 2, 3], 2, 3], expected: false },
    { args: [[1, 2, 3, 4, 5, 6, 7], 4, 6], expected: true },
    { args: [[1, 2, 3, 4, 5, 6, 7], 4, 5], expected: false },
    { args: [[1, 2, 3, null, null, 4], 2, 4], expected: false },
    { args: [[1, 2, 3, 4, null, null, 5], 4, 5], expected: true },
  ],
};
