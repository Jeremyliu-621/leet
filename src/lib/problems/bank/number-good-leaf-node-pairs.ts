import type { Problem } from '../types';

export const problem: Problem = {
  id: 'number-good-leaf-node-pairs',
  title: 'Number of Good Leaf Node Pairs',
  difficulty: 'medium',
  tags: ['tree', 'dynamic-programming'],
  description: `You are given the \`root\` of a binary tree and an integer \`distance\`. A pair of two different **leaf** nodes is called **good** if the **shortest path** between them (number of edges) is **at most** \`distance\`.

Return the **number of good leaf node pairs** in the tree.

The tree is provided as an array in BFS (level-order) order, using the standard \`null\`-for-absent-children convention.

**Example:**
\`\`\`
      1
     / \\
    2   3
   / \\
  4   5
\`\`\`
Tree: \`[1,2,3,4,5]\`, distance = 3
Leaf pairs: (4,5) with path 4→2→5 (2 edges ✓), (4,3) with path 4→2→1→3 (3 edges ✓), (5,3) with path 5→2→1→3 (3 edges ✓)
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
      explanation: 'All three leaf-to-leaf paths (4↔5, 4↔3, 5↔3) have length ≤ 3.',
    },
    {
      input: 'root = [1,2,3,4,5], distance = 2',
      output: '1',
      explanation: 'Only (4,5) has path length ≤ 2 (path through node 2, length 2).',
    },
    {
      input: 'root = [1,1,1], distance = 2',
      output: '1',
      explanation: 'Two leaves (children of root), path length = 2.',
    },
  ],
  hints: [
    'Use post-order DFS. For each node, return a list of distances to all leaf nodes in its subtree (relative to that node). A leaf returns [0] (distance 0 to itself).',
    'At each internal node, combine distance lists from the left and right subtrees. For each pair (l from left, r from right), if (l+1) + (r+1) ≤ distance, increment the count.',
    'After combining, return the merged list with all distances incremented by 1 (since they are one step further from the current node\'s parent). Keep only distances < distance to prune.',
  ],
  functionName: 'countPairs',
  params: ['root', 'distance'],
  preamble: {
    javascript: `class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val; this.left = left; this.right = right;
  }
}
function buildTree(arr) {
  if (!arr || !arr.length || arr[0] == null) return null;
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
}`,
    python: `class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

def buildTree(arr):
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
    return root`,
  },
  starterCode: {
    javascript: `function countPairs(root, distance) {
  // root is a TreeNode (built from BFS array by preamble)
  // Return number of good leaf node pairs with path length <= distance
}`,
    python: `def countPairs(root, distance: int) -> int:
    # root is a TreeNode (built from BFS array by preamble)
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
    { args: [[1, 2, 3, 4, 5, 6, 7], 3], expected: 6 },
    { args: [[1, 2, null, 3, null, null, null, 4], 3], expected: 1 },
    { args: [[1, 2, 3], 1], expected: 0 },
    { args: [[1, 2, 3], 2], expected: 1 },
    { args: [[1, 2, 3, 4, null, null, 5], 3], expected: 2 },
    { args: [[1, 2, 3, 4, 5, 6, 7], 2], expected: 2 },
  ],
};
