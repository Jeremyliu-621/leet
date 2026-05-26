import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-lines-to-represent-a-line-chart',
  title: 'Minimum Lines to Represent a Line Chart',
  difficulty: 'medium',
  tags: ['arrays', 'math'],
  description: `You are given a 2D integer array \`stockPrices\` where \`stockPrices[i] = [day_i, price_i]\` indicates the price of the stock on day \`day_i\` is \`price_i\`. A **line chart** is created by plotting the points on an XY plane with the X-axis representing the day and the Y-axis representing the price, then connecting **adjacent** points.

Return the **minimum number of lines** needed to represent the line chart.`,
  constraints: [
    '1 <= stockPrices.length <= 10^5',
    'stockPrices[i].length == 2',
    '1 <= day_i, price_i <= 10^9',
    'All day_i are distinct.',
  ],
  examples: [
    {
      input: 'stockPrices = [[1,7],[2,6],[3,5],[4,4],[5,4],[6,3],[7,2],[8,2],[9,1]]',
      output: '5',
      explanation: 'Slope changes at [4,4]→[5,4] (0), [5,4]→[6,3] (-1 but new line), [7,2]→[8,2] (0), [8,2]→[9,1] (-1 again but new line). Starting from 1 segment: 1 + 4 changes = 5.',
    },
    {
      input: 'stockPrices = [[3,4],[1,2],[7,8],[2,3]]',
      output: '1',
      explanation: 'Sorted by day: [1,2],[2,3],[3,4],[7,8]. All collinear with slope 1, so 1 line suffices.',
    },
  ],
  hints: [
    'Sort stockPrices by day.',
    'Two consecutive segments share a slope if (y2-y1)*(x3-x2) == (y3-y2)*(x2-x1).',
    'Use cross-multiplication (integers) to compare slopes and avoid floating-point errors. Use BigInt for large coordinates.',
    'Count 1 + the number of slope changes.',
  ],
  functionName: 'minimumLines',
  params: ['stockPrices'],
  starterCode: {
    javascript: 'function minimumLines(stockPrices) {\n  \n}\n',
    python: 'def minimumLines(stockPrices):\n    pass\n',
  },
  visibleTests: [
    { args: [[[1,7],[2,6],[3,5],[4,4],[5,4],[6,3],[7,2],[8,2],[9,1]]], expected: 5 },
    { args: [[[3,4],[1,2],[7,8],[2,3]]], expected: 1 },
    { args: [[[1,2],[2,2],[3,4]]], expected: 2 },
  ],
  hiddenTests: [
    { args: [[[1,1]]], expected: 0 },
    { args: [[[1,2],[2,4],[3,6]]], expected: 1 },
    { args: [[[1,1],[2,2],[3,4]]], expected: 2 },
    { args: [[[1,1],[2,3],[3,3],[4,6]]], expected: 3 },
    { args: [[[1,1],[2,1],[3,2],[4,1]]], expected: 3 },
  ],
};
