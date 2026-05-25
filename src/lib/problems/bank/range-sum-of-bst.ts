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
function rangeSumBSTRunner(arr, low, high) { return rangeSumBST(__fromArray__(arr), low, high); }
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

def rangeSumBSTRunner(arr, low, high):
    return rangeSumBST(__from_array__(arr), low, high)
`.trim();

export const problem: Problem = {
  id: 'range-sum-of-bst',
  title: 'Range Sum of BST',
  difficulty: 'easy',
  tags: ['tree', 'binary-search'],
  description: `Given the \`root\` of a Binary Search Tree and two integers \`low\` and \`high\`, return *the sum of values of all nodes with a value in the **inclusive** range* \`[low, high]\`.`,
  constraints: [
    'The number of nodes in the tree is in the range [1, 2 * 10^4].',
    '1 <= Node.val <= 10^5',
    '1 <= low <= high <= 10^5',
    'All Node.val are unique.',
  ],
  examples: [
    {
      input: 'root = [10,5,15,3,7,null,18], low = 7, high = 15',
      output: '32',
      explanation: 'Nodes with values 7, 10, 15 are in [7,15]. Sum = 7 + 10 + 15 = 32.',
    },
    {
      input: 'root = [10,5,15,3,7,13,18,1,null,6], low = 6, high = 10',
      output: '23',
      explanation: 'Nodes 6, 7, 10 are in [6, 10]. Sum = 6 + 7 + 10 = 23.',
    },
  ],
  hints: [
    'Use BST properties: if node.val < low, only the right subtree can contain values in range; if node.val > high, only the left subtree can.',
    'If low <= node.val <= high, add node.val and recurse both subtrees.',
  ],
  functionName: 'rangeSumBSTRunner',
  params: ['root', 'low', 'high'],
  preamble: {
    javascript: JS_PREAMBLE,
    python: PY_PREAMBLE,
  },
  starterCode: {
    javascript: '// TreeNode class and rangeSumBSTRunner wrapper are pre-defined.\n// Implement the function below:\nfunction rangeSumBST(root, low, high) {\n  \n}\n',
    python: '# TreeNode class and rangeSumBSTRunner wrapper are pre-defined.\n# Implement the function below:\ndef rangeSumBST(root, low, high):\n    pass\n',
  },
  visibleTests: [
    { args: [[10, 5, 15, 3, 7, null, 18], 7, 15], expected: 32 },
    { args: [[10, 5, 15, 3, 7, 13, 18, 1, null, 6], 6, 10], expected: 23 },
  ],
  hiddenTests: [
    { args: [[1], 1, 1], expected: 1 },
    { args: [[5, 3, 7], 3, 7], expected: 15 },
    { args: [[5, 3, 7], 6, 10], expected: 7 },
    { args: [[5, 3, 7, 1, 4], 2, 4], expected: 7 },
    { args: [[10, 5, 15], 1, 5], expected: 5 },
  ],
};
