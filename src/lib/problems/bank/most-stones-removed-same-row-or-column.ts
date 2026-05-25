import type { Problem } from '../types';

export const problem: Problem = {
  id: 'most-stones-removed-same-row-or-column',
  title: 'Most Stones Removed with Same Row or Column',
  difficulty: 'medium',
  tags: ['graph'],
  description: `On a 2D plane, you have \`n\` stones at positions given by \`stones[i] = [xi, yi]\`.

A stone can be **removed** if it shares either the **same row** or the **same column** as another stone that has not been removed.

Return the **largest possible number of stones** that can be removed.

**Key insight:** All stones connected (directly or transitively) via shared rows or columns form a component. Within each component of size \`s\`, you can remove \`s - 1\` stones (keep one). Use Union-Find to identify components.`,
  constraints: [
    '1 <= stones.length <= 1000',
    '0 <= xi, yi <= 10000',
    'No two stones are at the same position.',
  ],
  examples: [
    {
      input: 'stones = [[0,0],[0,1],[1,0],[1,2],[2,1],[2,2]]',
      output: '5',
      explanation: 'All 6 stones are connected (share rows/columns), so 5 can be removed.',
    },
    {
      input: 'stones = [[0,0],[0,2],[1,1],[2,0],[2,2]]',
      output: '3',
      explanation: 'Two components of size 4 and 1? Actually one big component of size 5 → remove 4? No. 4 stones are connected via shared rows/columns. Answer is 3.',
    },
    {
      input: 'stones = [[0,0]]',
      output: '0',
      explanation: 'Only one stone — cannot remove it.',
    },
  ],
  hints: [
    'Use Union-Find. For each pair of stones that share a row or column, union them. Alternatively, for each stone union its row index with a shifted column index (e.g., col + 10001) so rows and columns share the same namespace.',
    'After building all unions, count the number of unique roots among the stones. The answer is `stones.length - uniqueRoots`.',
    'Implementation: encode row `r` as `r` and column `c` as `c + 10001`. For each stone `[r, c]`, union `r` with `c + 10001`. Count distinct roots across all stone row/col encodings.',
  ],
  functionName: 'removeStones',
  params: ['stones'],
  starterCode: {
    javascript: `function removeStones(stones) {

}`,
    python: `def removeStones(stones: list) -> int:
    pass
`,
  },
  visibleTests: [
    {
      args: [[[0, 0], [0, 1], [1, 0], [1, 2], [2, 1], [2, 2]]],
      expected: 5,
    },
    {
      args: [[[0, 0], [0, 2], [1, 1], [2, 0], [2, 2]]],
      expected: 3,
    },
    {
      args: [[[0, 0]]],
      expected: 0,
    },
  ],
  hiddenTests: [
    {
      args: [[[0, 0], [0, 1]]],
      expected: 1,
    },
    {
      args: [[[0, 0], [1, 1]]],
      expected: 0,
    },
    {
      args: [[[0, 1], [1, 0], [1, 1]]],
      expected: 2,
    },
    {
      args: [[[0, 0], [0, 1], [1, 0]]],
      expected: 2,
    },
  ],
};
