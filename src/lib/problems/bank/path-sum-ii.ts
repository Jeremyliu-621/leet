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
function pathSumRunner(arr, targetSum) {
  const res = pathSum(__fromArray__(arr), targetSum);
  res.sort((a, b) => { for (let i = 0; i < Math.min(a.length, b.length); i++) { if (a[i] !== b[i]) return a[i] - b[i]; } return a.length - b.length; });
  return res;
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

def pathSumRunner(arr, targetSum):
    res = pathSum(__from_array__(arr), int(targetSum))
    res.sort()
    return res
`.trim();

export const problem: Problem = {
  id: 'path-sum-ii',
  title: 'Path Sum II',
  difficulty: 'medium',
  tags: ['tree', 'backtracking'],
  description: `Given the \`root\` of a binary tree and an integer \`targetSum\`, return all **root-to-leaf** paths where the sum of the node values equals \`targetSum\`. Each path should be returned as a list of node values.

A **leaf** node is a node with no children.

Trees are represented as level-order arrays (BFS order), where \`null\` indicates a missing child.

> **Note:** \`TreeNode\` class and \`pathSumRunner\` wrapper are pre-defined. Implement \`pathSum(root, targetSum)\`.`,
  constraints: [
    'The number of nodes in the tree is in the range [0, 5000].',
    '-1000 <= Node.val <= 1000',
    '-1000 <= targetSum <= 1000',
  ],
  examples: [
    {
      input: 'root = [5,4,8,11,null,13,4,7,2,null,null,5,1], targetSum = 22',
      output: '[[5,4,11,2],[5,8,4,5]]',
      explanation:
        'Path 5→4→11→2 = 22 and path 5→8→4→5 = 22 both reach the target sum.',
    },
    {
      input: 'root = [1,2,3], targetSum = 5',
      output: '[]',
      explanation: 'No root-to-leaf path sums to 5.',
    },
    {
      input: 'root = [1,2], targetSum = 0',
      output: '[]',
      explanation: 'The only path (root to leaf 2) sums to 3, not 0.',
    },
  ],
  hints: [
    'Use DFS (pre-order traversal). At each node, add the value to the current path and subtract it from the remaining target.',
    'When you reach a leaf and remaining target equals the leaf value, you found a valid path.',
    'Use backtracking: push the node value onto a path array before recursing, and pop it after both recursive calls return.',
  ],
  functionName: 'pathSumRunner',
  params: ['root', 'targetSum'],
  preamble: { javascript: JS_PREAMBLE, python: PY_PREAMBLE },
  starterCode: {
    javascript:
      '// TreeNode class and pathSumRunner wrapper are pre-defined.\n// Implement the function below:\nfunction pathSum(root, targetSum) {\n  \n}\n',
    python:
      '# TreeNode class and pathSumRunner wrapper are pre-defined.\n# Implement the function below:\ndef pathSum(root, targetSum):\n    pass\n',
  },
  visibleTests: [
    {
      args: [[5, 4, 8, 11, null, 13, 4, 7, 2, null, null, 5, 1], 22],
      expected: [
        [5, 4, 11, 2],
        [5, 8, 4, 5],
      ],
    },
    { args: [[1, 2, 3], 5], expected: [] },
    { args: [[1, 2], 0], expected: [] },
  ],
  hiddenTests: [
    { args: [[], 0], expected: [] },
    { args: [[1], 1], expected: [[1]] },
    { args: [[1], 0], expected: [] },
    { args: [[1, 2, 3], 3], expected: [[1, 2]] },
    {
      args: [[1, 2, 3, 4, 5], 7],
      expected: [[1, 2, 4]],
    },
    {
      args: [[-2, null, -3], -5],
      expected: [[-2, -3]],
    },
  ],
};
