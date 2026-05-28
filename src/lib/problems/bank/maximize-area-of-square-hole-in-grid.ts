import type { Problem } from '../types';

export const problem: Problem = {
  id: 'maximize-area-of-square-hole-in-grid',
  title: 'Maximize Area of Square Hole in Grid',
  difficulty: 'medium',
  tags: ['arrays'],
  description: `There is a grid with \`n + 2\` horizontal bars and \`m + 2\` vertical bars, and hence an \`(n + 1) x (m + 1)\` grid of cells. You are given the integers \`n\` and \`m\`.

Each cell is a unit square. You can remove some horizontal bars in \`hBars\` and some vertical bars in \`vBars\`. A **hole** is formed by the removed bars and consists of connected adjacent cells.

Return the **maximum** area of a square hole that can be formed by removing some bars from \`hBars\` and \`vBars\`.`,
  constraints: [
    '`1 <= n <= 30`',
    '`1 <= m <= 30`',
    '`1 <= hBars.length <= n`',
    '`2 <= hBars[i] <= n + 1`',
    '`1 <= vBars.length <= m`',
    '`2 <= vBars[i] <= m + 1`',
    'All values in `hBars` are distinct and sorted in increasing order.',
    'All values in `vBars` are distinct and sorted in increasing order.',
  ],
  examples: [
    {
      input: 'n = 2, m = 1, hBars = [2,3], vBars = [2]',
      output: '4',
      explanation: 'Removing hBars=[2,3] creates a height-3 hole; removing vBars=[2] creates width-2. Square side = min(3,2) = 2, area = 4.',
    },
    {
      input: 'n = 1, m = 1, hBars = [2], vBars = [2]',
      output: '4',
      explanation: 'Removing the single horizontal and vertical bar creates a 2×2 hole. Area = 4.',
    },
    {
      input: 'n = 2, m = 2, hBars = [2,3], vBars = [2,3]',
      output: '9',
      explanation: 'Removing all available bars creates a 3×3 hole. Area = 9.',
    },
  ],
  hints: [
    'For each array (hBars and vBars), find the maximum run of consecutive values. A run of length r creates a hole of size r+1 in that dimension.',
    'The maximum square side is the minimum of the maximum hole heights and widths.',
    '```js\nfunction maximizeSquareHoleArea(n, m, hBars, vBars) {\n  function maxGap(bars) {\n    let max = 1, run = 1;\n    for (let i = 1; i < bars.length; i++) {\n      run = bars[i] === bars[i-1]+1 ? run+1 : 1;\n      max = Math.max(max, run);\n    }\n    return max + 1;\n  }\n  const side = Math.min(maxGap(hBars), maxGap(vBars));\n  return side * side;\n}\n```',
  ],
  functionName: 'maximizeSquareHoleArea',
  params: ['n', 'm', 'hBars', 'vBars'],
  starterCode: {
    javascript: `function maximizeSquareHoleArea(n, m, hBars, vBars) {

}`,
    typescript: `function maximizeSquareHoleArea(n: number, m: number, hBars: number[], vBars: number[]): number {

}`,
    python: `def maximizeSquareHoleArea(n, m, hBars, vBars):
    pass`,
  },
  visibleTests: [
    { args: [2, 1, [2, 3], [2]], expected: 4 },
    { args: [1, 1, [2], [2]], expected: 4 },
    { args: [2, 2, [2, 3], [2, 3]], expected: 9 },
  ],
  hiddenTests: [
    { args: [3, 3, [2, 3, 4], [2, 3, 4]], expected: 16 },
    { args: [4, 4, [2, 3, 4, 5], [2, 4, 5]], expected: 9 },
    { args: [5, 5, [2, 4, 5], [3, 4, 5]], expected: 9 },
    { args: [4, 3, [2, 3, 4, 5], [2, 3, 4]], expected: 16 },
    { args: [1, 5, [2], [2, 3, 4, 5, 6]], expected: 4 },
  ],
};
