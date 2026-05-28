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
function minDiffInBSTRunner(arr) { return minDiffInBST(__fromArray__(arr)); }
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

def minDiffInBSTRunner(arr):
    return minDiffInBST(__from_array__(arr))
`.trim();

export const problem: Problem = {
  id: 'minimum-distance-bst-nodes',
  title: 'Minimum Distance Between BST Nodes',
  difficulty: 'easy',
  tags: ['tree'],
  description: `Given the \`root\` of a Binary Search Tree (BST), return the **minimum difference** between the values of any two different nodes in the tree.

Trees are represented as level-order arrays where \`null\` indicates a missing child.`,
  constraints: [
    'The number of nodes in the tree is in the range `[2, 100]`',
    '`0 <= Node.val <= 10^5`',
  ],
  examples: [
    {
      input: 'root = [4,2,6,1,3]',
      output: '1',
      explanation: 'In-order: [1,2,3,4,6]. Minimum difference = 1 (between adjacent values).',
    },
    {
      input: 'root = [1,null,48,12,49]',
      output: '1',
      explanation: 'In-order: [1,12,48,49]. Minimum difference = 1.',
    },
  ],
  hints: [
    'In-order traversal of a BST produces a sorted sequence. The minimum difference must be between two adjacent values in this sorted sequence.',
    'Track the previously visited node value during in-order traversal. Update the minimum difference at each step.',
    'Iterative or recursive in-order both work. No need to collect all values — just compare consecutive pairs.',
  ],
  functionName: 'minDiffInBSTRunner',
  params: ['arr'],
  preamble: { javascript: JS_PREAMBLE, python: PY_PREAMBLE },
  starterCode: {
    javascript: `// TreeNode and minDiffInBSTRunner wrapper are pre-defined.
// Implement the function below:
function minDiffInBST(root) {

}`,
    typescript: "function minDiffInBSTRunner(arr: number[]): number {\n\n}",

    python: `# TreeNode and minDiffInBSTRunner wrapper are pre-defined.
# Implement the function below:
def minDiffInBST(root):
    pass`,
  },
  visibleTests: [
    { args: [[4,2,6,1,3]], expected: 1 },
    { args: [[1,null,48,12,49]], expected: 1 },
    { args: [[5,3,7,2,4,6,8]], expected: 1 },
  ],
  hiddenTests: [
    { args: [[2,1,3]], expected: 1 },
    { args: [[100,50,150,25,75]], expected: 25 },
    { args: [[4,2,6,1,3,null,null]], expected: 1 },
    { args: [[10,7,13]], expected: 3 },
  ],
};
