import type { Problem } from '../types';

export const problem: Problem = {
  id: 'populating-next-right-pointers',
  title: 'Populating Next Right Pointers in Each Node',
  difficulty: 'medium',
  tags: ['tree'],
  description: `You are given a **perfect binary tree** where all leaves are on the same level, and every parent has two children. The tree is given as a BFS array and you must connect each node's \`next\` pointer to the node immediately to its right at the same level.

Implement a function \`connectTree(arr)\` that takes the BFS array representation of the tree and returns an array of arrays, where each sub-array contains the values in a level's linked list (left to right).`,
  constraints: [
    'The number of nodes in the tree is in the range `[0, 2^12 - 1]`.',
    '`-1000 <= Node.val <= 1000`',
    'The tree is a **perfect** binary tree (all leaves at same level, every parent has two children).',
  ],
  examples: [
    {
      input: 'root = [1,2,3,4,5,6,7]',
      output: '[[1],[2,3],[4,5,6,7]]',
      explanation: 'After connecting: 1→null, 2→3→null, 4→5→6→7→null',
    },
    {
      input: 'root = []',
      output: '[]',
    },
  ],
  hints: [
    'Use BFS level order traversal. For each level, connect adjacent nodes using `next` pointers.',
    'With O(1) extra space: use the established `next` pointers from the previous level to traverse and connect the next level.',
  ],
  functionName: 'connectTree',
  params: ['arr'],
  starterCode: {
    javascript: `function connectTree(arr) {

}`,
    python: `def connectTree(arr):
    pass`,
  },
  visibleTests: [
    { args: [[1, 2, 3, 4, 5, 6, 7]], expected: [[1], [2, 3], [4, 5, 6, 7]] },
    { args: [[]], expected: [] },
  ],
  hiddenTests: [
    { args: [[1]], expected: [[1]] },
    { args: [[1, 2, 3]], expected: [[1], [2, 3]] },
    { args: [[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]], expected: [[1], [2, 3], [4, 5, 6, 7], [8, 9, 10, 11, 12, 13, 14, 15]] },
  ],
};
