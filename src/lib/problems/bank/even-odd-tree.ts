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
      node.left = new TreeNode(arr[i]); queue.push(node.left);
    }
    i++;
    if (i < arr.length && arr[i] !== null && arr[i] !== undefined) {
      node.right = new TreeNode(arr[i]); queue.push(node.right);
    }
    i++;
  }
  return root;
}
function isEvenOddTreeRunner(arr) {
  return isEvenOddTree(__fromArray__(arr));
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
    a = [int(v) if isinstance(v, (int, float)) else None for v in raw_list]
    if not a or a[0] is None:
        return None
    root = TreeNode(a[0])
    queue = [root]
    i = 1
    while queue and i < len(a):
        node = queue.pop(0)
        if i < len(a) and a[i] is not None:
            node.left = TreeNode(a[i]); queue.append(node.left)
        i += 1
        if i < len(a) and a[i] is not None:
            node.right = TreeNode(a[i]); queue.append(node.right)
        i += 1
    return root

def isEvenOddTreeRunner(arr):
    return isEvenOddTree(__from_array__(arr))
`.trim();

export const problem: Problem = {
  id: 'even-odd-tree',
  title: 'Even Odd Tree',
  difficulty: 'medium',
  tags: ['tree'],
  description: `A binary tree is called **even-odd** if it meets these conditions:
- At every **even-indexed** level (0, 2, 4, …), all node values are **odd integers** listed in **strictly increasing** order left-to-right.
- At every **odd-indexed** level (1, 3, 5, …), all node values are **even integers** listed in **strictly decreasing** order left-to-right.

Given the root of a binary tree, return \`true\` if it is an even-odd tree, otherwise return \`false\`.

Trees are represented as level-order arrays, where \`null\` indicates a missing child.

> **Note:** \`TreeNode\` class and \`isEvenOddTreeRunner\` wrapper are pre-defined. Implement \`isEvenOddTree(root)\`.`,
  constraints: [
    'The number of nodes in the tree is in the range [1, 10^5].',
    '1 <= Node.val <= 10^6',
  ],
  examples: [
    {
      input: 'root = [1,10,4,3,null,7,9,12,8,6,null,null,2]',
      output: 'true',
      explanation:
        'Level 0: [1] — odd, trivially increasing. Level 1: [10,4] — even, decreasing. Level 2: [3,7,9] — odd, increasing. Level 3: [12,8,6,2] — even, decreasing.',
    },
    {
      input: 'root = [5,4,2,3,3,7]',
      output: 'false',
      explanation: 'Level 2 has [3,3,7] — not strictly increasing (3 = 3).',
    },
    {
      input: 'root = [5,9,1,3,5,7]',
      output: 'false',
      explanation: 'Level 1 has [9,1] — both odd, but even-indexed level 1 requires even values.',
    },
  ],
  hints: [
    'Use BFS (level-order traversal) and track the current level number.',
    'At even levels: verify all values are odd and strictly increasing left-to-right.',
    'At odd levels: verify all values are even and strictly decreasing left-to-right.',
  ],
  functionName: 'isEvenOddTreeRunner',
  params: ['root'],
  preamble: { javascript: JS_PREAMBLE, python: PY_PREAMBLE },
  starterCode: {
    javascript:
      '// TreeNode class and isEvenOddTreeRunner wrapper are pre-defined.\n// Implement the function below:\nfunction isEvenOddTree(root) {\n  \n}\n',
    python:
      '# TreeNode class and isEvenOddTreeRunner wrapper are pre-defined.\n# Implement the function below:\ndef isEvenOddTree(root):\n    pass\n',
  },
  visibleTests: [
    { args: [[1, 10, 4, 3, null, 7, 9, 12, 8, 6, null, null, 2]], expected: true },
    { args: [[5, 4, 2, 3, 3, 7]], expected: false },
    { args: [[5, 9, 1, 3, 5, 7]], expected: false },
  ],
  hiddenTests: [
    { args: [[1]], expected: true },
    { args: [[2]], expected: false },
    { args: [[1, 6, 4]], expected: true },
    { args: [[1, 6, 4, 3, 5, 1, 7]], expected: false },
  ],
};
