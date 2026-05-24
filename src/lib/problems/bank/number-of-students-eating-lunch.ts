import type { Problem } from '../types';

export const problem: Problem = {
  id: 'number-of-students-eating-lunch',
  title: 'Number of Students Unable to Eat Lunch',
  difficulty: 'easy',
  tags: ['stack', 'arrays'],
  description: `The school cafeteria offers circular (\`0\`) and square (\`1\`) sandwiches. Students stand in a queue; sandwiches are in a stack.

Each step: if the top sandwich matches the **front** student's preference, the student takes it and leaves. Otherwise the student goes to the **back** of the queue.

This continues until no student at the front wants the top sandwich.

Given arrays \`students\` (preferences) and \`sandwiches\` (stack, index 0 = top), return the **number of students unable to eat**.`,
  constraints: [
    '`1 <= students.length, sandwiches.length <= 100`',
    '`students.length == sandwiches.length`',
    '`sandwiches[i]` is `0` or `1`.',
    '`students[i]` is `0` or `1`.',
  ],
  examples: [
    {
      input: 'students = [1,1,0,0], sandwiches = [0,1,0,1]',
      output: '0',
      explanation: 'All students find their preferred sandwich.',
    },
    {
      input: 'students = [1,1,1,0,0,1], sandwiches = [1,0,0,0,1,1]',
      output: '3',
      explanation: 'Students preferring 0 sandwiches are unable to eat once only 1-sandwiches remain.',
    },
  ],
  hints: [
    'Count how many students prefer each type. Iterate through the sandwich stack: if the top sandwich has no matching preference left, all remaining students are stuck.',
    'This avoids simulating the queue rotation entirely.',
  ],
  functionName: 'countStudents',
  params: ['students', 'sandwiches'],
  starterCode: {
    javascript: `function countStudents(students, sandwiches) {

}`,
    python: `def countStudents(students, sandwiches):
    pass`,
  },
  visibleTests: [
    { args: [[1, 1, 0, 0], [0, 1, 0, 1]], expected: 0 },
    { args: [[1, 1, 1, 0, 0, 1], [1, 0, 0, 0, 1, 1]], expected: 3 },
    { args: [[0], [0]], expected: 0 },
  ],
  hiddenTests: [
    { args: [[0], [1]], expected: 1 },
    { args: [[1, 0], [0, 1]], expected: 0 },
    { args: [[0, 0], [1, 1]], expected: 2 },
    { args: [[1, 0, 0, 1], [0, 0, 1, 1]], expected: 0 },
  ],
};
