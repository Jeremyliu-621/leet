import type { Problem } from '../types';

const JS_PREAMBLE = `
class TreeNode {
  constructor(val = 0, left = null, right = null) {
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
    if (arr[i] !== null && arr[i] !== undefined) { node.left = new TreeNode(arr[i]); queue.push(node.left); }
    i++;
    if (i < arr.length && arr[i] !== null && arr[i] !== undefined) { node.right = new TreeNode(arr[i]); queue.push(node.right); }
    i++;
  }
  return root;
}
function sumNumbersRunner(arr) {
  return sumNumbers(__fromArray__(arr));
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

def sumNumbersRunner(arr):
    return sumNumbers(__from_array__(arr))
`.trim();

export const problem: Problem = {
  id: 'sum-root-to-leaf-numbers',
  title: 'Sum Root to Leaf Numbers',
  difficulty: 'medium',
  tags: ['tree'],
  description: `You are given the \`root\` of a binary tree containing digits from \`0\` to \`9\` only.

Each root-to-leaf path in the tree represents a number. For example, the root-to-leaf path \`1 → 2 → 3\` represents the number \`123\`.

Return the **total sum** of all root-to-leaf numbers. Test cases are generated so that the answer will fit in a **32-bit** integer.

A **leaf** node is a node with no children.

> **Note:** The tree is represented as a BFS-level array where \`null\` marks a missing child.`,
  constraints: [
    'The number of nodes in the tree is in the range [1, 1000].',
    '0 <= Node.val <= 9',
    'The depth of the tree will not exceed 10.',
  ],
  examples: [
    {
      input: 'root = [1,2,3]',
      output: '25',
      explanation: 'The root-to-leaf path 1→2 represents 12. The root-to-leaf path 1→3 represents 13. Sum = 12 + 13 = 25.',
    },
    {
      input: 'root = [4,9,0,5,1]',
      output: '1026',
      explanation: 'Path 4→9→5 = 495. Path 4→9→1 = 491. Path 4→0 = 40. Sum = 495 + 491 + 40 = 1026.',
    },
  ],
  hints: [
    'Use DFS, passing the current number (formed by the path so far) down to each child.',
    'At each node, update current number as `cur = cur * 10 + node.val`.',
    'When you reach a leaf (no left or right child), add `cur` to the total sum.',
  ],
  functionName: 'sumNumbersRunner',
  params: ['root'],
  preamble: { javascript: JS_PREAMBLE, python: PY_PREAMBLE },
  starterCode: {
    javascript: `// TreeNode is pre-defined. Implement the function below:
function sumNumbers(root) {

}`,
    typescript: "function sumNumbersRunner(root: number[]): number {\n\n}",

    python: `# TreeNode is pre-defined. Implement the function below:
def sumNumbers(root):
    pass`,
  },
  visibleTests: [
    { args: [[1, 2, 3]], expected: 25 },
    { args: [[4, 9, 0, 5, 1]], expected: 1026 },
    { args: [[1]], expected: 1 },
  ],
  hiddenTests: [
    { args: [[1, 2]], expected: 12 },
    { args: [[1, null, 2]], expected: 12 },
    { args: [[5, 4, 6]], expected: 110 },
    { args: [[1, 2, 3, 4, 5]], expected: 262 },
    { args: [[9, 3, 5, null, null, null, 8]], expected: 1051 },
    { args: [[1, 0]], expected: 10 },
  ],
};
