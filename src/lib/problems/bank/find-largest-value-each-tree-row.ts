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
function largestValuesRunner(arr) { return largestValues(__fromArray__(arr)); }
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

def largestValuesRunner(arr):
    return largestValues(__from_array__(arr))
`.trim();

export const problem: Problem = {
  id: 'find-largest-value-each-tree-row',
  title: 'Find Largest Value in Each Tree Row',
  difficulty: 'medium',
  tags: ['tree'],
  description: `Given the root of a binary tree, return an array of the **largest value** in each row of the tree (0-indexed).

Trees are represented as level-order (BFS) arrays where \`null\` marks a missing child.

**Approach:** BFS level by level. For each level, collect all node values and take the maximum.`,
  constraints: [
    'The number of nodes in the tree will be in the range [0, 10000]',
    '-2^31 <= Node.val <= 2^31 - 1',
  ],
  examples: [
    {
      input: 'root = [1,3,2,5,3,null,9]',
      output: '[1,3,9]',
      explanation: 'Level 0: [1], max=1. Level 1: [3,2], max=3. Level 2: [5,3,9], max=9.',
    },
    {
      input: 'root = [1,2,3]',
      output: '[1,3]',
    },
    {
      input: 'root = []',
      output: '[]',
    },
  ],
  hints: [
    'Use BFS (a queue). Process nodes level by level. For each level, scan all values and keep a running maximum.',
    'Initialize `max = -Infinity` for each level. After processing all nodes in the level, push `max` to your result array.',
    '```js\nconst res = [], q = root ? [root] : [];\nwhile (q.length) {\n  let max = -Infinity, len = q.length;\n  for (let i = 0; i < len; i++) {\n    const n = q.shift();\n    max = Math.max(max, n.val);\n    if (n.left) q.push(n.left);\n    if (n.right) q.push(n.right);\n  }\n  res.push(max);\n}\nreturn res;\n```',
  ],
  functionName: 'largestValuesRunner',
  params: ['root'],
  preamble: { javascript: JS_PREAMBLE, python: PY_PREAMBLE },
  starterCode: {
    javascript: '// TreeNode class and largestValuesRunner wrapper are pre-defined.\nfunction largestValues(root) {\n  \n}\n',
    typescript: "function largestValuesRunner(root: (number | null)[]): number[] {\n  \n}",

    python: '# TreeNode class and largestValuesRunner wrapper are pre-defined.\ndef largestValues(root):\n    pass\n',
  },
  visibleTests: [
    { args: [[1, 3, 2, 5, 3, null, 9]], expected: [1, 3, 9] },
    { args: [[1, 2, 3]], expected: [1, 3] },
    { args: [[]], expected: [] },
  ],
  hiddenTests: [
    { args: [[1]], expected: [1] },
    { args: [[1, -1]], expected: [1, -1] },
    { args: [[3, 9, 20, null, null, 15, 7]], expected: [3, 20, 15] },
    { args: [[-10, -5, -1]], expected: [-10, -1] },
    { args: [[1, 2, null, 3, null, 4]], expected: [1, 2, 3, 4] },
  ],
};
