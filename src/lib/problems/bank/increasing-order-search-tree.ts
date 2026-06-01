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
function __toArray__(root) {
  if (!root) return [];
  const res = [], queue = [root];
  while (queue.length) {
    const n = queue.shift();
    if (n) { res.push(n.val); queue.push(n.left, n.right); }
    else res.push(null);
  }
  while (res.length && res[res.length - 1] === null) res.pop();
  return res;
}
function increasingBSTRunner(arr) {
  return __toArray__(increasingBST(__fromArray__(arr)));
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

def __to_array__(root):
    if not root:
        return []
    res, queue = [], [root]
    while queue:
        n = queue.pop(0)
        if n:
            res.append(n.val)
            queue.append(n.left)
            queue.append(n.right)
        else:
            res.append(None)
    while res and res[-1] is None:
        res.pop()
    return res

def increasingBSTRunner(arr):
    return __to_array__(increasingBST(__from_array__(arr)))
`;

export const problem: Problem = {
  id: 'increasing-order-search-tree',
  title: 'Increasing Order Search Tree',
  difficulty: 'easy',
  tags: ['tree'],
  description: `Given the \`root\` of a binary search tree, rearrange the tree in **in-order** so that the leftmost node in the tree is now the root of the tree, and every node has no left child and only one right child.

Return the root of the rearranged tree.`,
  constraints: [
    'The number of nodes in the given tree will be in the range [1, 100].',
    '0 <= Node.val <= 1000',
  ],
  examples: [
    {
      input: 'root = [5,3,6,2,4,null,8,1,null,null,null,7,9]',
      output: '[1,null,2,null,3,null,4,null,5,null,6,null,7,null,8,null,9]',
      explanation: 'All nodes become a right-skewed linked list in sorted order.',
    },
    {
      input: 'root = [5,1,7]',
      output: '[1,null,5,null,7]',
    },
  ],
  hints: [
    'Level 1: Do an in-order traversal to collect nodes in sorted order, then rebuild a right-skewed tree.',
    'Level 2: Use an in-order DFS. Keep a pointer to the last visited node and set its right child.',
    'Level 3: const vals=[];const dfs=n=>{if(!n)return;dfs(n.left);vals.push(n.val);dfs(n.right);};dfs(root);const dummy=new TreeNode(0);let cur=dummy;for(const v of vals){cur.right=new TreeNode(v);cur=cur.right;}return dummy.right;',
  ],
  functionName: 'increasingBSTRunner',
  params: ['root'],
  preamble: {
    javascript: JS_PREAMBLE,
    python: PY_PREAMBLE,
  },
  starterCode: {
    javascript: `function increasingBST(root) {
  const vals = [];
  function dfs(n) { if (!n) return; dfs(n.left); vals.push(n.val); dfs(n.right); }
  dfs(root);
  const dummy = new TreeNode(0);
  let cur = dummy;
  for (const v of vals) { cur.right = new TreeNode(v); cur = cur.right; }
  return dummy.right;
}`,
    typescript: `function increasingBSTRunner(root: (number | null)[]): (number | null)[] {
  class TN { constructor(public val: number, public left: TN | null = null, public right: TN | null = null) {} }
  function build(arr: (number | null)[]): TN | null {
    if (!arr.length || arr[0] == null) return null;
    const r = new TN(arr[0]!); const q = [r]; let i = 1;
    while (q.length && i < arr.length) {
      const n = q.shift()!;
      if (arr[i] != null) { n.left = new TN(arr[i]!); q.push(n.left); } i++;
      if (i < arr.length && arr[i] != null) { n.right = new TN(arr[i]!); q.push(n.right); } i++;
    }
    return r;
  }
  function toArr(r: TN | null): (number | null)[] {
    if (!r) return [];
    const res: (number | null)[] = [], q: (TN | null)[] = [r];
    while (q.length) { const n = q.shift()!; if (n) { res.push(n.val); q.push(n.left, n.right); } else res.push(null); }
    while (res.length && res[res.length - 1] === null) res.pop();
    return res;
  }
  const vals: number[] = [];
  function dfs(n: TN | null) { if (!n) return; dfs(n.left); vals.push(n.val); dfs(n.right); }
  dfs(build(root));
  const dummy = new TN(0); let cur = dummy;
  for (const v of vals) { cur.right = new TN(v); cur = cur.right; }
  return toArr(dummy.right);
}`,
    python: `def increasingBST(root):
    vals = []
    def dfs(n):
        if not n: return
        dfs(n.left); vals.append(n.val); dfs(n.right)
    dfs(root)
    dummy = TreeNode(0); cur = dummy
    for v in vals: cur.right = TreeNode(v); cur = cur.right
    return dummy.right`,
  },
  visibleTests: [
    { args: [[5, 3, 6, 2, 4, null, 8, 1, null, null, null, 7, 9]], expected: [1, null, 2, null, 3, null, 4, null, 5, null, 6, null, 7, null, 8, null, 9] },
    { args: [[5, 1, 7]], expected: [1, null, 5, null, 7] },
  ],
  hiddenTests: [
    { args: [[1]], expected: [1] },
    { args: [[3, 1, 4]], expected: [1, null, 3, null, 4] },
    { args: [[2, 1, 3]], expected: [1, null, 2, null, 3] },
    { args: [[10, 5, 15, 3, 7]], expected: [3, null, 5, null, 7, null, 10, null, 15] },
  ],
};
