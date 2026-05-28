import type { Problem } from '../types';

export const problem: Problem = {
  id: 'remove-covered-intervals',
  title: 'Remove Covered Intervals',
  difficulty: 'medium',
  tags: ['arrays', 'two-pointers'],
  description: `Given an array of \`intervals\` where \`intervals[i] = [l_i, r_i]\`, remove all intervals that are covered by another interval in the list.

An interval \`[a, b]\` is covered by \`[c, d]\` if \`c <= a\` and \`b <= d\`.

Return the number of remaining intervals.`,
  constraints: [
    '1 <= intervals.length <= 1000',
    'intervals[i].length == 2',
    '0 <= l_i < r_i <= 10^5',
    'All the given intervals are unique',
  ],
  examples: [
    {
      input: 'intervals = [[1,4],[3,6],[2,8]]',
      output: '2',
      explanation: '[1,4] and [3,6] are not covered; [3,6] is covered by... wait, [2,8] covers [1,4]? No — [1,4] is covered by [2,8] only if 2<=1, which is false. [3,6] is covered by [2,8] since 2<=3 and 6<=8. So [2,8] and [1,4] remain.',
    },
    {
      input: 'intervals = [[1,4],[2,3]]',
      output: '1',
      explanation: '[2,3] is covered by [1,4] since 1<=2 and 3<=4. Only [1,4] remains.',
    },
  ],
  hints: [
    'Sort intervals by left endpoint ascending; break ties by right endpoint descending.',
    'After sorting, an interval is covered if its right endpoint is ≤ the max right endpoint seen so far.',
    'Count intervals whose right endpoint is strictly greater than the running maximum.',
  ],
  functionName: 'removeCoveredIntervals',
  params: ['intervals'],
  starterCode: {
    javascript: `function removeCoveredIntervals(intervals) {

}`,
    python: `def removeCoveredIntervals(intervals):
    pass`,
  },
  visibleTests: [
    { args: [[[1,4],[3,6],[2,8]]], expected: 2 },
    { args: [[[1,4],[2,3]]], expected: 1 },
  ],
  hiddenTests: [
    { args: [[[1,2],[1,4],[3,4]]], expected: 1 },
    { args: [[[3,10],[4,10],[5,11]]], expected: 2 },
    { args: [[[1,1],[1,2]]], expected: 1 },
    { args: [[[1,3],[2,5],[1,5]]], expected: 1 },
  ],
};
