import type { Problem } from '../types';

const JS_PREAMBLE = `
class TreeNode {
  constructor(val = 0, left = null, right = null) {
    this.val = val; this.left = left; this.right = right;
  }
}
function __fromArray__(arr) {
  if (!arr || arr.length === 0 || arr[0] === null) return null;
  const root = new TreeNode(arr[0]);
  const queue = [root];
  let i = 1;
  while (queue.length > 0 && i < arr.length) {
    const node = queue.shift();
    if (arr[i] !== null && arr[i] !== undefined) { node.left = new TreeNode(arr[i]); queue.push(node.left); }
    i++;
    if (i < arr.length && arr[i] !== null && arr[i] !== undefined) { node.right = new TreeNode(arr[i]); queue.push(node.right); }
    i++;
  }
  return root;
}
function pathSumIIIRunner(arr, targetSum) { return pathSum(__fromArray__(arr), targetSum); }
`.trim();

const PY_PREAMBLE = `
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

def __from_array__(arr):
    if arr is None:
        return None
    if hasattr(arr, 'to_py'):
        raw = arr.to_py()
    else:
        raw = list(arr)
    arr = [int(v) if isinstance(v, (int, float)) and not isinstance(v, bool) else None for v in raw]
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

def pathSumIIIRunner(arr, target):
    return pathSum(__from_array__(arr), int(target))
`.trim();

export const problem: Problem = {
  id: 'path-sum-iii',
  title: 'Path Sum III',
  difficulty: 'medium',
  tags: ['tree'],
  description: `Given the \`root\` of a binary tree and an integer \`targetSum\`, return the number of paths where the sum of the values along the path equals \`targetSum\`.

A path must travel **downward** (from parent to child) but does **not** need to start at the root or end at a leaf.

> **Note:** A \`TreeNode\` class is pre-defined. Nodes have \`val\`, \`left\`, and \`right\` fields.`,
  constraints: [
    'The number of nodes in the tree is in the range [0, 1000]',
    '-10⁹ <= Node.val <= 10⁹',
    '-1000 <= targetSum <= 1000',
  ],
  examples: [
    {
      input: 'root = [10,5,-3,3,2,null,11,3,-2,null,1], targetSum = 8',
      output: '3',
      explanation:
        'The three paths summing to 8 are: 5→3, -3→11, and 5→2→1.',
    },
    {
      input: 'root = [5,4,8,11,null,13,4,7,2,null,null,5,1], targetSum = 22',
      output: '3',
      explanation:
        'The three paths summing to 22 are: 5→4→11→2, 4→11→7, and 5→8→4→5.',
    },
    {
      input: 'root = [1], targetSum = 1',
      output: '1',
    },
  ],
  hints: [
    'At each node, you need to count paths ending at that node which sum to `targetSum`. A brute-force approach runs DFS from every node — O(n²) overall.',
    'For an O(n) solution, use a prefix sum hash map as you traverse. Track `currentSum` from the root. At each node, the number of valid paths ending here is the count of ancestors where `currentSum - targetSum` equals their prefix sum.',
    'Initialize the map with `{0: 1}` to handle paths that start at the root. Remember to remove the current node\'s prefix sum from the map when backtracking.',
  ],
  functionName: 'pathSumIIIRunner',
  params: ['root', 'targetSum'],
  preamble: { javascript: JS_PREAMBLE, python: PY_PREAMBLE },
  starterCode: {
    javascript:
      '// TreeNode class is pre-defined. Implement the function below:\nfunction pathSum(root, targetSum) {\n  \n}\n',
    python:
      '# TreeNode class is pre-defined. Implement the function below:\ndef pathSum(root, targetSum):\n    pass\n',
  },
  visibleTests: [
    { args: [[10, 5, -3, 3, 2, null, 11, 3, -2, null, 1], 8], expected: 3 },
    { args: [[5, 4, 8, 11, null, 13, 4, 7, 2, null, null, 5, 1], 22], expected: 3 },
    { args: [[1], 1], expected: 1 },
  ],
  hiddenTests: [
    { args: [[0, 1, 1], 1], expected: 4 },
    { args: [[1, null, 2, null, 3, null, 4, null, 5], 3], expected: 2 },
    { args: [[-2, -1], -1], expected: 1 },
  ],
};
