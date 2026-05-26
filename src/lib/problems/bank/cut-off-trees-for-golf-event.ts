import type { Problem } from '../types';

export const problem: Problem = {
  id: 'cut-off-trees-for-golf-event',
  title: 'Cut Off Trees for Golf Event',
  difficulty: 'hard',
  tags: ['graph', 'shortest-path', 'simulation'],
  description: `You are asked to cut off all the trees in a forest for a golf event. The forest is represented as an \`m x n\` matrix. In this matrix:
- \`0\` means the cell cannot be walked through.
- \`1\` means the cell is an empty ground.
- A value greater than \`1\` means the cell contains a tree with that height.

In one step you can walk in any of the four directions (north, east, south, west). You must cut off the trees in order from shortest to tallest. When you cut a tree, the cell becomes \`1\` (walkable ground).

You start at \`(0, 0)\` and must cut the trees in **height order (smallest first)**. Return the **minimum total steps** to cut all trees, or \`-1\` if it is impossible.`,
  constraints: [
    'm == forest.length',
    'n == forest[0].length',
    '1 <= m, n <= 50',
    '0 <= forest[i][j] <= 10^9',
    'Heights of all trees are distinct',
  ],
  examples: [
    {
      input: 'forest = [[1,2,3],[0,0,4],[7,6,5]]',
      output: '6',
      explanation: 'Cut trees in order: 2,3,4,5,6,7. BFS between each consecutive pair sums to 6.',
    },
    {
      input: 'forest = [[1,2,3],[0,0,0],[7,6,5]]',
      output: '-1',
      explanation: 'Cannot reach tree 6 from tree 5 because of the wall of 0s.',
    },
    {
      input: 'forest = [[2,3,4],[0,0,5],[8,7,6]]',
      output: '6',
    },
  ],
  hints: [
    'Sort all trees by height. Then, starting from (0,0), repeatedly use BFS to find the shortest path from the current position to the next tree to cut (in height order). Sum all the BFS distances.',
    'Each BFS is a standard grid BFS ignoring cells with value 0. After cutting a tree (reaching it), set its cell to 1.',
    'If any BFS returns -1 (unreachable), immediately return -1. Otherwise return the total accumulated steps.',
  ],
  functionName: 'cutOffTree',
  params: ['forest'],
  starterCode: {
    javascript: 'function cutOffTree(forest) {\n  \n}\n',
    python: 'def cutOffTree(forest):\n    pass\n',
  },
  visibleTests: [
    { args: [[[1, 2, 3], [0, 0, 4], [7, 6, 5]]], expected: 6 },
    { args: [[[1, 2, 3], [0, 0, 0], [7, 6, 5]]], expected: -1 },
    { args: [[[2, 3, 4], [0, 0, 5], [8, 7, 6]]], expected: 6 },
  ],
  hiddenTests: [
    { args: [[[1]]], expected: 0 },
    { args: [[[1, 2], [3, 4]]], expected: 4 },
    { args: [[[0, 0], [0, 1]]], expected: 0 },
    { args: [[[1, 3, 1], [1, 0, 1], [1, 8, 1]]], expected: 5 },
    { args: [[[2, 0, 3]]], expected: -1 },
  ],
};
