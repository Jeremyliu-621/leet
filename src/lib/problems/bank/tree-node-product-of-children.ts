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
function maximumProductSplitRunner(arr) {
  return maximumProductSplit(__fromArray__(arr));
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

def maximumProductSplitRunner(arr):
    return maximumProductSplit(__from_array__(arr))
`.trim();

export const problem: Problem = {
  id: 'tree-node-product-of-children',
  title: 'Maximum Product of Subtree Sums After One Edge Cut',
  difficulty: 'hard',
  tags: ['tree', 'dynamic-programming'],
  description: `Given the \`root\` of a binary tree where all node values are positive integers, you can **remove exactly one edge** in the tree to split it into two subtrees.

The **score** of the split is the **product** of the sum of all values in each resulting subtree.

Return the **maximum score** achievable, modulo **10^9 + 7**.

Trees are given as level-order (BFS) arrays where \`null\` marks absent children.

**Example:**
\`\`\`
        1
       / \\
      2   3
     / \\
    4   5
\`\`\`
Total sum = 15. Possible cuts:
- Cut edge 1→2: subtrees {1,3} sum=4 and {2,4,5} sum=11. Product = 44.
- Cut edge 1→3: subtrees {1,2,4,5} sum=12 and {3} sum=3. Product = 36.
- Cut edge 2→4: {1,2,3,5} sum=11 and {4} sum=4. Product = 44.
- Cut edge 2→5: {1,2,3,4} sum=10 and {5} sum=5. Product = 50.
**Maximum = 50**`,
  constraints: [
    '2 <= number of nodes <= 5 * 10^4',
    '1 <= Node.val <= 10^4',
  ],
  examples: [
    {
      input: 'root = [1,2,3,4,5]',
      output: '50',
      explanation: 'Cut edge 2→5: subtree {5} (sum 5) and {1,2,3,4} (sum 10). Product = 50.',
    },
    {
      input: 'root = [2,3]',
      output: '6',
      explanation: 'Only one edge exists. Cut it: {3} sum=3 and {2} sum=2. Product = 6.',
    },
    {
      input: 'root = [1,2,3]',
      output: '9',
      explanation: 'Total=6. Cut 1→2: {2} sum=2 and {1,3} sum=4, product=8. Cut 1→3: {3} sum=3 and {1,2} sum=3, product=9. Maximum = 9.',
    },
  ],
  hints: [
    'First compute the total sum of all nodes. Use post-order DFS where each node returns the sum of its subtree.',
    'When you cut the edge connecting node `v` to its parent, the two subtrees have sums `subtreeSum(v)` and `totalSum - subtreeSum(v)`. Track the product of these two values.',
    'During the post-order DFS, after computing `subtreeSum(node)`, compute `product = subtreeSum(node) * (totalSum - subtreeSum(node))` and update the maximum. Return the subtree sum to the parent.',
  ],
  functionName: 'maximumProductSplitRunner',
  params: ['root'],
  preamble: { javascript: JS_PREAMBLE, python: PY_PREAMBLE },
  starterCode: {
    javascript: `// TreeNode class and maximumProductSplitRunner wrapper are pre-defined.
// Implement maximumProductSplit below:
function maximumProductSplit(root) {
  // Return maximum product of two subtree sums after removing one edge, mod 10^9+7
  const MOD = 1_000_000_007n;
}`,
    python: `# TreeNode class and maximumProductSplitRunner wrapper are pre-defined.
# Implement maximumProductSplit below:
def maximumProductSplit(root) -> int:
    # Return maximum product of two subtree sums after removing one edge, mod 10^9+7
    MOD = 10**9 + 7
    pass`,
  },
  visibleTests: [
    { args: [[1, 2, 3, 4, 5]], expected: 50 },
    { args: [[1, 2, 3]], expected: 9 },
    { args: [[4, 3, 2, 1, null, null, null]], expected: 24 },
    { args: [[2, 3]], expected: 6 },
  ],
  hiddenTests: [
    { args: [[1, 2]], expected: 2 },
    { args: [[1, 2, 3, 4, 5, 6]], expected: 110 },
    { args: [[3, 2, 4, null, null, 1, 1]], expected: 30 },
    { args: [[5, 1, 1]], expected: 6 },
    { args: [[1, 2, 3, null, 4]], expected: 24 },
    { args: [[10, 10, 10]], expected: 200 },
  ],
};
