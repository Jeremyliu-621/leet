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
function longestConsecutiveRunner(arr) {
  return longestConsecutive(__fromArray__(arr));
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

def longestConsecutiveRunner(arr):
    return longestConsecutive(__from_array__(arr))
`.trim();

export const problem: Problem = {
  id: 'binary-tree-longest-consecutive-sequence',
  title: 'Binary Tree Longest Consecutive Sequence',
  difficulty: 'medium',
  tags: ['tree'],
  description: `Given the \`root\` of a binary tree, return the length of the **longest consecutive sequence path**.

A **consecutive sequence path** is a path where the values **increase by one** along the path. The path can start at any node and go only downward (from parent to child nodes).

> **Note:** The tree is represented as a BFS-level array where \`null\` marks a missing child.`,
  constraints: [
    'The number of nodes in the tree is in the range [1, 3 * 10^4].',
    '-3 * 10^4 <= Node.val <= 3 * 10^4',
  ],
  examples: [
    {
      input: 'root = [1,null,3,2,4,null,null,null,5]',
      output: '3',
      explanation: 'Longest consecutive sequence path is 3→4→5, so return 3.',
    },
    {
      input: 'root = [2,null,3,2,null,1]',
      output: '2',
      explanation: 'Longest consecutive sequence path is 2→3, so return 2.',
    },
  ],
  hints: [
    'Use DFS traversal. Pass along the current sequence length and the expected next value (parent.val + 1).',
    'At each node, if the node\'s value equals the expected next value, increment the length; otherwise reset to 1. Update a global maximum.',
    '`function dfs(node, expected, len) { if (!node) return; len = node.val === expected ? len + 1 : 1; max = Math.max(max, len); dfs(node.left, node.val + 1, len); dfs(node.right, node.val + 1, len); }`',
  ],
  functionName: 'longestConsecutiveRunner',
  params: ['root'],
  preamble: { javascript: JS_PREAMBLE, python: PY_PREAMBLE },
  starterCode: {
    javascript: `// TreeNode is pre-defined. Implement the function below:
function longestConsecutive(root) {

}`,
    typescript: "function longestConsecutiveRunner(root: (number | null)[]): number {\n\n}",

    python: `# TreeNode is pre-defined. Implement the function below:
def longestConsecutive(root):
    pass`,
  },
  visibleTests: [
    { args: [[1, null, 3, 2, 4, null, null, null, 5]], expected: 3 },
    { args: [[2, null, 3, 2, null, 1]], expected: 2 },
    { args: [[1]], expected: 1 },
  ],
  hiddenTests: [
    { args: [[1, 2]], expected: 2 },
    { args: [[3, 2, 4, 1, null, 3, 5]], expected: 3 },
    { args: [[5, 4, 6, 3, null, null, 7]], expected: 3 },
    { args: [[1, 2, 3, 3, null, 4, 5]], expected: 3 },
    { args: [[1, null, 2, null, 3, null, 4]], expected: 4 },
    { args: [[10, 9, 11, 8, null, null, 12]], expected: 3 },
  ],
};
