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
function getAllElementsRunner(arr1, arr2) {
  return getAllElements(__fromArray__(arr1), __fromArray__(arr2));
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
    a = [int(v) if isinstance(v, (int, float)) else None for v in raw_list]
    if not a or a[0] is None:
        return None
    root = TreeNode(a[0])
    queue = [root]
    i = 1
    while queue and i < len(a):
        node = queue.pop(0)
        if i < len(a) and a[i] is not None:
            node.left = TreeNode(a[i])
            queue.append(node.left)
        i += 1
        if i < len(a) and a[i] is not None:
            node.right = TreeNode(a[i])
            queue.append(node.right)
        i += 1
    return root

def getAllElementsRunner(arr1, arr2):
    return getAllElements(__from_array__(arr1), __from_array__(arr2))
`.trim();

export const problem: Problem = {
  id: 'all-elements-in-two-binary-search-trees',
  title: 'All Elements in Two Binary Search Trees',
  difficulty: 'medium',
  tags: ['tree', 'binary-search'],
  description: `Given two binary search trees \`root1\` and \`root2\`, return a list containing all the integers from both trees sorted in **ascending** order.

Trees are represented as level-order arrays where \`null\` indicates a missing child.

> **Note:** \`TreeNode\` class and \`getAllElementsRunner\` wrapper are pre-defined. Implement \`getAllElements(root1, root2)\`.`,
  constraints: [
    'The number of nodes in each tree is in the range [0, 5000].',
    '-10^5 <= Node.val <= 10^5',
  ],
  examples: [
    {
      input: 'root1 = [2,1,4], root2 = [1,0,3]',
      output: '[0,1,1,2,3,4]',
      explanation: 'In-order of tree1: [1,2,4]. In-order of tree2: [0,1,3]. Merged: [0,1,1,2,3,4].',
    },
    {
      input: 'root1 = [1,null,8], root2 = [8,1]',
      output: '[1,1,8,8]',
      explanation: 'tree1 = [1,8], tree2 = [1,8]. Merged sorted.',
    },
  ],
  hints: [
    'Collect all elements from both trees using in-order traversal (which gives sorted order for a BST). Merge the two sorted lists.',
    'In-order traversal of a BST produces elements in ascending order.',
    'Merge two sorted arrays in O(n+m): use two pointers, taking the smaller element each time.',
  ],
  functionName: 'getAllElementsRunner',
  params: ['root1', 'root2'],
  preamble: { javascript: JS_PREAMBLE, python: PY_PREAMBLE },
  starterCode: {
    javascript: '// TreeNode class and getAllElementsRunner wrapper are pre-defined.\n// Implement the function below:\nfunction getAllElements(root1, root2) {\n  \n}\n',
    typescript: 'function getAllElementsRunner(root1: (number | null)[], root2: (number | null)[]): number[] {\n  \n}',
    python: '# TreeNode class and getAllElementsRunner wrapper are pre-defined.\n# Implement the function below:\ndef getAllElements(root1, root2):\n    pass\n',
  },
  visibleTests: [
    { args: [[2, 1, 4], [1, 0, 3]], expected: [0, 1, 1, 2, 3, 4] },
    { args: [[1, null, 8], [8, 1]], expected: [1, 1, 8, 8] },
  ],
  hiddenTests: [
    { args: [[], []], expected: [] },
    { args: [[1], []], expected: [1] },
    { args: [[], [1]], expected: [1] },
    { args: [[5], [3]], expected: [3, 5] },
    { args: [[1, null, 2], [3, null, 4]], expected: [1, 2, 3, 4] },
    { args: [[3, 1, 4], [2, 0, 5]], expected: [0, 1, 2, 3, 4, 5] },
    { args: [[1, null, 3, 2], [5, null, 7, 6]], expected: [1, 2, 3, 5, 6, 7] },
  ],
};
