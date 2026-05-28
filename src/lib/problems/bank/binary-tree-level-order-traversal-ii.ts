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
function levelOrderBottomRunner(arr) {
  return levelOrderBottom(__fromArray__(arr));
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

def levelOrderBottomRunner(arr):
    return levelOrderBottom(__from_array__(arr))
`.trim();

export const problem: Problem = {
  id: 'binary-tree-level-order-traversal-ii',
  title: 'Binary Tree Level Order Traversal II',
  difficulty: 'medium',
  tags: ['tree'],
  description: `Given the \`root\` of a binary tree, return the **bottom-up level order traversal** of its nodes' values (i.e., from left to right, level by level from leaf to root).

> **Note:** The tree is represented as a BFS-level array where \`null\` marks a missing child.`,
  constraints: [
    'The number of nodes in the tree is in the range [0, 2000].',
    '-1000 <= Node.val <= 1000',
  ],
  examples: [
    {
      input: 'root = [3,9,20,null,null,15,7]',
      output: '[[15,7],[9,20],[3]]',
      explanation: 'Level-order from bottom: deepest level first, root level last.',
    },
    {
      input: 'root = [1]',
      output: '[[1]]',
    },
    {
      input: 'root = []',
      output: '[]',
    },
  ],
  hints: [
    'Perform standard BFS level-order traversal, collecting each level into a sub-array.',
    'After collecting all levels, reverse the result array.',
    'Alternatively, use `result.unshift(level)` (JavaScript) or `result.insert(0, level)` (Python) instead of reversing at the end.',
  ],
  functionName: 'levelOrderBottomRunner',
  params: ['root'],
  preamble: { javascript: JS_PREAMBLE, python: PY_PREAMBLE },
  starterCode: {
    javascript: `// TreeNode is pre-defined. Implement the function below:
function levelOrderBottom(root) {

}`,
    python: `# TreeNode is pre-defined. Implement the function below:
def levelOrderBottom(root):
    pass`,
  },
  visibleTests: [
    { args: [[3, 9, 20, null, null, 15, 7]], expected: [[15, 7], [9, 20], [3]] },
    { args: [[1]], expected: [[1]] },
    { args: [[]], expected: [] },
  ],
  hiddenTests: [
    { args: [[1, 2, 3]], expected: [[2, 3], [1]] },
    { args: [[1, 2, 3, 4, 5]], expected: [[4, 5], [2, 3], [1]] },
    { args: [[1, 2, 3, 4, 5, 6, 7]], expected: [[4, 5, 6, 7], [2, 3], [1]] },
    { args: [[1, null, 2, null, 3]], expected: [[3], [2], [1]] },
    { args: [[5, 4, 8, 11, null, 13, 4]], expected: [[11, 13, 4], [4, 8], [5]] },
  ],
};
