import type { Problem } from '../types';

export const problem: Problem = {
  id: 'trim-a-binary-search-tree',
  title: 'Trim a Binary Search Tree',
  difficulty: 'medium',
  tags: ['tree', 'binary-search'],
  description: `Given the \`root\` of a binary search tree and the values \`low\` and \`high\`, trim the BST so that all its values are in the inclusive range \`[low, high]\`.

Trimming the tree should **not** change the relative structure of the remaining nodes. Nodes out of range are removed and their in-range subtrees are preserved.

Trees are represented as level-order arrays (BFS order), where \`null\` indicates a missing child.

**Approach:** Recursively trim. If node.val < low, return trim(node.right) — the left subtree is too small. If node.val > high, return trim(node.left). Otherwise, trim both children and return the node.`,
  constraints: [
    'The number of nodes in the tree is in the range [1, 10^4].',
    '0 <= Node.val <= 10^4',
    'The value of each node in the tree is unique.',
    '0 <= low <= high <= 10^4',
  ],
  examples: [
    {
      input: 'root = [1,0,2], low = 1, high = 2',
      output: '[1,null,2]',
      explanation: 'Node 0 is below low=1 and is removed.',
    },
    {
      input: 'root = [3,1,4,null,2], low = 2, high = 4',
      output: '[3,2,4]',
      explanation: 'Node 1 is below low=2 so it is replaced by its right subtree (node 2).',
    },
  ],
  hints: [
    'If node.val < low, the entire left subtree is also too small — return trim(node.right).',
    'If node.val > high, the entire right subtree is also too large — return trim(node.left).',
    '```js\nfunction trimBST(root, low, high) {\n  if (!root) return null;\n  if (root.val < low) return trimBST(root.right, low, high);\n  if (root.val > high) return trimBST(root.left, low, high);\n  root.left = trimBST(root.left, low, high);\n  root.right = trimBST(root.right, low, high);\n  return root;\n}\n```',
  ],
  functionName: 'trimBST',
  params: ['root', 'low', 'high'],
  starterCode: {
    javascript: `function trimBST(root, low, high) {
  // return root of trimmed BST

}`,
    typescript: "function trimBST(root: number[], low: number, high: number): (number | null)[] {\n  // return root of trimmed BST\n\n}",

    python: `def trimBST(root, low: int, high: int):
    # return root of trimmed BST
    pass
`,
  },
  visibleTests: [
    { args: [[1, 0, 2], 1, 2], expected: [1, null, 2] },
    { args: [[3, 1, 4, null, 2], 2, 4], expected: [3, 2, 4] },
  ],
  hiddenTests: [
    { args: [[1], 1, 2], expected: [1] },
    { args: [[1], 2, 3], expected: [] },
    { args: [[5, 3, 7, 1, 4, 6, 8], 3, 6], expected: [5, 3, 6, null, 4] },
    { args: [[4, 2, 6, 1, 3, 5, 7], 2, 5], expected: [4, 2, 5, null, 3] },
    { args: [[4, 2, 6, 1, 3, 5, 7], 1, 7], expected: [4, 2, 6, 1, 3, 5, 7] },
  ],
};
