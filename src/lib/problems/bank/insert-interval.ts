import type { Problem } from '../types';

export const problem: Problem = {
  id: 'insert-interval',
  title: 'Insert Interval',
  difficulty: 'medium',
  tags: ['arrays'],
  description: `You are given an array of non-overlapping intervals \`intervals\` where \`intervals[i] = [starti, endi]\` represent the start and the end of the \`ith\` interval and \`intervals\` is sorted in ascending order by \`starti\`. You are also given an interval \`newInterval = [start, end]\` that represents the start and end of another interval.

Insert \`newInterval\` into \`intervals\` such that \`intervals\` is still sorted in ascending order by \`starti\` and \`intervals\` still does not have any overlapping intervals (merge overlapping intervals if necessary).

Return \`intervals\` after the insertion.`,
  constraints: [
    '0 <= intervals.length <= 10^4',
    'intervals[i].length == 2',
    '0 <= starti <= endi <= 10^5',
    'intervals is sorted by starti in ascending order',
    'newInterval.length == 2',
    '0 <= start <= end <= 10^5',
  ],
  examples: [
    {
      input: 'intervals = [[1,3],[6,9]], newInterval = [2,5]',
      output: '[[1,5],[6,9]]',
    },
    {
      input: 'intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]',
      output: '[[1,2],[3,10],[12,16]]',
      explanation: 'Because the new interval [4,8] overlaps with [3,5],[6,7],[8,10].',
    },
  ],
  hints: [
    'Iterate through the intervals. All intervals that end before newInterval starts go directly to the result.',
    'Merge all intervals that overlap with newInterval by expanding newInterval to cover all of them.',
    'After merging, append the rest of the intervals unchanged.',
  ],
  functionName: 'insert',
  params: ['intervals', 'newInterval'],
  starterCode: {
    javascript: `function insert(intervals, newInterval) {
  // Return intervals after inserting and merging newInterval
}`,
    typescript: "function insert(intervals: number[][], newInterval: number[]): number[][] {\n  // Return intervals after inserting and merging newInterval\n}",

    python: `def insert(intervals, newInterval):
    # Return intervals after inserting and merging newInterval
    pass`,
  },
  visibleTests: [
    { args: [[[1, 3], [6, 9]], [2, 5]], expected: [[1, 5], [6, 9]] },
    { args: [[[1, 2], [3, 5], [6, 7], [8, 10], [12, 16]], [4, 8]], expected: [[1, 2], [3, 10], [12, 16]] },
    { args: [[], [5, 7]], expected: [[5, 7]] },
  ],
  hiddenTests: [
    { args: [[[1, 5]], [2, 3]], expected: [[1, 5]] },
    { args: [[[1, 5]], [2, 7]], expected: [[1, 7]] },
    { args: [[[1, 2], [3, 5]], [6, 8]], expected: [[1, 2], [3, 5], [6, 8]] },
    { args: [[[3, 5], [6, 9]], [1, 2]], expected: [[1, 2], [3, 5], [6, 9]] },
  ],
};
