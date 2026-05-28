import type { Problem } from '../types';

export const problem: Problem = {
  id: 'two-best-non-overlapping-events',
  title: 'Two Best Non-Overlapping Events',
  difficulty: 'medium',
  tags: ['arrays', 'binary-search'],
  description: `You are given a **0-indexed** 2D integer array of \`events\` where \`events[i] = [startTime_i, endTime_i, value_i]\`. The \`i\`th event starts at \`startTime_i\` and ends at \`endTime_i\`, and if you attend this event, you will receive a value of \`value_i\`.

You can choose **at most two non-overlapping** events to attend such that the end time of the first event is **strictly less than** the start time of the second event.

Return the **maximum sum** of values that you can receive by attending events.`,
  constraints: [
    '2 <= events.length <= 10^5',
    'events[i].length == 3',
    '1 <= startTime_i <= endTime_i <= 10^9',
    '1 <= value_i <= 10^6',
  ],
  examples: [
    {
      input: 'events = [[1,3,2],[4,5,2],[2,4,3]]',
      output: '4',
      explanation: 'Choose events 0 [1,3,2] and 1 [4,5,2]: 3 < 4, non-overlapping, total = 2+2 = 4.',
    },
    {
      input: 'events = [[1,3,2],[4,5,2],[1,5,5]]',
      output: '5',
      explanation: 'Attending only event 2 [1,5,5] gives value 5, which beats any two-event sum.',
    },
  ],
  hints: [
    'Sort events by end time. Keep a running prefix-max array of values seen so far.',
    'For each event, binary search for the latest event ending strictly before its start.',
    'The answer is max(single event, event_value + best_prefix_value_before_start).',
  ],
  functionName: 'maxTwoEvents',
  params: ['events'],
  starterCode: {
    javascript: 'function maxTwoEvents(events) {\n  \n}\n',
    typescript: "function maxTwoEvents(events: number[][]): number {\n  \n}",

    python: 'def maxTwoEvents(events):\n    pass\n',
  },
  visibleTests: [
    { args: [[[1,3,2],[4,5,2],[2,4,3]]], expected: 4 },
    { args: [[[1,3,2],[4,5,2],[1,5,5]]], expected: 5 },
    { args: [[[1,2,4],[3,4,3],[2,3,1]]], expected: 7 },
  ],
  hiddenTests: [
    { args: [[[1,1,1],[2,2,2]]], expected: 3 },
    { args: [[[1,2,3],[3,4,2]]], expected: 5 },
    { args: [[[1,2,1],[1,2,1],[1,2,1]]], expected: 1 },
    { args: [[[1,10,5],[11,20,4],[21,30,3]]], expected: 9 },
    { args: [[[1,5,3],[4,5,1],[6,6,5]]], expected: 8 },
  ],
};
