import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-number-of-flips-to-convert-binary-matrix-to-zero-matrix',
  title: 'Minimum Number of Flips to Convert Binary Matrix to Zero Matrix',
  difficulty: 'hard',
  tags: ['bit-manipulation', 'graph'],
  description: `Given a \`m x n\` binary matrix \`mat\`. In one step, you can choose one cell and flip it and all the four neighbors of it if they exist (Flip is changing \`1\` to \`0\` and \`0\` to \`1\`). A pair of cells are called neighbors if they share one edge.

Return the **minimum number of steps** required to convert \`mat\` to a zero matrix or **-1** if you cannot.

A **binary matrix** is a matrix with all cells equal to \`0\` or \`1\` only.

A **zero matrix** is a matrix with all cells equal to \`0\`.`,
  constraints: [
    'm == mat.length',
    'n == mat[i].length',
    '1 <= m, n <= 3',
    'mat[i][j] is either 0 or 1.',
  ],
  examples: [
    {
      input: 'mat = [[0,0],[0,1]]',
      output: '3',
      explanation: 'One flip is not enough. Flip (1,0), (0,1), (1,1) in 3 steps.',
    },
    {
      input: 'mat = [[0]]',
      output: '0',
      explanation: 'Given matrix is a zero matrix.',
    },
    {
      input: 'mat = [[1,1,1],[1,0,1],[0,0,0]]',
      output: '6',
    },
  ],
  hints: [
    'Level 1: Since the matrix is at most 3×3, encode the state as a bitmask of up to 9 bits. BFS over states, where each step flips a cell and its neighbors.',
    'Level 2: Initialize BFS with the encoded starting state. For each state, try all m×n possible flip operations. If the resulting state is 0, return the current step count.',
    'Level 3: Encode mat as bit (i*n+j). Flip operation on cell (i,j): XOR the bit for (i,j) and each of its 4 neighbors that exist. BFS tracks visited states to avoid cycles. Return -1 if 0 state is unreachable.',
  ],
  functionName: 'minFlips',
  params: ['mat'],
  starterCode: {
    javascript: `function minFlips(mat) {

}`,
    typescript: `function minFlips(mat: number[][]): number {

}`,
    python: `def minFlips(mat: list[list[int]]) -> int:
    pass`,
  },
  visibleTests: [
    { args: [[[0,0],[0,1]]], expected: 3 },
    { args: [[[0]]], expected: 0 },
    { args: [[[1,1,1],[1,0,1],[0,0,0]]], expected: 6 },
  ],
  hiddenTests: [
    { args: [[[1]]], expected: 1 },
    { args: [[[1,1],[1,0]]], expected: 1 },
    { args: [[[1,1],[0,1]]], expected: 1 },
    { args: [[[0,0,0],[0,1,0],[0,0,0]]], expected: 5 },
    { args: [[[1,0,0],[1,0,0]]], expected: -1 },
    { args: [[[0,1],[1,0]]], expected: 2 },
  ],
};
