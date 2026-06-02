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
function sumOfLeftLeavesRunner(arr) {
  return sumOfLeftLeaves(__fromArray__(arr));
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
    arr = [int(v) if isinstance(v, (int, float)) and not isinstance(v, bool) else None for v in raw_list]
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

def sumOfLeftLeavesRunner(arr):
    return sumOfLeftLeaves(__from_array__(arr))
`.trim();

export const problem: Problem = {
  id: 'binary-tree-sum-of-left-leaves',
  title: 'Sum of Left Leaves',
  difficulty: 'medium',
  tags: ['tree'],
  description: `Given the \`root\` of a binary tree, return the **sum of all left leaves**.

A **left leaf** is a leaf node that is the **left child** of its parent. The root itself is never considered a left leaf.

Trees are given as level-order (BFS) arrays where \`null\` marks absent children.

**Example:**
\`\`\`
      3
     / \\
    9  20
       / \\
      15   7
\`\`\`
Tree: \`[3, 9, 20, null, null, 15, 7]\`
Left leaves: 9 (left child of 3) and 15 (left child of 20)
Sum = **24**`,
  constraints: [
    '1 <= number of nodes <= 1000',
    '-1000 <= Node.val <= 1000',
  ],
  examples: [
    {
      input: 'root = [3,9,20,null,null,15,7]',
      output: '24',
      explanation: 'Left leaves are 9 and 15. Sum = 24.',
    },
    {
      input: 'root = [1]',
      output: '0',
      explanation: 'Single node is a root; no left leaves.',
    },
    {
      input: 'root = [1,2,3,4,5]',
      output: '4',
      explanation: '4 is the only left leaf (left child of 2). Node 5 is a right child.',
    },
  ],
  hints: [
    'Use recursive DFS. Pass a boolean `isLeft` indicating whether the current node is a left child.',
    'A node is a left leaf when `isLeft === true` and both `node.left` and `node.right` are null. Add its value.',
    'Recurse: `dfs(node.left, true) + dfs(node.right, false)`. Return 0 for null nodes.',
  ],
  functionName: 'sumOfLeftLeavesRunner',
  params: ['root'],
  preamble: { javascript: JS_PREAMBLE, python: PY_PREAMBLE },
  starterCode: {
    javascript: `// TreeNode class and sumOfLeftLeavesRunner wrapper are pre-defined.
// Implement sumOfLeftLeaves below:
function sumOfLeftLeaves(root) {
  function dfs(node, isLeft) {
    if (!node) return 0;
    if (!node.left && !node.right) return isLeft ? node.val : 0;
    return dfs(node.left, true) + dfs(node.right, false);
  }
  return dfs(root, false);
}`,
    typescript: `function sumOfLeftLeavesRunner(root: (number | null)[]): number {
  if (!root.length || root[0] === null) return 0;
  type N = { v: number; l: N|null; r: N|null };
  const mk = (v: number): N => ({v, l: null, r: null});
  const r = mk(root[0] as number);
  const q: N[] = [r]; let i = 1;
  while (q.length && i < root.length) {
    const n = q.shift()!;
    if (root[i] != null) { n.l = mk(root[i] as number); q.push(n.l); } i++;
    if (i < root.length && root[i] != null) { n.r = mk(root[i] as number); q.push(n.r); } i++;
  }
  const dfs = (n: N|null, isLeft: boolean): number => {
    if (!n) return 0;
    if (!n.l && !n.r) return isLeft ? n.v : 0;
    return dfs(n.l, true) + dfs(n.r, false);
  };
  return dfs(r, false);
}`,

    python: `# TreeNode class and sumOfLeftLeavesRunner wrapper are pre-defined.
# Implement sumOfLeftLeaves below:
def sumOfLeftLeaves(root):
    def dfs(node, is_left):
        if not node: return 0
        if not node.left and not node.right: return node.val if is_left else 0
        return dfs(node.left, True) + dfs(node.right, False)
    return dfs(root, False)`,
  },
  visibleTests: [
    { args: [[3, 9, 20, null, null, 15, 7]], expected: 24 },
    { args: [[1]], expected: 0 },
    { args: [[1, 2, 3, 4, 5]], expected: 4 },
    { args: [[1, 2]], expected: 2 },
  ],
  hiddenTests: [
    { args: [[1, null, 2]], expected: 0 },
    { args: [[1, 2, 3]], expected: 2 },
    { args: [[5, 4, 8, 11, null, 13, 4, 7, 2]], expected: 20 },
    { args: [[0]], expected: 0 },
    { args: [[1, 2, 3, 4, 5, 6, 7]], expected: 10 },
    { args: [[-3, -1, -2]], expected: -1 },
  ],
};
