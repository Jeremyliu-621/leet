import type { Problem } from '../types';

export const problem: Problem = {
  id: 'rows-with-most-ones',
  title: 'Rows With Most Ones',
  difficulty: 'easy',
  tags: ['arrays'],
  description: `Given a **0-indexed** \`m x n\` binary matrix \`mat\`, return *an integer array* \`answer\` *of length* \`m\` *where* \`answer[i]\` *is the index of the row with the most ones in row* \`i\`.

If there are multiple rows with the most ones, the answer is the row with the **smaller index**.

**Note:**
- No two rows will have the same number of ones.`,
  constraints: [
    'm == mat.length',
    'n == mat[i].length',
    '1 <= m, n <= 100',
    'mat[i][j] is either 0 or 1.',
  ],
  examples: [
    {
      input: 'mat = [[0,1],[1,0]]',
      output: '[0,1]',
      explanation:
        'Both rows have one 1. answer[0] = 0 (row 0 has a 1 at index 1). answer[1] = 1 (row 1 has a 1 at index 0).',
    },
    {
      input: 'mat = [[0,0,0],[0,1,1],[1,1,1]]',
      output: '[2]',
      explanation: 'Row 2 has the most ones (3 ones). So answer = [2].',
    },
    {
      input: 'mat = [[0,0],[0,1],[1,1],[0,1],[0,0]]',
      output: '[2]',
      explanation:
        'Row 0 has 0 ones, row 1 has 1 one, row 2 has 2 ones (max), row 3 has 1 one, row 4 has 0 ones. Only row 2 has the most ones.',
    },
    {
      input: 'mat = [[0,1],[1,1],[0,1]]',
      output: '[1]',
      explanation: 'Row 1 has 2 ones which is the maximum. Rows 0 and 2 have 1 one each.',
    },
  ],
  hints: [
    'Level 1: Count the ones in each row. Find the maximum count.',
    'Level 2: Collect all row indices where the count equals the maximum.',
    'Level 3: O(m*n) time. Sort the result by row index (they are already in order if you iterate from 0 to m-1).',
  ],
  functionName: 'rowsWithMostOnes',
  params: ['mat'],
  starterCode: {
    javascript: `function rowsWithMostOnes(mat) {
  const counts = mat.map(row => row.reduce((a, b) => a + b, 0));
  const max = Math.max(...counts);
  return counts.reduce((acc, c, i) => { if (c === max) acc.push(i); return acc; }, []);
}`,
    typescript: `function rowsWithMostOnes(mat: number[][]): number[] {
  const counts = mat.map(row => row.reduce((a, b) => a + b, 0));
  const max = Math.max(...counts);
  return counts.reduce((acc: number[], c, i) => { if (c === max) acc.push(i); return acc; }, []);
}`,
    python: `def rowsWithMostOnes(mat):
    counts = [sum(row) for row in mat]
    mx = max(counts)
    return [i for i, c in enumerate(counts) if c == mx]`,
  },
  visibleTests: [
    { args: [[[0, 1], [1, 0]]], expected: [0, 1] },
    { args: [[[0, 0, 0], [0, 1, 1], [1, 1, 1]]], expected: [2] },
    { args: [[[0, 0], [0, 1], [1, 1], [0, 1], [0, 0]]], expected: [2] },
  ],
  hiddenTests: [
    { args: [[[1]]], expected: [0] },
    { args: [[[0]]], expected: [0] },
    { args: [[[1, 1, 1], [0, 0, 0]]], expected: [0] },
    { args: [[[0, 0], [0, 0], [1, 1]]], expected: [2] },
    { args: [[[0, 1, 0], [1, 1, 0], [1, 0, 0]]], expected: [1] },
    { args: [[[1, 1], [1, 1]]], expected: [0, 1] },
    { args: [[[0, 0, 1], [1, 1, 1], [0, 1, 0]]], expected: [1] },
  ],
};
