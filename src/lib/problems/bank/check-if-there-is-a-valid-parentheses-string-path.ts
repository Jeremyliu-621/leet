import type { Problem } from '../types';

export const problem: Problem = {
  id: 'check-if-there-is-a-valid-parentheses-string-path',
  title: 'Check if There is a Valid Parentheses String Path',
  difficulty: 'hard',
  tags: ['dynamic-programming', 'strings'],
  description: `A parentheses string is a non-empty string consisting only of \`'('\` and \`')'\`. It is **valid** if any of the following conditions is true:

- It is \`"()"\`.
- It can be written as \`AB\` (\`A\` concatenated with \`B\`), where \`A\` and \`B\` are valid parentheses strings.
- It can be written as \`(A)\`, where \`A\` is a valid parentheses string.

You are given an \`m x n\` matrix of parentheses \`grid\`. A valid parentheses string path in the grid is a path following the standard rules:

- The path starts from the upper left cell \`(0, 0)\`.
- The path ends at the bottom right cell \`(m - 1, n - 1)\`.
- The path only ever moves **right** or **down**.
- The resulting parentheses string formed by the path is **valid**.

Return \`true\` if there exists a valid parentheses string path in the grid, or \`false\` otherwise.`,
  constraints: [
    'm == grid.length',
    'n == grid[i].length',
    '2 <= m, n <= 100',
    "grid[i][j] is either '(' or ')'.",
  ],
  examples: [
    {
      input: 'grid = [["(","(","("],[")","(",")"],["(","(",")"],["(","(",")"]]',
      output: 'true',
      explanation: 'There exists a path with valid parentheses.',
    },
    {
      input: 'grid = [[")",")"],["(",")"],["(","("]]',
      output: 'false',
      explanation: 'No path forms a valid parentheses string.',
    },
  ],
  hints: [
    'A path has length m+n-1. For a valid parentheses string, m+n-1 must be even.',
    'Use DP: dp[i][j] = set of possible open-bracket balances (number of "(" minus number of ")") at cell (i, j).',
    'Balance can range 0 to floor((m+n-1)/2). Discard any state where balance goes negative. At (m-1, n-1), check if balance 0 is reachable.',
  ],
  functionName: 'hasValidPath',
  params: ['grid'],
  starterCode: {
    javascript: `function hasValidPath(grid) {

}`,
    typescript: `function hasValidPath(grid: string[][]): boolean {

}`,
    python: `def hasValidPath(grid):
    pass`,
  },
  visibleTests: [
    {
      args: [[['(', '(', '('], [')', '(', ')'], ['(', '(', ')'], ['(', '(', ')']]],
      expected: true,
    },
    {
      args: [[[')', ')'], ['(', ')'], ['(', '(']]],
      expected: false,
    },
  ],
  hiddenTests: [
    // 2x3 grids (path length 4, even) — can be valid
    { args: [[['(', '(', ')'], [')', ')', ')']]], expected: true },
    // 3x2 grids (path length 4, even) — can be valid
    { args: [[['(', '('], [')', '('], ['(', ')']]], expected: true },
    // 2x2 grid (path length 3, odd) — always false
    { args: [[['(', ')'], [')', ')']]], expected: false },
    { args: [[['(', '(', '('], [')', ')', ')']]], expected: true },
    { args: [[['(', '('], [')', '('], [')', ')']]], expected: true },
    { args: [[[')', '('], ['(', ')']]], expected: false },
  ],
};
