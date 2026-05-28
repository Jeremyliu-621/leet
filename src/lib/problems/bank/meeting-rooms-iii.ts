import type { Problem } from '../types';

export const problem: Problem = {
  id: 'meeting-rooms-iii',
  title: 'Meeting Rooms III',
  difficulty: 'hard',
  tags: ['heap', 'arrays'],
  description: `You are given an integer \`n\` representing the number of meeting rooms (numbered \`0\` to \`n-1\`) and a 2D array \`meetings\` where \`meetings[i] = [start_i, end_i]\`.

All meetings must be held. Assign each meeting to the **lowest-numbered available** room. If no room is free, delay the meeting until the earliest room becomes free (the meeting duration stays the same). Return the room that held the **most meetings**. Ties broken by the lowest room number.`,
  constraints: [
    '`1 <= n <= 100`',
    '`1 <= meetings.length <= 10^5`',
    '`0 <= start_i < end_i <= 5 * 10^5`',
    'All values of `start_i` are unique',
  ],
  examples: [
    {
      input: 'n = 2, meetings = [[0,10],[1,5],[2,7],[3,4]]',
      output: '0',
      explanation: 'Room 0 gets [0,10], [3,4] delayed to [10,11] (room 0 earliest free). Room 1 gets [1,5],[2,7]. Counts: room0=2, room1=2 → tie → return 0.',
    },
    {
      input: 'n = 3, meetings = [[1,20],[2,10],[3,5],[4,9],[6,8]]',
      output: '1',
      explanation: 'Room 1 hosts 2 meetings; rooms 0 and 2 host 1 each.',
    },
  ],
  hints: [
    'Sort meetings by start time. Use two min-heaps: one for available room indices, one for busy rooms as (end_time, room_index).',
    'For each meeting: first free all rooms whose end_time <= start into the available heap. If rooms are available, pop the smallest-index room. Otherwise pop the earliest-finishing busy room and delay the meeting.',
    'Track meeting counts per room and return the room index with the maximum count (break ties by index).',
  ],
  functionName: 'mostBooked',
  params: ['n', 'meetings'],
  starterCode: {
    javascript: `function mostBooked(n, meetings) {

}`,
    python: `def mostBooked(n, meetings):
    pass`,
  },
  visibleTests: [
    { args: [2, [[0,10],[1,5],[2,7],[3,4]]], expected: 0 },
    { args: [3, [[1,20],[2,10],[3,5],[4,9],[6,8]]], expected: 1 },
  ],
  hiddenTests: [
    { args: [1, [[0,10],[10,20],[20,30]]], expected: 0 },
    { args: [2, [[0,10],[0,20]]], expected: 0 },
    { args: [2, [[0,10],[1,20],[2,30]]], expected: 0 },
    { args: [3, [[0,5],[1,2],[2,8]]], expected: 1 },
  ],
};
