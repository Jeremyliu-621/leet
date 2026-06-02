import type { Problem } from '../types';

const JS_PREAMBLE = `
class TreeNode {
  constructor(val = 0, left = null, right = null) {
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
    if (arr[i] !== null && arr[i] !== undefined) { node.left = new TreeNode(arr[i]); queue.push(node.left); }
    i++;
    if (i < arr.length && arr[i] !== null && arr[i] !== undefined) { node.right = new TreeNode(arr[i]); queue.push(node.right); }
    i++;
  }
  return root;
}
function __toArray__(root) {
  if (!root) return [];
  const result = [];
  const queue = [root];
  while (queue.length > 0) {
    const node = queue.shift();
    if (node === null) { result.push(null); continue; }
    result.push(node.val);
    queue.push(node.left ?? null);
    queue.push(node.right ?? null);
  }
  while (result.length > 0 && result[result.length - 1] === null) result.pop();
  return result;
}
function mergeTreesRunner(arr1, arr2) {
  return __toArray__(mergeTrees(__fromArray__(arr1), __fromArray__(arr2)));
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

def __to_array__(root):
    if not root:
        return []
    result = []
    queue = [root]
    while queue:
        node = queue.pop(0)
        if node is None:
            result.append(None)
            continue
        result.append(node.val)
        queue.append(node.left)
        queue.append(node.right)
    while result and not isinstance(result[-1], (int, float)):
        result.pop()
    return result

def mergeTreesRunner(arr1, arr2):
    return __to_array__(mergeTrees(__from_array__(arr1), __from_array__(arr2)))
`.trim();

export const problem: Problem = {
  id: 'merge-two-binary-trees',
  title: 'Merge Two Binary Trees',
  difficulty: 'easy',
  tags: ['tree'],
  description: `You are given two binary trees \`root1\` and \`root2\`.

Imagine that when you put one of them to cover the other, some nodes of the two trees are **overlapped** while the others are not. **Merge** the two trees into a new binary tree:
- If two nodes overlap, the merged node value is the **sum** of both nodes' values.
- Otherwise, the merged node is the non-null node.

Return the **merged tree**.

> **Note:** Trees are represented as level-order (BFS) arrays, where \`null\` marks a missing child.`,
  constraints: [
    'The number of nodes in both trees is in the range [0, 2000].',
    '-10^4 <= Node.val <= 10^4',
  ],
  examples: [
    {
      input: 'root1 = [1,3,2,5], root2 = [2,1,3,null,4,null,7]',
      output: '[3,4,5,5,4,null,7]',
      explanation: 'Overlapping nodes are summed; non-overlapping nodes from the non-null tree are kept.',
    },
    {
      input: 'root1 = [1], root2 = [1,2]',
      output: '[2,2]',
      explanation: 'Root nodes merge to 2; root2\'s left child 2 is kept.',
    },
  ],
  hints: [
    'Use DFS/recursion. If either node is null, return the other (no merging needed).',
    'Create a new node (or modify root1 in-place) with value root1.val + root2.val, then recursively merge left subtrees and right subtrees.',
    '`if (!root1) return root2; if (!root2) return root1; root1.val += root2.val; root1.left = mergeTrees(root1.left, root2.left); root1.right = mergeTrees(root1.right, root2.right); return root1;`',
  ],
  functionName: 'mergeTreesRunner',
  params: ['root1', 'root2'],
  preamble: { javascript: JS_PREAMBLE, python: PY_PREAMBLE },
  starterCode: {
    javascript: `// TreeNode is pre-defined. Implement the function below:
function mergeTrees(root1, root2) {
  if (!root1) return root2;
  if (!root2) return root1;
  root1.val += root2.val;
  root1.left = mergeTrees(root1.left, root2.left);
  root1.right = mergeTrees(root1.right, root2.right);
  return root1;
}`,
    typescript: `function mergeTreesRunner(root1: (number | null)[], root2: (number | null)[]): (number | null)[] {
  type N = {val: number; left: N | null; right: N | null} | null;
  const fromArr = (arr: (number | null)[]): N => {
    if (!arr.length || arr[0] == null) return null;
    const root: N = {val: arr[0], left: null, right: null};
    const q: NonNullable<N>[] = [root]; let i = 1;
    while (q.length && i < arr.length) {
      const n = q.shift()!;
      if (i < arr.length && arr[i] != null) { n.left = {val: arr[i]!, left: null, right: null}; q.push(n.left!); }
      i++;
      if (i < arr.length && arr[i] != null) { n.right = {val: arr[i]!, left: null, right: null}; q.push(n.right!); }
      i++;
    }
    return root;
  };
  const toArr = (r: N): (number | null)[] => {
    if (!r) return [];
    const res: (number | null)[] = []; const q: N[] = [r];
    while (q.length) { const n = q.shift()!; if (!n) { res.push(null); continue; } res.push(n.val); q.push(n.left); q.push(n.right); }
    while (res.length && res[res.length - 1] == null) res.pop();
    return res;
  };
  const merge = (a: N, b: N): N => {
    if (!a) return b; if (!b) return a;
    a.val += b.val; a.left = merge(a.left, b.left); a.right = merge(a.right, b.right); return a;
  };
  return toArr(merge(fromArr(root1), fromArr(root2)));
}`,
    python: `# TreeNode is pre-defined. Implement the function below:
def mergeTrees(root1, root2):
    if not root1: return root2
    if not root2: return root1
    root1.val += root2.val
    root1.left = mergeTrees(root1.left, root2.left)
    root1.right = mergeTrees(root1.right, root2.right)
    return root1`,
  },
  visibleTests: [
    { args: [[1, 3, 2, 5], [2, 1, 3, null, 4, null, 7]], expected: [3, 4, 5, 5, 4, null, 7] },
    { args: [[1], [1, 2]], expected: [2, 2] },
    { args: [[], [1]], expected: [1] },
  ],
  hiddenTests: [
    { args: [[1], []], expected: [1] },
    { args: [[], []], expected: [] },
    { args: [[1, 2, 3], [1, 2, 3]], expected: [2, 4, 6] },
    { args: [[1, null, 2], [1, 2]], expected: [2, 2, 2] },
    { args: [[5, 3, null, 1], [2, 4, 6]], expected: [7, 7, 6, 1] },
    { args: [[3, 5, 1], [3, 2, 4]], expected: [6, 7, 5] },
  ],
};
