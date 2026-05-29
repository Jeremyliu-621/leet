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
function hasPathSumRunner(arr, targetSum) {
  return hasPathSum(__fromArray__(arr), targetSum);
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

def hasPathSumRunner(arr, targetSum):
    return hasPathSum(__from_array__(arr), int(targetSum))
`.trim();

export const problem: Problem = {
  id: 'path-sum',
  title: 'Path Sum',
  difficulty: 'easy',
  tags: ['tree'],
  description: `Given the \`root\` of a binary tree and an integer \`targetSum\`, return \`true\` if the tree has a **root-to-leaf** path such that adding up all the values along the path equals \`targetSum\`.

A **leaf** is a node with no children.

Trees are represented as level-order arrays where \`null\` indicates a missing child.

> **Note:** \`TreeNode\` class and \`hasPathSumRunner\` wrapper are pre-defined. Implement \`hasPathSum(root, targetSum)\`.`,
  constraints: [
    'The number of nodes in the tree is in the range [0, 5000].',
    '-1000 <= Node.val <= 1000',
    '-1000 <= targetSum <= 1000',
  ],
  examples: [
    {
      input: 'root = [5,4,8,11,null,13,4,7,2,null,null,null,1], targetSum = 22',
      output: 'true',
      explanation: 'Path 5→4→11→2 sums to 22.',
    },
    {
      input: 'root = [1,2,3], targetSum = 5',
      output: 'false',
      explanation: 'No path sums to 5.',
    },
    {
      input: 'root = [], targetSum = 0',
      output: 'false',
      explanation: 'Empty tree has no path.',
    },
  ],
  hints: [
    'Use DFS. At each node, subtract the node value from targetSum and recurse.',
    'A leaf is reached when both left and right are null. At a leaf, return true if remaining targetSum equals the leaf value.',
    'The base case for a null node is false.',
  ],
  functionName: 'hasPathSumRunner',
  params: ['root', 'targetSum'],
  preamble: { javascript: JS_PREAMBLE, python: PY_PREAMBLE },
  starterCode: {
    javascript: '// TreeNode class and hasPathSumRunner wrapper are pre-defined.\n// Implement the function below:\nfunction hasPathSum(root, targetSum) {\n  \n}\n',
    typescript: 'function hasPathSumRunner(root: (number | null)[], targetSum: number): boolean {\n  \n}',
    python: '# TreeNode class and hasPathSumRunner wrapper are pre-defined.\n# Implement the function below:\ndef hasPathSum(root, targetSum):\n    pass\n',
  },
  visibleTests: [
    { args: [[5, 4, 8, 11, null, 13, 4, 7, 2, null, null, null, 1], 22], expected: true },
    { args: [[1, 2, 3], 5], expected: false },
    { args: [[], 0], expected: false },
  ],
  hiddenTests: [
    { args: [[1], 1], expected: true },
    { args: [[1], 0], expected: false },
    { args: [[1, 2], 1], expected: false },
    { args: [[1, 2], 3], expected: true },
    { args: [[1, null, 2], 3], expected: true },
    { args: [[-5, 4, 8, 11, null, 13, 4, 7, 2, null, null, null, 1], 17], expected: true },
    { args: [[1, 2, 3, 4, 5], 8], expected: true },
    { args: [[1, 2, 3, 4, 5], 7], expected: true },
  ],
};
