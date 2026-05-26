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
function getDirections(arr, s, t) {
  return getDirectionsImpl(__fromArray__(arr), s, t);
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

def getDirections(arr, s, t):
    return getDirectionsImpl(__from_array__(arr), int(s), int(t))
`.trim();

export const problem: Problem = {
  id: 'step-by-step-directions',
  title: 'Step-By-Step Directions From a Binary Tree Node to Another',
  difficulty: 'medium',
  tags: ['tree'],
  description: `You are given the \`root\` of a **binary tree** with \`n\` nodes. Each node is uniquely valued from \`1\` to \`n\`. You are also given an integer \`s\` denoting a **start** node and an integer \`t\` denoting a **destination** node.

Find the **shortest path** from node \`s\` to node \`t\`. Use the following steps to describe the path:

- \`"L"\` means go from a node to its **left child**.
- \`"R"\` means go from a node to its **right child**.
- \`"U"\` means go from a node to its **parent**.

Return the step-by-step directions of the shortest path from \`s\` to \`t\`.

Trees are represented as level-order arrays (BFS order), where \`null\` indicates a missing child.

> **Note:** \`TreeNode\` class and a runner wrapper \`getDirections(arr, s, t)\` are pre-defined. Implement \`getDirectionsImpl(root, s, t)\`.`,
  constraints: [
    'The number of nodes in the tree is n.',
    '2 <= n <= 10^5',
    '1 <= Node.val <= n',
    'All Node.val are unique.',
    '1 <= s, t <= n',
    's != t',
  ],
  examples: [
    {
      input: 'root = [5,1,2,3,null,6,4], s = 3, t = 6',
      output: '"UURL"',
      explanation: 'Path from 3 to 6: go up to 1 (U), up to 5 (U), right to 2 (R), left to 6 (L).',
    },
    {
      input: 'root = [2,1], s = 2, t = 1',
      output: '"L"',
      explanation: 'Node 1 is the left child of root 2, so direction is just "L".',
    },
  ],
  hints: [
    'Find the path from root to s and from root to t using DFS. Remove the common prefix (LCA portion).',
    'Replace every step in the root-to-s path with "U" (going up). Append the root-to-t suffix unchanged.',
    'The LCA is where the two paths diverge; steps before LCA cancel out.',
  ],
  functionName: 'getDirections',
  params: ['root', 's', 't'],
  preamble: { javascript: JS_PREAMBLE, python: PY_PREAMBLE },
  starterCode: {
    javascript:
      '// TreeNode class and getDirections wrapper are pre-defined.\n// Implement the function below:\nfunction getDirectionsImpl(root, s, t) {\n  \n}\n',
    python:
      '# TreeNode class and getDirections wrapper are pre-defined.\n# Implement the function below:\ndef getDirectionsImpl(root, s, t):\n    pass\n',
  },
  visibleTests: [
    { args: [[5, 1, 2, 3, null, 6, 4], 3, 6], expected: 'UURL' },
    { args: [[2, 1], 2, 1], expected: 'L' },
  ],
  hiddenTests: [
    { args: [[1, 2, 3], 2, 3], expected: 'UR' },
    { args: [[1, 2, 3], 3, 2], expected: 'UL' },
    { args: [[5, 1, 2, 3, null, 6, 4], 6, 3], expected: 'UULL' },
    { args: [[1, 2, null, 3, null, 4], 4, 1], expected: 'UUU' },
    { args: [[3, 1, 2], 1, 2], expected: 'UR' },
    { args: [[5, 1, 2, 3, null, 6, 4], 4, 3], expected: 'UULL' },
  ],
};
