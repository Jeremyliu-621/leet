import type { Problem } from '../types';

const JS_PREAMBLE = `
class TreeNode {
  constructor(val, left = null, right = null) { this.val = val; this.left = left; this.right = right; }
}
function __fromBFS__(arr) {
  if (!arr || arr.length === 0 || arr[0] === null) return null;
  const root = new TreeNode(arr[0]);
  const q = [root]; let i = 1;
  while (q.length && i < arr.length) {
    const node = q.shift();
    if (i < arr.length && arr[i] !== null) { node.left = new TreeNode(arr[i]); q.push(node.left); } i++;
    if (i < arr.length && arr[i] !== null) { node.right = new TreeNode(arr[i]); q.push(node.right); } i++;
  }
  return root;
}
function countNodesRunner(arr) { return countNodes(__fromBFS__(arr)); }
`;

const PY_PREAMBLE = `
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val; self.left = left; self.right = right

def __from_bfs__(arr):
    if not arr or arr[0] is None: return None
    root = TreeNode(arr[0])
    q = [root]; i = 1
    while q and i < len(arr):
        node = q.pop(0)
        if i < len(arr) and arr[i] is not None:
            node.left = TreeNode(arr[i]); q.append(node.left)
        i += 1
        if i < len(arr) and arr[i] is not None:
            node.right = TreeNode(arr[i]); q.append(node.right)
        i += 1
    return root

def countNodesRunner(arr):
    return countNodes(__from_bfs__(arr))
`;

export const problem: Problem = {
  id: 'count-complete-tree-nodes',
  title: 'Count Complete Tree Nodes',
  difficulty: 'medium',
  tags: ['tree', 'binary-search'],
  description: `Given the \`root\` of a **complete** binary tree, return the number of nodes in the tree.

In a **complete** binary tree, every level, except possibly the last, is completely filled, and all nodes in the last level are as far left as possible.

Design an algorithm that runs in less than \`O(n)\` time complexity.`,
  constraints: [
    'The number of nodes in the tree is in the range `[0, 5 * 10^4]`.',
    '`0 <= Node.val <= 5 * 10^4`',
    'The tree is guaranteed to be **complete**.',
  ],
  examples: [
    {
      input: 'root = [1,2,3,4,5,6]',
      output: '6',
    },
    {
      input: 'root = []',
      output: '0',
    },
    {
      input: 'root = [1]',
      output: '1',
    },
  ],
  hints: [
    'Compute the height going left and right. If equal, the tree is perfect and has `2^h - 1` nodes. Otherwise recurse on both subtrees.',
    'This yields O(log^2 n) time — each level does O(log n) work to measure heights.',
    `\`\`\`js
if (!root) return 0;
let lo = root, hi = root, lh = 0, rh = 0;
while (lo) { lh++; lo = lo.left; }
while (hi) { rh++; hi = hi.right; }
if (lh === rh) return (1 << lh) - 1;
return 1 + countNodes(root.left) + countNodes(root.right);\`\`\``
  ],
  functionName: 'countNodesRunner',
  params: ['arr'],
  starterCode: {
    javascript: `${JS_PREAMBLE}
function countNodes(root) {

}`,
    python: `${PY_PREAMBLE}
def countNodes(root):
    pass`,
  },
  visibleTests: [
    { args: [[1, 2, 3, 4, 5, 6]], expected: 6 },
    { args: [[]], expected: 0 },
    { args: [[1]], expected: 1 },
  ],
  hiddenTests: [
    { args: [[1, 2, 3]], expected: 3 },
    { args: [[1, 2, 3, 4, 5, 6, 7]], expected: 7 },
    { args: [[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]], expected: 10 },
    { args: [[1, 2, 3, 4]], expected: 4 },
  ],
};
