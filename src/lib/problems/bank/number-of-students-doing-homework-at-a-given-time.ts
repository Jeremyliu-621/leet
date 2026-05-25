import type { Problem } from '../types';

export const problem: Problem = {
  id: 'number-of-students-doing-homework-at-a-given-time',
  title: 'Number of Students Doing Homework at a Given Time',
  difficulty: 'easy',
  tags: ['arrays'],
  description: `Given two integer arrays \`startTime\` and \`endTime\` and given an integer \`queryTime\`.

The \`i-th\` student started doing their homework at the time \`startTime[i]\` and finished it at time \`endTime[i]\`.

Return the number of students doing their homework at time \`queryTime\`. More formally, return the number of students where \`startTime[i] <= queryTime <= endTime[i]\`.`,
  constraints: [
    'startTime.length == endTime.length',
    '1 <= startTime.length <= 100',
    '1 <= startTime[i] <= endTime[i] <= 1000',
    '1 <= queryTime <= 1000',
  ],
  examples: [
    {
      input: 'startTime = [1,2,3], endTime = [3,2,7], queryTime = 4',
      output: '1',
      explanation: 'Student 0 works 1-3, student 1 works 2-2, student 2 works 3-7. Only student 2 is working at time 4.',
    },
    {
      input: 'startTime = [4], endTime = [4], queryTime = 4',
      output: '1',
      explanation: 'The single student is doing homework at exactly time 4.',
    },
  ],
  hints: [
    'Count the students for whom startTime[i] <= queryTime <= endTime[i].',
  ],
  functionName: 'busyStudent',
  params: ['startTime', 'endTime', 'queryTime'],
  starterCode: {
    javascript: `function busyStudent(startTime, endTime, queryTime) {

}`,
    python: `def busyStudent(startTime, endTime, queryTime):
    pass`,
  },
  visibleTests: [
    { args: [[1, 2, 3], [3, 2, 7], 4], expected: 1 },
    { args: [[4], [4], 4], expected: 1 },
  ],
  hiddenTests: [
    { args: [[1, 2, 3], [3, 2, 7], 7], expected: 1 },
    { args: [[1], [1], 1], expected: 1 },
    { args: [[9, 8, 7, 6, 5, 4, 3, 2, 1], [10, 10, 10, 10, 10, 10, 10, 10, 10], 5], expected: 5 },
    { args: [[1, 1, 1], [3, 3, 3], 2], expected: 3 },
  ],
};
