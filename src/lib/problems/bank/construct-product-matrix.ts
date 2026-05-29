import type { Problem } from '../types';

export const problem: Problem = {
  id: 'construct-product-matrix',
  title: 'Construct the Product Matrix',
  difficulty: 'hard',
  tags: ['arrays', 'math'],
  description: `Given a **0-indexed** 2D integer matrix \`grid\` of size \`n x m\`, construct a **0-indexed** 2D matrix \`p\` of size \`n x m\` such that \`p[i][j]\` is equal to the **product** of all elements in \`grid\` except \`grid[i][j]\`. Since the answer may be very large, return it **modulo** \`12345\`.`,
  constraints: [
    '1 <= n == grid.length <= 10^5',
    '1 <= m == grid[i].length <= 10^5',
    '1 <= n * m <= 10^5',
    '1 <= grid[i][j] <= 10^4',
  ],
  examples: [
    {
      input: 'grid = [[1,2],[3,4]]',
      output: '[[24,12],[8,6]]',
      explanation: 'p[0][0] = 2*3*4=24, p[0][1] = 1*3*4=12, p[1][0] = 1*2*4=8, p[1][1] = 1*2*3=6.',
    },
    {
      input: 'grid = [[10000,10000,10000]]',
      output: '[[5500,5500,5500]]',
      explanation: 'Each cell\'s product is 10000*10000 = 10^8. 10^8 mod 12345 = 5500.',
    },
  ],
  hints: [
    'This is "Product of Array Except Self" extended to 2D. Flatten the matrix, compute prefix/suffix products, then reshape.',
    'Maintain a running prefix product and a running suffix product (both mod 12345). For element at flat index k, the product excluding it is prefix[k] * suffix[k+1] % 12345.',
    'Convert the flat result back to 2D using divmod(k, m).',
  ],
  functionName: 'constructProductMatrix',
  params: ['grid'],
  starterCode: {
    javascript: `function constructProductMatrix(grid) {

}`,
    typescript: 'function constructProductMatrix(grid: number[][]): number[][] {\n\n}',
    python: `def constructProductMatrix(grid):
    pass`,
  },
  visibleTests: [
    { args: [[[1, 2], [3, 4]]], expected: [[24, 12], [8, 6]] },
    { args: [[[10000, 10000, 10000]]], expected: [[5500, 5500, 5500]] },
  ],
  hiddenTests: [
    { args: [[[1]]], expected: [[1]] },
    { args: [[[2, 3]]], expected: [[3, 2]] },
    { args: [[[3, 3, 3]]], expected: [[9, 9, 9]] },
    { args: [[[5, 4], [3, 2]]], expected: [[24, 30], [40, 60]] },
    { args: [[[6, 5], [4, 3]]], expected: [[60, 72], [90, 120]] },
    { args: [[[1, 1, 1], [1, 1, 1]]], expected: [[1, 1, 1], [1, 1, 1]] },
    { args: [[[10, 20, 30]]], expected: [[600, 300, 200]] },
  ],
};
