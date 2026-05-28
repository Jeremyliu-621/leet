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
function maxPathSumRunner(arr) { return maxPathSum(__fromArray__(arr)); }
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

def maxPathSumRunner(arr):
    return maxPathSum(__from_array__(arr))
`.trim();

export const problem: Problem = {
  id: 'binary-tree-maximum-path-sum',
  title: 'Binary Tree Maximum Path Sum',
  difficulty: 'hard',
  tags: ['tree', 'dynamic-programming'],
  description: `A **path** in a binary tree is a sequence of nodes where each pair of adjacent nodes has an edge. The same node appears **at most once** in the path, and the path does not need to pass through the root.

The **path sum** of a path is the sum of the node values in the path.

Given the root of a binary tree, return the **maximum path sum** of any non-empty path.

Trees are given as level-order arrays where \`null\` represents a missing node.`,
  constraints: [
    'The number of nodes in the tree is in the range `[1, 3 × 10^4]`.',
    '`-1000 <= Node.val <= 1000`',
  ],
  examples: [
    {
      input: 'root = [1,2,3]',
      output: '6',
      explanation: 'The optimal path is 2 → 1 → 3 with path sum 2 + 1 + 3 = 6.',
    },
    {
      input: 'root = [-10,9,20,null,null,15,7]',
      output: '42',
      explanation: 'The optimal path is 15 → 20 → 7 with path sum 15 + 20 + 7 = 42.',
    },
  ],
  hints: [
    'For each node, the maximum path sum passing through it is `node.val + max(0, gain(left)) + max(0, gain(right))`. Negative contributions are discarded (clipped to 0).',
    'Define a helper that returns the best single-arm gain downward from a node: `node.val + max(0, gain(left), gain(right))`. Use a closure variable to track the global maximum.',
    '```js\nfunction maxPathSum(root) {\n  let ans = -Infinity;\n  function gain(node) {\n    if (!node) return 0;\n    const left = Math.max(0, gain(node.left));\n    const right = Math.max(0, gain(node.right));\n    ans = Math.max(ans, node.val + left + right);\n    return node.val + Math.max(left, right);\n  }\n  gain(root);\n  return ans;\n}\n```',
  ],
  functionName: 'maxPathSumRunner',
  params: ['root'],
  preamble: { javascript: JS_PREAMBLE, python: PY_PREAMBLE },
  starterCode: {
    javascript: `// TreeNode class and maxPathSumRunner wrapper are pre-defined.
function maxPathSum(root) {
  // Return the maximum path sum in the tree
}`,
    typescript: "function maxPathSumRunner(root: number[]): number {\n  // Return the maximum path sum in the tree\n}",

    python: `# TreeNode class and maxPathSumRunner wrapper are pre-defined.
def maxPathSum(root):
    # Return the maximum path sum in the tree
    pass`,
  },
  visibleTests: [
    { args: [[1, 2, 3]], expected: 6 },
    { args: [[-10, 9, 20, null, null, 15, 7]], expected: 42 },
    { args: [[5, 4, 8, 11, null, 13, 4, 7, 2, null, null, null, 1]], expected: 48 },
  ],
  hiddenTests: [
    { args: [[1]], expected: 1 },
    { args: [[-3]], expected: -3 },
    { args: [[1, null, 2]], expected: 3 },
    { args: [[2, -1, -2]], expected: 2 },
    { args: [[-1, -2, -3]], expected: -1 },
    { args: [[-2, -1]], expected: -1 },
    { args: [[1, 2, null, 3]], expected: 6 },
    { args: [[1, -2, 3, 4, -5, null, 6]], expected: 12 },
  ],
};
