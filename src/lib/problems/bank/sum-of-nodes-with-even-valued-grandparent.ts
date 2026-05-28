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
function sumEvenGrandparentRunner(arr) { return sumEvenGrandparent(__fromArray__(arr)); }
`.trim();

const PY_PREAMBLE = `
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

def __from_array__(raw):
    raw_list = raw.to_py() if hasattr(raw, 'to_py') else list(raw)
    arr = [int(v) if isinstance(v, (int, float)) else None for v in raw_list]
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

def sumEvenGrandparentRunner(arr):
    return sumEvenGrandparent(__from_array__(arr))
`.trim();

export const problem: Problem = {
  id: 'sum-of-nodes-with-even-valued-grandparent',
  title: 'Sum of Nodes with Even-Valued Grandparent',
  difficulty: 'medium',
  tags: ['tree'],
  description: `Given the root of a binary tree, return the **sum of values of nodes** with an **even-valued grandparent**. A grandparent of a node is the parent of its parent. If there are no such nodes, return \`0\`.

Trees are represented as level-order arrays (BFS order), where \`null\` indicates a missing child.

**Approach:** Use DFS, passing the parent and grandparent values down as parameters. At each node, if the grandparent value is even, add the current node's value to the running sum.`,
  constraints: [
    'The number of nodes in the tree is in the range [1, 10^4]',
    '1 <= Node.val <= 100',
  ],
  examples: [
    {
      input: 'root = [6,7,8,2,7,1,3]',
      output: '13',
      explanation:
        'All level-2 nodes (2, 7, 1, 3) have grandparent 6, which is even. Their sum is 2 + 7 + 1 + 3 = 13.',
    },
    {
      input: 'root = [1]',
      output: '0',
      explanation: 'There are no nodes with a grandparent.',
    },
  ],
  hints: [
    'Use a recursive helper that passes the parent value and grandparent value as arguments.',
    'At each node, if the grandparent value is even, add the current node\'s value to the sum.',
    'Recurse on both children, passing the current node as the new parent and the old parent as the new grandparent.',
  ],
  functionName: 'sumEvenGrandparentRunner',
  params: ['root'],
  preamble: { javascript: JS_PREAMBLE, python: PY_PREAMBLE },
  starterCode: {
    javascript:
      '// TreeNode class and sumEvenGrandparentRunner wrapper are pre-defined.\n// Implement the function below:\nfunction sumEvenGrandparent(root) {\n  \n}\n',
    typescript: "function sumEvenGrandparentRunner(root: number[]): number {\n  \n}",

    python:
      '# TreeNode class and sumEvenGrandparentRunner wrapper are pre-defined.\n# Implement the function below:\ndef sumEvenGrandparent(root):\n    pass\n',
  },
  visibleTests: [
    { args: [[6, 7, 8, 2, 7, 1, 3]], expected: 13 },
    { args: [[1]], expected: 0 },
    { args: [[1, 2, 3]], expected: 0 },
  ],
  hiddenTests: [
    { args: [[2, 3, null, 4]], expected: 4 },
    { args: [[4, 2, 6, 1, 3, 5, 7]], expected: 16 },
    { args: [[1, 2, 3, 4]], expected: 0 },
    { args: [[2, 4, 6, 1, 3, 5, 7]], expected: 16 },
  ],
};
