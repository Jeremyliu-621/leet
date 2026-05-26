import type { Problem } from '../types';

export const problem: Problem = {
  id: 'grid-game',
  title: 'Grid Game',
  difficulty: 'medium',
  tags: ['arrays', 'math'],
  description: `You are given a 2D array \`grid\` of size \`2 × n\`, where \`grid[r][c]\` represents the points at position \`(r, c)\`.

Two robots start at \`(0, 0)\` and both want to reach \`(1, n-1)\`. Each robot may only move right or down.

The **first** robot goes first, collecting all points it visits (those cells become 0). Then the **second** robot collects all remaining points.

Return the **number of points collected by the second robot**, assuming both robots play optimally (second robot maximizes; first robot minimizes second robot's score).

**Example 1:**
\`\`\`
Input: grid = [[2,5,4],[1,5,1]]
Output: 4
\`\`\`

**Example 2:**
\`\`\`
Input: grid = [[3,3,1],[8,5,2]]
Output: 4
\`\`\`

**Constraints:**
- \`grid.length == 2\`
- \`1 <= n <= 5 × 10^4\`
- \`1 <= grid[i][j] <= 10^5\``,
  constraints: ['grid.length == 2', '1 <= n <= 5 * 10^4', '1 <= grid[i][j] <= 10^5'],
  examples: [
    { input: 'grid = [[2,5,4],[1,5,1]]', output: '4' },
    { input: 'grid = [[3,3,1],[8,5,2]]', output: '4' },
  ],
  hints: [
    'The first robot must descend at exactly one column k (moving from row 0 to row 1 at column k).',
    'After robot 1 descends at column k, the second robot can collect: top row to the right of k (columns k+1..n-1), OR bottom row to the left of k (columns 0..k-1).',
    'Iterate over all k. For each k, second robot collects max(topRight, bottomLeft). First robot minimizes this, so answer = min over k of max(sumTop[k+1..n-1], sumBottom[0..k-1]).',
  ],
  functionName: 'gridGame',
  params: ['grid'],
  starterCode: {
    javascript: 'function gridGame(grid) {\n  // your code here\n}\n',
    python: 'def gridGame(grid):\n    pass\n',
  },
  visibleTests: [
    { args: [[[2, 5, 4], [1, 5, 1]]], expected: 4 },
    { args: [[[3, 3, 1], [8, 5, 2]]], expected: 4 },
    { args: [[[1, 3, 1, 15], [1, 3, 3, 1]]], expected: 7 },
  ],
  hiddenTests: [
    { args: [[[1], [1]]], expected: 0 },
    { args: [[[1, 1], [1, 1]]], expected: 1 },
    { args: [[[10, 1], [1, 10]]], expected: 1 },
    { args: [[[1, 1, 1, 1], [1, 1, 1, 1]]], expected: 2 },
  ],
};
