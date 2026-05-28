import type { Problem } from '../types';

export const problem: Problem = {
  id: 'my-calendar-iii',
  title: 'My Calendar III',
  difficulty: 'hard',
  tags: ['arrays', 'binary-search'],
  description: `A **k-booking** happens when **k** events have some non-empty intersection.

Given a list of half-open interval bookings \`[start, end)\`, after each booking determine the maximum **k** such that there exists a k-booking.

Return an array of integers where the i-th value is the maximum k-booking after the i-th interval is added.

**Example:**

After adding \`[10,20)\`: maximum overlap = 1
After adding \`[50,60)\`: maximum overlap = 1
After adding \`[10,40)\`: interval [10,20) is covered by both events → max = 2
After adding \`[5,15)\`: now [10,15) has 3 events → max = 3
After adding \`[5,10)\`: [10,15) still has 3 → max = 3
After adding \`[25,55)\`: [50,55) covered by [50,60) and [25,55) + [10,40) overlaps too → max = 3`,
  constraints: [
    '0 <= start < end <= 10^9',
    '1 <= bookings.length <= 400',
    'At most 10^4 calls to book in the original problem; here at most 400 intervals.',
  ],
  examples: [
    {
      input: 'bookings = [[10,20],[50,60],[10,40],[5,15],[5,10],[25,55]]',
      output: '[1,1,2,3,3,3]',
      explanation: 'After each booking, the maximum k-booking is tracked.',
    },
    {
      input: 'bookings = [[1,10],[2,5],[3,4]]',
      output: '[1,2,3]',
      explanation: 'Each new interval is strictly nested inside the previous ones.',
    },
  ],
  functionName: 'myCalendarThree',
  params: ['bookings'],
  starterCode: {
    javascript: `function myCalendarThree(bookings) {
  // bookings: array of [start, end) half-open intervals
  // return: array where result[i] = max k-booking after i+1 intervals added

}`,
    typescript: "function myCalendarThree(bookings: number[][]): number[] {\n  // bookings: array of [start, end) half-open intervals\n  // return: array where result[i] = max k-booking after i+1 intervals added\n\n}",

    python: `def myCalendarThree(bookings: list) -> list:
    # bookings: list of [start, end) half-open intervals
    # return: list where result[i] = max k-booking after i+1 intervals added
    pass
`,
  },
  visibleTests: [
    {
      args: [[[10,20],[50,60],[10,40],[5,15],[5,10],[25,55]]],
      expected: [1,1,2,3,3,3],
    },
    {
      args: [[[1,10],[2,5],[3,4]]],
      expected: [1,2,3],
    },
  ],
  hiddenTests: [
    {
      args: [[[1,5]]],
      expected: [1],
    },
    {
      args: [[[1,10],[1,10],[1,10]]],
      expected: [1,2,3],
    },
    {
      args: [[[0,50],[10,20],[10,20],[5,15]]],
      expected: [1,2,3,4],
    },
    {
      args: [[[1,5],[5,10],[10,15]]],
      expected: [1,1,1],
    },
    {
      args: [[[0,100],[10,90],[20,80],[30,70]]],
      expected: [1,2,3,4],
    },
  ],
  hints: [
    'Use a difference array / coordinate compression: for each interval [s,e), add +1 at coordinate s and -1 at coordinate e. The maximum k-booking is the maximum prefix sum.',
    'After each new booking, update the event counts at start and end, then scan to find the peak.',
    'Use a sorted Map to store only the event points (coordinate-compress). For each new [s,e), increment map[s] and decrement map[e], then scan the values in key order to find the max running sum.',
  ],
};
