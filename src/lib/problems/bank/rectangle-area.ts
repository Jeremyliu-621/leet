import type { Problem } from '../types';

export const problem: Problem = {
  id: 'rectangle-area',
  title: 'Rectangle Area',
  difficulty: 'medium',
  tags: ['math'],
  description: `Given the coordinates of two **axis-aligned** rectangles, return the **total area covered** by the two rectangles.

The first rectangle is defined by its bottom-left corner \`(ax1, ay1)\` and its top-right corner \`(ax2, ay2)\`.
The second rectangle is defined by its bottom-left corner \`(bx1, by1)\` and its top-right corner \`(bx2, by2)\`.

The total area equals the sum of the two individual areas **minus the overlap** (to avoid double-counting).`,
  constraints: [
    '-10^4 <= ax1 <= ax2 <= 10^4',
    '-10^4 <= ay1 <= ay2 <= 10^4',
    '-10^4 <= bx1 <= bx2 <= 10^4',
    '-10^4 <= by1 <= by2 <= 10^4',
  ],
  examples: [
    {
      input: 'ax1 = -3, ay1 = 0, ax2 = 3, ay2 = 4, bx1 = 0, by1 = -1, bx2 = 9, by2 = 2',
      output: '45',
      explanation:
        'First rectangle area = 6 × 4 = 24. Second rectangle area = 9 × 3 = 27. Overlap: x from [0,3] (width 3), y from [0,2] (height 2) = 6. Total = 24 + 27 − 6 = 45.',
    },
    {
      input: 'ax1 = -2, ay1 = -2, ax2 = 2, ay2 = 2, bx1 = -2, by1 = -2, bx2 = 2, by2 = 2',
      output: '16',
      explanation: 'Both rectangles are identical; no double-counting, area = 4 × 4 = 16.',
    },
  ],
  hints: [
    'Area of a rectangle = (x2 - x1) × (y2 - y1). Compute both areas and sum them.',
    'The overlap rectangle (if any) has x range [max(ax1,bx1), min(ax2,bx2)] and y range [max(ay1,by1), min(ay2,by2)]. If either dimension is ≤ 0, there is no overlap.',
    'Subtract the overlap area from the sum to get the total covered area.',
  ],
  functionName: 'computeArea',
  params: ['ax1', 'ay1', 'ax2', 'ay2', 'bx1', 'by1', 'bx2', 'by2'],
  starterCode: {
    javascript:
      'function computeArea(ax1, ay1, ax2, ay2, bx1, by1, bx2, by2) {\n  const areaA = (ax2 - ax1) * (ay2 - ay1);\n  const areaB = (bx2 - bx1) * (by2 - by1);\n  const overlapW = Math.max(0, Math.min(ax2, bx2) - Math.max(ax1, bx1));\n  const overlapH = Math.max(0, Math.min(ay2, by2) - Math.max(ay1, by1));\n  return areaA + areaB - overlapW * overlapH;\n}\n',
    typescript: "function computeArea(ax1: number, ay1: number, ax2: number, ay2: number, bx1: number, by1: number, bx2: number, by2: number): number {\n  const areaA = (ax2 - ax1) * (ay2 - ay1);\n  const areaB = (bx2 - bx1) * (by2 - by1);\n  const overlapW = Math.max(0, Math.min(ax2, bx2) - Math.max(ax1, bx1));\n  const overlapH = Math.max(0, Math.min(ay2, by2) - Math.max(ay1, by1));\n  return areaA + areaB - overlapW * overlapH;\n}",

    python:
      'def computeArea(ax1, ay1, ax2, ay2, bx1, by1, bx2, by2):\n    area_a = (ax2 - ax1) * (ay2 - ay1)\n    area_b = (bx2 - bx1) * (by2 - by1)\n    overlap_w = max(0, min(ax2, bx2) - max(ax1, bx1))\n    overlap_h = max(0, min(ay2, by2) - max(ay1, by1))\n    return area_a + area_b - overlap_w * overlap_h\n',
  },
  visibleTests: [
    { args: [-3, 0, 3, 4, 0, -1, 9, 2], expected: 45 },
    { args: [-2, -2, 2, 2, -2, -2, 2, 2], expected: 16 },
  ],
  hiddenTests: [
    { args: [0, 0, 1, 1, 1, 1, 2, 2], expected: 2 },
    { args: [0, 0, 2, 2, 1, 1, 3, 3], expected: 7 },
    { args: [0, 0, 3, 3, 1, 1, 2, 2], expected: 9 },
    { args: [0, 0, 0, 0, -1, -1, 1, 1], expected: 4 },
    { args: [-10000, -10000, 10000, 10000, -1, -1, 1, 1], expected: 400000000 },
    { args: [0, 0, 5, 5, 6, 0, 10, 5], expected: 45 },
  ],
};
