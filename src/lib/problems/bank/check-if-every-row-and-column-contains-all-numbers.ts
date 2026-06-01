import type { Problem } from '../types';

export const problem: Problem = {
  id: 'check-if-every-row-and-column-contains-all-numbers',
  title: 'Check if Every Row and Column Contains All Numbers',
  difficulty: 'easy',
  tags: ['arrays'],
  description: `An **n × n** matrix is **valid** if every row and every column contains **all** the integers from \`1\` to \`n\` (inclusive).

Given an \`n × n\` integer matrix \`matrix\`, return \`true\` if the matrix is **valid**, and \`false\` otherwise.`,
  constraints: [
    'n == matrix.length == matrix[i].length',
    '1 <= n <= 100',
    '1 <= matrix[i][j] <= n',
  ],
  examples: [
    {
      input: 'matrix = [[1,2,3],[3,1,2],[2,3,1]]',
      output: 'true',
      explanation: 'Each row and column contains 1, 2, and 3.',
    },
    {
      input: 'matrix = [[1,1,1],[1,2,3],[1,2,3]]',
      output: 'false',
      explanation: 'Row 0 has duplicate 1s.',
    },
  ],
  hints: [
    'For each row, check if the sorted values equal [1, 2, ..., n].',
    'For each column, collect the values and check the same condition.',
    'A row or column is valid if and only if it contains no duplicates (since all values are in [1..n]).',
  ],
  functionName: 'checkValid',
  params: ['matrix'],
  starterCode: {
    javascript: 'function checkValid(matrix) {\n  const n = matrix.length;\n  for (let i = 0; i < n; i++) {\n    const rowSet = new Set(matrix[i]);\n    if (rowSet.size !== n) return false;\n    const colSet = new Set();\n    for (let j = 0; j < n; j++) colSet.add(matrix[j][i]);\n    if (colSet.size !== n) return false;\n  }\n  return true;\n}\n',
    typescript: "function checkValid(matrix: number[][]): boolean {\n  const n = matrix.length;\n  for (let i = 0; i < n; i++) {\n    const rowSet = new Set(matrix[i]);\n    if (rowSet.size !== n) return false;\n    const colSet = new Set<number>();\n    for (let j = 0; j < n; j++) colSet.add(matrix[j]![i]!);\n    if (colSet.size !== n) return false;\n  }\n  return true;\n}",

    python: 'def checkValid(matrix):\n    n = len(matrix)\n    for i in range(n):\n        if len(set(matrix[i])) != n:\n            return False\n        if len(set(matrix[j][i] for j in range(n))) != n:\n            return False\n    return True\n',
  },
  visibleTests: [
    { args: [[[1,2,3],[3,1,2],[2,3,1]]], expected: true },
    { args: [[[1,1,1],[1,2,3],[1,2,3]]], expected: false },
    { args: [[[1]]], expected: true },
  ],
  hiddenTests: [
    { args: [[[1,2],[2,1]]], expected: true },
    { args: [[[1,2],[1,2]]], expected: false },
    { args: [[[2,1],[1,2]]], expected: true },
    { args: [[[1,2,3],[2,3,1],[3,1,2]]], expected: true },
    { args: [[[1,2,3],[2,1,3],[3,1,2]]], expected: false },
  ],
};
