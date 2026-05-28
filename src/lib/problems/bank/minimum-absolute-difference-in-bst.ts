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
function getMinimumDifferenceRunner(arr) { return getMinimumDifference(__fromArray__(arr)); }
`.trim();

const PY_PREAMBLE = `
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val; self.left = left; self.right = right

def __from_array__(raw):
    raw_list = raw.to_py() if hasattr(raw, 'to_py') else list(raw)
    arr = [int(v) if isinstance(v, (int, float)) and not isinstance(v, bool) else None for v in raw_list]
    if not arr or arr[0] is None:
        return None
    root = TreeNode(arr[0])
    queue = [root]
    i = 1
    while queue and i < len(arr):
        node = queue.pop(0)
        if i < len(arr) and arr[i] is not None:
            node.left = TreeNode(arr[i]); queue.append(node.left)
        i += 1
        if i < len(arr) and arr[i] is not None:
            node.right = TreeNode(arr[i]); queue.append(node.right)
        i += 1
    return root

def getMinimumDifferenceRunner(arr):
    return getMinimumDifference(__from_array__(arr))
`.trim();

export const problem: Problem = {
  id: 'minimum-absolute-difference-in-bst',
  title: 'Minimum Absolute Difference in BST',
  difficulty: 'easy',
  tags: ['tree', 'binary-search'],
  description:
    'Given the `root` of a Binary Search Tree (BST), return *the minimum absolute difference between the values of any two different nodes in the tree*.',
  constraints: [
    'The number of nodes in the tree is in the range [2, 10^4].',
    '0 <= Node.val <= 10^5',
    'All Node.val are unique.',
  ],
  examples: [
    {
      input: 'root = [4,2,6,1,3]',
      output: '1',
      explanation:
        'Inorder traversal gives [1,2,3,4,6]. Consecutive differences: 1,1,1,2. Minimum is 1.',
    },
    {
      input: 'root = [1,0,48,null,null,12,49]',
      output: '1',
      explanation:
        'Inorder traversal gives [0,1,12,48,49]. Consecutive differences: 1,11,36,1. Minimum is 1.',
    },
  ],
  hints: [
    'BST inorder traversal yields values in sorted order.',
    'The minimum difference must occur between two consecutive values in inorder sequence — track the previous node value and compute the difference at each step.',
    `\`\`\`js
// In-order traversal (sorted); track previous value, compute adjacent diff
let prev = null, minDiff = Infinity;
function inOrder(node) {
  if (!node) return;
  inOrder(node.left);
  if (prev !== null) minDiff = Math.min(minDiff, node.val - prev);
  prev = node.val;
  inOrder(node.right);
}
inOrder(root);
return minDiff;\`\`\``,
  ],
  functionName: 'getMinimumDifferenceRunner',
  params: ['root'],
  preamble: {
    javascript: JS_PREAMBLE,
    python: PY_PREAMBLE,
  },
  starterCode: {
    javascript:
      '// TreeNode class and getMinimumDifferenceRunner wrapper are pre-defined.\n// Implement the function below:\nfunction getMinimumDifference(root) {\n  \n}\n',
    typescript: "function getMinimumDifferenceRunner(root: number[]): number {\n  \n}",

    python:
      '# TreeNode class and getMinimumDifferenceRunner wrapper are pre-defined.\n# Implement the function below:\ndef getMinimumDifference(root):\n    pass\n',
  },
  visibleTests: [
    { args: [[4, 2, 6, 1, 3]], expected: 1 },
    { args: [[1, 0, 48, null, null, 12, 49]], expected: 1 },
  ],
  hiddenTests: [
    { args: [[2, 1]], expected: 1 },
    { args: [[10, 3, 15]], expected: 5 },
    { args: [[5, 2, 8, 1, 3, 7, 9]], expected: 1 },
    { args: [[100, 50, 200, 25, 75]], expected: 25 },
  ],
};
