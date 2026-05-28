import type { Problem } from '../types';

export const problem: Problem = {
  id: 'min-number-of-flips-to-convert-binary-matrix-to-zero-matrix',
  title: 'Minimum Number of Flips to Convert Binary Matrix to Zero Matrix',
  difficulty: 'hard',
  tags: ['graph', 'simulation', 'arrays'],
  description: `Given a \`m x n\` binary matrix \`mat\`, in one step, you can choose one cell and **flip** it and all of its **four neighbors** (up, down, left, right) if they exist.

Return the **minimum number of steps** required to convert \`mat\` to the **zero matrix**, or \`-1\` if it is impossible.

A binary matrix has only \`0\` and \`1\` values. A zero matrix is all \`0\`s.`,
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
      explanation: 'Flip (1,1): [[1,1],[1,0]]. Flip (0,1): [[0,0],[1,1]]. Flip (1,0): [[0,0],[0,0]].',
    },
    {
      input: 'mat = [[0]]',
      output: '0',
    },
    {
      input: 'mat = [[1,1,1],[1,0,1],[0,0,0]]',
      output: '6',
    },
  ],
  hints: [
    'The state space is small: m*n ≤ 9, so at most 2^9 = 512 possible states. Encode the matrix as a bitmask.',
    'Use BFS from the initial state toward the zero state. Each flip toggles the selected cell and its neighbors.',
    'BFS guarantees the minimum number of flips to reach state 0.',
  ],
  functionName: 'minFlips',
  params: ['mat'],
  starterCode: {
    javascript: 'function minFlips(mat) {\n\n}\n',
    typescript: "function minFlips(mat: number[][]): number {\n\n}",

    python: 'def minFlips(mat: list) -> int:\n    pass\n',
  },
  visibleTests: [
    { args: [[[0,0],[0,1]]], expected: 3 },
    { args: [[[0]]], expected: 0 },
    { args: [[[1,1,1],[1,0,1],[0,0,0]]], expected: 6 },
  ],
  hiddenTests: [
    { args: [[[1]]], expected: 1 },
    { args: [[[1,0],[0,1]]], expected: 2 },
    { args: [[[0,0],[0,0]]], expected: 0 },
    { args: [[[1,1],[1,1]]], expected: 4 },
  ],
};
