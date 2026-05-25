import type { Problem } from '../types';

export const problem: Problem = {
  id: 'course-schedule-iii',
  title: 'Course Schedule III',
  difficulty: 'medium',
  tags: ['heap', 'arrays'],
  description: `There are \`n\` different online courses numbered from \`1\` to \`n\`. You are given an array \`courses\` where \`courses[i] = [durationi, lastDayi]\` indicates that the \`i\`th course should be taken **continuously** for \`durationi\` days and must be finished before or on \`lastDayi\`.

You will start on the \`1st\` day and you cannot take two courses simultaneously.

Return the **maximum number of courses** that you can take.`,
  constraints: [
    '`1 <= courses.length <= 10^4`',
    '`1 <= durationi, lastDayi <= 10^4`',
  ],
  examples: [
    {
      input: 'courses = [[100,200],[200,1300],[1000,1250],[2000,3200]]',
      output: '3',
      explanation:
        'Take course 1 (ends day 100), then course 3 (ends day 1100), then course 2 (ends day 1300). Cannot take course 4.',
    },
    {
      input: 'courses = [[1,2]]',
      output: '1',
    },
    {
      input: 'courses = [[3,2],[4,3]]',
      output: '0',
    },
  ],
  hints: [
    'Sort courses by their deadline (lastDay).',
    'Greedily take each course. If taking the current course exceeds its deadline, swap it with the longest course taken so far if that course is longer.',
    'Use a max-heap to track durations of taken courses so you can efficiently find and remove the longest one.',
  ],
  functionName: 'scheduleCourse',
  params: ['courses'],
  starterCode: {
    javascript: 'function scheduleCourse(courses) {\n  \n}\n',
    python: 'def scheduleCourse(courses):\n    pass\n',
  },
  visibleTests: [
    { args: [[[100, 200], [200, 1300], [1000, 1250], [2000, 3200]]], expected: 3 },
    { args: [[[1, 2]]], expected: 1 },
    { args: [[[3, 2], [4, 3]]], expected: 0 },
  ],
  hiddenTests: [
    { args: [[[5, 5], [4, 6], [2, 6]]], expected: 2 },
    { args: [[[1, 1], [1, 2], [1, 3]]], expected: 3 },
    { args: [[[2, 4], [3, 6], [2, 8]]], expected: 3 },
    { args: [[[1, 2], [2, 3], [3, 4], [4, 5]]], expected: 2 },
  ],
};
