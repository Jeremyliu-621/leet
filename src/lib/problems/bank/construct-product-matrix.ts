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
  const MOD = 12345;
  const n = grid.length;
  const m = grid[0].length;
  const total = n * m;
  const flat = grid.flat();
  const prefix = new Array(total).fill(1);
  const suffix = new Array(total).fill(1);
  for (let i = 1; i < total; i++) {
    prefix[i] = (prefix[i - 1] * flat[i - 1]) % MOD;
  }
  for (let i = total - 2; i >= 0; i--) {
    suffix[i] = (suffix[i + 1] * flat[i + 1]) % MOD;
  }
  const result = [];
  for (let i = 0; i < n; i++) {
    result.push([]);
    for (let j = 0; j < m; j++) {
      const k = i * m + j;
      result[i].push((prefix[k] * suffix[k]) % MOD);
    }
  }
  return result;
}`,
    typescript: `function constructProductMatrix(grid: number[][]): number[][] {
  const MOD = 12345;
  const n = grid.length;
  const m = grid[0].length;
  const total = n * m;
  const flat = grid.flat();
  const prefix = new Array(total).fill(1);
  const suffix = new Array(total).fill(1);
  for (let i = 1; i < total; i++) {
    prefix[i] = (prefix[i - 1] * flat[i - 1]) % MOD;
  }
  for (let i = total - 2; i >= 0; i--) {
    suffix[i] = (suffix[i + 1] * flat[i + 1]) % MOD;
  }
  const result: number[][] = [];
  for (let i = 0; i < n; i++) {
    result.push([]);
    for (let j = 0; j < m; j++) {
      const k = i * m + j;
      result[i].push((prefix[k] * suffix[k]) % MOD);
    }
  }
  return result;
}`,
    python: `def constructProductMatrix(grid):
    MOD = 12345
    n = len(grid)
    m = len(grid[0])
    total = n * m
    flat = [grid[i][j] for i in range(n) for j in range(m)]
    prefix = [1] * total
    suffix = [1] * total
    for i in range(1, total):
        prefix[i] = (prefix[i - 1] * flat[i - 1]) % MOD
    for i in range(total - 2, -1, -1):
        suffix[i] = (suffix[i + 1] * flat[i + 1]) % MOD
    result = []
    for i in range(n):
        row = []
        for j in range(m):
            k = i * m + j
            row.append((prefix[k] * suffix[k]) % MOD)
        result.append(row)
    return result`,
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
