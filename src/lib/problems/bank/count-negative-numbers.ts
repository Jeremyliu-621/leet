import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-negative-numbers',
  title: 'Count Negative Numbers in a Sorted Matrix',
  difficulty: 'easy',
  tags: ['arrays', 'binary-search'],
  description: `Given a \`m x n\` matrix \`grid\` which is sorted in **non-increasing order** both row-wise and column-wise, return the **number of negative numbers** in \`grid\`.`,
  constraints: [
    'm == grid.length',
    'n == grid[i].length',
    '1 <= m, n <= 100',
    '-100 <= grid[i][j] <= 100',
  ],
  examples: [
    {
      input: 'grid = [[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]]',
      output: '8',
      explanation: '8 negative numbers.',
    },
    { input: 'grid = [[3,2],[1,0]]', output: '0' },
  ],
  hints: [
    'Level 1: Brute force: iterate all cells and count negatives. O(m*n).',
    'Level 2: Optimize: start from top-right corner. Move left if current is negative (count += rows below), move down if positive.',
    'Level 3: let r=0,c=grid[0].length-1,cnt=0;while(r<grid.length&&c>=0){if(grid[r][c]<0){cnt+=grid.length-r;c--;}else r++;}return cnt;',
  ],
  functionName: 'countNegatives',
  params: ['grid'],
  starterCode: {
    javascript: 'function countNegatives(grid) {\n  // your code here\n}\n',
    typescript: "function countNegatives(grid: number[][]): number {\n  // your code here\n}",

    python: 'def countNegatives(grid):\n    # your code here\n    pass\n',
  },
  visibleTests: [
    { args: [[[4, 3, 2, -1], [3, 2, 1, -1], [1, 1, -1, -2], [-1, -1, -2, -3]]], expected: 8 },
    { args: [[[3, 2], [1, 0]]], expected: 0 },
  ],
  hiddenTests: [
    { args: [[[-1]]], expected: 1 },
    { args: [[[1, -1], [-1, -1]]], expected: 3 },
    { args: [[[5, 1, 0], [-5, -5, -5]]], expected: 3 },
    { args: [[[1, 2], [3, 4]]], expected: 0 },
  ],
};
