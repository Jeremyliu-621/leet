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
function __inorder__(root) {
  const vals = [];
  function dfs(n) {
    if (!n) return;
    dfs(n.left);
    vals.push(n.val);
    dfs(n.right);
  }
  dfs(root);
  return vals;
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
function balanceBSTRunner(arr) {
  const root = __fromArray__(arr);
  const balanced = balanceBST(root);
  // Validate: inorder of result must match inorder of input
  return __inorder__(balanced);
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

def __inorder__(root):
    vals = []
    def dfs(n):
        if not n: return
        dfs(n.left)
        vals.append(n.val)
        dfs(n.right)
    dfs(root)
    return vals

def balanceBSTRunner(arr):
    root = __from_array__(arr)
    balanced = balanceBST(root)
    return __inorder__(balanced)
`.trim();

export const problem: Problem = {
  id: 'balance-a-binary-search-tree',
  title: 'Balance a Binary Search Tree',
  difficulty: 'medium',
  tags: ['tree'],
  description: `Given the \`root\` of a binary search tree, return a **balanced** binary search tree with the same node values. A balanced BST is one where the depth of the two subtrees of every node never differs by more than 1.

If there is more than one answer, return **any of them**.

Trees are given as level-order arrays. The result is validated by checking that your output contains the same values in sorted order (i.e., correct in-order traversal).`,
  constraints: [
    'The number of nodes in the tree is in the range [1, 10^4].',
    '1 <= Node.val <= 10^5',
    'The input tree is guaranteed to be a valid BST.',
  ],
  examples: [
    {
      input: 'root = [1,null,2,null,3,null,4]',
      output: '[2,1,3,null,null,null,4]',
      explanation:
        'One valid answer. The in-order traversal [1,2,3,4] is preserved; the tree is balanced.',
    },
    {
      input: 'root = [2,1,3]',
      output: '[1,2,3]',
      explanation: 'Already balanced. Return the same structure (or any equivalent balanced BST).',
    },
  ],
  hints: [
    'In-order traversal of a BST gives a sorted array.',
    'Given a sorted array, build a balanced BST by recursively using the middle element as the root.',
    'For sorted array [l..r], root = mid = (l+r)/2, left subtree from [l..mid-1], right from [mid+1..r].',
  ],
  functionName: 'balanceBSTRunner',
  params: ['root'],
  preamble: { javascript: JS_PREAMBLE, python: PY_PREAMBLE },
  starterCode: {
    javascript: `// TreeNode class is pre-defined. Implement the function below:
function balanceBST(root) {

}`,
    typescript: "function balanceBSTRunner(root: (number | null)[]): number[] {\n\n}",

    python: `# TreeNode class is pre-defined. Implement the function below:
def balanceBST(root):
    pass`,
  },
  visibleTests: [
    { args: [[1, null, 2, null, 3, null, 4]], expected: [1, 2, 3, 4] },
    { args: [[2, 1, 3]], expected: [1, 2, 3] },
    { args: [[1]], expected: [1] },
  ],
  hiddenTests: [
    { args: [[3, 2, null, 1]], expected: [1, 2, 3] },
    { args: [[3, null, 4, null, 5]], expected: [3, 4, 5] },
    { args: [[1, null, 2, null, 3]], expected: [1, 2, 3] },
    { args: [[4, 2, 6, 1, 3, 5, 7]], expected: [1, 2, 3, 4, 5, 6, 7] },
  ],
};
