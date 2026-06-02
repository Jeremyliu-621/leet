import type { Problem } from '../types';

export const problem: Problem = {
  id: 'meeting-rooms',
  title: 'Meeting Rooms',
  difficulty: 'easy',
  tags: ['arrays', 'two-pointers'],
  description: `Given an array of meeting time intervals where \`intervals[i] = [start_i, end_i]\`, determine if a person could attend all meetings (i.e., no two meetings overlap).`,
  constraints: [
    '0 <= intervals.length <= 10^4',
    '0 <= start_i < end_i <= 10^6',
  ],
  examples: [
    {
      input: 'intervals = [[0,30],[5,10],[15,20]]',
      output: 'false',
      explanation: 'The meetings [0,30] and [5,10] overlap.',
    },
    {
      input: 'intervals = [[7,10],[2,4]]',
      output: 'true',
      explanation: '[2,4] ends before [7,10] starts.',
    },
  ],
  hints: [
    'Sort intervals by start time.',
    'After sorting, only adjacent intervals can overlap.',
    'Two intervals [a,b] and [c,d] (a≤c) overlap if c < b.',
  ],
  functionName: 'canAttendMeetings',
  params: ['intervals'],
  starterCode: {
    javascript: `function canAttendMeetings(intervals) {
  intervals.sort((a, b) => a[0] - b[0]);
  for (let i = 1; i < intervals.length; i++) {
    if (intervals[i][0] < intervals[i - 1][1]) return false;
  }
  return true;
}`,
    typescript: `function canAttendMeetings(intervals: number[][]): boolean {
  intervals.sort((a, b) => a[0]! - b[0]!);
  for (let i = 1; i < intervals.length; i++) {
    if (intervals[i]![0]! < intervals[i - 1]![1]!) return false;
  }
  return true;
}`,
    python: `def canAttendMeetings(intervals):
    if hasattr(intervals, 'to_py'): intervals = [[int(x) for x in (r.to_py() if hasattr(r, 'to_py') else r)] for r in intervals.to_py()]
    intervals.sort(key=lambda x: x[0])
    for i in range(1, len(intervals)):
        if intervals[i][0] < intervals[i-1][1]: return False
    return True`,
  },
  visibleTests: [
    { args: [[[0, 30], [5, 10], [15, 20]]], expected: false },
    { args: [[[7, 10], [2, 4]]], expected: true },
  ],
  hiddenTests: [
    { args: [[]], expected: true },
    { args: [[[1, 2]]], expected: true },
    { args: [[[1, 3], [2, 4]]], expected: false },
    { args: [[[1, 2], [3, 4], [5, 6]]], expected: true },
  ],
};
