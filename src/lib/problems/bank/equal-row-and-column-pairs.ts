import type { Problem } from '../types';

export const problem: Problem = {
  id: 'equal-row-and-column-pairs',
  title: 'Equal Row and Column Pairs',
  difficulty: 'medium',
  tags: ['arrays', 'hash-map'],
  description: `Given a **0-indexed** \`n x n\` integer matrix \`grid\`, return the number of pairs \`(ri, cj)\` such that row \`ri\` and column \`cj\` are equal.

A row and column pair is considered equal if they contain the same elements in the same order (i.e., an equal array).`,
  constraints: [
    'n == grid.length == grid[i].length',
    '1 <= n <= 200',
    '1 <= grid[i][j] <= 10^5',
  ],
  examples: [
    {
      input: 'grid = [[3,2,1],[1,7,6],[2,7,7]]',
      output: '1',
      explanation: 'There is 1 equal row and column pair: (Row 2, Column 1): [2,7,7].',
    },
    {
      input: 'grid = [[3,1,2,2],[1,4,4,5],[2,4,2,2],[2,4,2,2]]',
      output: '3',
      explanation: 'There are 3 equal row and column pairs: (Row 0, Column 0), (Row 2, Column 2), (Row 3, Column 2).',
    },
  ],
  hints: [
    'Store each row as a serialized key in a hash map counting occurrences.',
    'For each column, serialize it and look up its count in the row map.',
    'Sum the counts for all columns. Time: O(n²).',
  ],
  functionName: 'equalPairs',
  params: ['grid'],
  starterCode: {
    javascript: 'function equalPairs(grid) {\n\n}\n',
    typescript: "function equalPairs(grid: number[][]): number {\n\n}",

    python: 'def equalPairs(grid: list) -> int:\n    pass\n',
  },
  visibleTests: [
    { args: [[[3,2,1],[1,7,6],[2,7,7]]], expected: 1 },
    { args: [[[3,1,2,2],[1,4,4,5],[2,4,2,2],[2,4,2,2]]], expected: 3 },
  ],
  hiddenTests: [
    { args: [[[1]]], expected: 1 },
    { args: [[[1,2],[3,4]]], expected: 0 },
    { args: [[[1,1],[1,1]]], expected: 4 },
    { args: [[[5,3],[3,5]]], expected: 2 },
  ],
};
