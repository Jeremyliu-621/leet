import type { Problem } from '../types';

const JS_PREAMBLE = `
class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val; this.left = left; this.right = right;
  }
}
function __fromArray__(arr) {
  if (!arr || arr.length === 0 || arr[0] == null) return null;
  const root = new TreeNode(arr[0]);
  const queue = [root];
  let i = 1;
  while (queue.length && i < arr.length) {
    const node = queue.shift();
    if (i < arr.length && arr[i] != null) { node.left = new TreeNode(arr[i]); queue.push(node.left); }
    i++;
    if (i < arr.length && arr[i] != null) { node.right = new TreeNode(arr[i]); queue.push(node.right); }
    i++;
  }
  return root;
}
function findTargetRunner(arr, k) {
  const root = __fromArray__(arr);
  return findTarget(root, k);
}
`;

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

def findTargetRunner(arr, k):
    root = __from_array__(arr)
    k = int(k)
    return findTarget(root, k)
`;

export const problem: Problem = {
  id: 'two-sum-iv-bst',
  title: 'Two Sum IV - Input is a BST',
  difficulty: 'easy',
  tags: ['tree'],
  description: `Given the \`root\` of a Binary Search Tree and a target number \`k\`, return \`true\` if there exist two elements in the BST such that their sum is equal to the given target.`,
  constraints: [
    'The number of nodes in the tree is in the range [1, 10^4].',
    '-10^4 <= Node.val <= 10^4',
    'root is guaranteed to be a valid binary search tree.',
    '-10^5 <= k <= 10^5',
  ],
  examples: [
    {
      input: 'root = [5,3,6,2,4,null,7], k = 9',
      output: 'true',
      explanation: '2 + 7 = 9.',
    },
    {
      input: 'root = [5,3,6,2,4,null,7], k = 28',
      output: 'false',
      explanation: 'No two nodes sum to 28.',
    },
    {
      input: 'root = [2,1,3], k = 4',
      output: 'true',
      explanation: '1 + 3 = 4.',
    },
  ],
  hints: [
    'Perform an in-order traversal to collect all node values in sorted order, then use the two-pointer technique on the resulting array.',
    'Because the tree is a BST, in-order traversal yields a sorted array — two pointers (lo/hi) can scan for a pair that sums to k in O(n) time.',
    'Alternatively, traverse the tree once using DFS and maintain a Set. For each visited value v, check whether k - v is already in the Set.',
  ],
  functionName: 'findTargetRunner',
  params: ['arr', 'k'],
  preamble: {
    javascript: JS_PREAMBLE,
    python: PY_PREAMBLE,
  },
  starterCode: {
    javascript: `function findTarget(root, k) {

}`,
    python: `def findTarget(root, k):
    pass`,
  },
  visibleTests: [
    { args: [[5, 3, 6, 2, 4, null, 7], 9], expected: true },
    { args: [[5, 3, 6, 2, 4, null, 7], 28], expected: false },
    { args: [[2, 1, 3], 4], expected: true },
  ],
  hiddenTests: [
    { args: [[1], 2], expected: false },
    { args: [[1, null, 2], 3], expected: true },
    { args: [[5, 3, 6, 2, 4, null, 7], 11], expected: true },
    { args: [[5, 3, 6, 2, 4, null, 7], 3], expected: false },
    { args: [[10, 5, 15, 3, 7, null, 18], 22], expected: true },
    { args: [[10, 5, 15, 3, 7, null, 18], 6], expected: false },
  ],
};
