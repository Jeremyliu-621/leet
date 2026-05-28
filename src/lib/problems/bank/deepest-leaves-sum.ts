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
function deepestLeavesSumRunner(arr) {
  const root = __fromArray__(arr);
  return deepestLeavesSum(root);
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

def deepestLeavesSumRunner(arr):
    root = __from_array__(arr)
    return deepestLeavesSum(root)
`;

export const problem: Problem = {
  id: 'deepest-leaves-sum',
  title: 'Deepest Leaves Sum',
  difficulty: 'medium',
  tags: ['tree'],
  description: `Given the \`root\` of a binary tree, return the sum of values of its deepest leaves.`,
  constraints: [
    'The number of nodes in the tree is in the range `[1, 10^4]`.',
    '`1 <= Node.val <= 100`',
  ],
  examples: [
    {
      input: 'root = [1,2,3,4,5,null,6,7,null,null,null,null,8]',
      output: '15',
      explanation: 'The deepest leaves are 7 and 8. 7 + 8 = 15.',
    },
    {
      input: 'root = [6,7,8,2,7,1,3,9,null,1,4,null,null,null,5]',
      output: '19',
      explanation: 'The deepest leaves are 9, 1, 4, and 5. 9 + 1 + 4 + 5 = 19.',
    },
  ],
  hints: [
    'Use BFS level-order traversal. The sum of the last level is the answer.',
    'Alternatively, use DFS tracking the maximum depth seen so far. Accumulate the sum at the deepest level, resetting when a deeper level is found.',
    `\`\`\`js
let maxDepth = 0, sum = 0;
function dfs(node, depth) {
  if (!node) return;
  if (!node.left && !node.right) {
    if (depth > maxDepth) { maxDepth = depth; sum = node.val; }
    else if (depth === maxDepth) sum += node.val;
  }
  dfs(node.left, depth+1); dfs(node.right, depth+1);
}
dfs(root, 0);
return sum;\`\`\``
  ],
  functionName: 'deepestLeavesSumRunner',
  params: ['root'],
  preamble: {
    javascript: JS_PREAMBLE,
    python: PY_PREAMBLE,
  },
  starterCode: {
    javascript: 'function deepestLeavesSum(root) {\n  \n}\n',
    python: 'def deepestLeavesSum(root):\n    pass\n',
  },
  visibleTests: [
    { args: [[1, 2, 3, 4, 5, null, 6, 7, null, null, null, null, 8]], expected: 15 },
    { args: [[6, 7, 8, 2, 7, 1, 3, 9, null, 1, 4, null, null, null, 5]], expected: 19 },
    { args: [[1]], expected: 1 },
  ],
  hiddenTests: [
    { args: [[1, 2, 3]], expected: 5 },
    { args: [[1, 2, null, 3, null, 4]], expected: 4 },
    { args: [[5, 4, 8, 11, null, 13, 4, 7, 2]], expected: 9 },
    { args: [[1, 2, 3, 10, 14]], expected: 24 },
  ],
};
