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
function widthOfBinaryTreeRunner(arr) { return widthOfBinaryTree(__fromArray__(arr)); }
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
  id: 'maximum-width-of-binary-tree',
  title: 'Maximum Width of Binary Tree',
  difficulty: 'medium',
  tags: ['tree'],
  description: `Given the root of a binary tree, return the **maximum width** of the given tree.

The **width** of one level is defined as the length between the leftmost and the rightmost non-null nodes, including the null nodes in between.

Trees are represented as level-order (BFS) arrays where \`null\` marks a missing child.

> **Note:** A \`TreeNode\` class and a \`widthOfBinaryTreeRunner(arr)\` wrapper are pre-defined. Implement \`widthOfBinaryTree(root)\`.`,
  constraints: [
    'The number of nodes in the tree is in the range [1, 3000]',
    '-100 <= Node.val <= 100',
  ],
  examples: [
    {
      input: 'root = [1,3,2,5,3,null,9]',
      output: '4',
      explanation: 'The third level has nodes 5, 3, null, 9. Width = rightmost_index - leftmost_index + 1 = 4.',
    },
    {
      input: 'root = [1,3,2,5,null,null,9,6,null,7]',
      output: '7',
      explanation: 'The fourth level has nodes 6, null, null, null, null, null, 7. Width = 7.',
    },
    {
      input: 'root = [1,3,2,5]',
      output: '2',
      explanation: 'The second level has width 2 (nodes 3 and 2).',
    },
  ],
  hints: [
    'Use BFS level-by-level. Assign each node an index: the root is 0, and for a node with index `i`, its left child has index `2*i` and right child `2*i + 1`.',
    'At each level, the width is `rightmost_index - leftmost_index + 1`. Track the first and last index at each level.',
    'To avoid integer overflow with large indices, normalize: at the start of each level, subtract the leftmost index from all indices on that level.',
  ],
  functionName: 'widthOfBinaryTreeRunner',
  params: ['root'],
  preamble: { javascript: JS_PREAMBLE, python: PY_PREAMBLE },
  starterCode: {
    javascript:
      '// TreeNode class and widthOfBinaryTreeRunner wrapper are pre-defined.\nfunction widthOfBinaryTree(root) {\n  \n}\n',
    typescript:
      'function widthOfBinaryTreeRunner(root: (number | null)[]): number {\n  \n}',
    python:
      '# TreeNode class and widthOfBinaryTreeRunner wrapper are pre-defined.\ndef widthOfBinaryTree(root):\n    pass\n',
  },
  visibleTests: [
    { args: [[1, 3, 2, 5, 3, null, 9]], expected: 4 },
    { args: [[1, 3, 2, 5, null, null, 9, 6, null, 7]], expected: 7 },
    { args: [[1, 3, 2, 5]], expected: 2 },
  ],
  hiddenTests: [
    { args: [[1]], expected: 1 },
    { args: [[1, 2, 3]], expected: 2 },
    { args: [[1, 2, 3, 4, 5, 6, 7]], expected: 4 },
    { args: [[1, 2, 3, 4, null, null, 5, 6, null, null, 7]], expected: 8 },
    { args: [[1, 2]], expected: 1 },
    { args: [[1, 1, 1, 1, null, 1, null, 1, null, 1]], expected: 5 },
  ],
};
