import type { Problem } from '../types';

const JS_PREAMBLE = `
class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val; this.left = left; this.right = right;
  }
}
function __buildTree__(arr) {
  if (!arr || arr.length === 0) return null;
  const root = new TreeNode(arr[0]);
  const queue = [root];
  let i = 1;
  while (queue.length > 0 && i < arr.length) {
    const node = queue.shift();
    if (i < arr.length && arr[i] !== null) {
      node.left = new TreeNode(arr[i]);
      queue.push(node.left);
    }
    i++;
    if (i < arr.length && arr[i] !== null) {
      node.right = new TreeNode(arr[i]);
      queue.push(node.right);
    }
    i++;
  }
  return root;
}
function findFrequentTreeSumRunner(arr) {
  return findFrequentTreeSum(__buildTree__(arr)).slice().sort((a, b) => a - b);
}
`.trim();

const PY_PREAMBLE = `
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val; self.left = left; self.right = right

def __buildTree__(arr):
    raw_list = arr.to_py() if hasattr(arr, 'to_py') else list(arr)
    raw = [int(v) if isinstance(v, (int, float)) and not isinstance(v, bool) else None for v in raw_list]
    if not raw or raw[0] is None: return None
    root = TreeNode(raw[0])
    from collections import deque
    q = deque([root]); i = 1
    while q and i < len(raw):
        node = q.popleft()
        if i < len(raw) and raw[i] is not None:
            node.left = TreeNode(raw[i]); q.append(node.left)
        i += 1
        if i < len(raw) and raw[i] is not None:
            node.right = TreeNode(raw[i]); q.append(node.right)
        i += 1
    return root

def findFrequentTreeSumRunner(arr):
    result = findFrequentTreeSum(__buildTree__(arr))
    if isinstance(result, list):
        return sorted(result)
    return result
`.trim();

export const problem: Problem = {
  id: 'most-frequent-subtree-sum',
  title: 'Most Frequent Subtree Sum',
  difficulty: 'medium',
  tags: ['tree', 'hash-map'],
  description: `Given the root of a binary tree, return the most frequent **subtree sum**. If there is a tie, return all the values with the highest frequency in any order.

The **subtree sum** of a node is the sum of all node values in the subtree rooted at that node (including the node itself).

**Example:**
\`\`\`
    5
   / \\
  2  -3

Subtree sums: 2, -3, 5+2+(-3)=4
Output: [2, -3, 4]   (all appear once — tie)
\`\`\``,
  constraints: [
    'The number of nodes in the tree is in the range [1, 10^4].',
    '-10^5 <= Node.val <= 10^5',
  ],
  examples: [
    {
      input: 'root = [5,2,-3]',
      output: '[2,-3,4]',
      explanation: 'All subtree sums appear exactly once.',
    },
    {
      input: 'root = [5,2,-5]',
      output: '[2]',
      explanation: 'Subtree sums: 2, -5, 2. Sum 2 appears twice (most frequent).',
    },
  ],
  hints: [
    'Use DFS to compute the subtree sum for every node. The sum for a node = node.val + sum(left subtree) + sum(right subtree).',
    'Store each subtree sum in a hash map, mapping sum → count. Track the maximum count seen.',
    'After the DFS, collect all sums whose count equals the maximum.',
  ],
  functionName: 'findFrequentTreeSumRunner',
  params: ['root'],
  preamble: {
    javascript: JS_PREAMBLE,
    python: PY_PREAMBLE,
  },
  starterCode: {
    javascript: `function findFrequentTreeSum(root) {
  // root: TreeNode | null
  // Return array of most frequent subtree sums
}`,
    typescript: "function findFrequentTreeSumRunner(root: number[]): number[] {\n  // root: TreeNode | null\n  // Return array of most frequent subtree sums\n}",

    python: `def findFrequentTreeSum(root):
    # root: TreeNode | None
    # Return list of most frequent subtree sums
    pass`,
  },
  visibleTests: [
    { args: [[5, 2, -3]], expected: [-3, 2, 4] },
    { args: [[5, 2, -5]], expected: [2] },
  ],
  hiddenTests: [
    { args: [[1]], expected: [1] },
    { args: [[0, 1, -1]], expected: [-1, 0, 1] },
    { args: [[3, 1, 2]], expected: [1, 2, 6] },
    { args: [[1, 2, 2, 3, 3]], expected: [3] },
  ],
};
