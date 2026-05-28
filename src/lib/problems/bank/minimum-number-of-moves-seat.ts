import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-number-of-moves-seat',
  title: 'Minimum Number of Moves to Seat Everyone',
  difficulty: 'easy',
  tags: ['arrays'],
  description: `There are \`n\` seats and \`n\` students in a room. You are given an array \`seats\` of length \`n\`, where \`seats[i]\` is the position of the \`i\`th seat. You are also given the array \`students\` of length \`n\`, where \`students[j]\` is the position of the \`j\`th student.

You may perform the following move any number of times: increase or decrease the position of the \`i\`th student by \`1\` (i.e. move the student to an adjacent position).

Return the **minimum** number of moves required to move each student to a seat such that no two students are in the same seat.`,
  constraints: [
    'n == seats.length == students.length',
    '1 <= n <= 100',
    '1 <= seats[i], students[j] <= 100',
  ],
  examples: [
    {
      input: 'seats = [3,1,5], students = [4,1,2]',
      output: '2',
      explanation:
        'Sort both: seats=[1,3,5], students=[1,2,4]. Moves: |1-1|+|3-2|+|5-4|=0+1+1=2.',
    },
    {
      input: 'seats = [2,2,6,6], students = [1,3,2,6]',
      output: '4',
      explanation:
        'Sort both: seats=[2,2,6,6], students=[1,2,3,6]. Moves: |2-1|+|2-2|+|6-3|+|6-6|=1+0+3+0=4.',
    },
  ],
  hints: [
    'Level 1: After sorting, the optimal assignment always pairs the i-th smallest seat with the i-th smallest student. Any other pairing incurs unnecessary crossing moves.',
    'Level 2: Sort both arrays. Sum up Math.abs(seats[i] - students[i]) for all i.',
    'Level 3: seats.sort((a,b)=>a-b);students.sort((a,b)=>a-b);return seats.reduce((sum,s,i)=>sum+Math.abs(s-students[i]),0);',
  ],
  functionName: 'minMovesToSeat',
  params: ['seats', 'students'],
  starterCode: {
    javascript:
      'function minMovesToSeat(seats, students) {\n  // your code here\n}\n',
    python:
      'def minMovesToSeat(seats, students):\n    # your code here\n    pass\n',
  },
  visibleTests: [
    { args: [[3, 1, 5], [4, 1, 2]], expected: 2 },
    { args: [[2, 2, 6, 6], [1, 3, 2, 6]], expected: 4 },
  ],
  hiddenTests: [
    { args: [[1], [1]], expected: 0 },
    { args: [[2], [3]], expected: 1 },
    { args: [[1, 2], [1, 3]], expected: 1 },
    { args: [[1, 3, 5], [2, 4, 6]], expected: 3 },
    { args: [[5, 1, 9], [3, 6, 2]], expected: 6 },
  ],
};
