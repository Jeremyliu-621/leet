import type { Problem } from '../types';

export const problem: Problem = {
  id: 'divide-intervals-into-minimum-number-of-groups',
  title: 'Divide Intervals Into Minimum Number of Groups',
  difficulty: 'medium',
  tags: ['arrays', 'heap'],
  description: `You are given a 2D integer array \`intervals\` where \`intervals[i] = [left_i, right_i]\` represents the **inclusive** interval \`[left_i, right_i]\`.

You have to divide the intervals into one or more **groups** such that each interval is in **exactly** one group, and no two intervals that are in the same group **intersect** each other.

Return *the **minimum** number of groups you need to make.*

Two intervals **intersect** if there is at least one common number between them. For example, the intervals \`[1, 5]\` and \`[5, 8]\` intersect.`,
  constraints: [
    '1 <= intervals.length <= 10^5',
    '1 <= left_i <= right_i <= 10^6',
  ],
  examples: [
    {
      input: 'intervals = [[5,10],[6,8],[1,5],[2,3],[1,10]]',
      output: '3',
      explanation: 'Group 1: [1,10]. Group 2: [1,5],[6,8]. Group 3: [2,3],[5,10]. (Each group has non-overlapping intervals.)',
    },
    {
      input: 'intervals = [[1,3],[5,6],[8,10],[11,13]]',
      output: '1',
      explanation: 'None of the intervals overlap, so all can go in one group.',
    },
  ],
  hints: [
    'The minimum number of groups equals the maximum number of intervals that overlap at any single point.',
    'Use a difference array or event-based sweep: +1 at each left endpoint, -1 at right+1.',
    'Alternatively, sort intervals by start, use a min-heap of end times: if earliest end < current start, reuse that group; otherwise open a new group.',
  ],
  functionName: 'minGroups',
  params: ['intervals'],
  starterCode: {
    javascript: 'function minGroups(intervals) {\n\n}',
    python: 'def minGroups(intervals):\n    pass',
  },
  visibleTests: [
    { args: [[[5, 10], [6, 8], [1, 5], [2, 3], [1, 10]]], expected: 3 },
    { args: [[[1, 3], [5, 6], [8, 10], [11, 13]]], expected: 1 },
  ],
  hiddenTests: [
    { args: [[[1, 1]]], expected: 1 },
    { args: [[[1, 2], [1, 2], [1, 2]]], expected: 3 },
    { args: [[[1, 5], [2, 6], [3, 7]]], expected: 3 },
    { args: [[[1, 3], [2, 4], [5, 7], [6, 8]]], expected: 2 },
    { args: [[[1, 10], [2, 5], [6, 9], [3, 4]]], expected: 3 },
  ],
};
