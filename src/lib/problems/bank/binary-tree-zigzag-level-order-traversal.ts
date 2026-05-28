import type { Problem } from '../types';

const JS_PREAMBLE = `
class TreeNode {
  constructor(val = 0, left = null, right = null) {
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
    if (arr[i] !== null && arr[i] !== undefined) { node.left = new TreeNode(arr[i]); queue.push(node.left); }
    i++;
    if (i < arr.length && arr[i] !== null && arr[i] !== undefined) { node.right = new TreeNode(arr[i]); queue.push(node.right); }
    i++;
  }
  return root;
}
function zigzagLevelOrderRunner(arr) {
  return zigzagLevelOrder(__fromArray__(arr));
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

def zigzagLevelOrderRunner(arr):
    return zigzagLevelOrder(__from_array__(arr))
`.trim();

export const problem: Problem = {
  id: 'binary-tree-zigzag-level-order-traversal',
  title: 'Binary Tree Zigzag Level Order Traversal',
  difficulty: 'medium',
  tags: ['tree'],
  description: `Given the \`root\` of a binary tree, return the **zigzag level order traversal** of its nodes' values (i.e., from left to right, then right to left for the next level and alternate between).

> **Note:** The tree is represented as a BFS-level array where \`null\` marks a missing child.`,
  constraints: [
    'The number of nodes in the tree is in the range [0, 2000].',
    '-100 <= Node.val <= 100',
  ],
  examples: [
    {
      input: 'root = [3,9,20,null,null,15,7]',
      output: '[[3],[20,9],[15,7]]',
      explanation: 'Level 0 (left→right): [3]. Level 1 (right→left): [20,9]. Level 2 (left→right): [15,7].',
    },
    {
      input: 'root = [1]',
      output: '[[1]]',
      explanation: 'Single node returns a single-element result.',
    },
    {
      input: 'root = []',
      output: '[]',
      explanation: 'Empty tree returns empty array.',
    },
  ],
  hints: [
    'Perform standard BFS level-order traversal. For each level, collect all values.',
    'Track the current level with a boolean `leftToRight`. If false, reverse the level\'s array before adding it to the result.',
    'Toggle `leftToRight` after each level.',
  ],
  functionName: 'zigzagLevelOrderRunner',
  params: ['root'],
  preamble: { javascript: JS_PREAMBLE, python: PY_PREAMBLE },
  starterCode: {
    javascript: `// TreeNode is pre-defined. Implement the function below:
function zigzagLevelOrder(root) {

}`,
    python: `# TreeNode is pre-defined. Implement the function below:
def zigzagLevelOrder(root):
    pass`,
  },
  visibleTests: [
    { args: [[3, 9, 20, null, null, 15, 7]], expected: [[3], [20, 9], [15, 7]] },
    { args: [[1]], expected: [[1]] },
    { args: [[]], expected: [] },
  ],
  hiddenTests: [
    { args: [[1, 2, 3]], expected: [[1], [3, 2]] },
    { args: [[1, 2, 3, 4, 5]], expected: [[1], [3, 2], [4, 5]] },
    { args: [[1, 2, 3, 4, 5, 6, 7]], expected: [[1], [3, 2], [4, 5, 6, 7]] },
    { args: [[5, 2, 6, 1, 3, null, null]], expected: [[5], [6, 2], [1, 3]] },
    { args: [[1, null, 2, null, 3]], expected: [[1], [2], [3]] },
  ],
};
