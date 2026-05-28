import type { Problem } from '../types';

export const problem: Problem = {
  id: 'maximum-events-can-attend',
  title: 'Maximum Number of Events That Can Be Attended',
  difficulty: 'medium',
  tags: ['arrays', 'heap'],
  description: `You are given an array of \`events\` where \`events[i] = [startDay_i, endDay_i]\`. Every event \`i\` starts at \`startDay_i\` and ends at \`endDay_i\`.

You can attend an event \`i\` at any day \`d\` where \`startDay_i <= d <= endDay_i\`. You can only attend **one** event per day.

Return the **maximum** number of events you can attend.`,
  constraints: [
    '1 <= events.length <= 10^5',
    'events[i].length == 2',
    '1 <= startDay_i <= endDay_i <= 10^5',
  ],
  examples: [
    {
      input: 'events = [[1,2],[2,3],[3,4]]',
      output: '3',
      explanation: 'Attend all 3 events: event 1 on day 1, event 2 on day 2, event 3 on day 3.',
    },
    {
      input: 'events = [[1,2],[2,3],[3,4],[1,2]]',
      output: '4',
    },
  ],
  hints: [
    'Level 1: Greedy approach: always attend the event with the earliest deadline. Sort events by start day. Use a min-heap keyed by end day to track available events for the current day.',
    'Level 2: Advance a day counter. Add events that have started to the heap. Remove expired events. Attend (pop) the event with the smallest end day. Increment the answer.',
    'Level 3: Sort events by start. Simulate days: use a min-heap of end days. Each day, enqueue all events starting that day, dequeue expired ones, attend the one ending soonest.',
  ],
  functionName: 'maxEvents',
  params: ['events'],
  starterCode: {
    javascript: 'function maxEvents(events) {\n  // your code here\n}\n',
    typescript: "function maxEvents(events: number[][]): number {\n  // your code here\n}",

    python: 'def maxEvents(events):\n    # your code here\n    pass\n',
  },
  visibleTests: [
    { args: [[[1, 2], [2, 3], [3, 4]]], expected: 3 },
    { args: [[[1, 2], [2, 3], [3, 4], [1, 2]]], expected: 4 },
  ],
  hiddenTests: [
    { args: [[[1, 1], [1, 2], [1, 3], [1, 4], [1, 5]]], expected: 5 },
    { args: [[[1, 4], [4, 4], [2, 2], [3, 4], [1, 1]]], expected: 4 },
    { args: [[[1, 2]]], expected: 1 },
    { args: [[[1, 5], [1, 5], [1, 5], [2, 3], [2, 3]]], expected: 5 },
  ],
};
