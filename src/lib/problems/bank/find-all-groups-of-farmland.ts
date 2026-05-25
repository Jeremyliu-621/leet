import type { Problem } from '../types';

export const problem: Problem = {
  id: 'find-all-groups-of-farmland',
  title: 'Find All Groups of Farmland',
  difficulty: 'medium',
  tags: ['arrays'],
  description: `You are given a **0-indexed** \`m x n\` binary matrix \`land\` where a \`0\` represents a hectare of forested land and a \`1\` represents a hectare of farmland.

To keep the land organized, each rectangular group of farmland is completely surrounded by forested land. It is **guaranteed** that no two rectangular groups of farmland are adjacent (i.e., do not share any direct left, right, top, or bottom edge).

Return a 2D array containing the 4-length arrays \`[r1, c1, r2, c2]\` describing the groups of farmland — \`(r1, c1)\` is the **top-left** corner and \`(r2, c2)\` is the **bottom-right** corner.`,
  constraints: [
    'm == land.length',
    'n == land[i].length',
    '1 <= m, n <= 300',
    'land[i][j] is either 0 or 1.',
    'Groups of farmland are rectangular and non-adjacent.',
  ],
  examples: [
    {
      input: 'land = [[1,0,0],[0,1,1],[0,1,1]]',
      output: '[[0,0,0,0],[1,1,2,2]]',
      explanation: 'Two groups: single cell at (0,0), and 2x2 block at rows 1–2, cols 1–2.',
    },
    {
      input: 'land = [[1,1],[1,1]]',
      output: '[[0,0,1,1]]',
      explanation: 'One 2x2 group covering the entire grid.',
    },
    {
      input: 'land = [[0]]',
      output: '[]',
      explanation: 'No farmland.',
    },
  ],
  hints: [
    'Iterate the grid. When you find a 1, it is a top-left corner (rectangles are guaranteed non-adjacent).',
    'From the top-left, expand right and down to find the bottom-right corner.',
    'Mark the found group as 0 to avoid revisiting.',
  ],
  functionName: 'findFarmland',
  params: ['land'],
  starterCode: {
    javascript: `function findFarmland(land) {

}`,
    python: `def findFarmland(land):
    pass`,
  },
  visibleTests: [
    { args: [[[1, 0, 0], [0, 1, 1], [0, 1, 1]]], expected: [[0, 0, 0, 0], [1, 1, 2, 2]] },
    { args: [[[1, 1], [1, 1]]], expected: [[0, 0, 1, 1]] },
    { args: [[[0]]], expected: [] },
  ],
  hiddenTests: [
    { args: [[[1]]], expected: [[0, 0, 0, 0]] },
    { args: [[[1, 0], [0, 1]]], expected: [[0, 0, 0, 0], [1, 1, 1, 1]] },
    { args: [[[1, 1, 0, 1, 1]]], expected: [[0, 0, 0, 1], [0, 3, 0, 4]] },
  ],
};
