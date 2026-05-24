import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-number-of-moves-seat',
  title: 'Minimum Number of Moves to Seat Everyone',
  difficulty: 'easy',
  tags: ['arrays'],
  description: `There are \`n\` seats and \`n\` students in a room. You are given an array \`seats\` of length \`n\`, where \`seats[i]\` is the position of the \`i\`-th seat. You are also given the array \`students\` of length \`n\`, where \`students[j]\` is the position of the \`j\`-th student.

You may perform the following move any number of times:

- Increase or decrease the position of the \`i\`-th student by \`1\` (i.e., moving the student one step left or right).

Return *the **minimum** number of moves required to move each student to a seat* such that **no two students are in the same seat**.`,
  constraints: [
    'n == seats.length == students.length',
    '1 <= n <= 100',
    '1 <= seats[i], students[j] <= 100',
  ],
  examples: [
    {
      input: 'seats = [3,1,5], students = [2,7,4]',
      output: '4',
      explanation: 'Sort both: seats=[1,3,5], students=[2,4,7]. Cost: |1-2|+|3-4|+|5-7|=1+1+2=4.',
    },
    {
      input: 'seats = [4,1,5,9], students = [1,3,2,6]',
      output: '7',
    },
    {
      input: 'seats = [2,2,6,6], students = [1,3,2,6]',
      output: '4',
    },
  ],
  hints: [
    'Sort both arrays. Pairing sorted seats with sorted students minimizes total movement.',
    'The answer is the sum of |seats[i] - students[i]| after sorting.',
  ],
  functionName: 'minMovesToSeat',
  params: ['seats', 'students'],
  starterCode: {
    javascript: `function minMovesToSeat(seats, students) {

}`,
    python: `def minMovesToSeat(seats, students):
    pass`,
  },
  visibleTests: [
    { args: [[3, 1, 5], [2, 7, 4]], expected: 4 },
    { args: [[4, 1, 5, 9], [1, 3, 2, 6]], expected: 7 },
    { args: [[2, 2, 6, 6], [1, 3, 2, 6]], expected: 4 },
  ],
  hiddenTests: [
    { args: [[1], [1]], expected: 0 },
    { args: [[1], [2]], expected: 1 },
    { args: [[1, 5], [2, 4]], expected: 2 },
    { args: [[10, 1], [1, 10]], expected: 0 },
    { args: [[5, 3, 1], [6, 4, 2]], expected: 3 },
  ],
};
