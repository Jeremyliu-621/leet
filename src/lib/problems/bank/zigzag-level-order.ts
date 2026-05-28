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
function zigzagLevelOrderRunner(arr) { return zigzagLevelOrder(__fromArray__(arr)); }
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
        if raw is None:
            return None
    else:
        try:
            raw = list(arr)
        except TypeError:
            return None
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

def zigzagLevelOrderRunner(arr):
    return zigzagLevelOrder(__from_array__(arr))
`.trim();

export const problem: Problem = {
  id: 'zigzag-level-order',
  title: 'Binary Tree Zigzag Level Order Traversal',
  difficulty: 'medium',
  tags: ['tree'],
  description: `Given the \`root\` of a binary tree, return the **zigzag level order traversal** of its nodes' values — level 0 goes left-to-right, level 1 goes right-to-left, level 2 goes left-to-right, and so on.

> **Note:** A \`TreeNode\` class is pre-defined. Nodes have \`val\`, \`left\`, and \`right\` fields.`,
  constraints: [
    'The number of nodes in the tree is in the range [0, 2000]',
    '-100 <= Node.val <= 100',
  ],
  examples: [
    {
      input: 'root = [3,9,20,null,null,15,7]',
      output: '[[3],[20,9],[15,7]]',
      explanation:
        'Level 0 (left-to-right): [3]. Level 1 (right-to-left): [20,9]. Level 2 (left-to-right): [15,7].',
    },
    { input: 'root = [1]', output: '[[1]]' },
    {
      input: 'root = [-1,-2,-3]',
      output: '[[-1],[-3,-2]]',
      explanation: 'Level 0 (left-to-right): [-1]. Level 1 (right-to-left): [-3,-2].',
    },
  ],
  hints: [
    'BFS level-by-level. Track which direction (left-to-right or right-to-left) for each level.',
    'For left-to-right, push nodes to the result normally. For right-to-left, use `unshift` or reverse the collected level.',
    'Use a flag or check `level % 2` to alternate direction each level.',
  ],
  functionName: 'zigzagLevelOrderRunner',
  params: ['root'],
  preamble: { javascript: JS_PREAMBLE, python: PY_PREAMBLE },
  starterCode: {
    javascript:
      '// TreeNode class is pre-defined. Implement the function below:\nfunction zigzagLevelOrder(root) {\n  // BFS level by level, alternating direction\n}\n',
    python:
      '# TreeNode class is pre-defined. Implement the function below:\ndef zigzagLevelOrder(root):\n    # BFS level by level, alternating direction\n    pass\n',
  },
  visibleTests: [
    { args: [[3, 9, 20, null, null, 15, 7]], expected: [[3], [20, 9], [15, 7]] },
    { args: [[1]], expected: [[1]] },
    { args: [[-1, -2, -3]], expected: [[-1], [-3, -2]] },
  ],
  hiddenTests: [
    { args: [[1, 2, 3, 4, null, null, 5]], expected: [[1], [3, 2], [4, 5]] },
    { args: [[1, 2, 3, 4, 5, 6, 7]], expected: [[1], [3, 2], [4, 5, 6, 7]] },
    { args: [null], expected: [] },
    { args: [[1, 2, null, 3, null, 4]], expected: [[1], [2], [3], [4]] },
  ],
};
