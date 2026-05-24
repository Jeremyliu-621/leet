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
function invertTreeRunner(arr) { return __toArray__(invertTree(__fromArray__(arr))); }
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
    while result and not isinstance(result[-1], (int, float)):
        result.pop()
    return result

def invertTreeRunner(arr):
    return __to_array__(invertTree(__from_array__(arr)))
`.trim();

export const problem: Problem = {
  id: 'invert-binary-tree',
  title: 'Invert Binary Tree',
  difficulty: 'easy',
  tags: ['tree'],
  description: `Given the root of a binary tree, invert the tree (mirror it), and return its root.

Trees are represented as level-order arrays (BFS order), where \`null\` indicates a missing child.

**Approach:** Swap the left and right children of every node. Do this recursively: invert left, invert right, then swap.`,
  constraints: [
    'The number of nodes in the tree is in the range [0, 100]',
    '-100 <= Node.val <= 100',
  ],
  examples: [
    {
      input: 'root = [4,2,7,1,3,6,9]',
      output: '[4,7,2,9,6,3,1]',
      explanation: 'Left and right subtrees are swapped at every level.',
    },
    {
      input: 'root = [2,1,3]',
      output: '[2,3,1]',
      explanation: 'Left child 1 and right child 3 are swapped.',
    },
  ],
  hints: [
    'For each node, swap its left and right children, then recursively invert both subtrees.',
    'Base case: null node returns null immediately.',
    '`function invertTree(root) { if (!root) return null; [root.left, root.right] = [invertTree(root.right), invertTree(root.left)]; return root; }`',
  ],
  functionName: 'invertTreeRunner',
  params: ['root'],
  preamble: { javascript: JS_PREAMBLE, python: PY_PREAMBLE },
  starterCode: {
    javascript:
      '// TreeNode class and invertTreeRunner wrapper are pre-defined.\n// Implement the function below:\nfunction invertTree(root) {\n  \n}\n',
    python:
      '# TreeNode class and invertTreeRunner wrapper are pre-defined.\n# Implement the function below:\ndef invertTree(root):\n    pass\n',
  },
  visibleTests: [
    { args: [[4, 2, 7, 1, 3, 6, 9]], expected: [4, 7, 2, 9, 6, 3, 1] },
    { args: [[2, 1, 3]], expected: [2, 3, 1] },
    { args: [[]], expected: [] },
  ],
  hiddenTests: [
    { args: [[1]], expected: [1] },
    { args: [[1, null, 2]], expected: [1, 2] },
    { args: [[3, 1, 2]], expected: [3, 2, 1] },
    { args: [[1, 2, 3, 4, 5, 6, 7]], expected: [1, 3, 2, 7, 6, 5, 4] },
  ],
};
