import type { Problem } from '../types';

const JS_PREAMBLE = `
class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val; this.left = left; this.right = right;
  }
}
function __fromArray__(arr) {
  if (!arr || arr.length === 0 || arr[0] == null) return null;
  const root = new TreeNode(arr[0]);
  const queue = [root];
  let i = 1;
  while (queue.length && i < arr.length) {
    const node = queue.shift();
    if (i < arr.length && arr[i] != null) { node.left = new TreeNode(arr[i]); queue.push(node.left); }
    i++;
    if (i < arr.length && arr[i] != null) { node.right = new TreeNode(arr[i]); queue.push(node.right); }
    i++;
  }
  return root;
}
function sumOfLeftLeavesRunner(arr) {
  return sumOfLeftLeaves(__fromArray__(arr));
}
`;

const PY_PREAMBLE = `
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val; self.left = left; self.right = right

def __from_array__(arr):
    if not arr or arr[0] is None:
        return None
    root = TreeNode(arr[0])
    queue = [root]
    i = 1
    while queue and i < len(arr):
        node = queue.pop(0)
        if i < len(arr) and arr[i] is not None:
            node.left = TreeNode(arr[i]); queue.append(node.left)
        i += 1
        if i < len(arr) and arr[i] is not None:
            node.right = TreeNode(arr[i]); queue.append(node.right)
        i += 1
    return root

def sumOfLeftLeavesRunner(arr):
    return sumOfLeftLeaves(__from_array__(arr))
`;

export const problem: Problem = {
  id: 'sum-of-left-leaves',
  title: 'Sum of Left Leaves',
  difficulty: 'easy',
  tags: ['tree'],
  description: `Given the \`root\` of a binary tree, return the **sum of all left leaves**.

A **leaf** is a node with no children. A **left leaf** is a leaf that is the left child of another node.`,
  constraints: [
    'The number of nodes in the tree is in the range [1, 1000].',
    '-1000 <= Node.val <= 1000',
  ],
  examples: [
    { input: 'root = [3,9,20,null,null,15,7]', output: '24', explanation: 'Left leaves: 9 and 15. Sum = 24.' },
    { input: 'root = [1]', output: '0', explanation: 'No left leaves.' },
  ],
  hints: [
    'Level 1: Traverse the tree. When visiting a node, check if its left child is a leaf. If so, add it to the sum.',
    'Level 2: Use DFS. Pass a flag indicating whether the current node is a left child. If it is a leaf and is a left child, add its value.',
    'Level 3: function dfs(node,isLeft){if(!node)return 0;if(!node.left&&!node.right)return isLeft?node.val:0;return dfs(node.left,true)+dfs(node.right,false);}return dfs(root,false);',
  ],
  functionName: 'sumOfLeftLeavesRunner',
  params: ['root'],
  preamble: {
    javascript: JS_PREAMBLE,
    python: PY_PREAMBLE,
  },
  starterCode: {
    javascript: 'function sumOfLeftLeaves(root) {\n  // your code here\n}\n',
    typescript: "function sumOfLeftLeavesRunner(root: (number | null)[]): number {\n  // your code here\n}",

    python: 'def sumOfLeftLeaves(root):\n    # your code here\n    pass\n',
  },
  visibleTests: [
    { args: [[3, 9, 20, null, null, 15, 7]], expected: 24 },
    { args: [[1]], expected: 0 },
  ],
  hiddenTests: [
    { args: [[1, 2, 3, 4, 5]], expected: 4 },
    { args: [[1, null, 2, 3]], expected: 3 },
    { args: [[-9, -3, 2, null, 4, 4, 0, -6, null, -5]], expected: -11 },
    { args: [[1, 2, 3, null, null, 4, 5]], expected: 6 },
  ],
};
