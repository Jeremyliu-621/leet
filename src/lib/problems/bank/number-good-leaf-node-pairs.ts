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
function countPairsRunner(arr, distance) {
  return countPairs(__fromArray__(arr), distance);
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

def countPairsRunner(arr, distance):
    return countPairs(__from_array__(arr), distance)
`.trim();

export const problem: Problem = {
  id: 'number-good-leaf-node-pairs',
  title: 'Number of Good Leaf Node Pairs',
  difficulty: 'medium',
  tags: ['tree', 'dynamic-programming'],
  description: `You are given the \`root\` of a binary tree and an integer \`distance\`. A pair of two different **leaf** nodes is called **good** if the **shortest path** between them (number of edges) is **at most** \`distance\`.

Return the **number of good leaf node pairs** in the tree.

Trees are given as level-order (BFS) arrays where \`null\` marks absent children.

**Example:**
\`\`\`
      1
     / \\
    2   3
   / \\
  4   5
\`\`\`
Tree: \`[1,2,3,4,5]\`, distance = 3
Leaf pairs: (4,5) path length 2 ✓, (4,3) path length 3 ✓, (5,3) path length 3 ✓
Answer: **3**`,
  constraints: [
    '1 <= tree nodes <= 2^10',
    '1 <= node values <= 100',
    '1 <= distance <= 10',
  ],
  examples: [
    {
      input: 'root = [1,2,3,4,5], distance = 3',
      output: '3',
      explanation: 'All three leaf pairs (4↔5 length 2, 4↔3 length 3, 5↔3 length 3) have length ≤ 3.',
    },
    {
      input: 'root = [1,2,3,4,5], distance = 2',
      output: '1',
      explanation: 'Only (4,5) has path length ≤ 2 (path through node 2, length 2).',
    },
    {
      input: 'root = [1,1,1], distance = 2',
      output: '1',
      explanation: 'Two leaves (children of root), path 2 edges.',
    },
  ],
  hints: [
    'Use post-order DFS. For each node, return a list of distances to all leaf nodes in its subtree. A leaf returns [0] (distance 0 to itself).',
    'At each internal node, for each pair (l from left subtree, r from right subtree), if (l+1) + (r+1) ≤ distance, increment the count.',
    'After combining left and right lists, return the merged list with all distances incremented by 1. Prune any distance ≥ distance to keep the list small.',
  ],
  functionName: 'countPairsRunner',
  params: ['root', 'distance'],
  preamble: { javascript: JS_PREAMBLE, python: PY_PREAMBLE },
  starterCode: {
    javascript: `// TreeNode class and countPairsRunner wrapper are pre-defined.
// Implement countPairs below:
function countPairs(root, distance) {
  // Return number of good leaf node pairs with path length <= distance
}`,
    typescript: "function countPairsRunner(root: number[], distance: number): number {\n  // Return number of good leaf node pairs with path length <= distance\n}",

    python: `# TreeNode class and countPairsRunner wrapper are pre-defined.
# Implement countPairs below:
def countPairs(root, distance: int) -> int:
    # Return number of good leaf node pairs with path length <= distance
    pass`,
  },
  visibleTests: [
    { args: [[1, 2, 3, 4, 5], 3], expected: 3 },
    { args: [[1, 2, 3, 4, 5], 2], expected: 1 },
    { args: [[1, 1, 1], 2], expected: 1 },
    { args: [[1], 1], expected: 0 },
  ],
  hiddenTests: [
    { args: [[1, 2, 3], 1], expected: 0 },
    { args: [[1, 2, 3], 2], expected: 1 },
    { args: [[1, 2, 3, 4, 5, 6, 7], 2], expected: 2 },
    { args: [[1, 2, 3, 4, 5, 6, 7], 3], expected: 2 },
    { args: [[1, 2, 3, 4, 5, 6, 7], 4], expected: 6 },
    { args: [[1, 2, null, 3, null], 3], expected: 0 },
    { args: [[1, 2, 3, 4, 5], 4], expected: 3 },
  ],
};
