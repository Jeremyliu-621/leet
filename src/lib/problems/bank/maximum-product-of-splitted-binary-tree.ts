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
function maxProductRunner(arr) { return maxProduct(__fromArray__(arr)); }
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

def maxProductRunner(arr):
    return maxProduct(__from_array__(arr))
`.trim();

export const problem: Problem = {
  id: 'maximum-product-of-splitted-binary-tree',
  title: 'Maximum Product of Splitted Binary Tree',
  difficulty: 'medium',
  tags: ['tree', 'dynamic-programming'],
  description: `Given the \`root\` of a binary tree, split the binary tree into two subtrees by removing one edge such that the product of the sums of the subtrees is maximized.

Return the **maximum product** of the sums of the two subtrees. Since the answer may be too large, return it **modulo** \`10^9 + 7\`.

**Note:** Answers within \`10^5\` of the correct answer will be accepted.

Trees are represented as level-order arrays (BFS order), where \`null\` indicates a missing child.

> **Note:** \`TreeNode\` class and \`maxProductRunner\` wrapper are pre-defined. Implement \`maxProduct(root)\`.`,
  constraints: [
    'The number of nodes in the tree is in the range [2, 5 × 10^4].',
    '1 <= Node.val <= 10^4',
  ],
  examples: [
    {
      input: 'root = [1,2,3,4,5,6]',
      output: '110',
      explanation:
        'Remove edge between 1 and 2. Left subtree {2,4,5} has sum 11; right subtree {1,3,6} has sum 10. Product = 11×10 = 110.',
    },
    {
      input: 'root = [1,2,3,4,5,6,7]',
      output: '192',
      explanation:
        'Remove edge between 1 and 3. Subtree {3,6,7} has sum 16; remaining {1,2,4,5} has sum 12. Product = 16×12 = 192.',
    },
  ],
  hints: [
    'Compute the total sum of all nodes in one DFS pass.',
    'In a second DFS pass, for each subtree with sum s, the other part has sum total - s. Product = s × (total - s).',
    'Track the maximum product across all possible edge removals.',
    'For large values use BigInt before taking the modulo; otherwise floating-point imprecision may corrupt the answer.',
  ],
  functionName: 'maxProductRunner',
  params: ['root'],
  preamble: { javascript: JS_PREAMBLE, python: PY_PREAMBLE },
  starterCode: {
    javascript:
      '// TreeNode class and maxProductRunner wrapper are pre-defined.\n// Implement the function below:\nfunction maxProduct(root) {\n  \n}\n',
    typescript: "function maxProductRunner(root: number[]): number {\n  \n}",

    python:
      '# TreeNode class and maxProductRunner wrapper are pre-defined.\n# Implement the function below:\ndef maxProduct(root):\n    pass\n',
  },
  visibleTests: [
    { args: [[1, 2, 3, 4, 5, 6]], expected: 110 },
    { args: [[1, 2, 3, 4, 5, 6, 7]], expected: 192 },
  ],
  hiddenTests: [
    { args: [[2, 3, 9, 3, 2]], expected: 90 },
    { args: [[3, 7, 2, 2, 6, null, 1]], expected: 90 },
    { args: [[1, 1]], expected: 1 },
    { args: [[2, 3, 4]], expected: 20 },
    { args: [[1, 2, 3]], expected: 9 },
  ],
};
