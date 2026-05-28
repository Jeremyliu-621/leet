import type { Problem } from '../types';

export const problem: Problem = {
  id: 'make-a-square-with-the-same-color',
  title: 'Make a Square with the Same Color',
  difficulty: 'easy',
  tags: ['arrays', 'simulation'],
  description: `You are given a **3 x 3** matrix \`grid\` consisting of characters \`'B'\` and \`'W'\`.

You can change **at most one** cell's color. Return \`true\` if it is possible to create a **2 x 2** square of the same color, and return \`false\` otherwise.`,
  constraints: [
    '`grid.length == grid[i].length == 3`',
    '`grid[i][j]` is either `\'B\'` or `\'W\'`.',
  ],
  examples: [
    {
      input: 'grid = [["B","W","B"],["B","W","B"],["B","W","B"]]',
      output: 'false',
      explanation: 'Every 2×2 square has 2 B and 2 W cells, so no single change can unify any square.',
    },
    {
      input: 'grid = [["B","W","B"],["W","B","W"],["B","W","B"]]',
      output: 'false',
      explanation: 'Each 2×2 sub-square alternates colors — no single cell change suffices.',
    },
    {
      input: 'grid = [["B","W","W"],["W","B","W"],["W","W","B"]]',
      output: 'true',
      explanation: 'The top-left 2×2 has 3 W and 1 B — change that B to W for an all-W square.',
    },
  ],
  hints: [
    'Check all four possible 2×2 squares (top-left corners at (0,0), (0,1), (1,0), (1,1)).',
    'A 2×2 square can be made uniform with ≤1 change iff it already has ≥3 cells of the same color.',
    `\`\`\`js
function canMakeSquare(grid) {
  for (let r = 0; r < 2; r++) {
    for (let c = 0; c < 2; c++) {
      const cells = [grid[r][c], grid[r][c+1], grid[r+1][c], grid[r+1][c+1]];
      const whites = cells.filter(x => x === 'W').length;
      if (whites >= 3 || whites <= 1) return true;
    }
  }
  return false;
}\`\`\``,
  ],
  functionName: 'canMakeSquare',
  params: ['grid'],
  starterCode: {
    javascript: `function canMakeSquare(grid) {

}`,
    typescript: 'function canMakeSquare(grid: string[][]): boolean {\n\n}',
    python: `def canMakeSquare(grid):
    pass`,
  },
  visibleTests: [
    { args: [[['B', 'W', 'B'], ['B', 'W', 'B'], ['B', 'W', 'B']]], expected: false },
    { args: [[['B', 'W', 'B'], ['W', 'B', 'W'], ['B', 'W', 'B']]], expected: false },
    { args: [[['B', 'W', 'W'], ['W', 'B', 'W'], ['W', 'W', 'B']]], expected: true },
  ],
  hiddenTests: [
    { args: [[['W', 'W', 'W'], ['W', 'W', 'W'], ['W', 'W', 'W']]], expected: true },
    { args: [[['B', 'B', 'B'], ['B', 'W', 'B'], ['B', 'B', 'B']]], expected: true },
    { args: [[['W', 'B', 'W'], ['B', 'W', 'B'], ['W', 'B', 'W']]], expected: false },
    { args: [[['B', 'B', 'W'], ['B', 'W', 'W'], ['W', 'W', 'W']]], expected: true },
    { args: [[['W', 'B', 'B'], ['W', 'B', 'B'], ['W', 'W', 'W']]], expected: true },
  ],
};
