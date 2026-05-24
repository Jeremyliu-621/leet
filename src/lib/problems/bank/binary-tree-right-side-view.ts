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
function rightSideViewRunner(arr) { return rightSideView(__fromArray__(arr)); }
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

def rightSideViewRunner(arr):
    return rightSideView(__from_array__(arr))
`.trim();

export const problem: Problem = {
  id: 'binary-tree-right-side-view',
  title: 'Binary Tree Right Side View',
  difficulty: 'medium',
  tags: ['tree'],
  description: `Given the root of a binary tree, imagine yourself standing on the **right side** of it, return the values of the nodes you can see ordered from top to bottom.

Trees are represented as level-order arrays (BFS order), where \`null\` indicates a missing child.

**Approach:** BFS level by level. For each level, the last node in the queue at that level is the rightmost visible node. Collect that node's value for each level.`,
  constraints: [
    'The number of nodes in the tree is in the range [0, 100]',
    '-100 <= Node.val <= 100',
  ],
  examples: [
    {
      input: 'root = [1,2,3,null,5,null,4]',
      output: '[1,3,4]',
      explanation: 'From the right: 1 (level 0), 3 (level 1), 4 (level 2). Node 5 is hidden behind 4.',
    },
    {
      input: 'root = [1,null,3]',
      output: '[1,3]',
      explanation: 'Root 1 is visible, then its right child 3.',
    },
  ],
  hints: [
    'Use BFS. At the start of each level iteration, snapshot `size = queue.length`.',
    'Process exactly `size` nodes for the current level. The last one dequeued is the rightmost visible node.',
    'Alternatively, use DFS with a level parameter — right subtree first, left second. Only record a node if it\'s the first visited at its depth.',
  ],
  functionName: 'rightSideViewRunner',
  params: ['root'],
  preamble: { javascript: JS_PREAMBLE, python: PY_PREAMBLE },
  starterCode: {
    javascript:
      '// TreeNode class and rightSideViewRunner wrapper are pre-defined.\n// Implement the function below:\nfunction rightSideView(root) {\n  \n}\n',
    python:
      '# TreeNode class and rightSideViewRunner wrapper are pre-defined.\n# Implement the function below:\ndef rightSideView(root):\n    pass\n',
  },
  visibleTests: [
    { args: [[1, 2, 3, null, 5, null, 4]], expected: [1, 3, 4] },
    { args: [[1, null, 3]], expected: [1, 3] },
    { args: [[]], expected: [] },
  ],
  hiddenTests: [
    { args: [[1]], expected: [1] },
    { args: [[1, 2, 3, 4]], expected: [1, 3, 4] },
    { args: [[1, 2, null, 3]], expected: [1, 2, 3] },
    { args: [[1, 2, 3, 4, 5, 6, 7]], expected: [1, 3, 7] },
  ],
};
