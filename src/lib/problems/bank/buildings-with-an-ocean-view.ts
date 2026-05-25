import type { Problem } from '../types';

export const problem: Problem = {
  id: 'buildings-with-an-ocean-view',
  title: 'Buildings With an Ocean View',
  difficulty: 'medium',
  tags: ['arrays', 'stack'],
  description: `There are \`n\` buildings in a line. You are given an integer array \`heights\` of size \`n\` that represents the heights of the buildings in the line.

The ocean is to the **right** of the buildings. A building has an **ocean view** if the building can see the ocean without obstruction. Formally, a building has an ocean view if all the buildings to its **right** have a **smaller** height.

Return a list of indices **(0-indexed)** of buildings that have an ocean view, sorted in **increasing** order.`,
  constraints: [
    '1 <= heights.length <= 10^5',
    '1 <= heights[i] <= 10^9',
  ],
  examples: [
    {
      input: 'heights = [4,2,3,1]',
      output: '[0,2,3]',
      explanation:
        'Building 0 (height 4): all buildings to its right (2,3,1) are shorter. Building 2 (height 3): only building 3 (height 1) is to its right and shorter. Building 3 is the rightmost so always has ocean view. Building 1 (height 2) is blocked by building 2 (height 3).',
    },
    {
      input: 'heights = [4,3,2,1]',
      output: '[0,1,2,3]',
      explanation: 'Strictly decreasing heights, so every building has an ocean view.',
    },
    {
      input: 'heights = [1,3,2,4]',
      output: '[3]',
      explanation: 'Only the last building (height 4) has an unobstructed ocean view.',
    },
  ],
  hints: [
    'Traverse from right to left, maintaining the maximum height seen so far.',
    'A building has an ocean view if its height is strictly greater than all buildings to its right (i.e., greater than the current max).',
    'Collect indices of such buildings, then reverse the result to return them in increasing order.',
  ],
  functionName: 'findBuildings',
  params: ['heights'],
  starterCode: {
    javascript: 'function findBuildings(heights) {\n  \n}\n',
    python: 'def findBuildings(heights):\n    pass\n',
  },
  visibleTests: [
    { args: [[4, 2, 3, 1]], expected: [0, 2, 3] },
    { args: [[4, 3, 2, 1]], expected: [0, 1, 2, 3] },
    { args: [[1, 3, 2, 4]], expected: [3] },
  ],
  hiddenTests: [
    { args: [[1]], expected: [0] },
    { args: [[2, 2, 2]], expected: [2] },
    { args: [[5, 1, 4, 2, 3]], expected: [0, 2, 4] },
    { args: [[1, 2, 3, 4, 5]], expected: [4] },
  ],
};
