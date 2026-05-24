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
function zigzagRunner(arr) { return zigzagLevelOrder(__fromArray__(arr)); }
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

def zigzagRunner(arr):
    return zigzagLevelOrder(__from_array__(arr))
`.trim();

export const problem: Problem = {
  id: 'binary-tree-zigzag-traversal',
  title: 'Binary Tree Zigzag Level Order Traversal',
  difficulty: 'medium',
  tags: ['tree'],
  description: `Given the \`root\` of a binary tree, return the **zigzag level order traversal** of its nodes' values. That is, traverse level by level, but alternate the direction: left-to-right for even levels (0-indexed) and right-to-left for odd levels.

Trees are represented as level-order arrays (BFS order), where \`null\` indicates a missing child.

**Example:** For the tree \`[3, 9, 20, null, null, 15, 7]\`:
- Level 0 (left→right): \`[3]\`
- Level 1 (right→left): \`[20, 9]\`
- Level 2 (left→right): \`[15, 7]\`

**Approach:** Use BFS with a queue. At the start of each level, snapshot the queue size and collect that many nodes' values. If the current depth is odd, reverse the collected values before appending them to the result.`,
  constraints: [
    'The number of nodes in the tree is in the range [0, 2000]',
    '-100 <= Node.val <= 100',
  ],
  examples: [
    {
      input: 'root = [3, 9, 20, null, null, 15, 7]',
      output: '[[3], [20, 9], [15, 7]]',
      explanation: 'Level 0 left→right: [3]. Level 1 right→left: [20, 9]. Level 2 left→right: [15, 7].',
    },
    {
      input: 'root = []',
      output: '[]',
      explanation: 'Empty tree — no levels to traverse.',
    },
    {
      input: 'root = [1]',
      output: '[[1]]',
      explanation: 'Single node — one level, direction is left→right.',
    },
  ],
  hints: [
    'Use BFS with a queue, collecting one level at a time. At each level, snapshot `size = queue.length`, then dequeue exactly `size` nodes.',
    'Collect each level\'s values into an array. If the level index is odd (1, 3, 5, …), reverse that array before pushing it to the result.',
    'Enqueue each dequeued node\'s non-null children (left then right) as you process each level. The depth counter toggles the direction for the next level.',
  ],
  functionName: 'zigzagRunner',
  params: ['root'],
  preamble: { javascript: JS_PREAMBLE, python: PY_PREAMBLE },
  starterCode: {
    javascript:
      '// TreeNode class and zigzagRunner wrapper are pre-defined.\n// Implement the function below:\nfunction zigzagLevelOrder(root) {\n  \n}\n',
    python:
      '# TreeNode class and zigzagRunner wrapper are pre-defined.\n# Implement the function below:\ndef zigzagLevelOrder(root):\n    pass\n',
  },
  visibleTests: [
    { args: [[3, 9, 20, null, null, 15, 7]], expected: [[3], [20, 9], [15, 7]] },
    { args: [[]], expected: [] },
    { args: [[1]], expected: [[1]] },
  ],
  hiddenTests: [
    { args: [[1, 2, 3, 4, 5]], expected: [[1], [3, 2], [4, 5]] },
    { args: [[1, 2, 3, 4, 5, 6, 7]], expected: [[1], [3, 2], [4, 5, 6, 7]] },
    { args: [[1, 2]], expected: [[1], [2]] },
    { args: [[3, 1, 2]], expected: [[3], [2, 1]] },
  ],
};
