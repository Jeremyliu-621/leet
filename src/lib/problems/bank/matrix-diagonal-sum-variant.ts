import type { Problem } from '../types';

export const problem: Problem = {
  id: 'matrix-diagonal-sum-variant',
  title: 'Matrix Diagonal Sum',
  difficulty: 'easy',
  tags: ['arrays', 'math'],
  description: `Given a square \`n × n\` matrix \`mat\`, return the sum of the elements on the **primary diagonal** and the **secondary diagonal**.

- The **primary diagonal** runs from the top-left to the bottom-right: \`mat[i][i]\`.
- The **secondary diagonal** runs from the top-right to the bottom-left: \`mat[i][n-1-i]\`.

If \`n\` is **odd**, the center element lies on both diagonals — count it **only once**.

**Example:**
\`\`\`
mat = [[1, 2, 3],
       [4, 5, 6],
       [7, 8, 9]]
Primary diagonal:   1 + 5 + 9 = 15
Secondary diagonal: 3 + 5 + 7 = 15
Center (5) counted twice → subtract once → 15 + 15 - 5 = 25
\`\`\`

**Constraints:**
- \`1 ≤ n ≤ 100\`
- \`1 ≤ mat[i][j] ≤ 100\``,
  constraints: [
    '1 ≤ n ≤ 100',
    '1 ≤ mat[i][j] ≤ 100',
  ],
  examples: [
    {
      input: 'mat = [[1,2,3],[4,5,6],[7,8,9]]',
      output: '25',
      explanation: 'Primary diagonal: 1+5+9=15. Secondary diagonal: 3+5+7=15. Center 5 counted twice, subtract once: 25.',
    },
    {
      input: 'mat = [[1,1,1,1],[1,1,1,1],[1,1,1,1],[1,1,1,1]]',
      output: '8',
      explanation: 'Primary: 4 ones, Secondary: 4 ones. No center overlap (n=4 even). Total = 8.',
    },
    { input: 'mat = [[5]]', output: '5' },
  ],
  hints: [
    'Loop over all rows `i` from 0 to n-1. Add `mat[i][i]` (primary) and `mat[i][n-1-i]` (secondary) in each iteration.',
    'When `i === n-1-i`, both expressions point to the same cell. This only happens when `n` is odd and `i` is the middle index.',
    'After summing, if `n % 2 === 1`, subtract the center element `mat[Math.floor(n/2)][Math.floor(n/2)]` once.',
  ],
  functionName: 'diagonalSumVariant',
  params: ['mat'],
  starterCode: {
    javascript: `function diagonalSumVariant(mat) {
  // Return sum of both diagonals; if n is odd, subtract the center element (counted twice)
}`,
    python: `def diagonalSumVariant(mat: list[list[int]]) -> int:
    # Return sum of both diagonals; if n is odd, subtract the center element (counted twice)
    pass`,
  },
  visibleTests: [
    { args: [[[1, 2, 3], [4, 5, 6], [7, 8, 9]]], expected: 25 },
    { args: [[[1, 1, 1, 1], [1, 1, 1, 1], [1, 1, 1, 1], [1, 1, 1, 1]]], expected: 8 },
    { args: [[[5]]], expected: 5 },
  ],
  hiddenTests: [
    { args: [[[1, 2], [3, 4]]], expected: 10 },
    { args: [[[1, 0, 0], [0, 0, 0], [0, 0, 1]]], expected: 2 },
    { args: [[[100, 100, 100], [100, 100, 100], [100, 100, 100]]], expected: 500 },
    { args: [[[2, 3, 4, 5], [6, 7, 8, 9], [1, 2, 3, 4], [5, 6, 7, 8]]], expected: 40 },
    { args: [[[1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12, 13, 14, 15], [16, 17, 18, 19, 20], [21, 22, 23, 24, 25]]], expected: 117 },
  ],
};
