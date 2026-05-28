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
function findBottomLeftValueRunner(arr) { return findBottomLeftValue(__fromArray__(arr)); }
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

def findBottomLeftValueRunner(arr):
    return findBottomLeftValue(__from_array__(arr))
`.trim();

export const problem: Problem = {
  id: 'find-bottom-left-tree-value',
  title: 'Find Bottom Left Tree Value',
  difficulty: 'medium',
  tags: ['tree'],
  description: `Given the root of a binary tree, return the **leftmost value** in the last row of the tree.

Trees are represented as level-order (BFS) arrays where \`null\` marks a missing child.

**Approach:** BFS level by level. The first node visited at the deepest level is the answer — it's the leftmost node in the last row.`,
  constraints: [
    'The number of nodes in the tree is in the range [1, 10000]',
    '-2^31 <= Node.val <= 2^31 - 1',
  ],
  examples: [
    {
      input: 'root = [2,1,3]',
      output: '1',
      explanation: 'The last row contains [1, 3]. The leftmost value is 1.',
    },
    {
      input: 'root = [1,2,3,4,null,5,6,null,null,7]',
      output: '7',
      explanation: 'The deepest level has node 7 as the leftmost value.',
    },
    {
      input: 'root = [1]',
      output: '1',
    },
  ],
  hints: [
    'BFS (queue) approach: after processing each level, remember the first node (leftmost) value of that level. When BFS ends, return the last recorded leftmost value.',
    'Alternative: BFS right-to-left (enqueue right child before left). The very last node processed will be the bottom-left node.',
    '```js\nconst q = [root]; let ans = root.val;\nwhile (q.length) {\n  ans = q[0].val; // first of current level\n  const len = q.length;\n  for (let i = 0; i < len; i++) {\n    const n = q.shift();\n    if (n.left) q.push(n.left);\n    if (n.right) q.push(n.right);\n  }\n}\nreturn ans;\n```',
  ],
  functionName: 'findBottomLeftValueRunner',
  params: ['root'],
  preamble: { javascript: JS_PREAMBLE, python: PY_PREAMBLE },
  starterCode: {
    javascript: '// TreeNode class and findBottomLeftValueRunner wrapper are pre-defined.\nfunction findBottomLeftValue(root) {\n  \n}\n',
    typescript: "function findBottomLeftValueRunner(root: number[]): number {\n  \n}",

    python: '# TreeNode class and findBottomLeftValueRunner wrapper are pre-defined.\ndef findBottomLeftValue(root):\n    pass\n',
  },
  visibleTests: [
    { args: [[2, 1, 3]], expected: 1 },
    { args: [[1, 2, 3, 4, null, 5, 6, null, null, 7]], expected: 7 },
    { args: [[1]], expected: 1 },
  ],
  hiddenTests: [
    { args: [[1, 2]], expected: 2 },
    { args: [[1, null, 2]], expected: 2 },
    { args: [[3, 9, 20, null, null, 15, 7]], expected: 15 },
    { args: [[1, 2, 3, 4, 5, 6, 7]], expected: 4 },
  ],
};
