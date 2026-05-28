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
function kthLargestLevelSumRunner(arr, k) { return kthLargestLevelSum(__fromArray__(arr), k); }
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

def kthLargestLevelSumRunner(arr, k):
    return kthLargestLevelSum(__from_array__(arr), k)
`.trim();

export const problem: Problem = {
  id: 'kth-largest-sum-in-a-binary-tree',
  title: 'Kth Largest Sum in a Binary Tree',
  difficulty: 'medium',
  tags: ['tree', 'heap'],
  description: `You are given the root of a binary tree and a positive integer \`k\`.

The **level sum** in the tree is the sum of the values of the nodes that are on the **same level**.

Return the \`k\`-th **largest** level sum in the tree (not necessarily distinct). If there are fewer than \`k\` levels in the tree, return \`-1\`.

Trees are represented as level-order arrays (BFS order), where \`null\` indicates a missing child.`,
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
      explanation: 'Level sums: level 0 = 5, level 1 = 8+9=17, level 2 = 2+1+3+7=13, level 3 = 4+6=10. Sorted desc: [17,13,10,5]. 2nd largest = 13.',
    },
    {
      input: 'root = [1,2,null,3], k = 1',
      output: '3',
      explanation: 'Level sums: 1, 2, 3. Sorted desc: [3,2,1]. k=1 → 3.',
    },
  ],
  hints: [
    'Use BFS to collect the sum of each level into an array.',
    'Sort the level sums in descending order.',
    'Return sums[k-1] if k <= sums.length, otherwise -1.',
  ],
  functionName: 'kthLargestLevelSumRunner',
  params: ['arr', 'k'],
  preamble: { javascript: JS_PREAMBLE, python: PY_PREAMBLE },
  starterCode: {
    javascript:
      '// TreeNode class and kthLargestLevelSumRunner wrapper are pre-defined.\n// Implement the function below:\nfunction kthLargestLevelSum(root, k) {\n  \n}\n',
    typescript: "function kthLargestLevelSumRunner(arr: number[], k: number): number {\n  \n}",

    python: 'def kthLargestLevelSum(root, k):\n    pass\n',
  },
  visibleTests: [
    { args: [[5,8,9,2,1,3,7,4,6], 2], expected: 13 },
    { args: [[1,2,null,3], 1], expected: 3 },
    { args: [[1,2,3], 3], expected: -1 },
  ],
  hiddenTests: [
    { args: [[1], 1], expected: 1 },
    { args: [[1,2,3], 1], expected: 5 },
    { args: [[1,2,3], 2], expected: 1 },
    { args: [[5,8,9,2,1,3,7,4,6], 4], expected: 5 },
    { args: [[5,8,9,2,1,3,7,4,6], 5], expected: -1 },
  ],
};
