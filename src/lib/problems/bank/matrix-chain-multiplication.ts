import type { Problem } from '../types';

export const problem: Problem = {
  id: 'matrix-chain-multiplication',
  title: 'Matrix Chain Multiplication',
  difficulty: 'hard',
  tags: ['dynamic-programming'],
  description: `Given an array \`dims\` of length \`n + 1\` representing \`n\` matrices, where the i-th matrix has dimensions \`dims[i-1] × dims[i]\`, find the **minimum number of scalar multiplications** needed to multiply the entire chain of matrices together.

Matrix multiplication is associative but not commutative — the order of parenthesization matters for cost but not for the result.

The cost of multiplying an \`a × b\` matrix with a \`b × c\` matrix is \`a * b * c\` scalar multiplications.

**Example:** With \`dims = [10, 30, 5, 60]\`, there are three matrices:
- A: 10×30, B: 30×5, C: 5×60

Parenthesizing as (AB)C costs \`10*30*5 + 10*5*60 = 1500 + 3000 = 4500\`.
Parenthesizing as A(BC) costs \`30*5*60 + 10*30*60 = 9000 + 18000 = 27000\`.

The minimum is \`4500\`.`,
  constraints: [
    '2 <= dims.length <= 15',
    '1 <= dims[i] <= 100',
  ],
  examples: [
    {
      input: 'dims = [10, 30, 5, 60]',
      output: '4500',
      explanation: 'Parenthesizing as (A1 A2) A3 costs 10*30*5 + 10*5*60 = 1500 + 3000 = 4500, which is optimal.',
    },
    {
      input: 'dims = [40, 20, 30, 10, 30]',
      output: '26000',
      explanation: 'The optimal parenthesization gives 26000 multiplications.',
    },
    {
      input: 'dims = [10, 20, 30]',
      output: '6000',
      explanation: 'Only one way to multiply: 10*20*30 = 6000.',
    },
  ],
  hints: [
    'Define `dp[i][j]` = minimum cost to multiply matrices i through j (1-indexed). Base case: `dp[i][i] = 0` (single matrix, no cost). Fill the table for increasing chain lengths.',
    'For each subproblem (i, j) of length > 1, try every split point k (i ≤ k < j): `dp[i][j] = min over k of (dp[i][k] + dp[k+1][j] + dims[i-1] * dims[k] * dims[j])`. The last term is the cost of multiplying the two resulting sub-matrices.',
    'Build bottom-up: iterate `len` from 2 to n, then iterate starting index `i` from 1 to n-len+1, set `j = i + len - 1`, then try all split points k. Initialize dp with Infinity, return `dp[1][n]`.',
  ],
  functionName: 'matrixChainOrder',
  params: ['dims'],
  starterCode: {
    javascript: `function matrixChainOrder(dims) {
  const n = dims.length - 1;
  const dp = Array.from({length: n + 1}, () => new Array(n + 1).fill(Infinity));
  for (let i = 1; i <= n; i++) dp[i][i] = 0;
  for (let len = 2; len <= n; len++) {
    for (let i = 1; i <= n - len + 1; i++) {
      const j = i + len - 1;
      for (let m = i; m < j; m++) {
        dp[i][j] = Math.min(dp[i][j], dp[i][m] + dp[m+1][j] + dims[i-1] * dims[m] * dims[j]);
      }
    }
  }
  return dp[1][n];
}`,
    typescript: `function matrixChainOrder(dims: number[]): number {
  const n = dims.length - 1;
  const dp = Array.from({length: n + 1}, () => new Array(n + 1).fill(Infinity) as number[]);
  for (let i = 1; i <= n; i++) dp[i]![i] = 0;
  for (let len = 2; len <= n; len++) {
    for (let i = 1; i <= n - len + 1; i++) {
      const j = i + len - 1;
      for (let m = i; m < j; m++) {
        dp[i]![j] = Math.min(dp[i]![j]!, dp[i]![m]! + dp[m+1]![j]! + dims[i-1]! * dims[m]! * dims[j]!);
      }
    }
  }
  return dp[1]![n]!;
}`,
    python: `def matrixChainOrder(dims):
    if hasattr(dims, 'to_py'): dims = dims.to_py()
    dims = [int(x) for x in dims]
    n = len(dims) - 1
    dp = [[float('inf')] * (n + 1) for _ in range(n + 1)]
    for i in range(1, n + 1): dp[i][i] = 0
    for length in range(2, n + 1):
        for i in range(1, n - length + 2):
            j = i + length - 1
            for m in range(i, j):
                dp[i][j] = min(dp[i][j], dp[i][m] + dp[m+1][j] + dims[i-1]*dims[m]*dims[j])
    return dp[1][n]`,
  },
  visibleTests: [
    { args: [[10, 30, 5, 60]], expected: 4500 },
    { args: [[40, 20, 30, 10, 30]], expected: 26000 },
    { args: [[10, 20, 30]], expected: 6000 },
  ],
  hiddenTests: [
    { args: [[5, 10]], expected: 0 },
    { args: [[1, 2, 3]], expected: 6 },
    { args: [[2, 3, 4, 5]], expected: 64 },
    { args: [[10, 1, 10]], expected: 100 },
    { args: [[30, 35, 15, 5, 10, 20, 25]], expected: 15125 },
    { args: [[5, 4, 6, 2, 7]], expected: 158 },
  ],
};
