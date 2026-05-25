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
function reverseOddLevelsRunner(arr) {
  const root = __fromArray__(arr);
  function dfs(left, right, level) {
    if (!left || !right) return;
    if (level % 2 === 1) {
      const tmp = left.val; left.val = right.val; right.val = tmp;
    }
    dfs(left.left, right.right, level + 1);
    dfs(left.right, right.left, level + 1);
  }
  if (root) dfs(root.left, root.right, 1);
  return __toArray__(root);
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
    while result and result[-1] is None:
        result.pop()
    return result

def reverseOddLevelsRunner(arr):
    root = __from_array__(arr)
    def dfs(left, right, level):
        if left is None or right is None:
            return
        if level % 2 == 1:
            left.val, right.val = right.val, left.val
        dfs(left.left, right.right, level + 1)
        dfs(left.right, right.left, level + 1)
    if root:
        dfs(root.left, root.right, 1)
    return __to_array__(root)
`.trim();

export const problem: Problem = {
  id: 'reverse-odd-levels-binary-tree',
  title: 'Reverse Odd Levels of Binary Tree',
  difficulty: 'medium',
  tags: ['tree'],
  description: `Given the **root** of a **perfect** binary tree, reverse the node values at each **odd** level of the tree.

- Level 0 is the root level (even), level 1 is the children (odd), and so on.
- Only values are reversed, not node references.

Trees are represented as level-order arrays (BFS order).`,
  constraints: [
    'The number of nodes in the tree is in the range [1, 2^14 - 1]',
    '0 <= Node.val <= 10^5',
    'The tree is a perfect binary tree',
  ],
  examples: [
    {
      input: 'root = [2,3,5,8,13,21,34]',
      output: '[2,5,3,8,13,21,34]',
      explanation: 'Level 1 nodes [3,5] are reversed to [5,3]. Level 2 is even, unchanged.',
    },
    {
      input: 'root = [7,13,11]',
      output: '[7,11,13]',
      explanation: 'Level 1 [13,11] is reversed to [11,13].',
    },
  ],
  hints: [
    'Use a DFS that processes symmetric pairs of nodes simultaneously.',
    'Pass (leftNode, rightNode, level) into the recursion; if level is odd, swap their values.',
    'Recurse: dfs(left.left, right.right, level+1) and dfs(left.right, right.left, level+1).',
  ],
  functionName: 'reverseOddLevelsRunner',
  params: ['arr'],
  preamble: { javascript: JS_PREAMBLE, python: PY_PREAMBLE },
  starterCode: {
    javascript: `function reverseOddLevels(root) {

}`,
    python: `def reverseOddLevels(root):
    pass`,
  },
  visibleTests: [
    { args: [[2,3,5,8,13,21,34]], expected: [2,5,3,8,13,21,34] },
    { args: [[7,13,11]], expected: [7,11,13] },
  ],
  hiddenTests: [
    { args: [[1]], expected: [1] },
    { args: [[1,2,3,4,5,6,7]], expected: [1,3,2,4,5,6,7] },
    { args: [[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]], expected: [1,3,2,4,5,6,7,15,14,13,12,11,10,9,8] },
  ],
};
