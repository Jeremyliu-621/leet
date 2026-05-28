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
function rangeSumBSTRunner(arr, low, high) {
  return rangeSumBST(__fromArray__(arr), low, high);
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
    arr = [int(v) if isinstance(v, (int, float)) and not isinstance(v, bool) else None for v in raw_list]
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

def rangeSumBSTRunner(arr, low, high):
    return rangeSumBST(__from_array__(arr), low, high)
`.trim();

export const problem: Problem = {
  id: 'range-sum-bst',
  title: 'Range Sum of BST',
  difficulty: 'easy',
  tags: ['tree'],
  description: `Given the \`root\` of a Binary Search Tree and two integers \`low\` and \`high\`, return the **sum** of values of all nodes with a value in the **inclusive** range \`[low, high]\`.

Trees are given as level-order arrays where \`null\` represents a missing node.`,
  constraints: [
    'The number of nodes in the tree is in the range `[1, 2 × 10^4]`.',
    '`1 <= Node.val <= 10^5`',
    '`1 <= low <= high <= 10^5`',
    'All `Node.val` are **unique**.',
  ],
  examples: [
    {
      input: 'root = [10,5,15,3,7,null,18], low = 7, high = 15',
      output: '32',
      explanation: 'Nodes 7, 10, and 15 are in [7, 15]. Sum = 7 + 10 + 15 = 32.',
    },
    {
      input: 'root = [10,5,15,3,7,13,18,1,null,6], low = 6, high = 10',
      output: '23',
      explanation: 'Nodes 6, 7, and 10 are in [6, 10]. Sum = 6 + 7 + 10 = 23.',
    },
  ],
  hints: [
    'In a BST, if `node.val < low` all values in the left subtree are also below `low` — skip left entirely. If `node.val > high` skip right entirely.',
    'Use DFS: add `node.val` to the sum when it is in `[low, high]`, then recurse into whichever subtrees are still in range.',
    '```js\nfunction rangeSumBST(root, low, high) {\n  if (!root) return 0;\n  let sum = (root.val >= low && root.val <= high) ? root.val : 0;\n  if (root.val > low) sum += rangeSumBST(root.left, low, high);\n  if (root.val < high) sum += rangeSumBST(root.right, low, high);\n  return sum;\n}\n```',
  ],
  functionName: 'rangeSumBSTRunner',
  params: ['root', 'low', 'high'],
  preamble: { javascript: JS_PREAMBLE, python: PY_PREAMBLE },
  starterCode: {
    javascript: `// TreeNode class and rangeSumBSTRunner wrapper are pre-defined.
function rangeSumBST(root, low, high) {
  // Return sum of BST node values in [low, high]
}`,
    python: `# TreeNode class and rangeSumBSTRunner wrapper are pre-defined.
def rangeSumBST(root, low: int, high: int) -> int:
    # Return sum of BST node values in [low, high]
    pass`,
  },
  visibleTests: [
    { args: [[10, 5, 15, 3, 7, null, 18], 7, 15], expected: 32 },
    { args: [[10, 5, 15, 3, 7, 13, 18, 1, null, 6], 6, 10], expected: 23 },
    { args: [[4, 2, 6, 1, 3, 5, 7], 2, 5], expected: 14 },
  ],
  hiddenTests: [
    { args: [[10], 5, 15], expected: 10 },
    { args: [[10], 11, 20], expected: 0 },
    { args: [[10, 5, 15, 3, 7, null, 18], 1, 5], expected: 8 },
    { args: [[10, 5, 15, 3, 7, null, 18], 1, 100], expected: 58 },
    { args: [[1, null, 2], 1, 1], expected: 1 },
  ],
};
