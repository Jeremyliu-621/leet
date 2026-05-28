import type { Problem } from '../types';

export const problem: Problem = {
  id: 'maximum-number-of-events-that-can-be-attended',
  title: 'Maximum Number of Events That Can Be Attended',
  difficulty: 'medium',
  tags: ['heap'],
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
      explanation: 'Attend day 1, day 2, day 3.',
    },
    {
      input: 'events = [[1,2],[2,3],[3,4],[1,2]]',
      output: '4',
    },
    {
      input: 'events = [[1,4],[4,4],[2,2],[3,4],[1,1]]',
      output: '4',
    },
  ],
  hints: [
    'Sort events by start day. For each day, add all events starting today to a min-heap keyed by end day.',
    'Remove events from the heap that have already expired (end < today).',
    'Greedily attend the event ending soonest (top of the heap).',
  ],
  functionName: 'maxEvents',
  params: ['events'],
  starterCode: {
    javascript: 'function maxEvents(events) {\n\n}\n',
    python: 'def maxEvents(events):\n    pass\n',
  },
  visibleTests: [
    { args: [[[1, 2], [2, 3], [3, 4]]], expected: 3 },
    { args: [[[1, 2], [2, 3], [3, 4], [1, 2]]], expected: 4 },
    { args: [[[1, 4], [4, 4], [2, 2], [3, 4], [1, 1]]], expected: 4 },
  ],
  hiddenTests: [
    { args: [[[1, 1], [1, 1], [1, 1]]], expected: 1 },
    { args: [[[1, 2], [1, 3], [1, 4]]], expected: 3 },
    { args: [[[1, 10]]], expected: 1 },
    { args: [[[1, 2], [1, 2], [2, 3], [3, 4]]], expected: 4 },
  ],
};
