import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-total-number-of-colored-cells',
  title: 'Count Total Number of Colored Cells',
  difficulty: 'medium',
  tags: ['math'],
  description: `There exists an infinitely large two-dimensional grid of uncolored unit cells. You are given a positive integer \`n\`, indicating that you must do the following routine for \`n\` minutes:

- At the first minute, color **any** arbitrary unit cell blue.
- Every minute thereafter, color blue every uncolored cell that **touches** a blue cell.

Below is a description of the grid after each minute:

- After minute 1: 1 blue cell.
- After minute 2: 5 blue cells (the original plus 4 neighbors).
- After minute 3: 13 blue cells.

Return the number of **colored cells** at the end of \`n\` minutes.`,
  constraints: [
    '1 <= n <= 10^5',
  ],
  examples: [
    {
      input: 'n = 1',
      output: '1',
      explanation: 'After 1 minute, only the initial cell is colored.',
    },
    {
      input: 'n = 2',
      output: '5',
      explanation: 'After 2 minutes, the initial cell plus its 4 neighbors are colored.',
    },
  ],
  hints: [
    'The pattern follows the formula 2n² - 2n + 1 (for n ≥ 1). Notice that each step adds 4*(step-1) new cells.',
  ],
  functionName: 'coloredCells',
  params: ['n'],
  starterCode: {
    javascript: `function coloredCells(n) {

}`,
    python: `def coloredCells(n):
    pass`,
  },
  visibleTests: [
    { args: [1], expected: 1 },
    { args: [2], expected: 5 },
  ],
  hiddenTests: [
    { args: [3], expected: 13 },
    { args: [4], expected: 25 },
    { args: [5], expected: 41 },
    { args: [10], expected: 181 },
  ],
};
