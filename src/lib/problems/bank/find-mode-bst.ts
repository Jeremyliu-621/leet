import type { Problem } from '../types';

const JS_PREAMBLE = `
class TreeNode {
  constructor(val, left = null, right = null) {
    this.v = val; this.l = left; this.r = right;
  }
}
function __fromArray__(arr) {
  if (!arr || arr.length === 0) return null;
  const root = new TreeNode(arr[0]);
  const q = [root]; let i = 1;
  while (i < arr.length) {
    const n = q.shift();
    if (i < arr.length && arr[i] != null) { n.l = new TreeNode(arr[i]); q.push(n.l); } i++;
    if (i < arr.length && arr[i] != null) { n.r = new TreeNode(arr[i]); q.push(n.r); } i++;
  }
  return root;
}
function findModeRunner(arr) {
  const root = __fromArray__(arr);
  const result = findMode(root);
  return [...result].sort((a, b) => a - b);
}
`;

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
    q = deque([root]); i = 1
    while q and i < len(arr):
        n = q.popleft()
        if i < len(arr) and arr[i] is not None:
            n.left = TreeNode(arr[i]); q.append(n.left)
        i += 1
        if i < len(arr) and arr[i] is not None:
            n.right = TreeNode(arr[i]); q.append(n.right)
        i += 1
    return root

def findModeRunner(arr):
    root = __from_array__(arr)
    result = findMode(root)
    return sorted(result)
`;

export const problem: Problem = {
  id: 'find-mode-bst',
  title: 'Find Mode in Binary Search Tree',
  difficulty: 'easy',
  tags: ['tree'],
  description: `Given the \`root\` of a binary search tree (BST) with duplicates, return all the **mode(s)** (i.e., the most frequently occurred element) in it.

If the tree has more than one mode, return them in any order.

Assume a BST is defined as follows:
- The left subtree of a node contains only nodes with keys **less than or equal to** the node's key.
- The right subtree of a node contains only nodes with keys **greater than or equal to** the node's key.
- Both the left and right subtrees must also be binary search trees.`,
  constraints: [
    'The number of nodes in the tree is in the range `[1, 10^4]`.',
    '`-10^5 <= Node.val <= 10^5`',
  ],
  examples: [
    { input: 'root = [1,null,2,2]', output: '[2]' },
    { input: 'root = [0]', output: '[0]' },
  ],
  hints: [
    'Do an in-order traversal (sorted order) and track current value, current count, and max count.',
    'When you see a new value, reset current count. Update modes when current count equals max count.',
    `\`\`\`js
// In-order traversal; track current run length
let prev = null, curCount = 0, maxCount = 0, modes = [];
function inOrder(node) {
  if (!node) return;
  inOrder(node.left);
  curCount = (node.val === prev) ? curCount+1 : 1;
  if (curCount > maxCount) { maxCount = curCount; modes = [node.val]; }
  else if (curCount === maxCount) modes.push(node.val);
  prev = node.val;
  inOrder(node.right);
}\`\`\``,
  ],
  functionName: 'findModeRunner',
  params: ['root'],
  preamble: {
    javascript: JS_PREAMBLE,
    python: PY_PREAMBLE,
  },
  starterCode: {
    javascript: 'function findMode(root) {\n  \n}\n',
    typescript: "function findModeRunner(root: (number | null)[]): number[] {\n  \n}",

    python: 'def findMode(root):\n    pass\n',
  },
  visibleTests: [
    { args: [[1, null, 2, 2]], expected: [2] },
    { args: [[0]], expected: [0] },
  ],
  hiddenTests: [
    { args: [[1, 1, 2]], expected: [1] },
    { args: [[1, 1, 1]], expected: [1] },
    { args: [[2, 1, 3]], expected: [1, 2, 3] },
    { args: [[5, 2, 8, 2, 5]], expected: [2, 5] },
  ],
};
