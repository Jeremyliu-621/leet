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
function sumNumbersRunner(arr) { return sumNumbers(__fromArray__(arr)); }
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

def sumNumbersRunner(arr):
    return sumNumbers(__from_array__(arr))
`.trim();

export const problem: Problem = {
  id: 'sum-root-to-leaf',
  title: 'Sum Root to Leaf Numbers',
  difficulty: 'medium',
  tags: ['tree'],
  description: `Given the \`root\` of a binary tree where each node contains a single digit (0–9), each root-to-leaf path represents a number formed by concatenating the digits along the path (e.g., the path 1 → 2 → 3 represents the number 123). Return the **total sum** of all root-to-leaf numbers.

> **Note:** A \`TreeNode\` class is pre-defined. Nodes have \`val\`, \`left\`, and \`right\` fields.`,
  constraints: [
    'The number of nodes in the tree is in the range [1, 1000]',
    '0 <= Node.val <= 9',
    'The depth of the tree will not exceed 10',
  ],
  examples: [
    {
      input: 'root = [1,2,3]',
      output: '25',
      explanation: 'The paths are 1→2 = 12 and 1→3 = 13. Total = 12 + 13 = 25.',
    },
    {
      input: 'root = [4,9,0,5,1]',
      output: '1026',
      explanation:
        'The paths are 4→9→5 = 495, 4→9→1 = 491, and 4→0 = 40. Total = 495 + 491 + 40 = 1026.',
    },
  ],
  hints: [
    'Use DFS with a `current_number` parameter. At each node, update it: `current_number = current_number * 10 + node.val`.',
    'At a leaf node (no children), add `current_number` to the running total — that path is complete.',
    'Recurse on left and right children, passing the updated `current_number` down.',
  ],
  functionName: 'sumNumbersRunner',
  params: ['root'],
  preamble: { javascript: JS_PREAMBLE, python: PY_PREAMBLE },
  starterCode: {
    javascript:
      '// TreeNode class is pre-defined. Implement the function below:\nfunction sumNumbers(root) {\n  \n}\n',
    python:
      '# TreeNode class is pre-defined. Implement the function below:\ndef sumNumbers(root):\n    pass\n',
  },
  visibleTests: [
    { args: [[1, 2, 3]], expected: 25 },
    { args: [[4, 9, 0, 5, 1]], expected: 1026 },
    { args: [[1]], expected: 1 },
  ],
  hiddenTests: [
    { args: [[1, 0]], expected: 10 },
    { args: [[1, 2, null, 3]], expected: 123 },
    { args: [[9, 9, 9]], expected: 198 },
  ],
};
