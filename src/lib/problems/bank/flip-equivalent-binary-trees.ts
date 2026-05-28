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
function flipEquivRunner(arr1, arr2) { return flipEquiv(__fromArray__(arr1), __fromArray__(arr2)); }
`.trim();

const PY_PREAMBLE = `
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

def __from_array__(raw):
    raw_list = raw.to_py() if hasattr(raw, 'to_py') else list(raw)
    arr = [int(v) if isinstance(v, (int, float)) else None for v in raw_list]
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

def flipEquivRunner(arr1, arr2):
    return flipEquiv(__from_array__(arr1), __from_array__(arr2))
`.trim();

export const problem: Problem = {
  id: 'flip-equivalent-binary-trees',
  title: 'Flip Equivalent Binary Trees',
  difficulty: 'medium',
  tags: ['tree'],
  description: `A binary tree X is **flip equivalent** to a binary tree Y if we can make X equal to Y after some number of **flip operations**. A flip operation consists of choosing any node and swapping its left and right child subtrees.

Given the roots of two binary trees \`root1\` and \`root2\`, return \`true\` if the two trees are flip equivalent, or \`false\` otherwise.

Trees are represented as level-order arrays (BFS order), where \`null\` indicates a missing child.

**Approach:** Recurse on both trees simultaneously. Base cases: both null → \`true\`; one null → \`false\`; values differ → \`false\`. Otherwise, check if the children match either without flipping (left-left and right-right) or with flipping (left-right and right-left).`,
  constraints: [
    'The number of nodes in each tree is in the range [0, 100]',
    'Each node in the tree has a unique value in the range [0, 99]',
  ],
  examples: [
    {
      input:
        'root1 = [1,2,3,4,5,6,null,null,null,7,8], root2 = [1,3,2,null,6,4,5,null,null,null,null,8,7]',
      output: 'true',
      explanation:
        'The two trees are flip equivalent. We flipped at nodes with values 1, 3, and 5.',
    },
    {
      input: 'root1 = [], root2 = []',
      output: 'true',
      explanation: 'Both trees are empty.',
    },
    {
      input: 'root1 = [0,null,1], root2 = []',
      output: 'false',
      explanation: 'root1 has nodes but root2 is empty.',
    },
  ],
  hints: [
    'Start with base cases: if both nodes are null return true; if exactly one is null return false; if their values differ return false.',
    'Otherwise, try both possibilities: either the children are in the same order, or one tree\'s children are flipped relative to the other.',
    'Return true if either the non-flipped or the flipped recursive check succeeds.',
  ],
  functionName: 'flipEquivRunner',
  params: ['root1', 'root2'],
  preamble: { javascript: JS_PREAMBLE, python: PY_PREAMBLE },
  starterCode: {
    javascript:
      '// TreeNode class and flipEquivRunner wrapper are pre-defined.\n// Implement the function below:\nfunction flipEquiv(root1, root2) {\n  \n}\n',
    typescript: "function flipEquivRunner(root1: (number | null)[], root2: (number | null)[]): boolean {\n  \n}",

    python:
      '# TreeNode class and flipEquivRunner wrapper are pre-defined.\n# Implement the function below:\ndef flipEquiv(root1, root2):\n    pass\n',
  },
  visibleTests: [
    {
      args: [
        [1, 2, 3, 4, 5, 6, null, null, null, 7, 8],
        [1, 3, 2, null, 6, 4, 5, null, null, null, null, 8, 7],
      ],
      expected: true,
    },
    { args: [[], []], expected: true },
    { args: [[0, null, 1], []], expected: false },
  ],
  hiddenTests: [
    { args: [[1, 2], [1, null, 2]], expected: true },
    { args: [[1, 2, 3], [1, 3, 2]], expected: true },
    { args: [[1, 2, 3], [1, 2, 4]], expected: false },
    { args: [[1], [1]], expected: true },
  ],
};
