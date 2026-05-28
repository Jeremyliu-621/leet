import type { Problem } from '../types';

export const problem: Problem = {
  id: 'my-calendar-ii',
  title: 'My Calendar II',
  difficulty: 'medium',
  tags: ['arrays'],
  description: `You are implementing a calendar that can handle at most **two** bookings for any single time slot.

Given a list of booking requests, each as \`[start, end)\` (half-open interval), process them **in order** and return a boolean array indicating which bookings were **accepted**. A booking is rejected if it would cause any time slot to be booked **three or more times**.

**Example:**
\`\`\`
Input: bookings = [[10,20],[50,60],[10,40],[5,15],[5,10],[25,55]]
Output: [true,true,true,false,true,true]
\`\`\`
- \`[10,20]\`: accepted, no overlap.
- \`[50,60]\`: accepted, no overlap with first.
- \`[10,40]\`: accepted — overlaps \`[10,20]\` once (double-booked \`[10,20]\`), not triple.
- \`[5,15]\`: **rejected** — would triple-book the interval \`[10,15]\` (already double-booked by the first two events).
- \`[5,10]\`: accepted — \`[5,10)\` only intersects \`[10,20]\` at the boundary (no overlap in a half-open scheme).
- \`[25,55]\`: accepted — overlaps are \`[25,40]\` and \`[50,55]\`, each only double-booked.`,
  constraints: [
    '1 <= bookings.length <= 1000',
    '0 <= start < end <= 10^9',
  ],
  examples: [
    {
      input: 'bookings = [[10,20],[50,60],[10,40],[5,15],[5,10],[25,55]]',
      output: '[true,true,true,false,true,true]',
    },
    {
      input: 'bookings = [[1,10],[2,5],[3,8]]',
      output: '[true,true,false]',
      explanation: '[1,10] accepted. [2,5] accepted (double-books [2,5]). [3,8] rejected — would triple-book [3,5].',
    },
    {
      input: 'bookings = [[1,5],[10,15],[5,10]]',
      output: '[true,true,true]',
      explanation: 'No overlaps at all (half-open intervals: [1,5), [10,15), [5,10) are pairwise disjoint).',
    },
  ],
  hints: [
    'Maintain two lists: `calendar` (accepted bookings) and `doubleBooked` (intervals that are already double-booked). For each new request, first check if it overlaps any interval in `doubleBooked`. If yes, reject it.',
    'If no conflict with `doubleBooked`, compute the intersection of the new booking with every accepted booking in `calendar` and add those intersections to `doubleBooked`. Then accept the new booking.',
    'Overlap of two half-open intervals [a,b) and [c,d) exists when `max(a,c) < min(b,d)`. If they overlap, the intersection is `[max(a,c), min(b,d))`.',
  ],
  functionName: 'myCalendarTwo',
  params: ['bookings'],
  starterCode: {
    javascript: `function myCalendarTwo(bookings) {
  // bookings: [[start, end), ...] half-open intervals in order
  // Return boolean array — true if booking accepted, false if rejected
}`,
    python: `def myCalendarTwo(bookings):
    # bookings: list of [start, end) half-open intervals in order
    # Return list of booleans
    pass`,
  },
  visibleTests: [
    {
      args: [[[10, 20], [50, 60], [10, 40], [5, 15], [5, 10], [25, 55]]],
      expected: [true, true, true, false, true, true],
    },
    {
      args: [[[1, 10], [2, 5], [3, 8]]],
      expected: [true, true, false],
    },
    {
      args: [[[1, 5], [10, 15], [5, 10]]],
      expected: [true, true, true],
    },
  ],
  hiddenTests: [
    { args: [[[0, 10]]], expected: [true] },
    { args: [[[0, 5], [0, 5], [0, 5]]], expected: [true, true, false] },
    { args: [[[1, 20], [1, 10], [1, 5]]], expected: [true, true, false] },
    { args: [[[0, 100], [50, 150], [25, 75]]], expected: [true, true, false] },
    {
      args: [[[10, 20], [10, 20], [10, 20]]],
      expected: [true, true, false],
    },
    {
      args: [[[1, 5], [6, 10], [1, 10], [1, 6], [5, 10]]],
      expected: [true, true, true, false, false],
    },
    { args: [[[5, 15], [0, 20], [0, 10]]], expected: [true, true, false] },
  ],
};
