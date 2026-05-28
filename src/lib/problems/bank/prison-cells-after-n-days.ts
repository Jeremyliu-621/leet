import type { Problem } from '../types';

export const problem: Problem = {
  id: 'prison-cells-after-n-days',
  title: 'Prison Cells After N Days',
  difficulty: 'medium',
  tags: ['arrays', 'simulation', 'hash-map'],
  description: `There are \`8\` prison cells in a row and each cell is either occupied or vacant.

Each day, whether the cell is occupied or vacant changes according to the following rules:
- If a cell has **two adjacent** neighbors that are both occupied or both vacant, then the cell becomes **occupied**.
- Otherwise, it becomes **vacant**.

Note that because the prison is a row, the first and the last cells in the row can't have two adjacent neighbors.

You are given an integer array \`cells\` where \`cells[i] == 1\` if the \`i\`th cell is occupied and \`cells[i] == 0\` if the \`i\`th cell is vacant, and you are given an integer \`n\`.

Return the state of the prison after \`n\` days (i.e., \`n\` such changes described above).`,
  constraints: [
    'cells.length == 8',
    'cells[i] is either 0 or 1.',
    '1 <= n <= 10^9',
  ],
  examples: [
    {
      input: 'cells = [0,1,0,1,1,0,0,1], n = 7',
      output: '[0,0,1,1,0,0,0,0]',
    },
    {
      input: 'cells = [1,0,0,1,0,0,1,0], n = 1000000000',
      output: '[0,0,1,1,1,1,1,0]',
    },
  ],
  hints: [
    'Simulate day by day: cell[i] = 1 if cell[i-1] == cell[i+1], else 0. First and last cells always become 0.',
    'With only 8 bits (256 possible states), the sequence must cycle within at most 256 days.',
    'Find the cycle length, then reduce n modulo the cycle length to find the final state efficiently.',
  ],
  functionName: 'prisonAfterNDays',
  params: ['cells', 'n'],
  starterCode: {
    javascript: 'function prisonAfterNDays(cells, n) {\n  \n}\n',
    typescript: "function prisonAfterNDays(cells: number[], n: number): number[] {\n  \n}",

    python: 'def prisonAfterNDays(cells, n):\n    pass\n',
  },
  visibleTests: [
    { args: [[0, 1, 0, 1, 1, 0, 0, 1], 7], expected: [0, 0, 1, 1, 0, 0, 0, 0] },
    { args: [[1, 0, 0, 1, 0, 0, 1, 0], 1000000000], expected: [0, 0, 1, 1, 1, 1, 1, 0] },
  ],
  hiddenTests: [
    { args: [[1, 0, 0, 1, 0, 0, 1, 0], 1], expected: [0, 0, 0, 1, 0, 0, 1, 0] },
    { args: [[0, 0, 0, 0, 0, 0, 0, 0], 5], expected: [0, 1, 0, 1, 1, 0, 1, 0] },
    { args: [[1, 1, 0, 1, 1, 0, 1, 1], 2], expected: [0, 0, 1, 0, 0, 1, 0, 0] },
  ],
};
