import type { Problem } from '../types';

export const problem: Problem = {
  id: 'find-largest-value-in-each-tree-row',
  title: 'Find Largest Value in Each Tree Row',
  difficulty: 'medium',
  tags: ['tree'],
  description: `Given the \`root\` of a binary tree, return an array of the **largest value** in each row of the tree (**0-indexed**).

The tree is given as a level-order array where \`null\` represents a missing node.`,
  constraints: [
    'The number of nodes in the tree will be in the range `[0, 10^4]`.',
    '`-2^31 <= Node.val <= 2^31 - 1`',
  ],
  examples: [
    {
      input: 'root = [1,3,2,5,3,null,9]',
      output: '[1,3,9]',
      explanation: 'Row 0: [1] → max=1. Row 1: [3,2] → max=3. Row 2: [5,3,9] → max=9.',
    },
    {
      input: 'root = [1,2,3]',
      output: '[1,3]',
    },
  ],
  hints: [
    'Use BFS (level-order traversal) to process the tree one level at a time.',
    'For each level, track the maximum value seen among all nodes at that level. Append it to the result array.',
    'Process the queue in batches: at the start of each level, record the current queue length to know how many nodes belong to the current level.',
  ],
  functionName: 'largestValues',
  params: ['root'],
  starterCode: {
    javascript: `function largestValues(root) {
  // root is given as a level-order array (null = missing node)
}`,
    python: `def largestValues(root):
    # root is given as a level-order array (None = missing node)
    pass`,
  },
  visibleTests: [
    { args: [[1, 3, 2, 5, 3, null, 9]], expected: [1, 3, 9] },
    { args: [[1, 2, 3]], expected: [1, 3] },
    { args: [[1]], expected: [1] },
  ],
  hiddenTests: [
    { args: [[]], expected: [] },
    { args: [[1, 2]], expected: [1, 2] },
    { args: [[1, null, 2]], expected: [1, 2] },
    { args: [[1, 3, 2, 5, 3, null, 9, null, null, null, 7]], expected: [1, 3, 9, 7] },
    { args: [[-1, -2, -3]], expected: [-1, -2] },
    { args: [[5, 1, 5, 5, 5]], expected: [5, 5, 5] },
    { args: [[1, null, null]], expected: [1] },
    { args: [[2, 1, 3, null, null, null, 4]], expected: [2, 3, 4] },
  ],
};
