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
function averageOfLevelsRunner(arr) { return averageOfLevels(__fromArray__(arr)); }
`.trim();

const PY_PREAMBLE = `
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

def __from_array__(arr):
    if hasattr(arr, 'to_py'):
        raw = arr.to_py()
    else:
        raw = list(arr)
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

def averageOfLevelsRunner(arr):
    return averageOfLevels(__from_array__(arr))
`.trim();

export const problem: Problem = {
  id: 'average-of-levels',
  title: 'Average of Levels in Binary Tree',
  difficulty: 'easy',
  tags: ['tree'],
  description: `Given the \`root\` of a binary tree, return the **average value** of the nodes on each level in the form of an array.

Answers within \`10^-5\` of the actual answer will be accepted.

> **Note:** A \`TreeNode\` class is pre-defined. Nodes have \`val\`, \`left\`, and \`right\` fields.`,
  constraints: [
    'The number of nodes in the tree is in the range [1, 10^4]',
    '-2^31 <= Node.val <= 2^31 - 1',
  ],
  examples: [
    {
      input: 'root = [3,9,20,null,null,15,7]',
      output: '[3.00000,14.50000,11.00000]',
      explanation: 'Level 0: avg(3)=3. Level 1: avg(9,20)=14.5. Level 2: avg(15,7)=11.',
    },
    {
      input: 'root = [3,9,20,15,7]',
      output: '[3.00000,14.50000,11.00000]',
    },
  ],
  hints: [
    'Use BFS (level-order traversal): process one full level at a time.',
    'For each level, sum all node values and divide by the count of nodes at that level.',
    `\`\`\`js
// BFS: push root, for each level collect values, compute average
let res = [], queue = [root];
while (queue.length) {
  const n = queue.length, lvl = [];
  for (let i = 0; i < n; i++) {
    const node = queue.shift();
    lvl.push(node.val);
    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
  }
  res.push(lvl.reduce((a,b)=>a+b,0)/lvl.length);
}
return res;\`\`\``,
  ],
  functionName: 'averageOfLevelsRunner',
  params: ['root'],
  preamble: { javascript: JS_PREAMBLE, python: PY_PREAMBLE },
  starterCode: {
    javascript:
      '// TreeNode class is pre-defined. Implement the function below:\nfunction averageOfLevels(root) {\n  \n}\n',
    python:
      '# TreeNode class is pre-defined. Implement the function below:\ndef averageOfLevels(root):\n    pass\n',
  },
  visibleTests: [
    { args: [[3, 9, 20, null, null, 15, 7]], expected: [3, 14.5, 11] },
    { args: [[3, 9, 20, 15, 7]], expected: [3, 14.5, 11] },
    { args: [[1]], expected: [1] },
  ],
  hiddenTests: [
    { args: [[1, 2, 3]], expected: [1, 2.5] },
    { args: [[2, 2, 2, 2, 2, 2, 2]], expected: [2, 2, 2] },
    { args: [[1, 2]], expected: [1, 2] },
    { args: [[5, 3, 8, 1, 4, 7, 9]], expected: [5, 5.5, 5.25] },
  ],
};
