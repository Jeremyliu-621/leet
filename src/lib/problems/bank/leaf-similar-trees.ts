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
function leafSimilarRunner(arr1, arr2) { return leafSimilar(__fromArray__(arr1), __fromArray__(arr2)); }
`.trim();

const PY_PREAMBLE = `
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

def __from_array__(arr):
    if hasattr(arr, 'to_py'):
        raw = arr.to_py()
    else:
        raw = list(arr)
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

def leafSimilarRunner(arr1, arr2):
    return leafSimilar(__from_array__(arr1), __from_array__(arr2))
`.trim();

export const problem: Problem = {
  id: 'leaf-similar-trees',
  title: 'Leaf-Similar Trees',
  difficulty: 'easy',
  tags: ['tree'],
  description: `Consider all the leaves of a binary tree. From left to right order, the values of those leaves form a **leaf value sequence**.

Two binary trees are considered **leaf-similar** if their leaf value sequences are the same.

Return \`true\` if and only if the two given trees are leaf-similar.

> **Note:** A \`TreeNode\` class is pre-defined. Nodes have \`val\`, \`left\`, and \`right\` fields.`,
  constraints: [
    'The number of nodes in each tree is in the range [1, 200]',
    'Both of the given trees will have values in the range [0, 200]',
  ],
  examples: [
    {
      input: 'root1 = [3,5,1,6,2,9,8,null,null,7,4], root2 = [3,5,1,6,7,4,2,null,null,null,null,null,null,9,8]',
      output: 'true',
      explanation: 'Both trees have leaf sequence [6,7,4,9,8].',
    },
    {
      input: 'root1 = [1,2,3], root2 = [1,3,2]',
      output: 'false',
      explanation: 'First tree has leaf sequence [2,3]; second has [3,2].',
    },
  ],
  hints: [
    'Write a helper that collects all leaf values left-to-right using DFS.',
    'A node is a leaf if it has no left or right child.',
    'Compare the two leaf sequences for equality.',
  ],
  functionName: 'leafSimilarRunner',
  params: ['root1', 'root2'],
  preamble: { javascript: JS_PREAMBLE, python: PY_PREAMBLE },
  starterCode: {
    javascript:
      '// TreeNode class is pre-defined. Implement the function below:\nfunction leafSimilar(root1, root2) {\n  \n}\n',
    typescript: "function leafSimilarRunner(root1: (number | null)[], root2: (number | null)[]): boolean {\n  \n}",

    python:
      '# TreeNode class is pre-defined. Implement the function below:\ndef leafSimilar(root1, root2):\n    pass\n',
  },
  visibleTests: [
    {
      args: [
        [3, 5, 1, 6, 2, 9, 8, null, null, 7, 4],
        [3, 5, 1, 6, 7, 4, 2, null, null, null, null, null, null, 9, 8],
      ],
      expected: true,
    },
    { args: [[1, 2, 3], [1, 3, 2]], expected: false },
    { args: [[1], [1]], expected: true },
  ],
  hiddenTests: [
    { args: [[1, 2], [2, null, 1]], expected: false },
    { args: [[1, 2, 1], [1, 1, 2]], expected: false },
    { args: [[1, 2, 3], [1, 2, 3]], expected: true },
    { args: [[1, 2], [1, 2]], expected: true },
  ],
};
