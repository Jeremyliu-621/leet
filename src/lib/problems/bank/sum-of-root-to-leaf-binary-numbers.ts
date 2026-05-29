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
function sumRootToLeafRunner(arr) { return sumRootToLeaf(__fromArray__(arr)); }
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

def sumRootToLeafRunner(arr):
    if hasattr(arr, 'to_py'): arr = list(arr.to_py())
    return sumRootToLeaf(__from_array__(arr))
`.trim();

export const problem: Problem = {
  id: 'sum-of-root-to-leaf-binary-numbers',
  title: 'Sum of Root To Leaf Binary Numbers',
  difficulty: 'easy',
  tags: ['tree'],
  description: `You are given the \`root\` of a binary tree where each node has value \`0\` or \`1\`. Each root-to-leaf path represents a **binary number** starting with the most significant bit.

Return the **sum of these binary numbers**.

The function \`sumRootToLeafRunner(arr)\` is used for testing.`,
  constraints: [
    'The number of nodes in the tree is in the range [1, 1000].',
    'Node.val is 0 or 1.',
  ],
  examples: [
    {
      input: 'root = [1,0,1,0,1,0,1]',
      output: '22',
      explanation: '(100) + (101) + (110) + (111) = 4 + 5 + 6 + 7 = 22.',
    },
    {
      input: 'root = [0]',
      output: '0',
    },
  ],
  hints: [
    'DFS: pass the running binary number as you traverse. At each node, current = current * 2 + node.val.',
    'At a leaf node, add current to the result.',
    'The total number of paths is at most 1000, each of length ≤ 1000 bits.',
  ],
  functionName: 'sumRootToLeafRunner',
  params: ['arr'],
  starterCode: {
    javascript: `${JS_PREAMBLE}\n\nfunction sumRootToLeaf(root) {\n  \n}\n`,
    typescript: `${JS_PREAMBLE}\n\nfunction sumRootToLeaf(root: TreeNode | null): number {\n  \n}\n`,
    python: `${PY_PREAMBLE}\n\ndef sumRootToLeaf(root):\n    pass\n`,
  },
  visibleTests: [
    { args: [[1, 0, 1, 0, 1, 0, 1]], expected: 22 },
    { args: [[0]], expected: 0 },
  ],
  hiddenTests: [
    { args: [[1]], expected: 1 },
    { args: [[1, 0]], expected: 2 },
    { args: [[1, 1]], expected: 3 },
    { args: [[1, 0, 1]], expected: 5 },
    { args: [[1, 1, 0, 1, 1]], expected: 16 },
    { args: [[1, 0, 1, 1, null, null, 0]], expected: 11 },
  ],
};
