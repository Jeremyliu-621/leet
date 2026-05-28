import type { Problem } from '../types';

const JS_PREAMBLE = `
class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val; this.left = left; this.right = right;
  }
}
function __toArray__(root) {
  if (!root) return [];
  const result = [], queue = [root];
  while (queue.length) {
    const node = queue.shift();
    if (node === null) { result.push(null); continue; }
    result.push(node.val);
    queue.push(node.left ?? null);
    queue.push(node.right ?? null);
  }
  while (result.length && result[result.length - 1] === null) result.pop();
  return result;
}
function bstFromPreorderRunner(preorder) {
  return __toArray__(bstFromPreorder(preorder));
}
`.trim();

const PY_PREAMBLE = `
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

def __to_array__(root):
    if not root:
        return []
    from collections import deque
    result = []
    queue = deque([root])
    while queue:
        node = queue.popleft()
        if node is None:
            result.append(None)
            continue
        result.append(node.val)
        queue.append(node.left)
        queue.append(node.right)
    while result and result[-1] is None:
        result.pop()
    return result

def bstFromPreorderRunner(preorder):
    preorder = list(preorder.to_py() if hasattr(preorder, 'to_py') else preorder)
    preorder = [int(x) for x in preorder]
    return __to_array__(bstFromPreorder(preorder))
`.trim();

export const problem: Problem = {
  id: 'bst-from-preorder',
  title: 'Construct Binary Search Tree from Preorder Traversal',
  difficulty: 'medium',
  tags: ['tree'],
  description: `Given an array of integers \`preorder\`, which represents the **preorder traversal** of a BST (i.e., no duplicates), construct the tree and return its root.

It is **guaranteed** that there is always possible to find a valid binary search tree with the given requirements for the given test cases.

The result is returned as a level-order (BFS) array where \`null\` represents missing children.

**Recall:** In a BST, all values in a node's left subtree are less than the node's value, and all values in the right subtree are greater.`,
  constraints: [
    '1 <= preorder.length <= 100',
    '1 <= preorder[i] <= 10^8',
    'All the values of preorder are unique.',
  ],
  examples: [
    {
      input: 'preorder = [8,5,1,7,10,12]',
      output: '[8,5,10,1,7,null,12]',
      explanation:
        '8 is the root. 5 < 8 goes left; 10 > 8 goes right. 1 < 5 goes left of 5; 7 > 5 but < 8 goes right of 5. 12 > 10 goes right of 10.',
    },
    {
      input: 'preorder = [1,3]',
      output: '[1,null,3]',
      explanation: '1 is the root; 3 > 1 goes to the right.',
    },
  ],
  hints: [
    'The first element of preorder is always the root.',
    'Partition the remaining elements: values less than root form the left subtree preorder; values greater form the right subtree preorder.',
    'Alternatively, use a recursive approach with a bound parameter: insert each value into the BST by traversing from root.',
    'Iterative approach: for each value, insert it using standard BST insertion.',
  ],
  functionName: 'bstFromPreorderRunner',
  params: ['preorder'],
  preamble: { javascript: JS_PREAMBLE, python: PY_PREAMBLE },
  starterCode: {
    javascript: `// TreeNode class is pre-defined. Implement the function below:
function bstFromPreorder(preorder) {

}`,
    typescript: "function bstFromPreorderRunner(preorder: number[]): (number | null)[] {\n\n}",

    python: `# TreeNode class is pre-defined. Implement the function below:
def bstFromPreorder(preorder):
    pass`,
  },
  visibleTests: [
    { args: [[8, 5, 1, 7, 10, 12]], expected: [8, 5, 10, 1, 7, null, 12] },
    { args: [[1, 3]], expected: [1, null, 3] },
    { args: [[5]], expected: [5] },
  ],
  hiddenTests: [
    { args: [[4, 2, 1, 3, 6, 5, 7]], expected: [4, 2, 6, 1, 3, 5, 7] },
    { args: [[3, 1, 2]], expected: [3, 1, null, null, 2] },
    { args: [[10, 5, 15, 12, 20]], expected: [10, 5, 15, null, null, 12, 20] },
    { args: [[2, 1]], expected: [2, 1] },
  ],
};
