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
function isCompleteTreeRunner(arr) { return isCompleteTree(__fromArray__(arr)); }
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

def isCompleteTreeRunner(arr):
    return isCompleteTree(__from_array__(arr))
`.trim();

export const problem: Problem = {
  id: 'check-completeness-binary-tree',
  title: 'Check Completeness of a Binary Tree',
  difficulty: 'medium',
  tags: ['tree'],
  description: `Given the root of a binary tree, determine if it is a **complete binary tree**.

In a complete binary tree, every level, except possibly the last, is completely filled, and all nodes in the last level are as far left as possible.

Trees are given as BFS level-order arrays with \`null\` for missing nodes.`,
  constraints: [
    'The number of nodes in the tree is in the range `[1, 100]`.',
    '`1 <= Node.val <= 1000`',
  ],
  examples: [
    {
      input: 'root = [1,2,3,4,5,6]',
      output: 'true',
      explanation: 'Every level is filled and the last level nodes are as far left as possible.',
    },
    {
      input: 'root = [1,2,3,4,5,null,7]',
      output: 'false',
      explanation: 'Node 7 is to the right of the null (missing node 6), so it is not complete.',
    },
  ],
  hints: [
    'Use BFS. Once you encounter a null child, all subsequent nodes in the BFS order must also be null.',
    'If you see a non-null node after a null, the tree is not complete.',
    `\`\`\`js
// BFS; once you see null, all remaining must also be null
const q = [root];
let seenNull = false;
while (q.length) {
  const node = q.shift();
  if (!node) { seenNull = true; continue; }
  if (seenNull) return false;
  q.push(node.left, node.right);
}
return true;\`\`\``,
  ],
  functionName: 'isCompleteTreeRunner',
  params: ['root'],
  preamble: { javascript: JS_PREAMBLE, python: PY_PREAMBLE },
  starterCode: {
    javascript:
      '// TreeNode class and isCompleteTreeRunner wrapper are pre-defined.\nfunction isCompleteTree(root) {\n  \n}\n',
    typescript: "function isCompleteTreeRunner(root: number[]): boolean {\n  \n}",

    python:
      '# TreeNode class and isCompleteTreeRunner wrapper are pre-defined.\ndef isCompleteTree(root):\n    pass\n',
  },
  visibleTests: [
    { args: [[1, 2, 3, 4, 5, 6]], expected: true },
    { args: [[1, 2, 3, 4, 5, null, 7]], expected: false },
    { args: [[1]], expected: true },
  ],
  hiddenTests: [
    { args: [[1, 2, 3]], expected: true },
    { args: [[1, 2, 3, 4, 5, 6, 7]], expected: true },
    { args: [[1, 2, 3, 4, null, 5]], expected: false },
    { args: [[1, 2]], expected: true },
  ],
};
