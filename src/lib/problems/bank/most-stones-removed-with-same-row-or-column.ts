import type { Problem } from '../types';

export const problem: Problem = {
  id: 'most-stones-removed-with-same-row-or-column',
  title: 'Most Stones Removed with Same Row or Column',
  difficulty: 'medium',
  tags: ['graph', 'union-find'],
  description: `On a 2D plane, we place \`n\` stones at some integer coordinate points. Each coordinate point may have at most one stone.

A stone can be removed if it shares either the **same row** or the **same column** as another stone that has not been removed.

Return the **largest possible number** of stones that can be removed.`,
  constraints: [
    '1 <= stones.length <= 1000',
    '0 <= x_i, y_i <= 10^4',
    'No two stones are at the same coordinate point.',
  ],
  examples: [
    {
      input: 'stones = [[0,0],[0,1],[1,0],[1,2],[2,1],[2,2]]',
      output: '5',
      explanation:
        'All 6 stones are in one connected component. We can remove 5 of them, leaving 1.',
    },
    {
      input: 'stones = [[0,0],[0,2],[1,1],[2,0],[2,2]]',
      output: '3',
      explanation:
        'There are 2 connected components: {[0,0],[0,2],[2,0],[2,2]} and {[1,1]}. We can remove 4-1=3 from the first component and 0 from the second, for a total of 3.',
    },
    {
      input: 'stones = [[0,0]]',
      output: '0',
      explanation: 'A single stone has no partner to share a row or column with.',
    },
  ],
  hints: [
    'Level 1: Two stones that share a row or column can be in the same connected component — if you can reach one from the other through chains of shared rows/columns. The answer is n minus the number of connected components.',
    'Level 2: Use Union-Find. For each stone at (r, c), union it with all other stones in the same row and all stones in the same column. Number of removable stones = n - number of components.',
    'Level 3: Optimization: index rows and columns in the same DSU by offsetting columns (e.g., col + 10001 to avoid collision with rows). For each stone, union its row-node with its col-node. Count unique roots among all stones.',
  ],
  functionName: 'removeStones',
  params: ['stones'],
  starterCode: {
    javascript: `function removeStones(stones) {

}`,
    typescript: `function removeStones(stones: number[][]): number {

}`,
    python: `def removeStones(stones):
    pass`,
  },
  visibleTests: [
    { args: [[[0, 0], [0, 1], [1, 0], [1, 2], [2, 1], [2, 2]]], expected: 5 },
    { args: [[[0, 0], [0, 2], [1, 1], [2, 0], [2, 2]]], expected: 3 },
    { args: [[[0, 0]]], expected: 0 },
  ],
  hiddenTests: [
    { args: [[[0, 0], [1, 1], [2, 2]]], expected: 0 },
    { args: [[[0, 0], [1, 0], [2, 0]]], expected: 2 },
    { args: [[[0, 0], [0, 1], [1, 0], [1, 1]]], expected: 3 },
    { args: [[[0, 1], [1, 0]]], expected: 0 },
    { args: [[[0, 0], [0, 1], [0, 2], [1, 0], [1, 1], [1, 2]]], expected: 5 },
    { args: [[[0, 0], [2, 2], [0, 2], [2, 0]]], expected: 3 },
    { args: [[[0, 0], [1, 1]]], expected: 0 },
    { args: [[[0, 0], [0, 1], [1, 1], [2, 2]]], expected: 2 },
  ],
};
