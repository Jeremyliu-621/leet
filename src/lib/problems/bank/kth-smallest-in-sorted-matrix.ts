import type { Problem } from '../types';

export const problem: Problem = {
  id: 'kth-smallest-in-sorted-matrix',
  title: 'Kth Smallest Element in a Sorted Matrix',
  difficulty: 'medium',
  tags: ['heap', 'binary-search', 'arrays'],
  description: `Given an \`n × n\` matrix where each of the rows and columns is sorted in ascending order, return the **k-th smallest element** in the matrix.

Note that it is the k-th smallest element in the sorted order, not the k-th distinct element.

You must find a solution with a memory complexity better than O(n²).

**Example:** For matrix \`[[1,5,9],[10,11,13],[12,13,15]]\` and \`k = 8\`, the sorted elements are \`[1,5,9,10,11,12,13,13,15]\` so the 8th smallest is \`13\`.`,
  constraints: [
    'n == matrix.length == matrix[i].length',
    '1 <= n <= 300',
    '-10^9 <= matrix[i][j] <= 10^9',
    'All the rows and columns of matrix are guaranteed to be sorted in non-decreasing order',
    '1 <= k <= n^2',
  ],
  examples: [
    {
      input: 'matrix = [[1,5,9],[10,11,13],[12,13,15]], k = 8',
      output: '13',
      explanation: 'The elements in sorted order are [1,5,9,10,11,12,13,13,15], and the 8th smallest is 13.',
    },
    {
      input: 'matrix = [[-5]], k = 1',
      output: '-5',
      explanation: 'There is only one element.',
    },
    {
      input: 'matrix = [[1,2],[3,4]], k = 2',
      output: '2',
      explanation: 'Sorted order is [1,2,3,4], so the 2nd smallest is 2.',
    },
  ],
  hints: [
    'Binary search on the value range: the answer lies between `matrix[0][0]` (min) and `matrix[n-1][n-1]` (max). For a midpoint `mid`, count how many elements are ≤ mid using the sorted property.',
    'To count elements ≤ mid efficiently: start at the top-right corner. If `matrix[row][col] <= mid`, add `row + 1` (all elements in this column up to the current row are ≤ mid) and move right. Otherwise move up.',
    'Binary search: while `lo < hi`, set `mid = (lo + hi) >> 1`. If the count of elements ≤ mid is < k, set `lo = mid + 1`. Otherwise set `hi = mid`. Return `lo` when the loop ends — it always lands on a value that actually exists in the matrix.',
  ],
  functionName: 'kthSmallest',
  params: ['matrix', 'k'],
  starterCode: {
    javascript: 'function kthSmallest(matrix, k) {\n  // your code here\n}\n',
    python: 'def kthSmallest(matrix, k):\n    # your code here\n    pass\n',
  },
  visibleTests: [
    { args: [[[1, 5, 9], [10, 11, 13], [12, 13, 15]], 8], expected: 13 },
    { args: [[[-5]], 1], expected: -5 },
    { args: [[[1, 2], [3, 4]], 2], expected: 2 },
  ],
  hiddenTests: [
    { args: [[[1, 2], [3, 4]], 1], expected: 1 },
    { args: [[[1, 2], [3, 4]], 3], expected: 3 },
    { args: [[[1, 2], [3, 4]], 4], expected: 4 },
    { args: [[[1, 5, 9], [10, 11, 13], [12, 13, 15]], 1], expected: 1 },
    { args: [[[1, 5, 9], [10, 11, 13], [12, 13, 15]], 5], expected: 11 },
    { args: [[[1, 2, 3], [4, 5, 6], [7, 8, 9]], 5], expected: 5 },
  ],
};
