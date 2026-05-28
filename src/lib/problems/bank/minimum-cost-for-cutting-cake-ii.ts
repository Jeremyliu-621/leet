import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-cost-for-cutting-cake-ii',
  title: 'Minimum Cost for Cutting Cake II',
  difficulty: 'hard',
  tags: ['arrays', 'simulation'],
  description: `You have an \`m × n\` cake that you need to cut into \`1 × 1\` pieces.

- \`horizontalCut[i]\` is the cost to make a horizontal cut **after row \`i\`** (0-indexed, so cuts available at rows 0 through \`m-2\`).
- \`verticalCut[j]\` is the cost to make a vertical cut **after column \`j\`** (0-indexed, so cuts available at columns 0 through \`n-2\`).

When you cut a piece, the cost is charged **per piece** it passes through at that moment (if a piece has already been split, you must cut each sub-piece separately at full cost each time).

Return the **minimum total cost** to cut the cake into \`1 × 1\` pieces.`,
  constraints: [
    '1 <= m, n <= 10^5',
    'horizontalCut.length == m - 1',
    'verticalCut.length == n - 1',
    '1 <= horizontalCut[i], verticalCut[j] <= 10^3',
  ],
  examples: [
    {
      input: 'm = 3, n = 2, horizontalCut = [1,3], verticalCut = [5]',
      output: '13',
      explanation: 'Greedy: always make the most expensive cut first. Cut vertical at cost 5 (×1 horizontal piece = 5). Cut horizontal at cost 3 (×2 vertical pieces = 6). Cut horizontal at cost 1 (×2 vertical pieces = 2). Total = 5 + 6 + 2 = 13.',
    },
    {
      input: 'm = 2, n = 2, horizontalCut = [7], verticalCut = [4]',
      output: '15',
      explanation: 'Cut horizontal at cost 7 (×1 vertical piece = 7). Cut vertical at cost 4 (×2 horizontal pieces = 8). Total = 7 + 8 = 15.',
    },
  ],
  hints: [
    'Sort both cut arrays in descending order. Use a greedy approach: always perform the most expensive remaining cut next.',
    'When you make a horizontal cut of cost c after already having made v vertical cuts, it now passes through v + 1 vertical columns, so the cost is c × (vPieces). Similarly for vertical cuts.',
    'Use two pointers into the sorted arrays. At each step, compare the top of each array and take the larger. Track hPieces and vPieces (both start at 1, each increases by 1 after each cut in that direction).',
  ],
  functionName: 'minimumCost',
  params: ['m', 'n', 'horizontalCut', 'verticalCut'],
  starterCode: {
    javascript: `function minimumCost(m, n, horizontalCut, verticalCut) {
  // Sort both arrays descending.
  // Greedy: always take the larger cut, multiplied by existing pieces in the other direction.
}`,
    typescript: "function minimumCost(m: number, n: number, horizontalCut: number[], verticalCut: number[]): number {\n  // Sort both arrays descending.\n  // Greedy: always take the larger cut, multiplied by existing pieces in the other direction.\n}",

    python: `def minimumCost(m, n, horizontalCut, verticalCut):
    # Sort both arrays descending.
    # Greedy: always take the larger cut, multiplied by existing pieces in the other direction.
    pass`,
  },
  visibleTests: [
    { args: [3, 2, [1, 3], [5]], expected: 13 },
    { args: [2, 2, [7], [4]], expected: 15 },
  ],
  hiddenTests: [
    { args: [1, 2, [], [3]], expected: 3 },
    { args: [2, 1, [5], []], expected: 5 },
    { args: [3, 3, [2, 4], [3, 1]], expected: 17 },
    { args: [4, 2, [1, 2, 3], [5]], expected: 17 },
    { args: [2, 3, [10], [2, 4]], expected: 22 },
  ],
};
