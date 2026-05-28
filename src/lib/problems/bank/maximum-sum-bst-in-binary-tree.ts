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
function maxSumBSTRunner(arr) { return maxSumBST(__fromArray__(arr)); }
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
    from collections import deque
    queue = deque([root]); i = 1
    while queue and i < len(arr):
        node = queue.popleft()
        if i < len(arr) and arr[i] is not None:
            node.left = TreeNode(arr[i]); queue.append(node.left)
        i += 1
        if i < len(arr) and arr[i] is not None:
            node.right = TreeNode(arr[i]); queue.append(node.right)
        i += 1
    return root

def maxSumBSTRunner(arr):
    root = __from_array__(arr)
    return maxSumBST(root)
`.trim();

export const problem: Problem = {
  id: 'maximum-sum-bst-in-binary-tree',
  title: 'Maximum Sum BST in Binary Tree',
  difficulty: 'hard',
  tags: ['tree', 'dynamic-programming'],
  description: `Given a **binary tree** \`root\`, return the **maximum sum** of all keys of any sub-tree which is also a Binary Search Tree.

Assume a BST is defined as follows:
- The left subtree of a node contains only nodes with keys **less than** the node's key.
- The right subtree of a node contains only nodes with keys **greater than** the node's key.
- Both the left and right subtrees must also be binary search trees.

If no such subtree exists, return \`0\`.

Trees are given as level-order (BFS) arrays where \`null\` marks missing children.`,
  constraints: [
    'The number of nodes in the tree is in the range [1, 40000].',
    '-4 * 10^4 <= Node.val <= 4 * 10^4',
  ],
  examples: [
    {
      input: 'root = [1,4,3,2,4,2,5,null,null,null,null,null,null,4,6]',
      output: '20',
      explanation:
        'The subtree rooted at node 3 (values 3,2,5,4,6) is a valid BST with sum 20.',
    },
    {
      input: 'root = [4,3,null,1,2]',
      output: '2',
      explanation: 'The valid BST subtrees are: {1} (sum 1), {2} (sum 2), {4,3,null,1,2} is not a BST. Maximum is 2.',
    },
    {
      input: 'root = [-4,-2,-5]',
      output: '0',
      explanation: 'All node values are negative. Return 0 (we do not count negative-sum BSTs unless forced).',
    },
  ],
  hints: [
    'Use post-order DFS. For each node, determine if the subtree is a valid BST, and if so, compute its sum.',
    'Return a tuple from each DFS call: (isBST, minVal, maxVal, sum).',
    'A node\'s subtree is a BST if: left subtree is a BST AND right subtree is a BST AND left.maxVal < node.val < right.minVal.',
    'Track the global maximum sum across all valid BST subtrees.',
  ],
  functionName: 'maxSumBSTRunner',
  params: ['root'],
  preamble: { javascript: JS_PREAMBLE, python: PY_PREAMBLE },
  starterCode: {
    javascript: `// TreeNode class is pre-defined. Implement the function below:
function maxSumBST(root) {

}`,
    typescript: "function maxSumBSTRunner(root: (number | null)[]): number {\n\n}",

    python: `# TreeNode class is pre-defined. Implement the function below:
def maxSumBST(root):
    pass`,
  },
  visibleTests: [
    {
      args: [[1, 4, 3, 2, 4, 2, 5, null, null, null, null, null, null, 4, 6]],
      expected: 20,
    },
    { args: [[4, 3, null, 1, 2]], expected: 2 },
    { args: [[-4, -2, -5]], expected: 0 },
  ],
  hiddenTests: [
    { args: [[1]], expected: 1 },
    { args: [[5, 3, 6, 2, 4]], expected: 20 },
    { args: [[2, 1, 3]], expected: 6 },
    { args: [[-1, -2, -3]], expected: 0 },
  ],
};
