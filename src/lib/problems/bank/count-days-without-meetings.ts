import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-days-without-meetings',
  title: 'Count Days Without Meetings',
  difficulty: 'medium',
  tags: ['arrays'],
  description: `You are given a positive integer \`days\` representing the total number of days an employee is available for work (starting from day 1). You are also given a 2D array \`meetings\` of size \`n\` where \`meetings[i] = [start_i, end_i]\` represents the starting and ending days of meeting \`i\` (inclusive).

Return the count of days when the employee is available for work but no meetings are scheduled.

**Note:** The meetings may overlap.`,
  constraints: [
    '`1 <= days <= 10⁹`',
    '`1 <= meetings.length <= 10⁵`',
    '`meetings[i].length == 2`',
    '`1 <= meetings[i][0] <= meetings[i][1] <= days`',
  ],
  examples: [
    {
      input: 'days = 10, meetings = [[5,7],[1,3],[9,10]]',
      output: '2',
      explanation: 'Days 4 and 8 have no meetings scheduled.',
    },
    {
      input: 'days = 5, meetings = [[2,4],[1,3]]',
      output: '1',
      explanation: 'Days 1-4 are covered by meetings; day 5 has no meeting.',
    },
    {
      input: 'days = 6, meetings = [[1,6]]',
      output: '0',
      explanation: 'All days 1-6 are covered by one meeting.',
    },
  ],
  hints: [
    'Sort the meetings by start day.',
    'Merge overlapping intervals, then count the days not covered by any merged interval.',
    'The answer is days minus the total number of covered days.',
  ],
  functionName: 'countDays',
  params: ['days', 'meetings'],
  starterCode: {
    javascript: `function countDays(days, meetings) {
  meetings.sort((a, b) => a[0] - b[0]);
  let covered = 0, curStart = -1, curEnd = -1;
  for (const [s, e] of meetings) {
    if (s > curEnd + 1) {
      if (curEnd >= 0) covered += curEnd - curStart + 1;
      curStart = s; curEnd = e;
    } else {
      curEnd = Math.max(curEnd, e);
    }
  }
  if (curEnd >= 0) covered += curEnd - curStart + 1;
  return days - covered;
}`,
    typescript: `function countDays(days: number, meetings: number[][]): number {
  meetings.sort((a, b) => a[0]! - b[0]!);
  let covered = 0, curStart = -1, curEnd = -1;
  for (const [s, e] of meetings) {
    if (s! > curEnd + 1) {
      if (curEnd >= 0) covered += curEnd - curStart + 1;
      curStart = s!; curEnd = e!;
    } else {
      curEnd = Math.max(curEnd, e!);
    }
  }
  if (curEnd >= 0) covered += curEnd - curStart + 1;
  return days - covered;
}`,
    python: `def countDays(days, meetings):
    meetings.sort()
    covered, cur_start, cur_end = 0, -1, -1
    for s, e in meetings:
        if s > cur_end + 1:
            if cur_end >= 0:
                covered += cur_end - cur_start + 1
            cur_start, cur_end = s, e
        else:
            cur_end = max(cur_end, e)
    if cur_end >= 0:
        covered += cur_end - cur_start + 1
    return days - covered`,
  },
  visibleTests: [
    { args: [10, [[5, 7], [1, 3], [9, 10]]], expected: 2 },
    { args: [5, [[2, 4], [1, 3]]], expected: 1 },
    { args: [6, [[1, 6]]], expected: 0 },
  ],
  hiddenTests: [
    { args: [8, [[2, 5], [7, 8]]], expected: 2 },
    { args: [20, [[1, 5], [8, 12], [15, 20]]], expected: 4 },
    { args: [3, []], expected: 3 },
    { args: [10, [[1, 10]]], expected: 0 },
  ],
};
