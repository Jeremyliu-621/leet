import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-depth-of-binary-tree',
  title: 'Minimum Depth of Binary Tree',
  difficulty: 'easy',
  tags: ['tree'],
  description: `Given a binary tree, find its minimum depth.

The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.

**Note:** A leaf is a node with no children.

The tree is given as an array in level-order format where \`null\` represents a missing node.`,
  constraints: [
    'The number of nodes in the tree is in the range [0, 10^5].',
    '-1000 <= Node.val <= 1000',
  ],
  examples: [
    {
      input: 'root = [3,9,20,null,null,15,7]',
      output: '2',
      explanation: 'The shortest path is root→9 (depth 2).',
    },
    {
      input: 'root = [2,null,3,null,4,null,5,null,6]',
      output: '5',
      explanation: 'The tree is a right-only chain; the only leaf is 6 at depth 5.',
    },
  ],
  hints: [
    'Use BFS — the first leaf node found is at the minimum depth.',
    'For DFS: if a node has only one child, the minimum depth from that node is 1 + minDepth of the non-null child (not the null child).',
    'Empty tree has depth 0; single node has depth 1.',
  ],
  functionName: 'minDepth',
  params: ['root'],
  starterCode: {
    javascript: 'function minDepth(root) {\n\n}',
    typescript: "function minDepth(root: (number | null)[]): number {\n\n}",

    python: 'def minDepth(root):\n    pass',
  },
  visibleTests: [
    { args: [[3, 9, 20, null, null, 15, 7]], expected: 2 },
    { args: [[2, null, 3, null, 4, null, 5, null, 6]], expected: 5 },
  ],
  hiddenTests: [
    { args: [[]], expected: 0 },
    { args: [[1]], expected: 1 },
    { args: [[1, 2]], expected: 2 },
    { args: [[1, 2, 3]], expected: 2 },
    { args: [[1, 2, null, 3]], expected: 3 },
    { args: [[1, null, 2, null, 3]], expected: 3 },
  ],
};
