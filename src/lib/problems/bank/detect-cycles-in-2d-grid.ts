import type { Problem } from '../types';

export const problem: Problem = {
  id: 'detect-cycles-in-2d-grid',
  title: 'Detect Cycles in 2D Grid',
  difficulty: 'medium',
  tags: ['graph', 'union-find'],
  description: `Given a 2D array of characters \`grid\` of size \`m x n\`, you need to find if there exists any **cycle** consisting of the **same value** in \`grid\`.

A cycle is a path of **length 4 or more** in the grid that starts and ends at the same cell. From a given cell, you can move to one of the cells adjacent to it (in the 4 directions up/down/left/right) if it has the **same value** of the current cell.

Also, you cannot move to the cell you came from immediately in the previous step (i.e., the cycle must not consist of going back and forth between two cells).

Return \`true\` if any cycle of the same value exists in \`grid\`, otherwise return \`false\`.`,
  constraints: [
    'm == grid.length',
    'n == grid[i].length',
    '1 <= m, n <= 500',
    'grid[i][j] is a lowercase English letter',
  ],
  examples: [
    {
      input: 'grid = [["a","a","a","a"],["a","b","b","a"],["a","b","b","a"],["a","a","a","a"]]',
      output: 'true',
      explanation:
        'There is a cycle of \'a\' forming the outer ring.',
    },
    {
      input: 'grid = [["c","c","c","a"],["c","d","c","c"],["c","c","e","c"],["f","c","c","c"]]',
      output: 'true',
      explanation:
        'There is a cycle of \'c\' cells.',
    },
    {
      input: 'grid = [["a","b","b"],["b","z","b"],["b","b","a"]]',
      output: 'false',
    },
  ],
  hints: [
    'Use **DFS** from each unvisited cell. Track the previous cell to avoid immediate backtracking. If during DFS you reach a cell that is already visited (and it\'s not the immediate parent), a cycle exists.',
    'Alternatively, use **Union-Find**: for each cell, union it with its right and bottom neighbors if they have the same value. A cycle exists if before unioning, the two cells are already in the same component.',
    'Mark visited cells with their group ID (or a boolean). When DFS visits a cell that has the same value and is already visited (and is not from where we came), a cycle is detected.',
  ],
  functionName: 'containsCycle',
  params: ['grid'],
  starterCode: {
    javascript: 'function containsCycle(grid) {\n  \n}\n',
    typescript: "function containsCycle(grid: string[][]): boolean {\n  \n}",

    python: 'def containsCycle(grid):\n    pass\n',
  },
  visibleTests: [
    {
      args: [[['a', 'a', 'a', 'a'], ['a', 'b', 'b', 'a'], ['a', 'b', 'b', 'a'], ['a', 'a', 'a', 'a']]],
      expected: true,
    },
    {
      args: [[['c', 'c', 'c', 'a'], ['c', 'd', 'c', 'c'], ['c', 'c', 'e', 'c'], ['f', 'c', 'c', 'c']]],
      expected: true,
    },
    {
      args: [[['a', 'b', 'b'], ['b', 'z', 'b'], ['b', 'b', 'a']]],
      expected: false,
    },
  ],
  hiddenTests: [
    {
      args: [[['a', 'a'], ['a', 'a']]],
      expected: true,
    },
    {
      args: [[['a', 'b'], ['b', 'a']]],
      expected: false,
    },
    {
      args: [[['a']]],
      expected: false,
    },
    {
      args: [[['a', 'a', 'a'], ['a', 'a', 'a'], ['a', 'a', 'a']]],
      expected: true,
    },
    {
      args: [[['a', 'b', 'a'], ['b', 'a', 'b'], ['a', 'b', 'a']]],
      expected: false,
    },
  ],
};
