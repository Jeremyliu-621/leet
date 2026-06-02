import type { Problem } from '../types';

export const problem: Problem = {
  id: 'merge-intervals',
  title: 'Merge Intervals',
  difficulty: 'medium',
  tags: ['arrays'],
  description: `Given an array of \`intervals\` where \`intervals[i] = [start, end]\`, merge all overlapping intervals and return an array of the non-overlapping intervals that cover all the intervals in the input.`,
  constraints: [
    '`1 <= intervals.length <= 10⁴`',
    '`intervals[i].length == 2`',
    '`0 <= start <= end <= 10⁴`',
  ],
  examples: [
    {
      input: 'intervals = [[1,3],[2,6],[8,10],[15,18]]',
      output: '[[1,6],[8,10],[15,18]]',
      explanation: 'Since intervals [1,3] and [2,6] overlap, merge them into [1,6].',
    },
    {
      input: 'intervals = [[1,4],[4,5]]',
      output: '[[1,5]]',
      explanation: 'Intervals [1,4] and [4,5] are considered overlapping.',
    },
  ],
  hints: [
    'Sort intervals by their start time.',
    'Walk through the sorted intervals. Keep a "current" interval. If the next interval\'s start ≤ current\'s end, merge by extending current\'s end to max(current.end, next.end).',
    'Otherwise, push current to the result and start a new current interval.',
  ],
  functionName: 'merge',
  params: ['intervals'],
  starterCode: {
    javascript: `function merge(intervals) {
  intervals.sort((a, b) => a[0] - b[0]);
  const result = [intervals[0]];
  for (let i = 1; i < intervals.length; i++) {
    const last = result[result.length - 1];
    if (intervals[i][0] <= last[1]) last[1] = Math.max(last[1], intervals[i][1]);
    else result.push(intervals[i]);
  }
  return result;
}`,
    typescript: `function merge(intervals: number[][]): number[][] {
  intervals.sort((a, b) => a[0]! - b[0]!);
  const result: number[][] = [intervals[0]!];
  for (let i = 1; i < intervals.length; i++) {
    const last = result[result.length - 1]!;
    if (intervals[i]![0]! <= last[1]!) last[1] = Math.max(last[1]!, intervals[i]![1]!);
    else result.push(intervals[i]!);
  }
  return result;
}`,
    python: `def merge(intervals):
    if hasattr(intervals, 'to_py'): intervals = [[int(x) for x in (r.to_py() if hasattr(r, 'to_py') else r)] for r in intervals.to_py()]
    intervals.sort(key=lambda x: x[0])
    result = [intervals[0]]
    for s, e in intervals[1:]:
        if s <= result[-1][1]: result[-1][1] = max(result[-1][1], e)
        else: result.append([s, e])
    return result`,
  },
  visibleTests: [
    { args: [[[1, 3], [2, 6], [8, 10], [15, 18]]], expected: [[1, 6], [8, 10], [15, 18]] },
    { args: [[[1, 4], [4, 5]]], expected: [[1, 5]] },
    { args: [[[1, 4]]], expected: [[1, 4]] },
  ],
  hiddenTests: [
    { args: [[[1, 4], [0, 4]]], expected: [[0, 4]] },
    { args: [[[1, 4], [2, 3]]], expected: [[1, 4]] },
    { args: [[[1, 2], [3, 4], [5, 6]]], expected: [[1, 2], [3, 4], [5, 6]] },
  ],
};
