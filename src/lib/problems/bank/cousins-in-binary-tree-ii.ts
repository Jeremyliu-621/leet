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
    if (node) {
      result.push(node.val);
      queue.push(node.left);
      queue.push(node.right);
    } else {
      result.push(null);
    }
  }
  while (result.length > 0 && result[result.length - 1] === null) result.pop();
  return result;
}
function cousinsInBinaryTreeIIRunner(arr) { return __toArray__(cousinsInBinaryTreeII(__fromArray__(arr))); }
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
    from collections import deque
    result = []
    queue = deque([root])
    while queue:
        node = queue.popleft()
        if node:
            result.append(node.val)
            queue.append(node.left)
            queue.append(node.right)
        else:
            result.append(None)
    while result and result[-1] is None:
        result.pop()
    return result

def cousinsInBinaryTreeIIRunner(arr):
    return __to_array__(cousinsInBinaryTreeII(__from_array__(arr)))
`.trim();

export const problem: Problem = {
  id: 'cousins-in-binary-tree-ii',
  title: 'Cousins in Binary Tree II',
  difficulty: 'medium',
  tags: ['tree'],
  description: `Given the \`root\` of a binary tree, replace the value of each node with the **sum of all values of its cousin nodes**.

Two nodes are **cousins** if they have the same depth but **different parents**.

Return the root of the modified tree. The root always becomes \`0\` (it has no cousins).

Trees are given and returned as level-order arrays where \`null\` represents a missing node.`,
  constraints: [
    'The number of nodes in the tree is in the range `[1, 10^5]`.',
    '`1 <= Node.val <= 10^4`',
  ],
  examples: [
    {
      input: 'root = [5,4,9,1,10,null,7]',
      output: '[0,0,0,7,7,null,11]',
      explanation:
        'Level-2 sum = 1+10+7 = 18. Nodes 1 and 10 share parent 4 (sibling sum 11), so each becomes 18−11=7. Node 7 is alone under parent 9 (sibling sum 7), so it becomes 18−7=11.',
    },
    {
      input: 'root = [3,1,2]',
      output: '[0,0,0]',
      explanation:
        'Nodes 1 and 2 are siblings, not cousins. Each gets level_sum − sibling_sum = 3 − 3 = 0.',
    },
  ],
  hints: [
    'BFS level by level. For each level, compute the total `levelSum` by scanning all children of the current queue.',
    'Then, for each parent in the current queue, compute `sibSum = sum of parent\'s children`. Each child\'s new value = `levelSum − sibSum`.',
    '```js\nfunction cousinsInBinaryTreeII(root) {\n  if (!root) return root;\n  root.val = 0;\n  let queue = [root];\n  while (queue.length > 0) {\n    const next = [];\n    let levelSum = 0;\n    for (const node of queue) {\n      if (node.left) { next.push(node.left); levelSum += node.left.val; }\n      if (node.right) { next.push(node.right); levelSum += node.right.val; }\n    }\n    for (const node of queue) {\n      const sib = (node.left ? node.left.val : 0) + (node.right ? node.right.val : 0);\n      if (node.left) node.left.val = levelSum - sib;\n      if (node.right) node.right.val = levelSum - sib;\n    }\n    queue = next;\n  }\n  return root;\n}\n```',
  ],
  functionName: 'cousinsInBinaryTreeIIRunner',
  params: ['root'],
  preamble: { javascript: JS_PREAMBLE, python: PY_PREAMBLE },
  starterCode: {
    javascript: `// TreeNode class and cousinsInBinaryTreeIIRunner wrapper are pre-defined.
function cousinsInBinaryTreeII(root) {
  // Replace each node's value with the sum of its cousin nodes' values
}`,
    python: `# TreeNode class and cousinsInBinaryTreeIIRunner wrapper are pre-defined.
def cousinsInBinaryTreeII(root):
    # Replace each node's value with the sum of its cousin nodes' values
    pass`,
  },
  visibleTests: [
    { args: [[5, 4, 9, 1, 10, null, 7]], expected: [0, 0, 0, 7, 7, null, 11] },
    { args: [[3, 1, 2]], expected: [0, 0, 0] },
    { args: [[1, 2, 3, 4, null, null, 5]], expected: [0, 0, 0, 5, null, null, 4] },
  ],
  hiddenTests: [
    { args: [[1]], expected: [0] },
    { args: [[1, 2, null, 3]], expected: [0, 0, null, 0] },
    { args: [[1, 2, 3, 4, 5, 6, 7]], expected: [0, 0, 0, 13, 13, 9, 9] },
    { args: [[10, 5, 20, 3, 7, null, 25]], expected: [0, 0, 0, 25, 25, null, 10] },
    { args: [[1, 2, 3, null, 4, 5, null]], expected: [0, 0, 0, null, 5, 4] },
  ],
};
