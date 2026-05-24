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
function hasSumRunner(arr, targetSum) { return hasPathSum(__fromArray__(arr), targetSum); }
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

def hasSumRunner(arr, targetSum):
    return hasPathSum(__from_array__(arr), int(targetSum))
`.trim();

export const problem: Problem = {
  id: 'path-sum',
  title: 'Path Sum',
  difficulty: 'easy',
  tags: ['tree'],
  description: `Given the root of a binary tree and an integer \`targetSum\`, return \`true\` if the tree has a **root-to-leaf path** such that adding up all the values along the path equals \`targetSum\`.

A **leaf** is a node with no children.

Trees are represented as level-order arrays (BFS order), where \`null\` indicates a missing child.

**Approach:** Subtract the current node's value from the target at each step. At a leaf, return \`true\` if the remaining target equals zero.`,
  constraints: [
    'The number of nodes in the tree is in the range [0, 5000]',
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
      explanation: 'Paths are 1→2 (sum 3) and 1→3 (sum 4). Neither equals 5.',
    },
  ],
  hints: [
    'Recurse: at each node, subtract its value from the target and recurse on children.',
    'At a leaf, check if the remaining target is zero.',
    'Base case: an empty tree (null) returns false.',
  ],
  functionName: 'hasSumRunner',
  params: ['root', 'targetSum'],
  preamble: { javascript: JS_PREAMBLE, python: PY_PREAMBLE },
  starterCode: {
    javascript:
      '// TreeNode class and hasSumRunner wrapper are pre-defined.\n// Implement the function below:\nfunction hasPathSum(root, targetSum) {\n  \n}\n',
    python:
      '# TreeNode class and hasSumRunner wrapper are pre-defined.\n# Implement the function below:\ndef hasPathSum(root, targetSum):\n    pass\n',
  },
  visibleTests: [
    { args: [[5, 4, 8, 11, null, 13, 4, 7, 2, null, null, null, 1], 22], expected: true },
    { args: [[1, 2, 3], 5], expected: false },
    { args: [[], 0], expected: false },
  ],
  hiddenTests: [
    { args: [[1, 2], 1], expected: false },
    { args: [[1, 2], 3], expected: true },
    { args: [[-5, 4, 8, 11, null, 13, 4, 7, 2, null, null, null, 1], 17], expected: true },
    { args: [[1, 2, 3], 3], expected: true },
  ],
};
