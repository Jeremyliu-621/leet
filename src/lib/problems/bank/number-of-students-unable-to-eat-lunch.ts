import type { Problem } from '../types';

export const problem: Problem = {
  id: 'number-of-students-unable-to-eat-lunch',
  title: 'Number of Students Unable to Eat Lunch',
  difficulty: 'easy',
  tags: ['arrays', 'stack'],
  description: `The school cafeteria offers circular and square sandwiches at lunch break, referred to by numbers \`0\` and \`1\` respectively. All students stand in a queue. Each student either prefers square or circular sandwiches.

The number of sandwiches in the cafeteria is equal to the number of students. The sandwiches are placed in a **stack**. At each step:

- If the student at the front of the queue **prefers** the sandwich on the top of the stack, they will **take it** and leave the queue.
- Otherwise, they will **leave it** and go to the queue's end.

This continues until none of the queue students want to take the top sandwich and are thus unable to eat.

Return the number of students that are unable to eat.`,
  constraints: [
    '1 <= students.length <= 100',
    'sandwiches.length == students.length',
    'students[i] is 0 or 1.',
    'sandwiches[i] is 0 or 1.',
  ],
  examples: [
    {
      input: 'students = [1,1,0,0], sandwiches = [0,1,0,1]',
      output: '0',
      explanation: 'All students can eat.',
    },
    {
      input: 'students = [1,1,1,0,0,1], sandwiches = [1,0,0,0,1,1]',
      output: '3',
      explanation: '3 students unable to eat.',
    },
  ],
  hints: [
    'Count the number of students who prefer each type.',
    'Process sandwiches in order; if no student wants the current top, stop.',
    `\`\`\`js
function countStudents(students, sandwiches) {
  const cnt=[0,0];
  for(const s of students) cnt[s]++;
  for(const s of sandwiches){if(cnt[s]===0)return cnt[1-s];cnt[s]--;}
  return 0;
}\`\`\``,
  ],
  functionName: 'countStudents',
  params: ['students', 'sandwiches'],
  starterCode: {
    javascript: 'function countStudents(students, sandwiches) {\n  \n}\n',
    python: 'def countStudents(students, sandwiches):\n    pass\n',
  },
  visibleTests: [
    { args: [[1, 1, 0, 0], [0, 1, 0, 1]], expected: 0 },
    { args: [[1, 1, 1, 0, 0, 1], [1, 0, 0, 0, 1, 1]], expected: 3 },
  ],
  hiddenTests: [
    { args: [[0], [0]], expected: 0 },
    { args: [[1], [0]], expected: 1 },
    { args: [[0, 0], [1, 1]], expected: 2 },
    { args: [[0, 1, 0, 1], [0, 0, 1, 1]], expected: 0 },
    { args: [[1, 0, 1, 0], [1, 1, 0, 0]], expected: 0 },
  ],
};
