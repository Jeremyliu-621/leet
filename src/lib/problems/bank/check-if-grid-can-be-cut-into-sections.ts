import type { Problem } from '../types';

export const problem: Problem = {
  id: 'check-if-grid-can-be-cut-into-sections',
  title: 'Check if Grid Can Be Cut into Sections',
  difficulty: 'medium',
  tags: ['arrays', 'simulation'],
  description: `You are given an integer \`n\` representing an \`n x n\` grid, and a list of non-overlapping axis-aligned rectangles \`rectangles\` that together tile the grid completely. Each rectangle is given as \`[x1, y1, x2, y2]\` where \`(x1, y1)\` is the bottom-left corner and \`(x2, y2)\` is the top-right corner.

Return \`true\` if you can make **exactly 2 straight cuts** (each cut spanning the full width or height of the grid) such that each of the **3 resulting sections** contains **at least one complete rectangle**.

A cut is a vertical line \`x = c\` or horizontal line \`y = c\` that splits the grid. Each rectangle must lie **entirely within one section** (no cut passes through a rectangle).`,
  constraints: [
    '`3 <= n <= 10^9`',
    '`3 <= rectangles.length <= 10^5`',
    '`rectangles[i].length == 4`',
    '`0 <= x1 < x2 <= n`',
    '`0 <= y1 < y2 <= n`',
    'Rectangles tile the grid with no overlap.',
  ],
  examples: [
    {
      input: 'n = 3, rectangles = [[0,0,1,1],[0,1,1,2],[0,2,1,3]]',
      output: 'true',
      explanation: 'Horizontal cuts at y=1 and y=2 split the grid into 3 sections, each containing one rectangle.',
    },
    {
      input: 'n = 3, rectangles = [[0,0,2,2],[0,2,1,3],[1,0,3,2],[2,2,3,3]]',
      output: 'false',
      explanation: 'No pair of horizontal or vertical cuts can isolate each rectangle to its own section.',
    },
  ],
  hints: [
    'Consider the x-projections [x1, x2] and y-projections [y1, y2] of all rectangles independently.',
    'A valid pair of cuts exists along an axis if the projections along that axis can be grouped into 3 non-overlapping, non-empty intervals (i.e., there are at least 2 "gap" points where consecutive groups do not share any coordinate).',
    'Sort intervals by start coordinate and sweep: count how many groups form (a new group starts when the current interval starts at or after the running maximum end). If count ≥ 3 for either axis, return true.',
  ],
  functionName: 'checkValidCuts',
  params: ['n', 'rectangles'],
  starterCode: {
    javascript: `function checkValidCuts(n, rectangles) {

}`,
    typescript: `function checkValidCuts(n: number, rectangles: number[][]): boolean {

}`,
    python: `def checkValidCuts(n, rectangles):
    pass`,
  },
  visibleTests: [
    { args: [3, [[0, 0, 1, 1], [0, 1, 1, 2], [0, 2, 1, 3]]], expected: true },
    { args: [3, [[0, 0, 2, 2], [0, 2, 1, 3], [1, 0, 3, 2], [2, 2, 3, 3]]], expected: false },
  ],
  hiddenTests: [
    { args: [3, [[0, 0, 3, 1], [0, 1, 3, 2], [0, 2, 3, 3]]], expected: true },
    { args: [4, [[0, 0, 1, 4], [1, 0, 2, 4], [2, 0, 3, 4], [3, 0, 4, 4]]], expected: true },
    { args: [2, [[0, 0, 1, 1], [0, 1, 1, 2], [1, 0, 2, 1], [1, 1, 2, 2]]], expected: false },
    { args: [5, [[0, 0, 5, 2], [0, 2, 5, 3], [0, 3, 5, 5]]], expected: true },
    { args: [6, [[0, 0, 2, 6], [2, 0, 4, 6], [4, 0, 6, 6]]], expected: true },
  ],
};
