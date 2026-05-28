import type { Problem } from '../types';

export const problem: Problem = {
  id: 'my-calendar-i',
  title: 'My Calendar I',
  difficulty: 'medium',
  tags: ['arrays', 'binary-search'],
  description: `You are implementing a program to use as your calendar. We can add a new event if adding the event will **not** cause a **double booking**.

A double booking happens when two events have some non-empty intersection (i.e., some moment is common to both events).

Given a list of \`[start, end)\` bookings (half-open intervals), determine which ones can be booked without a double booking. Return a boolean array: \`true\` if that booking was accepted, \`false\` if it was rejected.

**Approach:** Maintain a list of accepted bookings sorted by start time. For each new event, check whether it overlaps with any existing event. Two intervals \`[s1, e1)\` and \`[s2, e2)\` overlap iff \`s1 < e2 && s2 < e1\`.`,
  constraints: [
    '0 <= start < end <= 10^9',
    'At most 1000 bookings total',
  ],
  examples: [
    {
      input: 'bookings = [[10,20],[15,25],[20,30]]',
      output: '[true,false,true]',
      explanation: '[10,20) is booked. [15,25) overlaps with [10,20) → rejected. [20,30) starts when [10,20) ends — no overlap → accepted.',
    },
    {
      input: 'bookings = [[0,10],[5,15],[10,20]]',
      output: '[true,false,true]',
      explanation: '[0,10) accepted. [5,15) overlaps → rejected. [10,20) starts at 10 which is end of [0,10) → no overlap → accepted.',
    },
  ],
  hints: [
    'Two half-open intervals [s1,e1) and [s2,e2) overlap if and only if s1 < e2 AND s2 < e1.',
    'Maintain a list of accepted intervals. For each new booking, scan the list and check for overlaps. If no overlap, add the booking and record true; otherwise record false.',
    'For better performance, keep accepted intervals sorted by start. Use binary search to find the insertion point and only check the neighboring intervals.',
  ],
  functionName: 'myCalendarI',
  params: ['bookings'],
  starterCode: {
    javascript: `function myCalendarI(bookings) {
  // bookings: array of [start, end) intervals
  // return boolean array: true if booking accepted, false if rejected

}`,
    typescript: "function myCalendarI(bookings: number[][]): boolean[] {\n  // bookings: array of [start, end) intervals\n  // return boolean array: true if booking accepted, false if rejected\n\n}",

    python: `def myCalendarI(bookings: list) -> list:
    # bookings: list of [start, end) intervals
    # return boolean list: True if accepted, False if rejected
    pass
`,
  },
  visibleTests: [
    { args: [[[10, 20], [15, 25], [20, 30]]], expected: [true, false, true] },
    { args: [[[0, 10], [5, 15], [10, 20]]], expected: [true, false, true] },
  ],
  hiddenTests: [
    { args: [[[1, 5]]], expected: [true] },
    { args: [[[1, 5], [1, 5]]], expected: [true, false] },
    { args: [[[1, 10], [20, 30], [5, 15]]], expected: [true, true, false] },
    { args: [[[0, 5], [5, 10], [10, 15]]], expected: [true, true, true] },
    { args: [[[0, 100], [50, 60], [10, 20]]], expected: [true, false, false] },
  ],
};
