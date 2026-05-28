import type { Problem } from '../types';

export const problem: Problem = {
  id: 'kth-smallest-element-in-a-sorted-matrix',
  title: 'Kth Smallest Element in a Sorted Matrix',
  difficulty: 'medium',
  tags: ['heap', 'binary-search', 'arrays'],
  description: `Given an \`n x n\` \`matrix\` where each of the rows and columns is sorted in ascending order, return the \`k\`th smallest element in the matrix.

Note that it is the \`k\`th smallest element **in sorted order**, not the \`k\`th **distinct** element.

You must find a solution with a memory complexity better than \`O(n^2)\`.`,
  constraints: [
    '`n == matrix.length == matrix[i].length`',
    '`1 <= n <= 300`',
    '`-10^9 <= matrix[i][j] <= 10^9`',
    'All the rows and columns of `matrix` are **guaranteed** to be sorted in non-decreasing order.',
    '`1 <= k <= n^2`',
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
    },
  ],
  hints: [
    'Use binary search on the value range `[matrix[0][0], matrix[n-1][n-1]]`. For a given `mid`, count how many elements are ≤ mid using a row-by-row binary search.',
    'The count function: for each row, use `upperBound` to find how many elements ≤ mid. The answer is the smallest `mid` where `count(mid) >= k`.',
    '```js\nfunction kthSmallest(matrix, k) {\n  const n = matrix.length;\n  let lo = matrix[0][0], hi = matrix[n-1][n-1];\n  while (lo < hi) {\n    const mid = lo + Math.floor((hi - lo) / 2);\n    let count = 0;\n    for (let r = 0; r < n; r++) {\n      let l = 0, rr = n;\n      while (l < rr) { const m2 = (l+rr)>>1; matrix[r][m2]<=mid?l=m2+1:rr=m2; }\n      count += l;\n    }\n    if (count >= k) hi = mid; else lo = mid + 1;\n  }\n  return lo;\n}\n```',
  ],
  functionName: 'kthSmallest',
  params: ['matrix', 'k'],
  starterCode: {
    javascript: `function kthSmallest(matrix, k) {

}`,
    python: `def kthSmallest(matrix: list[list[int]], k: int) -> int:
    pass`,
  },
  visibleTests: [
    { args: [[[1, 5, 9], [10, 11, 13], [12, 13, 15]], 8], expected: 13 },
    { args: [[[-5]], 1], expected: -5 },
  ],
  hiddenTests: [
    { args: [[[1, 2], [1, 3]], 2], expected: 1 },
    { args: [[[1, 2], [3, 4]], 3], expected: 3 },
    { args: [[[1, 3, 5], [6, 7, 12], [11, 14, 14]], 6], expected: 11 },
    { args: [[[1, 2, 3], [4, 5, 6], [7, 8, 9]], 5], expected: 5 },
  ],
};
