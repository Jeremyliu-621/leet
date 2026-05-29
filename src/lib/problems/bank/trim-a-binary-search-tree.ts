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
    if (node.left !== null || node.right !== null) {
      queue.push(node.left);
      queue.push(node.right);
    }
  }
  while (result.length > 0 && result[result.length - 1] === null) result.pop();
  return result;
}
function trimBSTRunner(arr, low, high) {
  return __toArray__(trimBST(__fromArray__(arr), low, high));
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
            node.left = TreeNode(a[i])
            queue.append(node.left)
        i += 1
        if i < len(a) and a[i] is not None:
            node.right = TreeNode(a[i])
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
        if node.left is not None or node.right is not None:
            queue.append(node.left)
            queue.append(node.right)
    while result and result[-1] is None:
        result.pop()
    return result

def trimBSTRunner(arr, low, high):
    return __to_array__(trimBST(__from_array__(arr), int(low), int(high)))
`.trim();

export const problem: Problem = {
  id: 'trim-a-binary-search-tree',
  title: 'Trim a Binary Search Tree',
  difficulty: 'medium',
  tags: ['tree'],
  description: `Given the \`root\` of a binary search tree and the lowest and highest boundaries as \`low\` and \`high\`, trim the tree so that all its values are within the inclusive range \`[low, high]\`. Trimming the tree should not change the relative structure of elements in the tree (i.e., any node's descendant should remain a descendant). Return the root of the trimmed tree.

Note that the root may change depending on the given bounds.

Trees are represented as level-order arrays where \`null\` indicates a missing child. The result is returned as a level-order array.

> **Note:** \`TreeNode\` class and \`trimBSTRunner\` wrapper are pre-defined. Implement \`trimBST(root, low, high)\`.`,
  constraints: [
    'The number of nodes in the tree is in the range [1, 10^4].',
    '0 <= Node.val <= 10^4',
    'All Node.val are **unique**.',
    '0 <= low <= high <= 10^4',
    'It is guaranteed that the tree is a valid BST.',
  ],
  examples: [
    {
      input: 'root = [1,0,2], low = 1, high = 2',
      output: '[1,null,2]',
      explanation: 'Node 0 is removed (< 1).',
    },
    {
      input: 'root = [3,0,4,null,2,null,null,1], low = 1, high = 3',
      output: '[3,2,null,1]',
      explanation: 'Node 4 (> 3) and node 0 (< 1) are removed.',
    },
  ],
  hints: [
    'Use recursion. If the current node value is less than low, trim the right subtree. If greater than high, trim the left subtree.',
    'If the current node is within range, recursively trim both subtrees.',
    'Base case: if root is null, return null.',
  ],
  functionName: 'trimBSTRunner',
  params: ['root', 'low', 'high'],
  preamble: { javascript: JS_PREAMBLE, python: PY_PREAMBLE },
  starterCode: {
    javascript: '// TreeNode class and trimBSTRunner wrapper are pre-defined.\n// Implement the function below:\nfunction trimBST(root, low, high) {\n  \n}\n',
    typescript: 'function trimBSTRunner(root: (number | null)[], low: number, high: number): (number | null)[] {\n  \n}',
    python: '# TreeNode class and trimBSTRunner wrapper are pre-defined.\n# Implement the function below:\ndef trimBST(root, low, high):\n    pass\n',
  },
  visibleTests: [
    { args: [[1, 0, 2], 1, 2], expected: [1, null, 2] },
    { args: [[3, 0, 4, null, 2, null, null, 1], 1, 3], expected: [3, 2, null, 1] },
  ],
  hiddenTests: [
    { args: [[1], 1, 2], expected: [1] },
    { args: [[1], 2, 3], expected: [] },
    { args: [[3, 1, 4, null, 2], 1, 3], expected: [3, 1, null, null, 2] },
    { args: [[5, 3, 7, 2, 4, 6, 8], 3, 6], expected: [5, 3, 6, null, 4] },
    { args: [[5, 3, 7, 1, 4], 3, 5], expected: [5, 3, null, null, 4] },
    { args: [[10, 5, 15, 3, 7, null, 18], 7, 15], expected: [10, 7, 15] },
  ],
};
