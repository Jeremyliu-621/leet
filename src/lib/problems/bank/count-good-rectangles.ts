import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-good-rectangles',
  title: 'Count Good Rectangles',
  difficulty: 'easy',
  tags: ['arrays'],
  description: `You are given a 2D integer array \`rectangles\` where \`rectangles[i] = [li, wi]\` represents the \`i\`th rectangle of length \`li\` and width \`wi\`.

You can cut the \`i\`th rectangle to form a square with a side length of at most \`min(li, wi)\`.

Return the number of rectangles that can form a square with the **maximum** side length.`,
  constraints: [
    '1 <= rectangles.length <= 1000',
    'rectangles[i].length == 2',
    '1 <= li, wi <= 10^9',
    'All the (li, wi) pairs are unique.',
  ],
  examples: [
    {
      input: 'rectangles = [[5,8],[3,9],[5,12],[16,5]]',
      output: '3',
      explanation: 'Side lengths: min(5,8)=5, min(3,9)=3, min(5,12)=5, min(16,5)=5. Max=5, count=3.',
    },
    {
      input: 'rectangles = [[2,3],[3,7],[4,3],[3,7]]',
      output: '3',
    },
  ],
  hints: [
    'Level 1: For each rectangle, compute min(l, w).',
    'Level 2: Find the maximum side length, then count rectangles with that side length.',
    'Level 3: const sides=rectangles.map(([l,w])=>Math.min(l,w));const mx=Math.max(...sides);return sides.filter(s=>s===mx).length;',
  ],
  functionName: 'countGoodRectangles',
  params: ['rectangles'],
  starterCode: {
    javascript: `function countGoodRectangles(rectangles) {
  const sides = rectangles.map(([l, w]) => Math.min(l, w));
  const mx = Math.max(...sides);
  return sides.filter(s => s === mx).length;
}`,
    typescript: `function countGoodRectangles(rectangles: number[][]): number {
  const sides = rectangles.map(r => Math.min(r[0]!, r[1]!));
  const mx = Math.max(...sides);
  return sides.filter(s => s === mx).length;
}`,
    python: `def countGoodRectangles(rectangles):
    rectangles = list(rectangles.to_py()) if hasattr(rectangles, 'to_py') else list(rectangles)
    sides = [min(list(r.to_py() if hasattr(r, 'to_py') else r)) for r in rectangles]
    mx = max(sides)
    return sum(1 for s in sides if s == mx)`,
  },
  visibleTests: [
    { args: [[[5, 8], [3, 9], [5, 12], [16, 5]]], expected: 3 },
    { args: [[[2, 3], [3, 7], [4, 3], [3, 7]]], expected: 3 },
  ],
  hiddenTests: [
    { args: [[[1, 1]]], expected: 1 },
    { args: [[[1, 1], [1, 1], [1, 1]]], expected: 3 },
    { args: [[[1, 2], [3, 4]]], expected: 1 },
    { args: [[[5, 5], [3, 3], [5, 5]]], expected: 2 },
  ],
};
