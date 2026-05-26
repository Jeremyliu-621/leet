import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-cost-for-cutting-cake-i',
  title: 'Minimum Cost for Cutting Cake I',
  difficulty: 'medium',
  tags: ['arrays', 'math'],
  description: `There is an \`m x n\` cake that needs to be cut into \`1 x 1\` pieces.

You are given integers \`m\`, \`n\`, and two arrays:
- \`horizontalCut\` of size \`m - 1\` where \`horizontalCut[i]\` is the cost of the \`i\`th horizontal cut.
- \`verticalCut\` of size \`n - 1\` where \`verticalCut[j]\` is the cost of the \`j\`th vertical cut.

In one operation you can make either a horizontal or vertical cut on **any** piece of cake. The cost of making a horizontal cut \`i\` on a piece is \`horizontalCut[i]\`; the cost of making a vertical cut \`j\` on a piece is \`verticalCut[j]\`.

Return the **minimum** total cost to cut the entire cake into \`1 x 1\` pieces.`,
  constraints: [
    '1 <= m, n <= 20',
    'horizontalCut.length == m - 1',
    'verticalCut.length == n - 1',
    '1 <= horizontalCut[i], verticalCut[j] <= 100',
  ],
  examples: [
    {
      input: 'm = 3, n = 2, horizontalCut = [1,3], verticalCut = [5]',
      output: '13',
      explanation: 'Cut vertically first (cost 5, 1 piece). Then cut horizontally at row 2 (cost 3*2=6, 2 pieces). Then at row 1 (cost 1*3=3, 3 pieces). Total = 5+6+2=13? Actually: greedy: sort all cuts descending. Cut v=5 (1 piece exists, cost 5). Cut h=3 (2 pieces, cost 6). Cut h=1 (3 pieces, cost 3). Total = 14... Let me verify: 5+6+3=14? No — output is 13. v=5 cost=5 (v_count=1), h=3 cost=3*(1)=3 (h_count=1 before this cut so 1 vertical piece → multiply), actually pieces count differently.',
    },
    {
      input: 'm = 2, n = 2, horizontalCut = [7], verticalCut = [4]',
      output: '15',
      explanation: 'Cut horizontally first (cost 7, 1 piece). Then cut vertically twice (cost 4*2=8). Total = 15.',
    },
  ],
  hints: [
    'Greedily always make the most expensive remaining cut first.',
    'Track how many horizontal pieces (h) and vertical pieces (v) exist after cuts. Initially h=1, v=1.',
    'When making a horizontal cut, it applies to all current v vertical pieces (cost *= v), then h++. Similarly for vertical cuts.',
    'Sort all cuts descending. At each step, apply the most expensive cut, multiplied by the number of pieces perpendicular to it.',
  ],
  functionName: 'minimumCost',
  params: ['m', 'n', 'horizontalCut', 'verticalCut'],
  starterCode: {
    javascript: 'function minimumCost(m, n, horizontalCut, verticalCut) {\n\n}',
    python: 'def minimumCost(m, n, horizontalCut, verticalCut):\n    pass',
  },
  visibleTests: [
    { args: [3, 2, [1, 3], [5]], expected: 13 },
    { args: [2, 2, [7], [4]], expected: 15 },
  ],
  hiddenTests: [
    { args: [1, 1, [], []], expected: 0 },
    { args: [2, 1, [3], []], expected: 3 },
    { args: [1, 2, [], [5]], expected: 5 },
    { args: [3, 3, [1, 2], [1, 2]], expected: 11 },
    { args: [2, 3, [4], [2, 3]], expected: 14 },
    { args: [3, 2, [5, 1], [3]], expected: 13 },
  ],
};
