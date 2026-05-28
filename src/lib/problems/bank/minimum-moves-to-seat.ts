import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-moves-to-seat',
  title: 'Minimum Number of Moves to Seat Everyone',
  difficulty: 'easy',
  tags: ['arrays'],
  description: `There are \`n\` seats and \`n\` students in a room. You are given an array \`seats\` of length \`n\`, where \`seats[i]\` is the position of the \`i\`th seat. You are also given the array \`students\` of length \`n\`, where \`students[j]\` is the position of the \`j\`th student.

You may perform the following move any number of times: Increase or decrease the position of the \`i\`th student by \`1\` (i.e., moving the \`i\`th student from position \`x\` to \`x + 1\` or \`x - 1\`).

Return the **minimum** number of moves required to move each student to a seat such that no two students are in the same seat.`,
  constraints: [
    'n == seats.length == students.length',
    '1 <= n <= 100',
    '1 <= seats[i], students[j] <= 100',
  ],
  examples: [
    {
      input: 'seats = [3,1,5], students = [2,7,4]',
      output: '4',
      explanation: 'Assign student 0→seat 3 (1 move), student 1→seat 1 (6 moves would be bad; sort first). After sorting seats=[1,3,5], students=[2,4,7]: |2-1|+|4-3|+|7-5|=1+1+2=4.',
    },
    {
      input: 'seats = [4,1,5,9], students = [1,3,2,6]',
      output: '7',
    },
  ],
  hints: [
    'Level 1: Sort both arrays. The optimal assignment pairs the i-th smallest student with the i-th smallest seat.',
    'Level 2: Sum |seats[i] - students[i]| after sorting both.',
    'Level 3: seats.sort((a,b)=>a-b);students.sort((a,b)=>a-b);return seats.reduce((s,v,i)=>s+Math.abs(v-students[i]),0);',
  ],
  functionName: 'minMovesToSeat',
  params: ['seats', 'students'],
  starterCode: {
    javascript: 'function minMovesToSeat(seats, students) {\n  // your code here\n}\n',
    typescript: "function minMovesToSeat(seats: number[], students: number[]): number {\n  // your code here\n}",

    python: 'def minMovesToSeat(seats, students):\n    # your code here\n    pass\n',
  },
  visibleTests: [
    { args: [[3, 1, 5], [2, 7, 4]], expected: 4 },
    { args: [[4, 1, 5, 9], [1, 3, 2, 6]], expected: 7 },
  ],
  hiddenTests: [
    { args: [[2, 2, 6, 6], [1, 3, 2, 6]], expected: 4 },
    { args: [[1], [1]], expected: 0 },
    { args: [[1, 2], [2, 1]], expected: 0 },
    { args: [[1, 5], [3, 7]], expected: 4 },
    { args: [[10, 1], [1, 10]], expected: 0 },
  ],
};
