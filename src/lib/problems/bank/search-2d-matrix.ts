import type { Problem } from '../types';

export const problem: Problem = {
  id: 'search-2d-matrix',
  title: 'Search a 2D Matrix',
  difficulty: 'medium',
  tags: ['binary-search', 'arrays'],
  description: `You are given an \`m × n\` integer matrix \`matrix\` with the following properties:
- Each row is sorted in non-decreasing order from left to right.
- The first integer of each row is greater than the last integer of the previous row.

Given an integer \`target\`, return \`true\` if \`target\` is in the matrix, otherwise return \`false\`.

**Treat the 2D matrix as a flattened sorted 1D array and run binary search:** Given midpoint index \`mid\` (0-indexed in the flattened array), the corresponding matrix cell is \`matrix[Math.floor(mid / n)][mid % n]\`.`,
  constraints: [
    'm == matrix.length',
    'n == matrix[i].length',
    '1 <= m, n <= 100',
    '-10^4 <= matrix[i][j] <= 10^4',
    '-10^4 <= target <= 10^4',
    'Matrix is sorted end-to-end in strictly increasing order',
  ],
  examples: [
    {
      input: 'matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3',
      output: 'true',
      explanation: 'Value 3 is at position matrix[0][1].',
    },
    {
      input: 'matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13',
      output: 'false',
      explanation: 'Value 13 is not in the matrix.',
    },
    {
      input: 'matrix = [[1]], target = 1',
      output: 'true',
      explanation: '1×1 matrix containing the target.',
    },
  ],
  hints: [
    'The matrix is globally sorted when read row-by-row. Treat it as a 1D sorted array of length m*n. Index i in the 1D view maps to matrix[Math.floor(i/n)][i%n].',
    'Binary search: lo=0, hi=m*n-1. At each step, compute mid and map it to matrix[mid/n][mid%n]. Compare with target, and adjust lo or hi as usual.',
    '`const m=matrix.length,n=matrix[0].length; let lo=0,hi=m*n-1; while(lo<=hi){ const mid=(lo+hi)>>1; const val=matrix[Math.floor(mid/n)][mid%n]; if(val===target) return true; else if(val<target) lo=mid+1; else hi=mid-1; } return false;`',
  ],
  functionName: 'searchMatrix',
  params: ['matrix', 'target'] as readonly string[],
  starterCode: {
    javascript: 'function searchMatrix(matrix, target) {\n  // your code here\n}\n',
    python: 'def searchMatrix(matrix: list[list[int]], target: int) -> bool:\n    # your code here\n    pass\n',
  },
  visibleTests: [
    { args: [[[1,3,5,7],[10,11,16,20],[23,30,34,60]], 3], expected: true },
    { args: [[[1,3,5,7],[10,11,16,20],[23,30,34,60]], 13], expected: false },
    { args: [[[1]], 1], expected: true },
  ],
  hiddenTests: [
    { args: [[[1]], 2], expected: false },
    { args: [[[1,1]], 1], expected: true },
    { args: [[[1,3],[5,7]], 5], expected: true },
    { args: [[[1,3],[5,7]], 4], expected: false },
    { args: [[[1,3,5,7],[10,11,16,20],[23,30,34,60]], 60], expected: true },
    { args: [[[1,3,5,7],[10,11,16,20],[23,30,34,60]], 0], expected: false },
  ],
};
