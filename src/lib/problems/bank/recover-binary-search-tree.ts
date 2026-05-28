import type { Problem } from '../types';

const JS_PREAMBLE = `
class TreeNode {
  constructor(val = 0, left = null, right = null) {
    this.val = val; this.left = left; this.right = right;
  }
}
function __fromArray__(arr) {
  if (!arr || arr.length === 0 || arr[0] === null) return null;
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
    if (!node) { result.push(null); continue; }
    result.push(node.val);
    queue.push(node.left);
    queue.push(node.right);
  }
  while (result.length > 0 && result[result.length - 1] === null) result.pop();
  return result;
}
function recoverBSTRunner(arr) {
  const root = __fromArray__(arr);
  recoverTree(root);
  return __toArray__(root);
}
`.trim();

const PY_PREAMBLE = `
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

def __from_array__(arr):
    if arr is None:
        return None
    if hasattr(arr, 'to_py'):
        raw = arr.to_py()
    else:
        try:
            raw = list(arr)
        except TypeError:
            return None
    arr = [int(v) if isinstance(v, (int, float)) and not isinstance(v, bool) else None for v in raw]
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
    while result and result[-1] is None:
        result.pop()
    return result

def recoverBSTRunner(arr):
    root = __from_array__(arr)
    recoverTree(root)
    return __to_array__(root)
`.trim();

export const problem: Problem = {
  id: 'recover-binary-search-tree',
  title: 'Recover Binary Search Tree',
  difficulty: 'hard',
  tags: ['tree'],
  description: `You are given the \`root\` of a binary search tree (BST), where exactly **two** nodes were swapped by mistake.

Recover the tree by fixing the two swapped nodes **without changing its structure**. Return the corrected tree as a BFS-level-order array (trailing \`null\`s omitted).

> **Note:** A \`TreeNode\` class is pre-defined. Implement \`recoverTree(root)\` which modifies the tree **in-place**.`,
  constraints: [
    'The number of nodes in the tree is in the range [2, 1000]',
    '-2³¹ <= Node.val <= 2³¹ - 1',
    'The input is guaranteed to be a BST with exactly two nodes swapped',
  ],
  examples: [
    {
      input: 'root = [1,3,null,null,2]',
      output: '[3,1,null,null,2]',
      explanation: '3 and 1 are swapped. After recovery the BST becomes [3,1,null,null,2].',
    },
    {
      input: 'root = [3,1,4,null,null,2]',
      output: '[2,1,4,null,null,3]',
      explanation: '3 and 2 are swapped. After recovery the BST becomes [2,1,4,null,null,3].',
    },
  ],
  hints: [
    'Perform an in-order traversal of the BST. In a valid BST, the in-order sequence is strictly increasing. Look for violations: positions where a node\'s value is greater than the next.',
    'The first swapped node is the larger value in the **first** violation. The second swapped node is the smaller value in the **last** violation (when there are two violations, it\'s the second element of the first violation only if there\'s just one violation — adjacently swapped — otherwise it\'s the second element of the second violation).',
    'Track `first`, `second`, and `prev` pointers during in-order traversal. When `prev.val > curr.val`: if `first` is not yet set, set `first = prev`; always update `second = curr`. After traversal, swap `first.val` and `second.val`.',
  ],
  functionName: 'recoverBSTRunner',
  params: ['root'],
  preamble: { javascript: JS_PREAMBLE, python: PY_PREAMBLE },
  starterCode: {
    javascript:
      '// TreeNode class is pre-defined. Modify the tree in-place:\nfunction recoverTree(root) {\n  \n}\n',
    typescript: "function recoverBSTRunner(root: (number | null)[]): (number | null)[] {\n  \n}",

    python:
      '# TreeNode class is pre-defined. Modify the tree in-place:\ndef recoverTree(root):\n    pass\n',
  },
  visibleTests: [
    { args: [[1, 3, null, null, 2]], expected: [3, 1, null, null, 2] },
    { args: [[3, 1, 4, null, null, 2]], expected: [2, 1, 4, null, null, 3] },
  ],
  hiddenTests: [
    // [2,3] swapped in a simple 2-node BST: root=3, left=2 => valid BST is root=2, right=3 => [2,null,3]
    { args: [[2, 3]], expected: [3, 2] },
    // [1,2,3,null,null,null,null] with 1 and 3 swapped: [3,2,1] -> recover to [1,2,3]
    { args: [[3, 2, 1]], expected: [1, 2, 3] },
    // larger BST: valid is [5,2,8,1,4] with 5 and 4 swapped => [4,2,8,1,5] swapped back => [5,2,8,1,4]
    { args: [[4, 2, 8, 1, 5]], expected: [5, 2, 8, 1, 4] },
    // non-adjacent swap: valid BST [2,1,3] with 1 and 3 swapped => [2,3,1] => recover to [2,1,3]
    { args: [[2, 3, 1]], expected: [2, 1, 3] },
  ],
};
