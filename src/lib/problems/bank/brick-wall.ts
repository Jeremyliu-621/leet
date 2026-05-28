import type { Problem } from '../types';

export const problem: Problem = {
  id: 'brick-wall',
  title: 'Brick Wall',
  difficulty: 'medium',
  tags: ['hash-map'],
  description: `There is a rectangular brick wall in front of you with \`n\` rows of bricks. The bricks have the same height but different widths. You want to draw a vertical line from the top to the bottom of the wall such that the line crosses the **fewest** bricks.

The line is not allowed to pass along one of the two vertical edges of the wall.

Given the 2D array \`wall\` where \`wall[i]\` is a list of brick widths in the i-th row from left to right, return the minimum number of crossed bricks after drawing such a vertical line.`,
  constraints: [
    'n == wall.length',
    '1 <= n <= 10^4',
    '1 <= wall[i].length <= 10^4',
    'sum(wall[i]) is the same for each row i',
    '1 <= wall[i][j] <= 2^31 - 1',
  ],
  examples: [
    {
      input: 'wall = [[1,2,2,1],[3,1,2],[1,3,2],[2,4],[3,1,2],[1,3,1,1]]',
      output: '2',
      explanation: 'A vertical line through position 4 crosses only 2 bricks.',
    },
    {
      input: 'wall = [[1],[1],[1]]',
      output: '3',
      explanation: 'Any vertical line must cross all 3 bricks.',
    },
  ],
  hints: [
    'The best line passes through as many edges (gaps between bricks) as possible.',
    'Count edge positions using a hash map: for each row, accumulate widths and record each intermediate sum (excluding the last).',
    'Answer = total rows − max edge count.',
  ],
  functionName: 'leastBricks',
  params: ['wall'],
  starterCode: {
    javascript: `function leastBricks(wall) {

}`,
    typescript: "function leastBricks(wall: number[][]): number {\n\n}",

    python: `def leastBricks(wall):
    pass`,
  },
  visibleTests: [
    {
      args: [[[1, 2, 2, 1], [3, 1, 2], [1, 3, 2], [2, 4], [3, 1, 2], [1, 3, 1, 1]]],
      expected: 2,
    },
    { args: [[[1], [1], [1]]], expected: 3 },
  ],
  hiddenTests: [
    { args: [[[1, 2], [1, 2]]], expected: 0 },
    { args: [[[2], [2], [2]]], expected: 3 },
    { args: [[[1, 1], [1, 1]]], expected: 0 },
    { args: [[[3, 1], [2, 2]]], expected: 1 },
  ],
};
