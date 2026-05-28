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
function kthSmallestRunner(arr, k) { return kthSmallest(__fromArray__(arr), k); }
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

def kthSmallestRunner(arr, k):
    return kthSmallest(__from_array__(arr), k)
`.trim();

export const problem: Problem = {
  id: 'kth-smallest-bst',
  title: 'Kth Smallest Element in a BST',
  difficulty: 'medium',
  tags: ['tree'],
  description: `Given the \`root\` of a binary search tree and an integer \`k\`, return the \`k\`th smallest value (1-indexed) among all the nodes' values in the tree.

Trees are represented as level-order arrays (BFS order), where \`null\` indicates a missing child.

**Key insight:** In-order traversal of a BST visits nodes in sorted (ascending) order. Stop at the \`k\`th node visited.`,
  constraints: [
    'The number of nodes in the tree is n',
    '1 <= k <= n <= 10^4',
    '0 <= Node.val <= 10^4',
  ],
  examples: [
    {
      input: 'root = [3,1,4,null,2], k = 1',
      output: '1',
      explanation: 'In-order traversal: [1,2,3,4]. The 1st smallest is 1.',
    },
    {
      input: 'root = [5,3,6,2,4,null,null,1], k = 3',
      output: '3',
      explanation: 'In-order traversal: [1,2,3,4,5,6]. The 3rd smallest is 3.',
    },
  ],
  hints: [
    'In-order traversal (left → root → right) of a BST produces sorted ascending order.',
    'Iterative in-order traversal with a stack is more efficient for early exit: push left spine, pop and count, then move to right child.',
    'Recursive approach: collect all values via in-order DFS into an array, then return result[k-1].',
  ],
  functionName: 'kthSmallestRunner',
  params: ['arr', 'k'],
  preamble: { javascript: JS_PREAMBLE, python: PY_PREAMBLE },
  starterCode: {
    javascript: `// TreeNode class and kthSmallestRunner wrapper are pre-defined.
// Implement the function below:
function kthSmallest(root, k) {

}
`,
    typescript: "function kthSmallestRunner(arr: (number | null)[], k: number): number {\n\n}",

    python: `# TreeNode class and kthSmallestRunner wrapper are pre-defined.
# Implement the function below:
def kthSmallest(root, k):
    pass
`,
  },
  visibleTests: [
    { args: [[3, 1, 4, null, 2], 1], expected: 1 },
    { args: [[5, 3, 6, 2, 4, null, null, 1], 3], expected: 3 },
    { args: [[1], 1], expected: 1 },
  ],
  hiddenTests: [
    { args: [[3, 1, 4, null, 2], 3], expected: 3 },
    { args: [[5, 3, 6, 2, 4, null, null, 1], 6], expected: 6 },
    { args: [[2, 1, 3], 2], expected: 2 },
    { args: [[4, 2, 6, 1, 3, 5, 7], 4], expected: 4 },
  ],
};
