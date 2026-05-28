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
function __toBFS__(root) {
  if (!root) return [];
  const result = [], q = [root];
  while (q.length) {
    const node = q.shift();
    if (node === null) { result.push(null); continue; }
    result.push(node.val);
    if (node.left !== null || node.right !== null) { q.push(node.left); q.push(node.right); }
  }
  while (result.length && result[result.length - 1] === null) result.pop();
  return result;
}
function pruneTreeRunner(arr) { return __toBFS__(pruneTree(__fromBFS__(arr))); }
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

def __to_bfs__(root):
    if not root: return []
    result = []; q = [root]
    while q:
        node = q.pop(0)
        if node is None: result.append(None); continue
        result.append(node.val)
        if node.left is not None or node.right is not None:
            q.append(node.left); q.append(node.right)
    while result and result[-1] is None: result.pop()
    return result

def pruneTreeRunner(arr):
    return __to_bfs__(pruneTree(__from_bfs__(arr)))
`;

export const problem: Problem = {
  id: 'binary-tree-pruning',
  title: 'Binary Tree Pruning',
  difficulty: 'medium',
  tags: ['tree'],
  description: `Given the \`root\` of a binary tree, return the same tree where every subtree (of the original tree) not containing a \`1\` has been removed.

A subtree of a node is that node plus every node that is a descendant of that node.`,
  constraints: [
    'The number of nodes in the tree is in the range `[1, 200]`.',
    '`Node.val\` is either \`0\` or \`1\`.',
  ],
  examples: [
    {
      input: 'root = [1,null,0,0,1]',
      output: '[1,null,0,null,1]',
      explanation: 'Only the red nodes satisfy the property "every subtree not containing a 1". The diagram on the right represents the answer.',
    },
    {
      input: 'root = [1,0,1,0,0,0,1]',
      output: '[1,null,1,null,1]',
    },
    {
      input: 'root = [1,1,0,1,1,0,1,0]',
      output: '[1,1,0,1,1,null,1]',
    },
  ],
  hints: [
    'Use postorder DFS (process children before parent). If after pruning both children are null and the node value is 0, return null to remove this node.',
    'After recursing on both children, check: if `node.val === 0` AND both children are `null`, this node contains no `1` — remove it by returning `null`.',
    `\`\`\`js
function prune(node) {
  if (!node) return null;
  node.left = prune(node.left);
  node.right = prune(node.right);
  if (node.val === 0 && !node.left && !node.right) return null;
  return node;
}
return prune(root);\`\`\``
  ],
  functionName: 'pruneTreeRunner',
  params: ['arr'],
  starterCode: {
    javascript: `${JS_PREAMBLE}
function pruneTree(root) {

}`,
    python: `${PY_PREAMBLE}
def pruneTree(root):
    pass`,
  },
  visibleTests: [
    { args: [[1, null, 0, 0, 1]], expected: [1, null, 0, null, 1] },
    { args: [[1, 0, 1, 0, 0, 0, 1]], expected: [1, null, 1, null, 1] },
    { args: [[1, 1, 0, 1, 1, 0, 1, 0]], expected: [1, 1, 0, 1, 1, null, 1] },
  ],
  hiddenTests: [
    { args: [[1]], expected: [1] },
    { args: [[0]], expected: [] },
    { args: [[0, 0, 0]], expected: [] },
    { args: [[1, 0, 0]], expected: [1] },
    { args: [[0, null, 1]], expected: [0, null, 1] },
  ],
};
