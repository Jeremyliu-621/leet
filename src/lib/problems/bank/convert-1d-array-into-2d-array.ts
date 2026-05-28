import type { Problem } from '../types';

export const problem: Problem = {
  id: 'convert-1d-array-into-2d-array',
  title: 'Convert 1D Array Into 2D Array',
  difficulty: 'easy',
  tags: ['arrays'],
  description: `You are given a **0-indexed** 1D integer array \`original\`, and two integers \`m\` and \`n\`. Create a 2D array with \`m\` rows and \`n\` columns using **all** elements of \`original\`.

- Elements at indices \`0\` to \`n - 1\` form the **first row**.
- Elements at indices \`n\` to \`2n - 1\` form the **second row**.
- And so on for each subsequent row.

Return the constructed 2D array if possible. If the total number of elements in \`original\` does not equal \`m * n\`, return an **empty** 2D array \`[]\`.`,
  constraints: [
    '`1 <= original.length <= 5 * 10^4`',
    '`1 <= original[i] <= 10^5`',
    '`1 <= m, n <= 4 * 10^4`',
  ],
  examples: [
    {
      input: 'original = [1,2,3,4], m = 2, n = 2',
      output: '[[1,2],[3,4]]',
      explanation: 'The 1D array has 4 elements and 2 × 2 = 4, so construction is possible. Row 0 = [1,2], Row 1 = [3,4].',
    },
    {
      input: 'original = [1,2,3], m = 1, n = 3',
      output: '[[1,2,3]]',
      explanation: '1 × 3 = 3 elements — exactly matching. The single row is [1,2,3].',
    },
    {
      input: 'original = [1,2], m = 1, n = 1',
      output: '[]',
      explanation: '1 × 1 = 1, but original has 2 elements — impossible, so return [].',
    },
  ],
  hints: [
    'First check: if `original.length !== m * n`, immediately return `[]`.',
    'Iterate `m` times to build each row. Row `i` is `original.slice(i * n, (i + 1) * n)`.',
    'In Python, a list comprehension works cleanly: `[original[i*n:(i+1)*n] for i in range(m)]`.',
  ],
  functionName: 'construct2DArray',
  params: ['original', 'm', 'n'],
  starterCode: {
    javascript: `function construct2DArray(original, m, n) {

}`,
    typescript: "function construct2DArray(original: number[], m: number, n: number): number[][] {\n\n}",

    python: `def construct2DArray(original: list[int], m: int, n: int) -> list[list[int]]:
    pass`,
  },
  visibleTests: [
    { args: [[1, 2, 3, 4], 2, 2], expected: [[1, 2], [3, 4]] },
    { args: [[1, 2, 3], 1, 3], expected: [[1, 2, 3]] },
    { args: [[1, 2], 1, 1], expected: [] },
  ],
  hiddenTests: [
    { args: [[1, 2, 3, 4, 5, 6], 2, 3], expected: [[1, 2, 3], [4, 5, 6]] },
    { args: [[1, 2, 3, 4, 5, 6], 3, 2], expected: [[1, 2], [3, 4], [5, 6]] },
    { args: [[1], 1, 1], expected: [[1]] },
    { args: [[1, 2, 3, 4], 4, 1], expected: [[1], [2], [3], [4]] },
    { args: [[1, 2, 3, 4], 3, 2], expected: [] },
  ],
};
