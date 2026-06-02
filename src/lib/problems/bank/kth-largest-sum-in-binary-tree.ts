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
function kthLargestLevelSumRunner(arr, k) {
  return kthLargestLevelSum(__fromArray__(arr), k);
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
    a = [int(v) if isinstance(v, (int, float)) else None for v in raw_list]
    if not a or a[0] is None:
        return None
    root = TreeNode(a[0])
    queue = [root]
    i = 1
    while queue and i < len(a):
        node = queue.pop(0)
        if i < len(a) and a[i] is not None:
            node.left = TreeNode(a[i])
            queue.append(node.left)
        i += 1
        if i < len(a) and a[i] is not None:
            node.right = TreeNode(a[i])
            queue.append(node.right)
        i += 1
    return root

def kthLargestLevelSumRunner(arr, k):
    return kthLargestLevelSum(__from_array__(arr), int(k))
`.trim();

export const problem: Problem = {
  id: 'kth-largest-sum-in-binary-tree',
  title: 'Kth Largest Sum in Binary Tree',
  difficulty: 'medium',
  tags: ['tree', 'heap', 'binary-search'],
  description: `You are given the \`root\` of a binary tree and a positive integer \`k\`.

The **level sum** in the tree is the sum of the values of the nodes at that level.

Return the \`k\`th **largest** level sum in the tree (not necessarily distinct). If there are fewer than \`k\` levels in the tree, return \`-1\`.

**Note:** Two nodes are at the same level if they have the same distance from the root.

Trees are represented as level-order arrays where \`null\` indicates a missing child.

> **Note:** \`TreeNode\` class and \`kthLargestLevelSumRunner\` wrapper are pre-defined. Implement \`kthLargestLevelSum(root, k)\`.`,
  constraints: [
    'The number of nodes in the tree is n.',
    '2 <= n <= 10^5',
    '1 <= Node.val <= 10^6',
    '1 <= k <= n',
  ],
  examples: [
    {
      input: 'root = [5,8,9,2,1,3,7,4,6], k = 2',
      output: '13',
      explanation: 'Level sums: level 0 = 5, level 1 = 8+9=17, level 2 = 2+1+3+7=13, level 3 = 4+6=10. Sorted: [17,13,10,5]. The 2nd largest is 13.',
    },
    {
      input: 'root = [1,2,null,3], k = 1',
      output: '3',
      explanation: 'Level sums: 1, 2, 3. Sorted: [3,2,1]. The 1st largest is 3.',
    },
  ],
  hints: [
    'Level 1: Use BFS (level-order traversal) to compute the sum of each level. Collect all level sums.',
    'Level 2: If there are fewer than k levels, return -1. Otherwise, sort the level sums in descending order.',
    'Level 3: Return the element at index k-1 in the sorted (descending) array.',
  ],
  functionName: 'kthLargestLevelSumRunner',
  params: ['root', 'k'],
  preamble: { javascript: JS_PREAMBLE, python: PY_PREAMBLE },
  starterCode: {
    javascript: `// TreeNode class and kthLargestLevelSumRunner wrapper are pre-defined.
// Implement the function below:
function kthLargestLevelSum(root, k) {

}`,
    typescript: `function kthLargestLevelSumRunner(root: (number | null)[], k: number): number {

}`,
    python: `# TreeNode class and kthLargestLevelSumRunner wrapper are pre-defined.
# Implement the function below:
def kthLargestLevelSum(root, k):
    pass`,
  },
  visibleTests: [
    { args: [[5,8,9,2,1,3,7,4,6], 2], expected: 13 },
    { args: [[1,2,null,3], 1], expected: 3 },
  ],
  hiddenTests: [
    { args: [[5,8,9,2,1,3,7,4,6], 1], expected: 17 },
    { args: [[5,8,9,2,1,3,7,4,6], 4], expected: 5 },
    { args: [[5,8,9,2,1,3,7,4,6], 5], expected: -1 },
    { args: [[1,2,3], 2], expected: 1 },
    { args: [[1,2,3], 3], expected: -1 },
    { args: [[10,5,15,3,7,null,18], 3], expected: 10 },
  ],
};
