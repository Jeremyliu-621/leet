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
function verticalTraversalRunner(arr) { return verticalTraversal(__fromArray__(arr)); }
`.trim();

const PY_PREAMBLE = `
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

def __from_array__(raw):
    arr = raw.to_py() if hasattr(raw, 'to_py') else list(raw)
    arr = [int(v) if isinstance(v, (int, float)) and not isinstance(v, bool) else None for v in arr]
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

def verticalTraversalRunner(arr):
    return verticalTraversal(__from_array__(arr))
`.trim();

export const problem: Problem = {
  id: 'vertical-order-traversal',
  title: 'Vertical Order Traversal of a Binary Tree',
  difficulty: 'hard',
  tags: ['tree'],
  description: `Given the \`root\` of a binary tree, calculate the **vertical order traversal** of the binary tree.

For each node at position \`(row, col)\`, its left child is at \`(row + 1, col - 1)\` and its right child is at \`(row + 1, col + 1)\`. The root starts at \`(0, 0)\`.

The **vertical order traversal** is a list of all non-empty columns (sorted by column index from left to right). For each column, list the nodes in that column from top to bottom, breaking ties in the same row by sorting node values.

> **Note:** A \`TreeNode\` class is pre-defined. Call \`verticalTraversal(root)\` where root is a \`TreeNode\`.`,
  constraints: [
    'The number of nodes in the tree is in the range [1, 1000]',
    '0 <= Node.val <= 1000',
  ],
  examples: [
    {
      input: 'root = [3,9,20,null,null,15,7]',
      output: '[[9],[3,15],[20],[7]]',
      explanation:
        'Node 9 is alone in col -1. Nodes 3 (row 0) and 15 (row 2) share col 0. Node 20 is in col 1. Node 7 is in col 2.',
    },
    {
      input: 'root = [1,2,3,4,5,6,7]',
      output: '[[4],[2],[1,5,6],[3],[7]]',
      explanation:
        'Nodes 5 and 6 both land in col 0 at row 2; they are tied on row, so sorted by value: 5 then 6.',
    },
  ],
  hints: [
    'Assign each node a `(row, col)` coordinate during a DFS/BFS traversal starting at the root with `(0, 0)`. Left child gets `(row+1, col-1)`, right child gets `(row+1, col+1)`.',
    'Collect all `(col, row, val)` triples into an array, then sort by col first, then row, then val to break ties.',
    'Group the sorted triples by column using a Map (or by finding min/max col). Each column\'s group becomes one inner array in the result.',
  ],
  functionName: 'verticalTraversalRunner',
  params: ['root'],
  preamble: { javascript: JS_PREAMBLE, python: PY_PREAMBLE },
  starterCode: {
    javascript:
      '// TreeNode class is pre-defined. Implement the function below:\nfunction verticalTraversal(root) {\n  \n}\n',
    typescript: "function verticalTraversalRunner(root: (number | null)[]): number[][] {\n  \n}",

    python:
      '# TreeNode class is pre-defined. Implement the function below:\ndef verticalTraversal(root):\n    pass\n',
  },
  visibleTests: [
    { args: [[3, 9, 20, null, null, 15, 7]], expected: [[9], [3, 15], [20], [7]] },
    { args: [[1, 2, 3, 4, 5, 6, 7]], expected: [[4], [2], [1, 5, 6], [3], [7]] },
  ],
  hiddenTests: [
    { args: [[1]], expected: [[1]] },
    { args: [[3, 1, 2]], expected: [[1], [3], [2]] },
    { args: [[1, 2, 3, null, 4]], expected: [[2], [1, 4], [3]] },
  ],
};
