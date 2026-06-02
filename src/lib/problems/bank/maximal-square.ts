import type { Problem } from '../types';

export const problem: Problem = {
  id: 'maximal-square',
  title: 'Maximal Square',
  difficulty: 'medium',
  tags: ['dynamic-programming', 'arrays'],
  description: `Given an \`m × n\` binary matrix filled with \`'0'\`s and \`'1'\`s, find the **largest square** submatrix containing only \`'1'\`s and return its **area**.

**DP recurrence:** Let \`dp[i][j]\` be the side length of the largest all-1 square whose **bottom-right corner** is at \`(i, j)\`.
- If \`matrix[i][j] === '0'\`: \`dp[i][j] = 0\`
- If \`matrix[i][j] === '1'\`: \`dp[i][j] = min(dp[i-1][j], dp[i][j-1], dp[i-1][j-1]) + 1\`

The answer is \`max(dp[i][j])²\`.`,
  constraints: [
    'm == matrix.length',
    'n == matrix[i].length',
    '1 <= m, n <= 300',
    "matrix[i][j] is '0' or '1'",
  ],
  examples: [
    {
      input: 'matrix = [["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]]',
      output: '4',
      explanation: 'A 2×2 all-1 square exists (area 4).',
    },
    {
      input: 'matrix = [["0","1"],["1","0"]]',
      output: '1',
      explanation: 'Only 1×1 squares of all 1s exist.',
    },
    {
      input: 'matrix = [["0"]]',
      output: '0',
      explanation: 'No 1s means no square.',
    },
  ],
  hints: [
    'Think of dp[i][j] as "the side length of the largest all-1 square that ends at row i, col j." A square ending at (i,j) of side s requires all of (i-1,j), (i,j-1), (i-1,j-1) to have squares of side at least s-1.',
    'The transition is dp[i][j] = min(dp[i-1][j], dp[i][j-1], dp[i-1][j-1]) + 1 when matrix[i][j] === "1". This is the three-neighbor minimum plus one. The final answer is the maximum dp value squared.',
    '`let best=0; const dp=Array.from({length:m},()=>new Array(n).fill(0)); for(let i=0;i<m;i++) for(let j=0;j<n;j++) { if(matrix[i][j]==="1"){ dp[i][j]=i>0&&j>0 ? Math.min(dp[i-1][j],dp[i][j-1],dp[i-1][j-1])+1 : 1; best=Math.max(best,dp[i][j]); } } return best*best;`',
  ],
  functionName: 'maximalSquare',
  params: ['matrix'] as readonly string[],
  starterCode: {
    javascript: `function maximalSquare(matrix) {
  const m = matrix.length, n = matrix[0].length;
  const dp = Array.from({ length: m }, () => new Array(n).fill(0));
  let best = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] === '1') {
        dp[i][j] = i > 0 && j > 0 ? Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]) + 1 : 1;
        best = Math.max(best, dp[i][j]);
      }
    }
  }
  return best * best;
}`,
    typescript: `function maximalSquare(matrix: string[][]): number {
  const m = matrix.length, n = matrix[0]!.length;
  const dp: number[][] = Array.from({ length: m }, () => new Array(n).fill(0));
  let best = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i]![j] === '1') {
        dp[i]![j] = i > 0 && j > 0 ? Math.min(dp[i - 1]![j]!, dp[i]![j - 1]!, dp[i - 1]![j - 1]!) + 1 : 1;
        best = Math.max(best, dp[i]![j]!);
      }
    }
  }
  return best * best;
}`,
    python: `def maximalSquare(matrix):
    if hasattr(matrix, 'to_py'): matrix = matrix.to_py()
    matrix = [[str(c) for c in (row.to_py() if hasattr(row, 'to_py') else row)] for row in matrix]
    m, n = len(matrix), len(matrix[0])
    dp = [[0] * n for _ in range(m)]
    best = 0
    for i in range(m):
        for j in range(n):
            if matrix[i][j] == '1':
                dp[i][j] = min(dp[i-1][j], dp[i][j-1], dp[i-1][j-1]) + 1 if i > 0 and j > 0 else 1
                best = max(best, dp[i][j])
    return best * best`,
  },
  visibleTests: [
    { args: [[['1','0','1','0','0'],['1','0','1','1','1'],['1','1','1','1','1'],['1','0','0','1','0']]], expected: 4 },
    { args: [[['0','1'],['1','0']]], expected: 1 },
    { args: [[['0']]], expected: 0 },
  ],
  hiddenTests: [
    { args: [[['1']]], expected: 1 },
    { args: [[['1','1'],['1','1']]], expected: 4 },
    { args: [[['0','0'],['0','0']]], expected: 0 },
    { args: [[['1','1','1'],['1','1','1'],['1','1','1']]], expected: 9 },
    { args: [[['1','0'],['1','1']]], expected: 1 },
  ],
};
