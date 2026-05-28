import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-number-of-moves-to-seat-everyone',
  title: 'Minimum Number of Moves to Seat Everyone',
  difficulty: 'easy',
  tags: ['arrays'],
  description: `There are \`n\` seats and \`n\` students in a room. You are given an array \`seats\` of length \`n\`, where \`seats[i]\` is the position of the i-th seat. You are also given the array \`students\` of length \`n\`, where \`students[j]\` is the position of the j-th student.

You may perform the following move **any number of times**: increase or decrease the position of the i-th student by 1 (i.e. move to an adjacent position).

Return the **minimum number of moves** required to move each student to a seat such that no two students share a seat.`,
  constraints: [
    'n == seats.length == students.length',
    '1 <= n <= 100',
    '1 <= seats[i], students[j] <= 100',
  ],
  examples: [
    {
      input: 'seats = [3,1,5], students = [2,7,4]',
      output: '4',
      explanation: 'Sort both: seats=[1,3,5], students=[2,4,7]. Moves: |1-2|+|3-4|+|5-7| = 1+1+2 = 4.',
    },
    {
      input: 'seats = [4,1,5,9], students = [1,3,2,6]',
      output: '7',
      explanation: 'Sort both: seats=[1,4,5,9], students=[1,2,3,6]. Moves: 0+2+2+3 = 7.',
    },
    {
      input: 'seats = [2,2,6,6], students = [1,3,2,6]',
      output: '4',
      explanation: 'Sort both: seats=[2,2,6,6], students=[1,2,3,6]. Moves: 1+0+3+0 = 4.',
    },
  ],
  hints: [
    'Sort both arrays independently.',
    'Pair the i-th sorted seat with the i-th sorted student — this is the optimal assignment.',
    'Sum of |seats[i] - students[i]| after sorting gives the answer.',
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
    { args: [[5], [1]], expected: 4 },
    { args: [[1, 5], [3, 2]], expected: 3 },
    { args: [[1, 2, 3], [3, 2, 1]], expected: 0 },
    { args: [[10, 1], [1, 10]], expected: 0 },
  ],
};
