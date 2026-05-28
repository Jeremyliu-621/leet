import type { Problem } from '../types';

export const problem: Problem = {
  id: 'interval-list-intersections',
  title: 'Interval List Intersections',
  difficulty: 'medium',
  tags: ['two-pointers', 'arrays'],
  description: `You are given two lists of **closed intervals**, \`firstList\` and \`secondList\`, where each list contains intervals sorted by their start point and no two intervals in the same list overlap.

Return the intersection of these two interval lists as an array of closed intervals.

A **closed interval** \`[a, b]\` represents all real numbers \`x\` with \`a <= x <= b\`.

The intersection of two closed intervals \`[a, b]\` and \`[c, d]\` is \`[max(a,c), min(b,d)]\` if \`max(a,c) <= min(b,d)\`, otherwise they do not intersect.`,
  constraints: [
    '0 <= firstList.length, secondList.length <= 1000',
    'firstList[i].length == secondList[j].length == 2',
    '0 <= starti <= endi <= 10^9',
    'endi < starti+1',
    '0 <= startj <= endj <= 10^9',
    'endj < startj+1',
  ],
  examples: [
    {
      input: 'firstList = [[0,2],[5,10],[13,23],[24,25]], secondList = [[1,5],[8,12],[15,24],[25,26]]',
      output: '[[1,2],[5,5],[8,10],[15,23],[24,24],[25,25]]',
      explanation: 'Six intersection intervals found by advancing the pointer with the smaller end.',
    },
    {
      input: 'firstList = [[1,3],[5,9]], secondList = []',
      output: '[]',
      explanation: 'No intervals in secondList means no intersections.',
    },
    {
      input: 'firstList = [[1,7]], secondList = [[3,10]]',
      output: '[[3,7]]',
      explanation: 'The intersection of [1,7] and [3,10] is [3,7].',
    },
  ],
  hints: [
    'Use two pointers, one for each list. At each step, compute the intersection of the two current intervals (lo = max of starts, hi = min of ends). If lo <= hi, that is a valid intersection.',
    'After checking the current pair, advance the pointer whose interval ends first — it cannot intersect with any future interval in the other list.',
    '`const res = []; let i = 0, j = 0; while (i < firstList.length && j < secondList.length) { const lo = Math.max(firstList[i][0], secondList[j][0]); const hi = Math.min(firstList[i][1], secondList[j][1]); if (lo <= hi) res.push([lo, hi]); if (firstList[i][1] < secondList[j][1]) i++; else j++; } return res;`',
  ],
  functionName: 'intervalIntersection',
  params: ['firstList', 'secondList'] as readonly string[],
  starterCode: {
    javascript: 'function intervalIntersection(firstList, secondList) {\n  // your code here\n}\n',
    typescript: "function intervalIntersection(firstList: number[][], secondList: number[][]): number[][] {\n  // your code here\n}",

    python: 'def intervalIntersection(firstList: list[list[int]], secondList: list[list[int]]) -> list[list[int]]:\n    # your code here\n    pass\n',
  },
  visibleTests: [
    { args: [[[0,2],[5,10],[13,23],[24,25]], [[1,5],[8,12],[15,24],[25,26]]], expected: [[1,2],[5,5],[8,10],[15,23],[24,24],[25,25]] },
    { args: [[[1,3],[5,9]], []], expected: [] },
    { args: [[[1,7]], [[3,10]]], expected: [[3,7]] },
  ],
  hiddenTests: [
    { args: [[], [[1,5]]], expected: [] },
    { args: [[[1,5]], [[6,10]]], expected: [] },
    { args: [[[1,5]], [[5,10]]], expected: [[5,5]] },
    { args: [[[0,10]], [[2,3],[5,7],[9,12]]], expected: [[2,3],[5,7],[9,10]] },
    { args: [[[1,2],[4,6]], [[1,6]]], expected: [[1,2],[4,6]] },
  ],
};
