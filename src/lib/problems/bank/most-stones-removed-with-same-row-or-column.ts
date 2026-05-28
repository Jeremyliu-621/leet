import type { Problem } from '../types';

export const problem: Problem = {
  id: 'most-stones-removed-with-same-row-or-column',
  title: 'Most Stones Removed with Same Row or Column',
  difficulty: 'medium',
  tags: ['graph'],
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
    },
    {
      input: 'stones = [[0,0],[0,2],[1,1],[2,0],[2,2]]',
      output: '3',
    },
  ],
  hints: [
    'Stones that share a row or column are in the same connected component.',
    'Use Union-Find: union row index with ~col index to distinguish them.',
    'Answer = n - number of connected components.',
  ],
  functionName: 'removeStones',
  params: ['stones'],
  starterCode: {
    javascript: 'function removeStones(stones) {\n\n}\n',
    typescript: "function removeStones(stones: number[][]): number {\n\n}",

    python: 'def removeStones(stones):\n    pass\n',
  },
  visibleTests: [
    { args: [[[0,0],[0,1],[1,0],[1,2],[2,1],[2,2]]], expected: 5 },
    { args: [[[0,0],[0,2],[1,1],[2,0],[2,2]]], expected: 3 },
  ],
  hiddenTests: [
    { args: [[[0,0]]], expected: 0 },
    { args: [[[0,0],[1,1],[2,2]]], expected: 0 },
    { args: [[[0,0],[1,0],[2,0]]], expected: 2 },
    { args: [[[0,0],[0,1],[1,0],[1,1]]], expected: 3 },
  ],
};
