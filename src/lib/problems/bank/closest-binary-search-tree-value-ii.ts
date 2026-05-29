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
function closestKValuesRunner(arr, target, k) {
  return closestKValues(__fromArray__(arr), target, k).sort((a, b) => a - b);
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
            node.left = TreeNode(arr[i]); queue.append(node.left)
        i += 1
        if i < len(arr) and arr[i] is not None:
            node.right = TreeNode(arr[i]); queue.append(node.right)
        i += 1
    return root

def closestKValuesRunner(arr, target, k):
    root = __from_array__(arr)
    result = closestKValues(root, float(target), int(k))
    return sorted(result)
`.trim();

export const problem: Problem = {
  id: 'closest-binary-search-tree-value-ii',
  title: 'Closest Binary Search Tree Value II',
  difficulty: 'hard',
  tags: ['tree', 'binary-search', 'heap'],
  description: `Given the \`root\` of a binary search tree, a \`target\` value, and an integer \`k\`, return the \`k\` values in the BST that are closest to the \`target\`. You may return the answer in **any order**.

You are guaranteed to have only one unique set of \`k\` values in the BST that are closest to the \`target\`.`,
  constraints: [
    'The number of nodes in the tree is \`n\`.',
    '`1 <= k <= n <= 10^4`',
    '`0 <= Node.val <= 10^9`',
    '`-10^9 <= target <= 10^9`',
  ],
  examples: [
    {
      input: 'root = [4,2,5,1,3], target = 3.714286, k = 2',
      output: '[4,3]',
      explanation: 'The 2 values closest to 3.714 are 3 and 4. Output sorted for clarity.',
    },
    {
      input: 'root = [1], target = 0.000000, k = 1',
      output: '[1]',
    },
  ],
  hints: [
    'Do an in-order traversal to get all values in sorted order.',
    'Use two pointers on the sorted list: one starting at the largest value ≤ target, one just past it.',
    'At each step, take whichever pointer points to the value closer to target. Move that pointer inward.',
    'Alternatively, use a max-heap of size k: for each node value, push (|val-target|, val); if heap exceeds k, pop the max.',
  ],
  functionName: 'closestKValuesRunner',
  params: ['root', 'target', 'k'],
  preamble: { javascript: JS_PREAMBLE, python: PY_PREAMBLE },
  starterCode: {
    javascript: `// TreeNode is pre-defined. Return an array of k values.
function closestKValues(root, target, k) {

}`,
    typescript: `// TreeNode is pre-defined. Return an array of k values.
function closestKValues(root: TreeNode | null, target: number, k: number): number[] {

}`,
    python: `# TreeNode is pre-defined. Return a list of k values.
def closestKValues(root, target, k):
    pass`,
  },
  visibleTests: [
    { args: [[4, 2, 5, 1, 3], 3.714286, 2], expected: [3, 4] },
    { args: [[1], 0.0, 1], expected: [1] },
  ],
  hiddenTests: [
    { args: [[4, 2, 5, 1, 3], 3.0, 3], expected: [2, 3, 4] },
    { args: [[4, 2, 5, 1, 3], 3.0, 1], expected: [3] },
    { args: [[4, 2, 5, 1, 3], 5.5, 2], expected: [4, 5] },
    { args: [[10, 5, 15, 3, 7, 13, 18], 6.0, 3], expected: [3, 5, 7] },
    { args: [[10, 5, 15, 3, 7, 13, 18], 6.0, 4], expected: [3, 5, 7, 10] },
    { args: [[1, null, 2], 1.5, 2], expected: [1, 2] },
    { args: [[2, 1, 3], 2.0, 1], expected: [2] },
  ],
};
