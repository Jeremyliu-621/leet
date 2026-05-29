import type { Problem } from '../types';

export const problem: Problem = {
  id: 'check-if-the-grid-can-be-cut-into-sections',
  title: 'Check if the Grid can be Cut into Sections',
  difficulty: 'medium',
  tags: ['arrays'],
  description: `You are given an integer \`n\` representing the dimensions of an \`n × n\` grid. You are also given a 2D array \`rectangles\` where \`rectangles[i] = [startx, starty, endx, endy]\` represents a rectangle occupying the area from \`(startx, starty)\` to \`(endx, endy)\` in the grid. Each rectangle's x-coordinates are in \`[0, n]\` and y-coordinates are in \`[0, n]\`. No two rectangles overlap.

You need to check if it is possible to make **exactly two horizontal cuts** or **exactly two vertical cuts** on the n × n grid such that:

- Each of the three resulting sections formed by the cuts contains **at least one** rectangle.
- Every rectangle belongs to **exactly one** section.

Return \`true\` if such cuts exist, \`false\` otherwise.`,
  constraints: [
    '3 <= n <= 10^9',
    '3 <= rectangles.length <= 10^5',
    '0 <= startx < endx <= n',
    '0 <= starty < endy <= n',
    'No two rectangles overlap.',
  ],
  examples: [
    {
      input: 'n = 5, rectangles = [[1,0,5,2],[0,2,2,4],[3,2,5,3],[0,4,4,5]]',
      output: 'true',
      explanation:
        'Two horizontal cuts at y=2 and y=4 divide the grid into three sections, each containing at least one rectangle.',
    },
    {
      input: 'n = 4, rectangles = [[0,2,2,4],[1,0,3,2],[2,2,3,4],[3,0,4,2],[3,2,4,4]]',
      output: 'false',
      explanation:
        'No two horizontal or vertical cuts can divide all rectangles into three non-empty sections.',
    },
  ],
  hints: [
    'Project rectangles onto the x-axis and y-axis independently as intervals.',
    'For each axis, sort intervals by start and count how many non-overlapping groups exist by merging them greedily.',
    'If either axis produces 3 or more distinct groups, return true.',
  ],
  functionName: 'checkValidCuts',
  params: ['n', 'rectangles'],
  starterCode: {
    javascript: `function checkValidCuts(n, rectangles) {\n\n}`,
    python: `def checkValidCuts(n: int, rectangles: list[list[int]]) -> bool:\n    pass`,
  },
  visibleTests: [
    {
      args: [5, [[1, 0, 5, 2], [0, 2, 2, 4], [3, 2, 5, 3], [0, 4, 4, 5]]],
      expected: true,
    },
    {
      args: [
        4,
        [
          [0, 2, 2, 4],
          [1, 0, 3, 2],
          [2, 2, 3, 4],
          [3, 0, 4, 2],
          [3, 2, 4, 4],
        ],
      ],
      expected: false,
    },
  ],
  hiddenTests: [
    {
      args: [4, [[0, 0, 1, 1], [2, 0, 3, 4], [0, 2, 2, 3], [3, 0, 4, 3]]],
      expected: true,
    },
    { args: [1, [[0, 0, 1, 1]]], expected: false },
    {
      args: [
        3,
        [
          [0, 0, 1, 1],
          [1, 0, 2, 1],
          [2, 0, 3, 1],
        ],
      ],
      expected: true,
    },
    {
      args: [
        3,
        [
          [0, 0, 3, 1],
          [0, 1, 3, 2],
          [0, 2, 3, 3],
        ],
      ],
      expected: true,
    },
  ],
};
