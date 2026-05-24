import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-negatives-in-sorted-matrix',
  title: 'Count Negative Numbers in a Sorted Matrix',
  difficulty: 'easy',
  tags: ['binary-search'],
  description: `Given a \`m x n\` matrix \`grid\` which is sorted in **non-increasing** order both row-wise and column-wise, return the number of **negative** numbers in \`grid\`.`,
  constraints: [
    'm == grid.length',
    'n == grid[i].length',
    '1 <= m, n <= 100',
    '-100 <= grid[i][j] <= 100',
    'grid is sorted in non-increasing order both row-wise and column-wise',
  ],
  examples: [
    {
      input: 'grid = [[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]]',
      output: '8',
    },
    {
      input: 'grid = [[3,2],[1,0]]',
      output: '0',
    },
  ],
  hints: [
    'For each row, use binary search to find the first negative number. Everything to the right is also negative.',
    'Count of negatives in each row = n - (index of first negative), or 0 if no negatives.',
    'Alternatively, use a two-pointer traversal: start from the bottom-left corner and move up/right.',
  ],
  functionName: 'countNegatives',
  params: ['grid'],
  starterCode: {
    javascript: `function countNegatives(grid) {
  // Return count of negative numbers in the sorted matrix
}`,
    python: `def countNegatives(grid):
    # Return count of negative numbers in the sorted matrix
    pass`,
  },
  visibleTests: [
    { args: [[[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]]], expected: 8 },
    { args: [[[3,2],[1,0]]], expected: 0 },
    { args: [[[-1]]], expected: 1 },
  ],
  hiddenTests: [
    { args: [[[1,-1],[-1,-1]]], expected: 3 },
    { args: [[[5,1,0],[-5,-5,-5]]], expected: 3 },
    { args: [[[1,1],[-1,-1]]], expected: 2 },
    { args: [[[1]]], expected: 0 },
  ],
};
