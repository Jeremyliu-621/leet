import type { Problem } from '../types';

export const problem: Problem = {
  id: 'range-sum-query-2d-mutable',
  title: 'Range Sum Query 2D — Mutable',
  difficulty: 'hard',
  tags: ['binary-indexed-tree', 'arrays'],
  description: `Given a 2D integer matrix \`matrix\`, handle multiple queries of the following types:

1. **Update**: Update the value of \`matrix[row][col]\` to \`val\`.
2. **SumRegion**: Return the sum of the elements inside the rectangle defined by its upper-left corner \`(row1, col1)\` and lower-right corner \`(row2, col2)\`.

The input is given as an array of operations. Each operation is one of:
- \`["NumMatrix", [matrix]]\` — constructor
- \`["update", [row, col, val]]\`
- \`["sumRegion", [row1, col1, row2, col2]]\`

Return an array of results (\`null\` for constructor and update; the integer sum for sumRegion).`,
  constraints: [
    'm == matrix.length',
    'n == matrix[i].length',
    '1 <= m, n <= 200',
    '-1000 <= matrix[i][j] <= 1000',
    '0 <= row < m, 0 <= col < n',
    '-1000 <= val <= 1000',
    '0 <= row1 <= row2 < m',
    '0 <= col1 <= col2 < n',
    'At most 5000 calls to update and sumRegion',
  ],
  examples: [
    {
      input: 'ops = [["NumMatrix",[[[3,0,1,4,2],[5,6,3,2,1],[1,2,0,1,5],[4,1,0,1,7],[1,0,3,0,5]]]],["sumRegion",[2,1,4,3]],["update",[3,2,2]],["sumRegion",[2,1,4,3]]]',
      output: '[null,8,null,10]',
      explanation: 'sumRegion(2,1,4,3) = 2+0+1+1+0+1+0+3+0 = 8. After update(3,2,2): the 0 at (3,2) becomes 2, so sum = 2+0+1+1+2+1+0+3+0 = 10.',
    },
  ],
  hints: [
    'Use a 2D Binary Indexed Tree (BIT). Each cell (i,j) of the BIT aggregates values for a rectangular region ending at (i,j), with sizes determined by the lowest set bit of i and j.',
    'Build by calling update(i, j, matrix[i][j]) for each cell. sumRegion(r1,c1,r2,c2) = prefixSum(r2,c2) − prefixSum(r1−1,c2) − prefixSum(r2,c1−1) + prefixSum(r1−1,c1−1) (inclusion–exclusion on the 2D prefix sums).',
    'For update(r,c,val): compute delta = val − current[r][c], update current[r][c], then add delta to the BIT. In the BIT, propagate by looping `i += i & -i` for rows and `j += j & -j` for columns (1-indexed).',
  ],
  functionName: 'numMatrixOps',
  params: ['ops'],
  starterCode: {
    javascript: `function numMatrixOps(ops) {
  // ops: [["NumMatrix",[matrix]], ["update",[r,c,v]], ["sumRegion",[r1,c1,r2,c2]], ...]
  // Return array of results: null for NumMatrix/update, sum for sumRegion.

}`,
    typescript: "function numMatrixOps(ops: ((string | number[][][])[] | (string | number[])[])[]): (null | number)[] {\n  // ops: [[\"NumMatrix\",[matrix]], [\"update\",[r,c,v]], [\"sumRegion\",[r1,c1,r2,c2]], ...]\n  // Return array of results: null for NumMatrix/update, sum for sumRegion.\n\n}",

    python: `def numMatrixOps(ops):
    # ops: [["NumMatrix",[matrix]], ["update",[r,c,v]], ["sumRegion",[r1,c1,r2,c2]], ...]
    # Return list of results: None for NumMatrix/update, sum for sumRegion.
    pass`,
  },
  visibleTests: [
    {
      args: [[
        ['NumMatrix', [[[3,0,1,4,2],[5,6,3,2,1],[1,2,0,1,5],[4,1,0,1,7],[1,0,3,0,5]]]],
        ['sumRegion', [2,1,4,3]],
        ['update', [3,2,2]],
        ['sumRegion', [2,1,4,3]],
      ]],
      expected: [null, 8, null, 10],
    },
  ],
  hiddenTests: [
    {
      args: [[
        ['NumMatrix', [[[1]]]],
        ['sumRegion', [0,0,0,0]],
        ['update', [0,0,5]],
        ['sumRegion', [0,0,0,0]],
      ]],
      expected: [null, 1, null, 5],
    },
    {
      args: [[
        ['NumMatrix', [[[1,2],[3,4]]]],
        ['sumRegion', [0,0,1,1]],
        ['sumRegion', [0,0,0,0]],
        ['update', [0,0,10]],
        ['sumRegion', [0,0,1,1]],
      ]],
      expected: [null, 10, 1, null, 19],
    },
    {
      args: [[
        ['NumMatrix', [[[0,0,0],[0,0,0],[0,0,0]]]],
        ['update', [1,1,5]],
        ['sumRegion', [0,0,2,2]],
        ['sumRegion', [1,1,1,1]],
      ]],
      expected: [null, null, 5, 5],
    },
    {
      args: [[
        ['NumMatrix', [[[2,3],[4,5]]]],
        ['sumRegion', [0,0,0,1]],
        ['sumRegion', [0,1,1,1]],
        ['update', [1,0,10]],
        ['sumRegion', [0,0,1,0]],
      ]],
      expected: [null, 5, 8, null, 12],
    },
  ],
};
