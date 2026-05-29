import type { Problem } from '../types';

export const problem: Problem = {
  id: 'maximum-area-of-longest-diagonal-rectangle',
  title: 'Maximum Area of Longest Diagonal Rectangle',
  difficulty: 'easy',
  tags: ['arrays', 'math'],
  description: `You are given a 2D **0-indexed** integer array \`dimensions\`.

For all indices \`i\`, \`dimensions[i][0]\` represents the length and \`dimensions[i][1]\` represents the width of the rectangle \`i\`.

Return the **area** of the rectangle having the **longest** diagonal. If there are multiple rectangles with the longest diagonal, return the area of the rectangle having the **maximum** area.`,
  constraints: [
    '1 <= dimensions.length <= 100',
    'dimensions[i].length == 2',
    '1 <= dimensions[i][0], dimensions[i][1] <= 100',
  ],
  examples: [
    {
      input: 'dimensions = [[9,3],[8,6]]',
      output: '48',
      explanation: 'Diagonal² of [9,3] = 90, [8,6] = 100. Rectangle [8,6] has the longer diagonal, area = 48.',
    },
    {
      input: 'dimensions = [[3,4],[4,3]]',
      output: '12',
      explanation: 'Both rectangles have the same diagonal (5). Both have the same area (12). Return 12.',
    },
  ],
  hints: [
    'Compare diagonal lengths using squared values to avoid floating point: diag² = l² + w².',
    'Track the best (maxDiag², maxArea). On each rectangle, compute its diag² and area.',
    'Update the best if the new diag² is strictly larger, or if it ties and the area is larger.',
  ],
  functionName: 'areaOfMaxDiagonal',
  params: ['dimensions'],
  starterCode: {
    javascript: `function areaOfMaxDiagonal(dimensions) {

}`,
    typescript: `function areaOfMaxDiagonal(dimensions: number[][]): number {

}`,
    python: `def areaOfMaxDiagonal(dimensions: list[list[int]]) -> int:
    pass`,
  },
  visibleTests: [
    { args: [[[9, 3], [8, 6]]], expected: 48 },
    { args: [[[3, 4], [4, 3]]], expected: 12 },
    { args: [[[5, 12], [13, 1]]], expected: 13 },
  ],
  hiddenTests: [
    { args: [[[1, 1]]], expected: 1 },
    { args: [[[1, 2], [2, 1]]], expected: 2 },
    { args: [[[3, 4], [5, 12]]], expected: 60 },
    { args: [[[1, 3], [2, 2]]], expected: 3 },
    { args: [[[10, 8], [9, 10]]], expected: 90 },
    { args: [[[4, 5], [4, 5]]], expected: 20 },
    { args: [[[3, 4], [4, 4]]], expected: 16 },
    { args: [[[1, 10], [5, 5]]], expected: 10 },
  ],
};
