import type { Problem } from '../types';

export const problem: Problem = {
  id: 'meeting-rooms-ii',
  title: 'Meeting Rooms II',
  difficulty: 'medium',
  tags: ['arrays', 'two-pointers'],
  description: `Given an array of meeting time intervals \`intervals\` where \`intervals[i] = [start_i, end_i]\`, return the **minimum number of conference rooms required**.

A meeting occupies a room from \`start_i\` (inclusive) to \`end_i\` (exclusive), so two meetings \`[0,30]\` and \`[30,60]\` can share the same room.`,
  constraints: [
    '`1 <= intervals.length <= 10^4`',
    '`0 <= start_i < end_i <= 10^6`',
  ],
  examples: [
    {
      input: 'intervals = [[0,30],[5,10],[15,20]]',
      output: '2',
      explanation: 'Meetings [0,30] and [5,10] overlap so they need separate rooms. [15,20] also overlaps [0,30] but [5,10] has ended, so it reuses that room.',
    },
    {
      input: 'intervals = [[7,10],[2,4]]',
      output: '1',
      explanation: 'The two meetings do not overlap, so one room suffices.',
    },
  ],
  hints: [
    'Sort start times and end times separately. Use two pointers: if the next start time is before the current earliest end time, allocate a new room; otherwise, reuse a room.',
    'Track the maximum of `i - j + 1` (rooms allocated minus rooms freed) over all meeting indices `i`.',
    `\`\`\`js
function minMeetingRooms(intervals) {
  const starts = intervals.map(i=>i[0]).sort((a,b)=>a-b);
  const ends = intervals.map(i=>i[1]).sort((a,b)=>a-b);
  let rooms = 0, endPtr = 0;
  for (let i = 0; i < starts.length; i++) {
    if (starts[i] < ends[endPtr]) rooms++;
    else endPtr++;
  }
  return rooms;
}\`\`\``,
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
    { args: [[[1, 10], [2, 7], [3, 19], [8, 12], [10, 20], [11, 30]]], expected: 4 },
  ],
};
