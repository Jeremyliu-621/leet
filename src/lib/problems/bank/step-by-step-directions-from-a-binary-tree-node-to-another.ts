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
function getDirectionsRunner(arr, startValue, destValue) { return getDirections(__fromArray__(arr), startValue, destValue); }
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

def getDirectionsRunner(arr, startValue, destValue):
    return getDirections(__from_array__(arr), int(startValue), int(destValue))
`.trim();

export const problem: Problem = {
  id: 'step-by-step-directions-from-a-binary-tree-node-to-another',
  title: 'Step-By-Step Directions From a Binary Tree Node to Another',
  difficulty: 'medium',
  tags: ['tree'],
  description: `You are given the \`root\` of a binary tree with \`n\` nodes. Each node has a **unique** value from \`1\` to \`n\`. You are also given integers \`startValue\` and \`destValue\`.

Find the **shortest path** from node \`startValue\` to node \`destValue\` and return the step-by-step directions as a string using:
- \`"L"\` — go to the left child
- \`"R"\` — go to the right child
- \`"U"\` — go to the parent

Trees are represented as level-order (BFS) arrays where \`null\` marks a missing child.

> **Note:** A \`TreeNode\` class and a \`getDirectionsRunner(arr, startValue, destValue)\` wrapper are pre-defined. Implement \`getDirections(root, startValue, destValue)\`.`,
  constraints: [
    'The number of nodes in the tree is n.',
    '2 <= n <= 10^5',
    '1 <= Node.val <= n',
    'All Node.val are unique.',
    '1 <= startValue, destValue <= n',
    'startValue != destValue',
  ],
  examples: [
    {
      input: 'root = [5,1,2,3,null,6,4], startValue = 3, destValue = 6',
      output: '"UURL"',
      explanation:
        'Path from 3 to 6: go up to 1 (U), up to 5 (U), right to 2 (R), left to 6 (L). Result: "UURL".',
    },
    {
      input: 'root = [2,1], startValue = 2, destValue = 1',
      output: '"L"',
      explanation: 'Node 1 is the left child of root 2, so the path is simply "L".',
    },
  ],
  hints: [
    'Find the path from the root to `startValue` and the path from the root to `destValue` using DFS. Both paths share a common prefix — the portion up to and including the Lowest Common Ancestor (LCA).',
    'Strip the common prefix from both paths. Replace each remaining step in the root-to-start path with "U" (moving upward toward the LCA). Then append the remaining root-to-dest steps as-is.',
    'The final answer is `"U".repeat(startSteps.length - commonPrefixLen) + destSteps.slice(commonPrefixLen)`. No need to explicitly find the LCA — it falls out naturally from the common-prefix removal.',
  ],
  functionName: 'getDirectionsRunner',
  params: ['root', 'startValue', 'destValue'],
  preamble: { javascript: JS_PREAMBLE, python: PY_PREAMBLE },
  starterCode: {
    javascript:
      '// TreeNode class and getDirectionsRunner wrapper are pre-defined.\nfunction getDirections(root, startValue, destValue) {\n  \n}\n',
    typescript:
      'function getDirectionsRunner(root: (number | null)[], startValue: number, destValue: number): string {\n  \n}',
    python:
      '# TreeNode class and getDirectionsRunner wrapper are pre-defined.\ndef getDirections(root, startValue, destValue):\n    pass\n',
  },
  visibleTests: [
    { args: [[5, 1, 2, 3, null, 6, 4], 3, 6], expected: 'UURL' },
    { args: [[2, 1], 2, 1], expected: 'L' },
  ],
  hiddenTests: [
    { args: [[1, 2], 1, 2], expected: 'L' },
    { args: [[1, null, 2], 1, 2], expected: 'R' },
    { args: [[1, 2, 3], 2, 3], expected: 'UR' },
    { args: [[1, 2, 3], 3, 2], expected: 'UL' },
    { args: [[5, 1, 2, 3, null, 6, 4], 6, 3], expected: 'UULL' },
    { args: [[5, 1, 2, 3, null, 6, 4], 4, 3], expected: 'UULL' },
  ],
};
