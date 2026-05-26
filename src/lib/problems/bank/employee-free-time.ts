import type { Problem } from '../types';

export const problem: Problem = {
  id: 'employee-free-time',
  title: 'Employee Free Time',
  difficulty: 'hard',
  tags: ['arrays', 'heap'],
  description: `We are given a list \`schedule\` of employees, which represents the working time for each employee.

Each employee has a list of non-overlapping intervals, and these intervals are in sorted order.

Return the list of finite intervals representing **common, positive-length free time** for all employees, also in sorted order.

Even though we are representing \`Interval\` objects as \`[start, end]\` arrays (0-indexed), a \`schedule[i][j]\` represents the working time of the i-th employee during \`[schedule[i][j][0], schedule[i][j][1]]\`.

Free time is any interval not covered by any employee's working time.`,
  constraints: [
    '1 <= schedule.length , schedule[i].length <= 50',
    '0 <= schedule[i][j][0] < schedule[i][j][1] <= 10^8',
  ],
  examples: [
    {
      input: 'schedule = [[[1,3],[6,7]],[[2,4]],[[2,5],[9,12]]]',
      output: '[[5,6],[7,9]]',
      explanation: 'The employees are busy during [1,5] and [6,7] and [9,12]. So the free time is [5,6] and [7,9].',
    },
    {
      input: 'schedule = [[[1,3],[6,7]],[[2,4]]]',
      output: '[[4,6]]',
      explanation: 'After merging, employees are busy during [1,4] and [6,7]. Free time is [4,6].',
    },
  ],
  hints: [
    'Flatten all employee intervals into one list, then sort by start time.',
    'Merge overlapping intervals to get the full set of busy intervals.',
    'The free time consists of the gaps between consecutive merged intervals.',
  ],
  functionName: 'employeeFreeTime',
  params: ['schedule'],
  starterCode: {
    javascript: `function employeeFreeTime(schedule) {

}`,
    python: `def employeeFreeTime(schedule):
    `,
  },
  visibleTests: [
    { args: [[[[1, 3], [6, 7]], [[2, 4]], [[2, 5], [9, 12]]]], expected: [[5, 6], [7, 9]] },
    { args: [[[[1, 3], [6, 7]], [[2, 4]]]], expected: [[4, 6]] },
  ],
  hiddenTests: [
    { args: [[[[1, 2], [2, 3]], [[3, 4], [5, 6]]]], expected: [[4, 5]] },
    { args: [[[[1, 10]], [[2, 3], [7, 9]]]], expected: [] },
    { args: [[[[1, 3]], [[3, 6]], [[6, 9]]]], expected: [] },
    { args: [[[[1, 2]], [[4, 6]], [[8, 10]]]], expected: [[2, 4], [6, 8]] },
    { args: [[[[1, 5], [10, 14]], [[2, 6], [11, 15]]]], expected: [[6, 10]] },
    { args: [[[[1, 3]], [[6, 7]]]], expected: [[3, 6]] },
  ],
};
