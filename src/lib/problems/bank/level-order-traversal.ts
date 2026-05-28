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
function levelOrderRunner(arr) { return levelOrder(__fromArray__(arr)); }
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

def levelOrderRunner(arr):
    return levelOrder(__from_array__(arr))
`.trim();

export const problem: Problem = {
  id: 'level-order-traversal',
  title: 'Binary Tree Level Order Traversal',
  difficulty: 'medium',
  tags: ['tree'],
  description: `Given the root of a binary tree, return the **level order traversal** of its nodes' values (i.e., from left to right, level by level).

Trees are represented as level-order arrays (BFS order), where \`null\` indicates a missing child.

**Approach:** Use a queue (BFS). At the start of each iteration, the queue holds all nodes for the current level. Snapshot its size, dequeue exactly that many nodes, collecting their values, then enqueue their non-null children. Repeat until the queue is empty.`,
  constraints: [
    'The number of nodes in the tree is in the range [0, 2000]',
    '-1000 <= Node.val <= 1000',
  ],
  examples: [
    {
      input: 'root = [3,9,20,null,null,15,7]',
      output: '[[3],[9,20],[15,7]]',
      explanation: 'Level 0: [3], Level 1: [9, 20], Level 2: [15, 7].',
    },
    {
      input: 'root = [1]',
      output: '[[1]]',
      explanation: 'Single node — one level.',
    },
  ],
  hints: [
    'Use BFS with a queue. Start by enqueuing the root.',
    'At each level, record `size = queue.length`, then dequeue exactly `size` nodes to collect one level of values.',
    'Enqueue each dequeued node\'s non-null children before moving to the next level.',
  ],
  functionName: 'levelOrderRunner',
  params: ['root'],
  preamble: { javascript: JS_PREAMBLE, python: PY_PREAMBLE },
  starterCode: {
    javascript:
      '// TreeNode class and levelOrderRunner wrapper are pre-defined.\n// Implement the function below:\nfunction levelOrder(root) {\n  \n}\n',
    typescript: "function levelOrderRunner(root: (number | null)[]): number[][] {\n  \n}",

    python:
      '# TreeNode class and levelOrderRunner wrapper are pre-defined.\n# Implement the function below:\ndef levelOrder(root):\n    pass\n',
  },
  visibleTests: [
    { args: [[3, 9, 20, null, null, 15, 7]], expected: [[3], [9, 20], [15, 7]] },
    { args: [[1]], expected: [[1]] },
    { args: [[]], expected: [] },
  ],
  hiddenTests: [
    { args: [[1, 2, 3, 4, 5]], expected: [[1], [2, 3], [4, 5]] },
    { args: [[1, null, 2, null, 3]], expected: [[1], [2], [3]] },
    { args: [[1, 2, 3, 4, 5, 6, 7]], expected: [[1], [2, 3], [4, 5, 6, 7]] },
    { args: [[1, null, 2]], expected: [[1], [2]] },
  ],
};
