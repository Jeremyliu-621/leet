import type { Problem } from '../types';

export const problem: Problem = {
  id: 'meeting-rooms-ii',
  title: 'Meeting Rooms II',
  difficulty: 'medium',
  tags: ['heap', 'arrays', 'two-pointers'],
  description: `Given an array of meeting time intervals \`intervals\` where \`intervals[i] = [start_i, end_i]\`, return the **minimum number of conference rooms required**.

A meeting occupies a room from \`start_i\` (inclusive) to \`end_i\` (exclusive), so two meetings \`[0,30]\` and \`[30,60]\` can share the same room.`,
  constraints: [
    '1 <= intervals.length <= 10^4',
    '0 <= start_i < end_i <= 10^6',
  ],
  examples: [
    {
      input: 'intervals = [[0,30],[5,10],[15,20]]',
      output: '2',
      explanation:
        'Meetings [0,30] and [5,10] overlap so they need separate rooms. [15,20] also overlaps [0,30] but [5,10] has ended, so it reuses that room. Two rooms are needed in total.',
    },
    {
      input: 'intervals = [[7,10],[2,4]]',
      output: '1',
      explanation: 'The two meetings do not overlap, so one room suffices.',
    },
  ],
  hints: [
    'Sort the meetings by start time. For each new meeting, check if any room has become free (i.e., its current meeting has ended).',
    'Maintain a min-heap of end times of ongoing meetings. When a new meeting starts, if the earliest-ending meeting finishes before or at the new start time, reuse that room; otherwise add a new room.',
    'Alternatively: separate start times and end times into two sorted arrays. Use two pointers — when a new meeting starts before the earliest end time, add a room; otherwise advance the end pointer.',
  ],
  functionName: 'minMeetingRooms',
  params: ['intervals'],
  starterCode: {
    javascript: `function minMeetingRooms(intervals) {

}`,
    python: `def minMeetingRooms(intervals):
    pass`,
  },
  visibleTests: [
    { args: [[[0, 30], [5, 10], [15, 20]]], expected: 2 },
    { args: [[[7, 10], [2, 4]]], expected: 1 },
  ],
  hiddenTests: [
    { args: [[[0, 10]]], expected: 1 },
    { args: [[[0, 5], [5, 10], [10, 15]]], expected: 1 },
    { args: [[[0, 10], [0, 10], [0, 10]]], expected: 3 },
    { args: [[[1, 5], [2, 6], [3, 7], [4, 8]]], expected: 4 },
    { args: [[[0, 30], [5, 10], [15, 20], [25, 35]]], expected: 2 },
    { args: [[[9, 10], [4, 9], [4, 17]]], expected: 2 },
  ],
};
