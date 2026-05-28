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
function widthOfBinaryTreeRunner(arr) {
  return widthOfBinaryTree(__fromArray__(arr));
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

def widthOfBinaryTreeRunner(arr):
    return widthOfBinaryTree(__from_array__(arr))
`.trim();

export const problem: Problem = {
  id: 'maximum-width-binary-tree',
  title: 'Maximum Width of Binary Tree',
  difficulty: 'medium',
  tags: ['tree'],
  description: `Given the \`root\` of a binary tree, return the **maximum width** of the tree.

The width of one level is defined as the length between the **leftmost** and **rightmost** non-null nodes, including null nodes in between.

The answer is guaranteed to be in the range of a 32-bit signed integer.`,
  constraints: [
    'The number of nodes in the tree is in the range [1, 3000]',
    '-100 <= Node.val <= 100',
  ],
  examples: [
    {
      input: 'root = [1,3,2,5,3,null,9]',
      output: '4',
      explanation: 'Level 2 has width 4 (nodes 5, 3, null, 9).',
    },
    {
      input: 'root = [1,3,2,5,null,null,9,6,null,7]',
      output: '7',
      explanation: 'Level 3 has width 7 (node 6 to node 7).',
    },
    {
      input: 'root = [1,3,2,5]',
      output: '2',
    },
  ],
  hints: [
    'Use BFS. Assign a positional index to each node: root = 0. Left child of node at index `i` gets index `2*i`. Right child gets `2*i + 1`.',
    'For each level, the width = last_index - first_index + 1. Track the indices alongside the nodes in the BFS queue.',
    'To prevent integer overflow for large trees, normalize indices by subtracting the leftmost index at each level.',
  ],
  functionName: 'widthOfBinaryTreeRunner',
  params: ['arr'],
  preamble: { javascript: JS_PREAMBLE, python: PY_PREAMBLE },
  starterCode: {
    javascript: `// TreeNode class and widthOfBinaryTreeRunner wrapper are pre-defined.
function widthOfBinaryTree(root) {
  // Return the maximum width of the binary tree
}
`,
    python: `# TreeNode class and widthOfBinaryTreeRunner wrapper are pre-defined.
def widthOfBinaryTree(root):
    # Return the maximum width of the binary tree
    pass
`,
  },
  visibleTests: [
    { args: [[1, 3, 2, 5, 3, null, 9]], expected: 4 },
    { args: [[1, 3, 2, 5, null, null, 9, 6, null, 7]], expected: 7 },
    { args: [[1, 3, 2, 5]], expected: 2 },
  ],
  hiddenTests: [
    { args: [[1]], expected: 1 },
    { args: [[1, 2, 3, 4, 5, 6, 7]], expected: 4 },
    { args: [[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]], expected: 8 },
    { args: [[1, 2, 3, 4, null, null, 5]], expected: 4 },
  ],
};
